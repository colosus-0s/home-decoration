import type { DetailItem } from '../types';
import { DETAIL_IMAGES } from '../utils/assets';

export const detailItems: DetailItem[] = [
  {
    id: 'detail-fabric',
    title: 'Textile Texture',
    material: 'Heavy Woven Linen',
    description: 'Tactile organic weaves that soften acoustic tone and absorb ambient light.',
    imagePath: DETAIL_IMAGES.fabric,
    gridSpan: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    id: 'detail-marble',
    title: 'Natural Stone',
    material: 'Dark Gold-Veined Marble',
    description: 'Deep mineral veining bringing architectural weight and organic pattern.',
    imagePath: DETAIL_IMAGES.marble,
    gridSpan: 'col-span-1 md:col-span-1 row-span-2',
  },
  {
    id: 'detail-hardware',
    title: 'Custom Joinery',
    material: 'Brushed Brass Hardware',
    description: 'Precision-machined metal details that reward touch during daily interaction.',
    imagePath: DETAIL_IMAGES.brass,
    gridSpan: 'col-span-1 md:col-span-1 row-span-1',
  },
  {
    id: 'detail-timber',
    title: 'Fluted Wood',
    material: 'Smoked Oak Paneling',
    description: 'Rhythmic vertical timber relief creating subtle highlight and shadow movement.',
    imagePath: DETAIL_IMAGES.wood,
    gridSpan: 'col-span-1 md:col-span-1 row-span-2',
  },
  {
    id: 'detail-lighting',
    title: 'Ambient Glow',
    material: 'Warm Filament & Glass',
    description: 'Diffused luminaire sources designed to sculpt evening shadow and warmth.',
    imagePath: DETAIL_IMAGES.lighting,
    gridSpan: 'col-span-1 md:col-span-1 row-span-1',
  },
];
