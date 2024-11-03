import { useState, useCallback } from 'react'
import { CommandOutput, Theme } from '../../types'
import { getSkillInfo, generateResume, getChatResponse } from '../../utils'
import { CONTACT_INFO } from '@/screens/home/components/contact/constants';
import { THERE_IS_NO_SPOON, WELCOME_MESSAGE, TRUE_IDENTITY, KONAMI_CODE } from './util';

import { useGlobal } from '@/components/providers/global-provider/global-provider';
import { ABOUT_DATA } from '@/screens/home/components/about/constants';

const useTerminal = () => {
  const { setView } = useGlobal();
  const [history, setHistory] = useState<CommandOutput[]>([])
  const [currentCommand, setCurrentCommand] = useState('')
  const [theme, setTheme] = useState<Theme>('hacker')
  const [isChatMode, setIsChatMode] = useState(false)
  const [isNeoVision, setIsNeoVision] = useState(false)
  const [isRedPillMode, setIsRedPillMode] = useState(false)
  const [isDejaVu, setIsDejaVu] = useState(false)

  const playGuessingGame = useCallback(async (): Promise<string> => {
    const number = Math.floor(Math.random() * 100) + 1;
    let tries = 0
    let guess: number

    do {
      const input = prompt(`Guess a number between 1 and 100 (try ${tries + 1}):`)
      if (input === null) return 'Game aborted.'
      guess = parseInt(input)
      tries++
      if (guess < number) await new Promise(r => setTimeout(r, 500))
      if (guess < number) setHistory(prev => [...prev, { command: '', output: 'Too low! Try again.' }])
      if (guess > number) await new Promise(r => setTimeout(r, 500))
      if (guess > number) setHistory(prev => [...prev, { command: '', output: 'Too high! Try again.' }])
    } while (guess !== number && tries < 10)

    return guess === number
      ? `Congratulations! You guessed the number ${number} in ${tries} tries.`
      : `Sorry, you've run out of tries. The number was ${number}.`
  }, [setHistory])
  
  const handleCommand = useCallback(async (command: string) => {
    const cmd = command.trim().toLowerCase()
    let output = ''
    let isAsciiArt = false
    let isTyping = false

    if (isChatMode && cmd !== 'exit') {
      output = await getChatResponse(cmd)
      isTyping = true
    } else {
      switch (cmd) {
        case 'welcome':
          output = WELCOME_MESSAGE;
          isAsciiArt = true
          break
        case 'help':
          output = `Available commands: about, skills, projects, contact, theme, game, resume, chat, clear, exit${
            isNeoVision ? ", neo_vision, red_pill, deja_vu, there_is_no_spoon, true_identity" : ""
          }`
          break
        case 'about':
          output = `${ABOUT_DATA['about']}`
          isTyping = true
          break
        case 'skills':
          output = `My skills include: ${ABOUT_DATA['skills'].join(', ')} and more. Type "skills <skill>" for more info.`
          break
        /** @TODO - update projects */
        case 'projects':
          output = 'Some of my projects: 1. AI-powered chat application, 2. E-commerce platform, 3. Data visualization dashboard'
          break
        case 'contact':
          output = `Email: ${CONTACT_INFO['email']} | LinkedIn: ${CONTACT_INFO['linkedin']} | GitHub: ${CONTACT_INFO['github']} & ${CONTACT_INFO['github_alt']} | Instagram: ${CONTACT_INFO['instagram']}`
          break
        case 'theme':
          output = 'Available themes: default, hacker, hacker_red, retro. Use "theme <name>" to change.'
          break;
        case 'game':
          output = await playGuessingGame()
          break
        case 'resume':
          output = generateResume()
          isTyping = true
          break
        case 'chat':
          setIsChatMode(true)
          output = "Entering chat mode. Ask me anything about David's experience and skills! Type 'exit' to leave chat mode."
          isTyping = true
          break
        case 'clear':
          setHistory([])
          setCurrentCommand('')
          return
        case 'exit':
          output = "Thanks for visiting David's portfolio! Closing the terminal..."
          setTimeout(() => {
            setView('default')
          }, 2000)
          break
        case 'konami code':
          output = KONAMI_CODE
          isAsciiArt = true
          break
        case 'neo_vision':
          setIsNeoVision(true)
          output = "Neo's vision activated. You now see the Matrix as it truly is. Type 'help' to see Neo's special commands!"
          break
        case 'reset':
          setIsNeoVision(false)
          setIsRedPillMode(false)
          setIsDejaVu(false)
          output = "Matrix reset to its standard obfuscation."
          break
        case 'red_pill':
          if (isNeoVision) {
            setIsRedPillMode(!isRedPillMode)
            output = isRedPillMode
              ? "Red pill deactivated. Welcome back to the Matrix."
              : "Red pill activated. How deep does the rabbit hole go?"
          } else {
            output = "You need to activate Neo's vision first. Type 'neo_vision'."
          }
          break
        case 'deja_vu':
          if (isNeoVision) {
            const newDejaVu = !isDejaVu;
            setIsDejaVu(newDejaVu)
            output = newDejaVu
              ? "Deja vu activated. Watch for glitches in the Matrix."
              : "Deja vu deactivated. The Matrix stabilizes."
          } else {
            output = "You need to activate Neo's vision first. Type 'neo_vision'."
          }
          break
        case 'there_is_no_spoon':
          if (isNeoVision) {
            output = THERE_IS_NO_SPOON;
            isAsciiArt = true
          } else {
            output = "You need to activate Neo's vision first. Type 'neo_vision'."
          }
          break
        case 'true_identity':
          if (isNeoVision) {
            output = TRUE_IDENTITY;
            isAsciiArt = true
          } else {
            output = "Access denied. You must see the truth first. Type 'neo_vision' to unlock your potential."
          }
          break
        default:
          if (cmd.startsWith('skills ')) {
            const skill = cmd.split(' ')[1]
            output = getSkillInfo(skill, isNeoVision)
          } else if (cmd.startsWith('theme ')) {
            const newTheme = cmd.split(' ')[1] as Theme;
            if (['default', 'hacker', 'retro', 'hacker_red'].includes(newTheme)) {
              setTheme(() => newTheme)
              output = `Theme changed to ${newTheme}`
            } else {
              output = 'Invalid theme. Available themes: default, hacker, retro'
            }
          } else {
            output = `Command not recognized: ${cmd}. Type "help" for available commands.`
          }
      }
    }

    if (isChatMode && cmd === 'exit') {
      setIsChatMode(false)
      output = "Exiting chat mode. Type 'help' to see available commands."
      isTyping = true
    }

    setHistory(prev => [...prev, { command: cmd, output, isAsciiArt, isTyping, isChatMode }])
    setCurrentCommand('')
  }, [isChatMode, isNeoVision, isRedPillMode, isDejaVu])

  return {
    history,
    currentCommand,
    setCurrentCommand,
    theme,
    isChatMode,
    isNeoVision,
    isRedPillMode,
    isDejaVu,
    handleCommand
  }
}

export default useTerminal;