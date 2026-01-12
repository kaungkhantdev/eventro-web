import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";

export default function EventLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
