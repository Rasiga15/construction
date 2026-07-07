export type ProjectCategory = 'Residential' | 'Commercial' | 'Interior' | 'Renovation';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: string;
  image: string;
  description: string;
  details: string;
  area: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  image: string;
  caption: string;
  category: ProjectCategory | 'Site';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceRequired: string;
  message: string;
}
