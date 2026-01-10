import { Plus, Calendar, FileDown, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function QuickActions() {
  return (
    <div className="flex items-center gap-3">
      <Link href="/events">
        <Button variant="outline" className="gap-2 rounded-full">
          <Calendar className="h-4 w-4" />
          All Events
        </Button>
      </Link>
      <Button variant="outline" className="rounded-full" size="icon">
        <FileDown className="h-4 w-4" />
      </Button>
    </div>
  )
}
