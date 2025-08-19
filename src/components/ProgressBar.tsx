import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  max: number;
  className?: string;
  showLabel?: boolean;
}

export const ProgressBar = ({ value, max, className, showLabel = true }: ProgressBarProps) => {
  const percentage = Math.round((value / max) * 100);
  
  return (
    <div className={cn("w-full", className)}>
      {showLabel && (
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Progress</span>
          <span>{percentage}% Complete</span>
        </div>
      )}
      <Progress value={percentage} className="h-2" />
    </div>
  );
};