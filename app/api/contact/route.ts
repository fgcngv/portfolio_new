// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// type RequestBody = {
//   email: string;
//   message: string;
//   name?: string;
//   subject?: string;
// };

// async function createTransporter() {
//   const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, NODE_ENV } = process.env;

//   if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
//     return nodemailer.createTransport({
//       host: SMTP_HOST,
//       port: Number(SMTP_PORT || 587),
//       secure: Number(SMTP_PORT) === 465, // true for 465 (SSL), false for 587 (STARTTLS)
//       auth: {
//         user: SMTP_USER,
//         pass: SMTP_PASS,
//       },
//       // 👇 Option 1 fix: allow self-signed or intercepted TLS certs (dev only)
//       tls: {
//         rejectUnauthorized: NODE_ENV === "production" ? true : false,
//       },
//     });
//   }

//   // Dev fallback: Ethereal test account
//   const testAccount = await nodemailer.createTestAccount();
//   return nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     auth: {
//       user: testAccount.user,
//       pass: testAccount.pass,
//     },
//   });
// }

// export async function POST(req: Request) {
//   try {
//     const body: RequestBody = await req.json();

//     // Basic validation
//     if (!body.email || !body.message) {
//       return NextResponse.json({ error: "Missing fields" }, { status: 400 });
//     }

//     const from = body.email.slice(0, 254);
//     const message = body.message.slice(0, 5000);
//     const name = body.name ? body.name.slice(0, 100) : "Website Visitor";
//     const subject = body.subject || `Message from your portfolio — ${name}`;

//     const transporter = await createTransporter();

//     const mailOptions = {
//       from: `"${name}" <${from}>`,
//       to: process.env.SMTP_USER, // your inbox
//       replyTo: from,
//       subject,
//       text: `Message from: ${from}\n\n${message}`,
//       html: `<p><strong>From:</strong> ${from}</p>
//              <p><strong>Name:</strong> ${name}</p>
//              <hr/>
//              <p>${message.replace(/\n/g, "<br/>")}</p>`,
//     };

//     const info = await transporter.sendMail(mailOptions);

//     const previewUrl = nodemailer.getTestMessageUrl(info) || null;

//     return NextResponse.json({ ok: true, previewUrl });
//   } catch (err: unknown) {
//     console.error("Email send error:", err);
//     return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
//   }
// }







import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.email || !body.message) {
      return NextResponse.json(
        { ok: false, error: "Missing email or message" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: body.email,
      to: process.env.SMTP_USER,
      subject: `Portfolio message from ${body.name || "User"}`,
      text: body.message,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("API ERROR:", err);

    return NextResponse.json(
      {
        ok: false,
        error: err?.message || "Unknown server error",
      },
      { status: 500 }
    );
  }
}