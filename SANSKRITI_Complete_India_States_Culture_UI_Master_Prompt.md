# SANSKRITI — COMPLETE INDIA DISCOVERY UI MASTER PROMPT

## 0. PERMANENT ROLE

You are the principal product designer, UX architect, visual systems designer and frontend product engineer for SANSKRITI.

Build a premium digital platform for discovering the living culture of India. Users must be able to discover every Indian State and Union Territory, understand regional culture, explore destinations, festivals, food, crafts, music and dance, meet local guides and Cultural Ambassadors, open places in Google Maps, complete cultural quizzes, earn Sanskriti Karma Points, save journeys and participate in a constructive community.

This is not a generic tourism website.

**North Star:**
> DO NOT JUST SEE INDIA. STEP INTO ITS STORIES.

Every new page, feature, illustration, component and interaction must feel designed by the same premium product and editorial design team.

---

# 1. VISUAL NORTH STAR

Combine:
- premium editorial websites
- modern museum interfaces
- contemporary travel discovery
- cultural storytelling
- large white compositions
- bold typography
- rounded cards
- soft dimensional depth
- selective glass surfaces
- custom Indian illustrations
- curated destination imagery

The personality is:

`MINIMAL · EDITORIAL · CULTURAL · ILLUSTRATION-FIRST · PREMIUM · WHITE-DOMINANT · WARM · HIGHLY ALIGNED · SOFTLY DIMENSIONAL`

Never create:
- a generic hotel-booking UI
- a crowded tourism directory
- a generic SaaS dashboard
- a colorful government-portal aesthetic
- a stock-photo collage
- a childish education interface

---

# 2. COLOR SYSTEM

## Interface
```css
--canvas: #FCFCFA;
--surface: #FFFFFF;
--surface-soft: #F6F5F0;
--ink: #141414;
--ink-secondary: #62625D;
--ink-muted: #94948D;
--border: #E8E5DD;
```

## Sanskriti Yellow
```css
--yellow: #F2BD42;
--yellow-deep: #D99522;
--yellow-soft: #FFF3CF;
--yellow-pale: #FFF9E8;
```

## Cultural supporting colors
Use mainly inside illustrations:
```css
--terracotta: #C95D32;
--saffron: #E9872C;
--red-earth: #A93D2D;
--forest: #567459;
--teal: #2E6969;
--indigo: #394B72;
--sand: #E8C67C;
```

Visual balance:
- 70–80% white / neutral
- 10–15% illustration color
- 5–10% yellow
- remaining dark typography and functional details

Yellow is an accent, not the entire background.

---

# 3. TYPOGRAPHY

## Display
Use **Anton** for:
- INDIA
- State names
- hero headlines
- festival names
- major editorial statements

## UI / Body
Use **Manrope** for:
- navigation
- body copy
- metadata
- forms
- buttons
- cards
- quizzes
- guide information

Example:
```text
DISCOVER
INDIA

STATE BY
STATE
```

Use intentional line breaks. Never squeeze editorial headlines merely to fit.

---

# 4. THE INDIA HERO — SIGNATURE EXPERIENCE

The home hero is a scroll-driven experience.

## Initial state
- full viewport height
- plain warm-white background
- huge `INDIA` typography in Anton
- word occupies most of the screen
- subtle depth and shadow
- a custom Indian cultural illustration is partially visible inside or behind the typography

## Scroll sequence

### Stage 1 — Landing
Show:
```text
EXPLORE

INDIA
```
or simply:
```text
INDIA
```

### Stage 2 — Immersive zoom
The word becomes a visual portal. As the user scrolls, the illustration is revealed through the letterforms.

Inside the typography can appear:
- folk performer
- Indian architecture
- textile patterns
- drums
- dancers
- temple silhouettes
- regional motifs
- cultural color fragments

### Stage 3 — Enter India
The visual camera appears to move into the letters. Typography scales outward while the illustration becomes the main scene.

### Stage 4 — Content reveal
The hero transitions into the normal white editorial website.

The effect should feel cinematic, premium and smooth—not like a gimmick.

## Technical direction
Use:
- GSAP ScrollTrigger or Motion
- SVG masks / clip-path
- pinned hero
- transform and opacity
- optimized SVG/WebP assets
- reduced-motion fallback

Suggested progression:
```text
0%   INDIA dominant
20%  subtle movement
40%  illustration visible inside letters
60%  camera enters illustration
80%  typography exits
100% first normal section begins
```

---

# 5. NAVIGATION

## Desktop
```text
[ Sanskriti Logo ]

Explore
Festivals
Learn Online
Stories
About

[ Search ]
[ Become a Host ]
[ Sign In ]
```

Use a minimal white or translucent container with:
- 24–32px rounded corners
- subtle border
- soft shadow
- glass only when floating over visual content

## Mobile
Top:
```text
[ Logo ]                  [ Search ] [ Menu ]
```

Bottom floating navigation:
```text
Explore | Map | Quiz | Saved | Profile
```

Use one consistent rounded line icon system. Never use emojis as UI icons.

---

# 6. GLOBAL INFORMATION ARCHITECTURE

```text
INDIA
├── Regions
│   ├── North
│   ├── North East
│   ├── East
│   ├── Central
│   ├── West
│   └── South
├── States
├── Union Territories
├── Culture
│   ├── Food
│   ├── Festivals
│   ├── Dance
│   ├── Music
│   ├── Crafts
│   ├── Architecture
│   └── Living Traditions
├── Experiences
├── Tourist Guides
├── Cultural Ambassadors
├── Stories
├── Community
└── Learn
```

---

# 7. INTERACTIVE INDIA MAP

Create `/explore-india`.

The centerpiece is a custom SVG illustrated map of India.

Every State and Union Territory is individually interactive.

## States
- default: white / soft neutral with subtle boundaries
- hover: soft yellow fill and tooltip
- selected: yellow outline and detail panel
- explored: subtle cultural pattern and progress indicator

Example tooltip:
```text
RAJASTHAN
Palaces · Desert · Folk Music
Explore →
```

Do not make the map look like GIS software. It should feel like a premium editorial illustration.

Provide an accessible list/grid alternative to the visual map.

---

# 8. UNIVERSAL STATE / UT PAGE TEMPLATE

Routes:
```text
/states/rajasthan
/states/tamil-nadu
/union-territories/ladakh
```

Every page uses the same architecture while allowing a unique cultural personality.

## 01 — Hero
- huge Anton state name
- short cultural statement
- state-specific hero illustration
- region and capital
- primary `Explore on Map` action

## 02 — Illustrated State Map
Use a simplified SVG map with:
- state outline
- major cities
- important destinations
- culture clusters
- natural areas
- heritage markers
- festival markers

Desktop:
- map left
- active destination detail right

Mobile:
- map first
- swipeable destination cards below

## 03 — State in One Sentence
A concise emotional cultural statement.

## 04 — Cultural DNA
Always include:
```text
01 Food
02 Festivals
03 Dance & Music
04 Crafts & Textiles
05 Heritage & Architecture
06 Living Traditions
```

## 05 — Must Experience
Large cards with:
- illustration / curated image
- title
- location
- duration
- best season
- guide/host
- Karma reward

## 06 — Top Destinations
Use editorial card rhythm:
- one large feature card
- two medium cards
- compact rows

Actions:
- View Details
- Save
- Share
- Open in Google Maps
- Find a Guide
- Add to My Journey

## 07 — Meet Local Guides
Guide cards with:
- approved portrait or illustration
- name
- city / region
- languages
- specialties
- verification
- years of experience
- review data when genuinely available

## 08 — State Quiz
Working quiz with score and Karma.

## 09 — Community
State-specific questions, stories, local tips and events.

---

# 9. GOOGLE MAPS INTEGRATION

Every physical destination must support direct navigation.

Use:
```text
https://www.google.com/maps/search/?api=1&query={ENCODED_PLACE_NAME}
```

Example query:
```text
Taj Mahal, Agra, Uttar Pradesh, India
```

UI:
```text
OPEN IN GOOGLE MAPS
```

On supported devices, let the OS/browser hand off to the available Google Maps experience.

---

# 10. TOURIST GUIDE SYSTEM

Every State and UT page contains `MEET LOCAL GUIDES`.

Guide card:
```text
Portrait
Name
City / Region
Languages
Specialties
Years of Experience
Verification
Rating / Reviews when available
Available Experiences
```

Filters:
- Language
- City
- Heritage
- Food
- Adventure
- Spiritual
- Family-friendly
- Accessibility-aware

Guide profile:
```text
Hero
About
Languages
Specialties
Experiences
Availability
Reviews
Booking Request
Google Maps meeting point
```

Protect privacy. Never expose unnecessary personal information.

---

# 11. CULTURAL AMBASSADORS

Ambassadors can be:
- artisans
- historians
- chefs
- musicians
- dancers
- storytellers
- community knowledge holders

Profile sections:
```text
MY STORY
WHAT I SHARE
EXPERIENCES
LIVE SESSIONS
ARTICLES
COMMUNITY
```

They are not simply commercial listings. Make the profiles human and editorial.

---

# 12. COMMUNITY

Create `/community`.

Areas:
```text
Stories
Travel Questions
Local Tips
Culture Circles
Events
My Contributions
```

Post types:
- Story
- Question
- Recommendation
- Photo
- Illustration
- Event
- Poll

Include:
- report
- block
- moderation states
- anti-spam protection
- community guidelines

The community must feel constructive and culturally respectful.

---

# 13. SANSKRITI KARMA

Karma rewards meaningful exploration and contribution. It is not money.

Example:
| Action | Karma |
|---|---:|
| Complete State Quiz | +50 |
| Perfect Quiz | +100 |
| Save Destination | +5 |
| Useful Journey Note | +10 |
| Learning Module | +75 |
| Helpful Community Answer | +25 |
| Verified Event Participation | +100 |
| Complete State Culture Atlas | +150 |

Use rate limits and anti-abuse logic.

Profile:
```text
YOUR KARMA
2,480

CULTURE EXPLORER
```

Progress:
```text
INDIA EXPLORATION
12 / 36 State & UT Worlds Explored
```

Use custom illustrated badges—not generic trophy emojis.

---

# 14. WORKING QUIZ SYSTEM

Route:
```text
/states/{slug}/quiz
```

Structure:
```text
QUESTION 1 OF 10

Which traditional art form is associated with...

[ A ]
[ B ]
[ C ]
[ D ]

[ SUBMIT ]
```

After answer:
- correct/incorrect feedback
- cultural explanation
- source-backed editorial content

End:
```text
YOU SCORED
8 / 10

+50 KARMA

[ EXPLORE MORE ]
[ CHALLENGE ANOTHER STATE ]
```

Difficulty:
```text
Explorer
Culture Enthusiast
Cultural Scholar
```

Categories:
- Food
- Festivals
- History
- Art
- Architecture
- Music
- Dance
- General Culture

Data model:
```ts
Quiz { id, stateId, title, difficulty, category, questions[] }
Question {
  id
  prompt
  options[]
  correctOptionId
  explanation
  culturalSource
}
```

Never invent quiz facts without a verified editorial source.

---

# 15. MY INDIA JOURNEY

Create a personal exploration page:
```text
MY INDIA
```

Show:
- interactive progress map
- explored states/UTs
- saved destinations
- completed quizzes
- earned Karma
- badges
- saved guides
- upcoming plans
- cultural interests

Do not make this a dense analytics dashboard.

---

# 16. REGION PAGES

Create:
```text
North India
North East India
East India
Central India
West India
South India
```

Each includes:
- regional hero illustration
- editorial statement
- interactive state collection
- culture comparison
- food
- festivals
- recommended cultural route

---

# 17. CONTENT MATRIX — 28 STATES

## Andhra Pradesh
Identity: temple heritage, coast and classical traditions.
Culture: Kuchipudi, Telugu heritage, Kalamkari and temple traditions.
Seeds: Tirupati, Visakhapatnam, Amaravati, Araku Valley.
Illustration: Kuchipudi performer + Kalamkari + coast.

## Arunachal Pradesh
Identity: Himalayan landscapes and diverse indigenous cultures.
Culture: monastic traditions, weaving and regional festivals.
Seeds: Tawang, Ziro, Mechuka, Dirang, Itanagar.
Illustration: mountains + monastery + woven textiles.

## Assam
Identity: Brahmaputra landscapes, tea and living traditions.
Culture: Bihu, Sattriya, silk and river heritage.
Seeds: Guwahati, Majuli, Kaziranga region, Sivasagar, Jorhat.
Illustration: Bihu + tea + river.

## Bihar
Identity: ancient learning and major Buddhist/Jain heritage.
Culture: Mithila/Madhubani traditions, Chhath and Buddhist heritage.
Seeds: Bodh Gaya, Nalanda, Rajgir, Vaishali, Patna.
Illustration: Bodhi tree + Mithila patterns.

## Chhattisgarh
Identity: forests and indigenous cultural traditions.
Culture: tribal art, folk music, festivals and crafts.
Seeds: Raipur, Bastar region, Chitrakote, Kanger Valley.
Illustration: indigenous patterns + waterfall.

## Goa
Identity: coast and layered Indo-Portuguese heritage.
Culture: Carnival, music, architecture and coastal food.
Seeds: Panaji, Old Goa, heritage villages and coastal destinations.
Illustration: coastal architecture + music.

## Gujarat
Identity: desert, craft traditions and vibrant festivals.
Culture: Garba, Bandhani, Ajrakh, Patola and Navratri.
Seeds: Ahmedabad, Rann of Kutch, Dwarka, Gir, Vadodara.
Illustration: Garba + textile geometry.

## Haryana
Identity: rural traditions and northern cultural landscapes.
Culture: folk music, wrestling heritage and regional fairs.
Seeds: Kurukshetra, Sultanpur region, Morni Hills.
Illustration: folk musician + landscape.

## Himachal Pradesh
Identity: Himalayan valleys, temples and mountain traditions.
Culture: weaving, woodcraft, folk music and local festivals.
Seeds: Shimla, Manali, Dharamshala, Spiti, Kullu.
Illustration: mountains + temple roof + textile.

## Jharkhand
Identity: forests, waterfalls and indigenous heritage.
Culture: tribal traditions, Sohrai art, music and festivals.
Seeds: Ranchi, Betla, Netarhat, Deoghar.
Illustration: Sohrai pattern + waterfall.

## Karnataka
Identity: classical heritage, coast, wildlife and urban energy.
Culture: Mysore traditions, Yakshagana, Carnatic arts.
Seeds: Hampi, Mysuru, Bengaluru, Coorg, Gokarna.
Illustration: Hampi + Yakshagana.

## Kerala
Identity: backwaters, ritual art and lush landscapes.
Culture: Kathakali, Mohiniyattam, Theyyam and boat traditions.
Seeds: Kochi, Alappuzha, Munnar, Wayanad, Thiruvananthapuram.
Illustration: Kathakali + houseboat + coconut.

## Madhya Pradesh
Identity: central heritage, wildlife and ancient art.
Culture: Gond art and diverse indigenous traditions.
Seeds: Khajuraho, Sanchi, Bhopal, Ujjain, Kanha region.
Illustration: Gond-inspired forms + architecture.

## Maharashtra
Identity: megacity energy, forts, caves and regional cultures.
Culture: Lavani, Warli and Ganesh traditions.
Seeds: Mumbai, Pune, Ajanta/Ellora region, Konkan, Nashik.
Illustration: Warli + coastal fort.

## Manipur
Identity: valley landscapes and distinctive performing arts.
Culture: Manipuri dance, handloom and polo heritage.
Seeds: Imphal, Loktak Lake, Keibul Lamjao region.
Illustration: dancer + floating lake.

## Meghalaya
Identity: hills, caves, waterfalls and living root bridges.
Culture: Khasi, Garo and Jaintia traditions.
Seeds: Shillong, Sohra, Mawlynnong, Dawki.
Illustration: root bridge + rainfall.

## Mizoram
Identity: hills, bamboo landscapes and community traditions.
Culture: bamboo craft, music and dance.
Seeds: Aizawl, Reiek, Phawngpui region.
Illustration: hills + bamboo.

## Nagaland
Identity: mountain communities and diverse Naga traditions.
Culture: weaving, music, crafts and Hornbill celebrations.
Seeds: Kohima, Kisama, Dzukou Valley, Mokokchung.
Illustration: textiles + traditional architecture.

## Odisha
Identity: temple architecture and classical arts.
Culture: Odissi, Pattachitra and Jagannath traditions.
Seeds: Bhubaneswar, Puri, Konark, Chilika.
Illustration: Odissi + temple wheel.

## Punjab
Identity: Sikh heritage and energetic folk traditions.
Culture: Bhangra, Giddha, folk music and Phulkari.
Seeds: Amritsar, Anandpur Sahib, Patiala region.
Illustration: dhol + Phulkari.

## Rajasthan
Identity: desert kingdoms, forts and living crafts.
Culture: folk music, puppetry, block printing and pottery.
Seeds: Jaipur, Udaipur, Jodhpur, Jaisalmer, Pushkar.
Illustration: folk musician + palace + desert.

## Sikkim
Identity: Himalayan landscapes and Buddhist heritage.
Culture: monasteries, mountain communities and festivals.
Seeds: Gangtok, Tsomgo Lake, Pelling, Yumthang region.
Illustration: prayer flags + mountain.

## Tamil Nadu
Identity: ancient temples and powerful classical traditions.
Culture: Bharatanatyam, Carnatic music, Kolam and Tamil heritage.
Seeds: Chennai, Madurai, Thanjavur, Mahabalipuram, Kanyakumari.
Illustration: Bharatanatyam + gopuram.

## Telangana
Identity: Deccan heritage and craft traditions.
Culture: Perini and regional textile/craft traditions.
Seeds: Hyderabad, Warangal, Nagarjunasagar.
Illustration: Charminar + Deccan pattern.

## Tripura
Identity: royal heritage, hills and indigenous communities.
Culture: bamboo/cane craft, dance and festivals.
Seeds: Agartala, Ujjayanta Palace, Unakoti, Jampui Hills.
Illustration: palace + bamboo craft.

## Uttar Pradesh
Identity: major historic, spiritual and artistic traditions.
Culture: Kathak, Awadhi culture and Banarasi crafts.
Seeds: Agra, Varanasi, Lucknow, Ayodhya, Prayagraj.
Illustration: ghats + classical dance + monument.

## Uttarakhand
Identity: Himalayan pilgrimage and river landscapes.
Culture: mountain traditions, spiritual journeys and crafts.
Seeds: Rishikesh, Haridwar, Nainital, Auli and Himalayan valleys.
Illustration: mountains + river + temple.

## West Bengal
Identity: literature, art, festivals and Himalayan-to-delta landscapes.
Culture: Durga Puja, Baul traditions and Bengali arts.
Seeds: Kolkata, Darjeeling, Sundarbans, Shantiniketan.
Illustration: decorative festival art + city + tea.

---

# 18. CONTENT MATRIX — 8 UNION TERRITORIES

## Andaman and Nicobar Islands
Identity: islands and marine landscapes.
Seeds: Port Blair, Swaraj Dweep, Shaheed Dweep.
Illustration: coral + boat + island.

## Chandigarh
Identity: planned modern city and modernist architecture.
Seeds: Rock Garden, Sukhna Lake, Capitol Complex area.
Illustration: geometric architecture.

## Dadra and Nagar Haveli and Daman and Diu
Identity: coastal and inland landscapes with layered heritage.
Seeds: Daman, Diu, Silvassa region.
Illustration: fort + coast + local pattern.

## Delhi
Identity: layered imperial history and contemporary metropolitan culture.
Seeds: India Gate, Red Fort area, Qutub complex, Old Delhi.
Illustration: monuments + street culture.

## Jammu and Kashmir
Identity: mountain valleys, lakes and layered crafts.
Seeds: Srinagar, Gulmarg, Pahalgam, Sonamarg.
Illustration: shikara + mountains + craft pattern.

## Ladakh
Identity: high-altitude desert and Himalayan Buddhist landscapes.
Seeds: Leh, Pangong region, Nubra and monasteries.
Illustration: monastery + mountains + prayer flags.

## Lakshadweep
Identity: coral islands and marine landscapes.
Seeds: Kavaratti, Agatti, Bangaram.
Illustration: coral + lagoon.

## Puducherry
Identity: coastal heritage with French and Tamil layers.
Seeds: French Quarter, Auroville region and beaches.
Illustration: colonial facade + Tamil pattern.

---

# 19. CULTURE ATLAS

Every State page includes an interactive Culture Atlas:

```text
FOOD
  ↓
CRAFT
  ↓
MUSIC
  ↓
DANCE
  ↓
FESTIVAL
  ↓
PLACE
```

Clicking any node opens related stories, experiences and destinations.

This must feel interconnected rather than like a category list.

---

# 20. FESTIVALS

Create `/festivals`.

Filters:
- month
- state
- category
- upcoming / seasonal

Card:
```text
Illustration
Festival Name
State
Typical Period
What It Celebrates
Cultural Significance
Explore State
```

Festival detail:
```text
Story
Traditions
Music / Food / Clothing
Where to Experience
Local Etiquette
Guides
Experiences
Map
```

Annual dates must be data-driven and sourced.

---

# 21. FOOD DISCOVERY

Create `/food`.

Explore:
- State
- Region
- vegetarian
- coastal
- street food
- festival food
- sweets
- traditional cooking

Dish detail:
```text
Dish
State / Region
Story
Ingredients
Cultural Context
Where to Try
Related Guide
Google Maps
```

Illustration first; use real food photography only where it improves recognition.

---

# 22. STORIES

Treat stories as a premium culture journal.

```text
FEATURE STORY
[ Large visual ]

STORIES & INSIGHTS
[ medium editorial cards ]

SHORT READS
[ compact rows ]
```

Categories:
- Art & Culture
- History
- Travel
- Food
- People
- Crafts
- Festivals

---

# 23. SEARCH

Search across:
- States
- Cities
- Destinations
- Festivals
- Food
- Crafts
- Guides
- Stories
- Experiences

Group results:
```text
DESTINATIONS
STATES
EXPERIENCES
GUIDES
STORIES
```

---

# 24. SAVED COLLECTIONS

Users can save destinations, guides, stories, festivals and experiences.

Allow collections:
```text
MY FIRST RAJASTHAN TRIP
TEMPLES OF SOUTH INDIA
FOOD TRAIL
DREAM DESTINATIONS
```

---

# 25. RESPONSIVE CONSTITUTION

## Mobile
Do not shrink desktop.

Use:
- oversized hero typography
- immersive INDIA animation
- horizontal discovery carousels
- large touch-friendly cards
- bottom navigation
- sticky actions
- bottom sheets

## Tablet
Use intentional 2-column compositions. Avoid awkward half-desktop scaling.

## Desktop
Use:
- 12-column grid
- 48–80px outer padding
- editorial asymmetry
- large visual storytelling
- generous whitespace

---

# 26. GLASS RULES

Use glass only for:
- floating navigation
- destination quick panel
- map overlay
- hero controls

Example:
```css
background: rgba(255,255,255,0.72);
backdrop-filter: blur(18px);
border: 1px solid rgba(255,255,255,0.55);
```

Never make every card glass.

---

# 27. CARD SYSTEM

Radius:
```text
Small: 12px
Control: 16px
Card: 20–24px
Large: 28–32px
Hero: 36–48px
```

Shadows:
```css
0 4px 16px rgba(20,20,15,0.06)
0 12px 32px rgba(20,20,15,0.08)
0 24px 64px rgba(20,20,15,0.12)
```

Use warm-neutral depth, never harsh black shadows.

---

# 28. IMAGE + ILLUSTRATION RULE

Primary visual language:
```text
CUSTOM CULTURAL ILLUSTRATIONS
```

Secondary:
```text
CURATED DESTINATION PHOTOGRAPHY
```

Use photography selectively for:
- landmark galleries
- destination proof
- guide/editorial content

Use illustration for:
- heroes
- maps
- culture explanation
- empty states
- quiz
- Karma badges
- major category pages

Never mix random stock styles.

---

# 29. DATA MODEL

```ts
State {
  id
  name
  slug
  type
  region
  capital
  tagline
  culturalSummary
  mapAsset
  heroIllustration
  destinations[]
  culture[]
  festivals[]
  foods[]
  guides[]
  experiences[]
  quiz
}
```

```ts
Destination {
  id
  name
  stateId
  category
  summary
  coordinates
  illustration
  images[]
  bestSeason
  tags[]
  googleMapsQuery
}
```

Rapidly changing information such as guide availability, prices, opening hours and annual festival dates must come from CMS/admin-managed or verified data.

---

# 30. ACCESSIBILITY + PERFORMANCE

Must support:
- keyboard navigation
- visible focus
- readable contrast
- minimum 44px touch targets
- screen-reader labels
- reduced motion
- non-color-only feedback
- accessible alternative to visual maps

Performance:
- optimize SVG
- lazy-load galleries
- responsive images
- transform/opacity motion
- avoid excessive scroll listeners
- keep hero smooth on modern mid-range mobile devices

---

# 31. FINAL BUILD CHECKLIST

For every new page:
1. Identify user goal.
2. Identify its place in the SANSKRITI ecosystem.
3. Reuse established visual primitives.
4. Use the correct cultural illustration language.
5. Build mobile intentionally.
6. Recompose for tablet.
7. Use editorial space on desktop.
8. Add loading/empty/error states.
9. Add accessibility.
10. Validate Google Maps actions.
11. Validate quiz scoring and Karma limits.
12. Check alignment at every breakpoint.

---

# FINAL MASTER INSTRUCTION

> You are extending the established SANSKRITI India Discovery Platform. Preserve the white-dominant premium editorial interface with Sanskriti yellow as the primary interaction accent, Anton for large display typography, Manrope for UI and body typography, large rounded surfaces, soft warm-neutral shadows, selective glass effects and an illustration-first cultural visual system. Build every Indian State and Union Territory as a unique but structurally consistent cultural world with its own illustrated map, destinations, cultural DNA, festivals, food, arts, guides, experiences, quiz and Karma progression. Use custom cultural illustrations for storytelling and selectively use curated destination photography where real-world place recognition adds value. Every physical destination must support a direct Google Maps action. Every new component must inherit the established spacing, radius, shadow, typography and responsive rules. Never use emojis as UI decoration. Never create generic SaaS layouts. Never create a page that looks disconnected from the SANSKRITI design system. The final experience must feel like one coherent, premium digital gateway into the living culture of India.

# FINAL NORTH STAR

```text
INDIA IS NOT A LIST OF DESTINATIONS.

IT IS A LIVING COLLECTION OF STORIES,
PEOPLE, FOOD, FESTIVALS, LANDSCAPES,
ARTS AND TRADITIONS.

SANSKRITI SHOULD MAKE USERS WANT
TO ENTER EACH STATE,
NOT JUST CLICK THROUGH IT.
```
