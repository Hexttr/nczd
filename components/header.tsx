"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { CalendarPlus, ChevronDown, Eye, Menu, Search, UserCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { navigation, topActions } from "@/lib/site-content"

function MobileBrandBlock() {
  return (
    <Link href="/" className="flex min-w-0 items-center gap-2">
      <Image
        src="/images/nczd-logo-blue.png"
        alt="Логотип НЦЗД"
        width={44}
        height={44}
        className="h-10 w-auto shrink-0 object-contain sm:h-11"
        priority
      />
      <div className="min-w-0">
        <p className="text-[11px] font-extrabold uppercase leading-tight tracking-wide text-foreground sm:text-xs">
          Национальный медицинский исследовательский центр здоровья детей
        </p>
        <p className="mt-0.5 truncate text-[10px] text-muted-foreground">ФГАУ Минздрава России</p>
      </div>
    </Link>
  )
}

function BrandBlock() {
  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-4">
      <Link href="/" className="flex items-center gap-3 lg:gap-4">
        <Image
          src="/images/nczd-logo-blue.png"
          alt="Логотип НЦЗД"
          width={64}
          height={64}
          className="h-12 w-auto shrink-0 object-contain sm:h-14 lg:h-16"
          priority
        />
        <div>
          <p className="text-sm font-extrabold uppercase leading-tight tracking-wide text-foreground sm:text-base lg:text-lg">
            Национальный медицинский исследовательский центр здоровья детей
          </p>
          <p className="mt-0.5 max-w-[720px] text-xs leading-relaxed text-muted-foreground sm:text-sm">
            ФГАУ Минздрава России
          </p>
        </div>
      </Link>
      <div className="flex items-center gap-2 sm:gap-3">
        <Button asChild size="sm" className="h-9 rounded-lg px-4 text-sm sm:h-10 sm:px-5">
          <a href="https://nczd.ru/form/appointment/">
            <CalendarPlus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Записаться на прием
          </a>
        </Button>
        <Button asChild variant="outline" size="sm" className="h-9 rounded-lg border-primary/25 px-4 text-sm sm:h-10 sm:px-5">
          <a href="/cabinet">
            <UserCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Личный кабинет
          </a>
        </Button>
      </div>
    </div>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const [accessibilityMode, setAccessibilityMode] = useState(false)

  return (
    <header className={cn("sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur", accessibilityMode && "text-[1.05rem]")}>
      <div className="hidden border-b border-border/60 bg-[linear-gradient(90deg,rgba(26,100,166,0.08),rgba(35,183,197,0.05),rgba(255,255,255,0.7))] lg:block">
        <div className="w-full px-4 py-3 sm:px-6 lg:px-8 2xl:px-12">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              {topActions.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="rounded-lg bg-primary px-3 py-1.5 font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                >
                  {item.name}
                </a>
              ))}
              <a href="tel:+74959671420" className="rounded-lg bg-primary px-3 py-1.5 font-semibold text-primary-foreground shadow-sm">
                +7 (495) 967-14-20
              </a>
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <div className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm ring-1 ring-border">
                Москва, Ломоносовский проспект, 2, стр. 1
              </div>
              <button
                type="button"
                onClick={() => setAccessibilityMode((value) => !value)}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white text-muted-foreground transition-colors hover:text-primary",
                  accessibilityMode && "border-primary bg-primary text-primary-foreground"
                )}
                aria-label="Версия для слабовидящих"
              >
                <Eye className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white text-muted-foreground transition-colors hover:text-primary"
                aria-label="Поиск"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center py-4">
            <BrandBlock />
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
                  className="flex h-full items-center gap-1 px-4 py-4 text-base font-semibold text-primary-foreground/92 transition-colors hover:bg-white/10 hover:text-white xl:px-5"
                >
                  <span>{item.name}</span>
                  {item.children ? <ChevronDown className="h-4 w-4 text-primary-foreground/70 transition-transform group-hover:rotate-180" /> : null}
                </a>

                {item.children ? (
                  <div className="invisible absolute left-0 top-full z-50 min-w-[360px] translate-y-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="mt-1 rounded-xl border border-border bg-white p-3 shadow-[0_24px_70px_rgba(16,45,83,0.18)]">
                      <div className="grid gap-1">
                        {item.children.map((child) => (
                          <a
                            key={child.name}
                            href={child.href}
                            className="rounded-lg px-4 py-3 text-sm text-foreground transition-colors hover:bg-primary/5 hover:text-primary"
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

        </div>
      </nav>

      <div className="flex w-full items-center justify-between gap-3 border-b border-border/60 bg-background px-4 py-3 lg:hidden sm:px-6">
        <div className="min-w-0 flex-1">
          <MobileBrandBlock />
        </div>
        <button
          type="button"
          onClick={() => setMobileMenuOpen((value) => !value)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-white text-foreground shadow-sm"
          aria-label="Открыть меню"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={cn("lg:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="border-t border-border bg-background px-4 pb-4 pt-3 sm:px-6">
          <div className="mb-3 grid gap-2">
            <a href="tel:+74959671420" className="rounded-lg border border-border bg-white px-3 py-2.5 text-sm font-semibold shadow-sm">
              +7 (495) 967-14-20
            </a>
            <Button asChild className="h-10 rounded-lg bg-primary">
              <a href="https://nczd.ru/form/appointment/">Записаться на прием</a>
            </Button>
            <Button asChild variant="outline" className="h-10 rounded-lg">
              <a href="/cabinet">Личный кабинет</a>
            </Button>
          </div>

          <div className="overflow-hidden rounded-xl border border-border bg-white">
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
                              className="block rounded-lg px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-white hover:text-primary"
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
