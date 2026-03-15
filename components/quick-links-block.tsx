import Link from "next/link"
import { quickLinks } from "@/lib/site-content"

export function QuickLinksBlock() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12">
      <div
        className="flex flex-col overflow-hidden rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] sm:flex-row"
        style={{
          background: "linear-gradient(180deg, #2a7bc8 0%, #1a64a6 100%)",
        }}
      >
        {quickLinks.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex flex-1 items-center justify-center border-b border-white/25 px-4 py-5 text-center font-semibold text-white transition-colors last:border-b-0 hover:bg-white/10 sm:border-b-0 sm:border-r sm:py-6 sm:last:border-r-0"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
