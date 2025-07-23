export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Align engineering with product goals through open collaboration",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Thrive in async, distributed teams",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Modern, scalable tech stack",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Focused on crafting user-centric solutions",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "MeetScribe - A mobile app for recording, transcribing, and managing face-to-face meetings",
    description: "Currently building",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Open to full-time roles",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
]
  ;

export const projects = [
  {
    id: 1,
    title: "Cache Up",
    des: "Engineered an AI-powered news app that automatically scraped and summarized top Hacker News stories daily using NLP, reducing reading time by 80% with concise 200-word summaries.",
    img: "/cacheup.png",
    iconLists: ["/mcp.png", "/openai.svg", "/next.svg", "/flutter.svg", "/docker.svg", "/vercel.svg", "/fastapi.svg"],
    link: "https://cacheup.tech",
    longDes: [
      '📥 Built an AI-powered news app that summarizes top Hacker News stories daily.',
      '🧠 Leveraged NLP models to generate concise 200-word summaries entirely through AI.',
      '🔄 End-to-end automation: from content scraping to summarization and delivery.',
      '⚡ Designed for speed and clarity — stay updated in under a minute per story.',
      '📱 Built with a minimal UI for fast, distraction-free reading experience.',
      '🚀 Eliminated information overload while preserving the core of each tech trend.'
    ]
  },
  {
    id: 2,
    title: "URL Shortener",
    des: "Link or URL Shortener for long URLs.",
    img: "/urls.png",
    iconLists: ["/vercel.svg", "/node.svg", "/re.svg", "/knex.svg", "/neon.svg"],
    link: "https://url.rajvora.tech",
    longDes: [
      'Link or URL Shortener for long URLs.',
      'All links on this website use this project.',
      'Used as a personal url shortener for my websites.',
      'Also shows number of link clicks for each shortened code.'
    ]
  },
  {
    id: 3,
    title: "MeetScribe",
    des: "A mobile app for recording, transcribing, and managing face-to-face meetings.",
    img: "/meetscribe.png",
    iconLists: ["/flutter.svg", "/mcp.png", "/openai.svg", "/docker.svg", "/fastapi.svg"],
    link: "https://github.com/raj-vora/meetscribe",
    longDes: [
      'User Authentication: Secure login and simple registration to manage personal meeting data.',
      'Meeting Dashboard: View all past meetings with filtering options and integrated audio playback.',
      'One - Tap Recording: Start / stop recordings easily; audio is saved locally and uploaded for transcription.',
      'Real - Time Processing Status: Meetings show a “transcribing…” label until the transcript is ready.',
      'Transcription Viewer: View full transcription text once available; optional sync with audio playback.',
      'API Integration: Interacts with endpoints for login, fetching meetings, uploading audio, and retrieving transcripts.'
    ]
  },
  {
    id: 4,
    title: "Travnal",
    des: "Social Media and travellers are something that goes a long way together. So rather than travellers adjusting their content for social media. We decided to build social media tailor made for their needs",
    img: "/travnalImg.png",
    iconLists: ["/node.svg", "/re.svg", "/three.svg", "/mongodb.svg"],
    link: "https://url.rajvora.tech/travnal",
    longDes: [
      'Create your own trips',
      'Clean and Sweet timeline view of trips',
      'Mark your location real time and express what you feel like',
      'Browse across your feeds',
      'Search for required locations and trips others have made',
      'Follow people, get followed by others'
    ]
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/raj-vora"
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/rajvora25/"
  },
  {
    id: 3,
    img: "/insta.svg",
    link: "https://instagram.com/rajvora._"
  },
];
