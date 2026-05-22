import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 },
      )
    }

    // TODO: Forward to email or CRM. For now, log + return success so the
    // form can redirect to /thank-you. Wire up Resend/Nodemailer before launch.
    console.log("Contact form submission:", { name, email, phone, message })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Server error." }, { status: 500 })
  }
}
