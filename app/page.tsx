"use client"

import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { Counter } from "@/components/counter"
import { HeroBackground } from "@/components/hero-background"
import { TiltCard } from "@/components/tilt-card"
import { RotatingWords } from "@/components/rotating-words"
import Link from "next/link"
import Image from "next/image"
import {
  Shield,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Calculator,
  FileText,
  PieChart,
  Building,
  Sparkles,
  Star,
  PlayCircle,
  ShieldCheck,
} from "lucide-react"

type PartnerKey =
  | "angren"
  | "cda"
  | "compact"
  | "elegant"
  | "enter"
  | "goldenfish"
  | "next"
  | "sochnaya"
  | "soteryan"
  | "viko"

export default function HomePage() {
  const { t } = useLanguage()

  const services = [
    { icon: Shield, title: t.services.audit, description: t.services.auditDesc },
    { icon: Calculator, title: t.services.tax, description: t.services.taxDesc },
    { icon: TrendingUp, title: t.services.consulting, description: t.services.consultingDesc },
    { icon: FileText, title: t.services.accounting, description: t.services.accountingDesc },
  ]

  const stats = [
    { value: 500, suffix: "+", label: t.stats.clientsServed },
    { value: 8, suffix: "+", label: t.stats.yearsExperience },
    { value: 98, suffix: "%", label: t.stats.clientSatisfaction },
    { value: 1000, suffix: "+", label: t.hero.projectsCompleted.replace(/^[\d+\s]+/, "") },
  ]

  const benefits: string[] = [
    t.benefits.certifiedAuditors,
    t.benefits.financialAnalysis,
    t.benefits.compliance,
    t.benefits.customSolutions,
    t.benefits.multilingualSupport,
    t.benefits.competitivePricing,
  ]

  const features = [
    { icon: Building, title: t.features.enterprise, desc: t.features.enterpriseDesc, tone: "primary" },
    { icon: Users, title: t.features.expertTeam, desc: t.features.expertTeamDesc, tone: "secondary" },
    { icon: PieChart, title: t.features.dataAnalytics, desc: t.features.dataAnalyticsDesc, tone: "primary" },
    { icon: Award, title: t.features.qualityAssurance, desc: t.features.qualityAssuranceDesc, tone: "secondary" },
  ]

  const steps = [
    { n: "01", title: t.services.step1Title, desc: t.services.step1Desc },
    { n: "02", title: t.services.step2Title, desc: t.services.step2Desc },
    { n: "03", title: t.services.step3Title, desc: t.services.step3Desc },
    { n: "04", title: t.services.step4Title, desc: t.services.step4Desc },
  ]

  const partners: { key: PartnerKey; logo: string }[] = [
    { key: "angren", logo: "/partners/angren.svg" },
    { key: "cda", logo: "/partners/center.png" },
    { key: "compact", logo: "/partners/compact.png" },
    { key: "elegant", logo: "/partners/elegant.jpg" },
    { key: "enter", logo: "/partners/enter_engineering.png" },
    { key: "goldenfish", logo: "/partners/goldenfish.png" },
    { key: "next", logo: "/partners/nextmall.png" },
    { key: "sochnaya", logo: "/partners/sochnaya-dolina.png" },
    { key: "soteryan", logo: "/partners/soteryan.svg" },
    { key: "viko", logo: "/partners/viko.png" },
  ]

  return (
    <div className="flex flex-col">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-10 pb-24 sm:pt-14 lg:pt-16 lg:pb-32">
        <HeroBackground />

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_1fr] lg:gap-12">
            {/* Copy */}
            <div className="space-y-8">
              <div className="fade-up inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-background/70 py-1.5 pl-1.5 pr-4 text-sm shadow-sm backdrop-blur">
                <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-secondary-foreground">
                  {t.hero.badge}
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
                </span>
                <span className="font-medium text-foreground/80">{t.hero.trustBadge}</span>
              </div>

              <div className="space-y-6">
                <h1 className="fade-up fade-up-delay-1 text-[2.6rem] font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[4rem]">
                  <span className="text-gradient-animated">{t.hero.title}</span>
                </h1>

                <div className="fade-up fade-up-delay-2 text-xl font-semibold text-foreground/80 sm:text-2xl">
                  <span className="text-muted-foreground font-normal">—&nbsp;</span>
                  <RotatingWords
                    words={[t.services.audit, t.services.tax, t.services.consulting, t.services.accounting, t.services.analysis]}
                    className="text-primary"
                  />
                </div>

                <p className="fade-up fade-up-delay-2 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl">
                  {t.hero.subtitle}
                </p>
              </div>

              <div className="fade-up fade-up-delay-3 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="btn-shine h-13 px-8 text-base shadow-lg shadow-primary/25" asChild>
                  <Link href="/order">
                    {t.hero.cta}
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="glass h-13 px-8 text-base" asChild>
                  <Link href="/services">
                    <PlayCircle className="h-5 w-5 text-primary" />
                    {t.nav.services}
                  </Link>
                </Button>
              </div>

              {/* Social proof row */}
              <div className="fade-up fade-up-delay-3 flex flex-wrap items-center gap-x-8 gap-y-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2.5">
                    {["/bobur.jpg", "/begzod.jpg", "/xolisa.jpg", "/dilnoza.png"].map((src) => (
                      <Image
                        key={src}
                        src={src}
                        alt=""
                        width={36}
                        height={36}
                        className="h-9 w-9 rounded-full border-2 border-background object-cover shadow"
                      />
                    ))}
                  </div>
                  <div className="text-sm leading-tight">
                    <div className="font-semibold">{t.hero.yearsExperience}</div>
                    <div className="text-muted-foreground">{t.features.expertTeam}</div>
                  </div>
                </div>
                <div className="hidden h-8 w-px bg-border sm:block" />
                <div className="flex items-center gap-2 text-sm">
                  <div className="flex text-amber-400">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold">98%</span>
                  <span className="text-muted-foreground">{t.stats.clientSatisfaction}</span>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative fade-up fade-up-delay-2 lg:pl-6">
              <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/25 via-transparent to-secondary/30 blur-3xl" />

              <TiltCard className="rounded-3xl">
                <div className="relative overflow-hidden rounded-3xl border border-white/40 bg-card/80 p-2.5 shadow-2xl shadow-primary/15 backdrop-blur">
                  <div className="relative overflow-hidden rounded-[1.15rem]">
                    <Image
                      src="/hero-2.jpg"
                      alt="Wise Resolvere — Audit & Consulting"
                      width={960}
                      height={720}
                      className="h-auto w-full object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />

                    {/* in-image caption */}
                    <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 text-white">
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-[0.2em] opacity-80">Wise Resolvere</div>
                        <div className="text-lg font-bold leading-tight">{t.hero.badge}</div>
                      </div>
                      <div className="glass rounded-xl px-3 py-2 text-right text-foreground">
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{t.stats.clientsServed}</div>
                        <div className="text-base font-bold text-primary">500+</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating cards (pop out in 3D) */}
                <div className="tilt-pop pointer-events-none absolute -left-8 top-10 hidden md:block animate-float">
                  <div className="glass rounded-2xl px-4 py-3 shadow-xl">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/30">
                        <ShieldCheck className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-[11px] uppercase tracking-wider text-muted-foreground">ISA · IFRS · ACCA</div>
                        <div className="text-sm font-semibold">{t.features.qualityAssurance}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tilt-pop pointer-events-none absolute -right-8 bottom-16 hidden md:block animate-float-delayed">
                  <div className="glass rounded-2xl px-4 py-3 shadow-xl">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-secondary-foreground shadow-md shadow-secondary/30">
                        <TrendingUp className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{t.hero.projectsCompleted}</div>
                        <div className="flex items-center gap-1.5 text-sm font-semibold">
                          {t.features.dataAnalytics}
                          <span className="rounded-md bg-secondary/15 px-1.5 py-0.5 text-[11px] font-bold text-secondary">+24%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* mini bar chart */}
                <div className="tilt-pop pointer-events-none absolute -bottom-6 left-10 hidden lg:block">
                  <div className="glass flex items-end gap-1.5 rounded-2xl px-4 py-3 shadow-xl">
                    {[35, 55, 45, 70, 60, 85, 100].map((h, i) => (
                      <span
                        key={i}
                        className="w-2 rounded-sm bg-gradient-to-t from-primary to-secondary"
                        style={{ height: `${h * 0.4}px`, opacity: 0.5 + i * 0.07 }}
                      />
                    ))}
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>

          {/* scroll cue */}
          <div className="scroll-cue mx-auto mt-16 hidden w-6 rounded-full border-2 border-primary/30 pt-1.5 lg:block" style={{ height: 36 }} />
        </div>
      </section>

      {/* ================= STATS BAR ================= */}
      <section className="relative">
        <div className="container mx-auto px-4">
          <Reveal className="relative -mt-2 grid grid-cols-2 divide-border overflow-hidden rounded-2xl border bg-card shadow-xl shadow-primary/5 md:grid-cols-4 md:divide-x">
            {stats.map((s, i) => (
              <div key={i} className="px-6 py-7 text-center md:py-8">
                <div className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1.5 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="eyebrow justify-center">{t.nav.services}</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance lg:text-4xl">{t.services.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{t.services.subtitle}</p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={i} delay={i * 90}>
                <Link
                  href="/services"
                  className="gradient-border group flex h-full flex-col rounded-2xl p-6 card-hover"
                >
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-semibold leading-snug">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    {t.services.getStarted}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="relative overflow-hidden bg-muted/40 py-24">
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-60" />
        <div className="container relative mx-auto px-4">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal className="space-y-8">
              <div className="space-y-4">
                <span className="eyebrow">{t.nav.about}</span>
                <h2 className="text-3xl font-bold tracking-tight text-balance lg:text-4xl">{t.whyChoose.title}</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">{t.whyChoose.subtitle}</p>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2">
                {benefits.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 rounded-xl border bg-background/80 px-3.5 py-3 backdrop-blur transition-colors hover:border-secondary/50"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/15">
                      <CheckCircle className="h-3.5 w-3.5 text-secondary" />
                    </span>
                    <span className="text-sm font-medium">{b}</span>
                  </li>
                ))}
              </ul>

              <Button size="lg" className="w-fit" asChild>
                <Link href="/about">
                  {t.whyChoose.learnMore}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </Reveal>

            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <Reveal key={i} delay={i * 100} className={i % 2 === 1 ? "mt-8" : ""}>
                  <div className="card-hover h-full rounded-2xl border bg-card p-6 text-center">
                    <span
                      className={
                        "mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl " +
                        (f.tone === "primary" ? "bg-primary/10 text-primary" : "bg-secondary/15 text-secondary")
                      }
                    >
                      <f.icon className="h-7 w-7" />
                    </span>
                    <h3 className="font-semibold">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <Reveal className="mx-auto mb-16 max-w-2xl text-center">
            <span className="eyebrow justify-center">
              <Sparkles className="h-3.5 w-3.5" />
              {t.services.processTitle}
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance lg:text-4xl">{t.services.processTitle}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{t.services.processSubtitle}</p>
          </Reveal>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 120} className={"relative text-center " + (i < steps.length - 1 ? "step-line" : "")}>
                <div className="relative z-10 mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[oklch(0.5_0.17_230)] text-xl font-bold text-primary-foreground shadow-lg shadow-primary/25 ring-8 ring-background">
                  {s.n}
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PARTNERS (marquee) ================= */}
      <section className="border-y bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <Reveal className="mb-12 text-center">
            <span className="eyebrow justify-center">{t.nav.clients}</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight lg:text-4xl">{t.partners?.title}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{t.partners?.subtitle}</p>
          </Reveal>
        </div>

        <div className="marquee">
          <div className="marquee-track gap-6 px-3">
            {[...partners, ...partners].map((p, i) => {
              const name = t.partners?.items?.[p.key] ?? p.key
              return (
                <div
                  key={`${p.key}-${i}`}
                  className="group relative flex h-24 w-48 shrink-0 items-center justify-center rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  title={name}
                >
                  <Image
                    src={p.logo}
                    alt={name}
                    fill
                    className="object-contain p-5 opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <Reveal className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground shadow-2xl shadow-primary/20 sm:px-12 lg:py-20">
            <div className="pointer-events-none absolute inset-0 bg-dots opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.5)_1px,transparent_1px)]" />
            <div className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-secondary/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-white/15 blur-3xl" />
            <div className="relative mx-auto max-w-3xl space-y-7">
              <h2 className="text-3xl font-bold tracking-tight text-balance lg:text-5xl">{t.cta.title}</h2>
              <p className="text-lg leading-relaxed opacity-90 sm:text-xl">{t.cta.subtitle}</p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" variant="secondary" className="btn-shine px-8" asChild>
                  <Link href="/order">
                    {t.cta.consultation}
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/50 bg-transparent px-8 text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <Link href="/services">{t.cta.viewRates}</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
