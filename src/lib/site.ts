const validEmail = (value: string | undefined): string | null =>
  value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && !/[\r\n]/.test(value)
    ? value
    : null;

export const site = {
  name: process.env.NEXT_PUBLIC_SCHOOL_NAME || "ABM Strand",
  school: process.env.NEXT_PUBLIC_SCHOOL_NAME || "Westbridge Senior High",
  email: validEmail(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
  address: process.env.NEXT_PUBLIC_SCHOOL_ADDRESS || null,
  schoolUrl: process.env.NEXT_PUBLIC_SCHOOL_URL?.startsWith("https://")
    ? process.env.NEXT_PUBLIC_SCHOOL_URL
    : null,
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About ABM" },
  { href: "/subjects/", label: "Subjects" },
  { href: "/careers/", label: "Careers" },
  { href: "/resources/", label: "Resources" },
  { href: "/events/", label: "Events" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/contact/", label: "Contact" },
];
