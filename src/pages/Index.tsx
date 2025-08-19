import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AssessmentCard } from "@/components/AssessmentCard";
import { 
  Target, 
  Brain, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Award,
  BarChart3
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const assessmentFeatures = [
    {
      title: "Psychological Fit Analysis",
      description: "Evaluate personality traits, work preferences, and motivational drivers that align with roadmap planning roles.",
      icon: Brain
    },
    {
      title: "Technical Readiness Check",
      description: "Assess current knowledge of roadmap frameworks, prioritization methods, and strategic planning concepts.",
      icon: Target
    },
    {
      title: "WISCAR Framework",
      description: "Comprehensive evaluation of Will, Interest, Skill, Cognitive ability, Ability to learn, and Real-world alignment.",
      icon: BarChart3
    }
  ];

  const benefits = [
    "Psychometrically validated assessment methodology",
    "Personalized career guidance and learning paths", 
    "Real-world job market insights and salary data",
    "Actionable next steps for skill development"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent leading-tight">
              Roadmap & Planning Analyst
              <br />
              <span className="text-3xl md:text-4xl">Fit & Readiness Assessment</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Discover your potential as a strategic planning professional. Our comprehensive assessment evaluates your psychological fit, technical readiness, and career alignment for roadmap planning roles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg"
                onClick={() => navigate("/assessment")}
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white border-0 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>20-30 minutes • Free • No registration required</span>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4 max-w-2xl mx-auto text-center">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">5,000+ Assessed</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-success" />
                </div>
                <span className="text-sm font-medium">Validated Method</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <span className="text-sm font-medium">Career Guidance</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-warning" />
                </div>
                <span className="text-sm font-medium">Detailed Reports</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Roadmap Analyst Section */}
      <section className="py-16 px-4 bg-white/30 backdrop-blur">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              What is a Roadmap & Planning Analyst?
            </h2>
            
            <Card className="bg-white/70 backdrop-blur border-0 shadow-lg mb-8">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  A Roadmap & Planning Analyst is a strategic professional responsible for creating, maintaining, and optimizing product and project roadmaps. They bridge the gap between high-level business strategy and tactical execution, ensuring that teams are aligned on priorities and timelines.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Responsibilities:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                        Strategic planning and timeline forecasting
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                        Prioritizing initiatives and features
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                        Stakeholder communication and alignment
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                        Dependency mapping and risk assessment
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Career Paths:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Product Manager</li>
                      <li>• Strategic Planner</li>
                      <li>• Portfolio Manager</li>
                      <li>• Business Analyst</li>
                      <li>• Program Manager</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Assessment Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Comprehensive Assessment Framework
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our multi-dimensional evaluation process provides deep insights into your potential for success in roadmap planning roles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {assessmentFeatures.map((feature, index) => (
              <AssessmentCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white/30 backdrop-blur">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Why Take This Assessment?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/70 backdrop-blur border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    What You'll Get
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-accent" />
                    Assessment Sections
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Psychological Fit</span>
                      <span className="text-sm text-muted-foreground">6 questions</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Technical Readiness</span>
                      <span className="text-sm text-muted-foreground">5 questions</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">WISCAR Framework</span>
                      <span className="text-sm text-muted-foreground">6 questions</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Ready to Discover Your Potential?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Take the first step towards understanding your fit for a strategic planning career. Get personalized insights and actionable recommendations.
            </p>
            
            <Button 
              size="lg"
              onClick={() => navigate("/assessment")}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white border-0 px-12 py-6 text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Assessment Now
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
