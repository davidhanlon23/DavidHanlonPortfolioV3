import { Project } from '../types';
export const PROJECT_DATA: Project[] = [
  {
    id: 1,
    title: 'Stellr',
    description: 'Stellr.social is a Web 3.0 social networking application being built on Polygon via Lens Protocol.',
    technologies: ['NextJS', 'React18', 'Tailwind', 'TypeScript', 'EthersJS', 'Solidity', 'AWS Amplify'],
    imageUrl: '/Images/projectImages/stellrProject.webp',
    githubUrl: 'https://github.com/0xDreamLabs/stellr',
    liveUrl: 'https://stellr.social',
    images: ['/Images/projectImages/stellrProject.webp'],
    type: 'personal-project'
  },
  {
    id: 2,
    title: 'Leverage Trading Calculator',
    description: 'A tool built to help estimate entry and exit points on leveraged crypto trades.',
    technologies: ['React 18', 'NextJS', 'TailwindCSS', 'TypeScript'],
    imageUrl: '/Images/projectImages/ltcProject.webp',
    githubUrl: 'https://github.com/0xD4V1NC1/leverage-trading-calculator',
    liveUrl: 'https://leveragetradingcalculator.com',
    images: ['/Images/projectImages/ltcProject.webp'],
    type: 'personal-project'
  },
  {
    id: 3,
    title: '0xWolfpack Finance NFT',
    description: 'A Web3.0 NFT minting dapp built on the polygon network.',
    technologies: ['React 18', 'TailwindCSS', 'Solidity', 'TypeScript', 'Storybook'],
    imageUrl: '/Images/projectImages/0xWFNFT.webp',
    githubUrl: 'https://github.com/0xD4V1NC1/nft-minting-site',
    liveUrl: 'https://pl7yg-5aaaa-aaaad-qbwiq-cai.ic.fleek.co/',
    images: ['/Images/projectImages/0xWFNFT.webp'],
    type: 'personal-project'
  },
  {
    id: 4,
    title: 'Endeavors.tv',
    description: 'A live streaming platform built to solve low volume viewership for entry level streamers.',
    technologies: ['Svelte', 'TypeScript', 'TailwindCSS', 'Rust'],
    imageUrl: '/Images/projectImages/sleeplessGamersProject.webp',
    githubUrl: '',
    liveUrl: 'https://Endeavors.tv',
    images: ['/Images/projectImages/sleeplessGamersProject.webp'],
    type: 'personal-project'
  },
  {
    id: 5,
    title: 'NextJS Social',
    description: 'A fully functional demo social media application built with Server Side Rendering.',
    technologies: ['React', 'NextJS', 'ExpressJS', 'MongoDB'],
    imageUrl: '/Images/projectImages/nextJsProject.webp',
    githubUrl: 'https://github.com/davidhanlon23/nextJS-social-media-app',
    liveUrl: 'https://next-js-social-media-app.herokuapp.com/',
    images: ['/Images/projectImages/nextJsProject.webp'],
    type: 'personal-project'
  },
  {
    id: 6,
    title: 'Love Calculator',
    description: 'A progressive web app built with Ionic\'s hybrid mobile application framework.',
    technologies: ['JavaScript', 'Angular', 'Ionic', 'Firebase'],
    imageUrl: '/Images/projectImages/loveCalculatorProject.webp',
    githubUrl: 'https://github.com/davidhanlon23/loveCalculator',
    liveUrl: 'https://lovecalculator-bb0e8.web.app/',
    images: ['/Images/projectImages/loveCalculatorProject.webp'],
    type: 'personal-project'
  },
  {
    id: 7,
    title: 'Expense Tracker',
    description: 'A simple app to record and keep track of your recent transactions.',
    technologies: ['Ionic', 'AngularJS'],
    imageUrl: '/Images/projectImages/expenseTrackerProject.webp',
    githubUrl: 'https://github.com/davidhanlon23/ExpenseTracker',
    liveUrl: '',
    images: ['/Images/projectImages/expenseTrackerProject.webp'],
    type: 'personal-project'
  },
  {
    id: 8,
    title: 'Jumpcut',
    description: `Jumpcut provides an AI-powered IP management platform for entertainment industry executives. The platform analyzes scripts and content using proprietary agentic architecture and LLMs to identify key narrative elements like flashbacks, POV shifts, and tonal variations.`,
    technologies: ['NextJS', 'React', 'Material UI', 'NodeJS', 'NestJS','PostgreSQL', 'NoSQL', 'MongoDB', 'Prisma', 'Docker', 'Solidity', 'Hard Hat', 'Render', 'Vercel', 'RAG'],
    imageUrl: '',
    githubUrl: '',
    liveUrl: 'https://www.jumpcutmedia.com/',
    images: ['/Images/projectImages/jumpcut-0.png', '/Images/projectImages/jumpcut1.png', '/Images/projectImages/jumpcut2.png', '/Images/projectImages/jumpcut3.png', '/Images/projectImages/jumpcut4.png', '/Images/projectImages/jumpcut5.png'],
    // images: ['/Images/projectImages/jumpcut-0.png'],
    type: 'work-project',
    comingSoon: false,
    additionalUrls: [{
      url: 'https://opensea.io/collection/women-of-mystery',
      title: 'Opensea Collection',
    },
    {
      url:  'https://etherscan.io/token/0x20355d27c1bfe6e0851b48b6e56e97e10b1481f4#code',
      title: 'Contract Address'
    }
  ]
  },
  {
    id: 9,
    title: 'Cybrary',
    description: 'Cybrary is an online cyber security training platform equipped with a robust content catalog and in browser lab environments supporting over 3 million users worldwide',
    technologies: ['JavaScript', 'TypeScript', 'React', 'React Native', 'Semantic UI', 'TailwindCSS', 'NodeJS', 'PHP', 'PostgreSQL', 'Kubernetes', 'Gatsby', 'Contentful CMS', 'Google Cloud Platform'],
    imageUrl: '',
    githubUrl: '',
    liveUrl: `https://www.cybrary.it`,
    images: ['/Images/projectImages/cybrary-0.png', '/Images/projectImages/cybrary1.png', '/Images/projectImages/cybrary2.png', '/Images/projectImages/cybrary3.png', '/Images/projectImages/cybrary4.png', '/Images/projectImages/cybrary5.png'],
    type: 'work-project'
  },
  {
    id: 10,
    title: 'Trendz',
    description: `Trendz is a software based Trading Journal powered by AI to help traders track their trades, analyze their trading patterns, and discover potential trade opportunities based on their trading history.`,
    technologies: ['NodeJS','TypeScript', 'React', 'NextJS', 'ShadCN UI', 'NestJS', 'PostgreSQL', 'Render', 'Cheerio', 'OpenAI SDK', 'Anthropic SDK', 'Vercel', 'RAG'],
    imageUrl: '',
    githubUrl: '',
    liveUrl: 'https://www.trendz.cash',
    images: ['/Images/projectImages/trendz-0.png','/Images/projectImages/trendz-4.png', '/Images/projectImages/trendz-5.png', '/Images/projectImages/trendz-6.png', '/Images/projectImages/trendz-7.png', '/Images/projectImages/trendz-1.png' ],
    type: 'side-project'
  },
];