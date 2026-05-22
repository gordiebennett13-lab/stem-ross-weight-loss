import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col">
      <Nav />

      <section className="flex flex-1 items-center justify-center py-32 px-6">
        <div className="mx-auto max-w-lg text-center">
          <p
            className="text-9xl font-normal text-[oklch(0.87_0.025_151)] leading-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            404
          </p>
          <h1
            className="mt-4 text-3xl text-[oklch(0.22_0_0)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Page not found
          </h1>
          <p className="mt-3 text-[oklch(0.52_0.015_83)]">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="rounded-full bg-[oklch(0.578_0.063_151)] px-8 py-3 text-sm font-semibold text-white hover:bg-[oklch(0.45_0.07_151)] transition-colors"
            >
              Go Home
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-[oklch(0.578_0.063_151)] px-8 py-3 text-sm font-semibold text-[oklch(0.578_0.063_151)] hover:bg-[oklch(0.578_0.063_151)] hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
