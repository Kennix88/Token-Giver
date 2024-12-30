'use client'

import addSuffixToNumber from '@/utils/addSuffixToNumber.util.ts'
import { useEffect, useState } from 'react'

export default function Multiplier({
  date,
  multiplier = 10,
}: {
  date: Date
  multiplier: number
}) {
  const [minutes, setMinutes] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date()
      const diff = now.getTime() - date.getTime()
      const minutesDiff = Math.floor(diff / 60000)
      setMinutes(minutesDiff)
    }, 1000) // обновляем каждую минуту
    return () => clearInterval(intervalId)
  }, [date])

  const result = minutes * multiplier

  return <>{addSuffixToNumber(result, 2)}</>
}
