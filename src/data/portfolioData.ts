import type { PortfolioProject } from '../types';
import { PORTFOLIO_IMAGES } from '../utils/assets';

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'residence-01',
    projectNumber: '01 / 04',
    title: 'RESIDENCE 01',
    category: 'Private Residence',
    scope: 'Living / Dining',
    location: 'Private Location',
    description: 'An open-plan architectural sanctuary defined by plaster walls, floor-to-ceiling glass, and warm oak joinery.',
    heroImage: PORTFOLIO_IMAGES.residence04Hero,
    galleryImages: [
      PORTFOLIO_IMAGES.residence04Hero,
      PORTFOLIO_IMAGES.residence04Dining,
      PORTFOLIO_IMAGES.residence04Lounge,
    ],
  },
  {
    id: 'residence-02',
    projectNumber: '02 / 04',
    title: 'RESIDENCE 02',
    category: 'Private Residence',
    scope: 'Bedroom / Lounge',
    location: 'Private Location',
    description: 'A tranquil residential suite designed around ambient indirect illumination, raw linen drapery, and muted natural stone.',
    heroImage: PORTFOLIO_IMAGES.residence04Bedroom,
    galleryImages: [
      PORTFOLIO_IMAGES.residence04Bedroom,
      PORTFOLIO_IMAGES.residence04Lounge,
      PORTFOLIO_IMAGES.residence04Detail,
    ],
  },
  {
    id: 'residence-03',
    projectNumber: '03 / 04',
    title: 'RESIDENCE 03',
    category: 'Private Residence',
    scope: 'Full Interior Architecture',
    location: 'Private Location',
    description: 'An exploration of linear forms, dark oak joinery, and floor-to-ceiling drapery framing serene outdoor views.',
    heroImage: PORTFOLIO_IMAGES.residence04Dining,
    galleryImages: [
      PORTFOLIO_IMAGES.residence04Dining,
      PORTFOLIO_IMAGES.residence04Bedroom,
      PORTFOLIO_IMAGES.residence04Hero,
    ],
  },
  {
    id: 'residence-04',
    projectNumber: '04 / 04',
    title: 'RESIDENCE 04',
    category: 'Private Residence',
    scope: 'Living / Dining / Bedroom',
    location: 'Private Location',
    description: 'A comprehensive spatial transformation balancing architectural purity, warm ambient light, and natural material textures.',
    heroImage: PORTFOLIO_IMAGES.residence04Hero,
    galleryImages: [
      PORTFOLIO_IMAGES.residence04Hero,
      PORTFOLIO_IMAGES.residence04Dining,
      PORTFOLIO_IMAGES.residence04Bedroom,
      PORTFOLIO_IMAGES.residence04Lounge,
      PORTFOLIO_IMAGES.residence04Detail,
    ],
  },
];
