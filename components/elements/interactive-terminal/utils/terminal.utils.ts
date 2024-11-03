import { Theme } from '../types';

export const getThemeStyles = (theme: Theme, isRedPillMode: boolean, isDejaVu: boolean): string => {
  let baseStyles = ''
  switch (theme) {
    case 'hacker':
      baseStyles = 'bg-black bg-opacity-80 text-green-400'
      break
    case 'hacker_red':
      baseStyles = 'bg-black bg-opacity-60 text-red-700'
      break
    case 'retro':
      baseStyles = 'bg-blue-900 bg-opacity-80 text-yellow-300'
      break
    default:
      baseStyles = 'bg-gray-900 bg-opacity-80 text-gray-100'
  }
  return `${baseStyles} ${isRedPillMode ? 'invert' : ''} ${isDejaVu ? 'animate-pulse' : ''}`
}
/** @TODO - update Skills */
export const getSkillInfo = (skill: string, isNeoVision: boolean): string => {
  const normalSkillInfo: { [key: string]: string } = {
    nodejs: 'Node.js: 10 years of experience, building scalable backend services',
    react: 'React: 6 years of experience, including Next.js, React Native, and Expo',
    typescript: 'TypeScript: 3 years of experience, used in all recent projects',
    reactnative: 'React Native (using expo): 2 years of experience, building hybrid mobile applications',
    solidity: 'Solidity: 2 years of experience, building smart contracts and dApps',
    nestjs: 'Nest.js: 2 years of experience, building scalable backend micro services',
    prismaorm: 'PrismaORM: 2 years of experience',
  }

  const matrixSkillInfo: { [key: string]: string } = {
    nodejs: 'Node.js: Control over the neural networks that connect minds to the Matrix',
    react: 'React: The power to bend the rules of the Matrix and create reactive environments',
    typescript: 'TypeScript: Mastery of the code that shapes the Matrix itself',
    reactnative: 'React Native: Ability to project the Matrix across multiple digital realms',
    solidity: 'Solidity: Command over the immutable contracts that govern the blockchain Matrix',
    nestjs: 'Nest.js: Architect of the deep structures within the Matrix core',
    prismaorm: 'PrismaORM: Manipulation of the underlying data streams that flow through the Matrix',
  }

  const skillInfo = isNeoVision ? matrixSkillInfo : normalSkillInfo
  return skillInfo[skill] || `No detailed info available for ${skill}`
}
/** @TODO - update Skills */
export const generateResume = (): string => {
  return `
David Hanlon
Senior Full Stack Software Engineer

Experience:
- Founding Engineer at Jumpcut (2022-Present)
- Engineer at Hanlon Consulting (2021-Present)
- Software Engineer III at Cybrary (2021 - 2022)
- Software Engineer II at Cybrary (2020 - 2021)
- Systems Analyst at Stanley (2019 - 2020)
- Intern at Cybrary (2018)
- Intern at Electronic Transaction Systems (2017)

Skills:
- Languages: JavaScript, TypeScript, Solidity, Python, Java
- Frontend: React, Next.js, React Native, Expo, Ionic Framework
- Backend: Node.js, Express, Nest.js
- Databases: PostgreSQL, NoSQL, MongoDB, PrismaORM
- Web3: Solidity, Rainbow Kit,  Ganache, Hard Hat, Open Zeppelin
- Infrastructure: Docker, Render, Vercel
- Cloud: AWS

Education:
- College: Bachelor's Degree in Computer Science, Towson University
- High School: Worcester Technical High School, Pocomoke High School

`
}

export const getChatResponse = async (question: string): Promise<string> => {
/** @TODO - update with open AI */
  const responses: { [key: string]: string } = {
    experience: "David has over 10 years of experience in software development, with a focus on full-stack web applications. David's most recent experience includes building applications with web3 integrations and creating enterprise software powered by AI",
    skills: "David's key skills include TypeScript, React, PrismaORM, PostgreSQL, Node.js, and Nest.js. He's also experienced with cloud platforms like AWS and GCP.",
    projects: "Some of David's notable projects include building a live streaming platform using Mux, creating enterprise software for an Entertainment Saas startup utilizing AI with RAG and Agentic architecture, creating a web3 application to facilitate story writing with the use of NFTs, and more.",
    education: "David holds a Bachelor's degree in Computer Science with a specialization in Software Engineering from Towson University and graduated High School with honors from both Worcester Technical High School and Pocomoke High School",
    hobbies: "When not coding, David enjoys playing soccer, paddle, gaming, and exploring the world",
    default: "I'm not sure about that. Can you ask something about David's experience, skills, projects, or education?"
  }

  await new Promise(resolve => setTimeout(resolve, 1000)) /* Simulate API delay */

  for (const [key, response] of Object.entries(responses)) {
    if (question.toLowerCase().includes(key)) {
      return response
    }
  }

  return responses.default
}
