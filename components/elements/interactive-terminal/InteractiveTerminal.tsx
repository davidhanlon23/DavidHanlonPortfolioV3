'use client'

import React, { useState, useRef, useEffect } from 'react'
import { ScrollArea, Input } from "@/ui";

type CommandOutput = {
  command: string
  output: string
}

const InteractiveTerminal = () => {
  const [history, setHistory] = useState<CommandOutput[]>([])
  const [currentCommand, setCurrentCommand] = useState('')
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [history])

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const command = currentCommand.trim().toLowerCase()
      let output = ''

      switch (command) {
        case 'help':
          output = 'Available commands: about, skills, projects, contact, clear'
          break
        case 'about':
          output = "Hi, I'm David Hanlon, a senior full stack software engineer passionate about creating innovative solutions!"
          break
        case 'skills':
          output = 'My skills include: TypeScript, React, Next.js, Node.js, Python, and more. Type "skills <skill>" for more info.'
          break
        case 'projects':
          output = 'Some of my projects: 1. AI-powered chat application, 2. E-commerce platform, 3. Data visualization dashboard'
          break
        case 'contact':
          output = 'Email: david@example.com | LinkedIn: linkedin.com/in/davidhanlon | GitHub: github.com/davidhanlon'
          break
        case 'clear':
          setHistory([])
          setCurrentCommand('')
          return
        default:
          if (command.startsWith('skills ')) {
            const skill = command.split(' ')[1]
            output = getSkillInfo(skill)
          } else {
            output = `Command not recognized: ${command}. Type "help" for available commands.`
          }
      }

      setHistory([...history, { command, output }])
      setCurrentCommand('')
    }
  }

  const getSkillInfo = (skill: string): string => {
    const skillInfo: { [key: string]: string } = {
      typescript: 'TypeScript: 5 years of experience, used in all recent projects',
      react: 'React: 6 years of experience, including Next.js and React Native',
      nodejs: 'Node.js: 7 years of experience, building scalable backend services',
      python: 'Python: 4 years of experience, mainly for data analysis and automation',
    }
    return skillInfo[skill] || `No detailed info available for ${skill}`
  }

  return (
    <div className="bg-black text-green-400 p-4 font-mono fixed inset-0">
      <ScrollArea className="h-[calc(100vh-80px)]" ref={scrollAreaRef}>
        {history.map((entry, index) => (
          <div key={index}>
            <div className="text-yellow-400">$ {entry.command}</div>
            <div className="whitespace-pre-wrap">{entry.output}</div>
          </div>
        ))}
      </ScrollArea>
      <div className="flex items-center mt-2">
        <span className="mr-2">$</span>
        <Input
          type="text"
          value={currentCommand}
          onChange={(e) => setCurrentCommand(e.target.value)}
          onKeyDown={handleCommand}
          className="bg-transparent border-none text-green-400 focus:ring-0 w-full"
          placeholder="Type a command..."
        />
      </div>
    </div>
  )
}
export default InteractiveTerminal;
