// All the static text and links on the site live here.
import { Award, Download, Star, TrendingUp } from 'lucide-react';
import { apps } from './apps.js';

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
    subMenu: apps.map((app) => ({
      label: app.name,
      description: app.tagline,
      icon: app.icons[0],
      to: `/our-apps#${app.id}`,
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
  video: '/video/hero-hd.mp4', // the original video, untouched (2276×1280)
  // Phones show only the middle of the video in portrait, so they get that middle slice cut out at
  // full resolution (1088×1280) — sharp on high-density phone screens, and a smaller file.
  videoMobile: '/video/hero-phone.mp4',
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

// Offices on the map (Who We Are page). Clicking one opens its address in Google Maps.
// `label`: which side of the pin its name appears on — 'top' (default), 'left' or 'right'.
export const offices = [
  {
    name: 'Main Office · Petah Tikva',
    address: 'Derech Yitshak Rabin 1, Petah Tikva, Israel',
    lat: 32.090149,
    lng: 34.8625494,
    label: 'left',
  },
  {
    name: 'Larnaca, Cyprus',
    address: 'Larnaca, Cyprus',
    lat: 34.9183053,
    lng: 33.6201012,
    label: 'right',
  },
];

export const about = {
  title: 'About *Fitness22*',
  text: 'At Fitness22, we build health and fitness apps used by millions of people worldwide. Our products help users move more, train smarter, and build sustainable habits- combining technology, data, and thoughtful design to make healthy living more accessible.',
  facts: [
    { label: 'Founded in', value: '2011' },
    { label: 'Co-workers', value: '1-50' },
  ],
};
