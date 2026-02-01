import FacebookIcon from "./FacebookIcon.astro";
import InstagramIcon from "./InstagramIcon.astro";
import XIcon from "./XIcon.astro";

export const socialIcons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  x: XIcon,
}as const;

export type SocialIconKey = keyof typeof socialIcons;