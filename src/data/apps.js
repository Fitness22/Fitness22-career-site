// Fitness22 apps, shown on the Our Apps page (and in the header's "Our Apps" menu).
const img = (file) => `/images/apps/${file}`;

export const apps = [
  {
    id: 'gymverse',
    name: 'Gymverse™',
    tagline: 'Build Muscle. Look Amazing.',
    icons: [img('gymverse-icon.png')],
    // Phone screenshots, back to front: the last one is the full phone shown on top
    screenshots: [img('gymverse-1.webp'), img('gymverse-2.webp'), img('gymverse-3.webp')],
    description:
      'We know that getting to the gym can be hard. We thought that creating an app that takes the guesswork out of building a weight-lifting plan would make things easier. Gymverse™ was developed to personally curate routines for every body type and fitness objective using over 500+ exercises and counting. We leverage our data to take the gym experience to the next level, creating smart predictive algorithms to help users progress and reach their goals! We continue to strive to meet our objective providing every person with the smartest training.',
    rating: '4.9 out of 5 - 96K Ratings',
    appStore: 'https://apps.apple.com/ph/app/workout-gym-workout-planner/id1048454034',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.fitness22.workout&hl=en&gl=US',
  },
  {
    id: 'runner',
    name: '5K & 10K',
    tagline: 'Go From Couch to Runner in No Time',
    icons: [img('5k-icon.png'), img('10k-icon.png')],
    screenshots: [img('runner-1.webp'), img('runner-2.webp'), img('runner-3.webp')],
    description:
      'Running is a sport that requires discipline and motivation, but not everyone knows where to start or how to progress. 5K & 10K were created to bridge the gap between the user’s ability and their goals. Using our proprietary technology, these apps understand the delicate starting points of the user and guide them on their personal journey to reach their goals. Developed and designed by runners, the app is able to break down the running plan into small achievable steps that are perfect for anyone who wants to start running or get in shape. With smart recommendations and progression capabilities, 5K & 10K are the #1 apps in their category.',
    rating: '4.9 out of 5 - 107K Ratings',
    appStore: 'https://apps.apple.com/ph/app/couch-to-5k-runner/id448357306',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.clearskyapps.fitnessfamily.Run5K&hl=en&gl=US',
  },
  {
    id: 'running-trainer',
    name: 'Running Trainer',
    theme: 'light', // the other apps use the default dark section
    tagline: 'Tracker & Coach',
    icons: [img('running-icon.png')],
    screenshots: [img('running-1.webp'), img('running-2.webp'), img('running-3.webp')],
    description:
      'We never underestimate the power of data, that’s why we created Running Trainer, the smartest running app. Packed with detailed tracking of pace, location, distance, elevation, heart rate and running splits, it enables our users to have greater control over their performance. We’ve also developed world-class running programs to help our users reach every goal. From 5K to full marathons, the plan will guide runners step by step until they cross the finish line.',
    rating: '4.9 out of 5 - 83K Ratings',
    appStore: 'https://apps.apple.com/ph/app/running-distance-tracker-pro/id1205237896',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.fitness22.running&hl=en&gl=US',
  },
];

// Store pages listing all Fitness22 apps (used on the Contact page).
export const developerPages = {
  appStore: 'https://apps.apple.com/us/developer/fitness22-ltd/id383171664',
  googlePlay: 'https://play.google.com/store/apps/dev?id=6419234961105920523&hl=en&gl=US',
};
