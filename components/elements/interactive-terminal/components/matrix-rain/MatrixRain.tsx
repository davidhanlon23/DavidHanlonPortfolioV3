import { FC, useRef, useEffect } from 'react'
import { Theme } from '../../types';
interface MatrixRainProps {
  isNeoVision: boolean;
  theme: Theme;
}
const COLOR_MAP = {
  'default': '#0F0',
  'hacker': '#0F0',
  'hacker_red': '#FF0000',
  'retro': '#0F0',
};
const MatrixRain: FC<MatrixRainProps> = ({ isNeoVision, theme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth || 0
    canvas.height = window.innerHeight || 0

    const columns = Math.floor(canvas.width / 20)
    const drops: number[] = Array(Math.max(columns || 1, 1)).fill(1)

    let animationFrameId: number

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = COLOR_MAP[theme] || '#0F0'
      ctx.font = '15px monospace'

      for (let i = 0; i < drops.length; i++) {
        const text = isNeoVision ? '1' : Math.random() < 0.5 ? '0' : '1'
        ctx.fillText(text, i * 20, drops[i] * 20)

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [isNeoVision, theme])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

export default MatrixRain;
