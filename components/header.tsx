"use client"

import { useState } from "react"
import Link from "next/link"
import { CalendarPlus, ChevronDown, Eye, MapPin, Menu, Phone, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { navigation, topActions } from "@/lib/site-content"

function BrandBlock() {
  return (
    <Link href="/" className="flex items-start gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
        <span className="text-lg font-extrabold tracking-wide">НЦ</span>
      </div>
      <div className="space-y-1">
        <p className="text-base font-extrabold leading-tight text-foreground sm:text-lg">
          Национальный медицинский исследовательский центр здоровья детей
        </p>
        <p className="max-w-3xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
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
    <header className={cn("sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur", accessibilityMode && "text-[1.05rem]")}>
      <div className="border-b border-border/60 bg-[linear-gradient(90deg,rgba(12,74,110,0.06),rgba(14,165,233,0.04),rgba(16,185,129,0.04))]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-4 py-3 sm:px-6 xl:px-10">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
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

          <div className="grid gap-4 rounded-[28px] border border-white/80 bg-white/90 px-4 py-4 shadow-[0_10px_40px_rgba(15,23,42,0.06)] lg:grid-cols-[1.25fr_0.9fr] lg:px-6">
            <BrandBlock />

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-2xl bg-sky-50/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Контакты</p>
                <a href="tel:+74959671420" className="mt-2 flex items-center gap-2 text-lg font-bold text-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  +7 (495) 967-14-20
                </a>
                <p className="mt-1 text-sm text-muted-foreground">Электронная приемная и запись на консультации</p>
              </div>

              <div className="rounded-2xl bg-emerald-50/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">Адрес</p>
                <div className="mt-2 flex gap-2 text-sm text-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                  <span>119991, Москва, Ломоносовский проспект, 2, стр. 1</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Ближайшие станции: Профсоюзная, Университет</p>
              </div>

              <div className="rounded-2xl bg-primary p-4 text-primary-foreground sm:col-span-2 xl:col-span-1">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/75">24/7</p>
                <p className="mt-2 text-sm text-primary-foreground/80">Круглосуточная госпитализация пациентов с острыми неотложными состояниями</p>
                <a href="tel:+79263776055" className="mt-3 inline-flex items-center text-base font-bold">
                  +7 (926) 377-60-55
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="hidden border-t border-border/60 bg-background lg:block" aria-label="Основная навигация">
        <div className="mx-auto flex max-w-[1440px] items-stretch justify-between px-4 sm:px-6 xl:px-10">
          <div className="flex flex-wrap items-stretch">
            {navigation.map((item) => (
              <div key={item.name} className="group relative">
                <a
                  href={item.href}
                  className="flex h-full items-center gap-1 px-4 py-4 text-sm font-semibold text-foreground transition-colors hover:text-primary xl:px-5"
                >
                  <span>{item.name}</span>
                  {item.children ? <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-hover:rotate-180" /> : null}
                </a>

                {item.children ? (
                  <div className="invisible absolute left-0 top-full z-50 min-w-[360px] translate-y-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="mt-1 rounded-3xl border border-border bg-white p-3 shadow-[0_20px_60px_rgba(15,23,42,0.14)]">
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
            <Button asChild className="h-11 rounded-full px-5">
              <a href="https://nczd.ru/form/appointment/">
                <CalendarPlus className="h-4 w-4" />
                Записаться на прием
              </a>
            </Button>
          </div>
        </div>
      </nav>

      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-4 lg:hidden sm:px-6">
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
            <Button asChild className="h-12 rounded-2xl">
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
