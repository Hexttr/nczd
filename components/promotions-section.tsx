import Image from "next/image"
import { ArrowRight, Clock3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { promotions } from "@/lib/site-content"

export function PromotionsSection() {
  return (
    <section className="bg-background py-18 lg:py-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12">
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

          <Button asChild variant="outline" className="rounded-lg">
            <a href="https://nczd.ru/offers/">
              Все предложения
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {promotions.map((promo, index) => (
            <article
              key={`${promo.title}-${promo.price}-${index}`}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)] shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={promo.image}
                  alt={promo.title}
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e4e7e]/90 via-[#0e4e7e]/35 to-transparent" />
                <div className="absolute left-5 top-5 flex items-center gap-2">
                  <span className="rounded-lg bg-white/92 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Акция
                  </span>
                  <span className="rounded-lg bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {promo.category}
                  </span>
                </div>
                <div className="absolute inset-x-5 bottom-5 text-white">
                  <p className="text-sm font-semibold text-white/78">{promo.audience || "Комплексная программа"}</p>
                  <h3 className="mt-1 text-3xl font-extrabold">{promo.title}</h3>
                </div>
              </div>

              <div className="flex h-full flex-col p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">{promo.subtitle}</p>
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
                  <Button asChild className="w-full rounded-lg">
                    <a href="https://nczd.ru/form/appointment/">Записаться</a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
