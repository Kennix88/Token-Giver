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

    return `${days <= 0 ? '' : days + ':'}${hours <= 0 && days <= 0 ? '' : hours + ':'}${minutes <= 0 && (days <= 0 || hours <= 0) ? '' : minutes + ':'}${secs <= 0 && (days <= 0 || hours <= 0 || minutes <= 0) ? '' : secs}`
  }

  return (
    <div className="bg-surface-container-h py-1 px-2 rounded-md text-sm">
      {formatTime(seconds)}
    </div>
  )
}
