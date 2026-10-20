// ALL copy, links and image paths live here. Components only read from this file.
// Anything Crystal has not supplied yet is a string starting with "TODO:" and shows as a visible marker.

export type Img = { src: string; alt: string; width: number; height: number };

const img = (src: string, width: number, height: number, alt: string): Img => ({
  src: `/assets/${src}.webp`,
  width,
  height,
  alt,
});

export type Project = {
  name: string;
  location: string;
  status?: string;
  description: string;
  todo?: string;
  images: Img[];
};

const HIRE_URL = "https://studiocoka.com/hire";

const nature = (file: string, w: number, h: number, alt: string) =>
  img(`nature-home/${file}`, w, h, `Nature Home: ${alt}`);
const kasa = (file: string, w: number, h: number, alt: string) =>
  img(`community-centre/${file}`, w, h, `Kasa Kofo Community Centre proposal: ${alt}`);

export const content = {
  site: {
    name: "Crystal Kizor",
    wordmark: "CRYSTAL KIZOR.",
    location: "Enugu State, Nigeria",
    title: "Crystal Kizor | Building better for people and place",
    description:
      "Crystal Kizor is an architect, designer, entrepreneur, speaker, researcher and creator in Enugu State, Nigeria, building better for people and place.",
    idea: "Building better for people and place.",
    year: 2026,
    hireUrl: HIRE_URL,
    hireLabel: "Work with me",
  },

  menu: [
    { label: "Home", href: "#top" },
    { label: "Studio COKA", href: "#studio-coka" },
    { label: "Learn", href: "#learn" },
    { label: "Impact", href: "#impact" },
    { label: "Speak & Write", href: "#voice" },
    { label: "ELEvated", href: "#elevated" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    headline: "I show how we can build better homes, buildings and cities for hot climates.",
    support: "Architect, designer, entrepreneur, speaker, researcher and creator.",
    primary: { label: "See my work", href: "#studio-coka" },
    secondary: { label: "Get in touch", href: "#contact" },
    image: nature("terrace-exterior", 768, 1024, "the two-storey white facade with a shaded ground-floor veranda, tall louvred windows and a timber screen"),
  },

  idea: {
    label: "The Idea",
    quote:
      "Architecture changes lives, improves living standards, and can be the difference between survival and thriving.",
    portrait: img("people/portrait-standing", 1024, 1536, "Crystal Kizor standing in her studio beside a long stone desk"),
    centre: "Crystal Kizor",
    branches: [
      "Studio COKA",
      "The Effective Architect",
      "The ROI of Intentional Design",
      "AKO Alliance",
      "Alive and Free",
    ],
  },

  principles: {
    label: "Principles",
    heading: "Passive cooling principles",
    items: ["Thick walls", "Large openings", "High-level openings", "Deep overhangs", "Indoor-outdoor living", "Trees as part of the design"],
  },

  proof: {
    label: "The Proof",
    image: img("community-centre/exterior", 1800, 1349, ""),
    metrics: [
      { value: "100,000+", label: "sqm designed and coordinated" },
      { value: "About 95%", label: "less diesel at an off-grid eye hospital" },
      { value: "About ₦8M", label: "saved a year" },
      { value: "10,000+", label: "community in The Effective Architect" },
    ],
    todo: "TODO: Crystal confirms every number",
  },

  studio: {
    label: "Studio COKA",
    heading: "Studio COKA.",
    tagline: "Built for this climate. Designed for People.",
    text: "A climate-responsive design and build studio, founded in 2024, helping home and business owners design and build intentional spaces.",
    services: ["Architecture", "Interior Design", "Project Management"],
    button: { label: "Start a project", href: HIRE_URL },
    projects: [
      {
        name: "Nature Home",
        location: "Enugu State, Nigeria",
        description:
          "A 7-bedroom family home designed and built to catch the wind, use natural light and keep cool with less AC.",
        images: [
          nature("front-tree-shade", 804, 1080, "front view with tree shade"),
          nature("back-garden", 795, 1062, "the back garden and a new tree"),
          nature("shade-cantilevers", 809, 1080, "shade under deep cantilevers"),
          nature("family-sitting-room", 950, 1440, "the family sitting room"),
          nature("bedroom-3", 805, 1078, "bedroom 3"),
          nature("entrance-hall", 768, 1024, "the entrance hall"),
          nature("terrace-exterior", 768, 1024, "the terrace and exterior"),
        ],
      },
      {
        name: "Eye hospital",
        location: "Nsukka, Nigeria",
        description: "A solar-powered building with a naturally cooled waiting area.",
        todo: "TODO: confirm attribution. Designed by Crystal in 2018, before Studio COKA existed. TODO: project photos",
        images: [],
      },
      {
        name: "House of the Future",
        location: "UAE",
        status: "Prototype",
        description: "A home around a courtyard with a layered mashrabiya screen for air, shade and light.",
        todo: "TODO: project images",
        images: [],
      },
      {
        name: "Kasa Kofo Community Centre",
        location: "Casamance, Senegal",
        status: "Proposal",
        description: "A space to learn, earn and meet, with a workshop, library, craft shop and market.",
        images: [
          kasa("exterior", 1800, 1349, "the centre set among trees"),
          kasa("gathering-hall", 1800, 1800, "the open gathering hall"),
          kasa("gallery-corridor", 1800, 2249, "a corridor of perforated walls and filtered light"),
          kasa("shaded-walkway", 1800, 2400, "a shaded walkway"),
          kasa("courtyard-tree", 1800, 2250, "the courtyard around a large tree"),
        ],
      },
    ] satisfies Project[],
  },

  learn: {
    label: "Learn",
    tea: {
      name: "The Effective Architect",
      short: "TEA",
      text: "A global platform training architects and designers to think clearly, design intentionally and execute at a high level.",
      stat: "10,000+",
      statLabel: "community",
      button: "Join the waitlist",
      href: undefined as string | undefined,
      todo: "TODO: waitlist link",
    },
    roi: {
      name: "The ROI of Intentional Design",
      text: "Her weekly newsletter on what good design returns in value, comfort, health and quality of life.",
      button: "Subscribe on LinkedIn",
      href: undefined as string | undefined,
      todo: "TODO: LinkedIn newsletter link",
    },
  },

  impact: {
    label: "Impact",
    items: [
      {
        name: "AKO Alliance",
        text: "An NGO working to return Nigeria's out-of-school children to school, support families with business capital and back new ideas.",
        photo: "TODO: photo from AKO Alliance",
        button: "Learn more",
        href: undefined as string | undefined,
        todo: "TODO: AKO Alliance link",
      },
      {
        name: "Alive and Free",
        text: "A movement for young people exploring identity, purpose and life in Christ, through honest conversations, gatherings and worship.",
        photo: "TODO: photo from Alive and Free",
        button: "Learn more",
        href: undefined as string | undefined,
        todo: "TODO: Alive and Free link",
      },
    ],
  },

  voice: {
    label: "Speak & Write",
    heading: "Speaking. Writing. Sharing.",
    speaking: {
      title: "Speaking",
      text: "TEDx talk on integrating Indigenous Architecture into modern living.",
      button: { label: "Get in touch", href: undefined as string | undefined },
      todo: "TODO: speaking contact route",
    },
    writing: {
      title: "Writing and content",
      text: "Posts and series on passive cooling, building local and intentional design.",
      todo: "TODO: verified social links",
    },
    media: [
      img("people/desk-podcast", 1374, 1145, "Crystal Kizor at her desk with a microphone and laptop"),
      img("people/seated-chair", 1373, 1145, "Crystal Kizor seated in a timber chair beside a large plant"),
      img("people/desk-brown-shirt", 1374, 1145, "Crystal Kizor resting her chin on her hand at her desk"),
      img("people/desk-white-shirt", 1374, 1145, "Crystal Kizor smiling at her desk in a white shirt"),
    ],
  },

  // Furniture and product design. Photos go in public/assets/elevated/ and are listed in `images` with real alt text.
  elevated: {
    label: "ELEvated",
    heading: "ELEvated.",
    kind: "Furniture and product design.",
    descriptionTodo: "TODO: ELEvated description",
    imagesTodo: "TODO: ELEvated images",
    previewTodo: "TODO: ELEvated photos. Nature Home interiors are shown as a preview until Crystal sends hers",
    images: [
      nature("family-sitting-room", 950, 1440, "a cream sectional sofa, armchairs and a massage chair in a bright sitting room with tall curtained windows"),
      nature("timber-dividers", 809, 1078, "two round tan armchairs with a small side table in front of a curved timber slat wall"),
      nature("office", 768, 1024, "a dark timber desk with a glass top, a black chair and a lit bookshelf in a wood-panelled office"),
      nature("bedroom-3", 805, 1078, "tall taupe curtains, an olive tree in a black pot, a gold-framed round mirror and a cream armchair"),
      nature("stair-void", 1022, 1363, "a timber desk with a glass top and a black ergonomic chair beside a wooden bookcase and a brass vase of dried flowers"),
      nature("gym", 959, 1440, "home gym equipment on a white tiled floor in front of a timber slat wall with two vertical wall lights"),
      nature("corridor", 828, 1270, "a hallway with a timber slat ceiling and brass pendant lights, looking through to a cream sofa and a mustard armchair"),
      nature("entrance-hall", 768, 1024, "a white stairwell with a yellow glass-panel handrail and a timber slat ceiling"),
    ] as Img[],
  },

  next: {
    label: "Where next",
    heading: "What are you here for?",
    rows: [
      { text: "I want to build a home or space", href: "#studio-coka" },
      { text: "I want to learn how to design like this", href: "#learn" },
      { text: "I want to support children's education", href: "#impact" },
      { text: "I want to book Crystal to speak", href: "#voice" },
      { text: "I want to read her ideas", href: "#learn" },
    ],
  },

  about: {
    label: "About",
    heading: "Crystal Kizor",
    bioTodo: "TODO: Crystal's bio",
    portrait: img("people/portrait-blazer", 1374, 1145, "Crystal Kizor in a brown blazer, arms crossed, in front of a wall of project drawings"),
    based: "Based in Enugu State, Nigeria.",
    memberships: ["Graduate Member, Nigerian Institute of Architects", "Member, Green Building Council Nigeria"],
  },

  contact: {
    label: "Contact",
    heading: "Let's build something that fits this climate.",
    primary: { label: "Start a project", href: HIRE_URL },
    linkedin: { label: "LinkedIn", href: "https://www.linkedin.com/in/crystalkizor", todo: "TODO: confirm exact URL" },
    emailTodo: "TODO: Crystal's email, not supplied",
    brandsTitle: "Her work",
    brands: [
      { name: "Studio COKA", href: "https://studiocoka.com" },
      { name: "The Effective Architect", href: undefined as string | undefined },
      { name: "The ROI of Intentional Design", href: undefined as string | undefined },
      { name: "AKO Alliance", href: undefined as string | undefined },
      { name: "Alive and Free", href: undefined as string | undefined },
    ],
    socialsTodo: "TODO: social links",
    copyright: "© 2026 Crystal Kizor. All rights reserved.",
  },
};
