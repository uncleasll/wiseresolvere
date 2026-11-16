"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

/**
 * Animated aurora background: drifting gradient blobs, a fine grid,
 * and a soft spotlight that follows the pointer.
 */
export function HeroBackground({ className, intensity = 1 }: { className?: string; intensity?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const parent = el.parentElement ?? el
    let raf = 0
    let tx = 50, ty = 50, cx = 50, cy = 50

    const onMove = (e: PointerEvent) => {
      const r = parent.getBoundingClientRect()
      tx = ((e.clientX - r.left) / r.width) * 100
      ty = ((e.clientY - r.top) / r.height) * 100
      if (!raf) raf = requestAnimationFrame(tick)
    }
    const tick = () => {
      cx += (tx - cx) * 0.08
      cy += (ty - cy) * 0.08
      el.style.setProperty("--mx", `${cx}%`)
      el.style.setProperty("--my", `${cy}%`)
      raf = Math.abs(tx - cx) + Math.abs(ty - cy) > 0.1 ? requestAnimationFrame(tick) : 0
    }
    parent.addEventListener("pointermove", onMove, { passive: true })
    return () => {
      parent.removeEventListener("pointermove", onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={{ ["--i" as string]: intensity }}
    >
      {/* aurora blobs */}
      <div className="aurora aurora-1" />
      <div className="aurora aurora-2" />
      <div className="aurora aurora-3" />
      {/* grid */}
      <div className="absolute inset-0 bg-grid-lines bg-grid-fade" />
      {/* pointer spotlight */}
      <div className="spotlight absolute inset-0" />
      {/* bottom fade into page */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
    </div>
  )
}
