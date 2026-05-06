"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/lib/config";
import s from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav className={`${s.navbar} ${scrolled ? s.navbarScrolled : ""}`}>
        <div className={`container ${s.inner}`}>
          {/* Logo */}
          <Link href="/" className={s.logo} aria-label="Home">
            <div className={s.logoIcon}>R</div>
            <div className={s.logoText}>
              <span className={s.logoName}>{siteConfig.name}</span>
              <span className={s.logoSub}>Anorectal Specialist</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className={s.links}>
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className={s.dropdown}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={`${s.navLink} ${
                      link.children.some((c) => isActive(c.href))
                        ? s.navLinkActive
                        : ""
                    }`}
                    aria-expanded={dropdownOpen}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {link.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      style={{
                        transition: "transform 0.2s",
                        transform: dropdownOpen ? "rotate(180deg)" : "none",
                      }}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div className={s.dropdownMenu}>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`${s.dropdownItem} ${
                            isActive(child.href) ? s.dropdownItemActive : ""
                          }`}
                          onClick={() => setDropdownOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${s.navLink} ${
                    isActive(link.href) ? s.navLinkActive : ""
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <Link href="/contact" className={s.cta}>
            Book Appointment
          </Link>

          {/* Hamburger */}
          <button
            className={s.hamburger}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`${s.hamburgerLine} ${
                mobileOpen ? s.hamburgerLine1Open : ""
              }`}
            />
            <span
              className={`${s.hamburgerLine} ${
                mobileOpen ? s.hamburgerLine2Open : ""
              }`}
            />
            <span
              className={`${s.hamburgerLine} ${
                mobileOpen ? s.hamburgerLine3Open : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className={s.mobileOverlay}
          onClick={() => setMobileOpen(false)}
        >
          <div
            className={s.mobileMenu}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={s.mobileHeader}>
              <span className={s.mobileHeaderName}>{siteConfig.name}</span>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className={s.mobileClose}
              >
                ✕
              </button>
            </div>
            <div className={s.mobileLinks}>
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <span className={s.mobileGroupLabel}>
                      {link.label}
                    </span>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`${s.mobileLink} ${s.mobileLinkSub} ${
                          isActive(child.href) ? s.mobileLinkActive : ""
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${s.mobileLink} ${
                      isActive(link.href) ? s.mobileLinkActive : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
            <Link
              href="/contact"
              className={s.mobileCta}
              onClick={() => setMobileOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
