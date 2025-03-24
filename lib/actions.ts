"use server"

import { Resend } from "resend"

// Initialize Resend only if API key exists
const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactEmail(data: ContactFormData) {
  const { name, email, subject, message } = data

  try {
    // Check if Resend is properly initialized
    if (!resend) {
      console.error("Resend API key is missing or invalid")
      throw new Error("Email service is not configured properly")
    }

    // Send email using Resend
    const { data: emailData, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "mohammadmohid93@gmail.com",
      subject: `New Contact: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    if (error) {
      console.error("Resend API error:", error)
      throw new Error(error.message)
    }

    return { success: true, data: emailData }
  } catch (error) {
    console.error("Failed to send contact email:", error)
    throw new Error("Failed to send message. Please try again later.")
  }
}

