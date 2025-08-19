import { Question } from "@/components/QuestionCard";

export interface AssessmentSection {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export const assessmentSections: AssessmentSection[] = [
  {
    id: "psychometric",
    title: "Psychological Fit Assessment",
    description: "Understanding your personality traits, motivations, and work preferences",
    questions: [
      {
        id: "interest-1",
        type: "scale",
        question: "How interested are you in analyzing data to make strategic business decisions?",
        scaleMin: 1,
        scaleMax: 5,
        scaleLabels: ["Not at all interested", "Extremely interested"]
      },
      {
        id: "personality-1",
        type: "scale",
        question: "I prefer structured, organized work environments over flexible, spontaneous ones.",
        scaleMin: 1,
        scaleMax: 5,
        scaleLabels: ["Strongly disagree", "Strongly agree"]
      },
      {
        id: "personality-2",
        type: "scale",
        question: "I enjoy breaking down complex problems into smaller, manageable parts.",
        scaleMin: 1,
        scaleMax: 5,
        scaleLabels: ["Strongly disagree", "Strongly agree"]
      },
      {
        id: "motivation-1",
        type: "single",
        question: "What motivates you most in your work?",
        options: [
          "Mastering new skills and growing professionally",
          "Job security and stable income",
          "Recognition and advancement opportunities",
          "Making a meaningful impact on business outcomes"
        ]
      },
      {
        id: "workstyle-1",
        type: "single",
        question: "Which work environment do you thrive in most?",
        options: [
          "Collaborative team settings with frequent communication",
          "Independent work with periodic check-ins",
          "Fast-paced, dynamic environments with changing priorities",
          "Structured environments with clear processes and timelines"
        ]
      },
      {
        id: "persistence-1",
        type: "scale",
        question: "When facing a challenging project, I persist even when progress is slow.",
        scaleMin: 1,
        scaleMax: 5,
        scaleLabels: ["Rarely true", "Always true"]
      }
    ]
  },
  {
    id: "technical",
    title: "Technical Readiness Assessment",
    description: "Evaluating your current knowledge and aptitude for roadmap planning",
    questions: [
      {
        id: "knowledge-1",
        type: "single",
        question: "What is the primary purpose of a product roadmap?",
        options: [
          "To track daily tasks and activities",
          "To communicate strategic vision and timeline for product development",
          "To manage team schedules and meetings",
          "To document technical specifications"
        ]
      },
      {
        id: "knowledge-2",
        type: "single",
        question: "Which framework is commonly used for prioritizing features on a roadmap?",
        options: [
          "SWOT Analysis",
          "MoSCoW Method (Must have, Should have, Could have, Won't have)",
          "5 Whys Technique",
          "Fishbone Diagram"
        ]
      },
      {
        id: "aptitude-1",
        type: "scenario",
        question: "You have 3 features: Feature A takes 2 weeks and provides high business value, Feature B takes 4 weeks with medium value, Feature C takes 1 week with low value. Your team has 6 weeks. What's the best prioritization?",
        options: [
          "A, then B, then C if time permits",
          "C, then A, then B",
          "B first, then A and C",
          "All three features simultaneously"
        ]
      },
      {
        id: "knowledge-3",
        type: "multiple",
        question: "Which stakeholders typically need to review and approve roadmap changes? (Select all that apply)",
        options: [
          "Product Manager",
          "Engineering Team Lead",
          "Executive Leadership",
          "Customer Support Team",
          "Marketing Team"
        ]
      },
      {
        id: "aptitude-2",
        type: "single",
        question: "If a critical dependency is delayed by 2 weeks, affecting 3 downstream features, what's your first action?",
        options: [
          "Immediately inform all stakeholders about the delay",
          "Look for alternative solutions or workarounds",
          "Assess impact on overall timeline and adjust roadmap",
          "Escalate to senior management for decision"
        ]
      }
    ]
  },
  {
    id: "wiscar",
    title: "WISCAR Readiness Framework",
    description: "Comprehensive evaluation of your Will, Interest, Skill, Cognitive ability, Ability to learn, and Real-world alignment",
    questions: [
      {
        id: "will-1",
        type: "scale",
        question: "I am willing to dedicate significant time and effort to learning roadmap planning skills.",
        scaleMin: 1,
        scaleMax: 5,
        scaleLabels: ["Strongly disagree", "Strongly agree"]
      },
      {
        id: "interest-2",
        type: "scale",
        question: "I find myself naturally curious about how businesses plan and execute their strategic initiatives.",
        scaleMin: 1,
        scaleMax: 5,
        scaleLabels: ["Not at all", "Extremely curious"]
      },
      {
        id: "skill-1",
        type: "scale",
        question: "I am comfortable using project management tools like Jira, Trello, or similar platforms.",
        scaleMin: 1,
        scaleMax: 5,
        scaleLabels: ["Not comfortable", "Very comfortable"]
      },
      {
        id: "cognitive-1",
        type: "scenario",
        question: "A project has dependencies A→B→C. If A is delayed by 1 week, B by 2 weeks, and C takes 3 weeks, what's the total delay to project completion?",
        options: [
          "2 weeks (1+1)",
          "3 weeks (cumulative)",
          "6 weeks (1+2+3)",
          "Cannot determine without more information"
        ]
      },
      {
        id: "learning-1",
        type: "scale",
        question: "I actively seek feedback and use it to improve my performance.",
        scaleMin: 1,
        scaleMax: 5,
        scaleLabels: ["Rarely", "Always"]
      },
      {
        id: "realworld-1",
        type: "single",
        question: "Which scenario sounds most appealing for your daily work?",
        options: [
          "Creating detailed project timelines and tracking progress",
          "Analyzing market data to inform strategic decisions",
          "Facilitating meetings between different departments",
          "Writing detailed technical documentation"
        ]
      }
    ]
  }
];

// Scoring logic for different dimensions
export const calculateScores = (answers: Record<string, any>) => {
  const scores = {
    psychologicalFit: 0,
    technicalReadiness: 0,
    wiscar: {
      will: 0,
      interest: 0,
      skill: 0,
      cognitive: 0,
      learning: 0,
      realworld: 0
    },
    overall: 0
  };

  // Psychological Fit Score (0-100)
  const psychScores = [
    answers['interest-1'] || 0,
    answers['personality-1'] || 0,
    answers['personality-2'] || 0,
    answers['persistence-1'] || 0
  ];
  
  // Add bonus points for good motivation and work style answers
  if (answers['motivation-1'] === 'Making a meaningful impact on business outcomes') psychScores.push(5);
  if (answers['workstyle-1'] === 'Structured environments with clear processes and timelines') psychScores.push(5);
  
  scores.psychologicalFit = Math.min(100, Math.round((psychScores.reduce((a, b) => a + b, 0) / (psychScores.length * 5)) * 100));

  // Technical Readiness Score (0-100)
  let techScore = 0;
  if (answers['knowledge-1'] === 'To communicate strategic vision and timeline for product development') techScore += 25;
  if (answers['knowledge-2'] === 'MoSCoW Method (Must have, Should have, Could have, Won\'t have)') techScore += 25;
  if (answers['aptitude-1'] === 'A, then B, then C if time permits') techScore += 25;
  if (answers['aptitude-2'] === 'Assess impact on overall timeline and adjust roadmap') techScore += 25;
  
  // Multiple choice question bonus
  const stakeholderAnswers = answers['knowledge-3'] || [];
  const correctStakeholders = ['Product Manager', 'Engineering Team Lead', 'Executive Leadership'];
  const correctCount = correctStakeholders.filter(s => stakeholderAnswers.includes(s)).length;
  techScore += (correctCount / correctStakeholders.length) * 20;
  
  scores.technicalReadiness = Math.min(100, Math.round(techScore));

  // WISCAR Scores
  scores.wiscar.will = Math.round(((answers['will-1'] || 0) / 5) * 100);
  scores.wiscar.interest = Math.round(((answers['interest-2'] || 0) / 5) * 100);
  scores.wiscar.skill = Math.round(((answers['skill-1'] || 0) / 5) * 100);
  scores.wiscar.learning = Math.round(((answers['learning-1'] || 0) / 5) * 100);
  
  // Cognitive scoring
  if (answers['cognitive-1'] === '3 weeks (cumulative)') {
    scores.wiscar.cognitive = 100;
  } else if (answers['cognitive-1'] === 'Cannot determine without more information') {
    scores.wiscar.cognitive = 75;
  } else {
    scores.wiscar.cognitive = 25;
  }
  
  // Real-world alignment
  if (answers['realworld-1'] === 'Creating detailed project timelines and tracking progress') {
    scores.wiscar.realworld = 100;
  } else if (answers['realworld-1'] === 'Analyzing market data to inform strategic decisions') {
    scores.wiscar.realworld = 75;
  } else {
    scores.wiscar.realworld = 50;
  }

  // Overall confidence score
  const wiscarAverage = Object.values(scores.wiscar).reduce((a, b) => a + b, 0) / 6;
  scores.overall = Math.round((scores.psychologicalFit + scores.technicalReadiness + wiscarAverage) / 3);

  return scores;
};

export const getRecommendation = (scores: ReturnType<typeof calculateScores>) => {
  const { overall, psychologicalFit, technicalReadiness } = scores;
  
  if (overall >= 80) {
    return {
      shouldPursue: "Yes",
      confidence: "High",
      title: "Excellent Fit - Ready to Pursue!",
      summary: "You demonstrate strong alignment across all dimensions. You're well-positioned to succeed as a Roadmap & Planning Analyst.",
      nextSteps: [
        "Start with advanced roadmap planning courses",
        "Learn enterprise tools like Jira, Confluence, and roadmap software",
        "Practice with real-world case studies",
        "Consider certification in Agile/Scrum methodologies"
      ]
    };
  } else if (overall >= 65) {
    return {
      shouldPursue: "Yes",
      confidence: "Medium-High",
      title: "Good Fit - With Targeted Development",
      summary: "You show strong potential with some areas for improvement. Focus on developing your weaker areas while building on your strengths.",
      nextSteps: [
        psychologicalFit < 70 ? "Develop structured thinking and analytical skills" : null,
        technicalReadiness < 70 ? "Build foundational knowledge in project management and roadmap frameworks" : null,
        "Take a comprehensive roadmap planning course",
        "Gain hands-on experience through internships or projects"
      ].filter(Boolean) as string[]
    };
  } else if (overall >= 50) {
    return {
      shouldPursue: "Maybe",
      confidence: "Medium",
      title: "Moderate Fit - Significant Development Needed",
      summary: "You have some alignment but would benefit from substantial skill development before pursuing this career path.",
      nextSteps: [
        "Start with fundamental business analysis courses",
        "Develop analytical and critical thinking skills",
        "Gain experience in project coordination roles",
        "Consider alternative roles like Business Analyst or Project Coordinator first"
      ]
    };
  } else {
    return {
      shouldPursue: "No",
      confidence: "Low",
      title: "Limited Fit - Consider Alternative Paths",  
      summary: "Based on your responses, this role may not align well with your current interests and strengths. Consider exploring alternative career paths.",
      nextSteps: [
        "Explore related roles like Product Owner, Business Analyst, or Program Manager",
        "Consider roles in data analysis or strategy if you enjoy analytical work",
        "Take career assessment tests to identify better-aligned opportunities",
        "Develop core business skills before reconsidering this path"
      ]
    };
  }
};

export const getCareerInfo = () => ({
  rolesUnlocked: [
    {
      title: "Roadmap & Planning Analyst",
      description: "Coordinates strategic planning and timelines for product development",
      salaryRange: "$65,000 - $95,000",
      growth: "High demand, 8% annual growth"
    },
    {
      title: "Product Planner", 
      description: "Defines product development schedules and priorities",
      salaryRange: "$70,000 - $100,000",
      growth: "Strong growth in tech sector"
    },
    {
      title: "Portfolio Manager",
      description: "Oversees multiple project roadmaps aligned to business goals",
      salaryRange: "$85,000 - $125,000", 
      growth: "High-level strategic role"
    },
    {
      title: "Business Analyst",
      description: "Gathers requirements and aligns them to strategic plans",
      salaryRange: "$60,000 - $85,000",
      growth: "Foundational role, excellent entry point"
    },
    {
      title: "Strategic Project Coordinator",
      description: "Supports execution of project portfolios",
      salaryRange: "$55,000 - $75,000",
      growth: "Good stepping stone role"
    }
  ],
  learningPath: [
    {
      stage: "Beginner",
      duration: "2-3 months",
      focus: "Foundations of roadmap planning, basic project management concepts, introduction to planning tools"
    },
    {
      stage: "Intermediate", 
      duration: "3-4 months",
      focus: "Advanced prioritization frameworks, stakeholder management, dependency mapping, roadmap tools mastery"
    },
    {
      stage: "Job-Ready",
      duration: "2-3 months", 
      focus: "Portfolio management, strategic planning, advanced analytics, leadership skills"
    }
  ],
  alternativePaths: [
    "Agile Coach/Scrum Master",
    "Program Manager", 
    "Data Analyst",
    "Operations Manager",
    "Strategy Consultant"
  ]
});