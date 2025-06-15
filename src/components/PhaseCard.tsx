
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Clock, Target, BookOpen, Sparkles } from 'lucide-react';
import { ModuleCard } from './ModuleCard';
import { Phase } from '../data/syllabusData';

interface PhaseCardProps {
  phase: Phase;
  completedModules: string[];
  completedSubtopics: string[];
  onToggleModule: (moduleId: string) => void;
  onToggleSubtopic: (subtopicId: string) => void;
}

export const PhaseCard: React.FC<PhaseCardProps> = ({ 
  phase, 
  completedModules, 
  completedSubtopics,
  onToggleModule,
  onToggleSubtopic
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const completedCount = phase.modules.reduce((count, module) => 
    count + module.topics.filter(topic => completedModules.includes(topic.id)).length, 0
  );
  const totalCount = phase.modules.reduce((count, module) => count + module.topics.length, 0);
  const progressPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  const isCompleted = progressPercentage === 100;

  return (
    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-gray-300/50 hover:-translate-y-1">
      {/* Enhanced Phase Header */}
      <div 
        className="p-6 sm:p-8 cursor-pointer select-none relative overflow-hidden"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Background gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r ${phase.color.replace('bg-', 'from-')} to-transparent opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="transition-transform duration-300 group-hover:scale-110">
                {isExpanded ? (
                  <ChevronDown className="w-6 h-6 text-gray-500 transition-transform duration-300" />
                ) : (
                  <ChevronRight className="w-6 h-6 text-gray-500 transition-transform duration-300" />
                )}
              </div>
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl ${phase.color} shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl relative`}>
                {isCompleted && (
                  <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-yellow-400 animate-pulse" />
                )}
                {phase.id}
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                {phase.title}
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                {phase.description}
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 lg:text-right">
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <div className="flex items-center space-x-2 bg-gray-50 rounded-full px-3 py-2">
                <Clock className="w-4 h-4" />
                <span className="font-medium">{phase.duration}</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-50 rounded-full px-3 py-2">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span className="font-medium text-blue-700">{completedCount}/{totalCount}</span>
              </div>
            </div>
            <div className="w-full sm:w-40 lg:w-48">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Progress</span>
                <span className="text-sm font-bold text-gray-900">{Math.round(progressPercentage)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                <div 
                  className={`h-3 rounded-full transition-all duration-700 ease-out ${phase.color} shadow-sm relative overflow-hidden`}
                  style={{ width: `${progressPercentage}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Phase Content */}
      {isExpanded && (
        <div className="border-t border-gray-100/50 animate-accordion-down">
          <div className="p-6 sm:p-8 space-y-6 bg-gradient-to-b from-gray-50/30 to-transparent">
            {phase.modules.map((module, index) => (
              <div 
                key={module.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ModuleCard
                  module={module}
                  completedModules={completedModules}
                  completedSubtopics={completedSubtopics}
                  onToggleModule={onToggleModule}
                  onToggleSubtopic={onToggleSubtopic}
                />
              </div>
            ))}
            
            {phase.projects && phase.projects.length > 0 && (
              <div className="bg-gradient-to-r from-emerald-50 via-green-50 to-teal-50 rounded-xl p-6 border border-emerald-200/50 shadow-sm animate-fade-in">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <Target className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h4 className="font-bold text-emerald-800 text-lg">Phase Projects</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {phase.projects.map((project, index) => (
                    <div key={index} className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-emerald-100 hover:bg-white/80 transition-all duration-200 hover-scale">
                      <div className="flex items-start space-x-3">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0 animate-pulse" />
                        <span className="text-emerald-700 text-sm font-medium leading-relaxed">{project}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
