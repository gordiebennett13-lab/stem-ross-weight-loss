import type { Metadata } from "next"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for the Stem-Ross Weight Loss Center website.",
}

export default function TermsPage() {
  return (
    <main>
      <Nav />

      <section className="pt-32 pb-6 px-6 bg-[oklch(0.977_0.007_87)]">
        <div className="mx-auto max-w-3xl">
          <h1
            className="text-4xl text-[oklch(0.22_0_0)] sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Terms &amp; Conditions
          </h1>
          <p className="mt-3 text-sm text-[oklch(0.65_0.008_83)]">
            By accessing this website, you agree to the following terms.
          </p>
        </div>
      </section>

      <section className="bg-[oklch(0.977_0.007_87)] px-6 pb-20">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-white border border-[oklch(0.87_0.012_82)] p-8 space-y-6 text-sm text-[oklch(0.45_0.01_83)] leading-relaxed">

            <div>
              <h2 className="text-lg font-semibold text-[oklch(0.22_0_0)] mb-2">1. Intellectual Property</h2>
              <p>
                All content on this website — including text, graphics, logos, and images —
                is the property of Stem-Ross Weight Loss Center and/or its licensors and is
                protected by applicable intellectual property laws. You may not republish,
                sell, rent, sublicense, reproduce, duplicate, copy, or otherwise exploit
                material from this website without express written permission.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[oklch(0.22_0_0)] mb-2">2. User Comments and Feedback</h2>
              <p>
                Stem-Ross Weight Loss Center reserves the right to monitor, edit, or remove
                comments that are inappropriate, offensive, or violate these terms. By
                submitting a comment or review, you grant Stem-Ross a non-exclusive,
                royalty-free license to use, reproduce, and edit that content in any form.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[oklch(0.22_0_0)] mb-2">3. Hyperlinking</h2>
              <p>
                Government agencies, search engines, and news organizations may link to our
                website without prior approval. Other organizations may request permission
                to link to our website by contacting us directly. We reserve the right to
                request removal of any link at our discretion.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[oklch(0.22_0_0)] mb-2">4. Medical Disclaimer</h2>
              <p>
                The content on this website is for informational purposes only and does not
                constitute medical advice. Individual results vary. Consult a qualified
                healthcare provider before beginning any weight loss program. Results are
                not typical and depend on individual factors including diet, lifestyle, and
                adherence to the program.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[oklch(0.22_0_0)] mb-2">5. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Stem-Ross Weight Loss Center excludes
                all representations, warranties, and conditions relating to our website and
                its use. Nothing in this disclaimer will limit or exclude liability for death
                or personal injury caused by negligence, or for fraud or fraudulent
                misrepresentation.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[oklch(0.22_0_0)] mb-2">6. Cookies</h2>
              <p>
                We use cookies on this website. By continuing to use this website, you
                consent to our use of cookies in accordance with our Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[oklch(0.22_0_0)] mb-2">7. Governing Law</h2>
              <p>
                These terms are governed by the laws of the State of Maryland. Any disputes
                arising from use of this website shall be subject to the jurisdiction of
                courts in Baltimore County, Maryland.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
