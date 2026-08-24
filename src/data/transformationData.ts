import type { TransformationStage } from '../types';
import { TRANSFORMATION_IMAGES } from '../utils/assets';

export const transformationStages: TransformationStage[] = [
  {
    id: 'stage-01',
    number: '01',
    title: 'THE WALL',
    subtitle: 'Texture creates character',
    description: 'Surfaces, plaster, paint, and architectural textures lay the groundwork for spatial identity.',
    imagePath: TRANSFORMATION_IMAGES.stage01,
    altText: 'Raw plaster and architectural wall texture of an evolving room',
  },
  {
    id: 'stage-02',
    number: '02',
    title: 'THE LIGHT',
    subtitle: 'Light sets the mood',
    description: 'Pendant fixtures, ambient glow, and natural sunlight shape spatial volume and tone.',
    imagePath: TRANSFORMATION_IMAGES.stage02,
    altText: 'Warm architectural lighting and pendant glow cast across bare room',
  },
  {
    id: 'stage-03',
    number: '03',
    title: 'THE FABRIC',
    subtitle: 'Softness adds comfort',
    description: 'Floor-to-ceiling drapery, woven textiles, and tactile upholstery introduce warmth.',
    imagePath: TRANSFORMATION_IMAGES.stage03,
    altText: 'Linen curtains and soft woven fabrics cascading beside windows',
  },
  {
    id: 'stage-04',
    number: '04',
    title: 'THE FORM',
    subtitle: 'Furniture gives the space life',
    description: 'Proportional seating, structural tables, and architectural forms anchor daily ritual.',
    imagePath: TRANSFORMATION_IMAGES.stage04,
    altText: 'Proportional modern sofa and lounge seating arranged in room',
  },
  {
    id: 'stage-05',
    number: '05',
    title: 'THE DETAILS',
    subtitle: 'Details make it personal',
    description: 'Sculptural objects, curated ceramics, greenery, and art infuse distinct persona.',
    imagePath: TRANSFORMATION_IMAGES.stage05,
    altText: 'Curated decorative ceramics, artwork, and foliage placed on console',
  },
  {
    id: 'stage-06',
    number: '06',
    title: 'THE SPACE',
    subtitle: 'The space comes alive',
    description: 'All layers converge into a cohesive, warm, and intentional living environment.',
    imagePath: TRANSFORMATION_IMAGES.stage06,
    altText: 'Fully realized, warm, and lived-in interior residence space',
  },
];
