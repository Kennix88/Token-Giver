'use client'
import { useEffect, useState } from 'react'

export default function Timer({ date }: { date: Date }) {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date()
      const diff = now.getTime() - date.getTime()
      setSeconds(Math.floor(diff / 1000))
    }, 1000)
    return () => clearInterval(intervalId)
  }, [date])

  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / 86400)
    const hours = Math.floor((seconds % 86400) / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    const daysStr = days > 0 ? `${days}d ` : ''
    const hoursStr =
      hours > 0 ? (hours < 10 ? `0${hours}h ` : `${hours}h `) : '00h'
    const minutesStr =
      minutes > 0 ? (minutes < 10 ? `0${minutes}m ` : `${minutes}m `) : '00m'
    const secsStr = secs > 0 ? (secs < 10 ? `0${secs}s` : `${secs}s`) : '00s'

    return `${daysStr}${hoursStr}${minutesStr}${secsStr}`
  }

  return (
    <div className="bg-surface-container-h py-1 px-2 rounded-md text-sm bg-opacity-70">
      {formatTime(seconds)}
    </div>
  )
}
