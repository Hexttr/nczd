import Image from "next/image"
import { ArrowRight, CalendarPlus, HeartHandshake, Phone, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(26,100,166,0.13),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(35,183,197,0.12),transparent_20%),linear-gradient(180deg,#eff7fd_0%,#ffffff_48%,#f7fbff_100%)]">
      <div className="grid w-full gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-16 2xl:px-12 2xl:py-20">
        <div className="flex flex-col justify-center lg:pr-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-primary/15 bg-white/80 px-4 py-2 text-sm font-semibold text-primary shadow-sm">
            <ShieldCheck className="h-4 w-4" />
            ФГАУ «НМИЦ здоровья детей» Минздрава России
          </div>

          <h1 className="mt-6 max-w-5xl text-2xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-3xl xl:text-4xl">
            Современный детский медицинский центр
            <br />
            <span className="text-primary">экспертного уровня</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            Национальный медицинский исследовательский центр здоровья детей объединяет многопрофильную высокотехнологичную медицинскую помощь, профилактику, реабилитацию, научную деятельность и образовательные программы для пациентов, родителей и специалистов.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-13 rounded-lg px-7 text-base shadow-lg shadow-primary/20">
              <a href="https://nczd.ru/form/appointment/">
                <CalendarPlus className="h-4 w-4" />
                Заявка на прием
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-13 rounded-lg border-primary/15 bg-white px-7 text-base">
              <a href="https://nczd.ru/form/elektronnaya-priemnaya/">
                Электронная приемная
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-white/90 p-5 shadow-sm">
              <p className="text-3xl font-extrabold text-foreground">70</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">подразделений и комплексный маршрут пациента</p>
            </div>
            <div className="rounded-xl border border-border bg-white/90 p-5 shadow-sm">
              <p className="text-3xl font-extrabold text-foreground">294</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">врача, включая докторов и кандидатов наук</p>
            </div>
            <div className="rounded-xl border border-border bg-primary p-5 text-primary-foreground shadow-lg shadow-primary/18">
              <p className="text-3xl font-extrabold">24/7</p>
              <p className="mt-2 text-sm leading-6 text-primary-foreground/84">экстренная госпитализация и неотложная помощь</p>
            </div>
          </div>
        </div>

        <div className="relative lg:pl-4">
          <div className="absolute -left-6 top-14 hidden h-32 w-32 rounded-full bg-[#dcedfb] blur-3xl lg:block" />
          <div className="absolute bottom-10 right-2 hidden h-32 w-32 rounded-full bg-[#d8f3f0] blur-3xl lg:block" />

          <div className="relative overflow-hidden rounded-xl border border-white/70 bg-white p-4 shadow-[0_28px_90px_rgba(16,45,83,0.12)] sm:p-5">
            <div className="relative overflow-hidden rounded-lg bg-[#eef6fc]">
              <Image
                src="/images/placeholders/hero-medical.svg"
                alt="Визуальный блок главной страницы НЦЗД"
                width={1600}
                height={1100}
                className="h-auto w-full object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0f4f82] via-[#0f4f82]/92 to-transparent p-6 text-white sm:p-8">
                <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/72">Неотложная помощь</p>
                    <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">Круглосуточная госпитализация</h2>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-white/82 sm:text-base">
                      Пациенты с острыми неотложными состояниями направляются в отделение диагностики и восстановительного лечения.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                    <div className="flex items-start gap-3">
                      <HeartHandshake className="mt-1 h-6 w-6 shrink-0 text-[#7de3e8]" />
                      <div>
                        <p className="text-sm font-semibold text-white">Экстренный контакт</p>
                        <a href="tel:+79263776055" className="mt-2 inline-flex items-center gap-2 text-xl font-extrabold">
                          <Phone className="h-4 w-4" />
                          +7 (926) 377-60-55
                        </a>
                      </div>
                    </div>
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
