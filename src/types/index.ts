export type Language = "es" | "en";

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "mail" | "telegram";
  handle?: string;
}

export interface HeroContent {
  greeting: string;
  name: string;
  rolePrefix: string;
  roleDev: string;
  roleAnd: string;
  roleSec: string;
  statusBadge: string;
  ctaProjects: string;
  ctaContact: string;
}

export interface AboutPillar {
  title: string;
  description: string;
  icon: "code" | "shield" | "terminal";
}

export interface AboutContent {
  sectionTitle: string;
  subtitle: string;
  paragraphs: string[];
  pillars: AboutPillar[];
  skillsTitle: string;
  devSkills: string[];
  secSkills: string[];
}

export interface ContactContent {
  sectionTitle: string;
  subtitle: string;
  formNameLabel: string;
  formNamePlaceholder: string;
  formEmailLabel: string;
  formEmailPlaceholder: string;
  formMessageLabel: string;
  formMessagePlaceholder: string;
  formSubmitButton: string;
  formSendingButton: string;
  formSuccessMessage: string;
  formErrorMessage: string;
  directChannelsTitle: string;
}

export interface FooterContent {
  copyright: string;
  statusIndicator: string;
}

export interface SiteContent {
  navLinks: NavLink[];
  hero: HeroContent;
  about: AboutContent;
  contact: ContactContent;
  footer: FooterContent;
  socials: SocialLink[];
}
