import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { footerGroups, topActions } from "@/lib/site-content"

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 xl:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Финальный CTA</p>
              <h3 className="mt-3 text-3xl font-extrabold tracking-tight">
                Главная готова как сильная стартовая страница проекта
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
                Следующим этапом можно по тому же принципу разворачивать внутренние страницы: отделения, специалисты, пациентам, образование и инфо-разделы.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full bg-white text-slate-950 hover:bg-white/90">
                <a href={topActions[0].href}>Записаться онлайн</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/20 bg-transparent text-white hover:bg-white/10">
                <a href="tel:+74959671420">
                  <Phone className="h-4 w-4" />
                  +7 (495) 967-14-20
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 xl:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-lg font-extrabold text-primary-foreground shadow-lg shadow-primary/20">
                НЦ
              </div>
              <div>
                <p className="font-extrabold leading-tight text-white">НМИЦ здоровья детей</p>
                <p className="text-xs text-white/60">Минздрав России</p>
              </div>
            </Link>

            <div className="mt-6 space-y-3 text-sm">
              <a href="tel:+74959671420" className="flex items-center gap-2 text-white/80 transition-colors hover:text-white">
                <Phone className="h-4 w-4 shrink-0" />
                +7 (495) 967-14-20
              </a>
              <a href="mailto:info@nczd.ru" className="flex items-center gap-2 text-white/80 transition-colors hover:text-white">
                <Mail className="h-4 w-4 shrink-0" />
                info@nczd.ru
              </a>
              <div className="flex items-start gap-2 text-white/80">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>Москва, Ломоносовский пр-т, д. 2, стр. 1</span>
              </div>
              <p className="text-white/60">Содержание сайта носит информационный характер и не является публичной офертой.</p>
            </div>
          </div>

          {footerGroups.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/60">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm leading-7 text-white/75 transition-colors hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 py-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 xl:px-10">
          <p>© 2026 ФГАУ «НМИЦ здоровья детей» Минздрава России</p>
          <div className="flex flex-wrap gap-4">
            <Link href="https://nczd.ru/" className="transition-colors hover:text-white">
              Минздрав
            </Link>
            <Link href="https://nczd.ru/" className="transition-colors hover:text-white">
              Вконтакте
            </Link>
            <Link href="https://nczd.ru/" className="transition-colors hover:text-white">
              Одноклассники
            </Link>
            <Link href="https://nczd.ru/" className="transition-colors hover:text-white">
              Телеграм
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
