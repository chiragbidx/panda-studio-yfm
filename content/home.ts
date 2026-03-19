// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ... (type definitions remain unchanged) ...

// ─── Defaults ───────────────────────────────────────────────────────────────

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "Streaming",
    badgeOuter: "StreamForge for creators & teams",
    titleBefore: "Build Your Own",
    titleHighlight: "Streaming Platform",
    titleAfter: "",
    subtitle:
      "StreamForge lets you curate, host, and share video content with your audience or team, all under your own brand.",
    primaryCta: { label: "Get Started with StreamForge", href: "#pricing" },
    secondaryCta: { label: "See How It Works", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "StreamForge dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Built with trusted tools",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why StreamForge",
    heading: "Empower your streaming experience",
    description:
      "StreamForge gives you complete control over how you deliver, organize, and share video—no coding required.",
    items: [
      {
        icon: "Blocks",
        title: "Curate custom video libraries",
        description: "Easily upload and manage your own content—not just playlists, but true video libraries.",
      },
      {
        icon: "LineChart",
        title: "Share securely with your audience",
        description: "Limit access, create roles, and decide who sees what—internal teams or public viewers.",
      },
      {
        icon: "Wallet",
        title: "Organize content into playlists",
        description: "Arrange videos by topic or event, and enable viewers to follow along seamlessly.",
      },
      {
        icon: "Sparkle",
        title: "Track engagement with analytics",
        description: "See who’s watching, what’s trending, and how your content performs.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Features",
    heading: "Powerful streaming tools",
    subtitle:
      "Everything you need to launch your own branded streaming portal—ready to use, fully customizable.",
    items: [
      { icon: "TabletSmartphone", title: "Branded Video Libraries", description: "Your videos, your way. Host and organize unlimited HD videos for your audience." },
      { icon: "BadgeCheck", title: "Playlist Organization", description: "Group videos into playlists and organize your streaming workflow." },
      { icon: "Goal", title: "Secure Sharing", description: "Restrict access, invite members, or go public when you’re ready." },
      { icon: "PictureInPicture", title: "Engagement Analytics", description: "Understand viewer habits and optimize your content." },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "Services",
    heading: "What StreamForge provides",
    subtitle:
      "A practical platform enabling creators and teams to launch secure, flexible streaming experiences.",
    items: [
      { title: "Private Video Hosting", description: "Store and deliver your content with security and scalability.", pro: true },
      { title: "Playlist & Library Management", description: "Organize and categorize all your streaming videos.", pro: false },
      { title: "Viewership Analytics", description: "Gain insights into how viewers engage with your videos.", pro: false },
      { title: "Branded Dashboard", description: "Give your users a home for all things streaming under your brand.", pro: false },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Testimonials",
    heading: "Built for creators & organizations",
    reviews: [
      { image: "/demo-img.jpg", name: "Aarav Shah", role: "Founder, FinchFlow", comment: "StreamForge gave us the flexibility and control to launch a video portal for our global team.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Maya Patel", role: "Head of Content, OrbitDesk", comment: "Love the branding tools—makes our content feel truly ours.", rating: 4.8 },
      { image: "/demo-img.jpg", name: "Nikhil Rao", role: "CTO, TeamForge", comment: "Playlist features and analytics have changed the way we engage our audience.", rating: 4.9 },
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "Team",
    heading: "Meet the StreamForge team",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Founder", "Product Lead"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/chiragdodiya/" },
          { name: "Github", url: "https://github.com/chiragdodiya" },
        ],
      },
      // keep or update the other members as appropriate
    ],
  },

  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "Simple, creator-focused pricing",
    subtitle: "Start streaming and scale as you grow.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Starter",
        popular: false,
        price: 0,
        description: "Explore StreamForge’s full platform with your first team.",
        buttonText: "Start for free",
        benefits: ["Up to 3 teammates", "Branded video libraries", "Playlist creation", "Basic analytics"],
      },
      {
        title: "Growth",
        popular: true,
        price: 49,
        description: "For growing teams ready to share with a larger audience.",
        buttonText: "Start trial",
        benefits: ["Unlimited teammates", "Advanced analytics", "Custom playlist support", "Priority support"],
      },
      {
        title: "Enterprise",
        popular: false,
        price: 199,
        description: "Powerful controls and onboarding for large orgs & advanced creators.",
        buttonText: "Contact sales",
        benefits: ["Security review", "Self-hosting option", "Custom onboarding", "Dedicated support"],
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Get in touch with StreamForge",
    description:
      "Questions? Need help? Write to us at chirag@bidx.ai.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "Find us", value: "Remote-first" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email us", value: "chirag@bidx.ai" },
      hours: { label: "Hours", value: ["Monday - Friday", "9AM - 6PM"] },
    },
    formSubjects: ["Demo Request", "Support", "Feature Suggestion", "Other"],
    formSubmitLabel: "Send Inquiry",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "Frequently asked questions",
    items: [
      { question: "Is StreamForge easy to set up?", answer: "Yes. StreamForge gets you running in minutes, with no code or infrastructure work needed!" },
      { question: "Who owns the videos I upload?", answer: "You do—your content is fully yours and is only presented to the viewers you choose." },
      { question: "Can I group videos into playlists?", answer: "Absolutely! Playlists are a core feature to engage and organize." },
      { question: "Does StreamForge offer video analytics?", answer: "Yes, see who’s watching, engagement stats, and top-performing videos under Analytics." },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "StreamForge",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "chirag@bidx.ai", href: "mailto:chirag@bidx.ai" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com/chiragdodiya" },
        ],
      },
    ],
    copyright: "\u00a9 2026 StreamForge.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "StreamForge",
    routes: [
      { href: "/#features", label: "Features" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/demo-img.jpg", alt: "StreamForge preview" },
    features: [
      { title: "Curate custom video libraries", description: "Organize, manage, and share your own video content under your brand." },
      { title: "Share securely", description: "Control access, set roles, and deliver content to the right viewers." },
      { title: "Organize into playlists", description: "Group videos for courses, events, or topics." },
      { title: "Analytics", description: "Track who’s watching and how your content performs." },
    ],
    signInLabel: "Sign In",
    signUpLabel: "Create Account",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com/chiragdodiya", ariaLabel: "StreamForge GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;

// Keep this function export for backward compatibility with older imports.
// Primary consumers should import `homeContent` directly.
export function getHomeContent(): HomeContent {
  return homeContent;
}