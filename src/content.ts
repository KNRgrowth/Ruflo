/* =====================================================================
   BRASSY MONKEY — SITE CONTENT
   Almost everything you'd want to change lives in this one file:
   business info, prices, hours, reviews, gallery photos and page copy.
   Edit the text between the quotes and the site updates.
   Photos live in /public/images — reference them as "/images/filename.webp".
   ===================================================================== */

export const business = {
  name: "Brassy Monkey",
  owner: "Misty Patterson",
  phoneDisplay: "(918) 758-6486",
  phoneLink: "tel:+19187586486",
  street: "1011 N. Broadway, Suite 3",
  cityStateZip: "Tecumseh, OK 74873",
  // TODO: replace with the shop's exact Facebook page URL
  facebook: "https://www.facebook.com/search/top?q=Brassy%20Monkey%20Tecumseh",
  directions: "https://www.google.com/maps/dir/?api=1&destination=1011+N+Broadway+Suite+3+Tecumseh+OK+74873",
  mapsSearch: "https://www.google.com/maps/search/?api=1&query=1011+N+Broadway+Suite+3+Tecumseh+OK+74873",
  mapEmbed: "https://www.google.com/maps?q=1011+N+Broadway+Suite+3,+Tecumseh,+OK+74873&output=embed",
};

export const hero = {
  eyebrow: "Barber & Salon · Tecumseh, Oklahoma",
  lines: ["Good hair.", "Good style."],
  serifLine: "A little attitude.",
  lede: "Where great hair meets great personality. Welcome to Brassy Monkey.",
  image: "/images/brass-wall-neon.webp",
  imageAlt: "The gold Brassy Monkey letters and pink 'Oh la la' neon on the shop's feature wall, with two smiling clients",
  imageCaption: "The brass wall · Suite 3",
};

export const ticker = ["Men's Cuts", "Women's Cuts", "Kids' Cuts", "Beard Trims", "Styling", "Highlights & Color"];

export const about = {
  eyebrow: "About the shop",
  title: "More than just",
  titleSerif: "a haircut.",
  lead: "Brassy Monkey is a locally owned barbershop and salon on North Broadway in Tecumseh, built for anyone who wants to walk out looking good and feeling even better.",
  paragraphs: [
    "Men, women and kids all sit in the same chair here. Clean fades, grown-out trims, beard cleanups, fresh highlights and full color all happen under one roof, done by someone who actually knows your name.",
    "There's no assembly line and no rush. You tell us what you want (or what you're tired of), we talk it through, and we take our time getting it right. Come in as a first-timer and you'll leave feeling like a regular.",
  ],
  pills: ["Men", "Women", "Children", "Beards", "Color"],
  mainImage: "/images/client-steve-cut.webp",
  mainImageAlt: "A happy client in a newsboy cap after a fresh haircut and beard trim at Brassy Monkey",
  smallImage: "/images/highlights-waves.webp",
  smallImageAlt: "Soft blonde highlights styled in loose waves",
};

export const owner = {
  eyebrow: "Meet the owner",
  title: "The woman behind",
  titleSerif: "the monkey.",
  photo: "/images/misty-patterson-owner.webp",
  photoAlt: "Misty Patterson, owner and stylist of Brassy Monkey, seated in a classic red barber chair",
  role: "Owner & Stylist",
  lead: "Misty Patterson is the owner, the stylist, and the reason so many Tecumseh families keep their standing appointments.",
  paragraphs: [
    "Misty built Brassy Monkey around one simple idea: everybody who sits in her chair deserves her full attention. She asks questions, she listens, and she doesn't call a cut finished until it's exactly what you came in for.",
    "She's just as comfortable squaring up a beard as she is painting in highlights, and she has a gift with kids. Picky little clients get exactly the cut they asked for, and bored ones might get to style her practice mannequin while they wait.",
    "Ask around and you'll hear the same words over and over: thorough, thoughtful, lovely. People come in once and end up bringing the whole family.",
  ],
  signature: "Misty Patterson",
  quote: "My whole family goes to her. We are lifers!",
  quoteBy: "Lisa Barnett-Fine, client",
};

/* ---------- SERVICES ----------
   price: leave as "Call for pricing" until confirmed, then e.g. "From $25".
   icon: one of "scissors" | "women" | "star" | "razor" | "comb" | "brush"
   image: shows behind the card on hover. */
export type Service = { tag: string; title: string; description: string; price: string; icon: string; image: string };

export const services: Service[] = [
  { tag: "For the gents", title: "Men's Haircuts", description: "Classic cuts, tight fades and clean tapers, shaped to your head and finished with a sharp neckline.", price: "Call for pricing", icon: "scissors", image: "/images/client-steve-cut.webp" },
  { tag: "For the ladies", title: "Women's Haircuts", description: "Trims, layers, bobs and big changes. Cut with care for how your hair grows, falls and styles at home.", price: "Call for pricing", icon: "women", image: "/images/highlights-waves.webp" },
  { tag: "For the little ones", title: "Children's Haircuts", description: "Patient, fun and judgment-free. Even the pickiest kids leave with exactly the cut they wanted.", price: "Call for pricing", icon: "star", image: "/images/brass-wall-neon.webp" },
  { tag: "Shape & detail", title: "Beard Trims", description: "Line-ups, shaping and cleanups that keep your beard looking intentional, from stubble to full grown.", price: "Call for pricing", icon: "razor", image: "/images/client-steve-cut.webp" },
  { tag: "Finish & polish", title: "Hair Styling", description: "Blowouts, waves, curls and event-ready looks for nights out, photos and every occasion in between.", price: "Call for pricing", icon: "comb", image: "/images/misty-patterson-owner.webp" },
  { tag: "Dimension & tone", title: "Highlights & Color", description: "Brightening highlights, all-over color and refreshes, blended to look natural and wear beautifully.", price: "Call for pricing", icon: "brush", image: "/images/highlights-waves.webp" },
];

export const why = {
  title: "Five reasons people",
  titleSerif: "come back.",
  neon: "Oh là là",
  reasons: [
    { title: "Personal attention", text: "One stylist, start to finish. You're not handed off or hurried out the door." },
    { title: "Friendly atmosphere", text: "Good music, good conversation and a chair that feels like it's been waiting for you." },
    { title: "Quality grooming", text: "Barber precision and salon technique in one shop, for every member of the family." },
    { title: "Attention to detail", text: "Necklines, blending, the back you can't see. It all gets checked before you leave." },
    { title: "Regulars, not customers", text: "Come in once and we'll remember how you like it. That's how whole families become lifers." },
  ],
};

/* ---------- REVIEWS (real Facebook recommendations) ----------
   The first one with featured: true is shown large. */
export type Review = { name: string; initials: string; date: string; text: string; highlight?: string; featured?: boolean };

export const reviews: Review[] = [
  { name: "Lisa Barnett-Fine", initials: "LB", date: "Aug 3", featured: true,
    text: "Misty @ Brassy Monkey is amazing. She did highlights on my daughter's hair and they look great and she is so excited about them! She even let her play with her mannequin while she was waiting on the highlight process.",
    highlight: "My whole family goes to her. We are lifers!" },
  { name: "Kevin Logan", initials: "KL", date: "Aug 17", text: "Misty does a great job and is very thorough and thoughtful." },
  { name: "Charlie Chenille Hazlin", initials: "CH", date: "Aug 10", text: "Lovely woman and she done an awesome job with my boys hair cuts, they're picky and they got exactly what they wanted. Definitely recommend her services!!" },
  { name: "Jeff Mann", initials: "JM", date: "Jul 27", text: "Always received an excellent haircut and beard trim." },
];

/* ---------- GALLERY ----------
   size: "tall" (portrait), "normal", or "wide" (landscape).
   For a before & after slider, add an item with type: "beforeAfter", before and after images. */
export type GalleryItem =
  | { type: "photo"; src: string; alt: string; label: string; caption: string; size?: "tall" | "normal" | "wide" }
  | { type: "beforeAfter"; before: string; after: string; alt: string; label: string; caption: string; size?: "tall" | "normal" | "wide" };

export const gallery: GalleryItem[] = [
  { type: "photo", src: "/images/misty-patterson-owner.webp", alt: "Misty Patterson in a red vintage barber chair inside the shop", label: "The owner", caption: "Misty in her chair", size: "tall" },
  { type: "photo", src: "/images/brass-wall-neon.webp", alt: "Gold Brassy Monkey letters, gold tinsel and pink neon on the shop's feature wall with two clients", label: "Shop atmosphere", caption: "The brass wall & neon" },
  { type: "photo", src: "/images/client-steve-cut.webp", alt: "Client Steve smiling after a haircut and beard trim before a costume party", label: "Haircut & beard", caption: "Steve, party-ready" },
  { type: "photo", src: "/images/highlights-waves.webp", alt: "Dimensional blonde highlights finished with soft waves", label: "Color & styling", caption: "Highlights, finished in waves" },
  // Example before & after (uncomment and point at real photos):
  // { type: "beforeAfter", before: "/images/before.webp", after: "/images/after.webp", alt: "Color transformation", label: "Before & After", caption: "Full highlight refresh", size: "wide" },
];

/* ---------- HOURS ----------
   24-hour time. Leave open/close empty ("") to show "Call for hours".
   Set closed: true for days off. The Open now / Closed now badge turns on
   automatically once any hours are filled in. day: 0 = Sunday … 6 = Saturday */
export const hours = [
  { day: 1, name: "Monday", open: "", close: "", closed: false },
  { day: 2, name: "Tuesday", open: "", close: "", closed: false },
  { day: 3, name: "Wednesday", open: "", close: "", closed: false },
  { day: 4, name: "Thursday", open: "", close: "", closed: false },
  { day: 5, name: "Friday", open: "", close: "", closed: false },
  { day: 6, name: "Saturday", open: "", close: "", closed: false },
  { day: 0, name: "Sunday", open: "", close: "", closed: false },
];
export const hoursNote = "Appointments recommended. Call ahead to check today's openings.";

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#misty", label: "Meet Misty" },
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
];
