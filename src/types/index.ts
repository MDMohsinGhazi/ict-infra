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
  badge?: string;
  href?: string;
  actionText?: string;
  tagColorClass?: string;
}

export interface SectorItem {
  id: string;
  title: string;
  tag: string;
  tagColorClass?: string;
  description: string;
  imageUrl: string;
  chips: string[];
}

export interface PartnerItem {
  id: string;
  name: string;
  partnerType: string;
  description: string;
  icon: string;
  colorClass: string;
}

export interface AccreditationItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  colorClass: string;
}

export interface ValuePillarItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  badgeText: string;
  colorClass: string;
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
  projectLocation?: string;
  projectScope: string;
}
