import { HeroSection } from "@/features/event/components/hero-section";
import { EventsSection } from "@/features/event/components/events-section";
import { CategoriesSection } from "@/features/event/components/categories-section";
import { HowItWorksSection } from "@/features/event/components/how-it-works-section";
import { CtaSection } from "@/features/event/components/cta-section";
import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";


export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation /> 

      {/* Main Content */}
      <main className="">
        {/* hero */}
        <HeroSection />

        {/* events */}
        <EventsSection />

        {/* categories */}
        <CategoriesSection />

        {/* how eventro work  */}
        <HowItWorksSection />

        {/* CTA Section */}
        <CtaSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
