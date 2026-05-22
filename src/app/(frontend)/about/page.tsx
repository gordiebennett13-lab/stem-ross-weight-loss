import type { Metadata } from "next"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { Heart, Award, Users, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "About Dr. Kfoury & Our Team",
  description:
    "Learn about Stem-Ross Weight Loss Center, founded by Dr. Emil Kfoury in 1994. Our small, caring team has helped thousands of Maryland patients lose weight and keep it off.",
}

export default function AboutPage() {
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
            Our Story
          </p>
          <h1
            className="mt-2 text-5xl text-white sm:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            About Stem-Ross
          </h1>
          <p className="mt-5 text-white/75 text-lg">
            Trusted weight loss care in Maryland for over 30 years.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            {/* Quote card */}
            <div className="rounded-3xl bg-[oklch(0.42_0.07_151)] p-10 text-white botanical-bg">
              <p
                className="text-5xl font-normal text-[oklch(0.87_0.025_151)] leading-none"
                style={{ fontFamily: "var(--font-display)" }}
              >
                &ldquo;
              </p>
              <blockquote
                className="text-2xl leading-snug text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                We treat every patient the way we&apos;d want a family member to
                be treated.
              </blockquote>
              <div className="mt-6 border-t border-white/20 pt-6">
                <p className="font-semibold text-white">Dr. Emil Kfoury</p>
                <p className="text-sm text-white/60">Founder, Stem-Ross Weight Loss Center</p>
                <p className="text-sm text-white/50">In practice since 1994</p>
              </div>
            </div>

            {/* Text */}
            <div>
              <h2
                className="text-4xl text-[oklch(0.22_0_0)] sm:text-5xl leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Three decades of
                <br />
                <span className="text-[oklch(0.578_0.063_151)]">real results</span>
              </h2>
              <p className="mt-5 text-[oklch(0.45_0.01_83)] leading-relaxed">
                Stem-Ross Weight Loss Center was founded by Dr. Emil Kfoury in
                Baltimore in 1994 — when most weight loss programs were still
                guesswork. Dr. Kfoury believed in a medically rigorous approach:
                physician supervision, regular check-ins, medication when
                appropriate, and genuine counseling.
              </p>
              <p className="mt-4 text-[oklch(0.45_0.01_83)] leading-relaxed">
                That philosophy hasn&apos;t changed. Today, we&apos;ve helped
                thousands of Maryland patients reach their goal weight and stay
                there — many of whom have been coming back for years.
              </p>
              <p className="mt-4 text-[oklch(0.45_0.01_83)] leading-relaxed">
                In 1997 we opened our second location on the Chester River in
                Chestertown, MD, bringing the same care and expertise to the
                Eastern Shore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[oklch(0.945_0.008_83)] py-24 px-6 botanical-bg">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2
              className="text-4xl text-[oklch(0.22_0_0)] sm:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              How we work
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Heart,
                title: "Genuine Care",
                desc: "Our staff knows your name. We celebrate every pound lost and every goal reached — because we know how hard you worked for it.",
              },
              {
                icon: Award,
                title: "Medical Rigor",
                desc: "Everything we prescribe is physician-evaluated and monitored. Your safety is always the first consideration.",
              },
              {
                icon: Users,
                title: "Personal Accountability",
                desc: "Regular weigh-ins, check-ins, and plan adjustments keep you on track — and give you a team to lean on.",
              },
              {
                icon: MapPin,
                title: "Local & Accessible",
                desc: "Two Maryland locations with flexible hours so you can get the care you need without disrupting your life.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="card-warm rounded-2xl bg-white p-7 transition-all duration-250"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[oklch(0.91_0.035_151)]">
                  <Icon size={20} className="text-[oklch(0.45_0.07_151)]" />
                </div>
                <h3 className="text-lg font-semibold text-[oklch(0.22_0_0)]">{title}</h3>
                <p className="mt-2 text-sm text-[oklch(0.52_0.015_83)] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2
              className="text-4xl text-[oklch(0.22_0_0)] sm:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our team
            </h2>
            <p className="mt-3 text-[oklch(0.52_0.015_83)]">
              A small, dedicated group who genuinely care about your success.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                name: "Dr. Emil Kfoury",
                title: "Founder & Physician",
                bio: "Founded Stem-Ross in 1994 with a commitment to medically supervised weight loss that has helped thousands of Maryland patients over 30+ years.",
              },
              {
                name: "Annie",
                title: "Staff Member",
                bio: "A warm, knowledgeable member of our Baltimore team recognized by patients for her caring approach and expertise.",
              },
              {
                name: "Ashley & Terry",
                title: "Staff Members",
                bio: "Dedicated members of our team who have helped patients achieve remarkable results including 58 lbs lost and lifelong friendships with the clinic.",
              },
            ].map(({ name, title, bio }) => (
              <div
                key={name}
                className="card-warm rounded-2xl bg-[oklch(0.977_0.007_87)] p-7 transition-all duration-250"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[oklch(0.578_0.063_151)]">
                  <span
                    className="text-xl font-normal text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {name[0]}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[oklch(0.22_0_0)]">{name}</h3>
                <p className="text-sm text-[oklch(0.578_0.063_151)] font-medium">{title}</p>
                <p className="mt-2 text-sm text-[oklch(0.52_0.015_83)] leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-[oklch(0.945_0.008_83)] py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <h2
            className="text-3xl text-[oklch(0.22_0_0)] mb-8 text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Two locations, one team
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                name: "Baltimore Location",
                addr: "617 Stemmers Run Rd\nBaltimore, MD 21221",
                phone: "(410) 780-3640",
                since: "Est. 1994",
              },
              {
                name: "Chester River Location",
                addr: "Chestertown, MD",
                phone: "(410) 778-9215",
                since: "Est. 1997",
              },
            ].map(({ name, addr, phone, since }) => (
              <div
                key={name}
                className="rounded-2xl bg-white border border-[oklch(0.87_0.012_82)] p-7"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-[oklch(0.22_0_0)]">{name}</h3>
                  <span className="text-xs text-[oklch(0.578_0.063_151)] font-medium">{since}</span>
                </div>
                <p className="mt-2 text-sm text-[oklch(0.52_0.015_83)] whitespace-pre-line">{addr}</p>
                <a
                  href={`tel:${phone.replace(/\D/g, "")}`}
                  className="mt-2 block text-sm font-medium text-[oklch(0.578_0.063_151)] hover:text-[oklch(0.45_0.07_151)] transition-colors"
                >
                  {phone}
                </a>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-[oklch(0.578_0.063_151)] px-8 py-3 text-sm font-semibold text-white hover:bg-[oklch(0.45_0.07_151)] transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
