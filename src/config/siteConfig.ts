import type { SocialIconKey } from "../icons/socialIcons";

export const siteConfig = {
  name: "Cerrajería Interior",
  phone: {
    raw: "+34123456789",
    formatted: "123 45 67 89",
    whatsapp: "34123456789",
  },
  email: "info@cerrajeriainterior.com",

  social: [
    {
      key: "facebook" as SocialIconKey,
      label: "Facebook",
      url: "https://www.facebook.com/cerratectarragona",
    },
    {
      key: "instagram" as SocialIconKey,
      label: "Instagram",
      url: "https://www.instagram.com/cerratectarragona",
    },
    {
      key: "x" as SocialIconKey,
      label: "X",
      url: "https://x.com/cerratec24h",
    },
  ],
};
