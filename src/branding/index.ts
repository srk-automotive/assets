import badgePng from "./badge/SRK_badge.png";
import badgeWebp from "./badge/SRK_badge.webp";
import badgeTextPng from "./badge/SRK_badge_text.png";
import badgeTextWebp from "./badge/SRK_badge_text.webp";

import billetCompressedJpg from "./billet/SRK_billet_log_1MB.jpeg";
import billetPng from "./billet/SRK_billet_logo.png";
import billetWebp from "./billet/SRK_billet_logo.webp";
import billetAltPng from "./billet/SRK_billet_logo2.png";
import billetTransparentPng from "./billet/SRK_billet_logo_transparent.png";
import billetAltTransparentPng from "./billet/SRK_billet_logo_transparent2.png";

import flowCompressedJpg from "./flow/SRK_flow_log_1MB.jpeg";
import flowPng from "./flow/SRK_flow_logo.png";
import flowWebp from "./flow/SRK_flow_logo.webp";
import flowAltPng from "./flow/SRK_flow_logo2.png";
import flowTransparentPng from "./flow/SRK_flow_logo_transparent.png";

const branding = {
  badge: {
    png: badgePng,
    webp: badgeWebp,
  },
  "badge-text": {
    png: badgeTextPng,
    webp: badgeTextWebp,
  },
  billet: {
    png: billetPng,
    webp: billetWebp,
    transparentPng: billetTransparentPng,
    compressedJpg: billetCompressedJpg,
  },
  "billet-alt": {
    png: billetAltPng,
    transparentPng: billetAltTransparentPng,
  },
  flow: {
    png: flowPng,
    webp: flowWebp,
    transparentPng: flowTransparentPng,
    compressedJpg: flowCompressedJpg,
  },
  "flow-alt": {
    png: flowAltPng,
  },
};

export default branding;

export const badge = branding.badge; 
export const badgeText = branding["badge-text"];
export const billet = branding.billet;
export const billetAlt = branding["billet-alt"];
export const flow = branding.flow;
export const flowAlt = branding["flow-alt"];
