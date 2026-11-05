// All the static text and links on the site live here.
import { Award, Download, Star, TrendingUp } from 'lucide-react';
import { appLinks } from './apps.js';

export const links = {
  siteUrl: 'https://careers.fitness22.com', // where this site is published (used for share links)
  applyEmail: 'jobs@fitness22.com',
  contactEmail: 'info@fitness22.com',
};

// Header (and footer) navigation. An item with `subMenu` opens a dropdown on hover.
export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Who We Are', to: '/who-we-are' },
  {
    label: 'Our Apps',
    to: '/our-apps',
    subMenu: appLinks.map((app) => ({
      label: app.name,
      description: app.tagline,
      icon: app.icon,
      to: `/our-apps#${app.sectionId}`,
    })),
  },
  { label: 'Contact Us', to: '/contact' },
];

export const pages = {
  whoWeAre: { title: 'Who We Are', image: '/images/pages/who-we-are.webp' },
  ourApps: {
    title: 'Our Apps',
    image: '/images/pages/our-apps.jpg',
    intro: 'We Develop Apps That Are Used Every Day by *Millions of People* Around the World',
  },
  contact: {
    title: 'Get in Touch',
    image: '/images/pages/contact.jpg',
    heading: 'We’d Love to Hear *From You!*',
    text: 'Improving the world of fitness can be a hard task, so we know we can’t do it alone. If you’d like to work with us, give us feedback, or just say hello, drop us a line!',
    topics: ['General', 'Business Partnerships', 'Support*', 'Work With Us'],
    note: '*We recommend contacting support via the help section in the app',
    appsHeading: '*Our Apps* in the App Store and Google Play',
    appsText: 'We’ve created a lot of apps over the years. Feel free to check them out and let us know what you think, we’re all ears.',
  },
};

// Text wrapped in *asterisks* in titles is shown in brand green (see components/Accent.jsx).

// Shown on every job page, above the job description.
export const jobPage = {
  introTitle: 'Why *Fitness22*',
  intro: [
    'At Fitness22, we build products that help millions of people live healthier, happier lives- and we do it with technology that’s smart, simple, and deeply human.',
    'We’re a small team, which means you’re never several layers removed from the product. You’ll work directly with Product, Design, Mobile, and Data, have real ownership over what you build, and see your work reach users quickly.',
  ],
  // Icons come from lucide-react: https://lucide.dev/icons
  highlights: [
    { icon: Download, title: '100M+ downloads', text: 'Our apps are used by millions of people around the world' },
    { icon: Star, title: 'Rated 4.9 on the App Store', text: 'From hundreds of thousands of ratings across our apps' },
    { icon: Award, title: 'Chosen by Apple, Google & TechCrunch', text: 'As one of the best apps in health and fitness' },
    { icon: TrendingUp, title: 'Profitable & bootstrapped', text: 'Building fitness products since 2011' },
  ],
  descriptionTitle: 'What you’re *applying for*',
};

export const hero = {
  title: 'Welcome to our *career site*',
  video: '/video/hero-budapest.mp4', // Budapest trip video, 1920×1080, no sound
  // Phones show only the middle of the video in portrait, so they get that middle slice cut out at
  // full resolution (912×1080) — sharp on high-density phone screens, and a smaller file.
  videoMobile: '/video/hero-budapest-phone.mp4',
  poster: '/images/hero-poster.jpg',
};

export const whoWeAre = {
  title: 'The *people* behind the code',
  paragraphs: [
    'At Fitness22, we build products that help millions of people live healthier, happier lives- and we do it with technology that’s smart, simple, and deeply human.',
    'Our strength is the people behind the code: innovative minds, thoughtful makers, and teammates who care deeply about their craft and believe in using technology to drive real-world change. We move fast, care deeply, and give each other the space to grow.',
    'If you’re looking for a place where your ideas matter, your impact is real, and your teammates feel like partners in something bigger- you’ll feel right at home here.',
  ],
};

export const workplace = {
  title: 'Workplace & culture',
  paragraphs: [
    'We believe people do their best work when work fits naturally into their lives- not the other way around.',
    'At Fitness22, we value focus during the workday and real time away from it. We trust people to manage their time, take responsibility for their work, and step away when they need to recharge. The culture is supportive and flexible, with an understanding that everyone has a life outside the office. We put people first, not as a slogan, but in how we plan, communicate, and work together every day.',
  ],
  images: [1, 2, 3, 4].map((n) => `/images/workplace/${n}.webp`),
};

export const whatYouDo = {
  title: 'What You’ll *Actually* Do Here',
  paragraphs: [
    'People who join Fitness22 don’t get lost in layers or process. You’ll work directly on real products used by millions of people, and you’ll see the impact of your decisions quickly. Roles here are hands-on and outcome-driven. From shaping ideas and solving problems to building, releasing, and improving them over time.',
    'Growth here comes from doing meaningful work and taking on real responsibility. You’ll deepen your skills by working closely with experienced teammates, learning through challenges, and owning problems end to end. There’s room to grow by improving how things are built, expanding your scope over time, and continuously raising the bar on quality. If you value clarity, ownership, and steady, real growth- you’ll feel comfortable here.',
  ],
};

export const gallery = [1, 2, 3, 4, 5].map((n) => `/images/gallery/${n}.webp`);

// Offices (Who We Are page): pick one from the list to see its details and zoom the map to it.
// `email` and `phone` are optional.
export const offices = [
  {
    name: 'Main Office (Petah Tiqwa)',
    address: ['Derech Yitshak Rabin 1', 'Petah Tikva', 'Israel'],
    lat: 32.090149,
    lng: 34.8625494,
    email: 'jobs@fitness22.com',
    phone: '03-7444330',
  },
  {
    name: 'Larnaca, Cyprus',
    address: ['Cyprus', '6045 Larnaka', 'Cyprus'],
    lat: 34.9183053,
    lng: 33.6201012,
  },
];

// Our Apps page numbers (they count up from 0 when scrolled into view)
export const stats = [
  { value: '92', unit: 'M', label: 'Downloads' },
  { value: '2.4', unit: 'M', label: '5 Star Reviews' },
  { value: '107', unit: 'M', label: 'Kilometers Logged' },
  { value: '11.4', unit: 'M', label: 'Fitness Plans' },
];

// Downloads per region on the Our Apps page map, in millions (dot size grows with the number).
// location is [latitude, longitude].
// Where the map's arcs start from
export const headquarters = { name: 'Fitness22 HQ', location: [32.08, 34.88] };

export const downloadsByRegion = [
  { id: 'north-america', name: 'North America', label: '14.8M', value: 14.8, location: [40, -100] },
  { id: 'europe', name: 'Europe', label: '7.7M', value: 7.7, location: [50, 10] },
  { id: 'asia', name: 'Asia', label: '3.1M', value: 3.1, location: [35, 105] },
  { id: 'middle-east', name: 'Middle East', label: '2.8M', value: 2.8, location: [24, 48], labelBelow: true },
  { id: 'africa', name: 'Africa', label: '1.5M', value: 1.5, location: [2, 20] },
  { id: 'oceania', name: 'Oceania', label: '1.3M', value: 1.3, location: [-25, 134] },
  { id: 'south-america', name: 'S.America', label: '500K', value: 0.5, location: [-15, -60] },
];

// Our Apps page reviews (real App Store reviews, from fitness22.com)
export const reviews = {
  rating: 4.9,
  title: '4.9/5.0',
  subtitle: 'Overall Avg Rating',
  items: [
    {
      title: 'Best running app!!!',
      text: 'User - friendly and awesome! I’ve had a few other running/exercise apps before. This running app is by far the best! Easy to use and the features are great. It even sends you motivation messages occasionally.',
      name: 'Brielle',
      app: 'Running Trainer',
      icon: '/images/apps/running-icon.png',
    },
    {
      title: 'Amazing app!',
      text: 'I’ve been using this app for years now and I have to say that, this is by far the best app I ever used for my weekly home and gym exercises. It has lots of tips and good videos. I bought the app like 3 years ago if not longer. Never had any issue with it.',
      name: 'Kovasznai',
      app: 'Gymverse™',
      icon: '/images/apps/gymverse-icon.png',
    },
    {
      title: 'Awesome I love this app.',
      text: 'Getting back into running after a couple years off is not as easy as it seems…. It’s very easy to stop and walk as soon as I feel winded. But this app pushes you to go just a little bit further because you know a walk break is coming soon!! Love it!! It’s getting me back into the runner I used to be!',
      name: 'Andicats',
      app: '5K Runner',
      icon: '/images/apps/5k-icon.png',
    },
  ],
};

export const about = {
  title: 'About *Fitness22*',
  text: 'At Fitness22, we build health and fitness apps used by millions of people worldwide. Our products help users move more, train smarter, and build sustainable habits- combining technology, data, and thoughtful design to make healthy living more accessible.',
  facts: [
    { label: 'Founded in', value: '2011' },
    { label: 'Co-workers', value: '1-50' },
  ],
};
