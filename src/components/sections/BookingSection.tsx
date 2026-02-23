import ScrollReveal from "@/components/ScrollReveal";

export default function BookingSection() {
  return (
    <section id="booking" className="section section-booking">
      <div className="container">
        <div className="booking-header">
          <h2 className="section-title">
            BOOK A <span className="gradient-text">DISCOVERY SESSION</span>
          </h2>
          <p className="booking-description">
            Schedule a free 30-minute session to discuss your idea and explore
            what&apos;s possible.
          </p>
        </div>
        <div className="calendly-wrapper">
          <ScrollReveal>
            <div className="calendly-embed">
              <iframe
                src="https://calendly.com/omar-maikr/30min?hide_gdpr_banner=1&background_color=0a0a12&text_color=ffffff&primary_color=8b5cf6"
                width="100%"
                height="700"
                frameBorder="0"
                title="Schedule a Discovery Session"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
