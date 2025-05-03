import TicketImage1 from "../assets/ticket_img_1.png";
import TicketImage2 from "../assets/ticket_img_2.png";
import TicketImage3 from "../assets/ticket_img_3.png";
import NewsImage1 from "../assets/news_img_1.png";
import NewsImage2 from "../assets/news_img_2.png";
import NewsImage3 from "../assets/news_img_3.png";

export const announcementData = [
  {
    id: 1,
    title: "Welcome to ZionFest 2025!",
    content:
      "Get ready for positive vibrations, amazing music, and unforgettable moments. Check the app for the full schedule!", // Sebelumnya: Konten placeholder Indonesia
    // imageUrl: "/images/slide1.jpg" // Optional
  },
  {
    id: 2,
    title: "Schedule Update: Tony Q Rastafara (Malang Show)",
    content:
      "Please note: Tony Q Rastafara's stage time in Malang has been delayed by 2 hours. See updated schedule.", // Sebelumnya: Info penundaan dalam Bahasa Indonesia
  },
  {
    id: 3,
    title: "Festival Info: Stay Hydrated & Connected",
    content:
      "Remember to drink water! Visit info booths for help & check lost and found near the main stage.", // Sebelumnya: Konten placeholder Indonesia
  },
  {
    id: 4,
    title: "Official ZionFest Merch Drop!",
    content:
      "Grab your exclusive ZionFest t-shirts, hats, and souvenirs at the official merch tent by the entrance.", // Sebelumnya: Konten placeholder Indonesia
  },
];

// Define category colors for consistency
const categoryStyles = {
  Events: { color: "bg-primary", textColor: "text-black" }, // Yellowish primary
  Music: { color: "bg-secondary", textColor: "text-white" }, // Greenish secondary
  Community: { color: "bg-gray-500", textColor: "text-white" },
  Warning: { color: "bg-warning", textColor: "text-white" }, // Reddish warning
  Info: { color: "bg-blue-500", textColor: "text-white" },
  Culture: { color: "bg-teal-600", textColor: "text-white" },
};

export const newsData = [
  {
    id: "news-1",
    title: "ZionFest Announces Reggae Revival Tour 2025!",
    category: "Events",
    imageUrl: NewsImage1,
    excerpt:
      "Get ready for positive vibrations across the nation! ZionFest is thrilled to unveil the dates and lineup for the highly anticipated Reggae Revival Tour...",
    slug: "/news/reggae-revival-tour-2025",
    date: "20 October 2024",
    categoryColor: categoryStyles.Events.color,
    categoryTextColor: categoryStyles.Events.textColor,
    // --- ADDED FULL CONTENT (Markdown) ---
    fullContent: `
Get ready for positive vibrations across the nation! ZionFest is thrilled to unveil the dates and lineup for the highly anticipated **Reggae Revival Tour 2025**. This tour promises to bring legendary artists and rising stars together on one stage, celebrating the heart and soul of reggae music.

## Tour Dates & Cities

The tour will kick off in Jakarta in early March and travel through major cities across the archipelago. Here are the confirmed stops so far:

*   **Jakarta:** March 15th, 2025 - Istora Senayan
*   **Bandung:** March 18th, 2025 - Sabuga Hall
*   **Yogyakarta:** March 22nd, 2025 - Prambanan Open Stage
*   **Surabaya:** March 25th, 2025 - Grand City Convex
*   **Bali:** March 29th, 2025 - Garuda Wisnu Kencana (GWK)

*More dates and cities may be announced soon!*

## Featured Artists

Headlining the tour will be the iconic **Roots Collective**, alongside the energetic **Zion Warriors**. We're also excited to feature special guest appearances from artists like 'Rootsman Vibration' and 'Island Tribe' on select dates. Expect a powerful mix of classic roots, modern reggae, and electrifying performances.

> "We want this tour to be a beacon of unity and positivity, bringing people together through the universal language of reggae," said a spokesperson for ZionFest.

Tickets go on sale **November 1st, 2024**, exclusively through the ZionFest website and official partners. Don't miss out on this unforgettable celebration of reggae music!
    `,
    // --- END OF FULL CONTENT ---
  },
  {
    id: "news-2",
    title: "Interview: Local Reggae Artist 'Rootsman Vibration' Speaks Out",
    category: "Music",
    imageUrl: NewsImage2,
    excerpt:
      "We sat down with the rising star 'Rootsman Vibration' to talk about his inspirations, the state of Indonesian reggae, and his upcoming EP...",
    slug: "/news/interview-rootsman-vibration",
    date: "18 October 2024",
    categoryColor: categoryStyles.Music.color,
    categoryTextColor: categoryStyles.Music.textColor,
    // --- ADDED FULL CONTENT (Markdown) ---
    fullContent: `
We recently had the pleasure of sitting down with the rising star **'Rootsman Vibration'**, whose unique blend of traditional roots reggae and modern sounds is making waves in the Indonesian music scene. We talked about his journey, inspirations, and what's next for his music.

### Finding the Rhythm

*'Rootsman Vibration'* (real name Agung Prasetyo) shared how his love for reggae began. "It started with my uncle's cassette collection," he recalls. "Bob Marley, Peter Tosh... their messages of peace, love, and resistance resonated deeply with me. It wasn't just music; it was a way of life."

He started playing guitar in high school, initially drawn to rock, but soon found himself gravitating back to the infectious rhythms of reggae. "The basslines, the one-drop beat – it just felt natural," he explains.

### The State of Indonesian Reggae

We asked for his perspective on the current reggae scene in Indonesia.

> "It's vibrant and diverse! There are so many talented artists exploring different subgenres, from classic roots to dub and dancehall influences. The community is strong, and there's a real sense of brotherhood."

However, he also noted challenges, such as the need for more platforms and wider recognition for local artists. "We need more dedicated venues, more media coverage, and continued support from the fans to help the scene grow even stronger."

### Upcoming EP: 'Island Soul'

'Rootsman Vibration' is currently in the studio working on his debut EP, titled **'Island Soul'**. He describes the project as "a reflection of my experiences growing up near the coast, infused with the spiritual messages of reggae."

The EP is expected to feature five original tracks, blending soulful melodies with conscious lyrics. Fans can anticipate its release in early 2025.

*Follow 'Rootsman Vibration' on [Instagram](https://instagram.com) and [Spotify](https://spotify.com) (replace with actual links) to stay updated.*
    `,
    // --- END OF FULL CONTENT ---
  },
  {
    id: "news-3",
    title: "Community Spotlight: Reggae Fans Cleanup Beach Initiative",
    category: "Community",
    imageUrl: NewsImage3,
    excerpt:
      "Inspired by the messages of unity and respect in reggae music, a group of dedicated fans organized a successful beach cleanup event last weekend...",
    slug: "/news/reggae-fans-beach-cleanup",
    date: "15 October 2024",
    categoryColor: categoryStyles.Community.color,
    categoryTextColor: categoryStyles.Community.textColor,
    // --- ADDED FULL CONTENT (Markdown) ---
    fullContent: `
Inspired by the messages of unity, respect for nature, and community spirit often found in reggae music, a group of dedicated fans calling themselves **'Pantai Positif Collective'** organized a highly successful beach cleanup event last weekend at Parangtritis Beach, Yogyakarta.

## More Than Just Music

Over 50 volunteers, fueled by reggae tunes playing softly in the background, spent Saturday morning collecting trash and debris that had washed ashore or been left behind. Armed with gloves and biodegradable bags, they worked tirelessly under the morning sun.

"Reggae music teaches us about 'One Love' and respecting Mother Earth," said Rina Wijaya, one of the event organizers. "We felt it was important to put those principles into action. Our beaches are precious, and we wanted to do our part to keep them clean for everyone."

## Positive Impact

The initiative collected over 100 large bags of waste, primarily consisting of plastic bottles, food wrappers, and fishing nets. The collected waste was sorted for recycling where possible, with the remainder being properly disposed of through coordination with local authorities.

Key outcomes:

*   Significant reduction of visible litter on the main beach area.
*   Increased awareness among beachgoers about waste management.
*   Strengthened sense of community among local reggae fans.

> "It was amazing to see everyone working together with such positive energy. It shows that the reggae community cares deeply about our environment," added volunteer Budi Santoso.

The 'Pantai Positif Collective' plans to organize similar cleanup events quarterly and hopes to inspire other fan communities across Indonesia to take similar actions. They believe that small, consistent efforts can make a big difference.

*Want to get involved? Follow Pantai Positif Collective on [Facebook](https://facebook.com) (replace with actual link) for future event updates.*
    `,
    // --- END OF FULL CONTENT ---
  },
  // ... (Continue adding 'fullContent' in Markdown for the rest of the news items) ...
  {
    id: "news-4",
    title: "Warning: Beware of Unofficial Ticket Resellers",
    category: "Warning",
    imageUrl: NewsImage1,
    excerpt:
      "ZionFest urges all fans to purchase tickets only through official channels. Reports of fraudulent tickets being sold by third parties have increased...",
    slug: "/news/beware-unofficial-tickets",
    date: "12 October 2024",
    categoryColor: categoryStyles.Warning.color,
    categoryTextColor: categoryStyles.Warning.textColor,
    fullContent: `
**IMPORTANT NOTICE FOR ALL ZIONFEST ATTENDEES:**

ZionFest strongly urges all fans to purchase event tickets **only through official channels** listed on our website ([www.zionfest-example.com](https://www.zionfest-example.com)) and our authorized ticketing partners.

We have received increasing reports of fraudulent tickets being sold through unofficial third-party resellers, social media groups, and individual sellers. These tickets are often counterfeit, duplicated, or invalid, and **will not grant entry** to ZionFest events.

## Risks of Buying from Unofficial Sources:

*   **Invalid/Fake Tickets:** You risk paying for a ticket that won't get you in.
*   **Inflated Prices:** Resellers often charge significantly higher prices than the official face value.
*   **No Customer Support:** If there's an issue with the ticket or the event (like postponement), you have no recourse through official channels.
*   **Scams:** You might pay for a ticket and receive nothing at all.

## How to Buy Safely:

1.  **Always** start your purchase from the official ZionFest website.
2.  Only use the links provided on our site to access authorized ticketing platforms (e.g., Loket, Tiket.com - *replace with actual partners*).
3.  **Never** buy from scalpers, social media comments/DMs, or unfamiliar websites.
4.  If a deal looks too good to be true, it probably is.

> ZionFest cannot guarantee the validity of tickets purchased from unauthorized sources and is not responsible for any issues arising from such purchases.

Protect yourself and ensure you have a genuine ticket to enjoy the positive vibes. Purchase officially and securely. Thank you for your cooperation!
    `,
  },
  {
    id: "news-5",
    title:
      "Surprise Addition! 'Island Tribe' Joins 'Island Rhythm' Bali Lineup",
    category: "Events",
    imageUrl: NewsImage2,
    excerpt:
      "Get ready for more vibes! We're excited to announce that the dynamic group 'Island Tribe' will be joining the already stellar lineup for Island Rhythm in Bali.",
    slug: "/news/island-tribe-joins-island-rhythm-bali",
    date: "17 October 2024",
    categoryColor: categoryStyles.Events.color,
    categoryTextColor: categoryStyles.Events.textColor,
    fullContent: `
Get ready for even more vibes in Bali! We are absolutely thrilled to announce a surprise addition to the already stellar lineup for the upcoming **Island Rhythm Fest** in Kuta. Please give a massive welcome to the dynamic group **'Island Tribe'!**

Known for their infectious energy, powerful harmonies, and unique blend of roots reggae with traditional island percussion, 'Island Tribe' has been captivating audiences across Southeast Asia. Their addition promises to elevate the Island Rhythm Fest experience to new heights.

## Who are 'Island Tribe'?

Hailing from the eastern islands, 'Island Tribe' brings a fresh perspective to the reggae scene. Their music often explores themes of:

*   Connection to nature and the ocean
*   Island life and culture
*   Messages of unity and resilience

They join headliners **Rhythm Rebels** and other fantastic acts for what is shaping up to be an unforgettable beachfront celebration.

> "We are honored and excited to share our music at Island Rhythm Fest," the band stated. "Bali holds a special energy, and we can't wait to connect with the fans and the other amazing artists."

## Updated Schedule

'Island Tribe' is scheduled to perform on the Sunset Reggae Stage just before the headline act. Check the **[Official Schedule Page](/schedule)** (replace with actual link) for the precise timing and the full event rundown.

Tickets for Island Rhythm Fest are selling fast! Secure yours now via the **[Ticket Center](/tickets)** (replace with actual link) if you haven't already. Prepare for an incredible night of music, dancing, and positive energy under the Bali stars!
    `,
  },
  // ... Continue adding detailed 'fullContent' for items news-6 to news-50 ...
  // Example for news-6:
  {
    id: "news-6",
    title: "A Look Back: The Rise of Indonesian Reggae Music",
    category: "Music",
    imageUrl: NewsImage3,
    excerpt:
      "From its roots to the modern sound, we explore the journey and evolution of reggae music within the vibrant Indonesian archipelago.",
    slug: "/news/history-indonesian-reggae-music",
    date: "14 October 2024",
    categoryColor: categoryStyles.Music.color,
    categoryTextColor: categoryStyles.Music.textColor,
    fullContent: `
Reggae music, born in Jamaica, has found a welcoming and fertile ground in the diverse archipelago of Indonesia. Its journey here is a fascinating story of cultural exchange, local adaptation, and the enduring appeal of its rhythms and messages.

## Early Seeds (1980s - 1990s)

While international reggae icons like Bob Marley gained global fame, the seeds of Indonesian reggae were planted somewhat later. Influences arrived through:

*   **Travelers and Tourists:** Especially in destinations like Bali, visitors brought reggae music, influencing local musicians.
*   **Returning Students/Workers:** Indonesians studying or working abroad brought back reggae records and cassettes.
*   **Underground Scenes:** Small communities and university circles began experimenting with reggae sounds. Early pioneers often blended reggae with existing Indonesian pop or rock sensibilities.

## The Growth Spurt (2000s)

The new millennium saw a significant rise in the popularity and visibility of Indonesian reggae.

*   **Breakout Artists:** Bands like **Shaggydog** (Yogyakarta, blending ska/reggae/rock), **Steven & Coconut Treez** (Jakarta, popularizing acoustic/beach reggae), and **Tony Q Rastafara** (often dubbed the 'Godfather' of Indonesian reggae) achieved mainstream recognition.
*   **Festivals Emerge:** Dedicated reggae festivals and events started appearing, providing platforms for artists and building the community.
*   **Regional Scenes:** Strong local scenes developed in various cities like Jakarta, Bandung, Yogyakarta, Bali, and parts of Sumatra and Eastern Indonesia, each with its unique flavor.

## Modern Diversity (2010s - Present)

Today, the Indonesian reggae scene is incredibly diverse:

*   **Subgenre Exploration:** Artists delve into roots, dub, dancehall, ska, rocksteady, and fusions with traditional Indonesian music (like gamelan or ethnic rhythms).
*   **Digital Age:** Social media and streaming platforms allow artists to reach wider audiences independently.
*   **Conscious Messages:** Many artists continue the tradition of using reggae to convey messages of peace, social justice, environmental awareness, and cultural pride.

> The evolution continues, with new artists constantly emerging and pushing the boundaries. Indonesian reggae is not just an import; it's a living, breathing part of the nation's musical landscape.

From humble beginnings to a nationwide movement, Indonesian reggae showcases the power of music to cross borders and resonate with the local spirit. Its future looks bright and full of rhythm.
    `,
  },
  // Add fullContent for news-7 to news-50 similarly...
];

export const concertsData = {
  // JANUARI 2025
  "2025-01-18": [
    {
      id: "reggae-jkt-25-1",
      eventName: "Roots Vibration Night Jakarta",
      bandName: "Roots Vibration Collective",
      date: "18 Januari 2025",
      time: "19:30 WIB",
      venue: { name: "Rolling Stone Cafe", city: "Jakarta" },
      tickets: [
        { type: "Presale", price: 150000, available: false }, // Sold Out
        { type: "Regular", price: 200000, available: true },
      ],
      imageUrl: TicketImage1,
    },
  ],
  // FEBRUARI 2025
  "2025-02-08": [
    {
      id: "reggae-sby-25-1",
      eventName: "Surabaya Skankin' Fest",
      bandName: "Surabaya Skankers United",
      date: "8 Februari 2025",
      time: "16:00 WIB",
      venue: { name: "Parkir Timur Plaza Surabaya", city: "Surabaya" },
      tickets: [
        { type: "Early Bird", price: 80000, available: false },
        { type: "Normal", price: 120000, available: true },
      ],
      imageUrl: TicketImage2,
    },
  ],
  "2025-02-22": [
    // <-- Tanggal dengan 2 Konser Reggae
    {
      id: "reggae-bali-25-1",
      eventName: "Sunset Reggae Session",
      bandName: "Island Sunsplash Crew",
      date: "22 Februari 2025",
      time: "17:00 WITA",
      venue: { name: "Potato Head Beach Club", city: "Bali" },
      tickets: [{ type: "General Admission", price: 250000, available: true }],
      imageUrl: TicketImage3,
    },
    {
      id: "reggae-bali-25-2",
      eventName: "Late Night Dub Chamber",
      bandName: "Dubwise Sound System ft. MC Ras Muhamad",
      date: "22 Februari 2025",
      time: "22:00 WITA",
      venue: { name: "Vault Bali", city: "Bali" },
      tickets: [
        { type: "Standard", price: 180000, available: true },
        { type: "Door Charge", price: 220000, available: true },
      ],
      imageUrl: TicketImage1,
    },
  ],
  // MARET 2025
  "2025-03-15": [
    {
      id: "reggae-bdg-25-1",
      eventName: "Bandung Dub Experiment Live",
      bandName: "Bandung Dub Experiment",
      date: "15 Maret 2025",
      time: "19:00 WIB",
      venue: { name: "Spasial", city: "Bandung" },
      tickets: [{ type: "On The Spot", price: 100000, available: true }],
      imageUrl: TicketImage2,
    },
  ],
  "2025-03-29": [
    {
      id: "reggae-yog-25-1",
      eventName: "One Love Gathering - Marley Tribute",
      bandName: "Zion's Echo Collective",
      date: "29 Maret 2025",
      time: "19:30 WIB",
      venue: { name: "Jogja National Museum", city: "Yogyakarta" },
      tickets: [
        { type: "Presale 1", price: 75000, available: false },
        { type: "Presale 2", price: 100000, available: true },
        { type: "Regular", price: 130000, available: true },
      ],
      imageUrl: TicketImage3,
    },
  ],
  // APRIL 2025
  "2025-04-12": [
    {
      id: "reggae-mks-25-1",
      eventName: "Makassar Roots Reggae Revival",
      bandName: "Celebes Reggae Connection",
      date: "12 April 2025",
      time: "20:00 WITA",
      venue: { name: "Fort Rotterdam", city: "Makassar" },
      tickets: [
        { type: "Early Entry", price: 90000, available: false }, // Sold Out Semua
        { type: "Regular", price: 120000, available: false }, // Sold Out Semua
      ],
      imageUrl: TicketImage1,
    },
  ],
  "2025-04-26": [
    {
      id: "reggae-jkt-25-2",
      eventName: "Acoustic Reggae Evening",
      bandName: "Mystic Dread (Unplugged Set)",
      date: "26 April 2025",
      time: "19:00 WIB",
      venue: { name: "Paviliun 28", city: "Jakarta" },
      tickets: [{ type: "Standard", price: 150000, available: true }],
      imageUrl: TicketImage2,
    },
  ],
  // MEI 2025
  "2025-05-10": [
    {
      id: "reggae-mdn-25-1",
      eventName: "Sumatra Reggae United Fest",
      bandName: "Medan Posse & Ras Jahknow (AUS)",
      date: "10 Mei 2025",
      time: "16:00 WIB",
      venue: { name: "Lapangan Merdeka Medan", city: "Medan" },
      tickets: [
        { type: "Presale", price: 100000, available: true },
        { type: "Normal", price: 150000, available: true },
      ],
      imageUrl: TicketImage3,
    },
  ],
  "2025-05-24": [
    {
      id: "reggae-smg-25-1",
      eventName: "Semarang Steady Beat Night",
      bandName: "Java Steady Beat Crew",
      date: "24 Mei 2025",
      time: "19:00 WIB",
      venue: { name: "Goodfellas Resto", city: "Semarang" },
      tickets: [
        { type: "Festival", price: 80000, available: true },
        { type: "Table Package (4 pax)", price: 500000, available: true },
      ],
      imageUrl: TicketImage1,
    },
  ],
  // JUNI 2025
  "2025-06-07": [
    // <-- Tanggal dengan 2 Konser Reggae
    {
      id: "reggae-jkt-25-3",
      eventName: "Jakarta Ska Explosion Vol. 5",
      bandName: "Jakarta Ska Syndicate & The Authentics",
      date: "7 Juni 2025",
      time: "15:00 WIB",
      venue: { name: "Tennis Indoor Senayan", city: "Jakarta" },
      tickets: [
        { type: "CAT 1 (Presale)", price: 180000, available: false }, // Sold Out
        { type: "CAT 1 (Normal)", price: 250000, available: true },
        { type: "CAT 2 (Festival)", price: 150000, available: true },
      ],
      imageUrl: TicketImage2,
    },
    {
      id: "reggae-tgr-25-1", // Tangerang
      eventName: "Roots & Culture Session",
      bandName: "Rasta Spirit Ensemble",
      date: "7 Juni 2025",
      time: "20:00 WIB",
      venue: {
        name: "Summarecon Mall Serpong (Outdoor Area)",
        city: "Tangerang",
      },
      tickets: [
        { type: "Free Entry", price: 0, available: true }, // Gratis
      ],
      imageUrl: TicketImage3,
    },
  ],
  "2025-06-21": [
    {
      id: "reggae-bdg-25-2",
      eventName: "Mountain Top Reggae Chill",
      bandName: "Positive Riddim Section",
      date: "21 Juni 2025",
      time: "18:30 WIB",
      venue: { name: "Lereng Anteng Panoramic Coffee Place", city: "Bandung" },
      tickets: [
        { type: "Regular", price: 120000, available: true },
        { type: "Include Dinner", price: 250000, available: true },
      ],
      imageUrl: TicketImage1,
    },
  ],
  // JULI 2025
  "2025-07-05": [
    {
      id: "reggae-sby-25-2",
      eventName: "East Java Dub Conference",
      bandName: "Dub Masters Indonesia & Local Selectors",
      date: "5 Juli 2025",
      time: "19:00 WIB",
      venue: { name: "BG Junction (Rooftop)", city: "Surabaya" },
      tickets: [
        { type: "Limited Presale", price: 70000, available: false }, // Sold Out Cepat
        { type: "Normal", price: 100000, available: false }, // Sold Out Cepat
      ],
      imageUrl: TicketImage1,
    },
  ],
  "2025-07-19": [
    {
      id: "reggae-lombok-25-1", // Lombok
      eventName: "Gili Trawangan Reggae Fest",
      bandName: "Lombok Island Vibes & International Guests",
      date: "19 Juli 2025",
      time: "16:00 WITA - Late",
      venue: { name: "Sama Sama Reggae Bar", city: "Gili Trawangan" },
      tickets: [
        { type: "Donation Based", price: 50000, available: true }, // Minimal Donasi
      ],
      imageUrl: TicketImage2,
    },
  ],
  // AGUSTUS 2025
  "2025-08-16": [
    // <-- Sehari sebelum 17an
    {
      id: "reggae-jkt-25-4",
      eventName: "Merdeka Reggae Jam",
      bandName: "Indonesia Reggae All-Stars (Tipe-X, Shaggydog, Tony Q, etc.)",
      date: "16 Agustus 2025",
      time: "15:00 WIB",
      venue: { name: "Pantai Carnaval Ancol", city: "Jakarta" },
      tickets: [
        { type: "Festival Merah", price: 170845, available: true }, // Harga Kemerdekaan
        { type: "Festival Putih", price: 170845, available: true },
        { type: "VIP Area", price: 500000, available: false }, // VIP Habis
      ],
      imageUrl: TicketImage3,
    },
    // Tidak ada konser kedua di hari yang sama untuk contoh ini
  ],
  "2025-08-30": [
    {
      id: "reggae-mks-25-2",
      eventName: "Sulawesi Sound System Culture",
      bandName: "Kaluku Sound System & Makassar Dub Collective",
      date: "30 Agustus 2025",
      time: "19:00 WITA",
      venue: { name: "Pantai Losari Area", city: "Makassar" },
      tickets: [
        { type: "Early Bird", price: 60000, available: false },
        { type: "Regular", price: 90000, available: true },
      ],
      imageUrl: TicketImage1,
    },
  ],
  // SEPTEMBER 2025
  "2025-09-13": [
    {
      id: "reggae-smg-25-2",
      eventName: "Central Java Ska Revival",
      bandName: "Semarang Skankers & Jogja Steady Beat",
      date: "13 September 2025",
      time: "19:00 WIB",
      venue: { name: "Stadium Jatidiri (Area Luar)", city: "Semarang" },
      tickets: [
        { type: "Presale", price: 85000, available: true },
        { type: "Normal", price: 110000, available: true },
      ],
      imageUrl: TicketImage2,
    },
  ],
  "2025-09-27": [
    {
      id: "reggae-bdg-25-3",
      eventName: "Lembang Reggae Camp & Jam",
      bandName: "Forest Riddims & Acoustic Roots Players",
      date: "27 September 2025",
      time: "16:00 WIB (Start Camp)",
      venue: { name: "Grafika Cikole Lembang", city: "Bandung" },
      tickets: [
        { type: "Include Camping", price: 300000, available: true },
        { type: "Concert Only (Evening)", price: 120000, available: true },
      ],
      imageUrl: TicketImage3,
    },
  ],
  // OKTOBER 2025
  "2025-10-11": [
    {
      id: "reggae-jkt-25-5",
      eventName: "International Reggae Star Live in Jakarta",
      bandName: "Alpha Blondy (Tribute Act)", // Contoh Tribute
      date: "11 Oktober 2025",
      time: "20:00 WIB",
      venue: { name: "Basket Hall Senayan", city: "Jakarta" },
      tickets: [
        { type: "GA - Phase 1", price: 450000, available: true },
        { type: "GA - Phase 2", price: 600000, available: true },
        { type: "VIP Standing", price: 850000, available: true },
      ],
      imageUrl: TicketImage1,
    },
  ],
  "2025-10-25": [
    {
      id: "reggae-sby-25-3",
      eventName: "Tribute to The Wailers",
      bandName: "Surabaya Wailers Project",
      date: "25 Oktober 2025",
      time: "19:30 WIB",
      venue: { name: "Ciputra Hall", city: "Surabaya" },
      tickets: [
        { type: "Festival", price: 150000, available: true },
        { type: "Tribune", price: 120000, available: false }, // Tribune habis
      ],
      imageUrl: TicketImage2,
    },
  ],
  // NOVEMBER 2025
  "2025-11-08": [
    {
      id: "reggae-yog-25-2",
      eventName: "Campus Reggae Invasion",
      bandName: "Shaggydog (Special Reggae Set) & Bravesboy",
      date: "8 November 2025",
      time: "15:00 WIB",
      venue: { name: "Lapangan Parkir Mandala Krida", city: "Yogyakarta" },
      tickets: [
        { type: "Presale Mahasiswa", price: 50000, available: false }, // Habis
        { type: "Presale Umum", price: 75000, available: false }, // Habis
        { type: "Normal", price: 125000, available: true },
      ],
      imageUrl: TicketImage3,
    },
  ],
  "2025-11-22": [
    // <-- Tanggal dengan 2 Konser Reggae
    {
      id: "reggae-bali-25-3",
      eventName: "Uluwatu Sunset Skank",
      bandName: "Island Soundwaves ft. DJ Sunny",
      date: "22 November 2025",
      time: "17:00 WITA",
      venue: { name: "Single Fin Uluwatu", city: "Bali" },
      tickets: [{ type: "First Drink Charge", price: 150000, available: true }],
      imageUrl: TicketImage1,
    },
    {
      id: "reggae-bali-25-4",
      eventName: "Canggu Roots Night",
      bandName: "Bali Roots Revival Collective",
      date: "22 November 2025",
      time: "20:00 WITA",
      venue: { name: "Deus Ex Machina Canggu", city: "Bali" },
      tickets: [{ type: "Regular Entry", price: 100000, available: true }],
      imageUrl: TicketImage2,
    },
  ],
  // DESEMBER 2025
  "2025-12-06": [
    {
      id: "reggae-jkt-25-6",
      eventName: "Big Reggae Bash 2025",
      bandName: "Tony Q Rastafara & Ras Muhamad Big Band",
      date: "6 Desember 2025",
      time: "19:00 WIB",
      venue: { name: "Bengkel Space SCBD", city: "Jakarta" },
      tickets: [
        { type: "Festival Early", price: 250000, available: false }, // Habis
        { type: "Festival Normal", price: 350000, available: true },
        { type: "VIP Balcony", price: 600000, available: true },
      ],
      imageUrl: TicketImage3,
    },
  ],
  "2025-12-20": [
    {
      id: "reggae-bdg-25-4",
      eventName: "Pre-Christmas Reggae Chill Out",
      bandName: "Peaceful Warriors Acoustic Trio",
      date: "20 Desember 2025",
      time: "19:00 WIB",
      venue: { name: "Kineruku", city: "Bandung" },
      tickets: [
        { type: "Limited Seat", price: 100000, available: false }, // Sangat terbatas / Sold Out
      ],
      imageUrl: TicketImage1,
    },
  ],
  "2025-12-31": [
    {
      id: "reggae-bali-25-5",
      eventName: "NYE Reggae Countdown Party",
      bandName: "Tropical Riddim Allstars & International Guest DJ",
      date: "31 Desember 2025",
      time: "19:00 WITA till late",
      venue: { name: "La Favela", city: "Bali" },
      tickets: [
        { type: "Early Bird GA", price: 400000, available: true },
        { type: "Final GA", price: 600000, available: true },
        { type: "VIP Package (Min. Spend)", price: 5000000, available: true },
      ],
      imageUrl: TicketImage2,
    },
  ],
};
