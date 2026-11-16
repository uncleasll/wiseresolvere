"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

/** Cycles through words with a vertical slide. */
export function RotatingWords({ words, interval = 2400, className }: { words: string[]; interval?: number; className?: string }) {
  const [i, setI] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (words.length < 2) return
    const id = setInterval(() => {
      setLeaving(true)
      setTimeout(() => {
        setI((v) => (v + 1) % words.length)
        setLeaving(false)
      }, 350)
    }, interval)
    return () => clearInterval(id)
  }, [words.length, interval])

  return (
    <span className={cn("relative inline-block overflow-hidden align-bottom", className)}>
      <span
        key={i}
        className={cn(
          "inline-block transition-all duration-350 ease-out",
          leaving ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100 animate-[word-in_0.4s_cubic-bezier(0.22,1,0.36,1)]",
        )}
      >
        {words[i]}
      </span>
    </span>
  )
}
