import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { QuickLinksBlock } from "@/components/quick-links-block"
import { ServicesSection } from "@/components/services-section"
import { PromotionsSection } from "@/components/promotions-section"
import { StatsSection } from "@/components/stats-section"
import { AboutSection } from "@/components/about-section"
import { NewsSection } from "@/components/news-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <div className="py-6 sm:py-8">
          <QuickLinksBlock />
        </div>
        <PromotionsSection />
        <ServicesSection />
        <StatsSection />
        <AboutSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  )
}
