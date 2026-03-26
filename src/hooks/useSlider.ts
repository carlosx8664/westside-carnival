import { useState, useEffect, useCallback } from 'react'

export function useSlider(total: number, interval = 5500) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total])
  const prev = useCallback(() => setCurrent(c => (c - 1 + total) % total), [total])
  const goTo = useCallback((n: number) => setCurrent(n), [])

  useEffect(() => {
    const id = setInterval(next, interval)
    return () => clearInterval(id)
  }, [next, interval])

  return { current, next, prev, goTo }
}
