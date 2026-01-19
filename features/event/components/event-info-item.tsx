import { LucideIcon } from "lucide-react";

interface EventInfoItemProps {
  icon: LucideIcon;
  iconBgColor: string;
  iconColor: string;
  title: string;
  content: string;
  subtitle?: string;
}

export function EventInfoItem({
  icon: Icon,
  iconBgColor,
  iconColor,
  title,
  content,
  subtitle,
}: EventInfoItemProps) {
  return (
    <div className="flex gap-3">
      <div className={`h-10 w-10 rounded-full ${iconBgColor} flex items-center justify-center shrink-0`}>
        <Icon className={`size-4 ${iconColor}`} />
      </div>
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-muted-foreground text-sm">{content}</p>
        {subtitle && <p className="text-muted-foreground text-xs">{subtitle}</p>}
      </div>
    </div>
  );
}
