"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export function Footer() {
  const { t } = useLanguage()

  const companyLinks = [
    { href: "/about", label: t.nav.about },
    { href: "/team", label: t.nav.team },
    { href: "/clients", label: t.nav.clients },
  ]
  const serviceLinks = [
    { href: "/services", label: t.nav.services },
    { href: "/order", label: t.nav.order },
  ]

  const linkClass =
    "inline-flex items-center gap-1.5 text-white/70 transition-colors hover:text-white [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:opacity-0 [&>svg]:-translate-x-1 [&>svg]:transition-all hover:[&>svg]:opacity-100 hover:[&>svg]:translate-x-0"

  return (
    <footer className="footer-dark">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
          {/* Company */}
          <div className="space-y-4">
            <div className="inline-block rounded-xl bg-white px-3 py-2"><Image src="/logo-wiseresolvere.png" alt="Wise Resolvere" width={180} height={60} className="h-10 w-auto" /></div>
            <p className="max-w-sm text-sm leading-relaxed text-white/70">{t.about.description}</p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/50">{t.footer.company}</h3>
            <ul className="space-y-2.5 text-sm">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                    <ArrowRight />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/50">{t.footer.services}</h3>
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                    <ArrowRight />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/50">{t.footer.contact}</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a href="mailto:info@wiseresolvere.uz" className="flex items-start gap-3 transition-colors hover:text-white">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                  info@wiseresolvere.uz
                </a>
              </li>
              <li>
                <a href="tel:+998994020011" className="flex items-start gap-3 transition-colors hover:text-white">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                  +998 (99) 402 0011
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span>Toshkent shahri, Yakkasaroy tumani, Sh.Rustaveli ko'chasi, 150-uy</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Wise Resolvere. {t.footer.rights}</p>
          <Link href="/order" className="font-medium text-secondary hover:underline underline-offset-4">
            {t.nav.order}
          </Link>
        </div>
      </div>
    </footer>
  )
}
