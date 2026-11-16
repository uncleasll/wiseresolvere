"use client"

import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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

  const features = [
    { icon: Shield, title: t.services?.audit, description: t.services?.auditDesc },
    { icon: TrendingUp, title: t.services?.consulting, description: t.services?.consultingDesc },
    { icon: Calculator, title: t.services?.tax, description: t.services?.taxDesc },
    { icon: FileText, title: t.services?.accounting, description: t.services?.accountingDesc },
  ]

  const stats = [
    { number: "500+", label: t.stats?.clientsServed || "Clients Served" },
    { number: "8+", label: t.stats?.yearsExperience || "Years Experience" },
    { number: "98%", label: t.stats?.clientSatisfaction || "Client Satisfaction" },
    { number: "24/7", label: t.stats?.supportAvailable || "Support Available" },
  ]

  const benefits: string[] = [
    t.benefits?.certifiedAuditors || "Professional certified auditors",
    t.benefits?.financialAnalysis || "Comprehensive financial analysis",
    t.benefits?.compliance || "Regulatory compliance expertise",
    t.benefits?.customSolutions || "Customized business solutions",
    t.benefits?.multilingualSupport || "Multilingual support team",
    t.benefits?.competitivePricing || "Competitive pricing structure",
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
      {/* Hero Section - compact padding + improved layout */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/10
        pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-14 lg:pb-24">
        {/* gradient shimmers */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid items-center gap-12 md:gap-16 lg:grid-cols-2">
            {/* Left */}
            <div className="space-y-8 fade-up">
              {/* trust badge */}
              <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-4 py-1.5 text-sm backdrop-blur">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  {t.hero?.trustBadge || "Trusted by 500+ businesses"}
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-[3.25rem]">
                  {t.hero?.title}
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl">
                  {t.hero?.subtitle}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="px-8" asChild>
                  <Link href="/order">
                    {t.hero?.cta}
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                {/* <Button size="lg" variant="outline" className="bg-transparent px-8 text-lg" asChild>
                  <Link href="/order">{t.nav?.services}</Link>
                </Button> */}
              </div>

              {/* mini stats */}
              <div className="grid grid-cols-2 gap-6 pt-2 sm:grid-cols-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {t.stats?.yearsExperience || "Years Experience"}
                    </div>
                    <div className="text-lg font-semibold">
                      {t.hero?.yearsExperience || "15+ Years Experience"}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                    <Users className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {t.stats?.clientsServed || "Clients Served"}
                    </div>
                    <div className="text-lg font-semibold">
                      {t.hero?.clientsSatisfied || "500+ Satisfied Clients"}
                    </div>
                  </div>
                </div>

                <div className="col-span-2 flex items-center gap-3 sm:col-span-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <PieChart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {t.stats?.supportAvailable || "Support"}
                    </div>
                    <div className="text-lg font-semibold">
                      {t.hero?.projectsCompleted || "1000+ Projects Completed"}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="relative fade-up fade-up-delay-2">
              <div className="relative rounded-2xl border bg-card p-3 shadow-xl">
                {/* hero image — o'zingiznikini public/ ichiga qo'ying */}
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="/hero-2.jpg"
                    alt="Wise Resolvere — Audit & Consulting"
                    width={960}
                    height={720}
                    className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                    priority
                  />
                </div>

                {/* floating badges */}
                <div className="pointer-events-none absolute -left-5 top-8 hidden md:block animate-float">
                  <div className="rounded-xl border bg-background/90 px-4 py-2.5 shadow-lg backdrop-blur">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">{t.features?.qualityAssurance || "Quality Assurance"}</span>
                    </div>
                  </div>
                </div>

                <div className="pointer-events-none absolute -right-5 bottom-8 hidden md:block animate-float-delayed">
                  <div className="rounded-xl border bg-background/90 px-4 py-2.5 shadow-lg backdrop-blur">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-secondary" />
                      <span className="text-sm font-medium">{t.features?.dataAnalytics || "Data Analytics"}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* subtle glow */}
              <div className="absolute -bottom-8 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="eyebrow">{t.nav?.about}</span>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance">
                  {t.whyChoose?.title || "Why Choose Wise Resolvere?"}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.whyChoose?.subtitle ||
                    "We combine expertise, technology, and personalized service to deliver exceptional results for your business."}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 rounded-lg border bg-card/60 px-3 py-2.5 transition-colors hover:border-secondary/40">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/15"><CheckCircle className="h-3.5 w-3.5 text-secondary" /></span>
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="w-fit" asChild>
                <Link href="/about">
                  {t.whyChoose?.learnMore || "Learn More About Us"}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center card-hover">
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t.features?.enterprise || "Enterprise Solutions"}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.features?.enterpriseDesc || "Scalable audit solutions for large organizations"}
                </p>
              </Card>

              <Card className="p-6 text-center mt-8 card-hover">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t.features?.expertTeam || "Expert Team"}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.features?.expertTeamDesc || "Certified professionals with extensive experience"}
                </p>
              </Card>

              <Card className="p-6 text-center card-hover">
                <PieChart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t.features?.dataAnalytics || "Data Analytics"}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.features?.dataAnalyticsDesc || "Advanced analytics for better business insights"}
                </p>
              </Card>

              <Card className="p-6 text-center mt-8 card-hover">
                <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t.features?.qualityAssurance || "Quality Assurance"}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.features?.qualityAssuranceDesc || "Rigorous quality control processes"}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 bg-primary text-primary-foreground">
        <div className="pointer-events-none absolute inset-0"><div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-secondary/30 blur-3xl" /><div className="absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" /></div>
        <div className="container relative mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">{t.cta?.title || "Ready to Get Started?"}</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              {t.cta?.subtitle ||
                "Contact us today for a free consultation and discover how we can help your business achieve its financial goals."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8" asChild>
                <Link href="/order">
                  {t.cta?.consultation || "Get Free Consultation"}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:border-primary-foreground bg-transparent"
                asChild
              >
                <Link href="/services">{t.cta?.viewRates || "View Our Services"}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    {/* Partners Section */}
<section className="py-20 bg-muted/30">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-3">
        {t.partners?.title || "Bizga ishonch bildirganlar"}
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        {t.partners?.subtitle || "Yetakchi kompaniyalar hamkorligimizdan mamnun"}
      </p>
    </div> 

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {partners.map((p) => {
        const name = t.partners?.items?.[p.key] ?? p.key
        return (
          <div
            key={p.key}
            className="group relative rounded-xl bg-white border card-hover aspect-[16/9] flex items-center justify-center"
            title={name}
          >
            <Image
              src={p.logo}
              alt={name}
              fill
              className="object-contain p-5 grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
            />
          </div>
        )
      })}
    </div>
  </div>
</section>
    </div>
  )
}
