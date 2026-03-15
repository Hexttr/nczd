import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
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
        <ServicesSection />
        <PromotionsSection />
        <StatsSection />
        <AboutSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  )
}
