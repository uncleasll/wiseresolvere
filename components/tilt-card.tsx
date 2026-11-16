"use client"

import { useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

/** 3D tilt that follows the pointer, with a moving glare. */
export function TiltCard({ children, className, max = 10 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el || e.pointerType === "touch") return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    el.style.setProperty("--rx", `${(0.5 - py) * max * 2}deg`)
    el.style.setProperty("--ry", `${(px - 0.5) * max * 2}deg`)
    el.style.setProperty("--gx", `${px * 100}%`)
    el.style.setProperty("--gy", `${py * 100}%`)
  }
  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty("--rx", "0deg")
    el.style.setProperty("--ry", "0deg")
  }

  return (
    <div className="[perspective:1200px]">
      <div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className={cn("tilt relative", className)}
      >
        {children}
        <div className="tilt-glare pointer-events-none absolute inset-0 rounded-[inherit]" />
      </div>
    </div>
  )
}
