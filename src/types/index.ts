/**
 * Core Domain Types for Home Decoration Visual Experience
 */

export interface SiteConfig {
  brandName: string;
  tagline: string;
  heroHeadline: string;
  heroSubtext: string;
  primaryCTA: string;
}

export interface TransformationStage {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  imagePath: string;
  altText: string;
}

export interface MoodCategory {
  id: string;
  title: string;
  tagline: string;
  descriptors: string[];
  imagePath: string;
  altText: string;
}

export interface PortfolioProject {
  id: string;
  projectNumber: string;
  title: string;
  category: string;
  scope: string;
  location: string;
  description: string;
  heroImage: string;
  galleryImages: string[];
}

export interface DetailItem {
  id: string;
  title: string;
  material: string;
  description: string;
  imagePath: string;
  gridSpan?: string;
}
