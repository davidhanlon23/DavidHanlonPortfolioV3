import { FC} from 'react'
import { CommandOutput } from '../../types'
import { TYPING_SPEED } from '../../constants'
import TypingEffect from '../typing-effect'

interface TerminalOutputProps {
  entry: CommandOutput
}

const TerminalOutput: FC<TerminalOutputProps> = ({ entry }) => {
  return (
    <div className="mb-2">
      <div className={entry.isChatMode ? "text-blue-400" : "text-yellow-400"}>
        {entry.isChatMode ? "You: " : "$ "}{entry.command}
      </div>
      {entry.isTyping ? (
        <TypingEffect text={entry.output} speed={TYPING_SPEED} />
      ) : (
        <pre className={entry.isAsciiArt ? 'whitespace-pre' : 'whitespace-pre-wrap'}>
          {entry.output}
        </pre>
      )}
    </div>
  )
}

export default TerminalOutput;