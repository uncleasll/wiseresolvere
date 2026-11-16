"use client"

import { useLanguage } from "@/hooks/use-language"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { PageHero } from "@/components/page-hero"

export default function ClientsPage() {
  const { t } = useLanguage()

  const clientTypes = [
    {
      image: "clients/manufacturing.jpeg",
      title: "Sanoat ishlab chiqarish korxonalari",
      description: "Ishlab chiqarish va sanoat korxonalari uchun buxgalteriya va audit xizmatlari.",
    },
    {
      image: "clients/construction.jpg",
      title: "Qurilish korxonalari",
      description: "Qurilish sohasidagi kompaniyalar uchun maxsus moliyaviy xizmatlar.",
    },
    {
      image: "clients/wholesale.jpg",
      title: "Ulgurji savdo korxonalari",
      description: "Ulgurji savdo va taqsimot korxonalari uchun hisob va audit.",
    },
    {
      image: "clients/it-company.jpg",
      title: "IT kompaniyalari",
      description: "Axborot texnologiyalari sohasidagi kompaniyalar uchun buxgalteriya xizmatlari.",
    },
    {
      image: "clients/restaurant.jpg",
      title: "Kafe va restoranlar",
      description: "Oziq-ovqat xizmatlari biznesi uchun maxsus buxgalteriya va hisob.",
    },
    {
      image: "clients/medical-clinic.jpg",
      title: "Tibbiyot klinikalari",
      description: "Tibbiyot muassasalari uchun soliq, audit va moliyaviy xizmatlar.",
    },
    {
      image: "clients/transport-t.jpg",
      title: "Transport kompaniyalari",
      description: "Transport va logistika kompaniyalari uchun audit va hisob.",
    },
  ]

  return (
    <div className="flex flex-col">
      <PageHero badge={t.nav.clients} title={t.clients.title} subtitle={t.clients.subtitle} />

      {/* Client Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientTypes.map((client, index) => (
              <Card
                key={index}
                className="group gradient-border card-hover overflow-hidden p-0 gap-0"
              >
                {/* Rasm qismi */}
                <div className="relative w-full h-52 overflow-hidden">
                  <Image
                    src={client.image}
                    alt={client.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Matn qismi */}
                <CardHeader className="p-5 pb-6">
                  <CardTitle className="text-lg leading-snug">{client.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {client.description}
                  </CardDescription>
                </CardHeader>
                <CardContent />
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
