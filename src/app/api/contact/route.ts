import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez fournir une adresse email valide"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Veuillez sélectionner un sujet"),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères"),
});

// Transporteur SMTP Gmail (App Password)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // SSL
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD, // App Password Gmail (ex: "zomp cwjy vfiq howw")
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = contactSchema.parse(body);

    // ── Email de notification reçu par l'entreprise ──────────────────────────
    await transporter.sendMail({
      from: `"Formulaire de contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // reçu sur la même adresse
      replyTo: validated.email, // répondre directement au client
      subject: `[Contact] ${validated.subject} — ${validated.name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden">
          <div style="background:#1d4ed8;padding:20px 24px">
            <h2 style="color:#fff;margin:0;font-size:18px">Nouveau message de contact</h2>
          </div>
          <div style="padding:24px;background:#fff">
            <table style="width:100%;border-collapse:collapse">
              <tr>
                <td style="padding:8px 12px 8px 0;color:#6b7280;font-size:13px;white-space:nowrap;vertical-align:top">Nom</td>
                <td style="padding:8px 0;color:#111827;font-size:13px;font-weight:600">${validated.name}</td>
              </tr>
              <tr style="background:#f9fafb">
                <td style="padding:8px 12px 8px 0;color:#6b7280;font-size:13px;white-space:nowrap;vertical-align:top">Email</td>
                <td style="padding:8px 0;color:#111827;font-size:13px;font-weight:600">
                  <a href="mailto:${validated.email}" style="color:#1d4ed8">${validated.email}</a>
                </td>
              </tr>
              ${
                validated.phone
                  ? `
              <tr>
                <td style="padding:8px 12px 8px 0;color:#6b7280;font-size:13px;white-space:nowrap;vertical-align:top">Téléphone</td>
                <td style="padding:8px 0;color:#111827;font-size:13px;font-weight:600">${validated.phone}</td>
              </tr>`
                  : ""
              }
              <tr style="background:#f9fafb">
                <td style="padding:8px 12px 8px 0;color:#6b7280;font-size:13px;white-space:nowrap;vertical-align:top">Sujet</td>
                <td style="padding:8px 0;color:#111827;font-size:13px;font-weight:600">${validated.subject}</td>
              </tr>
              <tr>
                <td style="padding:8px 12px 8px 0;color:#6b7280;font-size:13px;white-space:nowrap;vertical-align:top">Message</td>
                <td style="padding:8px 0;color:#111827;font-size:13px;white-space:pre-wrap">${validated.message}</td>
              </tr>
              <tr style="background:#f9fafb">
                <td style="padding:8px 12px 8px 0;color:#6b7280;font-size:13px;white-space:nowrap;vertical-align:top">Reçu le</td>
                <td style="padding:8px 0;color:#111827;font-size:13px">${new Date().toLocaleString("fr-FR", { timeZone: "Africa/Abidjan" })}</td>
              </tr>
            </table>
          </div>
          <div style="padding:16px 24px;background:#f3f4f6;text-align:center">
            <a href="mailto:${validated.email}" style="display:inline-block;background:#1d4ed8;color:#fff;padding:10px 20px;border-radius:6px;font-size:13px;font-weight:600;text-decoration:none">
              Répondre à ${validated.name}
            </a>
          </div>
        </div>
      `,
    });

    // ── Email de confirmation envoyé au client ───────────────────────────────
    await transporter.sendMail({
      from: `"Karamon Conseils SARLU" <${process.env.SMTP_USER}>`,
      to: validated.email,
      subject: "Nous avons bien reçu votre message",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden">
          <div style="background:#1d4ed8;padding:20px 24px">
            <h2 style="color:#fff;margin:0;font-size:18px">Karamon Conseils SARLU</h2>
          </div>
          <div style="padding:24px;background:#fff">
            <p style="color:#111827;font-size:14px;margin:0 0 16px">Bonjour <strong>${validated.name}</strong>,</p>
            <p style="color:#374151;font-size:14px;margin:0 0 16px">
              Nous avons bien reçu votre message concernant <strong>« ${validated.subject} »</strong> et nous vous en remercions.
            </p>
            <p style="color:#374151;font-size:14px;margin:0 0 16px">
              Notre équipe reviendra vers vous dans les plus brefs délais.
            </p>
            <div style="background:#f9fafb;border-left:4px solid #1d4ed8;padding:12px 16px;border-radius:0 6px 6px 0;margin:16px 0">
              <p style="color:#6b7280;font-size:12px;margin:0 0 4px">Votre message :</p>
              <p style="color:#111827;font-size:13px;margin:0;white-space:pre-wrap">${validated.message}</p>
            </div>
            <p style="color:#6b7280;font-size:13px;margin:16px 0 0">
              Cordialement,<br/>
              <strong style="color:#111827">L'équipe Karamon Conseils SARLU</strong>
            </p>
          </div>
          <div style="padding:12px 24px;background:#f3f4f6;text-align:center">
            <p style="color:#9ca3af;font-size:11px;margin:0">
              Cet email a été envoyé automatiquement, merci de ne pas y répondre directement.
            </p>
          </div>
        </div>
      `,
    });

    console.log(
      "📩 Message de contact envoyé par email — de :",
      validated.email,
    );

    return NextResponse.json(
      {
        success: true,
        message:
          "Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.",
      },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Données invalides",
          errors: error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Une erreur est survenue. Veuillez réessayer.",
      },
      { status: 500 },
    );
  }
}
