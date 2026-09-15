import { Resend } from "resend";
import { NextResponse } from "next/server";


function buildHtml(fields: Record<string, string>, title: string): string {
  const rows = Object.entries(fields)
    .filter(([, v]) => v)
    .map(
      ([k, v]) => `
      <tr>
        <td style="padding:8px 12px;background:#f0f6ff;font-weight:600;color:#0e2e48;width:180px;border-radius:4px;">${k}</td>
        <td style="padding:8px 12px;color:#334155;">${v}</td>
      </tr>`
    )
    .join("");

  return `
    <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0;">
      <div style="background:linear-gradient(135deg,#4D96FF,#0e2e48);padding:28px 32px;">
        <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.3px;">${title}</h1>
        <p style="margin:6px 0 0;color:rgba(255,255,255,0.75);font-size:13px;">Submitted via FORGE website</p>
      </div>
      <div style="padding:28px 32px;">
        <table style="width:100%;border-collapse:separate;border-spacing:0 6px;">
          ${rows}
        </table>
      </div>
      <div style="padding:16px 32px;background:#f8fafc;border-top:1px solid #e2e8f0;font-size:12px;color:#94a3b8;">
        FORGE Ecosystem · winnovation.org
      </div>
    </div>`;
}

type FormType = "join" | "partner" | "download" | "mentor" | "collaborate" | "catalogue";

const formMeta: Record<FormType, { title: string; subject: (fields: Record<string, string>) => string }> = {
  join: {
    title: "New Community Join Request",
    subject: (f) => `New Join Request — ${f["Full Name"] || "Anonymous"}`,
  },
  partner: {
    title: "New Partnership Inquiry",
    subject: (f) => `New Partnership Inquiry — ${f["Organization"] || f["Full Name"] || "Anonymous"}`,
  },
  download: {
    title: "New Brochure Download Lead",
    subject: (f) => `New Brochure Download — ${f["Program"] || "Unknown Program"} (${f["Full Name"] || "Anonymous"})`,
  },
  mentor: {
    title: "New Mentor Application",
    subject: (f) => `New Mentor Application — ${f["Full Name"] || "Anonymous"}`,
  },
  collaborate: {
    title: "New Collaboration Enquiry",
    subject: (f) => `New Collaboration Enquiry — ${f["Stakeholder Type"] || "General"} (${f["Full Name"] || "Anonymous"})`,
  },
  catalogue: {
    title: "New Course Catalogue Download",
    subject: (f) => `New Catalogue Download — ${f["Full Name"] || "Anonymous"}`,
  },
};

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();
    const { formType, ...fields } = body as {
      formType: FormType;
      [k: string]: string;
    };

    const meta = formMeta[formType];
    const subject = meta.subject(fields);
    const html = buildHtml(fields, meta.title);

    const { error } = await resend.emails.send({
      from: "FORGE Website <onboarding@resend.dev>",
      to: "shiwansh@winnovation.org",
      replyTo: fields["Email"] || fields["Work Email"],
      subject,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
