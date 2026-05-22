import Link from "next/link"
import { MapPin, Phone, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[oklch(0.22_0_0)] text-[oklch(0.85_0.008_83)]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col leading-none mb-4">
              <span
                className="text-2xl font-normal text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Stem-Ross
              </span>
              <span className="text-[10px] tracking-[0.18em] uppercase text-[oklch(0.65_0.04_151)] mt-0.5">
                Weight Loss Center
              </span>
            </div>
            <p className="text-sm text-[oklch(0.65_0.008_83)] leading-relaxed">
              Physician-supervised weight loss programs in Baltimore, MD.
              Trusted by thousands since 1994.
            </p>
            <div className="mt-4 flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="h-4 w-4 text-[oklch(0.78_0.07_44)]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-1.5 text-xs text-[oklch(0.65_0.008_83)]">5.0 on Google</span>
            </div>
          </div>

          {/* Baltimore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[oklch(0.65_0.04_151)] mb-4">
              Baltimore Location
            </h3>
            <ul className="space-y-3 text-sm text-[oklch(0.65_0.008_83)]">
              <li className="flex gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[oklch(0.578_0.063_151)]" />
                <span>617 Stemmers Run Rd<br />Baltimore, MD 21221</span>
              </li>
              <li className="flex gap-2">
                <Phone size={14} className="mt-0.5 shrink-0 text-[oklch(0.578_0.063_151)]" />
                <a href="tel:4107803640" className="hover:text-white transition-colors">
                  (410) 780-3640
                </a>
              </li>
              <li className="flex gap-2">
                <Clock size={14} className="mt-0.5 shrink-0 text-[oklch(0.578_0.063_151)]" />
                <div>
                  <div>Mon: 11AM–2PM</div>
                  <div>Tue–Wed: 8:30AM–6:45PM</div>
                  <div>Thu: 3:30PM–6:30PM</div>
                  <div>Fri–Sat: Alternating</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Chester River */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[oklch(0.65_0.04_151)] mb-4">
              Chester River Location
            </h3>
            <ul className="space-y-3 text-sm text-[oklch(0.65_0.008_83)]">
              <li className="flex gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[oklch(0.578_0.063_151)]" />
                <span>Chestertown, MD</span>
              </li>
              <li className="flex gap-2">
                <Phone size={14} className="mt-0.5 shrink-0 text-[oklch(0.578_0.063_151)]" />
                <a href="tel:4107789215" className="hover:text-white transition-colors">
                  (410) 778-9215
                </a>
              </li>
              <li className="flex gap-2">
                <Clock size={14} className="mt-0.5 shrink-0 text-[oklch(0.578_0.063_151)]" />
                <span>Call for current hours</span>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[oklch(0.65_0.04_151)] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                ["Weight Loss Programs", "/services"],
                ["EvolveX Body Contouring", "/evolvex"],
                ["Pricing", "/pricing"],
                ["About Dr. Kfoury", "/about"],
                ["Patient Reviews", "/reviews"],
                ["Former Clients", "/former-clients"],
                ["Contact Us", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[oklch(0.65_0.008_83)] hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-[oklch(1_0_0/0.08)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[oklch(0.5_0.008_83)]">
          <p>
            © {new Date().getFullYear()} Stem-Ross Weight Loss Center. Est. 1994.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/admin" className="hover:text-white transition-colors">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
