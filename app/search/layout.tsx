import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";

export default function SearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col justify-between">
          <Navigation />
            {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
