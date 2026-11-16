"use client"

import { useLanguage } from "@/hooks/use-language"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Reveal } from "@/components/reveal"
import { Award, GraduationCap, ArrowRight, Phone, Mail } from "lucide-react"

export default function TeamPage() {
  const { t } = useLanguage()

  const teamMembers = [
    {
      name: "Makhmudov Bobur Hamroqul",
      position: "Bosh direktor",
      image: "/bobur.jpg",
      phone: "+998 99 402 00 11",
      email: "bobur.makhmudov@wiseresolvere.uz",
      education: [
        "2012-2016 Toshkent moliya instituti, Buxgalteriya hisobi va audit, bakalavr",
        "2018-2020 Chonnam milliy universiteti Janubiy Koreya, Iqtisodiyot va biznes boshqaruvi, magistratura",
      ],
      certificates: [
        "Auditorning Malaka sertifikati",
        "Soliq maslahatchisining Malaka sertifikati",
        "ACCA",
        "ACCA DipIFR (eng)",
      ],
      experience: "Ish staji 10+ yil",
    },
    {
      name: "Raxmanov Begzod",
      position: "Auditor, MHXS bo’limi boshlig’i",
      image: "/begzod.jpg",
      phone: "+998 90 974 35 43",
      email: "begzod.rakhmanov@wiseresolvere.uz",
      education: [
        "2008-2013 Jahon iqtisodiyoti va diplomatiya universiteti, Jahon iqtisodiyoti va xalqaro iqtisodiy munosabatlar, bakalavr",
        "2016-2020 Oksford Bruks universiteti Buyuk Britaniya, Buxgalteriya hisobi, bakalavr",
      ],
      certificates: [
        "Auditorning Malaka sertifikati",
        "Advanced Diploma in Accounting and Business (ACCA)",
      ],
      experience: "Ish staji 13+ yil",
    },
    {
      name: "Quldosheva Xolisa",
      position: "Auditor",
      image: "/xolisa.jpg",
      phone: "+998 97 460 32 31",
      email: "kholisa.kuldosheva@wiseresolvere.uz",
      education: [
        "2012-2016 Toshkent moliya instituti, Buxgalteriya hisobi va audit, bakalavr",
        "2016-2018 Toshkent moliya instituti, Audit, magistratura",
        "2024-2025 Toshkent davlat iqtisodiyot universiteti, Buxgalteriya hisobi va audit, PhD",
      ],
      certificates: [
        "Auditorning Malaka sertifikati",
        "Soliq maslahatchisining Malaka sertifikati",
        "CAP",
      ],
      experience: "Ish staji 13+ yil",
    },
    {
      name: "Murodxo’jayeva Dilnoza",
      position: "Auditor",
      image: "/dilnoza.png",
      phone: "+998 97 751 07 04",
      email: "dilnoza.murodkhojaeva@wiseresolvere.uz",
      education: [
        "2012-2016 Toshkent moliya instituti, Buxgalteriya hisobi va audit, bakalavr",
      ],
      certificates: [
        "Auditorning Malaka sertifikati",
        "ACCA DipIFR (rus)",
        "CAP",
      ],
      experience: "Ish staji 10+ yil",
    },
    {
      name: "Atoyev Xasan",
      position: "Auditor",
      image: "/xasan.png",
      phone: "+998 91 648 01 30",
      email: "khasan.atoev@wiseresolvere.uz",
      education: [
        "2012-2016 Toshkent temir yo‘l transporti muhandislari instituti, Buxgalteriya hisobi va audit, bakalavr",
        "2017-2019 Chonnam milliy universiteti Janubiy Koreya, Iqtisodiyot va biznes boshqaruvi, magistratura",
      ],
      certificates: [
        "Auditorning Malaka sertifikati",
        "CAP",
      ],
      experience: "Ish staji 10+ yil",
    },
  ]

  const departments = [
    {
      name: "Audit Department",
      description: "Comprehensive financial auditing services",
      teamSize: "12 professionals",
      icon: Award,
    },
    {
      name: "Tax Department",
      description: "Tax planning and compliance services",
      teamSize: "8 professionals",
      icon: GraduationCap,
    },
    {
      name: "Consulting Department",
      description: "Business strategy and optimization",
      teamSize: "6 professionals",
      icon: Award,
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
              {t.nav.team}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem] leading-[1.08]"><span className="text-gradient">{t.team.title}</span></h1>
            <p className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed">{t.team.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Departments Overview */}

      {/* Team Members */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-16">
            <span className="eyebrow mb-3">{t.nav.team}</span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">{t.team.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.team.subtitle}</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group gradient-border card-hover bg-card">
                <CardHeader className="text-center pb-4 border-b mx-6 px-0">
                  <div className="relative mx-auto mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-background shadow-lg ring-2 ring-primary/20 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">{member.position}</CardDescription>
                  <Badge variant="secondary" className="w-fit mx-auto mt-2">
                    {member.experience}
                  </Badge>
                </CardHeader>

                <CardContent className="space-y-5 pt-5">
                  <div className="flex flex-col items-center gap-1.5 text-sm">
                    <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 rounded-md px-2 py-1 transition-colors hover:bg-muted hover:text-primary">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>{member.phone}</span>
                    </a>
                    <a href={`mailto:${member.email}`} className="inline-flex items-center gap-2 rounded-md px-2 py-1 transition-colors hover:bg-muted hover:text-primary break-all">
                      <Mail className="h-4 w-4 shrink-0 text-primary" />
                      <span>{member.email}</span>
                    </a>
                  </div>

                  <div>
                    <h4 className="font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-2">{t.team.education || "Ta’lim"}</h4>
                    <div className="space-y-1.5">
                      {member.education.map((edu, eduIndex) => (
                        <div key={eduIndex} className="flex gap-2 text-xs text-muted-foreground leading-relaxed">
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                          <span>{edu}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-2">Sertifikatlar</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {member.certificates.map((cert, certIndex) => (
                        <Badge key={certIndex} variant="outline" className="whitespace-normal text-left text-xs font-normal">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">{t.team.joinTeam}</h2>
            <p className="text-lg sm:text-xl opacity-90 leading-relaxed">{t.team.joinTeamDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-secondary-foreground/60 text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary bg-transparent"
                asChild
              >
                <Link href="/order">
                  {t.common.contactUs}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
