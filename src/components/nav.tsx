"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

const navLinks = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Weight Loss Medications", href: "/services" },
      { label: "EvolveX Body Contouring", href: "/evolvex" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
]

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[oklch(0.977_0.007_87/0.96)] backdrop-blur-md shadow-[0_1px_0_oklch(0.87_0.012_82)]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span
            className="text-xl font-normal text-[oklch(0.45_0.07_151)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Stem-Ross
          </span>
          <span className="text-[10px] tracking-[0.18em] uppercase text-[oklch(0.52_0.015_83)] group-hover:text-[oklch(0.578_0.063_151)] transition-colors">
            Weight Loss Center
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.children ? (
              <li key={link.href} className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
                  className="flex items-center gap-1 text-sm font-medium text-[oklch(0.35_0.01_83)] hover:text-[oklch(0.578_0.063_151)] transition-colors"
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {servicesOpen && (
                  <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 rounded-xl bg-[oklch(0.992_0.004_83)] border border-[oklch(0.87_0.012_82)] shadow-lg py-2">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-[oklch(0.35_0.01_83)] hover:bg-[oklch(0.945_0.008_83)] hover:text-[oklch(0.578_0.063_151)] transition-colors"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-[oklch(0.35_0.01_83)] hover:text-[oklch(0.578_0.063_151)] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:4107803640"
            className="text-sm font-medium text-[oklch(0.578_0.063_151)] hover:text-[oklch(0.45_0.07_151)] transition-colors"
          >
            (410) 780-3640
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-[oklch(0.578_0.063_151)] px-5 py-2 text-sm font-semibold text-white hover:bg-[oklch(0.45_0.07_151)] transition-colors"
          >
            Book a Visit
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[oklch(0.35_0.01_83)]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[oklch(0.87_0.012_82)] bg-[oklch(0.977_0.007_87)] px-6 py-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-medium text-[oklch(0.22_0_0)] hover:text-[oklch(0.578_0.063_151)] transition-colors"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <ul className="mt-2 ml-4 flex flex-col gap-2">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block text-sm text-[oklch(0.52_0.015_83)] hover:text-[oklch(0.578_0.063_151)] transition-colors"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="tel:4107803640"
              className="text-center text-sm font-medium text-[oklch(0.578_0.063_151)]"
            >
              (410) 780-3640
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="rounded-full bg-[oklch(0.578_0.063_151)] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Book a Visit
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
