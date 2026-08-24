/**
 * Photorealistic Interior & Material Photography Assets
 * Provides real, high-resolution architectural photography for hero, transformation, moods, portfolio, and details.
 */

import {
  heroDesktop,
  heroMobile,
  transformationWall,
  transformationLight,
  transformationFabric,
  transformationForm,
  transformationDetails,
  transformationSpace,
  spaceBegins,
  moodCalm,
  moodBold,
  moodTimeless,
  moodModern,
  portfolio01,
  portfolio02,
  portfolio03,
  portfolio04,
  portfolio05,
  detailLinen,
  detailMarble,
  detailBrass,
  detailOak,
  detailLight,
  emotionalDusk,
} from '../assets';

// 1. HERO POSTER FRAME (Full Luxury Interior Visual)
export const HERO_POSTER_IMAGE = heroDesktop;
export const HERO_MOBILE_IMAGE = heroMobile;

// 2. TRANSFORMATION STAGES (01 - 06) — EXACT SAME ROOM EVOLVING STEP-BY-STEP
export const TRANSFORMATION_IMAGES = {
  stage01: transformationWall,
  stage02: transformationLight,
  stage03: transformationFabric,
  stage04: transformationForm,
  stage05: transformationDetails,
  stage06: transformationSpace,
};

// 3. SPACE BEGINS ANCHOR IMAGE
export const SPACE_BEGINS_IMAGE = spaceBegins;

// 4. MOOD PHOTOGRAPHY ASSETS (Photorealistic Interiors)
export const MOOD_IMAGES = {
  calm: moodCalm,
  bold: moodBold,
  timeless: moodTimeless,
  modern: moodModern,
};

// 5. PORTFOLIO PHOTOGRAPHY ASSETS (Published Architecture Projects)
export const PORTFOLIO_IMAGES = {
  residence04Hero: portfolio01,
  residence04Dining: portfolio02,
  residence04Bedroom: portfolio03,
  residence04Lounge: portfolio04,
  residence04Detail: portfolio05,
};

// 6. MACRO MATERIAL PHOTOGRAPHY ASSETS (Extreme Editorial Close-Ups)
export const DETAIL_IMAGES = {
  fabric: detailLinen,
  marble: detailMarble,
  brass: detailBrass,
  wood: detailOak,
  lighting: detailLight,
};

// 7. EMOTIONAL DUSK IMAGE (Twilight Sky & Warm Indoor Lantern Glow)
export const EMOTIONAL_DUSK_IMAGE = emotionalDusk;
