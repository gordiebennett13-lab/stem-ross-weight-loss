"use client"

import { useState } from "react"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { CheckCircle2, CreditCard, Wallet, Receipt } from "lucide-react"

const baltimorePricing = {
  phentermine: [
    {
      name: "Initial Consultation",
      price: "$135",
      includes: [
        "Body composition analysis",
        "Blood pressure check",
        "Optional bloodwork",
        "B12 injection",
        "Educational materials",
        "Nutritional counseling",
        "Multivitamins",
        "2 weeks of Phentermine",
      ],
    },
    {
      name: "Biweekly Follow-up",
      price: "$67",
      includes: [
        "Weigh-in",
        "B12 injection",
        "Medical consultation",
        "14 appetite suppressant pills",
        "Exercise recommendations",
      ],
    },
    {
      name: "Monthly Visit",
      price: "$82",
      includes: [
        "Weigh-in",
        "B12 injection",
        "Medical consultation",
        "28 appetite suppressant pills",
        "Chromium supplement",
      ],
    },
    {
      name: "Optional Weekly Weigh-in + B12",
      price: "$10",
      includes: ["Weekly weigh-in", "B12 injection"],
    },
  ],
  semaglutide: [
    {
      name: "Initial Semaglutide Consultation",
      price: "$280",
      includes: [
        "Full assessment",
        "Doctor consultation",
        "B12 injection",
        "Educational packet",
        "4 weekly 0.25mg Semaglutide injections",
      ],
    },
    {
      name: "Month 2 Follow-up",
      price: "$292",
      includes: [
        "Doctor visit",
        "B12 injection",
        "4 weekly 0.5mg Semaglutide injections",
      ],
    },
    {
      name: "Month 3 Follow-up",
      price: "$382",
      includes: [
        "Doctor visit",
        "Bloodwork",
        "B12 injection",
        "4 weekly 0.75mg Semaglutide injections",
      ],
    },
    {
      name: "Month 4 Follow-up",
      price: "$452",
      includes: [
        "Doctor visit",
        "B12 injection",
        "4 weekly 1mg Semaglutide injections",
      ],
    },
    {
      name: "Bloodwork after 1mg Semaglutide",
      price: "$15",
      includes: ["Routine bloodwork panel"],
    },
  ],
}

const chesterRiverPricing = {
  phentermine: [
    {
      name: "Initial Consultation",
      price: "$150",
      includes: [
        "Full assessment",
        "1 month supply of Phentermine",
        "Chromium supplement",
        "Nutritional guidance",
      ],
    },
    {
      name: "Monthly Visit",
      price: "$80",
      includes: [
        "Weigh-in",
        "B12 injection",
        "Medical visit",
        "28 appetite suppressant pills",
      ],
    },
  ],
  semaglutide: [
    {
      name: "Month 2 Follow-up",
      price: "$293",
      includes: [
        "Doctor visit",
        "B12 injection",
        "4 weekly 0.5mg Semaglutide injections",
      ],
    },
    {
      name: "Month 3 Follow-up",
      price: "$383",
      includes: [
        "Doctor visit",
        "Bloodwork",
        "B12 injection",
        "4 weekly 0.75mg Semaglutide injections",
      ],
    },
    {
      name: "Month 4 Follow-up",
      price: "$453",
      includes: [
        "Doctor visit",
        "B12 injection",
        "4 weekly 1mg Semaglutide injections",
      ],
    },
  ],
}

type PricingCard = {
  name: string
  price: string
  includes: string[]
}

function PricingSection({
  title,
  items,
}: {
  title: string
  items: PricingCard[]
}) {
  return (
    <div>
      <h3
        className="text-2xl font-normal text-[oklch(0.22_0_0)] mb-6"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h3>
      <div className="grid gap-5 sm:grid-cols-2">
        {items.map(({ name, price, includes }) => (
          <div
            key={name}
            className="rounded-2xl border border-[oklch(0.87_0.012_82)] bg-white p-6 shadow-[0_1px_6px_oklch(0.45_0.07_151/0.05)]"
          >
            <div className="flex items-start justify-between gap-4">
              <h4 className="font-semibold text-[oklch(0.22_0_0)]">{name}</h4>
              <span
                className="text-2xl font-normal shrink-0 text-[oklch(0.578_0.063_151)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {price}
              </span>
            </div>
            <ul className="mt-4 space-y-1.5">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[oklch(0.45_0.01_83)]">
                  <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[oklch(0.578_0.063_151)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function PricingPage() {
  const [location, setLocation] = useState<"baltimore" | "chester">("baltimore")
  const pricing = location === "baltimore" ? baltimorePricing : chesterRiverPricing

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
            Transparent Pricing
          </p>
          <h1
            className="mt-2 text-5xl text-white sm:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our Pricing
          </h1>
          <p className="mt-5 text-white/75 text-lg">
            No hidden fees. No surprises. All-inclusive visit pricing that
            covers your medication, injections, and counseling.
          </p>
        </div>
      </section>

      <section className="bg-[oklch(0.977_0.007_87)] py-20 px-6">
        <div className="mx-auto max-w-5xl">

          {/* Location toggle */}
          <div className="mb-12 flex justify-center">
            <div className="rounded-full bg-[oklch(0.909_0.011_84)] p-1.5 flex gap-1">
              <button
                onClick={() => setLocation("baltimore")}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                  location === "baltimore"
                    ? "bg-[oklch(0.578_0.063_151)] text-white shadow"
                    : "text-[oklch(0.52_0.015_83)] hover:text-[oklch(0.22_0_0)]"
                }`}
              >
                Baltimore
              </button>
              <button
                onClick={() => setLocation("chester")}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                  location === "chester"
                    ? "bg-[oklch(0.578_0.063_151)] text-white shadow"
                    : "text-[oklch(0.52_0.015_83)] hover:text-[oklch(0.22_0_0)]"
                }`}
              >
                Chester River
              </button>
            </div>
          </div>

          <div className="space-y-12">
            <PricingSection
              title="Phentermine Program"
              items={pricing.phentermine}
            />
            <PricingSection
              title="Semaglutide (GLP-1) Program"
              items={pricing.semaglutide}
            />
          </div>

          {/* Disclaimer */}
          <p className="mt-8 text-xs text-[oklch(0.65_0.008_83)] text-center">
            Prices are subject to change. Individual results may vary. Please
            call us to confirm current pricing before your visit.
          </p>

          {/* Payment methods */}
          <div className="mt-12 rounded-3xl bg-white border border-[oklch(0.87_0.012_82)] p-8">
            <h3 className="text-xl font-semibold text-[oklch(0.22_0_0)] mb-6">
              Payment Methods
            </h3>
            <div className="flex flex-wrap gap-6">
              {[
                { icon: Wallet, label: "Cash" },
                { icon: CreditCard, label: "Credit Card" },
                { icon: Receipt, label: "HSA / Flex Spending" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[oklch(0.91_0.035_151)]">
                    <Icon size={16} className="text-[oklch(0.45_0.07_151)]" />
                  </div>
                  <span className="text-sm font-medium text-[oklch(0.35_0.01_83)]">{label}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-[oklch(0.52_0.015_83)]">
              We do not bill insurance directly, but HSA and flexible spending
              accounts are accepted.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <h2
              className="text-3xl text-[oklch(0.22_0_0)] sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to get started?
            </h2>
            <p className="mt-3 text-[oklch(0.52_0.015_83)]">
              Book your initial consultation and take the first step.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-full bg-[oklch(0.578_0.063_151)] px-10 py-3.5 text-sm font-semibold text-white hover:bg-[oklch(0.45_0.07_151)] transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
