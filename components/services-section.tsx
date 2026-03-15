import { ArrowRight, Building2, Globe2, GraduationCap, HeartPulse, LaptopMinimal, Scissors } from "lucide-react"
import { Button } from "@/components/ui/button"
import { quickLinks, serviceHighlights } from "@/lib/site-content"

const icons = [HeartPulse, Building2, LaptopMinimal, Globe2, Scissors, GraduationCap]

export function ServicesSection() {
  return (
    <section id="services" className="bg-slate-50/75 py-20 lg:py-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Ключевые направления</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Красиво собранные карточки вместо перегруженной центральной зоны
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            На текущем сайте эти блоки визуально полезны, но местами перегружены. В новой версии они сведены в ровную сетку с понятной иерархией и быстрыми действиями.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceHighlights.map((service, index) => {
            const Icon = icons[index]

            return (
              <article
                key={service.title}
                className="flex h-full flex-col rounded-[30px] border border-border bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-xl font-extrabold leading-snug text-foreground">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{service.description}</p>

                <ul className="mt-5 space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <Button asChild variant="ghost" className="h-auto px-0 text-primary hover:bg-transparent hover:text-primary/80">
                    <a href={service.href}>
                      Подробнее
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-8 grid gap-4 rounded-[32px] border border-border bg-white p-5 shadow-sm lg:grid-cols-4">
          {quickLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="rounded-2xl border border-border bg-slate-50/70 px-5 py-4 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
