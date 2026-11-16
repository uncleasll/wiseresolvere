"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { HeroBackground } from "@/components/hero-background"
import { type ReactNode } from "react"

type Props = {
  badge: string
  title: string
  subtitle?: string
  children?: ReactNode
  align?: "center" | "left"
}

export function PageHero({ badge, title, subtitle, children, align = "center" }: Props) {
  const centered = align === "center"
  return (
    <section className="relative overflow-hidden pt-14 pb-20 sm:pt-20 lg:pt-24 lg:pb-28">
      <HeroBackground intensity={0.8} />
      <div className="container relative z-10 mx-auto px-4">
        <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
          <nav
            aria-label="Breadcrumb"
            className={"fade-up mb-6 flex items-center gap-1.5 text-xs text-muted-foreground " + (centered ? "justify-center" : "")}
          >
            <Link href="/" className="inline-flex items-center gap-1 transition-colors hover:text-primary">
              <Home className="h-3.5 w-3.5" />
            </Link>
            <ChevronRight className="h-3.5 w-3.5 opacity-60" />
            <span className="font-medium text-foreground/80">{badge}</span>
          </nav>

          <span className={"fade-up fade-up-delay-1 eyebrow " + (centered ? "justify-center" : "")}>{badge}</span>

          <h1 className="fade-up fade-up-delay-1 mt-4 text-4xl font-bold leading-[1.06] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            <span className="text-gradient">{title}</span>
          </h1>

          {subtitle && (
            <p className="fade-up fade-up-delay-2 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl">
              {subtitle}
            </p>
          )}

          {children && <div className={"fade-up fade-up-delay-3 mt-8 flex flex-wrap gap-3 " + (centered ? "justify-center" : "")}>{children}</div>}
        </div>
      </div>
    </section>
  )
}
