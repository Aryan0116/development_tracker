import React, { useState, useEffect } from 'react';
import { PhaseCard } from '../components/PhaseCard';
import { ProgressOverview } from '../components/ProgressOverview';
import { StudyPlan } from '../components/StudyPlan';
import { ResourcesPanel } from '../components/ResourcesPanel';
import { portfolioProjects, phases } from '../data/syllabusData';
import { GraduationCap, Sparkles, Brain } from 'lucide-react';

const Index = () => {
  const [completedModules, setCompletedModules] = useState<string[]>([]);
  const [completedProjects, setCompletedProjects] = useState<string[]>([]);
  const [completedSubtopics, setCompletedSubtopics] = useState<string[]>([]);

  // Load progress from localStorage
  useEffect(() => {
    const savedModules = localStorage.getItem('completedModules');
    const savedProjects = localStorage.getItem('completedProjects');
    const savedSubtopics = localStorage.getItem('completedSubtopics');
    
    if (savedModules) {
      setCompletedModules(JSON.parse(savedModules));
    }
    if (savedProjects) {
      setCompletedProjects(JSON.parse(savedProjects));
    }
    if (savedSubtopics) {
      setCompletedSubtopics(JSON.parse(savedSubtopics));
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('completedModules', JSON.stringify(completedModules));
  }, [completedModules]);

  useEffect(() => {
    localStorage.setItem('completedProjects', JSON.stringify(completedProjects));
  }, [completedProjects]);

  useEffect(() => {
    localStorage.setItem('completedSubtopics', JSON.stringify(completedSubtopics));
  }, [completedSubtopics]);

  const toggleModule = (moduleId: string) => {
    const topic = phases
      .flatMap(phase => phase.modules)
      .flatMap(module => module.topics)
      .find(topic => topic.id === moduleId);

    if (!topic || !topic.subtopics) {
      // No subtopics, just toggle the module
      setCompletedModules(prev => 
        prev.includes(moduleId) 
          ? prev.filter(id => id !== moduleId)
          : [...prev, moduleId]
      );
      return;
    }

    const isCurrentlyCompleted = completedModules.includes(moduleId);
    
    if (isCurrentlyCompleted) {
      // Remove the module and all its subtopics
      setCompletedModules(prev => prev.filter(id => id !== moduleId));
      setCompletedSubtopics(prev => 
        prev.filter(subtopicId => !topic.subtopics!.some(subtopic => 
          subtopicId === `${moduleId}-${subtopic}`
        ))
      );
    } else {
      // Add the module and all its subtopics
      setCompletedModules(prev => [...prev, moduleId]);
      const allSubtopicIds = topic.subtopics.map(subtopic => `${moduleId}-${subtopic}`);
      setCompletedSubtopics(prev => [...prev, ...allSubtopicIds]);
    }
  };

  const toggleProject = (projectId: string) => {
    setCompletedProjects(prev => 
      prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  const toggleSubtopic = (subtopicId: string) => {
    console.log('toggleSubtopic called with:', subtopicId);
    
    // Find the topic that contains this subtopic
    const topic = phases
      .flatMap(phase => phase.modules)
      .flatMap(module => module.topics)
      .find(topic => {
        if (!topic.subtopics) return false;
        return topic.subtopics.some(subtopic => 
          `${topic.id}-${subtopic}` === subtopicId
        );
      });

    console.log('topic found:', topic);

    if (!topic || !topic.subtopics) {
      console.log('No topic or subtopics found, returning early');
      return;
    }

    const topicId = topic.id;
    console.log('topicId found:', topicId);

    const isCurrentlyCompleted = completedSubtopics.includes(subtopicId);
    console.log('isCurrentlyCompleted:', isCurrentlyCompleted);
    console.log('current completedSubtopics:', completedSubtopics);
    
    // Toggle the subtopic
    setCompletedSubtopics(prev => {
      const newState = isCurrentlyCompleted
        ? prev.filter(id => id !== subtopicId)
        : [...prev, subtopicId];
      console.log('new completedSubtopics state:', newState);
      return newState;
    });

    // Check if all subtopics will be completed after this toggle
    const allSubtopicIds = topic.subtopics.map(subtopic => `${topicId}-${subtopic}`);
    console.log('allSubtopicIds for topic:', allSubtopicIds);
    
    const currentCompletedSubtopics = completedSubtopics.filter(id => 
      allSubtopicIds.includes(id) && id !== subtopicId
    );
    console.log('currentCompletedSubtopics (excluding toggled):', currentCompletedSubtopics);
    
    if (!isCurrentlyCompleted) {
      // We're adding a subtopic
      const willAllBeCompleted = currentCompletedSubtopics.length + 1 === allSubtopicIds.length;
      console.log('willAllBeCompleted:', willAllBeCompleted);
      if (willAllBeCompleted && !completedModules.includes(topicId)) {
        console.log('Marking topic as completed:', topicId);
        setCompletedModules(prev => [...prev, topicId]);
      }
    } else {
      // We're removing a subtopic
      if (completedModules.includes(topicId)) {
        console.log('Unmarking topic as completed:', topicId);
        setCompletedModules(prev => prev.filter(id => id !== topicId));
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 animate-fade-in">
      {/* Header - removed sticky positioning */}
      <div className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center animate-scale-in">
            <div className="flex justify-center items-center space-x-2 mb-2">
              <div className="relative">
                <Brain className="w-8 h-8 text-blue-600 animate-pulse" />
                <Sparkles className="w-4 h-4 text-yellow-500 absolute -top-0.5 -right-0.5" />
              </div>
              <GraduationCap className="w-8 h-8 text-purple-600" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2 leading-tight">
              AI Era Development
            </h1>
            <div className="text-lg font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
              Learning Syllabus
            </div>
            <p className="text-sm text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Master modern web development with AI integration - from fundamentals to production-ready applications
            </p>
            <div className="mt-3 flex justify-center space-x-4 text-xs text-gray-600">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Interactive Learning</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Progress Tracking</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span>AI Integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Progress Overview with enhanced animations */}
        <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <ProgressOverview 
            phases={phases}
            completedModules={completedModules}
            portfolioProjects={portfolioProjects}
            completedProjects={completedProjects}
            completedSubtopics={completedSubtopics}
            onToggleProject={toggleProject}
          />
        </div>

        {/* Study Plan with staggered animation */}
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <StudyPlan 
            completedModules={completedModules}
            completedSubtopics={completedSubtopics}
            completedProjects={completedProjects}
          />
        </div>

        {/* Learning Phases with staggered animations */}
        <div className="space-y-8">
          {phases.map((phase, index) => (
            <div 
              key={phase.id} 
              className="animate-fade-in hover-scale"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <PhaseCard
                phase={phase}
                completedModules={completedModules}
                completedSubtopics={completedSubtopics}
                onToggleModule={toggleModule}
                onToggleSubtopic={toggleSubtopic}
              />
            </div>
          ))}
        </div>

        {/* Resources Panel with final animation */}
        <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <ResourcesPanel />
        </div>
      </div>

      {/* Floating Progress Indicator */}
      <div className="fixed bottom-6 right-6 z-40 animate-fade-in" style={{ animationDelay: '1s' }}>
        <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover-scale">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 relative">
              <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                />
                <path
                  d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeDasharray={`${(completedModules.length / phases.reduce((count, phase) => count + phase.modules.reduce((moduleCount, module) => moduleCount + module.topics.length, 0), 0)) * 100}, 100`}
                  className="transition-all duration-500"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-gray-700">
                  {Math.round((completedModules.length / phases.reduce((count, phase) => count + phase.modules.reduce((moduleCount, module) => moduleCount + module.topics.length, 0), 0)) * 100)}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
