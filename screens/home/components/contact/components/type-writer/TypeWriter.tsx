'use client'

import { useState, useEffect } from 'react'

interface ITypeWriter {
  text: string
}
const  TypeWriter = ({ text }: ITypeWriter) => {
  const [displayText, setDisplayText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[index])
        setIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [index, text])

  return <span>{displayText}</span>
}
export default TypeWriter;
