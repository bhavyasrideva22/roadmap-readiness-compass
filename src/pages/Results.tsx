import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { calculateScores, getRecommendation, getCareerInfo } from "@/data/assessmentQuestions";
import { 
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  TrendingUp, 
  Target, 
  Brain,
  Heart,
  Zap,
  Users,
  ArrowLeft,
  Download,
  Share2
} from "lucide-react";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  if (!location.state?.answers) {
    return <Navigate to="/" replace />;
  }

  const answers = location.state.answers;
  const scores = calculateScores(answers);
  const recommendation = getRecommendation(scores);
  const careerInfo = getCareerInfo();

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-success";
    if (score >= 65) return "text-warning";
    return "text-destructive";
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <CheckCircle className="w-5 h-5 text-success" />;
    if (score >= 65) return <AlertCircle className="w-5 h-5 text-warning" />;
    return <XCircle className="w-5 h-5 text-destructive" />;
  };

  const wiscarData = [
    { key: 'will', label: 'Will', score: scores.wiscar.will, icon: Heart },
    { key: 'interest', label: 'Interest', score: scores.wiscar.interest, icon: Zap },
    { key: 'skill', label: 'Skill', score: scores.wiscar.skill, icon: Target },
    { key: 'cognitive', label: 'Cognitive', score: scores.wiscar.cognitive, icon: Brain },
    { key: 'learning', label: 'Learning', score: scores.wiscar.learning, icon: TrendingUp },
    { key: 'realworld', label: 'Real-world', score: scores.wiscar.realworld, icon: Users }
  ];

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
          
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              Your Assessment Results
            </h1>
            <p className="text-muted-foreground text-lg">
              Roadmap & Planning Analyst Fit & Readiness Analysis
            </p>
          </div>
        </div>

        {/* Overall Recommendation */}
        <Card className="mb-8 bg-white/70 backdrop-blur border-0 shadow-lg">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              {getScoreIcon(scores.overall)}
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">
              {recommendation.title}
            </CardTitle>
            <div className="flex justify-center items-center gap-4 mt-4">
              <Badge variant={scores.overall >= 80 ? "default" : scores.overall >= 65 ? "secondary" : "destructive"} className="text-lg px-4 py-2">
                {recommendation.shouldPursue}
              </Badge>
              <div className="text-sm text-muted-foreground">
                Confidence: {recommendation.confidence}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground text-lg leading-relaxed">
              {recommendation.summary}
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Core Scores */}
          <Card className="bg-white/70 backdrop-blur border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Core Assessment Scores
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Overall Confidence</span>
                  <span className={`font-bold text-lg ${getScoreColor(scores.overall)}`}>
                    {scores.overall}%
                  </span>
                </div>
                <Progress value={scores.overall} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Psychological Fit</span>
                  <span className={`font-bold ${getScoreColor(scores.psychologicalFit)}`}>
                    {scores.psychologicalFit}%
                  </span>
                </div>
                <Progress value={scores.psychologicalFit} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Technical Readiness</span>
                  <span className={`font-bold ${getScoreColor(scores.technicalReadiness)}`}>
                    {scores.technicalReadiness}%
                  </span>
                </div>
                <Progress value={scores.technicalReadiness} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* WISCAR Framework */}
          <Card className="bg-white/70 backdrop-blur border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-accent" />
                WISCAR Framework Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {wiscarData.map(({ key, label, score, icon: Icon }) => (
                  <div key={key} className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <Icon className="w-6 h-6 text-primary" />
                      <span className="text-sm font-medium">{label}</span>
                      <span className={`text-lg font-bold ${getScoreColor(score)}`}>
                        {score}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Next Steps */}
        <Card className="mb-8 bg-white/70 backdrop-blur border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-success" />
              Recommended Next Steps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {recommendation.nextSteps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold mt-0.5">
                    {index + 1}
                  </div>
                  <span className="text-muted-foreground leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Career Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="bg-white/70 backdrop-blur border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Career Opportunities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {careerInfo.rolesUnlocked.slice(0, 3).map((role, index) => (
                <div key={index} className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">{role.title}</h4>
                  <p className="text-sm text-muted-foreground mb-1">{role.description}</p>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{role.salaryRange}</span>
                    <span>{role.growth}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Learning Path</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {careerInfo.learningPath.map((stage, index) => (
                <div key={index} className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-foreground">{stage.stage}</h4>
                  <p className="text-sm text-muted-foreground mb-1">Duration: {stage.duration}</p>
                  <p className="text-xs text-muted-foreground">{stage.focus}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <Button 
            onClick={() => navigate("/assessment")}
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white border-0"
          >
            Retake Assessment
          </Button>
          <Button variant="outline" className="hover:bg-primary/10">
            <Download className="w-4 h-4 mr-2" />
            Download Report
          </Button>
          <Button variant="outline" className="hover:bg-primary/10">
            <Share2 className="w-4 h-4 mr-2" />
            Share Results
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;