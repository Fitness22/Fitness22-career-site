// Open positions.
// To add a job: copy one object, change the fields, and write the description in Markdown.
// To remove a job: delete its object. The order here is the order on the site.
//
// Fields:
//   slug        – used in the URL: /jobs/<slug>
//   title       – job title
//   department  – e.g. "Mobile"
//   location    – must match a location name in content.js
//   workplace   – optional, e.g. "Onsite" / "Hybrid" / "Remote"
//   description – Markdown text (## for headings, - for bullets, **bold**)

export const jobs = [
  {
    slug: 'lead-user-acquisition-manager',
    title: 'Lead User Acquisition Manager',
    department: 'Marketing',
    location: 'Main Office (Petah Tiqwa)',
    workplace: 'Onsite',
    description: `
**Help shape the next chapter of growth at Fitness22.**

Fitness22 builds mobile health and fitness products used by millions of people around the world, with more than 100 million downloads across our portfolio.

We’re looking for a **Lead User Acquisition Manager** to take a leading role in growing our products and expanding how we acquire users.

This is a hands-on position with real ownership. You’ll manage significant acquisition activity, test new opportunities, work closely with Product, Design, Data, and senior leadership, and have the freedom to turn strong ideas into action quickly.

## What You’ll Own

**Paid User Acquisition**\\
Manage and optimize acquisition across channels such as Meta, TikTok, Apple Ads, and Google App Campaigns, from strategy and budget allocation to testing and day-to-day execution.

**New Growth Channels**\\
Identify and develop additional acquisition opportunities, including publisher partnerships, affiliate networks, influencers, and performance partners.

**Full-Funnel Performance**\\
Look beyond CPI and ROAS to understand what happens after the install. Work closely with Product and Data on onboarding, conversion, retention, subscriptions, and LTV.

**Creative Performance**\\
Partner with our in-house Design team to develop and test creative concepts, analyze performance, and continuously improve what works.

**Measurement & Insights**\\
Use AppsFlyer and our internal analytics to understand performance, identify opportunities, and connect marketing investment to real business outcomes.

## What We’re Looking For

- 4+ years of hands-on experience in user acquisition or performance marketing for **mobile apps.**
- Strong hands-on experience with major mobile acquisition platforms such as Meta, Google App Campaigns, Apple Ads, and/or TikTok.
- Experience managing meaningful acquisition budgets and making optimization and allocation decisions.
- Strong analytical skills and a solid understanding of attribution, funnels, cohorts, retention, and LTV.
- Experience working with mobile attribution platforms such as AppsFlyer.
- A test-and-learn mindset and the ability to turn data into action.
- Comfortable taking ownership while remaining hands-on with campaigns.

Experience with subscription products, publisher or affiliate partnerships, web-to-app funnels, or health and fitness products is a strong advantage.

## Why Fitness22?

- Work on established mobile products with more than **100 million downloads worldwide.**
- Take real ownership of acquisition strategy and execution.
- Work closely with Product, Design, Data, and senior leadership.
- Test ideas quickly without layers of bureaucracy.
`,
  },
  {
    slug: 'full-stack-developer-70-backend',
    title: 'Full Stack Developer (70% Backend)',
    department: 'Cloud',
    location: 'Main Office (Petah Tiqwa)',
    description: `
## Build technology that helps millions of people change their lives

Every day, millions of people use Fitness22 products to get stronger, become healthier, and build habits that last.

Building products at that scale creates meaningful engineering challenges. Performance matters. Reliability matters. Architecture matters. And the systems you build directly affect the experience people have every day.

We’re looking for a Full Stack Developer who wants to take ownership of those challenges and help us build products that work exceptionally well at scale.

Fitness22 is a profitable, bootstrapped product company that’s been building mobile fitness and wellness products since 2011, with more than 100 million downloads worldwide.

We’re a small team, which means engineers aren’t several layers removed from the product. You’ll work directly with Product, Design, Mobile, and Data, have real ownership over what you build, and see your work reach users quickly.

---

## About the role

This is a backend-first role (approximately 70%) for an experienced Full Stack Developer who enjoys solving complex engineering challenges while still building polished React applications when needed.

You’ll design and build scalable backend services that power our mobile products, contribute to modern web applications, and work closely with Product, Design, Mobile, and Data to deliver features from idea to production.

You’ll have significant ownership over architecture and technical decisions, with the opportunity to influence how we build, ship, and scale our platform.

---

## Our stack

**Node.js · TypeScript · React · PostgreSQL · MongoDB · AWS · Kubernetes**

You don’t need experience with every technology in our stack. Strong engineering fundamentals and the ability to learn matter more than matching every tool.

---

## What you’ll do

- Design and build backend services and APIs that support products used by millions.
- Solve technical challenges around performance, reliability, architecture, and scale.
- Build primarily with Node.js and TypeScript, and contribute to React applications when needed.
- Own technical problems from design through implementation and production.
- Collaborate with Product, Design, Mobile, and Data.
- Use modern AI tools as part of your development workflow.

---

## What we’re looking for

- 4+ years of professional software development experience.
- Strong production experience with Node.js and TypeScript.
- Strong backend engineering fundamentals and experience building production systems and APIs.
- Full Stack experience and the ability to work with React when needed.
- Strong engineering judgment, ownership, and problem-solving skills.
- Excellent communication and collaboration skills.

---

## Nice to have

- Experience with relational or NoSQL databases.
- AWS, GCP, or other cloud platforms.
- Kubernetes, microservices, distributed systems, or CI/CD.
- Mobile development experience.
- Degree in Computer Science, Engineering, or a related field.

---

## Why join Fitness22?

Build products that help millions of people live healthier, stronger lives.

Work in a small engineering team where your decisions matter, your work reaches users quickly, and you can have real influence over both the technology and the product.
`,
  },
  {
    slug: 'senior-ios-developer',
    title: 'Senior iOS Developer',
    department: 'Mobile',
    location: 'Main Office (Petah Tiqwa)',
    description: `
Fitness22 creates industry-leading fitness apps that empower over 50 million people worldwide to live healthier, happier lives. We pride ourselves on delivering sleek, beautifully designed technology built for scale and quality.

**What You'll Be Doing:**

- Design, develop and maintain high‑quality iOS applications using Swift and modern iOS frameworks, ensuring performance, reliability and accessibility.
- Lead technical design and architecture for mobile features, collaborating with Product, Design, Backend Engineering and QA to define requirements and delivery plans.
- Own core areas of the codebase, deliver production‑ready solutions, and mentor other engineers through code reviews, guidance and pairing.
- Implement robust automated tests (unit, integration and UI) and contribute to continuous integration and deployment pipelines to maintain a high standard of quality.
- Drive improvements in app performance, crash reduction and battery efficiency through profiling, monitoring and optimisation.
- Collaborate on product discovery, contribute technical input to roadmap decisions, and estimate implementation effort for new features and experiments.
- Champion best practices for code quality, maintainability and documentation; help define and maintain engineering standards.
- Support localisation and internationalisation efforts to ensure a consistent experience across markets.

**What We're Looking For:**

- 5+ years' professional experience developing iOS applications, with a portfolio of shipped apps or significant feature contributions - **Mandatory**
- Strong proficiency in Swift and familiarity with Objective‑C interop, iOS SDKs, UIKit and/or SwiftUI.
- Experience with architecture patterns such as MVVM, VIPER or coordinator patterns, ability to make pragmatic architecture decisions for product and team scale.
- Solid understanding of concurrency (GCD, Combine, async/await), memory management and performance optimisation on iOS.
- Practical experience with testing strategies (unit, UI, snapshot), CI/CD tools and mobile release processes (App Store Connect, TestFlight).
- Comfort working with RESTful APIs, GraphQL or WebSocket integrations; familiarity with JSON, Codable and networking libraries.
- Experience mentoring peers, conducting code reviews and contributing to an inclusive engineering culture.
- Excellent communication skills in English and a collaborative mindset working across product, design and analytics.

**Nice-to-have:**

- Experience with SwiftUI and animation frameworks for rich, high‑quality UI experiences.
- Familiarity with mobile analytics, A/B testing frameworks and feature flagging systems.
- Knowledge of native libraries for audio, video, workouts or sensor data integration (HealthKit, CoreMotion).
- Experience working on consumer health, fitness or wellbeing products and understanding of related privacy and regulatory considerations.
- Experience with cross‑platform tooling (e.g., Kotlin Multiplatform Mobile) or contributing to multi‑platform strategies.
`,
  },
];

export const findJob = (slug) => jobs.find((job) => job.slug === slug);
