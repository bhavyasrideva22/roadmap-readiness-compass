import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AssessmentCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
}

export const AssessmentCard = ({ title, description, icon: Icon, className }: AssessmentCardProps) => {
  return (
    <Card className={cn("group hover:shadow-lg transition-all duration-300 border-0 shadow-md", className)}>
      <CardHeader className="text-center">
        <div className="mx-auto w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <CardTitle className="text-lg font-semibold text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};