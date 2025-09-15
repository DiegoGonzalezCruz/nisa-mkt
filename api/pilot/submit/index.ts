import type { Request, Response } from "express";
import crypto from "crypto";

const INTAKE_URL = process.env.NISA_APP_INTAKE_URL!;
const S2S_SECRET = process.env.NISA_S2S_SECRET!;

// Optional: small helper to email the applicant
async function sendReceiptEmail({ to, name }: { to: string; name: string }) {
  const key = process.env.SENDGRID_API_KEY;
  const templateId = process.env.SENDGRID_TEMPLATE_APP_RECEIVED;
  if (!key || !templateId) return;

  await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [
        { to: [{ email: to }], dynamic_template_data: { name } },
      ],
      from: { email: "no-reply@nisa.coach", name: "Nisa" },
      template_id: templateId,
    }),
  });
}

function signBody(body: string, ts: string) {
  const mac = crypto.createHmac("sha256", S2S_SECRET);
  mac.update(`${ts}.${body}`);
  return mac.digest("base64");
}

export default async function handler(req: Request, res: Response) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  try {
    const payload = req.body;

    // Minimal validation
    if (!payload?.email || !payload?.fullName) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Normalize → what your app API expects
    const data = {
      cohort: "pilot_fall_2025",
      email: payload.email,
      fullName: payload.fullName,
      city: payload.city ?? "",
      state: payload.state ?? "",
      schools: payload.schools ?? "",
      coachingCapacity: payload.coachingCapacity ?? {},
      subjectsAndGrades: payload.subjectsAndGrades ?? "",
      curricula: payload.curricula ?? {},
      teachingLabRelationship: payload.teachingLabRelationship ?? {},
      hearAboutNisa: payload.hearAboutNisa ?? "",
      whyInterested: payload.whyInterested ?? "",
    };

    const body = JSON.stringify(data);
    const ts = String(Math.floor(Date.now() / 1000));
    const signature = signBody(body, ts);

    // Server→server intake to app
    const intakeRes = await fetch(INTAKE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Nisa-Timestamp": ts,
        "X-Nisa-Signature": signature,
      },
      body,
    });

    if (!intakeRes.ok) {
      const t = await intakeRes.text().catch(() => "");
      return res.status(502).json({ error: `Intake failed: ${t}` });
    }

    // (Optional) send “we received your app” email
    sendReceiptEmail({ to: data.email, name: data.fullName }).catch((e) => {
      console.error("Failed to send receipt email:", e);
    });

    return res.status(200).json({ ok: true });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? "Unknown error" });
  }
}
