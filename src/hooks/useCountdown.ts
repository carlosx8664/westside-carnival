import { useState, useEffect } from 'react'
import { CARNIVAL_DATE } from '@/data/events'

interface CountdownValues {
  days: string
  hours: string
  minutes: string
  seconds: string
  expired: boolean
}

export function useCountdown(): CountdownValues {
  const calculate = (): CountdownValues => {
    const diff = Math.max(0, CARNIVAL_DATE.getTime() - Date.now())
    if (diff === 0) return { days: '00', hours: '00', minutes: '00', seconds: '00', expired: true }
    return {
      days:    String(Math.floor(diff / 86400000)).padStart(2, '0'),
      hours:   String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
      minutes: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
      seconds: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
      expired: false,
    }
  }

  const [values, setValues] = useState<CountdownValues>(calculate)

  useEffect(() => {
    const id = setInterval(() => setValues(calculate()), 1000)
    return () => clearInterval(id)
  }, [])

  return values
}
