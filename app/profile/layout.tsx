import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation login={true} />
      <main className="flex-1 w-full py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold tracking-tight">Profile Settings</h1>
            <p className="text-muted-foreground mt-1">
              Manage your tickets, attended events, and personal preferences.
            </p>
          </div>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
