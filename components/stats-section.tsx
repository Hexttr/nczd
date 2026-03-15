import { stats } from "@/lib/site-content"

export function StatsSection() {
  return (
    <section className="bg-[linear-gradient(135deg,#0f4e79_0%,#12638f_50%,#0c6a8f_100%)] py-20 text-primary-foreground">
      <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">Центр в цифрах</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Отдельный числовой блок как сильный визуальный акцент главной
          </h2>
          <p className="mt-4 text-base leading-7 text-primary-foreground/75">
            Этот блок остается заметным, но теперь лучше дышит за счет одинаковых карточек, ровной сетки и более спокойной типографики.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[28px] border border-white/15 bg-white/8 px-5 py-6 backdrop-blur-sm">
              <p className="text-3xl font-extrabold sm:text-4xl">{stat.value}</p>
              <p className="mt-3 text-sm leading-6 text-primary-foreground/75">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
