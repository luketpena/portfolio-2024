import { WorkProjectProps } from './components/WorkProject/WorkProject';

export const projects: WorkProjectProps[] = [
  {
    title: 'Lawncare SaaS',
    yearRange: '(2023 - 2024)',
    color: '#B9DD98',
    icon: 'GiOakLeaf',
    description: `Our client was a lawncare provider offering a wide range of services who managed his business through multiple third-party apps and brute-force spreadsheets.
    
Key features included defining and scheduling work, location tracking, invoices and billing, and crew and subcontractor management.`,
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
        text: 'Utilizing the flexibility of Supabase, I wrote our authentication supporting three separate methods through two different portals: email & password, SMS OTP, and email magic link.',
      },
      {
        title: 'Crew Application + time tracking',
        text: `I built a companion app to the admin app, allowing crew members and leads to manage jobs, clock time, and send location data to the admin app.`,
      },
      {
        title: 'Customer Application',
        text: `Late in development, we received requirements for a third application for customers to be able to interact with their data more dynamically than just receiving invoices by email.
        
I collaborated closely with the product team to define concrete requirements that could be accomplished on time and then delivered ahead of schedule.`,
      },
      {
        title: 'Cloudflare Deployment',
        text: 'The customer app forced us to pivot to a mono repo set up, which invalidated our deployment pipeline to Cloudflare. After restructuring the entire codebase, I also rewrote our deployment scripts to manage all three applications for preview, staging, and production',
      },
    ],
  },

  {
    title: 'Digital Healthcare Provider',
    yearRange: '(2020 - 2022)',
    color: '#AAA4FF',
    icon: 'GiMedicines',
    description: `An all-digital healthcare provider, offering in-app video calls or at-home visits with doctors.
    
The platform we built included management for all of their staff, an internal messaging system, video and chat with customers, medical charts with 3rd party API integrations for retrieving medication data, and a customer app where users can schedule appointments within the same day.`,
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
        text: 'This was my first project as an associate developer. I had previously learned React, but had to learn Angular on the fly. Within 7 months of joining the project, I was the primary feature developer',
      },
      {
        title: 'Leadership & Collaboration',
        text: 'When client began to hire their own internal development team, I continued to develop features while helping to onboard their team and write documentation for handing off the project.',
      },
      {
        title: 'Medical Charts',
        text: `Our largest feature request: building out charting for physicians to use during visits.
        
My contributions were largely in the UI, making sure the dense page was intuitive and easy to understand. I also built out the realtime save, to make sure data wasn't lost or conflicted, as well as page quick navigation.`,
      },
      {
        title: 'Mental Health Charts',
        text: `I created the ability to make variants of medical charts in such a way that they could be modular and customized for specific visit types. In this case, I built it out to handle therapy appointments, a new service the client intended to offer.`,
      },
      {
        title: 'Optimization',
        text: 'When I first joined, many large requests were not paginated, including years of messages that would load simultaneously. I created a new paginated messaging system that significantly improved performance and also allowed providers to copy ranges of message text for documentation purposes.',
      },
      {
        title: 'Message Triage',
        text: `Care coordinators have a required time limit within which they must respond to any message from a patient.
        
I workshopped and refined a performant query that was able to aggregate a massive amount of data, giving care coordinators an eagle-eye view of all communication in the app, watch their timing, and triage those messages to other providers.`,
      },
    ],
  },

  {
    title: 'Senior Care Facility Event Calendar',
    yearRange: '(2020 - 2023)',
    color: '#DD98AD',
    icon: 'GiFamilyHouse',
    description: `One of our longest clients, they managed many senior care facilities that needed to provide event scheduling, signage, and food menus.`,
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
        text: `The first app we were supporting was working, but they aspired to rebuilding the app on newer technology as a SaaS.
        
I led the development of this project, building out foundation of both the front end and API.`,
      },
      {
        title: 'Custom Calendar & Event Recurrence',
        text: `The original app made use of a third party library to handle calendars and display of recurring events. Because of the intent of building a SaaS, the cost of using such services skyrocketed.
        
I chose to build my own custom-built calendar component that could automatically handle recurrence by utilizing RRule. It was responsive to mobile display and was able to more precisely meet the needs of the client more than our prior solution while saving them a lot of money.`,
      },
    ],
  },

  {
    title: 'Teacher Credential Portal',
    yearRange: '(2023)',
    color: '#DDCE98',
    icon: 'GiBookCover',
    description:
      'To simplify the process of applying and managing the applications for teacher state credentials, our client designed a platform to bring all of the steps into one place. They provided the designs, I provided the front end, and a separate team built the API',
    technology: ['React', 'Vite', 'Tailwind', 'NestJS', 'Framer Motion', 'CVA'],
    contributions: [
      {
        title: 'Collaboration',
        text: `I was largely working solo on this project, with wireframes and documentation provided from foreign teams.
        
I took care to build simple, well written components for them to implement once our time. I carefully studied their wireframes so I could communicate and ask the right questions, which resulted in oversights being discovered or requirements being adjusted.`,
      },
      {
        title: 'Implementing their API',
        text: `When we received a late-notice rushed request to implement their other team's API, I buckled down and got it integrated the same night with scant documentation.`,
      },
    ],
  },

  {
    title: 'Law Document Annotation',
    yearRange: '(2021 - 2022)',
    color: '#98BDDD',
    icon: 'GiScrollQuill',
    description: `As a lawyer, our client found himself spending an excessive amount of time managing documents for cases.
    
We helped him build a platform that allows multiple users to collaborate in realtime on their documents per case by parsing scanned files for text, allowing highlighting of text per line with notes, and user management & case assignment`,
    technology: ['React', 'Stripe', 'Framer Motion', 'NestJS', 'Auth0'],
    contributions: [
      {
        title: 'Realtime Collaboration',
        text: 'I built in the ability to see who is working on a document simultaneously with you and to see their changes come in live.',
      },
      {
        title: 'Internal Component Library',
        text: 'I worked with a team member to begin development of our own component library to help us build more precisely the things we wanted to.',
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
    color: '#C6436A',
    icon: 'GiWineBottle',
    description: `This was a solo, freelance project for a local wine distributor.
    
    Their old website was very out of date and they were hoping for a brand refresh in addition to building out some new features.`,
    technology: ['React', 'Angular', 'Heroku', 'PostgreSQL', 'Auth0'],
    contributions: [
      {
        title: 'Requirements & Designs',
        text: 'Because I was the only developer, I was responsible for every aspect of the project. I worked with the client to discover their requirements and come up with designs they liked.',
      },
      {
        title: 'CMS + Authentication',
        text: 'Previously, they had to do a new release with every update they wanted to make. They wanted the ability to make small content updates with an internal CMS. This involved implementing authentication with Auth0 and creating a separate app from the primary website.',
      },
      {
        title: 'Event Management',
        text: 'They wanted the ability to schedule events, both public and client only. The client-only list had to be available by authenticated client accounts only.',
      },
    ],
  },
];
