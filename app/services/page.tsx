"use client"

import { useLanguage } from "@/hooks/use-language"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Reveal } from "@/components/reveal"
import { PageHero } from "@/components/page-hero"
import {
  Shield,
  Calculator,
  TrendingUp,
  FileText,
  CheckCircle,
  ArrowRight,
  Users,
  Award,
  Target,
  BookOpen,
} from "lucide-react"

export default function ServicesPage() {
  const { t } = useLanguage()

  const mainServices = [
    {
      icon: Shield,
      title: t.services.audit,
      description: t.services.auditDesc,
      features: t.services.auditFeatures,
    },
    {
      icon: Calculator,
      title: t.services.tax,
      description: t.services.taxDesc,
      features: t.services.taxFeatures,
    },
    {
      icon: TrendingUp,
      title: t.services.consulting,
      description: t.services.consultingDesc,
      features: t.services.consultingFeatures,
    },
    {
      icon: FileText,
      title: t.services.accounting,
      description: t.services.accountingDesc,
      features: t.services.accountingFeatures,
    },
    {
      icon: BookOpen,
      title: t.services.analysis,
      description: t.services.analysisDesc,
      features: t.services.analysisFeatures,
    },
  ]

  const additionalServices = [
    {
      title: t.services.dueDiligence,
      description: t.services.dueDiligenceDesc,
      icon: Target,
    },
    {
      title: t.services.forensicAccounting,
      description: t.services.forensicAccountingDesc,
      icon: Award,
    },
    {
      title: t.services.ifrsImplementation,
      description: t.services.ifrsImplementationDesc,
      icon: FileText,
    },
    {
      title: t.services.trainingWorkshops,
      description: t.services.trainingWorkshopsDesc,
      icon: Users,
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: t.services.step1Title,
      description: t.services.step1Desc,
    },
    {
      step: "02",
      title: t.services.step2Title,
      description: t.services.step2Desc,
    },
    {
      step: "03",
      title: t.services.step3Title,
      description: t.services.step3Desc,
    },
    {
      step: "04",
      title: t.services.step4Title,
      description: t.services.step4Desc,
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PageHero badge={t.nav.services} title={t.services.title} subtitle={t.services.subtitle}>
        <Button size="lg" className="btn-shine px-8" asChild>
          <Link href="/order">
            {t.services.getStarted}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </PageHero>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card
                key={index}
                className="group gradient-border card-hover flex flex-col"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 [&>svg]:transition-colors [&>svg]:duration-300 group-hover:[&>svg]:text-primary-foreground">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl leading-snug">{service.title}</CardTitle>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 flex flex-col flex-grow">
                  <CardDescription className="leading-relaxed">
                    {service.description}
                  </CardDescription>

                  <div className="flex-grow">
                    <h4 className="font-semibold mb-3">{t.services.whatsIncluded}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-4 w-4 text-secondary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    className="w-full mt-auto"
                    asChild
                  >
                    <Link href="/order">
                      {t.services.getStarted}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}


      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              {t.services.processTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.services.processSubtitle}
            </p>
          </Reveal>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="relative z-10 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto ring-8 ring-background shadow-lg">
                      {step.step}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/40 to-border -translate-y-0.5"></div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 bg-primary text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="pointer-events-none absolute inset-0"><div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-secondary/30 blur-3xl" /><div className="absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" /></div>
        <div className="container relative mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">{t.cta.title}</h2>
            <p className="text-lg sm:text-xl opacity-90 leading-relaxed">{t.cta.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="px-8"
                asChild
              >
                <Link href="/order">
                  {t.order.requestQuote}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:border-primary-foreground bg-transparent"
                asChild
              >
                <Link href="/about">{t.whyChoose?.learnMore || t.nav.about}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
