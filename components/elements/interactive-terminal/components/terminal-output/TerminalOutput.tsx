import { FC} from 'react'
import { CommandOutput } from '../../types'
import { TYPING_SPEED } from '../../constants'
import TypingEffect from '../typing-effect'

interface TerminalOutputProps {
  entry: CommandOutput
}

const TerminalOutput: FC<TerminalOutputProps> = ({ entry }) => {
  return (
    <div className="mb-2 max-w-full">
      <div className={`${entry.isChatMode ? "text-blue-400" : "text-yellow-400"} break-words`}>
        <span className="flex-shrink-0">{entry.isChatMode ? "You: " : "$ "}</span>
        {entry.command}
      </div>
      {entry.isTyping ? (
        <TypingEffect text={entry.output} speed={TYPING_SPEED} />
      ) : (
        <pre className={`${entry.isAsciiArt ? 'whitespace-pre overflow-x-auto' : 'whitespace-pre-wrap break-words'} max-w-full`}>
          {entry.output}
        </pre>
      )}
    </div>
  )
}

export default TerminalOutput;