import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import {
  Pill,
  Syringe,
  Zap,
  Leaf,
  Sparkles,
  Droplets,
  ChevronDown,
  Phone,
  Star,
  CheckCircle2,
  Calendar,
  ClipboardList,
  TrendingUp,
} from "lucide-react"

const services = [
  {
    icon: Pill,
    name: "Phentermine",
    desc: "Proven appetite suppressant prescribed and monitored by our physicians for safe, effective weight loss.",
  },
  {
    icon: Pill,
    name: "Phendimetrazine",
    desc: "A controlled appetite suppressant for patients seeking an alternative to Phentermine.",
  },
  {
    icon: Syringe,
    name: "Semaglutide (GLP-1)",
    desc: "The modern GLP-1 weight loss injection — weekly doses with full physician supervision and bloodwork.",
  },
  {
    icon: Droplets,
    name: "B12 & Lipo Shots",
    desc: "Metabolism-boosting injections included with follow-up visits to support energy and fat metabolism.",
  },
  {
    icon: Leaf,
    name: "Chromium Supplement",
    desc: "Helps regulate blood sugar and reduce cravings as part of a comprehensive program.",
  },
  {
    icon: Zap,
    name: "EvolveX Body Contouring",
    desc: "FDA-cleared non-invasive treatment combining fat reduction, skin tightening, and muscle toning in one session.",
  },
]

const testimonials = [
  {
    name: "Kayla Talmadge",
    date: "January 14, 2026",
    quote:
      "I had my first visit with Stem Ross and was highly impressed. They are so sweet and had so many helpful weight loss tools and information.",
    stars: 5,
  },
  {
    name: "Molly Roloff",
    date: "December 29, 2025",
    quote:
      "I had such a great experience getting stomach tightening treatments here. Annie, Ashley, and Terry are amazing! I've seen visible abdominal definition from EvolveX.",
    stars: 5,
  },
  {
    name: "Howard Smith",
    date: "October 2, 2025",
    quote:
      "My wife Kimberly has been coming here for 3 years and has lost 58 pounds. The staff is always patient and accommodating — truly a family-friendly environment.",
    stars: 5,
  },
  {
    name: "Lisha Mrtn",
    date: "December 8, 2023",
    quote:
      "Very professional and friendly staff. Providers really care about your weight and overall health. Highly recommend.",
    stars: 5,
  },
  {
    name: "Catherine Clapp",
    date: "October 24, 2023",
    quote:
      "I've been coming for a few years and I'm almost at my weight loss goal. Everyone is so friendly — I plan to keep coming for maintenance.",
    stars: 5,
  },
  {
    name: "B M",
    date: "October 18, 2021",
    quote:
      "Great customer service, very professional. The doctors and staff really do care about helping you reach your goals.",
    stars: 5,
  },
]

const faqs = [
  {
    q: "What happens at my first visit?",
    a: "Your initial consultation includes a body composition analysis, blood pressure check, optional bloodwork, a B12 injection, nutritional counseling, educational materials, and a 2-week supply of medication. It typically takes about an hour.",
  },
  {
    q: "How much does the program cost?",
    a: "Initial consultations start at $135 (Phentermine) or $280 (Semaglutide) at our Baltimore location. Follow-up visits range from $67–$82/month. We accept cash, credit card, and HSA/flex spending accounts.",
  },
  {
    q: "Is Semaglutide the same as Ozempic or Wegovy?",
    a: "Yes — Semaglutide is the active ingredient in both Ozempic and Wegovy. We provide it under physician supervision with regular check-ins and bloodwork for safety.",
  },
  {
    q: "What is EvolveX Transform?",
    a: "EvolveX is an FDA-cleared, non-invasive body contouring system that combines RF fat reduction, skin tightening, and muscle toning. No downtime — you can resume normal activities immediately.",
  },
  {
    q: "Do I need insurance?",
    a: "We do not bill insurance directly, but we accept HSA/flex spending accounts. Many patients find the out-of-pocket cost compares favorably to alternatives.",
  },
  {
    q: "Can I return if I haven't been in a while?",
    a: "Yes. If it has been under 5 years, you can resume with a follow-up appointment. If it has been 5+ years, you'll need a new initial consultation to ensure the program is still appropriate for you.",
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Nav />

      {/* ─── HERO ─── */}
      <section className="relative isolate min-h-screen flex items-center overflow-hidden botanical-bg">
        {/* Background gradient */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.42 0.07 151) 0%, oklch(0.52 0.063 151) 35%, oklch(0.6 0.055 148) 65%, oklch(0.68 0.04 148) 100%)",
          }}
        />
        {/* Warm overlay */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[oklch(0.45_0.07_151/0.15)]" />

        <div className="mx-auto max-w-6xl px-6 pt-32 pb-24 sm:pt-40">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.85_0.07_44)]" />
              <span className="text-xs font-medium uppercase tracking-widest text-white/90">
                Baltimore, MD · Est. 1994
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-5xl text-white sm:text-6xl lg:text-7xl leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Lose weight.
              <br />
              <em className="not-italic text-[oklch(0.9_0.07_44)]">Keep it off.</em>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-white/80 leading-relaxed">
              Physician-supervised weight loss programs tailored to you —
              Semaglutide, Phentermine, and EvolveX body contouring at two
              convenient Maryland locations.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[oklch(0.45_0.07_151)] shadow-lg hover:bg-[oklch(0.977_0.007_87)] transition-colors"
              >
                Book a Consultation
              </Link>
              <Link
                href="/pricing"
                className="rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                View Pricing
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap gap-6">
              {[
                { num: "30+", label: "Years in Practice" },
                { num: "2", label: "Maryland Locations" },
                { num: "5★", label: "Google Rating" },
                { num: "HSA", label: "Accepted" },
              ].map(({ num, label }) => (
                <div key={label} className="flex flex-col">
                  <span
                    className="text-3xl font-normal text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {num}
                  </span>
                  <span className="text-xs tracking-wider uppercase text-white/60">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
          <span className="text-xs text-white tracking-widest uppercase">Scroll</span>
          <ChevronDown size={16} className="text-white animate-bounce" />
        </div>
      </section>

      {/* ─── SOCIAL PROOF BAR ─── */}
      <section className="bg-[oklch(0.45_0.07_151)] py-6 px-6">
        <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {[
            "Physician-Supervised Programs",
            "No Surgery Required",
            "HSA / FSA Accepted",
            "Two Maryland Locations",
            "Serving Baltimore Since 1994",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[oklch(0.9_0.07_44)] shrink-0" />
              <span className="text-sm font-medium text-white">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PROBLEM SECTION ─── */}
      <section className="bg-[oklch(0.977_0.007_87)] py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="text-3xl text-[oklch(0.22_0_0)] sm:text-4xl leading-snug"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Weight loss is hard alone.
            <br />
            <span className="text-[oklch(0.578_0.063_151)]">
              It doesn&apos;t have to be.
            </span>
          </h2>
          <p className="mt-5 text-[oklch(0.45_0.01_83)] leading-relaxed">
            Diets fail. Willpower runs out. Without a medical team in your corner
            — tracking your progress, adjusting your plan, celebrating your wins —
            most people give up before they get there. At Stem-Ross, we&apos;ve helped
            thousands of Maryland patients reach their goal weight and stay there.
          </p>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="bg-[oklch(0.945_0.008_83)] py-24 px-6 botanical-bg">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[oklch(0.619_0.114_44)]">
              Our Programs
            </p>
            <h2
              className="mt-2 text-4xl text-[oklch(0.22_0_0)] sm:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Every tool you need to succeed
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, name, desc }) => (
              <div
                key={name}
                className="card-warm rounded-2xl bg-white p-7 transition-all duration-250"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[oklch(0.91_0.035_151)]">
                  <Icon size={20} className="text-[oklch(0.45_0.07_151)]" />
                </div>
                <h3 className="text-lg font-semibold text-[oklch(0.22_0_0)]">{name}</h3>
                <p className="mt-2 text-sm text-[oklch(0.52_0.015_83)] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-block rounded-full border border-[oklch(0.578_0.063_151)] px-8 py-3 text-sm font-semibold text-[oklch(0.578_0.063_151)] hover:bg-[oklch(0.578_0.063_151)] hover:text-white transition-colors"
            >
              Learn About Each Program
            </Link>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-white py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[oklch(0.619_0.114_44)]">
              The Process
            </p>
            <h2
              className="mt-2 text-4xl text-[oklch(0.22_0_0)] sm:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Three steps to your goal weight
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                icon: Calendar,
                title: "Book Your Consultation",
                desc: "Call or contact us to schedule your initial visit. We&apos;ll confirm your appointment and let you know exactly what to bring.",
              },
              {
                step: "02",
                icon: ClipboardList,
                title: "Your First Visit",
                desc: "We&apos;ll do a body composition analysis, review your goals, and build a personalized plan — medications, schedule, and nutrition guidance.",
              },
              {
                step: "03",
                icon: TrendingUp,
                title: "Follow Your Plan",
                desc: "Regular check-ins keep you on track. We adjust your program as you progress, celebrating every milestone along the way.",
              },
            ].map(({ step, icon: Icon, title, desc }) => (
              <div key={step} className="relative">
                <div
                  className="mb-4 text-6xl font-normal leading-none text-[oklch(0.87_0.025_151)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step}
                </div>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[oklch(0.578_0.063_151)]">
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[oklch(0.22_0_0)]">{title}</h3>
                <p
                  className="mt-2 text-sm text-[oklch(0.52_0.015_83)] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: desc }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-[oklch(0.945_0.008_83)] py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[oklch(0.619_0.114_44)]">
              Patient Stories
            </p>
            <h2
              className="mt-2 text-4xl text-[oklch(0.22_0_0)] sm:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Real results, real people
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map(({ name, date, quote, stars }) => (
              <div
                key={name}
                className="card-warm rounded-2xl bg-white p-7 transition-all duration-250"
              >
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-[oklch(0.78_0.07_44)] text-[oklch(0.78_0.07_44)]"
                    />
                  ))}
                </div>
                <p className="text-sm text-[oklch(0.35_0.01_83)] leading-relaxed italic">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="mt-4 border-t border-[oklch(0.87_0.012_82)] pt-4">
                  <p className="text-sm font-semibold text-[oklch(0.22_0_0)]">{name}</p>
                  <p className="text-xs text-[oklch(0.65_0.008_83)]">{date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/reviews"
              className="inline-block rounded-full border border-[oklch(0.578_0.063_151)] px-8 py-3 text-sm font-semibold text-[oklch(0.578_0.063_151)] hover:bg-[oklch(0.578_0.063_151)] hover:text-white transition-colors"
            >
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="bg-white py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            {/* Text */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[oklch(0.619_0.114_44)]">
                About Us
              </p>
              <h2
                className="mt-2 text-4xl text-[oklch(0.22_0_0)] sm:text-5xl leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Maryland&apos;s trusted
                <br />
                weight loss practice
              </h2>
              <p className="mt-5 text-[oklch(0.45_0.01_83)] leading-relaxed">
                Founded by Dr. Emil Kfoury in 1994, Stem-Ross Weight Loss Center
                has helped thousands of patients across Maryland achieve lasting
                weight loss — not through fad diets or gimmicks, but through
                physician-supervised programs built around behavior modification,
                medication, and real accountability.
              </p>
              <p className="mt-4 text-[oklch(0.45_0.01_83)] leading-relaxed">
                With two convenient locations — Baltimore and Chestertown — our
                small, caring team gets to know every patient personally. Many of
                our patients have been with us for years, returning for
                maintenance after reaching their goals.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6">
                {[
                  { num: "1994", label: "Founded" },
                  { num: "2", label: "Locations" },
                  { num: "30+", label: "Years of Care" },
                ].map(({ num, label }) => (
                  <div key={label}>
                    <p
                      className="text-3xl font-normal text-[oklch(0.578_0.063_151)]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {num}
                    </p>
                    <p className="text-xs uppercase tracking-wider text-[oklch(0.52_0.015_83)]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="mt-8 inline-block rounded-full bg-[oklch(0.578_0.063_151)] px-8 py-3 text-sm font-semibold text-white hover:bg-[oklch(0.45_0.07_151)] transition-colors"
              >
                Meet Our Team
              </Link>
            </div>

            {/* Decorative card */}
            <div className="relative">
              <div className="rounded-3xl bg-[oklch(0.42_0.07_151)] p-10 text-white botanical-bg">
                <Sparkles size={28} className="text-[oklch(0.9_0.07_44)] mb-6" />
                <blockquote className="text-2xl leading-snug" style={{ fontFamily: "var(--font-display)" }}>
                  &ldquo;We treat every patient the way we&apos;d want a family
                  member to be treated.&rdquo;
                </blockquote>
                <div className="mt-6 border-t border-white/20 pt-6">
                  <p className="font-semibold text-white/90">Dr. Emil Kfoury</p>
                  <p className="text-sm text-white/60">Founder, Stem-Ross Weight Loss Center</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-[oklch(0.619_0.114_44/0.15)]" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── OFFER / CTA STRIP ─── */}
      <section
        className="py-20 px-6"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.619 0.114 44) 0%, oklch(0.55 0.10 44) 100%)",
        }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2
            className="text-4xl text-white sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to start?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Your initial consultation includes a full assessment, B12 injection,
            nutritional counseling, and your first medication supply.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-10 py-4 text-sm font-semibold text-[oklch(0.45_0.09_44)] shadow-lg hover:bg-[oklch(0.977_0.007_87)] transition-colors"
            >
              Book Your Consultation
            </Link>
            <a
              href="tel:4107803640"
              className="flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-10 py-4 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
            >
              <Phone size={16} />
              (410) 780-3640
            </a>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-[oklch(0.977_0.007_87)] py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[oklch(0.619_0.114_44)]">
              FAQs
            </p>
            <h2
              className="mt-2 text-4xl text-[oklch(0.22_0_0)] sm:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Common questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                className="group rounded-2xl border border-[oklch(0.87_0.012_82)] bg-white px-6 py-5 open:shadow-[0_2px_16px_oklch(0.45_0.07_151/0.07)]"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-[oklch(0.22_0_0)] list-none">
                  {q}
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-[oklch(0.578_0.063_151)] transition-transform group-open:rotate-180"
                  />
                </summary>
                <p className="mt-4 text-sm text-[oklch(0.45_0.01_83)] leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEAD FORM ─── */}
      <section id="book" className="bg-[oklch(0.42_0.07_151)] py-24 px-6 botanical-bg">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[oklch(0.9_0.07_44)]">
            Get Started
          </p>
          <h2
            className="mt-2 text-4xl text-white sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Book your visit today
          </h2>
          <p className="mt-4 text-white/70">
            Fill out the form and we&apos;ll get back to you promptly to confirm
            your appointment.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-lg rounded-3xl bg-white p-8 shadow-2xl">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}
