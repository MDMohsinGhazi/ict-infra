export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

export interface StatItem {
  id: string;
  label: string;
  metric: string;
  subtext: string;
  highlight?: boolean;
}

export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  code?: string;
  href?: string;
  featured?: boolean;
  badge?: string;
  ctaText?: string;
}

export interface ValuePillarItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ClientItem {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
  iconColorClass: string;
}

export interface QuoteFormData {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  serviceCategory: string;
  projectScope: string;
}
