import { ArrowRight, Building2, CalendarPlus, HeartHandshake, Phone, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  { title: "70 подразделений", text: "Комплексная помощь детям в одном центре." },
  { title: "294 врача", text: "Сильная команда экспертов и научных сотрудников." },
  { title: "Круглосуточная помощь", text: "Маршрутизация неотложных пациентов 24/7." },
]

const shortcuts = [
  "Консультативно-диагностический центр",
  "Отделение стационарозамещающих технологий",
  "Телеконсилиумы и дистанционные консультации",
  "Профессорский прием и программы диагностики",
]

export function HeroSection() {
  return (
    <section className="overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_34%),linear-gradient(180deg,#f8fcff_0%,#ffffff_56%,#f7fafc_100%)]">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-16 xl:px-10 xl:py-20">
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-primary/8 px-4 py-2 text-sm font-semibold text-primary">
            <ShieldCheck className="h-4 w-4" />
            ФГАУ «НМИЦ здоровья детей» Минздрава России
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl xl:text-6xl">
            Современный детский медицинский центр с полной витриной услуг, направлений и экспертного контента
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            Национальный медицинский исследовательский центр здоровья детей объединяет многопрофильную высокотехнологичную медицинскую помощь, профилактику, реабилитацию, научную деятельность и образовательные программы. Главная страница собрана как удобная стартовая точка для пациентов, родителей и специалистов.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-full px-6">
              <a href="https://nczd.ru/form/appointment/">
                <CalendarPlus className="h-4 w-4" />
                Заявка на прием
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 rounded-full px-6">
              <a href="https://nczd.ru/form/elektronnaya-priemnaya/">
                Электронная приемная
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {shortcuts.map((item) => (
              <div key={item} className="rounded-2xl border border-border bg-white/90 px-4 py-4 shadow-sm">
                <p className="text-sm font-semibold text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-10 top-8 hidden h-32 w-32 rounded-full bg-sky-100 blur-2xl lg:block" />
          <div className="absolute bottom-0 right-0 hidden h-36 w-36 rounded-full bg-emerald-100 blur-2xl lg:block" />

          <div className="relative rounded-[32px] border border-border/70 bg-white p-5 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-primary p-6 text-primary-foreground sm:col-span-2">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/70">Неотложная помощь</p>
                    <h2 className="mt-3 text-2xl font-bold">Круглосуточная госпитализация</h2>
                    <p className="mt-3 max-w-md text-sm leading-6 text-primary-foreground/85">
                      Пациенты с острыми неотложными состояниями направляются в отделение диагностики и восстановительного лечения.
                    </p>
                  </div>
                  <HeartHandshake className="mt-1 h-10 w-10 shrink-0 text-primary-foreground/70" />
                </div>
                <a href="tel:+79263776055" className="mt-5 inline-flex items-center gap-2 text-lg font-extrabold">
                  <Phone className="h-4 w-4" />
                  +7 (926) 377-60-55
                </a>
              </div>

              {highlights.map((item) => (
                <div key={item.title} className="rounded-3xl border border-border bg-slate-50/80 p-5">
                  <p className="text-2xl font-extrabold text-foreground">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
                </div>
              ))}

              <div className="rounded-3xl border border-dashed border-primary/25 bg-primary/5 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Быстрые маршруты по главной</p>
                    <p className="text-sm text-muted-foreground">Акции, отделения, новости, советы родителям и научные материалы.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
