"use client";

import { FormEvent, useRef, useState } from "react";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        formRef.current?.reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  const buttonText = {
    idle: "Send Message",
    sending: "Sending...",
    success: "Message Sent!",
    error: "Error - Try Again",
  }[status];

  const buttonStyle: React.CSSProperties =
    status === "success"
      ? {
          background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
          borderColor: "#10b981",
          color: "#fff",
        }
      : status === "error"
      ? {
          background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
          borderColor: "#ef4444",
          color: "#fff",
        }
      : {};

  return (
    <form
      ref={formRef}
      className="contact-form contact-form-minimal"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="access_key" value="f46de727-dffa-4fc9-b2b8-e6404a8f4bc1" />
      <input type="hidden" name="subject" value="New inquiry from MAIKR Studio website" />
      <input type="hidden" name="from_name" value="MAIKR Studio Website" />
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required placeholder="Your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required placeholder="your@email.com" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          required
          placeholder="Briefly describe what you're looking to build..."
        />
      </div>

      <button
        type="submit"
        className="btn btn-secondary btn-full"
        disabled={status === "sending"}
        style={{
          ...buttonStyle,
          opacity: status === "sending" ? 0.7 : 1,
        }}
      >
        {buttonText}
      </button>
    </form>
  );
}
