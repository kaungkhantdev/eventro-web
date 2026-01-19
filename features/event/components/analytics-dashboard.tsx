import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CalendarFold } from "lucide-react";

export function AnalyticsDashboard() {
  return (
    <Card className="rounded-3xl shadow-none">
      <CardHeader>
        <CardTitle>Analytics Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center h-64 text-muted-foreground">
          <div className="text-center">
            <CalendarFold className="size-8 mx-auto mb-4 opacity-50" />
            <p>Analytics charts and insights will be displayed here</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
