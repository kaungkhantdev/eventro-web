import { HeroSection } from "@/modules/event/components/hero-section";
import { EventsSection } from "@/modules/event/components/events-section";
import { CategoriesSection } from "@/modules/event/components/categories-section";
import { HowItWorksSection } from "@/modules/event/components/how-it-works-section";
import { CtaSection } from "@/modules/event/components/cta-section";
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
