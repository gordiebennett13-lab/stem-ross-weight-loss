import type { Metadata } from "next"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { RotateCw, UserCheck, Phone, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Former Clients — Returning Patients",
  description:
    "Returning to Stem-Ross Weight Loss Center? Learn how to resume your program — different process depending on how long you've been away.",
}

export default function FormerClientsPage() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section
        className="pt-32 pb-20 px-6 botanical-bg"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.42 0.07 151) 0%, oklch(0.55 0.06 151) 100%)",
        }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[oklch(0.9_0.07_44)]">
            Welcome Back
          </p>
          <h1
            className="mt-2 text-5xl text-white sm:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Returning Patients
          </h1>
          <p className="mt-5 text-white/75 text-lg">
            It&apos;s never too late to get back on track. Here&apos;s how to
            resume your program.
          </p>
        </div>
      </section>

      <section className="bg-[oklch(0.977_0.007_87)] py-20 px-6">
        <div className="mx-auto max-w-3xl space-y-8">

          {/* Within 5 years */}
          <div className="rounded-3xl bg-white border border-[oklch(0.87_0.012_82)] p-8 shadow-[0_2px_12px_oklch(0.45_0.07_151/0.06)]">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[oklch(0.91_0.035_151)]">
                <RotateCw size={22} className="text-[oklch(0.45_0.07_151)]" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-[oklch(0.22_0_0)]">
                  Away less than 5 years?
                </h2>
                <p className="mt-3 text-[oklch(0.45_0.01_83)] leading-relaxed">
                  Good news — you can pick right back up. Simply call to schedule
                  a follow-up appointment. At your visit, we&apos;ll do a weigh-in,
                  B12 injection, medical consultation, and refill your medication.
                  No need to repeat your initial consultation.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="tel:4107803640"
                    className="flex items-center gap-2 rounded-full bg-[oklch(0.578_0.063_151)] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[oklch(0.45_0.07_151)] transition-colors"
                  >
                    <Phone size={14} />
                    Call Baltimore
                  </a>
                  <a
                    href="tel:4107789215"
                    className="flex items-center gap-2 rounded-full border border-[oklch(0.578_0.063_151)] px-6 py-2.5 text-sm font-semibold text-[oklch(0.578_0.063_151)] hover:bg-[oklch(0.578_0.063_151)] hover:text-white transition-colors"
                  >
                    <Phone size={14} />
                    Call Chester River
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 5+ years */}
          <div className="rounded-3xl bg-white border border-[oklch(0.87_0.012_82)] p-8 shadow-[0_2px_12px_oklch(0.45_0.07_151/0.06)]">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[oklch(0.95_0.04_44)]">
                <UserCheck size={22} className="text-[oklch(0.55_0.09_44)]" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-[oklch(0.22_0_0)]">
                  Away 5 years or more?
                </h2>
                <p className="mt-3 text-[oklch(0.45_0.01_83)] leading-relaxed">
                  If it has been 5 or more years since your last visit, you will
                  need a new initial consultation. This ensures your program is
                  still appropriate for your current health and goals, and gives
                  us a fresh baseline to work from.
                </p>
                <p className="mt-3 text-[oklch(0.45_0.01_83)] leading-relaxed">
                  Your initial consultation includes a body composition analysis,
                  blood pressure check, B12 injection, nutritional counseling, and
                  your first medication supply. It typically takes about an hour.
                </p>
                <div className="mt-5">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-[oklch(0.619_0.114_44)] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[oklch(0.55_0.10_44)] transition-colors"
                  >
                    Schedule a New Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Hours reminder */}
          <div className="rounded-3xl bg-[oklch(0.945_0.008_83)] border border-[oklch(0.87_0.012_82)] p-8">
            <div className="flex items-center gap-3 mb-4">
              <Clock size={20} className="text-[oklch(0.578_0.063_151)]" />
              <h3 className="text-lg font-semibold text-[oklch(0.22_0_0)]">
                Baltimore Office Hours
              </h3>
            </div>
            <div className="grid gap-1 text-sm text-[oklch(0.45_0.01_83)]">
              <div className="flex gap-4">
                <span className="w-24 font-medium">Monday</span>
                <span>11AM–2PM</span>
              </div>
              <div className="flex gap-4">
                <span className="w-24 font-medium">Tue–Wed</span>
                <span>8:30AM–11:45AM &amp; 3:30PM–6:45PM</span>
              </div>
              <div className="flex gap-4">
                <span className="w-24 font-medium">Thursday</span>
                <span>3:30PM–6:30PM (alternating 9:30AM–12PM)</span>
              </div>
              <div className="flex gap-4">
                <span className="w-24 font-medium">Fri–Sat</span>
                <span>Alternating — call to confirm</span>
              </div>
              <div className="flex gap-4">
                <span className="w-24 font-medium">Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
