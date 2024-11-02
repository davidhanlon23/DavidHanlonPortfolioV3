export type CommandOutput = {
    command: string
    output: string
    isAsciiArt?: boolean
    isTyping?: boolean
    isChatMode?: boolean
  }
  
  export type Theme = 'default' | 'hacker' | 'retro' | 'hacker_red'