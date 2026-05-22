import type { Metadata } from "next"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { Zap, Activity, Sparkles, CheckCircle2, Clock, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "EvolveX Body Contouring",
  description:
    "FDA-cleared non-invasive body contouring in Baltimore, MD. EvolveX combines fat reduction, skin tightening, and muscle toning — no surgery, no downtime.",
}

export default function EvolveXPage() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section
        className="pt-32 pb-20 px-6 botanical-bg"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.55 0.09 44) 0%, oklch(0.62 0.11 44) 60%, oklch(0.58 0.07 44) 100%)",
        }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/90">
            <Shield size={12} />
            FDA-Cleared Technology
          </span>
          <h1
            className="mt-5 text-5xl text-white sm:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            EvolveX
            <br />
            Body Contouring
          </h1>
          <p className="mt-5 text-xl text-white/80">
            Non-invasive. No downtime. Three transformations in one session.
          </p>
        </div>
      </section>

      {/* What is EvolveX */}
      <section className="bg-white py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[oklch(0.619_0.114_44)]">
                What Is It?
              </p>
              <h2
                className="mt-2 text-4xl text-[oklch(0.22_0_0)] sm:text-5xl leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                The 3-in-1 body
                <br />
                transformation system
              </h2>
              <p className="mt-5 text-[oklch(0.45_0.01_83)] leading-relaxed">
                EvolveX Transform by InMode is an FDA-cleared non-invasive device
                that combines three powerful technologies in one treatment session
                — so you get fat reduction, skin tightening, and muscle toning
                simultaneously, with zero surgery and zero downtime.
              </p>
              <p className="mt-4 text-[oklch(0.45_0.01_83)] leading-relaxed">
                Patients describe it as relaxing — even energizing — with a gentle
                warming sensation during treatment. After your session, you can
                walk straight out and back to your normal day.
              </p>
            </div>

            {/* 3 technologies */}
            <div className="space-y-5">
              {[
                {
                  icon: Zap,
                  title: "Fat Reduction",
                  color: "bg-[oklch(0.91_0.035_151)]",
                  iconColor: "text-[oklch(0.45_0.07_151)]",
                  desc: "Radiofrequency energy heats the fat layer to a precise temperature, damaging fat cells so they are naturally eliminated by your body over the following weeks.",
                },
                {
                  icon: Sparkles,
                  title: "Skin Tightening",
                  color: "bg-[oklch(0.95_0.04_44)]",
                  iconColor: "text-[oklch(0.55_0.09_44)]",
                  desc: "The same RF energy stimulates collagen and elastin production — the building blocks of firm, smooth skin — for a visibly tightened result as treatment continues.",
                },
                {
                  icon: Activity,
                  title: "Muscle Toning",
                  color: "bg-[oklch(0.93_0.03_151)]",
                  iconColor: "text-[oklch(0.578_0.063_151)]",
                  desc: "Electrical muscle stimulation creates rapid, deep contractions that mimic an intense workout — toning and strengthening muscles without you lifting a finger.",
                },
              ].map(({ icon: Icon, title, color, iconColor, desc }) => (
                <div key={title} className="flex gap-4 rounded-2xl border border-[oklch(0.87_0.012_82)] p-5">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${color}`}>
                    <Icon size={20} className={iconColor} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[oklch(0.22_0_0)]">{title}</h3>
                    <p className="mt-1 text-sm text-[oklch(0.52_0.015_83)] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment details */}
      <section className="bg-[oklch(0.945_0.008_83)] py-24 px-6 botanical-bg">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2
              className="text-4xl text-[oklch(0.22_0_0)] sm:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What to expect
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Clock, label: "Session Duration", value: "30–60 min" },
              { icon: Activity, label: "Sessions Needed", value: "3–6 sessions" },
              { icon: CheckCircle2, label: "Downtime", value: "None" },
              { icon: Shield, label: "FDA Status", value: "Cleared" },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="card-warm rounded-2xl bg-white p-7 text-center transition-all duration-250"
              >
                <Icon size={24} className="mx-auto mb-3 text-[oklch(0.578_0.063_151)]" />
                <p
                  className="text-3xl font-normal text-[oklch(0.22_0_0)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-[oklch(0.52_0.015_83)]">
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* Treatable areas */}
          <div className="mt-12 rounded-3xl bg-white p-8 shadow-[0_2px_12px_oklch(0.45_0.07_151/0.06)]">
            <h3 className="text-xl font-semibold text-[oklch(0.22_0_0)] mb-5">Treatable areas</h3>
            <div className="flex flex-wrap gap-3">
              {["Abdomen", "Thighs", "Arms", "Buttocks"].map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-[oklch(0.91_0.035_151)] px-5 py-2 text-sm font-medium text-[oklch(0.45_0.07_151)]"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm text-[oklch(0.52_0.015_83)] leading-relaxed">
              Sessions are spaced approximately one week apart. Results become
              visible over the weeks following treatment as fat cells are naturally
              eliminated and collagen remodels. Most patients achieve significant
              results within 3–6 sessions. Individual results may vary.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-16 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-4xl text-[oklch(0.87_0.025_151)]" style={{ fontFamily: "var(--font-display)" }}>
            &#8220;
          </p>
          <blockquote className="text-xl text-[oklch(0.35_0.01_83)] leading-relaxed" style={{ fontFamily: "var(--font-display)" }}>
            I had such a great experience getting stomach tightening treatments
            here. Annie, Ashley, and Terry are amazing! I&apos;ve seen visible
            abdominal definition from EvolveX.
          </blockquote>
          <p className="mt-4 text-sm font-semibold text-[oklch(0.578_0.063_151)]">Molly Roloff</p>
          <p className="text-xs text-[oklch(0.65_0.008_83)]">December 2025</p>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-6"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.619 0.114 44) 0%, oklch(0.55 0.10 44) 100%)",
        }}
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-4xl text-white sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to contour?
          </h2>
          <p className="mt-4 text-white/80">
            Call us or fill out the form to schedule your EvolveX consultation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-[oklch(0.45_0.09_44)] hover:bg-[oklch(0.977_0.007_87)] transition-colors"
            >
              Book a Consultation
            </Link>
            <a
              href="tel:4107803640"
              className="rounded-full border border-white/40 bg-white/10 px-8 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
            >
              (410) 780-3640
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
