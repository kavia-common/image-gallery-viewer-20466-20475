//
// PUBLIC_INTERFACE
// images.js - Static image data for the gallery.
// Provides a curated list of remote, demo-safe images with categories and tags.
//
/**
 * This module exports an array of image objects to be used by the gallery.
 * Each image has: id, src, alt, category, tags, author, srcLink, width, height.
 * URLs are sourced from Unsplash demo-friendly images.
 *
 * For local assets (e.g., Picasso set), we must use static imports so CRA/Webpack
 * can fingerprint and serve them from the build. Do NOT use absolute "/src/..." paths.
 */

// Local asset imports (Picasso)
import PICASSO_1 from "../assets/20250915_075617_picasso_pablo_1.jpg";
import PICASSO_2 from "../assets/20250915_075635_250px-Le_Gourmet.jpg";
import PICASSO_3 from "../assets/20250915_075645_girl-with-mandolin.jpg";

export const CATEGORIES = ["All", "Nature", "Architecture", "People", "Abstract", "Picasso"];

// PUBLIC_INTERFACE
export const images = [
  {
    id: "nat-01",
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop",
    alt: "Mountain landscape under a blue sky",
    category: "Nature",
    tags: ["mountain", "landscape", "sky", "outdoor"],
    author: "Unsplash",
    srcLink: "https://unsplash.com/photos/eOLpJytrbsQ",
    width: 1600,
    height: 900
  },
  {
    id: "nat-02",
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop",
    alt: "Forest with tall green trees",
    category: "Nature",
    tags: ["forest", "trees", "green"],
    author: "Unsplash",
    srcLink: "https://unsplash.com/photos/6sAl6aQ4OWI",
    width: 1600,
    height: 1067
  },
  {
    id: "nat-03",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
    alt: "Ocean wave curling under sunlight",
    category: "Nature",
    tags: ["ocean", "wave", "water", "blue"],
    author: "Unsplash",
    srcLink: "https://unsplash.com/photos/yC-Yzbqy7PY",
    width: 1600,
    height: 900
  },
  {
    id: "nat-04",
    src: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?q=80&w=1600&auto=format&fit=crop",
    alt: "Desert dunes at sunset with warm light",
    category: "Nature",
    tags: ["desert", "dunes", "sunset", "sand"],
    author: "Unsplash",
    srcLink: "https://unsplash.com/photos/6W4F62sN_yI",
    width: 1600,
    height: 1067
  },
  {
    id: "arc-01",
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
    alt: "Modern skyscraper from low angle",
    category: "Architecture",
    tags: ["building", "skyscraper", "modern", "glass"],
    author: "Unsplash",
    srcLink: "https://unsplash.com/photos/T4q3rUtQp8c",
    width: 1600,
    height: 1067
  },
  {
    id: "arc-02",
    src: "https://images.unsplash.com/photo-1529429612779-c8e40ef2f36d?q=80&w=1600&auto=format&fit=crop",
    alt: "Symmetrical concrete arches in perspective",
    category: "Architecture",
    tags: ["arches", "symmetry", "concrete"],
    author: "Unsplash",
    srcLink: "https://unsplash.com/photos/8-pqNn6NkBI",
    width: 1600,
    height: 1067
  },
  {
    id: "arc-03",
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
    alt: "Minimalist architecture with white stairs",
    category: "Architecture",
    tags: ["minimal", "stairs", "white"],
    author: "Unsplash",
    srcLink: "https://unsplash.com/photos/6anudmpILw4",
    width: 1600,
    height: 1067
  },
  {
    id: "peo-01",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1600&auto=format&fit=crop",
    alt: "Portrait of a smiling woman",
    category: "People",
    tags: ["portrait", "woman", "smile", "person"],
    author: "Unsplash",
    srcLink: "https://unsplash.com/photos/0Zx1bDv5BNY",
    width: 1600,
    height: 1067
  },
  {
    id: "peo-02",
    src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1600&auto=format&fit=crop",
    alt: "Crowd walking in a busy city street",
    category: "People",
    tags: ["crowd", "city", "street", "urban"],
    author: "Unsplash",
    srcLink: "https://unsplash.com/photos/9UVmlIb0wJU",
    width: 1600,
    height: 1067
  },
  {
    id: "peo-03",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop",
    alt: "Person standing in front of colorful wall",
    category: "People",
    tags: ["colorful", "fashion", "pose"],
    author: "Unsplash",
    srcLink: "https://unsplash.com/photos/5NLCaz2wJXE",
    width: 1600,
    height: 1067
  },
  {
    id: "abs-01",
    src: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=1600&auto=format&fit=crop",
    alt: "Abstract gradient shapes with blue and purple hues",
    category: "Abstract",
    tags: ["abstract", "gradient", "blue", "purple"],
    author: "Unsplash",
    srcLink: "https://unsplash.com/photos/vpOeXr5wmR4",
    width: 1600,
    height: 900
  },
  {
    id: "abs-02",
    src: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop",
    alt: "Geometric pattern with lines and dots",
    category: "Abstract",
    tags: ["geometric", "pattern", "lines"],
    author: "Unsplash",
    srcLink: "https://unsplash.com/photos/kT-ZyaiwBe0",
    width: 1600,
    height: 1067
  },
  {
    id: "abs-03",
    src: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1600&auto=format&fit=crop",
    alt: "Macro of colorful ink in water",
    category: "Abstract",
    tags: ["ink", "color", "macro"],
    author: "Unsplash",
    srcLink: "https://unsplash.com/photos/HN-5Z6AmxrM",
    width: 1600,
    height: 1067
  },
  {
    id: "nat-05",
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
    alt: "Snowy mountain ridge with crisp air",
    category: "Nature",
    tags: ["snow", "ridge", "cold"],
    author: "Unsplash",
    srcLink: "https://unsplash.com/photos/eOLpJytrbsQ",
    width: 1200,
    height: 800
  },
  {
    id: "arc-04",
    src: "https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=1600&auto=format&fit=crop",
    alt: "Curved modern building facade",
    category: "Architecture",
    tags: ["curve", "facade", "modern"],
    author: "Unsplash",
    srcLink: "https://unsplash.com/photos/8IGI6FZGo1c",
    width: 1600,
    height: 1067
  },
  {
    id: "peo-04",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop",
    alt: "Person with glasses smiling outdoors",
    category: "People",
    tags: ["glasses", "smile", "portrait"],
    author: "Unsplash",
    srcLink: "https://unsplash.com/photos/v2aKnjMbP_k",
    width: 1600,
    height: 1067
  },

  // Additional People images for gallery diversity
  {
    id: "peo-05",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1600&auto=format&fit=crop",
    alt: "Portrait of a smiling child with curly hair indoors",
    category: "People",
    tags: ["child", "smile", "curly hair", "portrait", "indoor"],
    author: "Unsplash",
    srcLink: "https://unsplash.com/photos/G9i_plbfDgk",
    width: 1600,
    height: 1067,
    title: "Smiling Child"
  },
  {
    id: "peo-06",
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1600&auto=format&fit=crop",
    alt: "Elderly man with white beard wearing a blue cap",
    category: "People",
    tags: ["elderly", "beard", "cap", "portrait", "wisdom"],
    author: "Unsplash",
    srcLink: "https://unsplash.com/photos/mEZ3PoFGs_k",
    width: 1600,
    height: 1067,
    title: "Elderly Man in Cap"
  },
  {
    id: "peo-07",
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1600&auto=format&fit=crop",
    alt: "Young couple laughing in a sunlit field",
    category: "People",
    tags: ["couple", "outdoor", "sunlight", "love", "laughter"],
    author: "Unsplash",
    srcLink: "https://unsplash.com/photos/-oWyJoSqBRM",
    width: 1600,
    height: 1067,
    title: "Laughing Couple Outdoors"
  },
  {
    id: "peo-08",
    src: "https://images.unsplash.com/photo-1519340333755-c7d7b4a9df77?q=80&w=1600&auto=format&fit=crop",
    alt: "Group of friends walking together down a city street",
    category: "People",
    tags: ["friends", "group", "city", "urban", "together"],
    author: "Unsplash",
    srcLink: "https://unsplash.com/photos/mNGaaLeWEp0",
    width: 1600,
    height: 1067,
    title: "Friends in the City"
  },
  {
    id: "peo-09",
    src: "https://images.unsplash.com/photo-1465101178521-c1a9136a3c74?q=80&w=1600&auto=format&fit=crop",
    alt: "Woman in traditional Japanese kimono standing in a forest",
    category: "People",
    tags: ["kimono", "Japanese", "traditional", "forest", "culture"],
    author: "Unsplash",
    srcLink: "https://unsplash.com/photos/GYumuBnTqKc",
    width: 1600,
    height: 1067,
    title: "Woman in Kimono"
  },
  {
    id: "abs-04",
    src: "https://images.unsplash.com/photo-1520975954732-35dd22f7e22c?q=80&w=1600&auto=format&fit=crop",
    alt: "Abstract blue waves and curves",
    category: "Abstract",
    tags: ["blue", "waves", "curve"],
    author: "Unsplash",
    srcLink: "https://unsplash.com/photos/7i16pPZQOuA",
    width: 1600,
    height: 1067
  },
  {
    id: "nat-06",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    alt: "Calm lake with pine trees reflection",
    category: "Nature",
    tags: ["lake", "reflection", "pine"],
    author: "Unsplash",
    srcLink: "https://unsplash.com/photos/0y8p4w1WQf4",
    width: 1600,
    height: 1067
  },
  {
    id: "arc-05",
    src: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1600&auto=format&fit=crop",
    alt: "Brutalist concrete building pattern",
    category: "Architecture",
    tags: ["brutalist", "concrete", "pattern"],
    author: "Unsplash",
    srcLink: "https://unsplash.com/photos/IgUR1iX0mqM",
    width: 1600,
    height: 1067
  },

  // Picasso category (local assets via imports)
  {
    id: "pic-01",
    src: PICASSO_1,
    alt: "Picasso Portrait sketch - expressive lines",
    category: "Picasso",
    tags: ["Picasso", "portrait", "sketch"],
    author: "Pablo Picasso",
    width: 1200,
    height: 800
  },
  {
    id: "pic-02",
    src: PICASSO_2,
    alt: "Picasso - Le Gourmet (The Greedy Child)",
    category: "Picasso",
    tags: ["Picasso", "painting", "classic"],
    author: "Pablo Picasso",
    width: 1200,
    height: 800
  },
  {
    id: "pic-03",
    src: PICASSO_3,
    alt: "Picasso - Girl with a Mandolin",
    category: "Picasso",
    tags: ["Picasso", "cubism", "mandolin"],
    author: "Pablo Picasso",
    width: 1200,
    height: 800
  }
];

export default images;
