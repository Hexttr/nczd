"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { CalendarPlus, ChevronDown, Eye, MapPin, Menu, Phone, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { navigation, topActions } from "@/lib/site-content"

function BrandBlock() {
  return (
    <Link href="/" className="flex items-start gap-3 lg:gap-4">
      <Image
        src="/images/nczd-logo-blue.png"
        alt="Логотип НЦЗД"
        width={82}
        height={82}
        className="h-14 w-auto shrink-0 object-contain sm:h-16 lg:h-[72px]"
        priority
      />
      <div className="space-y-1.5">
        <p className="max-w-[820px] text-sm font-extrabold leading-tight text-foreground sm:text-base lg:text-lg">
          Национальный медицинский исследовательский центр здоровья детей
        </p>
        <p className="max-w-[920px] text-[11px] leading-relaxed text-muted-foreground sm:text-xs lg:text-sm">
          Федеральное государственное автономное учреждение Министерства здравоохранения Российской Федерации
        </p>
      </div>
    </Link>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const [accessibilityMode, setAccessibilityMode] = useState(false)

  return (
    <header className={cn("sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur", accessibilityMode && "text-[1.05rem]")}>
      <div className="border-b border-border/60 bg-[linear-gradient(90deg,rgba(26,100,166,0.08),rgba(35,183,197,0.05),rgba(255,255,255,0.7))]">
        <div className="w-full px-4 py-3 sm:px-6 lg:px-8 2xl:px-12">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              {topActions.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="rounded-full bg-white px-3 py-1.5 shadow-sm ring-1 ring-border transition-colors hover:text-primary"
                >
                  {item.name}
                </a>
              ))}
              <a href="tel:+74959671420" className="rounded-full bg-primary px-3 py-1.5 font-semibold text-primary-foreground shadow-sm">
                +7 (495) 967-14-20
              </a>
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <div className="rounded-full bg-white px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm ring-1 ring-border">
                Москва, Ломоносовский проспект, 2, стр. 1
              </div>
              <button
                type="button"
                onClick={() => setAccessibilityMode((value) => !value)}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-muted-foreground transition-colors hover:text-primary",
                  accessibilityMode && "border-primary bg-primary text-primary-foreground"
                )}
                aria-label="Версия для слабовидящих"
              >
                <Eye className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-muted-foreground transition-colors hover:text-primary"
                aria-label="Поиск"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="grid items-center gap-4 rounded-[30px] border border-white/80 bg-white/92 px-4 py-4 shadow-[0_18px_60px_rgba(16,45,83,0.08)] xl:grid-cols-[1.55fr_1fr] xl:px-6">
            <BrandBlock />

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-[#EFF6FC] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">Контакты</p>
                <a href="tel:+74959671420" className="mt-2 flex items-center gap-2 text-base font-extrabold text-foreground lg:text-lg">
                  <Phone className="h-4 w-4 text-primary" />
                  +7 (495) 967-14-20
                </a>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">Электронная приемная и запись на консультации специалистов.</p>
              </div>

              <div className="rounded-2xl bg-[#F1FAF8] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#168B8C]">Адрес</p>
                <div className="mt-2 flex gap-2 text-sm leading-6 text-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#168B8C]" />
                  <span>119991, Москва, Ломоносовский проспект, 2, стр. 1</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Ближайшие станции: Профсоюзная, Университет</p>
              </div>

              <div className="rounded-2xl bg-primary p-4 text-primary-foreground">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/75">24/7</p>
                <p className="mt-2 text-sm leading-6 text-primary-foreground/84">Круглосуточная госпитализация пациентов с острыми неотложными состояниями.</p>
                <a href="tel:+79263776055" className="mt-3 inline-flex text-base font-extrabold lg:text-lg">
                  +7 (926) 377-60-55
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <nav className="hidden bg-primary lg:block" aria-label="Основная навигация">
        <div className="flex w-full items-stretch justify-between px-4 sm:px-6 lg:px-8 2xl:px-12">
          <div className="flex flex-wrap items-stretch">
            {navigation.map((item) => (
              <div key={item.name} className="group relative">
                <a
                  href={item.href}
                  className="flex h-full items-center gap-1 px-4 py-4 text-sm font-semibold text-primary-foreground/92 transition-colors hover:bg-white/10 hover:text-white xl:px-5"
                >
                  <span>{item.name}</span>
                  {item.children ? <ChevronDown className="h-4 w-4 text-primary-foreground/70 transition-transform group-hover:rotate-180" /> : null}
                </a>

                {item.children ? (
                  <div className="invisible absolute left-0 top-full z-50 min-w-[360px] translate-y-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="mt-1 rounded-3xl border border-border bg-white p-3 shadow-[0_24px_70px_rgba(16,45,83,0.18)]">
                      <div className="grid gap-1">
                        {item.children.map((child) => (
                          <a
                            key={child.name}
                            href={child.href}
                            className="rounded-2xl px-4 py-3 text-sm text-foreground transition-colors hover:bg-primary/5 hover:text-primary"
                          >
                            {child.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 py-2">
            <Button asChild className="h-11 rounded-full bg-white px-5 text-primary hover:bg-white/90">
              <a href="https://nczd.ru/form/appointment/">
                <CalendarPlus className="h-4 w-4" />
                Записаться на прием
              </a>
            </Button>
          </div>
        </div>
      </nav>

      <div className="flex w-full items-center justify-between px-4 py-4 lg:hidden sm:px-6">
        <div className="max-w-[82%]">
          <BrandBlock />
        </div>
        <button
          type="button"
          onClick={() => setMobileMenuOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-white text-foreground shadow-sm"
          aria-label="Открыть меню"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={cn("lg:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="border-t border-border bg-background px-4 pb-6 pt-2 sm:px-6">
          <div className="mb-4 grid gap-3">
            <a href="tel:+74959671420" className="rounded-2xl border border-border bg-white px-4 py-3 text-sm font-semibold shadow-sm">
              +7 (495) 967-14-20
            </a>
            <Button asChild className="h-12 rounded-2xl bg-primary">
              <a href="https://nczd.ru/form/appointment/">Записаться на прием</a>
            </Button>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border bg-white">
            {navigation.map((item) => (
              <div key={item.name} className="border-b border-border last:border-b-0">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setExpandedItem((value) => (value === item.name ? null : item.name))}
                      className="flex w-full items-center justify-between px-4 py-4 text-left text-sm font-semibold text-foreground"
                    >
                      {item.name}
                      <ChevronDown className={cn("h-4 w-4 transition-transform", expandedItem === item.name && "rotate-180")} />
                    </button>
                    <div className={cn("grid overflow-hidden bg-muted/30 transition-all", expandedItem === item.name ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                      <div className="overflow-hidden">
                        <div className="px-2 pb-3">
                          {item.children.map((child) => (
                            <a
                              key={child.name}
                              href={child.href}
                              className="block rounded-2xl px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-white hover:text-primary"
                            >
                              {child.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <a href={item.href} className="block px-4 py-4 text-sm font-semibold text-foreground">
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
