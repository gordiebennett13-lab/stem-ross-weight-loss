import type { Metadata } from "next"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { Star, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Patient Reviews",
  description:
    "Read real patient reviews for Stem-Ross Weight Loss Center in Baltimore, MD. See why patients trust us with their weight loss journey.",
}

const testimonials = [
  {
    name: "Kayla Talmadge",
    date: "January 14, 2026",
    quote:
      "I had my first visit with Stem Ross and was highly impressed. They are so sweet and had so many helpful weight loss tools and information available for me. The staff made me feel welcome from the moment I walked in.",
    stars: 5,
  },
  {
    name: "Molly Roloff",
    date: "December 29, 2025",
    quote:
      "I had such a great experience getting stomach tightening treatments here. Annie, Ashley, and Terry are amazing! I've seen visible abdominal definition from EvolveX and feel so much more confident.",
    stars: 5,
  },
  {
    name: "Howard Smith",
    date: "October 2, 2025",
    quote:
      "My wife Kimberly has been coming here for 3 years and has lost 58 pounds to date. The staff is always patient and accommodating with scheduling changes. It's truly a family-friendly environment that really cares about its patients.",
    stars: 5,
  },
  {
    name: "Lisha Mrtn",
    date: "December 8, 2023",
    quote:
      "Very professional and friendly staff. Providers really care about your weight and overall health. They take the time to listen and adjust your plan as needed. Highly recommend.",
    stars: 5,
  },
  {
    name: "Catherine Clapp",
    date: "October 24, 2023",
    quote:
      "I've been coming for a few years and I'm almost at my weight loss goal. Everyone is so friendly and encouraging — I plan to keep coming for maintenance visits. This place has changed my life.",
    stars: 5,
  },
  {
    name: "B M",
    date: "October 18, 2021",
    quote:
      "Great customer service, very professional. The doctors and staff really do care about helping you reach your goals. I always feel supported and never judged.",
    stars: 5,
  },
]

export default function ReviewsPage() {
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
          <div className="mb-4 flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={24} className="fill-[oklch(0.9_0.07_44)] text-[oklch(0.9_0.07_44)]" />
            ))}
          </div>
          <h1
            className="text-5xl text-white sm:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Patient Stories
          </h1>
          <p className="mt-4 text-white/75 text-lg">
            Real results from real people. Hear what our patients have to say.
          </p>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="bg-[oklch(0.977_0.007_87)] py-20 px-6">
        <div className="mx-auto max-w-6xl">
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
        </div>
      </section>

      {/* Leave a review CTA */}
      <section
        className="py-16 px-6"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.619 0.114 44) 0%, oklch(0.55 0.10 44) 100%)",
        }}
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl text-white sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Had a great experience?
          </h2>
          <p className="mt-3 text-white/80">
            We&apos;d love to hear from you. Share your story on Google and help
            other patients find the care they need.
          </p>
          <a
            href="https://www.google.com/maps/search/Stem-Ross+Weight+Loss+Baltimore"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-[oklch(0.45_0.09_44)] hover:bg-[oklch(0.977_0.007_87)] transition-colors"
          >
            Leave a Google Review
            <ExternalLink size={14} />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl text-[oklch(0.22_0_0)] sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to write your own success story?
          </h2>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-[oklch(0.578_0.063_151)] px-10 py-3.5 text-sm font-semibold text-white hover:bg-[oklch(0.45_0.07_151)] transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
