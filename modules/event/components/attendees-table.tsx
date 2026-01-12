import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Attendee } from "../types";

interface AttendeesTableProps {
  attendees: Attendee[];
  totalCount: number;
  onExport?: () => void;
}

export function AttendeesTable({
  attendees,
  totalCount,
  onExport,
}: AttendeesTableProps) {
  return (
    <Card className="rounded-3xl shadow-none">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Attendees ({totalCount})</CardTitle>
          <Button variant="outline" className="rounded-full" onClick={onExport}>
            Export List
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-2 font-semibold text-sm">Name</th>
                <th className="text-left py-3 px-2 font-semibold text-sm">Email</th>
                <th className="text-left py-3 px-2 font-semibold text-sm">Ticket Type</th>
                <th className="text-left py-3 px-2 font-semibold text-sm">Purchase Date</th>
              </tr>
            </thead>
            <tbody>
              {attendees.map((attendee, index) => (
                <tr key={index} className="border-b last:border-0 hover:bg-muted/50">
                  <td className="py-3 px-2 text-sm">{attendee.name}</td>
                  <td className="py-3 px-2 text-sm text-muted-foreground">
                    {attendee.email}
                  </td>
                  <td className="py-3 px-2">
                    <Badge variant="outline" className="rounded-full">
                      {attendee.ticketType}
                    </Badge>
                  </td>
                  <td className="py-3 px-2 text-sm text-muted-foreground">
                    {attendee.purchaseDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
