import { PROFILE } from "@/data/profile";

export type ContactLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const EMAIL_LINK: ContactLink = {
  label: PROFILE.email,
  href: `mailto:${PROFILE.email}`,
};

export const PHONE_LINK: ContactLink = {
  label: PROFILE.phone,
  href: `tel:${PROFILE.phone.replace(/\s/g, "")}`,
};

export const LINKEDIN_LINK: ContactLink = {
  label: "LinkedIn",
  href: PROFILE.linkedin,
  external: true,
};

export const CONTACT_LINKS: ContactLink[] = [EMAIL_LINK, PHONE_LINK, LINKEDIN_LINK];

export const DIRECT_LINKS: ContactLink[] = [PHONE_LINK, LINKEDIN_LINK];
