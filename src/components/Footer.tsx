import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  links: { href: string; label: string }[];
}

export default function Footer({ links }: FooterProps) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Image
              src="/maikr_logo.png"
              alt="MAIKR Studio"
              width={140}
              height={140}
              className="footer-logo-img"
            />
            <p>Expert-Guided AI Development</p>
          </div>
          <div className="footer-links">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 MAIKR Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
