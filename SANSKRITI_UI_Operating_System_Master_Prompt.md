# SANSKRITI --- UI OPERATING SYSTEM

## Permanent Master Prompt for All Current and Future UI

# 0. ABSOLUTE MASTER RULE

You are designing and extending SANSKRITI, an illustration-first
cultural discovery platform. Treat this document as the permanent UI
constitution. Every new page, section, component, asset, modal, card,
form, navigation item and future feature must follow these rules.

Never create a separate visual style for a new feature. First identify
the closest existing pattern, then extend that system using the same
typography, spacing, radius, shadows, colors, illustrations and
responsive behavior.

The result must always feel as if the entire product was designed
together by one premium product and editorial design team.

# 1. PRODUCT IDEA

SANSKRITI helps users discover India's living culture through: -
authentic experiences - festivals - food and cooking - crafts and
artisans - music and dance - local traditions - Cultural Ambassadors -
online learning - stories - search and discovery - saved experiences -
booking - Ambassador onboarding

SANSKRITI is not a generic travel marketplace, hotel booking website,
SaaS dashboard or stock-photo tourism product.

The experience should communicate: \> DO NOT JUST SEE INDIA. STEP INTO
ITS STORIES.

# 2. VISUAL NORTH STAR

The product combines: 1. Minimal modern product design 2. Bold editorial
typography 3. Custom cultural illustrations 4. Large rounded surfaces 5.
Soft dimensional depth 6. Warm golden interaction accents 7. Strong
responsive behavior

The design should feel: ILLUSTRATION-FIRST + EDITORIAL + MINIMAL +
WARM + PREMIUM + CULTURALLY ROOTED + SYSTEMATIC.

# 3. NON-NEGOTIABLE: ILLUSTRATIONS INSTEAD OF PHOTOGRAPHY

Use illustrations as the primary storytelling medium across the product.

Prefer: - custom vector scenes - cultural character illustrations -
destination illustrations - festival scenes - architectural scenes -
artisan and food scenes - illustrated objects - small contextual
illustrations

Do not default to photography.

Do not mix unrelated visual styles such as: - stock vectors - 3D clay
art - photorealistic images - anime - watercolor - childish cartoons

All assets must belong to one coherent SANSKRITI illustration world.

# 4. ILLUSTRATION ART DIRECTION

The illustration language should be inspired by premium editorial travel
artwork: - clean vector construction - confident controlled outlines -
warm flat-to-softly-shaded colors - expressive but refined characters -
elegant proportions - contemporary Indian cultural context - large
narrative compositions - no visual clutter

Characters: - simplified faces - natural posture - culturally accurate
clothing and objects - no exaggerated caricature - no stereotypical
"tourist India" treatment

Line system: - primary outline: approximately 2.5--4px relative to
artboard scale - secondary detail: approximately 1.5--2.5px - fine
details: approximately 1--1.5px

Every illustration must scale consistently.

# 5. ILLUSTRATION ASSET CATEGORIES

Use a controlled asset library:

## HERO SCENE

Large narrative illustration for a major page.

## DESTINATION SCENE

Illustrated Jaipur, Varanasi, Kochi, Kanchipuram or other locations.

## FESTIVAL SCENE

Illustrated Holi, Diwali, Onam, Pongal and other celebrations.

## CULTURAL OBJECT

Smaller visual assets such as instruments, craft tools, textiles and
food objects.

## AMBASSADOR PORTRAIT

Illustrated people profile.

## EMPTY STATE

Small contextual illustrations.

Never add a random visual asset just because it fits the topic.

# 6. ASSET NAMING

Use semantic names: - ill-hero-jaipur-family.svg -
ill-festival-holi.svg - ill-ambassador-meera.svg -
ill-destination-varanasi.svg - ill-empty-saved.svg

Never use: - final-image.svg - asset2.svg - new-final-final.svg

# 7. COLOR SYSTEM

The UI is predominantly white.

## Interface surfaces

``` text
Canvas White: #FCFCFA
Pure White: #FFFFFF
Soft Surface: #F5F4F0
Primary Ink: #111111
Secondary Ink: #5F5F5A
Muted Ink: #94948D
Border: #E7E5DF
```

## Brand interaction accent

``` text
Sanskriti Gold: #F4B93A
Deep Gold: #D98C22
Soft Gold: #FFF2CC
```

## Illustration supporting palette

``` text
Terracotta: #C95E2F
Burnt Orange: #D96A32
Saffron: #E8892E
Warm Sand: #F4D18A
Muted Green: #58745A
Deep Teal: #285B5D
Indigo: #37466E
```

Supporting colors belong mainly to illustrations. The interface itself
must remain calm and white-dominant.

# 8. COLOR DOMINANCE

Target visual balance: - 70--80% white/light neutral - 10--15%
illustration color - 5--10% gold accent - 5--10% dark
typography/interface details

Do not make the interface visually noisy.

# 9. TYPOGRAPHY

## DISPLAY FONT: ANTON

Do not use Bebas Neue as the default display font.

Use Anton for: - hero headlines - page titles - festival names - major
editorial statements - high-impact section headings

Anton should create the strong, heavy, condensed visual presence seen in
premium editorial travel interfaces.

Examples:

``` text
DISCOVER
THE REAL
INDIA

LIVE THE
CULTURE
```

## UI AND BODY FONT: MANROPE

Use Manrope for: - navigation - body copy - labels - metadata - forms -
buttons - cards - booking information

Fallback:

``` text
Manrope, system-ui, sans-serif
```

# 10. TYPOGRAPHY SCALE

Desktop:

``` text
Display XL: Anton 96–144px
Display L: Anton 72–96px
H1: Anton 56–72px
H2: Anton 40–56px
H3: Manrope 700, 24–32px
Body: Manrope 14–18px
Small: Manrope 12–14px
```

Mobile:

``` text
Display XL: Anton 56–72px
Display L: Anton 48–60px
H1: Anton 40–52px
H2: Anton 32–40px
H3: Manrope 700, 20–24px
Body: Manrope 14–16px
Small: Manrope 12–13px
```

# 11. HEADLINE RULE

Use intentional line breaks. Never squeeze a long display headline into
one line merely because it technically fits.

Good:

``` text
BOOK YOUR STAY IN

INDIA
```

Good:

``` text
DISCOVER
INDIA
DIFFERENTLY
```

# 12. GRID

## Desktop

-   12 columns
-   max canvas: 1440--1600px
-   outer padding: 48--80px
-   gutter: 24--32px

## Tablet

-   8 columns
-   outer padding: 32px
-   gutter: 20--24px

## Mobile

-   16--24px outer padding
-   full-width content
-   no horizontal overflow
-   44px minimum touch targets

Major alignment edges must remain consistent.

# 13. SPACING

Use only this rhythm:

``` text
4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 120, 160
```

No arbitrary margins.

# 14. RADIUS SYSTEM

``` text
Small: 12px
Control: 16px
Standard Card: 20px
Large Card: 28px
Hero Panel: 36px
Major Illustration Banner: 40–48px
Floating Mobile Shell: 32–40px
```

Never randomly invent radius values.

# 15. SHADOW SYSTEM

Use warm-neutral, broad, low-opacity shadows.

Resting card:

``` text
0 4px 16px rgba(20,20,15,0.06)
```

Interactive card:

``` text
0 10px 28px rgba(20,20,15,0.08)
```

Floating panel:

``` text
0 18px 50px rgba(20,20,15,0.12)
```

Major layer:

``` text
0 28px 80px rgba(20,20,15,0.14)
```

Do not use harsh black or blue-gray SaaS shadows.

# 16. DEPTH SYSTEM

Every layered layout has only three conceptual planes: 1. Background
world: illustration or subtle decorative field 2. Primary content
surface: white rounded panel 3. Interaction layer: floating CTA, search,
booking or navigation

Do not stack cards only for decoration.

# 17. NAVIGATION

## Desktop

Minimal:

``` text
SANSKRITI
Explore
Festivals
Learn
Stories
Search
Sign In
```

Active item: - dark text - small gold underline or indicator

## Mobile

Top: - logo - search - contextual menu/action

Bottom: Floating rounded navigation:

``` text
Explore | Festivals | Saved | Profile
```

Use professional icons, never emojis.

# 18. ICON SYSTEM

Use one icon family only: - rounded - simple - consistent stroke -
familiar metaphors

Never mix emoji, random icon packs and decorative symbols.

# 19. HERO RULE

Every major hero contains: 1. Large Anton editorial message 2. Short
Manrope supporting copy 3. One clear primary action 4. Large custom
illustration 5. Optional discovery/booking panel

The hero illustration must tell a story before the user reads the copy.

# 20. HOME HERO

Desktop composition: - left: white editorial content world - right:
large warm illustrated cultural world

The right side should feel like a poster, not a generic image block.

Example:

``` text
DISCOVER
THE REAL
INDIA
```

Supporting copy:

``` text
Experience festivals, traditions and stories with the people who keep them alive.
```

CTA:

``` text
EXPLORE EXPERIENCES
```

# 21. SEARCH MODULE

Minimal, elegant, rounded.

Fields: - Where - When - What do you want to experience?

Use: - white surface - subtle border - 16px radius - quiet labels -
strong selected values

Never make it look like a dense enterprise form.

# 22. CARD FAMILY

Do not use one generic card for everything.

## Feature Card

Large illustration, 28px radius, strong title, minimal metadata.

## Experience Card

``` text
Illustration
Experience Name
Location · Duration
Hosted by Ambassador
```

## Compact Row

``` text
[Illustration] Title
Location · Short metadata
```

## Festival Card

Large illustrated scene, Anton festival name, month and location.

## Ambassador Card

Illustrated portrait, name, location, specialty and verified status.

# 23. CARD HOVER

Allowed: - slight elevation - subtle illustration scale - slightly
stronger border - small arrow movement

Never: - rotate - bounce aggressively - add unnecessary 3D effects

# 24. BUTTONS

## Primary

Gold background, dark text, 16px radius, Manrope semibold.

## Secondary

White/transparent with subtle dark border.

## Text action

Dark text with optional directional arrow.

Sizes:

``` text
Small: 36–40px
Medium: 44–48px
Large: 52–56px
```

# 25. FORMS

Inputs: - 16px radius - white background - subtle border - muted label -
dark value

Focus: - subtle gold ring - stronger border

# 26. PAGE ARCHITECTURE

Most pages should follow:

``` text
Navigation
Hero / Context
Primary Discovery or Action
Featured Content
Supporting Content
Story / Trust Section
Secondary CTA
Footer
```

Do not add filler sections.

# 27. HOME PAGE

1.  Hero
2.  Explore by Culture
3.  Featured Experiences
4.  Festivals
5.  Meet Cultural Ambassadors
6.  Learn Online
7.  Stories from India
8.  Final CTA

Each section may use a different composition, but all must obey the same
design system.

# 28. EXPLORE PAGE

Structure:

``` text
Page Heading
Search / Filter Trigger
Featured Discovery Carousel
Category Navigation
Experience Results
Illustrated Contextual CTA
```

Discovery cards can scroll horizontally on mobile.

# 29. EXPERIENCE DETAIL

Structure:

``` text
Large Illustration Hero
Experience Title
Location / Duration / Group
Booking CTA
What You Will Experience
Illustrated Timeline
Meet Your Ambassador
Included
Cultural Guidance
Traveler Stories
Related Experiences
```

Desktop: floating/sticky booking card. Mobile: persistent bottom booking
CTA.

# 30. FESTIVALS

Use large illustrated storytelling.

Example heading:

``` text
FIND INDIA
IN CELEBRATION
```

Include: - featured festival - calendar rhythm - regional discovery -
cultural context - available experiences

Do not make it a generic calendar dashboard.

# 31. AMBASSADOR PROFILE

Human and editorial.

Hero: - large illustrated portrait - name - location - specialty - short
statement

Sections:

``` text
MY STORY
WHAT I SHARE
EXPERIENCES
LIVE SESSIONS
TRAVELER STORIES
```

Do not over-card the profile.

# 32. STORIES

Treat as an editorial magazine: - one dominant story - mixed card
sizes - strong typography - illustration-led storytelling - generous
white space

# 33. LEARN ONLINE

Heading example:

``` text
BRING INDIA
CLOSER
```

Show illustrated class cards with: - class - Ambassador - date -
duration - level

# 34. EMPTY STATES

Every empty state uses a contextual custom illustration.

Always include: - clear title - one short explanation - useful action

Never use emojis.

# 35. LOADING STATES

Skeleton geometry must match the final rounded geometry.

# 36. MODALS

Use: - soft dark overlay - white rounded surface - 24--32px radius -
generous padding

Mobile: prefer bottom sheets where appropriate.

# 37. RESPONSIVE CONSTITUTION

Design for: - Mobile - Tablet - Desktop - Large Desktop

Never shrink desktop blindly.

## Mobile

Prioritize: - one primary action per visible area - thumb-friendly
interaction - horizontal carousels - sticky actions - bottom sheets -
large cards - floating bottom navigation

## Tablet

Recompose layered layouts. Do not create awkward half-desktop layouts.

## Desktop

Use space for: - editorial scale - larger illustration - layered
panels - generous whitespace

Suggested breakpoints:

``` text
0–639 Mobile
640–1023 Tablet
1024–1439 Desktop
1440+ Large Desktop
```

# 38. FUTURE FEATURE INTEGRATION PROTOCOL

Whenever asked to add a section, feature, component or asset:

1.  Identify the user's primary task.
2.  Find the closest existing component.
3.  Reuse its typography, spacing, radius, shadow and responsive
    behavior.
4.  Add only the minimum new primitives required.
5.  Add mobile, tablet and desktop behavior.
6.  Run the quality checklist.

The new item must never look pasted in from another product.

# 39. NEW ILLUSTRATION PROTOCOL

For every new illustration: - use established palette - use established
line weight - use established proportions - use established cultural
sensitivity - prefer vector/scalable construction - preserve transparent
background where appropriate

Ask: \> Would this look natural beside the existing SANSKRITI hero
illustration?

If not, redesign.

# 40. COMPONENT QUALITY CHECK

Before finalizing a new component: - correct font? - approved spacing? -
approved radius? - approved shadow? - correct palette? - consistent
icon? - hover/focus/active states? - mobile behavior? - desktop
behavior? - visual consistency with hero and card system?

If any answer is no, redesign.

# 41. MOTION

Suggested:

``` text
Micro feedback: 120–180ms
Hover: 180–240ms
Panel transition: 240–360ms
Large reveal: 400–600ms
```

Motion should clarify, not entertain.

# 42. ACCESSIBILITY

Ensure: - contrast - keyboard focus - clear selected states - 44px touch
targets - semantic labels - non-color-only state changes - readable body
text

# 43. STRICT PROHIBITIONS

Never introduce: - emojis - photography-heavy pages - random
illustration styles - inconsistent shadows - inconsistent radius -
arbitrary spacing - generic SaaS dashboards - dense walls of cards -
excessive pills - unnecessary gradients - copied visual identity from
another product

Use broad inspiration, but keep SANSKRITI visually original.

# 44. REQUIRED SCREEN SUPPORT

The system must support: 1. Home 2. Explore 3. Search 4. Experience
Detail 5. Festivals 6. Festival Detail 7. Learn Online 8. Class Detail
9. Ambassador Profile 10. Stories 11. Story Detail 12. Saved 13. Profile
14. Notifications 15. Booking 16. Booking Confirmation 17. Become an
Ambassador 18. Ambassador Onboarding 19. Empty States 20. Error States

# 45. FINAL PROMPT FOR ANY AI DESIGN OR CODING AGENT

> You are working inside the established SANSKRITI UI Operating System.
> Preserve the permanent design language. Do not create a new visual
> style. Use the illustration-first approach with original custom
> vector-style cultural illustrations, dominant white surfaces,
> Sanskriti Gold for primary interaction, Anton for editorial display
> typography, and Manrope for interface and body typography. Follow the
> approved spacing scale, radius system, shadow system, card family and
> responsive grid. Every new screen or component must include
> intentional mobile, tablet and desktop behavior. Prefer reuse over
> invention. Do not use photography as the primary visual language,
> emojis, generic SaaS layouts, random gradients, inconsistent icons,
> arbitrary spacing or arbitrary radius values. When adding an
> illustration, preserve the established SANSKRITI illustration palette,
> outline treatment and character language. When adding a component,
> derive it from the closest existing component pattern. The final
> result must feel as if every screen, asset, component and interaction
> was designed together from the beginning.

# FINAL NORTH STAR

SANSKRITI is:

> A beautifully illustrated gateway into the living culture of India.

Every future addition must preserve:

``` text
ILLUSTRATION-FIRST
EDITORIAL
MINIMAL
WARM
PREMIUM
ROUNDED
SOFTLY DIMENSIONAL
HIGHLY ALIGNED
RESPONSIVE
SYSTEMATIC
```

Do not ask: \> What style should this new component use?

Ask: \> How does this new component express the existing SANSKRITI
visual language?
