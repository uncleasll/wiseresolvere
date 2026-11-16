"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/hooks/use-language"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Reveal } from "@/components/reveal"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react"

export default function OrderPage() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })

  const contactInfo = [
    {
      icon: Mail,
      title: t.contact.email,
      content: "info@wiseresolvere.com",
      description: t.contact.emailDesc,
    },
    {
      icon: Phone,
      title: t.contact.phone,
      content: "+998 (99) 402 00 11",
      description: t.contact.phoneDesc,
    },
    {
      icon: MapPin,
      title: t.contact.address,
      content: "Tashkent, Uzbekistan",
      description: t.contact.addressDesc,
    },
    {
      icon: Clock,
      title: t.contact.response,
      content: t.contact.responseTime,
      description: t.contact.responseDesc,
    },
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // simulate request
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: t.order.successTitle,
      description: t.order.successDesc,
    })

    setIsSubmitting(false)
    setFormData({ firstName: "", lastName: "", email: "" })
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PageHero badge={t.order.title} title={t.order.getStarted} subtitle={t.order.heroDesc} />

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group gradient-border text-center card-hover">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 transition-colors group-hover:bg-primary [&>svg]:transition-colors group-hover:[&>svg]:text-primary-foreground">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold text-primary mb-1">
                    {info.icon === Mail ? <a href={`mailto:${info.content}`} className="hover:underline underline-offset-4">{info.content}</a>
                      : info.icon === Phone ? <a href={`tel:${info.content.replace(/[^\d+]/g, "")}`} className="hover:underline underline-offset-4">{info.content}</a>
                      : info.content}
                  </div>
                  <CardDescription>{info.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Simplified Order Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-xl border-primary/10">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{t.order.requestQuote}</CardTitle>
                <CardDescription>{t.order.quoteDesc}</CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">{t.order.firstName} *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">{t.order.lastName} *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t.order.email} *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>

                  <div className="pt-6">
                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/40 border-t-white"></div>
                          {t.order.submittingRequest}
                        </>
                      ) : (
                        <>
                          {t.order.submitRequest}
                          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                    <p className="text-sm text-muted-foreground text-center mt-4">{t.order.privacyNote}</p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">{t.order.whatHappensNext}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.order.whatHappensDesc}</p>
          </Reveal>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 card-hover">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-lg ring-8 ring-primary/10">
                  1
                </div>
                <CardTitle>{t.order.initialReview}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{t.order.initialReviewDesc}</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6 card-hover">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-lg ring-8 ring-secondary/10">
                  2
                </div>
                <CardTitle>{t.order.personalContact}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{t.order.personalContactDesc}</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6 card-hover">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-lg ring-8 ring-primary/10">
                  3
                </div>
                <CardTitle>{t.order.customProposal}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{t.order.customProposalDesc}</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
