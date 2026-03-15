export type MenuItem = {
  name: string
  href: string
  children?: { name: string; href: string }[]
}

export const topActions = [
  { name: "Заявка на прием", href: "https://nczd.ru/form/appointment/" },
  { name: "Электронная приемная", href: "https://nczd.ru/form/elektronnaya-priemnaya/" },
]

export const navigation: MenuItem[] = [
  { name: "О центре", href: "https://nczd.ru/about/" },
  { name: "Отделения", href: "https://nczd.ru/department/" },
  {
    name: "Специалисты",
    href: "https://nczd.ru/specialists/",
    children: [
      { name: "Все специалисты", href: "https://nczd.ru/specialists/" },
      { name: "Специалисты КДЦ", href: "https://nczd.ru/specialists/?spec_type_kdc" },
      { name: "Научные сотрудники", href: "https://nczd.ru/specialists/?spec_type_science" },
      { name: "Дирекция", href: "https://nczd.ru/specialists/?spec_type_direkcia" },
    ],
  },
  {
    name: "Пациентам",
    href: "https://nczd.ru/patients/",
    children: [
      { name: "Госпитализация", href: "https://nczd.ru/patients/hospitalization/" },
      { name: "Виды медицинской помощи", href: "https://nczd.ru/patients/medical-care/" },
      { name: "Амбулаторная помощь", href: "https://nczd.ru/patients/outpatient-care/" },
      { name: "Порядок, объемы и условия оказания медпомощи", href: "https://nczd.ru/patients/medical-care-regulations/" },
      { name: "Доступность и качество медицинской помощи", href: "https://nczd.ru/patients/medical-care-quality/" },
      { name: "Программа государственных гарантий", href: "https://nczd.ru/patients/state-guarantees/" },
      { name: "Права и обязанности граждан в сфере охраны здоровья", href: "https://nczd.ru/patients/health-rights-duties/" },
      { name: "Телеконсилиум", href: "https://nczd.ru/info/telekonsilium/" },
      { name: "Возврат налогового вычета за медицинские услуги", href: "https://nczd.ru/patients/vozvrat-nalogovogo-vycheta-za-medicinskie-uslugi/" },
    ],
  },
  { name: "Услуги и Цены", href: "https://nczd.ru/offers/" },
  {
    name: "Наука",
    href: "https://nczd.ru/science/",
    children: [
      { name: "Рекомендации по подготовке и оформлению научных статей", href: "https://nczd.ru/science/recomendations/" },
      { name: "Конкурс на замещение должностей научных работников", href: "https://nczd.ru/science/competition/" },
      { name: "Ученый совет", href: "https://nczd.ru/science/academic-council/" },
      { name: "Диссертационный совет", href: "https://nczd.ru/science/discom/" },
    ],
  },
  {
    name: "Образование",
    href: "https://nczd.ru/sveden/common/",
    children: [
      { name: "Сведения об образовательной организации", href: "https://nczd.ru/sveden/common/" },
      { name: "Абитуриенту", href: "https://nczd.ru/education/priem-com/" },
      { name: "Ординатура", href: "https://nczd.ru/education/03-ordinatura/" },
      { name: "Аспирантура", href: "https://nczd.ru/education/04-aspirantura/" },
      { name: "Соискателю", href: "https://nczd.ru/education/jeksternat-sdacha-kandidatskih-jekzamenov/" },
      { name: "Дополнительное профессиональное образование", href: "https://nczd.ru/education/dop-prof/" },
      { name: "Аккредитация специалистов", href: "https://nczd.ru/education/akkreditacija-specialistov/" },
      { name: "Электронная образовательная среда", href: "https://nczd.ru/education/eos/" },
    ],
  },
  {
    name: "Инфо",
    href: "https://nczd.ru/info/",
    children: [
      { name: "Советы родителям", href: "https://nczd.ru/info/advices/" },
      { name: "Предварительная запись на прием", href: "https://nczd.ru/form/appointment/" },
      { name: "Консультативный прием", href: "https://nczd.ru/info/konsultativnyj-priem/" },
      { name: "Детская медицинская сестра", href: "https://nczd.ru/info/detskaja-medicinskaja-sestra/" },
      { name: "Работа со СМИ", href: "https://nczd.ru/info/smi/" },
      { name: "Телеконсилиум", href: "https://nczd.ru/info/telekonsilium/" },
      { name: "Еще >>>", href: "https://nczd.ru/info/" },
    ],
  },
  { name: "Контакты", href: "https://nczd.ru/info/" },
]

export const promotions = [
  {
    title: "Баланс здоровья",
    audience: "Дети",
    category: "Эндокринология",
    price: "3 500 руб.",
    oldPrice: "5 300 руб.",
    subtitle: "Комплексная диагностика и профилактика эндокринологических заболеваний",
    description: "Первичный прием врача-детского эндокринолога + УЗИ щитовидной железы",
    period: "С 16 февраля по 31 марта 2026",
    image: "/images/promo-endocrine.webp",
  },
  {
    title: "Баланс здоровья",
    audience: "Дети",
    category: "Эндокринология",
    price: "4 500 руб.",
    oldPrice: "6 600 руб.",
    subtitle: "Комплексная диагностика и профилактика эндокринологических заболеваний",
    description: "Первичный прием врача-детского эндокринолога, к.м.н. + УЗИ щитовидной железы",
    period: "С 16 февраля по 31 марта 2026",
    image: "/images/promo-endocrine.webp",
  },
  {
    title: "Баланс здоровья",
    audience: "Дети",
    category: "Кардиология",
    price: "7 000 руб.",
    oldPrice: "9 000 руб.",
    subtitle: "Комплексная диагностика и профилактика кардиологических заболеваний",
    description: "Первичный прием врача-кардиолога + УЗИ сердца + ЭКГ с расшифровкой",
    period: "С 16 февраля по 30 марта 2026",
    image: "/images/promo-cardiology.webp",
  },
  {
    title: "Здоровое сердце",
    audience: "Дети",
    category: "Кардиология",
    price: "5 000 руб.",
    oldPrice: "6 800 руб.",
    subtitle: "Комплексная диагностика и профилактика кардиологических заболеваний",
    description: "Первичный прием врача-кардиолога, к.м.н. + регистрация ЭКГ с расшифровкой",
    period: "С 16 февраля по 31 марта 2026",
    image: "/images/promo-cardiology.webp",
  },
  {
    title: "Здоровый желудок",
    audience: "",
    category: "Гастроэнтерология",
    price: "6 000 руб.",
    oldPrice: "8 100 руб.",
    subtitle: "Гастроэнтерологические заболевания: комплексная диагностика и профилактика",
    description: "Первичный прием врача-гастроэнтеролога, к.м.н. + УЗИ органов брюшной полости",
    period: "С 16 февраля по 31 марта 2026",
    image: "/images/promo-gastro.webp",
  },
  {
    title: "Здоровый желудок",
    audience: "",
    category: "Гастроэнтерология",
    price: "6 000 руб.",
    oldPrice: "8 100 руб.",
    subtitle: "Гастроэнтерологические заболевания: комплексная диагностика и профилактика",
    description: "Первичный прием (осмотр, консультация) врача-гастроэнтеролога, к.м.н. + УЗИ органов брюшной полости",
    period: "С 16 февраля по 31 марта 2026",
    image: "/images/promo-gastro.webp",
  },
  {
    title: "Здоровый желудок",
    audience: "",
    category: "Гастроэнтерология",
    price: "6 000 руб.",
    oldPrice: "8 100 руб.",
    subtitle: "Гастроэнтерологические заболевания: комплексная диагностика и профилактика",
    description: "Первичный прием врача-гастроэнтеролога, к.м.н. + Ультразвуковое исследование органов брюшной полости",
    period: "С 16 февраля по 31 марта 2026",
    image: "/images/promo-gastro.webp",
  },
]

export const serviceHighlights = [
  {
    title: "Консультативно-диагностический центр",
    description:
      "155 специалистов по более чем 41 педиатрической специальности, УЗИ, рентген, МРТ, КТ, лабораторная и функциональная диагностика.",
    points: [
      "14 докторов медицинских наук",
      "59 кандидатов медицинских наук",
      "Современное оборудование экспертного класса",
    ],
    href: "https://nczd.ru/department/consult/",
  },
  {
    title: "Отделение стационарозамещающих технологий",
    description:
      "Комплексное обследование в короткие сроки, дневной стационар, лечение, реабилитация и диспансеризация детей с различной патологией.",
    points: [
      "Аллерген-специфическая иммунотерапия",
      "Диагностика и лечение в условиях дневного стационара",
      "Короткие маршруты обследования",
    ],
    href: "https://nczd.ru/department/rehabilitation/oszt/",
  },
  {
    title: "Дистанционная консультация со специалистами",
    description:
      "Онлайн-консультации с психологом, логопедом и дефектологом для семей из любых регионов.",
    points: ["Психолог", "Логопед", "Дефектолог"],
    href: "https://nczd.ru/info/zajavka-na-distancionnuju-konsultaciju-psihologa-logopeda-defektologa/",
  },
  {
    title: "Медицинская помощь иностранным гражданам",
    description:
      "Современные методы диагностики и лечения, комфортабельные условия пребывания и доступные цены.",
    points: [
      "Высокотехнологичное оборудование",
      "Комфортабельные условия пребывания",
      "Специалисты высокой квалификации",
    ],
    href: "https://nczd.ru/about/medicinskaja-pomoshh-inostrannym-grazhdanam/",
  },
  {
    title: "Циркумцизио (обрезание крайней плоти)",
    description:
      "Щадящий бескровный метод в условиях отделения амбулаторной хирургии, в том числе по религиозным соображениям.",
    points: [
      "Опытный детский уролог-андролог и хирург",
      "Телефон для записи: +7 (495) 967-14-20",
      "Telegram: @SunnatNCZDBot",
    ],
    href: "https://nczd.ru/",
  },
  {
    title: "Профессорский прием",
    description:
      "Комплексная диагностика, постановка диагноза и лечение у ведущих специалистов центра.",
    points: ["Доктора и кандидаты наук", "Точная маршрутизация", "Эффективное лечение"],
    href: "https://nczd.ru/offers/profconsult/",
  },
]

export const quickLinks = [
  { name: "Диагностика для всех", href: "https://nczd.ru/department/diagnostic/" },
  { name: "Годовые программы", href: "https://nczd.ru/department/consult/kompleksnye-meditsinskie-programmy/" },
  { name: "Дневной стационар", href: "https://nczd.ru/department/day-clinic/" },
  { name: "Заявка на прием", href: "https://nczd.ru/form/appointment/" },
]

export const stats = [
  { value: "70", label: "Подразделений" },
  { value: "22 000", label: "Пациентов" },
  { value: "5 572", label: "Операции" },
  { value: "65 000", label: "Консультаций амбулаторно" },
  { value: "294", label: "Врача" },
  { value: "64", label: "Доктора наук" },
  { value: "148", label: "Кандидатов наук" },
  { value: "6 595", label: "Телеконсультаций" },
]

export const announcements = [
  {
    date: "12 марта 2026",
    category: "Анонс",
    title: "Конференция образовательного проекта «Школа здоровья детей», приуроченная ко Всемирному дню иммунитета — 12 марта 2026 года",
    href: "https://nczd.ru/immunitet-26/",
    image: "/images/placeholders/news-conference.svg",
  },
  {
    date: "14 марта 2026",
    category: "Анонс",
    title: "14 марта 2026 года состоится конференция «Маммология от А до Я. Работа над ошибками»",
    href: "https://nczd.ru/2026-03-14/",
    image: "/images/placeholders/news-conference.svg",
  },
  {
    date: "28 июля 2023",
    category: "Публикация",
    title: "Справочник «Педиатру на каждый день-2022. Лихорадки» под редакцией В.К. Таточенко и М.Д. Бакрадзе",
    href: "https://nczd.ru/2023-07-28/",
    image: "/images/placeholders/news-conference.svg",
  },
  {
    date: "2023",
    category: "Издание",
    title: "Сборник очерков «История детской хирургии» под редакцией А.П. Фисенко",
    href: "https://nczd.ru/sbornik-ocherkov-istorija-detskoj-hirurgii/",
    image: "/images/placeholders/news-conference.svg",
  },
]

export const newsItems = [
  {
    date: "27 февраля 2026",
    category: "Новости",
    title: "27 февраля 2026 года в Музее Москвы состоялось открытие новой экспозиции проекта «Москва без окраин»",
    excerpt: "Свежая публикация о событиях центра и внешних проектах с участием НЦЗД.",
    href: "https://nczd.ru/27-fevralja-2026-god-v-muzee-moskvy-sostojalos-otkrytie-novoj-jekspozicii-proekta-moskva-bez-okrain/",
    image: "/images/placeholders/news-conference.svg",
  },
  {
    date: "26 февраля 2026",
    category: "Конференция",
    title: "26 февраля состоялась научно-практическая конференция Школы здоровья детей, посвященная диагностике и лечению редких заболеваний у детей",
    excerpt: "Научно-практическая повестка и разбор редких заболеваний у детей.",
    href: "https://nczd.ru/2026-02-26/",
    image: "/images/placeholders/news-conference.svg",
  },
  {
    date: "23 февраля 2026",
    category: "Событие",
    title: "23 февраля — День защитника Отечества!",
    excerpt: "Новостная публикация центра с поздравлением и медиаматериалами.",
    href: "https://nczd.ru/2026-02-23/",
    image: "/images/placeholders/news-conference.svg",
  },
  {
    date: "12 февраля 2026",
    category: "Практикум",
    title: "12 февраля 2026 года состоялся «Капрановский практикум. Интерактивный разбор клинических случаев»",
    excerpt: "Образовательный проект и клинический разбор для профессиональной аудитории.",
    href: "https://nczd.ru/2026-02-16/",
    image: "/images/placeholders/news-conference.svg",
  },
]

export const adviceItems = [
  "Правильное питание во время беременности — это один из важных факторов для комфорта мамы и рождения здорового ребенка.",
  "Вакцинация является важнейшей мерой профилактики инфекционных заболеваний у детей с хроническими заболеваниями сердечно-сосудистой системы.",
  "Школа ЗОЖ. Роль витамина D.",
  "Школа ЗОЖ. Что важно знать о вегетарианстве?",
  "Школа ЗОЖ. Правильное питание — основа здоровья растущего организма.",
  "Болезнь Гиршпрунга.",
  "Послеоперационные проблемы и реабилитация после операции.",
  "Что делать, если подросток начал курить?",
]

export const aboutCenter = {
  title: "Национальный медицинский исследовательский центр",
  paragraphs: [
    "Национальный медицинский исследовательский центр здоровья детей Министерства здравоохранения Российской Федерации является федеральным учреждением нового типа, реализующим Стратегию развития здравоохранения, совершенствующим медицинскую помощь детям и осуществляющим персонифицированную диагностику, лечение, профилактику и реабилитацию больных из всех регионов страны.",
    "Уникальность ведущего педиатрического центра страны определяется гармоничным соединением фундаментальных и прикладных исследований с оказанием многопрофильной высокотехнологичной медицинской помощи детям и подготовкой научных и медицинских кадров.",
    "Центр успешно реализует комплекс обучающих тренингов, внешних аудитов и поддерживающего мониторинга педиатрических учреждений, что существенно повышает эффективность детского здравоохранения.",
  ],
}

export const clinicalCases = [
  {
    title: "Хирургическое лечение ребенка с редким орфанным диагнозом — синдромом Пейтца-Егерса",
    description: "Клинический случай от врачей отделения эндоскопических исследований и отделения общей и плановой хирургии.",
    href: "https://nczd.ru/hirurgicheskoe-lechenie-rebjonka-s-redkim-orfannym-diagnozom-sindromom-pejtca-egersa/",
  },
  {
    title: "Эндоскопические проявления редкого синдрома Лайелла",
    description: "Клинический случай от коллектива врачей отделения эндоскопических исследований.",
    href: "https://nczd.ru/jendoskopicheskie-projavlenija-redkogo-sindroma-lajella/",
  },
  {
    title: "Удаление полипов тонкой кишки с применением высокотехнологичного малоинвазивного метода лечения",
    description: "Клинический пример высокотехнологичной эндоскопической помощи детям.",
    href: "https://nczd.ru/udalenie-polipov-tonkoj-kishki-s-primeneniem-vysokotehnologichnogo-maloinvazivnogo-metoda-lechenija/",
  },
  {
    title: "Портальная гипертензия",
    description: "Клинический случай у ребенка 5 лет с разбором жалоб, диагностики и лечения.",
    href: "https://nczd.ru/portalnaja-gipertenzija/",
  },
]

export const usefulVideos = [
  "Варикоцеле у подростков",
  "Кардиологическое отделение НМИЦ здоровья детей Минздрава России: забота о самом важном",
  "Профилактика и диагностика детской онкологии",
  "Потовая проба: «золотой стандарт» диагностики муковисцидоза",
]

export const surgeryNews = [
  "12 вебинаров от ведущих специалистов России и Европы — II ESPES MASTER IN PEDIATRIC MIS",
  "10-12 ноября 2022 года состоится 8-й Форум детских хирургов России",
  "Подача тезисов на 1-е Совместное собрание IPEG и ESPES открыто!",
  "9 сентября 2022 г. состоится совместная ESPES-WOFAPS онлайн-лекция по исследованиям и технологиям",
]

export const gratitudeItems = [
  { title: "Благодарность от 2025-06-05", image: "/images/placeholders/gratitude-placeholder.svg" },
  { title: "Благодарность от 2025-06-01", image: "/images/placeholders/gratitude-placeholder.svg" },
  { title: "Сертификат участника международной акции «Сад памяти»", image: "/images/placeholders/gratitude-placeholder.svg" },
  { title: "Благодарность от 2024-09-20", image: "/images/placeholders/gratitude-placeholder.svg" },
  { title: "Благодарность от 2024-09-05", image: "/images/placeholders/gratitude-placeholder.svg" },
  { title: "Благодарность от 2024-07-10", image: "/images/placeholders/gratitude-placeholder.svg" },
  { title: "Благодарность от 2024-06-25", image: "/images/placeholders/gratitude-placeholder.svg" },
  { title: "Благодарность от 2024-06-18", image: "/images/placeholders/gratitude-placeholder.svg" },
]

export const qualityLinks = [
  {
    title: "Независимая оценка качества условий оказания услуг медицинскими организациями",
    description: "на сайте Минздрава России",
    href: "https://nczd.ru/",
  },
  {
    title: "Противодействие коррупции",
    description: "на нашем сайте",
    href: "https://nczd.ru/",
  },
  {
    title: "Обратная связь для обращений о фактах коррупции",
    description: "на сайте Минздрава России",
    href: "https://nczd.ru/",
  },
  {
    title: "Документы и отчеты",
    description: "медицинской организации",
    href: "https://nczd.ru/info/docs/",
  },
  {
    title: "СМИ о нас",
    description: "на информационных сайтах",
    href: "https://nczd.ru/category/smi/",
  },
  {
    title: "Электронная приемная",
    description: "на нашем сайте",
    href: "https://nczd.ru/info/elektronnaya-priemnaya/",
  },
]

export const footerGroups = [
  {
    title: "Инфо",
    links: [
      { name: "Подготовка к исследованиям", href: "https://nczd.ru/info/" },
      { name: "Правила госпитализации", href: "https://nczd.ru/patients/hospitalization/" },
      { name: "Консультативный прием", href: "https://nczd.ru/info/konsultativnyj-priem/" },
      { name: "Медицинская помощь", href: "https://nczd.ru/patients/medical-care/" },
    ],
  },
  {
    title: "О нас",
    links: [
      { name: "О Центре", href: "https://nczd.ru/about/" },
      { name: "Работа со СМИ", href: "https://nczd.ru/info/smi/" },
      { name: "Документы и отчеты", href: "https://nczd.ru/info/docs/" },
      { name: "Благодарности", href: "https://nczd.ru/" },
      { name: "Вакансии", href: "https://nczd.ru/about/" },
    ],
  },
  {
    title: "Прием",
    links: [
      { name: "Запись на прием", href: "https://nczd.ru/form/appointment/" },
      { name: "Электронная приемная", href: "https://nczd.ru/form/elektronnaya-priemnaya/" },
      { name: "Пациентам", href: "https://nczd.ru/patients/" },
      { name: "Услуги и цены", href: "https://nczd.ru/offers/" },
      { name: "Специалисты", href: "https://nczd.ru/specialists/" },
    ],
  },
]
