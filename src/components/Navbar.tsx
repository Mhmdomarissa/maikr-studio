"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  links: { href: string; label: string }[];
  ctaLink?: { href: string; label: string };
  homeHref?: string;
}

export default function Navbar({
  links,
  ctaLink,
  homeHref = "/",
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(e.target as Node)
      ) {
        closeMenu();
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [closeMenu]);

  return (
    <nav
      ref={navRef}
      className={`navbar${scrolled ? " scrolled" : ""}`}
    >
      <div className="nav-container">
        <Link href={homeHref} className="logo">
          <Image
            src="/maikr_logo.png"
            alt="MAIKR Studio"
            width={240}
            height={240}
            className="logo-img"
            priority
          />
        </Link>

        <ul className={`nav-links${menuOpen ? " active" : ""}`}>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={closeMenu}>
                {link.label}
              </Link>
            </li>
          ))}
          {ctaLink && (
            <li>
              <Link
                href={ctaLink.href}
                className="nav-cta"
                onClick={closeMenu}
              >
                {ctaLink.label}
              </Link>
            </li>
          )}
        </ul>

        <button
          ref={menuBtnRef}
          className={`mobile-menu-btn${menuOpen ? " active" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
