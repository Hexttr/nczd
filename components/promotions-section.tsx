"use client"

import Image from "next/image"
import { ArrowRight, Clock3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { promotions } from "@/lib/site-content"

export function PromotionsSection() {
  return (
    <section className="bg-background py-12 lg:py-16">
      <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Акции</p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Комплексные предложения и программы
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
              Специальные условия на диагностику и консультации специалистов.
            </p>
          </div>

          <Button asChild variant="outline" size="sm" className="rounded-lg shrink-0">
            <a href="https://nczd.ru/offers/">
              Все предложения
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {promotions.map((promo, index) => (
              <CarouselItem
                key={`${promo.title}-${promo.price}-${index}`}
                className="basis-full pl-4 sm:basis-[85%] md:basis-[calc(50%-0.5rem)] lg:basis-[calc(33.333%-0.67rem)]"
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)] shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
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
                      <span className="rounded-lg bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground">
                        Акция
                      </span>
                      <span className="rounded-lg bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground">
                        {promo.category}
                      </span>
                    </div>
                    <div className="absolute inset-x-5 bottom-5 text-white">
                      <p className="text-sm font-semibold text-white/78">{promo.audience || "Комплексная программа"}</p>
                      <h3 className="mt-1 text-2xl font-extrabold">{promo.title}</h3>
                    </div>
                  </div>

                  <div className="flex flex-col p-5">
                    <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">{promo.subtitle}</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground line-clamp-2">{promo.description}</p>

                    <div className="mt-4 flex items-end gap-3">
                      <span className="text-3xl font-extrabold text-foreground">{promo.price}</span>
                      <span className="pb-1.5 text-base text-muted-foreground line-through">{promo.oldPrice}</span>
                    </div>

                    <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock3 className="h-4 w-4 shrink-0 text-primary" />
                      <span className="truncate">{promo.period}</span>
                    </div>

                    <div className="mt-4">
                      <Button asChild className="rounded-lg px-6 py-2.5 text-base font-semibold uppercase">
                        <a href="https://nczd.ru/form/appointment/">Записаться</a>
                      </Button>
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-2 hidden rounded-lg border-2 bg-white/95 shadow-lg hover:bg-white md:flex" />
          <CarouselNext className="-right-2 hidden rounded-lg border-2 bg-white/95 shadow-lg hover:bg-white md:flex" />
        </Carousel>
      </div>
    </section>
  )
}
