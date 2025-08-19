import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export interface Question {
  id: string;
  type: 'single' | 'multiple' | 'scale' | 'scenario';
  question: string;
  options?: string[];
  scaleMin?: number;
  scaleMax?: number;
  scaleLabels?: string[];
}

interface QuestionCardProps {
  question: Question;
  answer: any;
  onAnswerChange: (answer: any) => void;
  className?: string;
}

export const QuestionCard = ({ question, answer, onAnswerChange, className }: QuestionCardProps) => {
  const renderScaleQuestion = () => {
    const { scaleMin = 1, scaleMax = 5, scaleLabels } = question;
    const values = Array.from({ length: scaleMax - scaleMin + 1 }, (_, i) => scaleMin + i);
    
    return (
      <div className="space-y-4">
        <RadioGroup value={answer?.toString()} onValueChange={(value) => onAnswerChange(parseInt(value))}>
          <div className="flex justify-between items-center">
            {values.map((value, index) => (
              <div key={value} className="flex flex-col items-center space-y-2">
                <RadioGroupItem value={value.toString()} id={`${question.id}-${value}`} />
                <Label htmlFor={`${question.id}-${value}`} className="text-sm font-medium">
                  {value}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
        {scaleLabels && (
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>{scaleLabels[0]}</span>
            <span>{scaleLabels[1]}</span>
          </div>
        )}
      </div>
    );
  };

  const renderSingleChoice = () => (
    <RadioGroup value={answer} onValueChange={onAnswerChange}>
      <div className="space-y-3">
        {question.options?.map((option, index) => (
          <div key={index} className="flex items-center space-x-2">
            <RadioGroupItem value={option} id={`${question.id}-${index}`} />
            <Label htmlFor={`${question.id}-${index}`} className="text-sm leading-relaxed cursor-pointer">
              {option}
            </Label>
          </div>
        ))}
      </div>
    </RadioGroup>
  );

  const renderMultipleChoice = () => (
    <div className="space-y-3">
      {question.options?.map((option, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Checkbox
            id={`${question.id}-${index}`}
            checked={answer?.includes(option) || false}
            onCheckedChange={(checked) => {
              const currentAnswers = answer || [];
              if (checked) {
                onAnswerChange([...currentAnswers, option]);
              } else {
                onAnswerChange(currentAnswers.filter((a: string) => a !== option));
              }
            }}
          />
          <Label htmlFor={`${question.id}-${index}`} className="text-sm leading-relaxed cursor-pointer">
            {option}
          </Label>
        </div>
      ))}
    </div>
  );

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="text-lg leading-relaxed text-foreground">
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {question.type === 'scale' && renderScaleQuestion()}
        {question.type === 'single' && renderSingleChoice()}
        {question.type === 'multiple' && renderMultipleChoice()}
        {question.type === 'scenario' && renderSingleChoice()}
      </CardContent>
    </Card>
  );
};