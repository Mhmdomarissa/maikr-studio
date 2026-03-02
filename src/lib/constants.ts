// Navigation
export const NAV_LINKS = [
  { href: "#why", label: "Why Us" },
  { href: "#how-it-works", label: "Our Approach" },
  { href: "#features", label: "What's Different" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#pricing", label: "Pricing" },
] as const;

export const FOOTER_LINKS = {
  product: [
    { href: "#why", label: "Why Us" },
    { href: "#how-it-works", label: "Our Approach" },
    { href: "#features", label: "What's Different" },
    { href: "/case-studies/alpha-cv", label: "Case Studies" },
  ],
  company: [
    { href: "#mission", label: "Mission" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
    { href: "#booking", label: "Book a Call" },
  ],
  social: [
    { href: "mailto:omar@maikr.ai", label: "Email" },
    { href: "https://calendly.com/omar-maikr/30min", label: "Book a Call" },
  ],
} as const;

// Stats
export const STATS = [
  { value: "90%", label: "Faster screening" },
  { value: "65%", label: "Faster hiring" },
  { value: "3×", label: "Candidate quality" },
  { value: "48h", label: "MVP delivery" },
] as const;

// Features
export const FEATURES = [
  {
    icon: "Zap",
    title: "AI + Human Expertise",
    description:
      "We combine the speed of AI with the deep understanding and experience that only human professionals can provide.",
    badge: "Core",
  },
  {
    icon: "Layers",
    title: "Beyond LLMs",
    description:
      "We leverage multiple types of AI — from language models to computer vision and agentic workflows — choosing the right tool for your needs.",
    badge: "Multi-modal",
  },
  {
    icon: "ShieldCheck",
    title: "Production-Ready Focus",
    description:
      "We don't just build prototypes. We create stable, secure, and scalable systems that work in real organizational environments.",
    badge: "Enterprise",
  },
  {
    icon: "Settings2",
    title: "Flexible Development",
    description:
      "We expect change as your product evolves and accommodate it throughout the development process.",
    badge: "Agile",
  },
  {
    icon: "Clock",
    title: "Realistic Expectations",
    description:
      "Building something reliable and stable takes time. We set clear expectations around timelines and costs from the start.",
    badge: "Transparent",
  },
  {
    icon: "HeartHandshake",
    title: "Long-Term Partnership",
    description:
      "We don't disappear after launch. We're here to help your solution grow and succeed over time.",
    badge: "Support",
  },
] as const;

// How It Works
export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Fast Prototyping",
    description:
      "We start with an intensive brainstorming session where our experts work with you to cut through the AI hype and validate your idea.",
    detail: "Deep research, feasibility analysis & working demo",
  },
  {
    step: "02",
    title: "Production Development",
    description:
      "This is where our expertise really makes a difference. We build production-ready systems that AI alone cannot create.",
    detail: "Enterprise-grade architecture, security & integrations",
  },
  {
    step: "03",
    title: "Enhancement & Support",
    description:
      "Once your product reaches users, we continue to support you with ongoing improvements and refinements.",
    detail: "Continuous improvements & long-term product support",
  },
] as const;

// Pricing
export const PRICING = [
  {
    name: "Prototype",
    price: "Custom",
    description: "Turn your idea into a validated working demo.",
    features: [
      "Discovery session",
      "Rapid prototype (3–5 days)",
      "Feasibility analysis",
      "Architecture blueprint",
      "1 revision round",
    ],
    cta: "Start with a call",
    ctaHref: "https://calendly.com/omar-maikr/30min",
    highlighted: false,
  },
  {
    name: "Production",
    price: "Custom",
    description: "A full, production-ready AI system built for your business.",
    features: [
      "Everything in Prototype",
      "Enterprise-grade architecture",
      "System integrations",
      "Security & compliance",
      "3 months of support",
      "Full source ownership",
    ],
    cta: "Book a discovery call",
    ctaHref: "https://calendly.com/omar-maikr/30min",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Retainer",
    price: "Custom",
    description: "Ongoing AI product development and enhancement.",
    features: [
      "Everything in Production",
      "Dedicated engineer",
      "Unlimited enhancements",
      "Priority support (24h SLA)",
      "Monthly strategy sessions",
    ],
    cta: "Let's talk",
    ctaHref: "https://calendly.com/omar-maikr/30min",
    highlighted: false,
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    quote:
      "MAIKR turned a vague idea into a working AI pipeline in under a week. What impressed us most was how they handled edge cases we hadn't even thought of.",
    author: "Sarah K.",
    role: "CTO, FinTech Startup",
    initials: "SK",
  },
  {
    quote:
      "Most AI agencies deliver a ChatGPT wrapper. MAIKR delivered a real system integrated into our stack with proper error handling and monitoring.",
    author: "Marcus L.",
    role: "VP Engineering, SaaS Co.",
    initials: "ML",
  },
  {
    quote:
      "The discovery session alone was worth it. They helped us realize we were solving the wrong problem — and pointed us to a much better solution.",
    author: "Aisha R.",
    role: "Founder, HR Tech",
    initials: "AR",
  },
] as const;

// FAQ
export const FAQ_ITEMS = [
  {
    question: "How is MAIKR different from a regular software agency?",
    answer:
      "Most agencies bolt AI onto pre-existing workflows. We start from AI-first thinking — choosing the right model type, architecture, and integration approach for your specific problem. We combine the speed of AI tooling with engineers who deeply understand production systems.",
  },
  {
    question: "Do I need a technical background to work with you?",
    answer:
      "Not at all. Our discovery sessions are designed for business owners and product leaders. We translate complex AI concepts into clear outcomes. You tell us what problem to solve; we figure out the best way to solve it.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A prototype can be ready in 3–5 days. A production-grade system typically takes 4–12 weeks depending on complexity and integrations. We set clear timelines in our project blueprint before any commitment.",
  },
  {
    question: "Who owns the code and IP?",
    answer:
      "You do. 100%. We transfer full source code ownership upon project completion. There are no platform lock-ins, no SaaS fees, no dependency on MAIKR to keep your system running.",
  },
  {
    question: "What if my requirements change mid-project?",
    answer:
      "We expect it. Our development process is built around flexibility. We use short sprints with regular check-ins so changes are incorporated naturally rather than becoming expensive scope creep.",
  },
  {
    question: "What types of AI systems do you build?",
    answer:
      "LLM-powered products (chatbots, document intelligence, code assistants), computer vision systems, agentic workflows, RAG pipelines, recommendation engines, and custom ML models. We choose the right tool for the job.",
  },
] as const;

export const CALENDLY_URL = "https://calendly.com/omar-maikr/30min";
export const CONTACT_EMAIL = "omar@maikr.ai";
export const WEB3FORMS_KEY = "f46de727-dffa-4fc9-b2b8-e6404a8f4bc1";
