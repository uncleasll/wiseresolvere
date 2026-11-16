"use client"

import { useLanguage } from "@/hooks/use-language"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Reveal } from "@/components/reveal"
import { Target, Eye, Heart, Users, Award, ArrowRight } from "lucide-react"

export default function AboutPage() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Target,
      title: t.about.expertise,
      description: t.about.expertiseText,
    },
    {
      icon: Heart,
      title: t.about.integrity,
      description: t.about.integrityText,
    },
    {
      icon: Users,
      title: t.about.partnership,
      description: t.about.partnershipText,
    },
    {
      icon: Award,
      title: t.about.excellence,
      description: t.about.excellenceText,
    },
  ]

  const milestones = [
    {
      year: "2022",
      title: t.about.founded,
      description: t.about.foundedText,
    },
    {
      year: "2023",
      title: t.about.license,
      description: t.about.licenseText,
    },
    {
      year: "2023",
      title: t.about.capital,
      description: t.about.capitalText,
    },
    {
      year: "2023",
      title: t.about.insurance,
      description: t.about.insuranceText,
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="pointer-events-none absolute inset-0 bg-dots bg-dots-fade" />
        <div className="pointer-events-none absolute inset-0"><div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" /><div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-secondary/15 blur-3xl" /></div>
        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 fade-up">
            <Badge variant="secondary" className="w-fit mx-auto px-3 py-1 text-xs uppercase tracking-wider">
              {t.nav.about}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem] leading-[1.08]"><span className="text-gradient">{t.about.title}</span></h1>
            <p className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed">{t.about.description}</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 card-hover">
              <CardHeader className="text-center pb-6">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">{t.about.mission}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-center">{t.about.missionText}</p>
              </CardContent>
            </Card>

            <Card className="p-8 card-hover">
              <CardHeader className="text-center pb-6">
                <Eye className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle className="text-2xl">{t.about.vision}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-center">{t.about.visionText}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">{t.about.values}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.about.valuesText}</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group gradient-border card-hover">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
    

      {/* Company Details Section */}
  

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 bg-primary text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="pointer-events-none absolute inset-0"><div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-secondary/30 blur-3xl" /><div className="absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" /></div>
        <div className="container relative mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">{t.cta.title}</h2>
            <p className="text-lg sm:text-xl opacity-90 leading-relaxed">{t.cta.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="btn-shine px-8" asChild>
                <Link href="/team">
                  {t.team.title}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:border-primary-foreground bg-transparent"
                asChild
              >
                <Link href="/order">{t.cta.consultation}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
