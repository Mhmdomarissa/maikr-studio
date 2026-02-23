import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="section section-contact">
      <div className="container">
        <div className="contact-secondary">
          <ScrollReveal>
            <div className="contact-secondary-header">
              <h3 className="contact-secondary-title">Prefer Email?</h3>
              <p className="contact-secondary-text">
                If scheduling doesn&apos;t work for you, feel free to reach out
                directly.
              </p>
              <a href="mailto:omar@maikr.ai" className="email-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                omar@maikr.ai
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div className="contact-form-wrapper">
              <p className="form-intro">Or send us a message:</p>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
