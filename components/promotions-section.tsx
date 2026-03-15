import { ArrowRight, Clock3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { promotions } from "@/lib/site-content"

export function PromotionsSection() {
  return (
    <section className="bg-background py-18 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 xl:px-10">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Акции</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Промо-блоки и комплексные предложения с главной страницы
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
              Блок акций вынесен в отдельную красивую ленту, чтобы он был заметным, но не перегружал верхнюю часть страницы.
            </p>
          </div>

          <Button asChild variant="outline" className="rounded-full">
            <a href="https://nczd.ru/offers/">
              Все предложения
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {promotions.map((promo, index) => (
            <article
              key={`${promo.title}-${promo.price}-${index}`}
              className="group flex h-full flex-col rounded-[28px] border border-border bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)] p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Акция
                </span>
                {promo.audience ? (
                  <span className="text-sm font-semibold text-muted-foreground">{promo.audience}</span>
                ) : null}
              </div>

              <h3 className="mt-5 text-2xl font-extrabold text-foreground">{promo.title}</h3>
              <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-sky-700">{promo.subtitle}</p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{promo.description}</p>

              <div className="mt-6 flex items-end gap-3">
                <span className="text-3xl font-extrabold text-foreground">{promo.price}</span>
                <span className="pb-1 text-sm text-muted-foreground line-through">{promo.oldPrice}</span>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Clock3 className="h-4 w-4 text-primary" />
                {promo.period}
              </div>

              <div className="mt-auto pt-6">
                <Button asChild className="w-full rounded-full">
                  <a href="https://nczd.ru/form/appointment/">Записаться</a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
