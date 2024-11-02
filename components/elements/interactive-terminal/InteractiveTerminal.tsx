'use client'
import  { useState, useRef, useEffect } from 'react'
import { ScrollArea, Input} from "@/ui"
import { TerminalOutput, MatrixRain } from './components'
import { useTerminal } from './hooks'
import { getThemeStyles } from './utils'
import { KONAMI_CODE } from './constants'

const  InteractiveTerminal = () => {
  const {
    history,
    currentCommand,
    setCurrentCommand,
    theme,
    isChatMode,
    isNeoVision,
    isRedPillMode,
    isDejaVu,
    handleCommand
  } = useTerminal()

  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [konamiIndex, setKonamiIndex] = useState(0)
  const isFirstMount = useRef(true);

  /** Handle welcome message and watch for Konami code */
  useEffect(() => {
    if (isFirstMount.current) {
      handleCommand('welcome')
      isFirstMount.current = false;
    }
    
    inputRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === KONAMI_CODE[konamiIndex]) {
        const nextIndex = konamiIndex + 1
        if (nextIndex === KONAMI_CODE.length) {
          activateKonamiCode()
          setKonamiIndex(0)
        } else {
          setKonamiIndex(nextIndex)
        }
      } else {
        setKonamiIndex(0)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [konamiIndex, handleCommand])

  /** Handle scrolling to bottom of terminal after new message */
  useEffect(() => {
    if (scrollAreaRef.current) {
        scrollAreaRef.current?.scrollTo({
          top: scrollAreaRef.current.scrollHeight,
          behavior: 'smooth'
        });
    }
  }, [history]);
  const activateKonamiCode = () => {
    handleCommand('Konami Code')
  }

  return (
    <div className="fixed inset-0 overflow-hidden">
      <MatrixRain isNeoVision={isNeoVision} theme={theme} />
      <div id="terminal-container" className={`relative z-10 flex flex-col h-full ${getThemeStyles(theme, isRedPillMode, isDejaVu)}`}>
        <ScrollArea 
          id="scroll-area" 
          className="flex-grow p-4 overflow-y-auto scroll-smooth" 
          viewportRef={scrollAreaRef}
        >
          <div className="max-w-full break-words whitespace-pre-wrap">
            {history.map((entry, index) => (
              <TerminalOutput key={index} entry={entry} />
            ))}
          </div>
        </ScrollArea>
        <div id="input-container" className="flex items-center p-4 border-t border-gray-700 bg-black bg-opacity-80">
          <span className={`${isChatMode ? "text-blue-400" : "text-yellow-400"} mr-2 flex-shrink-0`}>
            {isChatMode ? "You: " : "$"}
          </span>
          <Input
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleCommand(currentCommand)}
            className="flex-grow bg-transparent border-none focus:ring-0 text-green-400 min-w-0"
            placeholder={isChatMode ? "Ask a question..." : "Type a command..."}
            ref={inputRef}
          />
        </div>
      </div>
    </div>
  )
}
export default InteractiveTerminal;