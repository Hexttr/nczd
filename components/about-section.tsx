import Image from "next/image"
import {
  Activity,
  ArrowRight,
  Award,
  Building2,
  CalendarCheck,
  CheckCircle2,
  GraduationCap,
  PlayCircle,
  Stethoscope,
  Users,
  Video,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  aboutCenter,
  clinicalCases,
  gratitudeItems,
  qualityLinks,
  stats,
  surgeryNews,
  usefulVideos,
} from "@/lib/site-content"

const statIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Подразделений: Building2,
  Пациентов: Users,
  Операции: Activity,
  "Консультаций амбулаторно": CalendarCheck,
  Врача: Stethoscope,
  "Доктора наук": GraduationCap,
  "Кандидатов наук": Award,
  Телеконсультаций: Video,
}

const features = [
  "Многопрофильная высокотехнологичная медицинская помощь",
  "Персонифицированная диагностика, лечение, профилактика и реабилитация",
  "Подготовка научных и медицинских кадров",
  "Фундаментальные и прикладные исследования",
]

export function AboutSection() {
  return (
    <section id="about" className="bg-slate-50/65 py-20">
      <div className="w-full space-y-16 px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">О центре</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              {aboutCenter.title}
            </h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-muted-foreground">
              {aboutCenter.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg bg-white px-4 py-4 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <p className="text-sm leading-7 text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => {
              const Icon = statIcons[stat.label] ?? Building2
              return (
                <div
                  key={stat.label}
                  className="flex flex-col rounded-xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="mt-4 text-2xl font-extrabold text-foreground sm:text-3xl">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Клинические примеры</p>
                <h3 className="mt-2 text-2xl font-extrabold text-foreground">Практика центра</h3>
              </div>
              <Button asChild variant="ghost" className="hidden rounded-lg sm:inline-flex">
                <a href="https://nczd.ru/">
                  Все материалы
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="space-y-4">
              {clinicalCases.map((item) => (
                <a key={item.title} href={item.href} className="block rounded-lg border border-border px-4 py-4 transition-colors hover:border-primary hover:bg-primary/5">
                  <p className="text-base font-semibold leading-7 text-foreground">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Полезное видео</p>
              <h3 className="mt-2 text-2xl font-extrabold text-foreground">Видео-контент и новости хирургии</h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-3">
                {usefulVideos.map((item) => (
                  <div key={item} className="rounded-lg border border-border bg-slate-50/70 px-4 py-4">
                    <div className="flex items-start gap-3">
                      <PlayCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-sm leading-7 text-foreground">{item}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {surgeryNews.map((item) => (
                  <div key={item} className="rounded-lg border border-border bg-slate-50/70 px-4 py-4">
                    <p className="text-sm leading-7 text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Благодарности</p>
            <h3 className="mt-2 text-2xl font-extrabold text-foreground">Социальное доказательство</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {gratitudeItems.map((item) => (
                <article key={item.title} className="overflow-hidden rounded-xl border border-border bg-slate-50/70">
                  <div className="relative aspect-[4/3]">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="px-4 py-4">
                    <p className="text-sm font-semibold leading-7 text-foreground">{item.title}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Оценка качества</p>
            <h3 className="mt-2 text-2xl font-extrabold text-foreground">Обязательные сервисные ссылки и документы</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {qualityLinks.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="rounded-lg border border-border bg-slate-50/70 px-4 py-4 transition-colors hover:border-primary hover:bg-primary/5"
                >
                  <p className="text-sm font-semibold leading-7 text-foreground">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
