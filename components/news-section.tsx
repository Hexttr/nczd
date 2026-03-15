import Image from "next/image"
import { ArrowRight, BellRing, Newspaper, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { adviceItems, announcements, newsItems } from "@/lib/site-content"

export function NewsSection() {
  return (
    <section id="news" className="bg-background py-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Контент главной</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Анонсы, новости и советы родителям в одной визуально связанной зоне
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Здесь главная становится по-настоящему содержательной: пользователь сразу видит события центра, свежие публикации и полезные материалы для родителей.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1fr_1fr_0.9fr]">
          <div className="rounded-xl border border-border bg-slate-50/70 p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <BellRing className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Анонсы</p>
                <p className="text-sm text-muted-foreground">Главные события и конференции</p>
              </div>
            </div>

            <div className="space-y-4">
              {announcements.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="block overflow-hidden rounded-xl border border-border bg-white transition-colors hover:border-primary hover:text-primary"
                >
                  <div className="relative aspect-[16/9]">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="rounded-lg bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">{item.category}</span>
                      <span className="text-xs font-medium text-muted-foreground">{item.date}</span>
                    </div>
                    <p className="text-sm font-semibold leading-7 text-foreground">{item.title}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <Newspaper className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Новости</p>
                <p className="text-sm text-muted-foreground">Актуальные публикации центра</p>
              </div>
            </div>

            <div className="space-y-4">
              {newsItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="block overflow-hidden rounded-xl border border-border transition-colors hover:border-primary hover:bg-primary/5"
                >
                  <div className="relative aspect-[16/9]">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="rounded-lg bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">{item.category}</span>
                      <span className="text-xs font-medium text-muted-foreground">{item.date}</span>
                    </div>
                    <p className="text-sm font-semibold leading-7 text-foreground">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.excerpt}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-[linear-gradient(180deg,#f9fbff_0%,#ffffff_100%)] p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">Советы родителям</p>
                <p className="text-sm text-muted-foreground">Часто просматриваемые материалы</p>
              </div>
            </div>

            <div className="space-y-3">
              {adviceItems.map((item) => (
                <div key={item} className="rounded-lg border border-border bg-white px-4 py-3">
                  <p className="text-sm leading-7 text-foreground">{item}</p>
                </div>
              ))}
            </div>

            <Button asChild variant="outline" className="mt-6 w-full rounded-lg">
              <a href="https://nczd.ru/info/advices/">
                Все советы
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 rounded-xl border border-border bg-primary p-5 text-primary-foreground md:grid-cols-4">
          {[
            "Часто задаваемые вопросы",
            "Консультации специалистов",
            "Телеконсилиумы бесплатно",
            "Заявка на прием",
          ].map((item) => (
            <div key={item} className="rounded-lg bg-white/10 px-4 py-4 text-sm font-semibold">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
