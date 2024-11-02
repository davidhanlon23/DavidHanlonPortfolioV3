import { FC, useState, useEffect } from 'react'

interface TypingEffectProps {
  text: string
  speed: number
}

const TypingEffect: FC<TypingEffectProps> = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setDisplayedText(text.slice(0, i))
      i++
      if (i > text.length) clearInterval(timer)
    }, speed)
    return () => clearInterval(timer)
  }, [text, speed])

  return <div>{displayedText}</div>
}

export default TypingEffect;