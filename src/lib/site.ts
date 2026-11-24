const validEmail = (value: string | undefined): string | null =>
  value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && !/[\r\n]/.test(value)
    ? value
    : null;

export const site = {
  name: process.env.NEXT_PUBLIC_SCHOOL_NAME || "ABM Strand — OLLCF",
  school:
    process.env.NEXT_PUBLIC_SCHOOL_NAME ||
    "Our Lady of Lourdes College Foundation",
  schoolShort: "OLLCF Senior High School",
  organization: "Association of Young Business Leaders (AYBL)",
  adviser: "Ms. Blossom L. Dionela",
  adviserRole: "AYBL Adviser · OLLCF Senior High School",
  email:
    validEmail(process.env.NEXT_PUBLIC_CONTACT_EMAIL) ||
    "information.ollcf@gmail.com",
  phone: process.env.NEXT_PUBLIC_SCHOOL_PHONE || "(054) 721 1368",
  mobile: "0948 180 1434",
  officeHours: "Monday – Friday, 8:00 AM – 5:00 PM",
  address:
    process.env.NEXT_PUBLIC_SCHOOL_ADDRESS ||
    "4WFV+H24, Vinzons Ave, Gahonon, Daet, 4600 Camarines Norte",
  locationShort: "Daet, Camarines Norte",
  tagline: "Quality · Excellence · Success",
  motto: "Here at OLLCF, Your Future is our Concern.",
  schoolUrl: process.env.NEXT_PUBLIC_SCHOOL_URL?.startsWith("https://")
    ? process.env.NEXT_PUBLIC_SCHOOL_URL
    : "https://www.facebook.com/share/18g81mh4y9/?mibextid=wwXIfr",
  socials: {
    ollcfFacebook: "https://www.facebook.com/share/18g81mh4y9/?mibextid=wwXIfr",
    shsFacebook: "https://www.facebook.com/share/1BrF27ubuq/?mibextid=wwXIfr",
    ayblFacebook: "https://www.facebook.com/share/1CDaHK4HhV/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/ollcfofficial/",
    instagramHandle: "@ollcfofficial",
  },
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
