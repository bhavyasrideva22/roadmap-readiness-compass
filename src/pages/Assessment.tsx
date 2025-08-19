import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuestionCard } from "@/components/QuestionCard";
import { ProgressBar } from "@/components/ProgressBar";
import { assessmentSections } from "@/data/assessmentQuestions";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Assessment = () => {
  const navigate = useNavigate();
  const [currentSectionIndex, setSectionIndex] = useState(0);
  const [currentQuestionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});

  const currentSection = assessmentSections[currentSectionIndex];
  const currentQuestion = currentSection.questions[currentQuestionIndex];
  const totalQuestions = assessmentSections.reduce((sum, section) => sum + section.questions.length, 0);
  const answeredQuestions = Object.keys(answers).length;

  const handleAnswerChange = (answer: any) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer
    }));
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < currentSection.questions.length - 1) {
      setQuestionIndex(currentQuestionIndex + 1);
    } else if (currentSectionIndex < assessmentSections.length - 1) {
      setSectionIndex(currentSectionIndex + 1);
      setQuestionIndex(0);
    } else {
      // Assessment complete - navigate to results
      navigate("/results", { state: { answers } });
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setQuestionIndex(currentQuestionIndex - 1);
    } else if (currentSectionIndex > 0) {
      setSectionIndex(currentSectionIndex - 1);
      setQuestionIndex(assessmentSections[currentSectionIndex - 1].questions.length - 1);
    }
  };

  const isAnswered = answers[currentQuestion.id] !== undefined;
  const isLastQuestion = currentSectionIndex === assessmentSections.length - 1 && 
                        currentQuestionIndex === currentSection.questions.length - 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-4 hover:bg-primary/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <Card className="bg-white/50 backdrop-blur border-0 shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {currentSection.title}
                  </CardTitle>
                  <p className="text-muted-foreground mt-2">
                    {currentSection.description}
                  </p>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  Section {currentSectionIndex + 1} of {assessmentSections.length}
                </div>
              </div>
              <ProgressBar 
                value={answeredQuestions} 
                max={totalQuestions} 
                className="mt-4"
              />
            </CardHeader>
          </Card>
        </div>

        {/* Question */}
        <div className="max-w-3xl mx-auto">
          <QuestionCard
            question={currentQuestion}
            answer={answers[currentQuestion.id]}
            onAnswerChange={handleAnswerChange}
            className="mb-8 bg-white/70 backdrop-blur border-0 shadow-lg"
          />

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={goToPreviousQuestion}
              disabled={currentSectionIndex === 0 && currentQuestionIndex === 0}
              className="hover:bg-primary/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            <div className="text-sm text-muted-foreground">
              Question {currentQuestionIndex + 1} of {currentSection.questions.length}
            </div>

            <Button
              onClick={goToNextQuestion}
              disabled={!isAnswered}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white border-0"
            >
              {isLastQuestion ? "Complete Assessment" : "Next"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;