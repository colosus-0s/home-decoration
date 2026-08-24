import type { MoodCategory } from '../types';
import { MOOD_IMAGES } from '../utils/assets';

export const moodCategories: MoodCategory[] = [
  {
    id: 'calm',
    title: 'CALM',
    tagline: 'Peaceful. Warm. Relaxed.',
    descriptors: ['Soft Textures', 'Warm Daylight', 'Neutral Tones'],
    imagePath: MOOD_IMAGES.calm,
    altText: 'Peaceful living space bathed in soft warm daylight with neutral organic tones',
  },
  {
    id: 'bold',
    title: 'BOLD',
    tagline: 'Confident. Dramatic. Expressive.',
    descriptors: ['High Contrast', 'Statement Pieces', 'Dramatic Light'],
    imagePath: MOOD_IMAGES.bold,
    altText: 'Dramatic interior featuring deep jewel tones, contrasting textures, and focused spotlighting',
  },
  {
    id: 'timeless',
    title: 'TIMELESS',
    tagline: 'Classic. Balanced. Enduring.',
    descriptors: ['Classic Mouldings', 'Natural Materials', 'Warm Greige'],
    imagePath: MOOD_IMAGES.timeless,
    altText: 'Classic room composition with architectural wall mouldings and stone hearth',
  },
  {
    id: 'modern',
    title: 'MODERN',
    tagline: 'Clean. Minimal. Architectural.',
    descriptors: ['Linear Forms', 'Dark Timber', 'Slot LED Lighting'],
    imagePath: MOOD_IMAGES.modern,
    altText: 'Sleek architectural living space with linear slot lighting and dark wood wall panels',
  },
];
