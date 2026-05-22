import type { Metadata } from "next"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { Pill, Syringe, Droplets, Leaf, AlertCircle, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Weight Loss Programs",
  description:
    "Physician-supervised weight loss medications in Baltimore, MD — Semaglutide, Phentermine, Phendimetrazine, B12 injections, and more.",
}

const programs = [
  {
    icon: Syringe,
    name: "Semaglutide (GLP-1)",
    tagline: "The modern gold standard in weight loss",
    desc: "Semaglutide is the active ingredient in Ozempic® and Wegovy® — a weekly injectable that reduces appetite, slows digestion, and helps your body regulate blood sugar. Under our physician supervision, patients typically lose significant weight within the first few months.",
    points: [
      "Weekly subcutaneous injection",
      "Progressive dosing over 4 months",
      "Includes physician visits and bloodwork",
      "Shown to reduce body weight by 15–20% in clinical trials*",
    ],
    note: "* Results vary. Individual outcomes depend on adherence, diet, and lifestyle.",
    badge: "Most Popular",
    badgeColor: "bg-[oklch(0.619_0.114_44)] text-white",
  },
  {
    icon: Pill,
    name: "Phentermine",
    tagline: "Proven appetite suppression since 1994",
    desc: "Phentermine is a short-term appetite suppressant and one of the most studied weight loss medications. Combined with nutritional counseling and B12 injections at every visit, it has helped thousands of our patients lose weight safely.",
    points: [
      "Biweekly or monthly visits",
      "B12 injection included every visit",
      "Nutritional counseling + exercise guidance",
      "Body composition monitoring",
    ],
    badge: null,
    badgeColor: "",
  },
  {
    icon: Pill,
    name: "Phendimetrazine",
    tagline: "An effective alternative for qualifying patients",
    desc: "For patients who do not respond to or tolerate Phentermine, Phendimetrazine is a closely related controlled appetite suppressant. Your physician will evaluate which medication is appropriate for you at your initial consultation.",
    points: [
      "Schedule III controlled medication",
      "Physician-evaluated qualification",
      "Same monitoring and support as Phentermine programs",
    ],
    badge: null,
    badgeColor: "",
  },
  {
    icon: Droplets,
    name: "B12 & Lipo Shots",
    tagline: "Energy and metabolism support, every visit",
    desc: "Vitamin B12 injections are included with every follow-up visit. They support energy levels, neurological function, and can help counter fatigue common in calorie-restricted programs. Lipo shots combine B12 with fat-mobilizing compounds for additional metabolic support.",
    points: [
      "Included with all follow-up visits",
      "Lipo shots available as add-on",
      "Optional weekly weigh-in + B12 for $10",
    ],
    badge: null,
    badgeColor: "",
  },
  {
    icon: Leaf,
    name: "Chromium Supplement",
    tagline: "Blood sugar balance to reduce cravings",
    desc: "Chromium picolinate helps regulate insulin sensitivity and blood glucose, reducing the carbohydrate cravings that derail most weight loss efforts. It is included in our monthly visit programs.",
    points: [
      "Included with monthly visits",
      "Supports blood sugar regulation",
      "Reduces carb and sugar cravings",
    ],
    badge: null,
    badgeColor: "",
  },
]

export default function ServicesPage() {
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
            Our Programs
          </p>
          <h1
            className="mt-2 text-5xl text-white sm:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Weight Loss Programs
          </h1>
          <p className="mt-5 text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
            Every program is physician-supervised, personalized to you, and
            supported by ongoing check-ins and nutritional guidance. No gimmicks
            — just medically proven tools and a team that cares.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-[oklch(0.977_0.007_87)] py-20 px-6">
        <div className="mx-auto max-w-4xl space-y-10">
          {programs.map(({ icon: Icon, name, tagline, desc, points, note, badge, badgeColor }) => (
            <div
              key={name}
              className="rounded-3xl border border-[oklch(0.87_0.012_82)] bg-white p-8 shadow-[0_2px_12px_oklch(0.45_0.07_151/0.06)]"
            >
              <div className="flex flex-wrap items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[oklch(0.91_0.035_151)]">
                  <Icon size={22} className="text-[oklch(0.45_0.07_151)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-semibold text-[oklch(0.22_0_0)]">{name}</h2>
                    {badge && (
                      <span className={`rounded-full px-3 py-0.5 text-xs font-semibold ${badgeColor}`}>
                        {badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-[oklch(0.578_0.063_151)] mt-0.5">
                    {tagline}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-[oklch(0.45_0.01_83)] leading-relaxed">{desc}</p>
              <ul className="mt-5 space-y-2">
                {points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-[oklch(0.35_0.01_83)]">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[oklch(0.578_0.063_151)]" />
                    {pt}
                  </li>
                ))}
              </ul>
              {note && (
                <p className="mt-4 flex items-start gap-2 text-xs text-[oklch(0.65_0.008_83)]">
                  <AlertCircle size={13} className="mt-0.5 shrink-0" />
                  {note}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* EvolveX CTA */}
      <section className="bg-[oklch(0.945_0.008_83)] py-16 px-6">
        <div className="mx-auto max-w-3xl rounded-3xl bg-[oklch(0.42_0.07_151)] p-10 text-center botanical-bg">
          <p className="text-sm font-semibold uppercase tracking-widest text-[oklch(0.9_0.07_44)]">
            Also Available
          </p>
          <h2
            className="mt-2 text-3xl text-white sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            EvolveX Body Contouring
          </h2>
          <p className="mt-3 text-white/75">
            Non-invasive fat reduction, skin tightening, and muscle toning — no
            surgery, no downtime.
          </p>
          <Link
            href="/evolvex"
            className="mt-6 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-[oklch(0.45_0.07_151)] hover:bg-[oklch(0.977_0.007_87)] transition-colors"
          >
            Learn About EvolveX
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl text-[oklch(0.22_0_0)] sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to find your program?
          </h2>
          <p className="mt-3 text-[oklch(0.52_0.015_83)]">
            Your initial consultation includes a full assessment and your first
            medication supply.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[oklch(0.578_0.063_151)] px-8 py-3 text-sm font-semibold text-white hover:bg-[oklch(0.45_0.07_151)] transition-colors"
            >
              Book a Consultation
            </Link>
            <Link
              href="/pricing"
              className="rounded-full border border-[oklch(0.578_0.063_151)] px-8 py-3 text-sm font-semibold text-[oklch(0.578_0.063_151)] hover:bg-[oklch(0.578_0.063_151)] hover:text-white transition-colors"
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
