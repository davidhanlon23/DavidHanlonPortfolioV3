import { Project } from "../components/projects/types";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Stellr',
    description: 'Stellr.social is a Web 3.0 social networking application being built on Polygon via Lens Protocol.',
    technologies: ['NextJS', 'React18', 'Tailwind', 'TypeScript', 'EthersJS', 'Solidity', 'AWS Amplify'],
    imageUrl: '/Images/projectImages/stellrProject.webp',
    githubUrl: 'https://github.com/0xDreamLabs/stellr',
    liveUrl: 'https://stellr.social',
    images: ['/Images/projectImages/stellrProject.webp'],
    type: 'side-project'
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
    type: 'side-project'
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
    type: 'side-project'
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
    type: 'side-project'
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
  }
];