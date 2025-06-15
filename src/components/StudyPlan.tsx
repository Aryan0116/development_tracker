
import React, { useState } from 'react';
import { Calendar, Clock, Target, BookOpen, Zap, Users, Award, CheckCircle2 } from 'lucide-react';
import { Phase, phases } from '../data/syllabusData';

interface StudyPlanProps {
  completedModules: string[];
  completedSubtopics: string[];
  completedProjects: string[];
}

interface StudyPlanOption {
  id: string;
  title: string;
  duration: string;
  hoursPerWeek: number;
  description: string;
  icon: React.ReactNode;
  color: string;
  schedule: {
    phase: number;
    weeks: number;
    focusAreas: string[];
  }[];
}

const studyPlans: StudyPlanOption[] = [
  {
    id: 'intensive',
    title: 'Intensive Bootcamp',
    duration: '16 weeks',
    hoursPerWeek: 40,
    description: 'Full-time intensive program for rapid skill development',
    icon: <Zap className="w-6 h-6" />,
    color: 'bg-red-500',
    schedule: [
      { phase: 1, weeks: 3, focusAreas: ['HTML/CSS', 'JavaScript Fundamentals', 'Version Control'] },
      { phase: 2, weeks: 4, focusAreas: ['React Ecosystem', 'State Management', 'Component Design'] },
      { phase: 3, weeks: 3, focusAreas: ['Backend Development', 'APIs', 'Authentication'] },
      { phase: 4, weeks: 3, focusAreas: ['AI Integration', 'LLM APIs', 'RAG Systems'] },
      { phase: 5, weeks: 3, focusAreas: ['System Design', 'DevOps', 'Portfolio Projects'] }
    ]
  },
  {
    id: 'balanced',
    title: 'Balanced Learning',
    duration: '24 weeks',
    hoursPerWeek: 25,
    description: 'Part-time program balancing depth with flexibility',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'bg-blue-500',
    schedule: [
      { phase: 1, weeks: 4, focusAreas: ['HTML/CSS', 'JavaScript Fundamentals', 'Version Control'] },
      { phase: 2, weeks: 6, focusAreas: ['React Ecosystem', 'State Management', 'Testing'] },
      { phase: 3, weeks: 5, focusAreas: ['Backend Development', 'Database Design', 'APIs'] },
      { phase: 4, weeks: 5, focusAreas: ['AI Integration', 'Machine Learning', 'AI Agents'] },
      { phase: 5, weeks: 4, focusAreas: ['System Design', 'DevOps', 'Portfolio Projects'] }
    ]
  },
  {
    id: 'flexible',
    title: 'Flexible Pace',
    duration: '36 weeks',
    hoursPerWeek: 15,
    description: 'Self-paced learning for working professionals',
    icon: <Clock className="w-6 h-6" />,
    color: 'bg-green-500',
    schedule: [
      { phase: 1, weeks: 6, focusAreas: ['HTML/CSS', 'JavaScript Fundamentals'] },
      { phase: 2, weeks: 8, focusAreas: ['React Ecosystem', 'State Management'] },
      { phase: 3, weeks: 8, focusAreas: ['Backend Development', 'Database Design'] },
      { phase: 4, weeks: 8, focusAreas: ['AI Integration', 'LLM APIs'] },
      { phase: 5, weeks: 6, focusAreas: ['System Design', 'Portfolio Projects'] }
    ]
  }
];

export const StudyPlan: React.FC<StudyPlanProps> = ({
  completedModules,
  completedSubtopics,
  completedProjects
}) => {
  const [selectedPlan, setSelectedPlan] = useState<string>(studyPlans[1].id);
  const [currentWeek, setCurrentWeek] = useState<number>(1);

  const calculateProgress = () => {
    const totalModules = phases.reduce((count, phase) => 
      count + phase.modules.reduce((moduleCount, module) => 
        moduleCount + module.topics.length, 0
      ), 0
    );
    
    const totalSubtopics = phases.reduce((count, phase) => 
      count + phase.modules.reduce((moduleCount, module) => 
        moduleCount + module.topics.reduce((topicCount, topic) => 
          topicCount + (topic.subtopics ? topic.subtopics.length : 0), 0
        ), 0
      ), 0
    );

    const completedModuleCount = completedModules.length;
    const completedSubtopicCount = completedSubtopics.length;
    const completedProjectCount = completedProjects.length;

    return {
      modules: { completed: completedModuleCount, total: totalModules },
      subtopics: { completed: completedSubtopicCount, total: totalSubtopics },
      projects: { completed: completedProjectCount, total: 10 }
    };
  };

  const progress = calculateProgress();
  const currentPlan = studyPlans.find(plan => plan.id === selectedPlan)!;

  const getMilestones = () => [
    {
      week: 4,
      title: 'Foundation Milestone',
      description: 'Complete HTML/CSS and JavaScript fundamentals',
      requirements: ['Responsive design', 'ES6+ features', 'DOM manipulation']
    },
    {
      week: 10,
      title: 'Frontend Milestone',
      description: 'Build React applications with state management',
      requirements: ['React components', 'State management', 'API integration']
    },
    {
      week: 16,
      title: 'Full-Stack Milestone',
      description: 'Create complete web applications',
      requirements: ['Backend APIs', 'Database design', 'Authentication']
    },
    {
      week: 22,
      title: 'AI Integration Milestone',
      description: 'Integrate AI capabilities into applications',
      requirements: ['LLM APIs', 'RAG systems', 'AI agents']
    },
    {
      week: currentPlan.schedule.reduce((total, phase) => total + phase.weeks, 0),
      title: 'Job Ready Milestone',
      description: 'Complete portfolio and system design knowledge',
      requirements: ['Portfolio projects', 'System design', 'DevOps skills']
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 mb-8">
      <div className="flex items-center space-x-3 mb-6">
        <Target className="w-6 h-6 text-purple-600" />
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Study Plan Generator</h2>
          <p className="text-gray-600">Choose your learning path and track milestones</p>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-blue-800">Topics Completed</span>
            <BookOpen className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-blue-900">
            {progress.modules.completed}/{progress.modules.total}
          </div>
          <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(progress.modules.completed / progress.modules.total) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-green-800">Subtopics Completed</span>
            <CheckCircle2 className="w-4 h-4 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-green-900">
            {progress.subtopics.completed}/{progress.subtopics.total}
          </div>
          <div className="w-full bg-green-200 rounded-full h-2 mt-2">
            <div 
              className="bg-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(progress.subtopics.completed / progress.subtopics.total) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-purple-800">Projects Completed</span>
            <Award className="w-4 h-4 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-purple-900">
            {progress.projects.completed}/{progress.projects.total}
          </div>
          <div className="w-full bg-purple-200 rounded-full h-2 mt-2">
            <div 
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(progress.projects.completed / progress.projects.total) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Study Plan Options */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Your Study Plan</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {studyPlans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                selectedPlan === plan.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className={`p-2 rounded-lg ${plan.color} text-white`}>
                  {plan.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{plan.title}</h4>
                  <p className="text-sm text-gray-600">{plan.duration}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-2">{plan.description}</p>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <Clock className="w-3 h-3" />
                <span>{plan.hoursPerWeek} hours/week</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Plan Details */}
      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          {currentPlan.title} - Weekly Schedule
        </h3>
        
        <div className="space-y-4">
          {currentPlan.schedule.map((phase, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-900">
                  Phase {phase.phase}: {phases[phase.phase - 1]?.title}
                </h4>
                <span className="text-sm text-gray-500">{phase.weeks} weeks</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {phase.focusAreas.map((area, areaIndex) => (
                  <span
                    key={areaIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Milestones */}
      <div className="border-t border-gray-200 pt-6 mt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Milestones</h3>
        <div className="space-y-3">
          {getMilestones().map((milestone, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold text-sm">
                {milestone.week}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{milestone.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{milestone.description}</p>
                <div className="flex flex-wrap gap-1">
                  {milestone.requirements.map((req, reqIndex) => (
                    <span
                      key={reqIndex}
                      className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Study Tips */}
      <div className="border-t border-gray-200 pt-6 mt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Study Tips for Success</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
              <p className="text-sm text-gray-700">Practice coding daily, even for 30 minutes</p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
              <p className="text-sm text-gray-700">Build projects alongside learning concepts</p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
              <p className="text-sm text-gray-700">Join developer communities and ask questions</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
              <p className="text-sm text-gray-700">Review and refactor your code regularly</p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
              <p className="text-sm text-gray-700">Document your learning journey in a blog</p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
              <p className="text-sm text-gray-700">Prepare for technical interviews early</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
