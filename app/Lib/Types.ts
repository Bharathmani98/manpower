export type ServiceCategory = "events" | "catering" | "brand";
export type ButtonVariant = "primary" | "outline" | "ghost" | "white";
export type ButtonSize = "sm" | "md" | "lg";

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: ServiceCategory;
  title: string;
  tagline: string;
  description: string;
  roles: string[];
  features: string[];
  color: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
}

export interface Testimonial {
  quote: string;
  author: string;
  designation: string;
  initials: string;
  color: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  eventDate: string;
  headcount: string;
  message: string;
}

export interface TeamMember {
  name: string;
  role: string;
  exp: string;
  color: string;
}

export interface StatItem {
  number: string;
  label: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}