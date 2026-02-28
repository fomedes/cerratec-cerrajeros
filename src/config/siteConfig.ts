import type { SocialIconKey } from "../icons/socialIcons";

export const siteConfig = {
  name: "Cerrajero Camp",
  phone: {
    raw: "+34632862468",
    formatted: "632 86 24 68",
    whatsapp: "34632862468",
  },
  email: "info@cerrajerocamp.com",

  social: [
    {
      key: "facebook" as SocialIconKey,
      label: "Facebook",
      url: "https://www.facebook.com/cerrajerocamp",
    },
    {
      key: "instagram" as SocialIconKey,
      label: "Instagram",
      url: "https://www.instagram.com/cerrajerocamp",
    },
    {
      key: "x" as SocialIconKey,
      label: "X",
      url: "https://x.com/cerrajerocamp",
    },
  ],
};
