import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message, website_url } = body;

    // 1. Honeypot check (anti-bot)
    if (website_url) {
      // Silently ignore bot submission
      return NextResponse.json({
        success: true,
        message: "Message received.",
      });
    }

    // 2. Strict Input Validation
    if (!name || typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100) {
      return NextResponse.json(
        { success: false, error: "Nombre inválido (entre 2 y 100 caracteres)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Dirección de correo electrónico inválida." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10 || message.trim().length > 2500) {
      return NextResponse.json(
        { success: false, error: "El mensaje debe contener entre 10 y 2500 caracteres." },
        { status: 400 }
      );
    }

    // 3. Sanitized log (or dispatch to external email provider like Resend if configured)
    const sanitizedSubmission = {
      name: name.trim().replace(/[<>]/g, ""),
      email: email.trim().toLowerCase(),
      message: message.trim().replace(/[<>]/g, ""),
      timestamp: new Date().toISOString(),
    };

    console.log("[CONTACT_FORM_SUBMISSION]", sanitizedSubmission);

    return NextResponse.json({
      success: true,
      message: "Transmisión recibida exitosamente.",
    });
  } catch (err) {
    console.error("[CONTACT_API_ERROR]", err);
    return NextResponse.json(
      { success: false, error: "Error interno del servidor al procesar el mensaje." },
      { status: 500 }
    );
  }
}
