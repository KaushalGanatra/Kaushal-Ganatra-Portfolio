export async function handler(event, context) {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: false, message: "Method Not Allowed" }),
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body || "{}");

    // Basic server-side validation
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ success: false, message: "Name, email, and message are required." }),
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ success: false, message: "Invalid email format." }),
      };
    }

    const apiKey = process.env.MAILGUN_API_KEY;
    const domain = process.env.MAILGUN_DOMAIN;
    // Default to the CV profile email if not overridden by an env var
    const toEmail = process.env.CONTACT_RECEIVER_EMAIL || "kaushal.d.ganatra@gmail.com";

    if (!apiKey || !domain) {
      console.error("Missing Mailgun environment variables configuration.");
      return {
        statusCode: 500,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          success: false,
          message: "Email service is not configured correctly on the backend.",
        }),
      };
    }

    // Prepare Mailgun API authorization header
    const auth = Buffer.from(`api:${apiKey}`).toString("base64");
    const mailgunUrl = `https://api.mailgun.net/v3/${domain}/messages`;

    // Construct form urlencoded payload for Mailgun Messages API
    const formData = new URLSearchParams();
    formData.append("from", `Portfolio <mailgun@${domain}>`);
    formData.append("to", toEmail);
    formData.append("subject", "New Contact Message");
    formData.append("text", `New message from: ${name} <${email}>\n\nMessage:\n${message}`);

    const response = await fetch(mailgunUrl, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    if (response.ok) {
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ success: true, message: "Message sent successfully!" }),
      };
    } else {
      const errorText = await response.text();
      console.error(`Mailgun response error: ${response.status} - ${errorText}`);
      return {
        statusCode: response.status,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ success: false, message: "Failed to send email via Mailgun." }),
      };
    }
  } catch (error) {
    console.error("Error in sendEmail handler:", error);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: false, message: "Internal server error." }),
    };
  }
}
