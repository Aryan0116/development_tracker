
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, CheckCircle2, Circle, Clock, Award } from 'lucide-react';
import { Module } from '../data/syllabusData';
import { SubtopicInfoPopup } from './SubtopicInfoPopup';

interface ModuleCardProps {
  module: Module;
  completedModules: string[];
  completedSubtopics: string[];
  onToggleModule: (moduleId: string) => void;
  onToggleSubtopic: (subtopicId: string) => void;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({ 
  module, 
  completedModules, 
  completedSubtopics,
  onToggleModule,
  onToggleSubtopic
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const completedCount = module.topics.filter(topic => 
    completedModules.includes(topic.id)
  ).length;
  const progressPercentage = (completedCount / module.topics.length) * 100;

  // Calculate subtopic progress
  const totalSubtopics = module.topics.reduce((count, topic) => 
    count + (topic.subtopics ? topic.subtopics.length : 0), 0
  );
  const completedSubtopicsCount = module.topics.reduce((count, topic) => {
    if (!topic.subtopics) return count;
    return count + topic.subtopics.filter(subtopic => 
      completedSubtopics.includes(`${topic.id}-${subtopic}`)
    ).length;
  }, 0);

  const createSubtopicId = (topicId: string, subtopic: string) => `${topicId}-${subtopic}`;
  const isModuleCompleted = progressPercentage === 100;

  return (
    <div className="group bg-gradient-to-r from-gray-50 to-gray-50/50 rounded-xl border border-gray-200/60 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:border-gray-300/60">
      {/* Enhanced Module Header */}
      <div 
        className="p-5 cursor-pointer select-none hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/50 transition-all duration-300 relative"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <div className="transition-transform duration-200 group-hover:scale-110">
              {isExpanded ? (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronRight className="w-5 h-5 text-gray-500" />
              )}
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center space-x-3">
                <h3 className="font-bold text-gray-900 text-lg group-hover:text-blue-700 transition-colors duration-300">
                  {module.title}
                </h3>
                {isModuleCompleted && (
                  <Award className="w-5 h-5 text-yellow-500 animate-pulse" />
                )}
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <div className="flex items-center space-x-2 bg-white/70 rounded-full px-3 py-1 border border-gray-200/50">
                  <Clock className="w-3 h-3 text-blue-600" />
                  <span className="font-medium text-gray-700">{module.duration}</span>
                </div>
                {totalSubtopics > 0 && (
                  <div className="flex items-center space-x-2 bg-blue-50/70 rounded-full px-3 py-1 border border-blue-200/50">
                    <CheckCircle2 className="w-3 h-3 text-blue-600" />
                    <span className="font-medium text-blue-700">
                      {completedSubtopicsCount}/{totalSubtopics} subtopics
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="text-right space-y-2 ml-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span className="font-medium">{completedCount}/{module.topics.length}</span>
              <span className="text-gray-400">topics</span>
            </div>
            <div className="w-28 sm:w-32 bg-gray-200 rounded-full h-2 shadow-inner">
              <div 
                className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-500 ease-out shadow-sm relative overflow-hidden"
                style={{ width: `${progressPercentage}%` }}
              >
                <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Module Topics */}
      {isExpanded && (
        <div className="border-t border-gray-200/50 bg-white/50 animate-accordion-down">
          <div className="p-5 space-y-4">
            {module.topics.map((topic, index) => {
              const isCompleted = completedModules.includes(topic.id);
              return (
                <div 
                  key={topic.id} 
                  className="group/topic border border-gray-100 rounded-xl p-4 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-200 hover:shadow-sm animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div 
                    className="flex items-start space-x-4 cursor-pointer hover:bg-gray-50/50 transition-colors rounded-lg p-3 -m-1"
                    onClick={() => onToggleModule(topic.id)}
                  >
                    <div className="mt-1 transition-transform duration-200 group-hover/topic:scale-110">
                      {isCompleted ? (
                        <CheckCircle2 className="w-6 h-6 text-green-500 drop-shadow-sm" />
                      ) : (
                        <Circle className="w-6 h-6 text-gray-400 group-hover/topic:text-gray-600 transition-colors" />
                      )}
                    </div>
                    <div className="flex-1 space-y-2">
                      <h4 className={`font-semibold transition-all duration-200 ${
                        isCompleted 
                          ? 'text-green-700 line-through opacity-75' 
                          : 'text-gray-900 group-hover/topic:text-blue-700'
                      }`}>
                        {topic.title}
                      </h4>
                      {topic.timeEstimate && (
                        <div className="flex items-center space-x-2">
                          <Clock className="w-3 h-3 text-blue-500" />
                          <span className="text-xs text-gray-600 font-medium bg-blue-50 px-2 py-1 rounded-full">
                            {topic.timeEstimate}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {topic.subtopics && topic.subtopics.length > 0 && (
                    <div className="mt-4 ml-10 space-y-2">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                        Subtopics ({topic.subtopics.length})
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {topic.subtopics.map((subtopic, subtopicIndex) => {
                          const subtopicId = createSubtopicId(topic.id, subtopic);
                          const isSubtopicCompleted = completedSubtopics.includes(subtopicId);
                          return (
                            <div 
                              key={subtopicIndex} 
                              className="group/subtopic flex items-start space-x-3 cursor-pointer hover:bg-blue-50/50 transition-all duration-200 rounded-lg p-3 border border-transparent hover:border-blue-200/50"
                            >
                              <div 
                                className="flex items-center space-x-2 flex-1"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onToggleSubtopic(subtopicId);
                                }}
                              >
                                <div className="mt-0.5 transition-transform duration-200 group-hover/subtopic:scale-110">
                                  {isSubtopicCompleted ? (
                                    <CheckCircle2 className="w-4 h-4 text-blue-500 drop-shadow-sm" />
                                  ) : (
                                    <Circle className="w-4 h-4 text-gray-300 group-hover/subtopic:text-blue-400 transition-colors" />
                                  )}
                                </div>
                                <span className={`text-sm font-medium transition-all duration-200 ${
                                  isSubtopicCompleted 
                                    ? 'text-blue-700 line-through opacity-75' 
                                    : 'text-gray-700 group-hover/subtopic:text-blue-600'
                                }`}>
                                  {subtopic}
                                </span>
                              </div>
                              <SubtopicInfoPopup 
                                subtopic={subtopic} 
                                topicTitle={topic.title}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
