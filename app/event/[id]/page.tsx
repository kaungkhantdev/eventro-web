import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Share2,
  Bookmark,
  Calendar,
  Search,
  ArrowLeft,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import Link from "next/link";

// This would come from your API/database
async function getEventData(id: string) {
  // Mock data - replace with actual API call
  return {
    id,
    title: "Strangers After Sunset",
    subtitle: "Bangkok Expat, Digital Nomads and Thai People Meetup",
    description:
      "A friday night social gathering for friendly souls, free spirits, and curious hearts.\n\nBangkok can feel big—especially when you're new in town, passing through, or just in one of those moods where you'd love to go out but not to the same old place with the same old faces.\n\nSo let's make it simple:\nWe're throwing a garden-style friday night hang where no one's a stranger for long.\n\nStrangers After Sunset is all about the people—the travelers, the expats, the locals, the professionals, the creatives, the curious, the ones who wander.\n\n4 mins walk from bts nana !!\nLocation : https://maps.app.goo.gl/V3j6SFve4kv8SAzu6?g_st=ipc",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80",
    date: "Friday, Jan 9",
    time: "7:30 PM to 11:30 PM ICT",
    location: "Hemingway Soi11",
    fullAddress: "sukhumvit 11 · bangkok",
    rating: 4.5,
    totalRatings: 973,
    members: 8537,
    groupType: "Public group",
    category: "Social",
    price: "FREE",
    host: {
      name: "Baifernnn",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    },
    attendees: 45,
    tags: ["Events in Bangkok: 114", "International Friends", "Make New Friends", "Fun Times"],
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const event = await getEventData(resolvedParams.id);

  return (
    <div className="min-h-screen pb-16">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Event Info */}
          <div className="space-y-6 col-span-2">
            {/* Hero Image */}
            <div className="relative aspect-[4/2] rounded-3xl overflow-hidden">
              <Image
                src={event.heroImage}
                alt={event.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold font-outfit">Details</h2>

              <div className="prose prose-sm max-w-none text-muted-foreground whitespace-pre-line">
                {event.description}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {event.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-muted text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Map Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-outfit">Location</h2>
              <div className="flex items-end justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{event.location}</h3>
                    <p className="text-sm text-muted-foreground">{event.fullAddress}</p>
                  </div> 
                  <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                    <MapPin className="w-4 h-4" />
                    <span>How to find us: Starbucks, G/F</span>
                  </div>
                </div>
              <div className="rounded-3xl overflow-hidden border">
                <div className="relative h-60 bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5911939156204!2d100.56115537573476!3d13.744889986672046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed269b534f1%3A0x3a0f53c1e818f50b!2sMajor%20Cineplex%20Sukhumvit!5e0!3m2!1sen!2sth!4v1234567890123!5m2!1sen!2sth"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>
              </div>
            </div>

            {/* Photo Grid Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-outfit">Photos</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80"
                    alt="Event photo 1"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80"
                    alt="Event photo 2"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80"
                    alt="Event photo 3"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1510076857177-7470076d4098?w=600&q=80"
                    alt="Event photo 4"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image & Event Info Card */}
          <div className="space-y-6 col-span-2 lg:col-span-1">
            {/* Title */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 font-outfit">
                {event.title}
              </h1>
            </div>

            <div className="space-y-6 sticky top-8">
              {/* Host Info */}
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm text-muted-foreground">Hosted by</p>
                  <p className="font-semibold">{event.host.name}</p>
                </div>
              </div>

              {/* Event Info Card */}
              <div className="border rounded-2xl p-6 space-y-4">
                {/* Date & Time */}
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-semibold">{event.date} · {event.time}</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-semibold">{event.location}</p>
                    <p className="text-sm text-muted-foreground">{event.fullAddress}</p>
                    <Button variant="link" className="h-auto p-0 text-sm">
                      How to find us
                    </Button>
                  </div>
                </div>
                
              </div>

              {/* Attend */}
              <div className="border rounded-2xl p-6 space-y-4calc(24rem+2rem)]">
                <div className="grid gap-6">
                  {/* Left - Event Info */}
                  <div>
                    <p className="font-semibold text-lg">{event.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {event.date} · {event.time.split(' ')[0]}
                    </p>
                  </div>

                  {/* Right - Actions */}
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <span className="text-lg font-bold">{event.price}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                        aria-label="Bookmark event"
                      >
                        <Bookmark className="w-5 h-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                        aria-label="Share event"
                      >
                        <Share2 className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Button className="px-6 h-14 rounded-full w-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 bg-gradient-primary text-white hover:opacity-90 shadow-lg shadow-primary/30">
                      Attend
                    </Button>
                  </div>
                </div>
              </div>

              {/* button get back & search */}
              <div>
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Go back to previous page
                  </Link>

                  <Link href="/search">
                    <Button variant="ghost" className="border-primary/50 hover:bg-primary/10 rounded-full gap-2">
                      <Search className="w-4 h-4" />
                      Search Events
                    </Button>
                  </Link>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
