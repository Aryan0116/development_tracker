
import React from 'react';
import { Trophy, Target, BookOpen, Rocket, TrendingUp, Star } from 'lucide-react';
import { Phase, PortfolioProject } from '../data/syllabusData';

interface ProgressOverviewProps {
  phases: Phase[];
  completedModules: string[];
  portfolioProjects: PortfolioProject[];
  completedProjects: string[];
  completedSubtopics: string[];
  onToggleProject: (projectId: string) => void;
}

export const ProgressOverview: React.FC<ProgressOverviewProps> = ({
  phases,
  completedModules,
  portfolioProjects,
  completedProjects,
  completedSubtopics,
  onToggleProject
}) => {
  const totalModules = phases.reduce((count, phase) => 
    count + phase.modules.reduce((moduleCount, module) => 
      moduleCount + module.topics.length, 0
    ), 0
  );
  
  const completedCount = completedModules.length;
  const overallProgress = totalModules > 0 ? (completedCount / totalModules) * 100 : 0;

  return (
    <div className="space-y-8">
      {/* Enhanced Overall Progress */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-32 translate-x-32 opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-emerald-100 to-teal-100 rounded-full translate-y-24 -translate-x-24 opacity-30"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 space-y-4 lg:space-y-0">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Your Learning Journey</h2>
              </div>
              <p className="text-lg text-gray-600 max-w-2xl">
                Track your progress through the comprehensive AI Era Development curriculum
              </p>
            </div>
            <div className="text-center lg:text-right space-y-2">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {Math.round(overallProgress)}%
              </div>
              <div className="text-sm text-gray-500 font-medium">
                {completedCount} of {totalModules} modules completed
              </div>
              <div className="flex items-center justify-center lg:justify-end space-x-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${
                      i < Math.floor(overallProgress / 20) 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-300'
                    } transition-colors duration-300`} 
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-4 mb-6 shadow-inner">
            <div 
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 h-4 rounded-full transition-all duration-1000 ease-out shadow-lg relative overflow-hidden"
              style={{ width: `${overallProgress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 animate-pulse"></div>
            </div>
          </div>

          {/* Enhanced Phase Progress Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {phases.map((phase, index) => {
              const phaseModuleCount = phase.modules.reduce((count, module) => count + module.topics.length, 0);
              const phaseCompletedCount = phase.modules.reduce((count, module) => 
                count + module.topics.filter(topic => completedModules.includes(topic.id)).length, 0
              );
              const phaseProgress = phaseModuleCount > 0 ? (phaseCompletedCount / phaseModuleCount) * 100 : 0;

              return (
                <div 
                  key={phase.id} 
                  className="group bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm ${phase.color} shadow-md group-hover:scale-110 transition-transform duration-200`}>
                        {phase.id}
                      </div>
                      <span className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                        Phase {phase.id}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                      {Math.round(phaseProgress)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-3 shadow-inner">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${phase.color} shadow-sm`}
                      style={{ width: `${phaseProgress}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-600 font-medium">
                    {phaseCompletedCount}/{phaseModuleCount} topics completed
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enhanced Portfolio Projects */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -translate-y-16 -translate-x-16 opacity-40"></div>
        
        <div className="relative z-10">
          <div className="flex items-center space-x-4 mb-8">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Portfolio Projects</h3>
              <p className="text-gray-600 mt-1">Build these projects to showcase your skills to employers</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioProjects.map((project, index) => {
              const isCompleted = completedProjects.includes(project.id);
              return (
                <div 
                  key={project.id}
                  className={`group relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in ${
                    isCompleted 
                      ? 'border-emerald-300 bg-gradient-to-br from-emerald-50 to-green-50 hover:border-emerald-400 shadow-emerald-100' 
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-gray-100'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => onToggleProject(project.id)}
                >
                  {/* Completion badge */}
                  {isCompleted && (
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <Trophy className="w-4 h-4 text-white" />
                    </div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg transition-all duration-200 group-hover:scale-110 ${
                      isCompleted 
                        ? 'bg-emerald-100' 
                        : 'bg-gray-100 group-hover:bg-blue-100'
                    }`}>
                      {isCompleted ? (
                        <Trophy className="w-6 h-6 text-emerald-600" />
                      ) : (
                        <Target className="w-6 h-6 text-gray-500 group-hover:text-blue-600 transition-colors" />
                      )}
                    </div>
                    <div className="flex-1 space-y-3">
                      <h4 className={`font-bold text-lg transition-colors ${
                        isCompleted ? 'text-emerald-800' : 'text-gray-900 group-hover:text-blue-700'
                      }`}>
                        {project.title}
                      </h4>
                      <p className={`text-sm leading-relaxed ${
                        isCompleted ? 'text-emerald-700' : 'text-gray-600'
                      }`}>
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.split(', ').map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className={`text-xs px-3 py-1 rounded-full font-medium transition-colors ${
                              isCompleted 
                                ? 'bg-emerald-200 text-emerald-800' 
                                : 'bg-gray-200 text-gray-700 group-hover:bg-blue-100 group-hover:text-blue-800'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
