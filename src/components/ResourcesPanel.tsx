
import React from 'react';
import { ExternalLink, Book, Video, Users, Code, Zap, Award, Target, Globe } from 'lucide-react';

export const ResourcesPanel: React.FC = () => {
  const resourceCategories = [
    {
      category: 'Learning Platforms & Courses',
      icon: Book,
      color: 'text-blue-600',
      bgColor: 'hover:bg-blue-50',
      borderColor: 'hover:border-blue-300',
      items: [
        { name: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', description: 'Comprehensive full-stack curriculum with certifications' },
        { name: 'The Odin Project', url: 'https://www.theodinproject.com/', description: 'Open source full-stack web development curriculum' },
        { name: 'CS50x - Harvard', url: 'https://cs50.harvard.edu/x/2024/', description: 'Introduction to Computer Science fundamentals' },
        { name: 'Coursera', url: 'https://www.coursera.org/', description: 'University-level courses and specializations' },
        { name: 'Udemy', url: 'https://www.udemy.com/', description: 'Practical programming courses and projects' },
        { name: 'Pluralsight', url: 'https://www.pluralsight.com/', description: 'Technology skills assessments and learning paths' }
      ]
    },
    {
      category: 'Coding Practice & Algorithms',
      icon: Code,
      color: 'text-green-600',
      bgColor: 'hover:bg-green-50',
      borderColor: 'hover:border-green-300',
      items: [
        { name: 'LeetCode', url: 'https://leetcode.com/', description: 'Algorithmic problems and interview preparation' },
        { name: 'HackerRank', url: 'https://www.hackerrank.com/', description: 'Programming challenges and skill assessments' },
        { name: 'CodeWars', url: 'https://www.codewars.com/', description: 'Coding challenges with community solutions' },
        { name: 'AlgoExpert', url: 'https://www.algoexpert.io/', description: 'Curated algorithmic questions with video explanations' },
        { name: 'Pramp', url: 'https://www.pramp.com/', description: 'Free mock technical interviews with peers' },
        { name: 'InterviewBit', url: 'https://www.interviewbit.com/', description: 'Programming interview preparation platform' }
      ]
    },
    {
      category: 'Development Tools & Platforms',
      icon: Zap,
      color: 'text-purple-600',
      bgColor: 'hover:bg-purple-50',
      borderColor: 'hover:border-purple-300',
      items: [
        { name: 'GitHub', url: 'https://github.com/', description: 'Version control, code hosting, and collaboration' },
        { name: 'CodePen', url: 'https://codepen.io/', description: 'Frontend playground and code sharing' },
        { name: 'Replit', url: 'https://replit.com/', description: 'Online IDE and collaborative coding environment' },
        { name: 'CodeSandbox', url: 'https://codesandbox.io/', description: 'Online code editor for web applications' },
        { name: 'Figma', url: 'https://www.figma.com/', description: 'Design tool for UI/UX and prototyping' },
        { name: 'Postman', url: 'https://www.postman.com/', description: 'API development and testing platform' }
      ]
    },
    {
      category: 'Video Learning & Tutorials',
      icon: Video,
      color: 'text-red-600',
      bgColor: 'hover:bg-red-50',
      borderColor: 'hover:border-red-300',
      items: [
        { name: 'YouTube - Traversy Media', url: 'https://www.youtube.com/@TraversyMedia', description: 'Practical web development tutorials and crash courses' },
        { name: 'YouTube - The Net Ninja', url: 'https://www.youtube.com/@NetNinja', description: 'Modern web development series and frameworks' },
        { name: 'YouTube - Fireship', url: 'https://www.youtube.com/@Fireship', description: 'Quick tech tutorials and programming concepts' },
        { name: 'YouTube - Web Dev Simplified', url: 'https://www.youtube.com/@WebDevSimplified', description: 'Simplified explanations of web development concepts' },
        { name: 'Egghead.io', url: 'https://egghead.io/', description: 'Concise video tutorials for web development' },
        { name: 'Frontend Masters', url: 'https://frontendmasters.com/', description: 'Advanced frontend engineering courses' }
      ]
    },
    {
      category: 'AI/ML Resources & Tools',
      icon: Target,
      color: 'text-orange-600',
      bgColor: 'hover:bg-orange-50',
      borderColor: 'hover:border-orange-300',
      items: [
        { name: 'OpenAI Documentation', url: 'https://platform.openai.com/docs/', description: 'Official OpenAI API documentation and guides' },
        { name: 'Hugging Face', url: 'https://huggingface.co/', description: 'ML models, datasets, and community' },
        { name: 'Kaggle', url: 'https://www.kaggle.com/', description: 'Data science competitions and datasets' },
        { name: 'Papers with Code', url: 'https://paperswithcode.com/', description: 'Latest ML research papers with implementation' },
        { name: 'LangChain Documentation', url: 'https://docs.langchain.com/', description: 'Framework for developing LLM applications' },
        { name: 'Anthropic Claude', url: 'https://console.anthropic.com/', description: 'Claude AI API and documentation' }
      ]
    },
    {
      category: 'Cloud & DevOps Learning',
      icon: Globe,
      color: 'text-indigo-600',
      bgColor: 'hover:bg-indigo-50',
      borderColor: 'hover:border-indigo-300',
      items: [
        { name: 'AWS Free Tier', url: 'https://aws.amazon.com/free/', description: 'Free cloud services for learning and experimentation' },
        { name: 'Google Cloud Skills Boost', url: 'https://www.cloudskillsboost.google/', description: 'Hands-on cloud training and labs' },
        { name: 'Microsoft Learn', url: 'https://learn.microsoft.com/', description: 'Azure and Microsoft technology learning paths' },
        { name: 'Docker Documentation', url: 'https://docs.docker.com/', description: 'Official Docker documentation and tutorials' },
        { name: 'Kubernetes Documentation', url: 'https://kubernetes.io/docs/', description: 'Official Kubernetes documentation and tutorials' },
        { name: 'Terraform Learn', url: 'https://learn.hashicorp.com/terraform/', description: 'Infrastructure as Code tutorials and guides' }
      ]
    },
    {
      category: 'Professional Development',
      icon: Award,
      color: 'text-teal-600',
      bgColor: 'hover:bg-teal-50',
      borderColor: 'hover:border-teal-300',
      items: [
        { name: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning/', description: 'Professional development and technical skills' },
        { name: 'Cracking the Coding Interview', url: 'https://www.crackingthecodinginterview.com/', description: 'Technical interview preparation book and resources' },
        { name: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer/', description: 'Comprehensive system design interview preparation' },
        { name: 'Tech Interview Handbook', url: 'https://www.techinterviewhandbook.org/', description: 'Complete guide to technical interviews' },
        { name: 'Levels.fyi', url: 'https://www.levels.fyi/', description: 'Salary data and career progression insights' },
        { name: 'Blind', url: 'https://www.teamblind.com/', description: 'Anonymous professional network for tech workers' }
      ]
    },
    {
      category: 'Community & Networking',
      icon: Users,
      color: 'text-pink-600',
      bgColor: 'hover:bg-pink-50',
      borderColor: 'hover:border-pink-300',
      items: [
        { name: 'Stack Overflow', url: 'https://stackoverflow.com/', description: 'Q&A community for programming problems' },
        { name: 'Dev.to', url: 'https://dev.to/', description: 'Developer community for sharing knowledge and articles' },
        { name: 'Reddit - r/webdev', url: 'https://www.reddit.com/r/webdev/', description: 'Web development discussions and resources' },
        { name: 'Discord - Reactiflux', url: 'https://discord.gg/reactiflux/', description: 'React and JavaScript community chat' },
        { name: 'Meetup', url: 'https://www.meetup.com/', description: 'Local tech meetups and networking events' },
        { name: 'Hashnode', url: 'https://hashnode.com/', description: 'Developer blogging platform and community' }
      ]
    }
  ];

  return (
    <div className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-gray-200">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-3">
          Comprehensive Learning Resources
        </h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Curated collection of the best resources, tools, and platforms to accelerate your journey to becoming a job-ready software engineer in the AI era
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {resourceCategories.map((category) => {
          const IconComponent = category.icon;
          return (
            <div key={category.category} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-5">
                <div className={`p-2 rounded-lg bg-white shadow-sm`}>
                  <IconComponent className={`w-6 h-6 ${category.color}`} />
                </div>
                <h4 className="font-bold text-lg text-gray-900">{category.category}</h4>
              </div>
              
              <div className="space-y-3">
                {category.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block p-4 rounded-lg border-2 border-gray-200 ${category.bgColor} ${category.borderColor} transition-all duration-200 group bg-white cursor-pointer`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className={`font-semibold text-gray-900 group-hover:${category.color} transition-colors`}>
                          {item.name}
                        </div>
                        <div className="text-sm text-gray-600 mt-1 leading-relaxed">
                          {item.description}
                        </div>
                      </div>
                      <ExternalLink className={`w-4 h-4 text-gray-400 group-hover:${category.color} ml-3 mt-0.5 flex-shrink-0`} />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
        <div className="text-center">
          <h4 className="font-bold text-xl text-gray-900 mb-2">🚀 Pro Tips for Success</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 text-sm">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-blue-600 font-semibold mb-1">📚 Daily Learning</div>
              <div className="text-gray-700">Dedicate 1-2 hours daily to consistent learning and practice</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-green-600 font-semibold mb-1">🛠️ Build Projects</div>
              <div className="text-gray-700">Apply knowledge immediately through hands-on projects</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-purple-600 font-semibold mb-1">🤝 Join Communities</div>
              <div className="text-gray-700">Engage with developer communities for support and networking</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-orange-600 font-semibold mb-1">📝 Document Journey</div>
              <div className="text-gray-700">Keep a learning journal and share your progress</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-red-600 font-semibold mb-1">💪 Practice Coding</div>
              <div className="text-gray-700">Solve algorithmic problems daily to sharpen skills</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-indigo-600 font-semibold mb-1">🎯 Set Goals</div>
              <div className="text-gray-700">Set weekly and monthly learning goals to stay motivated</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
