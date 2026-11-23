const validEmail = (value: string | undefined): string | null =>
  value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && !/[\r\n]/.test(value)
    ? value
    : null;

export const site = {
  name: process.env.NEXT_PUBLIC_SCHOOL_NAME || "ABM Strand",
  school: process.env.NEXT_PUBLIC_SCHOOL_NAME || "Westbridge Senior High",
  email:
    validEmail(process.env.NEXT_PUBLIC_CONTACT_EMAIL) ||
    "abm.admissions@westbridgeshs.edu.ph",
  phone: process.env.NEXT_PUBLIC_SCHOOL_PHONE || "(02) 8542-1940",
  officeHours: "Monday – Friday, 8:00 AM – 4:30 PM",
  coordinator: "Prof. Elena R. Navarro, CPA, MBA",
  coordinatorRole: "ABM Strand Coordinator · Senior High Department",
  address:
    process.env.NEXT_PUBLIC_SCHOOL_ADDRESS ||
    "428 Maplecrest Avenue, Brgy. San Isidro, Quezon City, Metro Manila 1109",
  schoolUrl: process.env.NEXT_PUBLIC_SCHOOL_URL?.startsWith("https://")
    ? process.env.NEXT_PUBLIC_SCHOOL_URL
    : "https://westbridgeshs.edu.ph",
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
