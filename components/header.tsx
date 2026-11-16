"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/hooks/use-language"
import { LanguageSelector } from "@/components/language-selector"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight, Phone, Mail, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const { t } = useLanguage()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/clients", label: t.nav.clients },
    { href: "/team", label: t.nav.team },
  ]

  // Shadow once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close the mobile menu on navigation and lock body scroll while open
  useEffect(() => setIsMenuOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href))

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md transition-shadow duration-300",
        scrolled ? "shadow-[0_4px_24px_-12px_rgba(0,0,0,0.25)]" : "shadow-none",
      )}
    >
      {/* Top contact bar */}
      <div className="hidden border-b bg-primary text-primary-foreground lg:block">
        <div className="container mx-auto flex h-9 items-center justify-between px-4 text-xs">
          <div className="flex items-center gap-6">
            <a href="tel:+998994020011" className="inline-flex items-center gap-1.5 opacity-90 transition-opacity hover:opacity-100">
              <Phone className="h-3.5 w-3.5" /> +998 (99) 402 00 11
            </a>
            <a href="mailto:info@wiseresolvere.uz" className="inline-flex items-center gap-1.5 opacity-90 transition-opacity hover:opacity-100">
              <Mail className="h-3.5 w-3.5" /> info@wiseresolvere.uz
            </a>
          </div>
          <span className="inline-flex items-center gap-1.5 opacity-90">
            <MapPin className="h-3.5 w-3.5" /> Toshkent, Sh. Rustaveli ko'chasi, 150
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between lg:h-[72px]">
          <Link href="/" className="flex items-center rounded-md" aria-label="Wise Resolvere">
            <Image
              src="/logo-wiseresolvere.png"
              alt="Wise Resolvere"
              width={180}
              height={60}
              className="h-12 w-auto lg:h-14"
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {navItems.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    "after:absolute after:inset-x-3 after:-bottom-[17px] after:h-0.5 after:rounded-full after:bg-primary after:transition-transform after:duration-300 after:origin-left",
                    active
                      ? "text-primary after:scale-x-100"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted after:scale-x-0 hover:after:scale-x-100",
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSelector />
            <div className="h-6 w-px bg-border" />
            <Button variant="secondary" className="btn-shine" asChild>
              <Link href="/order">
                {t.nav.order}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSelector />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-nav"
        className={cn(
          "lg:hidden overflow-hidden border-t bg-background transition-[max-height,opacity] duration-300 ease-out",
          isMenuOpen ? "max-h-[70vh] opacity-100" : "max-h-0 border-t-0 opacity-0",
        )}
      >
        <nav className="container mx-auto flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
          {navItems.map((item) => {
            const active = isActive(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                  active ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-muted",
                )}
              >
                {item.label}
              </Link>
            )
          })}
          <Button variant="secondary" size="lg" className="mt-3 w-full" asChild>
            <Link href="/order">
              {t.nav.order}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
