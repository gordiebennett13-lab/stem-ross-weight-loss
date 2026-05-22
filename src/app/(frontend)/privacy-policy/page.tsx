import type { Metadata } from "next"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Stem-Ross Weight Loss Center website.",
}

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Nav />

      <section className="pt-32 pb-6 px-6 bg-[oklch(0.977_0.007_87)]">
        <div className="mx-auto max-w-3xl">
          <h1
            className="text-4xl text-[oklch(0.22_0_0)] sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-[oklch(0.65_0.008_83)]">Last updated: May 2026</p>
        </div>
      </section>

      <section className="bg-[oklch(0.977_0.007_87)] px-6 pb-20">
        <div className="mx-auto max-w-3xl prose prose-sm prose-neutral">
          <div className="rounded-2xl bg-white border border-[oklch(0.87_0.012_82)] p-8 space-y-6 text-sm text-[oklch(0.45_0.01_83)] leading-relaxed">

            <div>
              <h2 className="text-lg font-semibold text-[oklch(0.22_0_0)] mb-2">1. Information We Collect</h2>
              <p>
                We collect information you provide when contacting us through our website forms,
                including your name, email address, and phone number. We do not collect or store
                health or medical information through our website.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[oklch(0.22_0_0)] mb-2">2. How We Use Your Information</h2>
              <p>
                We use your contact information solely to respond to your inquiry and schedule
                appointments. We do not sell, rent, or share your personal information with
                third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[oklch(0.22_0_0)] mb-2">3. Analytics and Tracking</h2>
              <p>
                This website may use Google Analytics and Meta Pixel to understand how visitors
                use the site. These tools collect anonymized data such as pages visited and
                session duration. We do not send health-related data to these tools.
              </p>
              <p className="mt-2">
                You can opt out of Google Analytics by installing the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[oklch(0.578_0.063_151)] underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[oklch(0.22_0_0)] mb-2">4. Cookies</h2>
              <p>
                Our website uses cookies to improve your browsing experience and to enable
                analytics features. By using our site, you consent to the use of cookies.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[oklch(0.22_0_0)] mb-2">5. Data Security</h2>
              <p>
                We implement reasonable safeguards to protect your contact information.
                However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[oklch(0.22_0_0)] mb-2">6. HIPAA Notice</h2>
              <p>
                This website is informational only. Protected health information (PHI) is
                handled exclusively through our in-office intake processes, which are
                HIPAA-compliant. Please do not submit health details through this website form.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[oklch(0.22_0_0)] mb-2">7. Contact</h2>
              <p>
                Questions about this policy? Contact us at 617 Stemmers Run Rd, Baltimore,
                MD 21221 or call{" "}
                <a href="tel:4107803640" className="text-[oklch(0.578_0.063_151)]">
                  (410) 780-3640
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
