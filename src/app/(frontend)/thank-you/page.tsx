import type { Metadata } from "next"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { CheckCircle2, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Thank You — Message Received",
  description: "We received your message and will be in touch soon.",
}

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Nav />

      <section className="flex flex-1 items-center justify-center py-32 px-6 botanical-bg bg-[oklch(0.977_0.007_87)]">
        <div className="mx-auto max-w-lg text-center">
          <div className="flex justify-center mb-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[oklch(0.91_0.035_151)]">
              <CheckCircle2 size={36} className="text-[oklch(0.578_0.063_151)]" />
            </div>
          </div>

          <h1
            className="text-4xl text-[oklch(0.22_0_0)] sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Message received!
          </h1>

          <p className="mt-4 text-[oklch(0.45_0.01_83)] leading-relaxed text-lg">
            Thank you for reaching out to Stem-Ross Weight Loss Center. We will
            contact you within one business day to confirm your appointment.
          </p>

          <div className="mt-8 rounded-2xl bg-white border border-[oklch(0.87_0.012_82)] p-6">
            <p className="text-sm font-semibold text-[oklch(0.35_0.01_83)] mb-3">
              Need to reach us sooner?
            </p>
            <a
              href="tel:4107803640"
              className="flex items-center justify-center gap-2 rounded-full bg-[oklch(0.578_0.063_151)] px-6 py-3 text-sm font-semibold text-white hover:bg-[oklch(0.45_0.07_151)] transition-colors"
            >
              <Phone size={16} />
              Call (410) 780-3640
            </a>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-[oklch(0.578_0.063_151)] hover:text-[oklch(0.45_0.07_151)] transition-colors"
            >
              ← Back to Home
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-[oklch(0.578_0.063_151)] hover:text-[oklch(0.45_0.07_151)] transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
