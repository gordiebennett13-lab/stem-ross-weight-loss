"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export function ContactForm({ className }: { className?: string }) {
  const router = useRouter()
  const [state, setState] = useState<"idle" | "submitting" | "error">("idle")
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    _honeypot: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (form._honeypot) return

    setState("submitting")
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      })
      router.push("/thank-you")
    } catch {
      setState("error")
    }
  }

  const inputClass =
    "w-full rounded-xl border border-[oklch(0.87_0.012_82)] bg-white px-4 py-3 text-sm text-[oklch(0.22_0_0)] placeholder:text-[oklch(0.65_0.008_83)] focus:border-[oklch(0.578_0.063_151)] focus:ring-2 focus:ring-[oklch(0.578_0.063_151/0.15)] focus:outline-none transition"

  return (
    <form onSubmit={handleSubmit} className={className} noValidate>
      {/* honeypot */}
      <input
        type="text"
        name="_honeypot"
        value={form._honeypot}
        onChange={handleChange}
        className="sr-only"
        tabIndex={-1}
        aria-hidden
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[oklch(0.35_0.01_83)]">
            Full Name <span className="text-[oklch(0.619_0.114_44)]">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[oklch(0.35_0.01_83)]">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="(410) 555-0100"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="mb-1.5 block text-sm font-medium text-[oklch(0.35_0.01_83)]">
          Email Address <span className="text-[oklch(0.619_0.114_44)]">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="jane@example.com"
          className={inputClass}
        />
      </div>

      <div className="mt-4">
        <label className="mb-1.5 block text-sm font-medium text-[oklch(0.35_0.01_83)]">
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us a little about your goals or any questions you have…"
          className={inputClass}
        />
      </div>

      <p className="mt-3 text-xs text-[oklch(0.65_0.008_83)]">
        We only collect contact information — no health details — in this form.
      </p>

      {state === "error" && (
        <p className="mt-3 text-sm text-red-600">
          Something went wrong. Please call us at (410) 780-3640.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="mt-5 w-full rounded-full bg-[oklch(0.578_0.063_151)] py-3.5 text-sm font-semibold text-white hover:bg-[oklch(0.45_0.07_151)] disabled:opacity-60 transition-colors"
      >
        {state === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  )
}
