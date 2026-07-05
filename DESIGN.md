# Design

## Direction

Erling Nails should feel like a small premium nail studio inside a coastal spa context: clean, calm, precise, and personal. The visual system should move away from saturated beauty-template gradients and toward cold-luxury restraint with one controlled red accent.

## Color

- Ink: `#171313`
- Soft ink: `#3b3432`
- Surface: `#f7f5f2`
- Elevated surface: `#ffffff`
- Mist: `#e8e3de`
- Accent: `#8f1713`
- Accent deep: `#5d0d0b`
- Charcoal: `#11100f`

The accent is used consistently for booking, focus, and key highlights. Purple is retired from the primary system.

## Typography

Use a premium sans stack for the main voice: `Avenir Next`, `SF Pro Display`, `Segoe UI`, system sans-serif. Keep `JollyLodger` only as an optional brand signature, never as the main reading or section-heading type.

Headlines should be wide, balanced, and capped below 6rem. Body copy should stay below 70ch with comfortable line height.

## Layout

Use an editorial split hero, a dense but gapless service bento, a high-impact gallery strip, a pinned service story, compact testimonials, and a final booking/contact section. Sections should feel like distinct chapters with generous spacing, but the hero must keep the CTA visible in the initial viewport.

## Motion

GSAP owns scroll choreography and high-value reveals only:

- Hero video scale and text entrance on load.
- Pinned service story with scrubbed image/card progression.
- Gallery image scale/fade as the visitor scrolls.
- Header reveal without raw scroll listeners.

All motion must respect `prefers-reduced-motion`.

## Components

- Navigation: floating island, single-line desktop, compact mobile.
- Buttons: pill buttons with strong contrast and nested circular arrow affordance.
- Cards: restrained 12-16px radii, no nested cards, no decorative glow.
- Gallery: real nail imagery, no fake screenshots.
- Contact: WhatsApp, phone, map, and location presented as action-first information.

## Performance

Keep the hero video but prevent it from blocking the rest of the page. Remove AOS and third-party carousel scripts from the homepage. Avoid large blur filters on scrolling containers. Animate transform and opacity only.
