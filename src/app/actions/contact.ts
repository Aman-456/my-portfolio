"use server";

import { DATA } from "@/data/resume";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"name" | "email" | "message", string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Builds the contact-notification email. Uses table-based layout + inline
 * styles so it renders consistently across mail clients (Gmail, Outlook,
 * Apple Mail), which strip <style> blocks and don't support flex/grid.
 */
function renderContactEmail(name: string, email: string, message: string) {
  const siteHost = (() => {
    try {
      return new URL(DATA.url).host;
    } catch {
      return DATA.url;
    }
  })();
  const sentAt =
    new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "UTC",
    }).format(new Date()) + " UTC";

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const firstName = escapeHtml(name.split(" ")[0] || name);
  const messageHtml = escapeHtml(message).replace(/\r?\n/g, "<br />");
  const replyHref = `mailto:${safeEmail}?subject=${encodeURIComponent(
    "Re: your message"
  )}`;

  const text = [
    `New portfolio message from ${name}`,
    "",
    `Name:  ${name}`,
    `Email: ${email}`,
    "",
    "Message:",
    message,
    "",
    "—",
    `Sent from the contact form at ${siteHost} · ${sentAt}`,
  ].join("\n");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="color-scheme" content="light dark" />
<title>New portfolio message</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:#f4f4f5;">New portfolio message from ${safeName}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background-color:#ffffff;border:1px solid #e4e4e7;border-radius:12px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
          <tr>
            <td style="padding:28px 32px 0 32px;">
              <p style="margin:0;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#71717a;">Portfolio contact</p>
              <h1 style="margin:8px 0 0 0;font-size:20px;line-height:28px;font-weight:700;color:#09090b;">New message from ${safeName}</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 0 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="72" style="padding:10px 0;border-top:1px solid #f1f1f3;font-size:14px;color:#71717a;vertical-align:top;">Name</td>
                  <td style="padding:10px 0;border-top:1px solid #f1f1f3;font-size:14px;color:#09090b;font-weight:500;">${safeName}</td>
                </tr>
                <tr>
                  <td width="72" style="padding:10px 0;border-top:1px solid #f1f1f3;font-size:14px;color:#71717a;vertical-align:top;">Email</td>
                  <td style="padding:10px 0;border-top:1px solid #f1f1f3;font-size:14px;"><a href="mailto:${safeEmail}" style="color:#2563eb;text-decoration:none;">${safeEmail}</a></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 0 32px;">
              <p style="margin:0 0 8px 0;font-size:14px;color:#71717a;">Message</p>
              <div style="padding:16px 18px;background-color:#fafafa;border:1px solid #f1f1f3;border-radius:8px;font-size:15px;line-height:24px;color:#27272a;">${messageHtml}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 32px 0 32px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border-radius:8px;background-color:#09090b;">
                    <a href="${replyHref}" style="display:inline-block;padding:11px 22px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;">Reply to ${firstName}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 32px 28px 32px;">
              <p style="margin:0;border-top:1px solid #f1f1f3;padding-top:16px;font-size:12px;line-height:18px;color:#a1a1aa;">Sent from the contact form at <a href="${DATA.url}" style="color:#a1a1aa;text-decoration:underline;">${siteHost}</a> · ${sentAt}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { html, text };
}

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot: real users never fill a hidden field. Pretend success for bots.
  if (((formData.get("company") as string) ?? "").trim() !== "") {
    return { status: "success", message: "Thanks! Your message has been sent." };
  }

  const name = ((formData.get("name") as string) ?? "").trim();
  const email = ((formData.get("email") as string) ?? "").trim();
  const message = ((formData.get("message") as string) ?? "").trim();

  const errors: ContactState["errors"] = {};
  if (!name) errors.name = "Please enter your name.";
  else if (name.length > 100) errors.name = "Name is too long.";

  if (!email) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email.";

  if (!message) errors.message = "Please enter a message.";
  else if (message.length < 10)
    errors.message = "That message is a little short.";
  else if (message.length > 3000) errors.message = "That message is too long.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      status: "error",
      message:
        "Email isn't configured yet. Please reach out via the links below.",
    };
  }

  const to = process.env.CONTACT_TO_EMAIL || DATA.contact.email;
  const from =
    process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  const { html, text } = renderContactEmail(name, email, message);

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject: `New portfolio message from ${name}`,
        text,
        html,
      }),
      // Don't let a slow upstream hang the request indefinitely.
      cache: "no-store",
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Resend error:", res.status, detail);
      return {
        status: "error",
        message: "Something went wrong sending your message. Please try again.",
      };
    }

    return {
      status: "success",
      message: "Thanks! Your message has been sent — I'll be in touch soon.",
    };
  } catch (err) {
    console.error("Contact form network error:", err);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again.",
    };
  }
}
