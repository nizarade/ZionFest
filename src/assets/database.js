import TicketImage1 from "../assets/ticket_img_1.png";
import TicketImage2 from "../assets/ticket_img_2.png";
import TicketImage3 from "../assets/ticket_img_3.png";
import NewsImage1 from "../assets/news_img_1.png";
import NewsImage2 from "../assets/news_img_2.png";
import NewsImage3 from "../assets/news_img_3.png";

export const announcementData = [
  {
    id: 1,
    title: "Slide Pertama",
    content: "Ini adalah konten untuk slide pertama. Menjelaskan fitur A.",
    // imageUrl: "/images/slide1.jpg" // Opsional
  },
  {
    id: 2,
    title: "ReggaePora - Malang", // Menggunakan contoh dari gambar Anda
    content: "Tony Q Rastafara On Stage diundur 2 Jam",
  },
  {
    id: 3,
    title: "Slide Ketiga",
    content: "Ini adalah konten untuk slide ketiga. Menjelaskan fitur C.",
  },
  {
    id: 4,
    title: "Slide Keempat",
    content: "Konten terakhir sebagai contoh tambahan.",
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
  // Original 10 items (adjusting IDs and colors for consistency)
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
  },
  {
    id: "news-4",
    title: "Warning: Beware of Unofficial Ticket Resellers",
    category: "Warning",
    imageUrl: NewsImage1, // Placeholder was specific, using cyclic now
    excerpt:
      "ZionFest urges all fans to purchase tickets only through official channels. Reports of fraudulent tickets being sold by third parties have increased...",
    slug: "/news/beware-unofficial-tickets",
    date: "12 October 2024",
    categoryColor: categoryStyles.Warning.color,
    categoryTextColor: categoryStyles.Warning.textColor,
  },
  {
    id: "news-5",
    title:
      "Surprise Addition! 'Island Tribe' Joins 'Island Rhythm' Bali Lineup",
    category: "Events",
    imageUrl: NewsImage2, // Placeholder was specific, using cyclic now
    excerpt:
      "Get ready for more vibes! We're excited to announce that the dynamic group 'Island Tribe' will be joining the already stellar lineup for Island Rhythm in Bali.",
    slug: "/news/island-tribe-joins-island-rhythm-bali",
    date: "17 October 2024", // Date slightly adjusted for variety
    categoryColor: categoryStyles.Events.color,
    categoryTextColor: categoryStyles.Events.textColor,
  },
  {
    id: "news-6",
    title: "A Look Back: The Rise of Indonesian Reggae Music",
    category: "Music",
    imageUrl: NewsImage3, // Placeholder was specific, using cyclic now
    excerpt:
      "From its roots to the modern sound, we explore the journey and evolution of reggae music within the vibrant Indonesian archipelago.",
    slug: "/news/history-indonesian-reggae-music",
    date: "14 October 2024",
    categoryColor: categoryStyles.Music.color,
    categoryTextColor: categoryStyles.Music.textColor,
  },
  {
    id: "news-7",
    title:
      "ZionFest Merch Store Updated: New T-Shirts & Accessories Available!",
    category: "Info",
    imageUrl: NewsImage1, // Placeholder was specific, using cyclic now
    excerpt:
      "Show your love for the vibes! Check out the newly updated ZionFest official merchandise store for fresh t-shirt designs, hats, and more.",
    slug: "/news/zionfest-merch-store-updated",
    date: "11 October 2024",
    categoryColor: categoryStyles.Info.color,
    categoryTextColor: categoryStyles.Info.textColor,
  },
  {
    id: "news-8",
    title: "Behind the Scenes: Crafting the Perfect Sound at ZionFest Events",
    category: "Culture",
    imageUrl: NewsImage2, // Placeholder was specific, using cyclic now
    excerpt:
      "Ever wondered how we achieve that crystal-clear sound? An inside look at the sound engineering and technical preparations that go into every ZionFest show.",
    slug: "/news/behind-the-scenes-zionfest-sound",
    date: "08 October 2024",
    categoryColor: categoryStyles.Culture.color,
    categoryTextColor: categoryStyles.Culture.textColor,
  },
  {
    id: "news-9",
    title: "Photo Recap: 'Reggater Fest' Malang Highlights",
    category: "Events",
    imageUrl: NewsImage3, // Placeholder was specific, using cyclic now
    excerpt:
      "Relive the magic! Browse through the official photo gallery capturing the unforgettable moments and vibrant energy of Reggater Fest in Malang.",
    slug: "/news/recap-reggater-fest-malang",
    date: "05 October 2024",
    categoryColor: categoryStyles.Events.color,
    categoryTextColor: categoryStyles.Events.textColor,
  },
  {
    id: "news-10",
    title: "Healthy Vibes: Food Vendor Spotlight at ZionFest",
    category: "Info",
    imageUrl: NewsImage1, // Placeholder was specific, using cyclic now
    excerpt:
      "Fuel your soul the right way! Learn about the diverse and healthy food options available from our curated vendors at upcoming ZionFest events.",
    slug: "/news/zionfest-food-vendor-spotlight",
    date: "02 October 2024",
    categoryColor: categoryStyles.Info.color,
    categoryTextColor: categoryStyles.Info.textColor,
  },

  // Generated items 11-50
  {
    id: "news-11",
    title: "New Single 'Ocean Deep' by Coastal Vibes Released",
    category: "Music",
    imageUrl: NewsImage2,
    excerpt:
      "Coastal Vibes just dropped their latest single 'Ocean Deep', a soulful reggae track perfect for sunset listening. Stream it now on all platforms!",
    slug: "/news/coastal-vibes-ocean-deep-single",
    date: "30 September 2024",
    categoryColor: categoryStyles.Music.color,
    categoryTextColor: categoryStyles.Music.textColor,
  },
  {
    id: "news-12",
    title: "Volunteer Call: Join the Green Team for Upcoming Festival",
    category: "Community",
    imageUrl: NewsImage3,
    excerpt:
      "Passionate about reggae and sustainability? We're looking for volunteers to join our Green Team and help keep our festival grounds clean and green.",
    slug: "/news/volunteer-green-team-festival",
    date: "28 September 2024",
    categoryColor: categoryStyles.Community.color,
    categoryTextColor: categoryStyles.Community.textColor,
  },
  {
    id: "news-13",
    title: "Artist Profile: The Journey of 'Electric Nomads'",
    category: "Culture",
    imageUrl: NewsImage1,
    excerpt:
      "Explore the unique blend of electronic music and roots reggae that defines the sound of 'Electric Nomads'. Learn about their influences and story.",
    slug: "/news/artist-profile-electric-nomads",
    date: "26 September 2024",
    categoryColor: categoryStyles.Culture.color,
    categoryTextColor: categoryStyles.Culture.textColor,
  },
  {
    id: "news-14",
    title: "Safety First: Tips for a Safe and Enjoyable Concert Experience",
    category: "Warning",
    imageUrl: NewsImage2,
    excerpt:
      "Your safety is our priority. Read these important tips regarding hydration, belongings, meeting points, and respecting fellow attendees at ZionFest events.",
    slug: "/news/concert-safety-tips",
    date: "24 September 2024",
    categoryColor: categoryStyles.Warning.color,
    categoryTextColor: categoryStyles.Warning.textColor,
  },
  {
    id: "news-15",
    title: "'Tribal Sound' Surabaya: Venue Map & Schedule Released",
    category: "Events",
    imageUrl: NewsImage3,
    excerpt:
      "Planning to attend Tribal Sound in Surabaya? Check out the official venue map, stage schedules, and important timings to make the most of your experience.",
    slug: "/news/tribal-sound-surabaya-map-schedule",
    date: "22 September 2024",
    categoryColor: categoryStyles.Events.color,
    categoryTextColor: categoryStyles.Events.textColor,
  },
  {
    id: "news-16",
    title: "FAQ Update: Answers to Your Top ZionFest Questions",
    category: "Info",
    imageUrl: NewsImage1,
    excerpt:
      "We've updated our Frequently Asked Questions page with answers about ticketing, entry requirements, permitted items, and more. Find your answers here!",
    slug: "/news/zionfest-faq-update",
    date: "20 September 2024",
    categoryColor: categoryStyles.Info.color,
    categoryTextColor: categoryStyles.Info.textColor,
  },
  {
    id: "news-17",
    title: "The Influence of Ska on Modern Reggae Rhythms",
    category: "Music",
    imageUrl: NewsImage2,
    excerpt:
      "Tracing the lineage: How the upbeat energy of Ska laid the groundwork for many rhythms we hear in reggae music today. An essential history lesson.",
    slug: "/news/influence-ska-on-reggae",
    date: "18 September 2024",
    categoryColor: categoryStyles.Music.color,
    categoryTextColor: categoryStyles.Music.textColor,
  },
  {
    id: "news-18",
    title: "Fan Art Friday: Showcasing Community Creations",
    category: "Community",
    imageUrl: NewsImage3,
    excerpt:
      "Check out the amazing artwork submitted by talented fans inspired by ZionFest and reggae culture! See this week's highlights.",
    slug: "/news/fan-art-friday-showcase",
    date: "16 September 2024",
    categoryColor: categoryStyles.Community.color,
    categoryTextColor: categoryStyles.Community.textColor,
  },
  {
    id: "news-19",
    title: "The Visual Language of Reggae: Album Art & Symbolism",
    category: "Culture",
    imageUrl: NewsImage1,
    excerpt:
      "Beyond the music: exploring the iconic imagery, colors (red, gold, green), and symbols often associated with reggae album covers and art.",
    slug: "/news/visual-language-reggae-art",
    date: "14 September 2024",
    categoryColor: categoryStyles.Culture.color,
    categoryTextColor: categoryStyles.Culture.textColor,
  },
  {
    id: "news-20",
    title: "Lost & Found Information for Recent Events",
    category: "Info",
    imageUrl: NewsImage2,
    excerpt:
      "Did you lose something at Reggater Fest or Island Rhythm? Visit our Lost & Found page for information on how to inquire about missing items.",
    slug: "/news/lost-and-found-information",
    date: "12 September 2024",
    categoryColor: categoryStyles.Info.color,
    categoryTextColor: categoryStyles.Info.textColor,
  },
  {
    id: "news-21",
    title: "Reggae Revival Tour Adds Second Jakarta Date!",
    category: "Events",
    imageUrl: NewsImage3,
    excerpt:
      "Due to overwhelming demand, a second show has been added for the Reggae Revival Tour stop in Jakarta! Tickets go on sale next week.",
    slug: "/news/reggae-revival-jakarta-second-date",
    date: "10 September 2024",
    categoryColor: categoryStyles.Events.color,
    categoryTextColor: categoryStyles.Events.textColor,
  },
  {
    id: "news-22",
    title: "Playlist Spotlight: Deep Roots & Culture Selections",
    category: "Music",
    imageUrl: NewsImage1,
    excerpt:
      "Dive deep into the foundations of reggae with our curated playlist featuring classic roots artists and conscious lyrics. Perfect for reflection.",
    slug: "/news/playlist-spotlight-deep-roots",
    date: "08 September 2024",
    categoryColor: categoryStyles.Music.color,
    categoryTextColor: categoryStyles.Music.textColor,
  },
  {
    id: "news-23",
    title: "Community Meetup Planned for Yogyakarta Show",
    category: "Community",
    imageUrl: NewsImage2,
    excerpt:
      "Connect with fellow reggae lovers! A pre-show fan meetup is being organized for the upcoming event in Yogyakarta. Details inside.",
    slug: "/news/community-meetup-yogyakarta",
    date: "06 September 2024",
    categoryColor: categoryStyles.Community.color,
    categoryTextColor: categoryStyles.Community.textColor,
  },
  {
    id: "news-24",
    title: "Understanding ZionFest's Environmental Pledge",
    category: "Info",
    imageUrl: NewsImage3,
    excerpt:
      "Learn more about ZionFest's commitment to sustainability, waste reduction, and eco-friendly practices at all our events.",
    slug: "/news/zionfest-environmental-pledge",
    date: "04 September 2024",
    categoryColor: categoryStyles.Info.color,
    categoryTextColor: categoryStyles.Info.textColor,
  },
  {
    id: "news-25",
    title: "The Role of Basslines in Reggae Music",
    category: "Culture",
    imageUrl: NewsImage1,
    excerpt:
      "It's all about the low end! Exploring the crucial role of the bass guitar in creating the iconic groove and foundation of reggae music.",
    slug: "/news/role-of-basslines-in-reggae",
    date: "02 September 2024",
    categoryColor: categoryStyles.Culture.color,
    categoryTextColor: categoryStyles.Culture.textColor,
  },
  {
    id: "news-26",
    title: "Presale Tickets for Bandung Show Selling Fast!",
    category: "Events",
    imageUrl: NewsImage2,
    excerpt:
      "Don't miss out! Presale tickets for the upcoming 'Urban Groove Fest' in Bandung are nearly sold out. Secure yours before they're gone.",
    slug: "/news/bandung-presale-selling-fast",
    date: "31 August 2024",
    categoryColor: categoryStyles.Events.color,
    categoryTextColor: categoryStyles.Events.textColor,
  },
  {
    id: "news-27",
    title: "Emerging Artist Alert: 'Java Sound System'",
    category: "Music",
    imageUrl: NewsImage3,
    excerpt:
      "Keep an ear out for 'Java Sound System', a promising new act blending traditional Javanese elements with modern reggae vibes.",
    slug: "/news/emerging-artist-java-sound-system",
    date: "29 August 2024",
    categoryColor: categoryStyles.Music.color,
    categoryTextColor: categoryStyles.Music.textColor,
  },
  {
    id: "news-28",
    title: "Share Your ZionFest Story! #ZionVibes",
    category: "Community",
    imageUrl: NewsImage1,
    excerpt:
      "We want to hear about your favorite ZionFest moments! Share your photos and stories on social media using the hashtag #ZionVibes.",
    slug: "/news/share-your-zionfest-story",
    date: "27 August 2024",
    categoryColor: categoryStyles.Community.color,
    categoryTextColor: categoryStyles.Community.textColor,
  },
  {
    id: "news-29",
    title: "Accessibility Information for ZionFest Venues",
    category: "Info",
    imageUrl: NewsImage2,
    excerpt:
      "ZionFest is committed to accessibility. Find information regarding accessible entrances, viewing areas, and services at our main venues.",
    slug: "/news/accessibility-information-venues",
    date: "25 August 2024",
    categoryColor: categoryStyles.Info.color,
    categoryTextColor: categoryStyles.Info.textColor,
  },
  {
    id: "news-30",
    title: "Reggae Fashion: Style and Statement",
    category: "Culture",
    imageUrl: NewsImage3,
    excerpt:
      "From comfortable clothing to symbolic accessories, exploring the connection between reggae culture and personal style.",
    slug: "/news/reggae-fashion-style-statement",
    date: "23 August 2024",
    categoryColor: categoryStyles.Culture.color,
    categoryTextColor: categoryStyles.Culture.textColor,
  },
  {
    id: "news-31",
    title: "Venue Change Announced for Semarang Coastal Jam",
    category: "Events",
    imageUrl: NewsImage1,
    excerpt:
      "Important update: The 'Coastal Jam Session' in Semarang has been moved to a new venue. Please check the event page for updated details.",
    slug: "/news/semarang-coastal-jam-venue-change",
    date: "21 August 2024",
    categoryColor: categoryStyles.Events.color,
    categoryTextColor: categoryStyles.Events.textColor,
  },
  {
    id: "news-32",
    title: "Remembering Bob Marley: His Enduring Legacy",
    category: "Music",
    imageUrl: NewsImage2,
    excerpt:
      "Reflecting on the life, music, and enduring message of peace and unity from the legendary King of Reggae, Bob Marley.",
    slug: "/news/remembering-bob-marley-legacy",
    date: "19 August 2024",
    categoryColor: categoryStyles.Music.color,
    categoryTextColor: categoryStyles.Music.textColor,
  },
  {
    id: "news-33",
    title: "Fan Project: Compiling a ZionFest Live Bootleg Archive",
    category: "Community",
    imageUrl: NewsImage3,
    excerpt:
      "A group of dedicated fans is working to archive live recordings from past ZionFest events. Learn how you can contribute.",
    slug: "/news/fan-project-live-bootleg-archive",
    date: "17 August 2024",
    categoryColor: categoryStyles.Community.color,
    categoryTextColor: categoryStyles.Community.textColor,
  },
  {
    id: "news-34",
    title: "Reminder: Prohibited Items at ZionFest Events",
    category: "Warning",
    imageUrl: NewsImage1,
    excerpt:
      "For a smooth entry, please review the list of prohibited items that are not allowed inside ZionFest venues. Check the list before you go.",
    slug: "/news/reminder-prohibited-items",
    date: "15 August 2024",
    categoryColor: categoryStyles.Warning.color,
    categoryTextColor: categoryStyles.Warning.textColor,
  },
  {
    id: "news-35",
    title: "Partner Spotlight: Local Craft Vendors",
    category: "Info",
    imageUrl: NewsImage2,
    excerpt:
      "Discover unique handmade goods! We're proud to partner with talented local artisans showcasing their crafts at select ZionFest events.",
    slug: "/news/partner-spotlight-local-crafts",
    date: "13 August 2024",
    categoryColor: categoryStyles.Info.color,
    categoryTextColor: categoryStyles.Info.textColor,
  },
  {
    id: "news-36",
    title: "The Sound System Culture: Roots and Influence",
    category: "Culture",
    imageUrl: NewsImage3,
    excerpt:
      "Exploring the history and impact of Jamaican sound system culture on the development and spread of reggae and dancehall music worldwide.",
    slug: "/news/sound-system-culture-history",
    date: "11 August 2024",
    categoryColor: categoryStyles.Culture.color,
    categoryTextColor: categoryStyles.Culture.textColor,
  },
  {
    id: "news-37",
    title: "Medan 'Tribal Beatdown': Early Bird Tickets Sold Out!",
    category: "Events",
    imageUrl: NewsImage1,
    excerpt:
      "The Early Bird tickets for the highly anticipated 'Tribal Beatdown' event in Medan are now officially sold out. Regular tickets available soon.",
    slug: "/news/medan-tribal-beatdown-early-bird-sold-out",
    date: "09 August 2024",
    categoryColor: categoryStyles.Events.color,
    categoryTextColor: categoryStyles.Events.textColor,
  },
  {
    id: "news-38",
    title: "Reggae Covers: Artists Put Their Spin on Classics",
    category: "Music",
    imageUrl: NewsImage2,
    excerpt:
      "From rock anthems to pop hits, listen to some unique and creative reggae interpretations of well-known songs by various artists.",
    slug: "/news/reggae-covers-classic-songs",
    date: "07 August 2024",
    categoryColor: categoryStyles.Music.color,
    categoryTextColor: categoryStyles.Music.textColor,
  },
  {
    id: "news-39",
    title: "ZionFest Fans Connect Online: Join Our Forum!",
    category: "Community",
    imageUrl: NewsImage3,
    excerpt:
      "Looking to connect with other fans, discuss music, and share experiences? Join the official ZionFest online community forum today!",
    slug: "/news/zionfest-online-forum-launch",
    date: "05 August 2024",
    categoryColor: categoryStyles.Community.color,
    categoryTextColor: categoryStyles.Community.textColor,
  },
  {
    id: "news-40",
    title: "Travel Packages Available for Bali 'Island Rhythm'",
    category: "Info",
    imageUrl: NewsImage1,
    excerpt:
      "Coming from out of town for Island Rhythm in Bali? Check out our official travel packages including accommodation and ticket bundles.",
    slug: "/news/travel-packages-island-rhythm-bali",
    date: "03 August 2024",
    categoryColor: categoryStyles.Info.color,
    categoryTextColor: categoryStyles.Info.textColor,
  },
  {
    id: "news-41",
    title: "Dancehall vs Reggae: Understanding the Differences",
    category: "Culture",
    imageUrl: NewsImage2,
    excerpt:
      "While related, Dancehall and Reggae have distinct sounds and cultural contexts. Learn about the key differences between these two Jamaican genres.",
    slug: "/news/dancehall-vs-reggae-differences",
    date: "01 August 2024",
    categoryColor: categoryStyles.Culture.color,
    categoryTextColor: categoryStyles.Culture.textColor,
  },
  {
    id: "news-42",
    title: "Makassar 'Global Sound Fest': Lineup Announcement Soon!",
    category: "Events",
    imageUrl: NewsImage3,
    excerpt:
      "Get ready, Makassar! The full artist lineup for the upcoming 'Global Sound Fest' will be announced next week. Stay tuned!",
    slug: "/news/makassar-global-sound-fest-lineup-soon",
    date: "30 July 2024",
    categoryColor: categoryStyles.Events.color,
    categoryTextColor: categoryStyles.Events.textColor,
  },
  {
    id: "news-43",
    title: "The Art of Dub Poetry: Voices of Resistance",
    category: "Music",
    imageUrl: NewsImage1,
    excerpt:
      "Exploring the powerful combination of spoken word poetry and reggae/dub rhythms, often used to address social and political issues.",
    slug: "/news/art-of-dub-poetry",
    date: "28 July 2024",
    categoryColor: categoryStyles.Music.color,
    categoryTextColor: categoryStyles.Music.textColor,
  },
  {
    id: "news-44",
    title: "Community Radio Spotlight: Spreading Reggae Vibes",
    category: "Community",
    imageUrl: NewsImage2,
    excerpt:
      "Highlighting local and online community radio stations dedicated to playing reggae music and supporting independent artists.",
    slug: "/news/community-radio-reggae-spotlight",
    date: "26 July 2024",
    categoryColor: categoryStyles.Community.color,
    categoryTextColor: categoryStyles.Community.textColor,
  },
  {
    id: "news-45",
    title: "Notice: Potential Traffic Delays Near Jakarta Venue",
    category: "Warning",
    imageUrl: NewsImage3,
    excerpt:
      "Attendees heading to the upcoming Jakarta show are advised to allow extra travel time due to expected traffic near the venue area.",
    slug: "/news/traffic-warning-jakarta-venue",
    date: "24 July 2024",
    categoryColor: categoryStyles.Warning.color,
    categoryTextColor: categoryStyles.Warning.textColor,
  },
  {
    id: "news-46",
    title: "ZionFest Official App: Your Festival Companion",
    category: "Info",
    imageUrl: NewsImage1,
    excerpt:
      "Download the official ZionFest app for schedules, maps, artist info, notifications, and more. Available now for iOS and Android!",
    slug: "/news/zionfest-official-app-download",
    date: "22 July 2024",
    categoryColor: categoryStyles.Info.color,
    categoryTextColor: categoryStyles.Info.textColor,
  },
  {
    id: "news-47",
    title: "Reggae's Global Reach: Influence Around the World",
    category: "Culture",
    imageUrl: NewsImage2,
    excerpt:
      "From South America to Europe and Asia, exploring how reggae music has traveled the globe and influenced local music scenes.",
    slug: "/news/reggae-global-reach-influence",
    date: "20 July 2024",
    categoryColor: categoryStyles.Culture.color,
    categoryTextColor: categoryStyles.Culture.textColor,
  },
  {
    id: "news-48",
    title: "Final Batch of VIP Tickets Released for Island Rhythm Bali",
    category: "Events",
    imageUrl: NewsImage3,
    excerpt:
      "Last chance for the ultimate experience! A very limited final batch of VIP tickets for 'Island Rhythm' Bali is now available.",
    slug: "/news/final-vip-tickets-island-rhythm-bali",
    date: "18 July 2024",
    categoryColor: categoryStyles.Events.color,
    categoryTextColor: categoryStyles.Events.textColor,
  },
  {
    id: "news-49",
    title: "Indonesian Reggae Legends: Pioneers of the Scene",
    category: "Music",
    imageUrl: NewsImage1,
    excerpt:
      "Celebrating the artists and bands who pioneered the reggae sound in Indonesia and paved the way for today's vibrant scene.",
    slug: "/news/indonesian-reggae-legends-pioneers",
    date: "16 July 2024",
    categoryColor: categoryStyles.Music.color,
    categoryTextColor: categoryStyles.Music.textColor,
  },
  {
    id: "news-50",
    title: "Photo Contest: Capture the Spirit of ZionFest",
    category: "Community",
    imageUrl: NewsImage2,
    excerpt:
      "Share your best photos from any ZionFest event for a chance to win merchandise and tickets! Submit your entries by the end of the month.",
    slug: "/news/zionfest-photo-contest",
    date: "14 July 2024",
    categoryColor: categoryStyles.Community.color,
    categoryTextColor: categoryStyles.Community.textColor,
  },
];

export const concertsData = {
  // JANUARI 2025
  '2025-01-18': [
      {
          id: 'reggae-jkt-25-1',
          eventName: 'Roots Vibration Night Jakarta',
          bandName: 'Roots Vibration Collective',
          date: '18 Januari 2025',
          time: '19:30 WIB',
          venue: { name: 'Rolling Stone Cafe', city: 'Jakarta' },
          tickets: [
              { type: 'Presale', price: 150000, available: false }, // Sold Out
              { type: 'Regular', price: 200000, available: true }
          ],
          imageUrl: TicketImage1
      }
  ],
  // FEBRUARI 2025
  '2025-02-08': [
      {
          id: 'reggae-sby-25-1',
          eventName: 'Surabaya Skankin\' Fest',
          bandName: 'Surabaya Skankers United',
          date: '8 Februari 2025',
          time: '16:00 WIB',
          venue: { name: 'Parkir Timur Plaza Surabaya', city: 'Surabaya' },
          tickets: [
              { type: 'Early Bird', price: 80000, available: false },
              { type: 'Normal', price: 120000, available: true }
          ],
          imageUrl: TicketImage2
      }
  ],
  '2025-02-22': [ // <-- Tanggal dengan 2 Konser Reggae
      {
          id: 'reggae-bali-25-1',
          eventName: 'Sunset Reggae Session',
          bandName: 'Island Sunsplash Crew',
          date: '22 Februari 2025',
          time: '17:00 WITA',
          venue: { name: 'Potato Head Beach Club', city: 'Bali' },
          tickets: [
              { type: 'General Admission', price: 250000, available: true }
          ],
          imageUrl: TicketImage3
      },
      {
          id: 'reggae-bali-25-2',
          eventName: 'Late Night Dub Chamber',
          bandName: 'Dubwise Sound System ft. MC Ras Muhamad',
          date: '22 Februari 2025',
          time: '22:00 WITA',
          venue: { name: 'Vault Bali', city: 'Bali' },
          tickets: [
              { type: 'Standard', price: 180000, available: true },
              { type: 'Door Charge', price: 220000, available: true }
          ],
          imageUrl: TicketImage1
      }
  ],
  // MARET 2025
  '2025-03-15': [
      {
          id: 'reggae-bdg-25-1',
          eventName: 'Bandung Dub Experiment Live',
          bandName: 'Bandung Dub Experiment',
          date: '15 Maret 2025',
          time: '19:00 WIB',
          venue: { name: 'Spasial', city: 'Bandung' },
          tickets: [
              { type: 'On The Spot', price: 100000, available: true }
          ],
          imageUrl:TicketImage2
      }
  ],
  '2025-03-29': [
      {
          id: 'reggae-yog-25-1',
          eventName: 'One Love Gathering - Marley Tribute',
          bandName: 'Zion\'s Echo Collective',
          date: '29 Maret 2025',
          time: '19:30 WIB',
          venue: { name: 'Jogja National Museum', city: 'Yogyakarta' },
          tickets: [
              { type: 'Presale 1', price: 75000, available: false },
              { type: 'Presale 2', price: 100000, available: true },
              { type: 'Regular', price: 130000, available: true }
          ],
          imageUrl: TicketImage3
      }
  ],
  // APRIL 2025
  '2025-04-12': [
      {
          id: 'reggae-mks-25-1',
          eventName: 'Makassar Roots Reggae Revival',
          bandName: 'Celebes Reggae Connection',
          date: '12 April 2025',
          time: '20:00 WITA',
          venue: { name: 'Fort Rotterdam', city: 'Makassar' },
          tickets: [
              { type: 'Early Entry', price: 90000, available: false }, // Sold Out Semua
              { type: 'Regular', price: 120000, available: false } // Sold Out Semua
          ],
          imageUrl: TicketImage1
      }
  ],
  '2025-04-26': [
      {
          id: 'reggae-jkt-25-2',
          eventName: 'Acoustic Reggae Evening',
          bandName: 'Mystic Dread (Unplugged Set)',
          date: '26 April 2025',
          time: '19:00 WIB',
          venue: { name: 'Paviliun 28', city: 'Jakarta' },
          tickets: [
              { type: 'Standard', price: 150000, available: true }
          ],
          imageUrl: TicketImage2
      }
  ],
  // MEI 2025
  '2025-05-10': [
      {
          id: 'reggae-mdn-25-1',
          eventName: 'Sumatra Reggae United Fest',
          bandName: 'Medan Posse & Ras Jahknow (AUS)',
          date: '10 Mei 2025',
          time: '16:00 WIB',
          venue: { name: 'Lapangan Merdeka Medan', city: 'Medan' },
          tickets: [
              { type: 'Presale', price: 100000, available: true },
              { type: 'Normal', price: 150000, available: true }
          ],
          imageUrl: TicketImage3
      }
  ],
  '2025-05-24': [
      {
          id: 'reggae-smg-25-1',
          eventName: 'Semarang Steady Beat Night',
          bandName: 'Java Steady Beat Crew',
          date: '24 Mei 2025',
          time: '19:00 WIB',
          venue: { name: 'Goodfellas Resto', city: 'Semarang' },
          tickets: [
              { type: 'Festival', price: 80000, available: true },
              { type: 'Table Package (4 pax)', price: 500000, available: true }
          ],
          imageUrl: TicketImage1
      }
  ],
  // JUNI 2025
  '2025-06-07': [ // <-- Tanggal dengan 2 Konser Reggae
      {
          id: 'reggae-jkt-25-3',
          eventName: 'Jakarta Ska Explosion Vol. 5',
          bandName: 'Jakarta Ska Syndicate & The Authentics',
          date: '7 Juni 2025',
          time: '15:00 WIB',
          venue: { name: 'Tennis Indoor Senayan', city: 'Jakarta' },
          tickets: [
              { type: 'CAT 1 (Presale)', price: 180000, available: false }, // Sold Out
              { type: 'CAT 1 (Normal)', price: 250000, available: true },
              { type: 'CAT 2 (Festival)', price: 150000, available: true }
          ],
          imageUrl: TicketImage2
      },
      {
          id: 'reggae-tgr-25-1', // Tangerang
          eventName: 'Roots & Culture Session',
          bandName: 'Rasta Spirit Ensemble',
          date: '7 Juni 2025',
          time: '20:00 WIB',
          venue: { name: 'Summarecon Mall Serpong (Outdoor Area)', city: 'Tangerang' },
          tickets: [
              { type: 'Free Entry', price: 0, available: true } // Gratis
          ],
          imageUrl: TicketImage3
      }
  ],
  '2025-06-21': [
      {
          id: 'reggae-bdg-25-2',
          eventName: 'Mountain Top Reggae Chill',
          bandName: 'Positive Riddim Section',
          date: '21 Juni 2025',
          time: '18:30 WIB',
          venue: { name: 'Lereng Anteng Panoramic Coffee Place', city: 'Bandung' },
          tickets: [
              { type: 'Regular', price: 120000, available: true },
              { type: 'Include Dinner', price: 250000, available: true }
          ],
          imageUrl: TicketImage1
      }
  ],
  // JULI 2025
  '2025-07-05': [
      {
          id: 'reggae-sby-25-2',
          eventName: 'East Java Dub Conference',
          bandName: 'Dub Masters Indonesia & Local Selectors',
          date: '5 Juli 2025',
          time: '19:00 WIB',
          venue: { name: 'BG Junction (Rooftop)', city: 'Surabaya' },
          tickets: [
              { type: 'Limited Presale', price: 70000, available: false }, // Sold Out Cepat
              { type: 'Normal', price: 100000, available: false }         // Sold Out Cepat
          ],
          imageUrl: TicketImage1
      }
  ],
  '2025-07-19': [
      {
          id: 'reggae-lombok-25-1', // Lombok
          eventName: 'Gili Trawangan Reggae Fest',
          bandName: 'Lombok Island Vibes & International Guests',
          date: '19 Juli 2025',
          time: '16:00 WITA - Late',
          venue: { name: 'Sama Sama Reggae Bar', city: 'Gili Trawangan' },
          tickets: [
              { type: 'Donation Based', price: 50000, available: true } // Minimal Donasi
          ],
          imageUrl: TicketImage2
      }
  ],
  // AGUSTUS 2025
  '2025-08-16': [ // <-- Sehari sebelum 17an
      {
          id: 'reggae-jkt-25-4',
          eventName: 'Merdeka Reggae Jam',
          bandName: 'Indonesia Reggae All-Stars (Tipe-X, Shaggydog, Tony Q, etc.)',
          date: '16 Agustus 2025',
          time: '15:00 WIB',
          venue: { name: 'Pantai Carnaval Ancol', city: 'Jakarta' },
          tickets: [
              { type: 'Festival Merah', price: 170845, available: true }, // Harga Kemerdekaan
              { type: 'Festival Putih', price: 170845, available: true },
              { type: 'VIP Area', price: 500000, available: false } // VIP Habis
          ],
          imageUrl: TicketImage3
      }
      // Tidak ada konser kedua di hari yang sama untuk contoh ini
  ],
  '2025-08-30': [
      {
          id: 'reggae-mks-25-2',
          eventName: 'Sulawesi Sound System Culture',
          bandName: 'Kaluku Sound System & Makassar Dub Collective',
          date: '30 Agustus 2025',
          time: '19:00 WITA',
          venue: { name: 'Pantai Losari Area', city: 'Makassar' },
          tickets: [
              { type: 'Early Bird', price: 60000, available: false },
              { type: 'Regular', price: 90000, available: true }
          ],
          imageUrl: TicketImage1
      }
  ],
  // SEPTEMBER 2025
  '2025-09-13': [
      {
          id: 'reggae-smg-25-2',
          eventName: 'Central Java Ska Revival',
          bandName: 'Semarang Skankers & Jogja Steady Beat',
          date: '13 September 2025',
          time: '19:00 WIB',
          venue: { name: 'Stadium Jatidiri (Area Luar)', city: 'Semarang' },
          tickets: [
              { type: 'Presale', price: 85000, available: true },
              { type: 'Normal', price: 110000, available: true }
          ],
          imageUrl: TicketImage2
      }
  ],
  '2025-09-27': [
      {
          id: 'reggae-bdg-25-3',
          eventName: 'Lembang Reggae Camp & Jam',
          bandName: 'Forest Riddims & Acoustic Roots Players',
          date: '27 September 2025',
          time: '16:00 WIB (Start Camp)',
          venue: { name: 'Grafika Cikole Lembang', city: 'Bandung' },
          tickets: [
              { type: 'Include Camping', price: 300000, available: true },
              { type: 'Concert Only (Evening)', price: 120000, available: true }
          ],
          imageUrl: TicketImage3
      }
  ],
  // OKTOBER 2025
  '2025-10-11': [
      {
          id: 'reggae-jkt-25-5',
          eventName: 'International Reggae Star Live in Jakarta',
          bandName: 'Alpha Blondy (Tribute Act)', // Contoh Tribute
          date: '11 Oktober 2025',
          time: '20:00 WIB',
          venue: { name: 'Basket Hall Senayan', city: 'Jakarta' },
          tickets: [
              { type: 'GA - Phase 1', price: 450000, available: true },
              { type: 'GA - Phase 2', price: 600000, available: true },
              { type: 'VIP Standing', price: 850000, available: true }
          ],
          imageUrl: TicketImage1
      }
  ],
  '2025-10-25': [
      {
          id: 'reggae-sby-25-3',
          eventName: 'Tribute to The Wailers',
          bandName: 'Surabaya Wailers Project',
          date: '25 Oktober 2025',
          time: '19:30 WIB',
          venue: { name: 'Ciputra Hall', city: 'Surabaya' },
          tickets: [
              { type: 'Festival', price: 150000, available: true },
              { type: 'Tribune', price: 120000, available: false } // Tribune habis
          ],
          imageUrl: TicketImage2
      }
  ],
  // NOVEMBER 2025
  '2025-11-08': [
      {
          id: 'reggae-yog-25-2',
          eventName: 'Campus Reggae Invasion',
          bandName: 'Shaggydog (Special Reggae Set) & Bravesboy',
          date: '8 November 2025',
          time: '15:00 WIB',
          venue: { name: 'Lapangan Parkir Mandala Krida', city: 'Yogyakarta' },
          tickets: [
              { type: 'Presale Mahasiswa', price: 50000, available: false }, // Habis
              { type: 'Presale Umum', price: 75000, available: false }, // Habis
              { type: 'Normal', price: 125000, available: true }
          ],
          imageUrl: TicketImage3
      }
  ],
  '2025-11-22': [ // <-- Tanggal dengan 2 Konser Reggae
      {
          id: 'reggae-bali-25-3',
          eventName: 'Uluwatu Sunset Skank',
          bandName: 'Island Soundwaves ft. DJ Sunny',
          date: '22 November 2025',
          time: '17:00 WITA',
          venue: { name: 'Single Fin Uluwatu', city: 'Bali' },
          tickets: [
              { type: 'First Drink Charge', price: 150000, available: true }
          ],
          imageUrl: TicketImage1
      },
      {
          id: 'reggae-bali-25-4',
          eventName: 'Canggu Roots Night',
          bandName: 'Bali Roots Revival Collective',
          date: '22 November 2025',
          time: '20:00 WITA',
          venue: { name: 'Deus Ex Machina Canggu', city: 'Bali' },
          tickets: [
              { type: 'Regular Entry', price: 100000, available: true }
          ],
          imageUrl: TicketImage2
      }
  ],
  // DESEMBER 2025
  '2025-12-06': [
      {
          id: 'reggae-jkt-25-6',
          eventName: 'Big Reggae Bash 2025',
          bandName: 'Tony Q Rastafara & Ras Muhamad Big Band',
          date: '6 Desember 2025',
          time: '19:00 WIB',
          venue: { name: 'Bengkel Space SCBD', city: 'Jakarta' },
          tickets: [
              { type: 'Festival Early', price: 250000, available: false }, // Habis
              { type: 'Festival Normal', price: 350000, available: true },
              { type: 'VIP Balcony', price: 600000, available: true }
          ],
          imageUrl: TicketImage3
      }
  ],
  '2025-12-20': [
      {
          id: 'reggae-bdg-25-4',
          eventName: 'Pre-Christmas Reggae Chill Out',
          bandName: 'Peaceful Warriors Acoustic Trio',
          date: '20 Desember 2025',
          time: '19:00 WIB',
          venue: { name: 'Kineruku', city: 'Bandung' },
          tickets: [
              { type: 'Limited Seat', price: 100000, available: false } // Sangat terbatas / Sold Out
          ],
          imageUrl: TicketImage1
      }
  ],
  '2025-12-31': [
      {
          id: 'reggae-bali-25-5',
          eventName: 'NYE Reggae Countdown Party',
          bandName: 'Tropical Riddim Allstars & International Guest DJ',
          date: '31 Desember 2025',
          time: '19:00 WITA till late',
          venue: { name: 'La Favela', city: 'Bali' },
          tickets: [
              { type: 'Early Bird GA', price: 400000, available: true },
              { type: 'Final GA', price: 600000, available: true },
              { type: 'VIP Package (Min. Spend)', price: 5000000, available: true }
          ],
          imageUrl: TicketImage2
      }
  ]
};

// Anda bisa menggunakan variabel 'concertsData' ini di dalam komponen React Anda.
// Pastikan path imageUrl (/images/reggae/...) disesuaikan jika Anda memiliki gambar nyata.
