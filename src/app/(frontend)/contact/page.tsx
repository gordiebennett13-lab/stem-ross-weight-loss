import type { Metadata } from "next"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { MapPin, Phone, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Stem-Ross Weight Loss Center in Baltimore, MD. Two locations — Baltimore and Chestertown. Call or send a message to book your consultation.",
}

const hoursData = [
  { day: "Monday", appt: "11AM–2PM", office: "10AM–2PM" },
  { day: "Tuesday", appt: "8:30AM–11:45AM, 3:30–6:45PM", office: "8AM–7PM" },
  { day: "Wednesday", appt: "8:30AM–11:45AM, 3:30–6:45PM", office: "8AM–7PM" },
  { day: "Thursday", appt: "3:30PM–6:30PM (alt: 9:30AM–12PM)", office: "Every other: 10AM–7PM" },
  { day: "Friday", appt: "Alternating: 9:30AM–12PM", office: "Alternating: 9AM–1PM" },
  { day: "Saturday", appt: "Alternating: 8:30AM–11:30AM", office: "Alternating: 8:30AM–11:30AM" },
  { day: "Sunday", appt: "Closed", office: "Closed" },
]

export default function ContactPage() {
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
            We&apos;re Here for You
          </p>
          <h1
            className="mt-2 text-5xl text-white sm:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Contact Us
          </h1>
          <p className="mt-5 text-white/75 text-lg">
            Call, fill out the form, or stop by. We&apos;ll get back to you
            promptly to schedule your visit.
          </p>
        </div>
      </section>

      <section className="bg-[oklch(0.977_0.007_87)] py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">

            {/* Contact form */}
            <div>
              <h2
                className="text-3xl text-[oklch(0.22_0_0)] mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Send us a message
              </h2>
              <p className="text-sm text-[oklch(0.52_0.015_83)] mb-6">
                We&apos;ll reach out within one business day to confirm your
                appointment.
              </p>
              <div className="rounded-3xl bg-white border border-[oklch(0.87_0.012_82)] p-8 shadow-[0_2px_12px_oklch(0.45_0.07_151/0.06)]">
                <ContactForm />
              </div>
            </div>

            {/* Locations + hours */}
            <div className="space-y-8">
              {/* Baltimore */}
              <div className="rounded-3xl bg-white border border-[oklch(0.87_0.012_82)] p-7">
                <h3
                  className="text-xl font-normal text-[oklch(0.22_0_0)] mb-5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Baltimore Location
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-[oklch(0.578_0.063_151)]" />
                    <div>
                      <p className="text-sm text-[oklch(0.35_0.01_83)]">617 Stemmers Run Rd</p>
                      <p className="text-sm text-[oklch(0.35_0.01_83)]">Baltimore, MD 21221</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Phone size={18} className="mt-0.5 shrink-0 text-[oklch(0.578_0.063_151)]" />
                    <a
                      href="tel:4107803640"
                      className="text-sm font-medium text-[oklch(0.578_0.063_151)] hover:text-[oklch(0.45_0.07_151)] transition-colors"
                    >
                      (410) 780-3640
                    </a>
                  </li>
                </ul>
              </div>

              {/* Chester River */}
              <div className="rounded-3xl bg-white border border-[oklch(0.87_0.012_82)] p-7">
                <h3
                  className="text-xl font-normal text-[oklch(0.22_0_0)] mb-5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Chester River Location
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-[oklch(0.578_0.063_151)]" />
                    <p className="text-sm text-[oklch(0.35_0.01_83)]">Chestertown, MD</p>
                  </li>
                  <li className="flex gap-3">
                    <Phone size={18} className="mt-0.5 shrink-0 text-[oklch(0.578_0.063_151)]" />
                    <a
                      href="tel:4107789215"
                      className="text-sm font-medium text-[oklch(0.578_0.063_151)] hover:text-[oklch(0.45_0.07_151)] transition-colors"
                    >
                      (410) 778-9215
                    </a>
                  </li>
                </ul>
              </div>

              {/* Hours — Baltimore */}
              <div className="rounded-3xl bg-white border border-[oklch(0.87_0.012_82)] p-7">
                <div className="flex items-center gap-2 mb-5">
                  <Clock size={18} className="text-[oklch(0.578_0.063_151)]" />
                  <h3
                    className="text-xl font-normal text-[oklch(0.22_0_0)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Baltimore Hours
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-xs uppercase tracking-wider text-[oklch(0.65_0.008_83)] border-b border-[oklch(0.87_0.012_82)]">
                        <th className="text-left pb-2 pr-4">Day</th>
                        <th className="text-left pb-2 pr-4">Appointments</th>
                        <th className="text-left pb-2">Office</th>
                      </tr>
                    </thead>
                    <tbody>
                      {hoursData.map(({ day, appt, office }) => (
                        <tr key={day} className="border-b border-[oklch(0.87_0.012_82)] last:border-0">
                          <td className="py-2.5 pr-4 font-medium text-[oklch(0.35_0.01_83)]">
                            {day}
                          </td>
                          <td
                            className={`py-2.5 pr-4 ${
                              appt === "Closed"
                                ? "text-[oklch(0.65_0.008_83)]"
                                : "text-[oklch(0.45_0.01_83)]"
                            }`}
                          >
                            {appt}
                          </td>
                          <td
                            className={`py-2.5 ${
                              office === "Closed"
                                ? "text-[oklch(0.65_0.008_83)]"
                                : "text-[oklch(0.45_0.01_83)]"
                            }`}
                          >
                            {office}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-xs text-[oklch(0.65_0.008_83)]">
                  Some Thursdays, Fridays, and Saturdays alternate — call to confirm your appointment time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
