import { WorkProjectProps } from './components/WorkProject/WorkProject';

export const projects: WorkProjectProps[] = [
  {
    title: 'Lawncare SaaS',
    yearRange: '(2023 - 2024)',
    color: '#B9DD98',
    icon: 'GiOakLeaf',
    description: `Our client was a lawncare provider offering a wide range of services. Previously, he had managed his business through multiple third-party apps and brute-force spreadsheets.
    
    He needed a solution that would bring all of that functionality into a single platform: work scheduling, customer billing, route planning, and crew management in a single app.`,
    technology: [
      'React',
      'Vite',
      'Supabase',
      'NestJS',
      'Prisma',
      'PostgreSQL',
      'Cloudflare',
      'Justifi',
      'Google Maps',
      'Tailwind',
      'Sengrid',
      'i18next',
    ],
    contributions: [
      {
        title: 'Authentication',
        text: 'Utilizing the flexibility of Supabase, I wrote our authentication to support three separate methods through two different login portals: email & password, SMS OTP, and email magic link.',
      },
      {
        title: 'Crew Application + time tracking',
        text: `I led the development of a companion app to the admin app, which allowed crew members to manage jobs, clock time, and send location data to the admin dashboard.`,
      },
      {
        title: 'Customer Application',
        text: `Late in development, we received requirements for a third application for customers to be able to interact with their data more dynamically than just receiving invoices by email.
        
        I collaborated closely with the product team to define concrete requirements that could be accomplished on time. I developed the app and then delivered what I estimated ahead of schedule.`,
      },
      {
        title: 'Cloudflare Deployment',
        text: `The customer app forced us to pivot to a mono repo for our codebase, which invalidated our initial deployment pipeline to Cloudflare.
        
        After restructuring the entire codebase and resolving several major version updates, I also rewrote our deployment scripts to manage all of the apps for preview, staging, and production. All within the timeline for delivering the customer app.`,
      },
    ],
  },

  {
    title: 'Digital Healthcare Provider',
    yearRange: '(2020 - 2022)',
    color: '#AAA4FF',
    icon: 'GiMedicines',
    description: `An all-digital healthcare provider, offering in-app video calls or at-home visits with doctors.
    
The CMS we built included features for staff management, an internal messaging system, a video and chat interface for interacting with customers, a medical chart with 3rd party API integrations for retrieving medication data, and a customer app where users can schedule appointments and be seen by a doctor within the same day.`,
    technology: [
      'Angular',
      'RxJS',
      'Ionic',
      'Auth0',
      'PDF Make',
      'Twilio (SMS & Video)',
      'TypeORM',
      'PostgreSQL',
    ],
    contributions: [
      {
        title: 'Primary Feature Developer',
        text: 'This was my first project as an associate developer. I had previously learned React, but had to learn Angular on the fly. Within 7 months of joining the project, I was the primary feature developer due to my extensive knowledge of the codebase and my ability to develop quickly and find creative solutions for our client.',
      },
      {
        title: 'Leadership & Collaboration',
        text: 'When the client began to hire their own internal development team, I continued to develop features while helping to onboard their team and write documentation in anticipation of handing off the project.',
      },
      {
        title: 'Medical Charts',
        text: `Our largest feature request: building out charting for physicians to use during visits. This would have to replace all of the functionality being provided to them by their previous, third party solution.
        
My contributions were largely in the UI, making sure the dense page was intuitive and easy to understand and simple to navigate. I also built out a realtime save, which made sure their updates were always persisted without creating conflicting data with their manual saves.`,
      },
      {
        title: 'Mental Health Charts',
        text: `I created the ability to make variants of medical charts in such a way that they could be modular and customized for specific visit types. In this case, I built it out to handle therapy appointments, a new service the client is now able to offer their patients.`,
      },
      {
        title: 'Optimization',
        text: 'When I first joined, many large requests were not paginated, including years of messages that would attempt load simultaneously. I created a new paginated messaging system that significantly improved performance and also allowed providers to copy ranges of message text for documentation purposes.',
      },
      {
        title: 'Message Triage',
        text: `Care coordinators have a required time limit within which they must respond to any message from a patient.
        
I workshopped and refined a performant query that was able to aggregate a massive amount of data, which gave care coordinators an eagle-eyed view of all communication in the app. They could now watch their timing and triage those messages to other providers in a timely and precise manner.`,
      },
    ],
  },

  {
    title: 'Senior Care Facility Event Calendar',
    yearRange: '(2020 - 2023)',
    color: '#DD98AD',
    icon: 'GiFamilyHouse',
    description: `One of our longest and most loyal clients. They managed many senior care facilities that needed to provide event scheduling, signage, and food menus in addition to general facility management.`,
    technology: [
      'Angular',
      'RxJS',
      'Ionic',
      'RRule',
      'TypeORM',
      'React',
      'NestJS',
      'Prisma',
      'Supabase',
      'PostgreSQL',
    ],
    contributions: [
      {
        title: 'SaaS Proof of Concept',
        text: `The first app we were supporting was working, but they aspired to rebuild the app with newer technology as a SaaS.
        
        I led the development of this project, defining requirements and building out foundation of both the front end and API.`,
      },
      {
        title: 'Custom Calendar & Event Recurrence',
        text: `The original app made use of a third party library to handle calendars and display of recurring events. Because of the intent of building a SaaS, the cost of using such services skyrocketed.
        
I chose to build my own custom-built calendar component that could automatically handle recurrence by utilizing RRule. It was responsive to mobile display and was able to more precisely meet the needs of the client more than our prior solution while also saving them a lot of money.`,
      },
    ],
  },

  {
    title: 'Teacher Credential Portal',
    yearRange: '(2023)',
    color: '#DDCE98',
    icon: 'GiBookCover',
    description: `Applying for teacher state credentials can be complicated, and keeping tracking of those applications even moreso.
      
      Our client designed a platform to bring all of the required steps into one place. They provided the designs, I provided the front end, and a separate team built the API.`,
    technology: ['React', 'Vite', 'Tailwind', 'NestJS', 'Framer Motion', 'CVA'],
    contributions: [
      {
        title: 'Collaboration',
        text: `I was largely working solo on this project, with wireframes and documentation provided from foreign teams.
        
I took care to build simple, easy to understand components for them to implement once our time on the project was complete. I carefully studied their wireframes so I could communicate and ask the right questions, which resulted in oversights being discovered or requirements being adjusted.`,
      },
      {
        title: 'Implementing their API',
        text: `When we received a late-notice rushed request to implement their other team's API at the last minute, I buckled down and got it integrated the same night with scant documentation.`,
      },
    ],
  },

  {
    title: 'Law Document Annotation',
    yearRange: '(2021 - 2022)',
    color: '#98BDDD',
    icon: 'GiScrollQuill',
    description: `As a lawyer, our client found himself spending an excessive amount of time managing documents for cases.
    
We helped him build a platform that allows multiple users to collaborate in realtime on their documents per case by parsing scanned paper documents for text, allowing highlighting of text per line with notes, and let him manage that work with user management & case assignment`,
    technology: ['React', 'Stripe', 'Framer Motion', 'NestJS', 'Auth0'],
    contributions: [
      {
        title: 'Realtime Collaboration',
        text: 'In order to keep track of who was working on what, I came up with a solution to allow users to see who was working alongside them in a document and to watch their changes come in live.',
      },
      {
        title: 'Internal Component Library',
        text: 'I collaborated with a fellow teammate to begin development of our own component library to help us build more precisely the things we wanted to. We put that component library to use within this product.',
      },
      {
        title: 'Authentication',
        text: 'Security was important to our client, so I implemented 2-factor authentication with Auth0.',
      },
    ],
  },

  {
    title: 'Wine Distributor Site & CMS',
    yearRange: '(2019 - 2020)',
    color: '#FF4A80',
    icon: 'GiWineBottle',
    description: `This was a solo, freelance project for a local wine distributor.
    
    Their old website was very out of date and they were hoping for a brand refresh in addition to building out some new features.`,
    technology: ['React', 'Angular', 'Heroku', 'PostgreSQL', 'Auth0'],
    contributions: [
      {
        title: 'Requirements & Designs',
        text: 'Because I was the only developer, I was responsible for every aspect of the project. I worked alongside the client to discover their requirements and to come up with designs they could be excited about.',
      },
      {
        title: 'CMS + Authentication',
        text: 'Previously, they had to do a new release for every update they wanted to make to their website, no matter how small. I made it possible for them to make small content updates with an internal CMS. This involved implementing authentication with Auth0 and creating an entire separate app from the primary website.',
      },
      {
        title: 'Event Management',
        text: 'I designed a system that allowed them to schedule events, both public and client only, where the client schedule was only visible behind an authenticated portal.',
      },
    ],
  },
];
