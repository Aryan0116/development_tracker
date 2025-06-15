import React from 'react';
import { Info, ExternalLink, BookOpen, Code, Target } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

interface SubtopicInfoPopupProps {
  subtopic: string;
  topicTitle: string;
}

export const SubtopicInfoPopup: React.FC<SubtopicInfoPopupProps> = ({ 
  subtopic, 
  topicTitle 
}) => {
  // Generate real resources based on subtopic and topic context
  const getSubtopicInfo = (subtopic: string, topicTitle: string) => {
    const lowerSubtopic = subtopic.toLowerCase();
    const lowerTopicTitle = topicTitle.toLowerCase();
    const combinedText = `${lowerSubtopic} ${lowerTopicTitle}`;
    
    let resources = [];
    let description = `Learn ${subtopic} concepts and practical implementation`;
    let timeEstimate = '2-4 hours';
    let difficulty = 'Intermediate';

    // Python related resources
    if (combinedText.includes('python') || lowerTopicTitle.includes('python')) {
      resources = [
        { title: 'Python Official Documentation', url: 'https://docs.python.org/3/', type: 'docs' },
        { title: 'Python Tutorial - W3Schools', url: 'https://www.w3schools.com/python/', type: 'interactive' },
        { title: 'Python Course - freeCodeCamp', url: 'https://www.freecodecamp.org/learn/scientific-computing-with-python/', type: 'interactive' },
        { title: 'Python for Beginners - Programming with Mosh', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc', type: 'video' }
      ];
    }
    // Data Science & Machine Learning
    else if (combinedText.includes('data science') || combinedText.includes('machine learning') || combinedText.includes('pandas') || combinedText.includes('numpy')) {
      resources = [
        { title: 'Pandas Documentation', url: 'https://pandas.pydata.org/docs/', type: 'docs' },
        { title: 'NumPy Documentation', url: 'https://numpy.org/doc/', type: 'docs' },
        { title: 'Kaggle Learn', url: 'https://www.kaggle.com/learn', type: 'interactive' },
        { title: 'Data Science Course - freeCodeCamp', url: 'https://www.youtube.com/watch?v=ua-CiDNNj30', type: 'video' }
      ];
    }
    // AI & ChatGPT specific
    else if (combinedText.includes('ai') || combinedText.includes('chatgpt') || combinedText.includes('openai') || combinedText.includes('gpt')) {
      resources = [
        { title: 'OpenAI API Documentation', url: 'https://platform.openai.com/docs/introduction', type: 'docs' },
        { title: 'ChatGPT API Guide', url: 'https://platform.openai.com/docs/guides/chat', type: 'docs' },
        { title: 'OpenAI Cookbook', url: 'https://cookbook.openai.com/', type: 'interactive' },
        { title: 'Build AI Apps - freeCodeCamp', url: 'https://www.youtube.com/watch?v=c-g6epk3fFE', type: 'video' }
      ];
    }
    // HTML & CSS related resources
    else if (combinedText.includes('html') || combinedText.includes('semantic') || combinedText.includes('markup')) {
      resources = [
        { title: 'MDN HTML Documentation', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', type: 'docs' },
        { title: 'HTML Tutorial - W3Schools', url: 'https://www.w3schools.com/html/', type: 'interactive' },
        { title: 'Semantic HTML Guide', url: 'https://web.dev/learn/html/semantic-html/', type: 'article' },
        { title: 'HTML Crash Course - Traversy Media', url: 'https://www.youtube.com/watch?v=UB1O30fR-EE', type: 'video' }
      ];
    }
    else if (combinedText.includes('css') || combinedText.includes('styling') || combinedText.includes('flexbox') || combinedText.includes('grid')) {
      resources = [
        { title: 'MDN CSS Documentation', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', type: 'docs' },
        { title: 'CSS Grid Garden', url: 'https://cssgridgarden.com/', type: 'interactive' },
        { title: 'Flexbox Froggy', url: 'https://flexboxfroggy.com/', type: 'interactive' },
        { title: 'CSS Complete Course - Kevin Powell', url: 'https://www.youtube.com/watch?v=n4R2E7O-Ngo', type: 'video' }
      ];
    }
    // JavaScript related resources
    else if (combinedText.includes('javascript') || combinedText.includes('js') || combinedText.includes('variables') || combinedText.includes('functions') || combinedText.includes('dom')) {
      resources = [
        { title: 'MDN JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide', type: 'docs' },
        { title: 'JavaScript.info', url: 'https://javascript.info/', type: 'interactive' },
        { title: 'JavaScript Algorithms - freeCodeCamp', url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/', type: 'interactive' },
        { title: 'JavaScript Course - The Net Ninja', url: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET', type: 'video' }
      ];
    }
    // React related resources
    else if (combinedText.includes('react') || combinedText.includes('jsx') || combinedText.includes('components') || combinedText.includes('hooks') || combinedText.includes('state')) {
      resources = [
        { title: 'React Official Documentation', url: 'https://react.dev/', type: 'docs' },
        { title: 'React Tutorial - Interactive', url: 'https://react.dev/learn/tutorial-tic-tac-toe', type: 'interactive' },
        { title: 'React Course - freeCodeCamp', url: 'https://www.freecodecamp.org/learn/front-end-development-libraries/', type: 'interactive' },
        { title: 'React Hooks Course - Ben Awad', url: 'https://www.youtube.com/watch?v=f687hBjwFcM', type: 'video' }
      ];
    }
    // TypeScript resources
    else if (combinedText.includes('typescript') || combinedText.includes('types') || combinedText.includes('interfaces')) {
      resources = [
        { title: 'TypeScript Official Documentation', url: 'https://www.typescriptlang.org/docs/', type: 'docs' },
        { title: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/handbook/intro.html', type: 'docs' },
        { title: 'Learn TypeScript - Codecademy', url: 'https://www.codecademy.com/learn/learn-typescript', type: 'interactive' },
        { title: 'TypeScript Course - Traversy Media', url: 'https://www.youtube.com/watch?v=BCg4U1FzODs', type: 'video' }
      ];
    }
    // Node.js and Backend resources
    else if (combinedText.includes('node') || combinedText.includes('express') || combinedText.includes('backend') || combinedText.includes('api') || combinedText.includes('server')) {
      resources = [
        { title: 'Node.js Official Documentation', url: 'https://nodejs.org/docs/latest/api/', type: 'docs' },
        { title: 'Express.js Guide', url: 'https://expressjs.com/en/guide/routing.html', type: 'docs' },
        { title: 'Node.js Course - freeCodeCamp', url: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/', type: 'interactive' },
        { title: 'Node.js Tutorial - The Net Ninja', url: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDiZLcuD6hH7xDl1Vz', type: 'video' }
      ];
    }
    // Database resources
    else if (combinedText.includes('database') || combinedText.includes('sql') || combinedText.includes('mongodb') || combinedText.includes('mysql') || combinedText.includes('postgresql')) {
      resources = [
        { title: 'SQL Tutorial - W3Schools', url: 'https://www.w3schools.com/sql/', type: 'interactive' },
        { title: 'MongoDB University', url: 'https://university.mongodb.com/', type: 'interactive' },
        { title: 'PostgreSQL Documentation', url: 'https://www.postgresql.org/docs/', type: 'docs' },
        { title: 'Database Design Course - freeCodeCamp', url: 'https://www.youtube.com/watch?v=ztHopE5Wnpc', type: 'video' }
      ];
    }
    // Git and Version Control
    else if (combinedText.includes('git') || combinedText.includes('version control') || combinedText.includes('github') || combinedText.includes('repository')) {
      resources = [
        { title: 'Git Official Documentation', url: 'https://git-scm.com/doc', type: 'docs' },
        { title: 'Learn Git Branching', url: 'https://learngitbranching.js.org/', type: 'interactive' },
        { title: 'GitHub Skills', url: 'https://skills.github.com/', type: 'interactive' },
        { title: 'Git Tutorial - Traversy Media', url: 'https://www.youtube.com/watch?v=SWYqp7iY_Tc', type: 'video' }
      ];
    }
    // Testing resources
    else if (combinedText.includes('testing') || combinedText.includes('jest') || combinedText.includes('cypress') || combinedText.includes('unit test')) {
      resources = [
        { title: 'Jest Documentation', url: 'https://jestjs.io/docs/getting-started', type: 'docs' },
        { title: 'React Testing Library', url: 'https://testing-library.com/docs/react-testing-library/intro/', type: 'docs' },
        { title: 'Cypress Documentation', url: 'https://docs.cypress.io/', type: 'docs' },
        { title: 'JavaScript Testing - freeCodeCamp', url: 'https://www.youtube.com/watch?v=7r4xVDI2vho', type: 'video' }
      ];
    }
    // DevOps and Deployment
    else if (combinedText.includes('deployment') || combinedText.includes('docker') || combinedText.includes('aws') || combinedText.includes('cloud') || combinedText.includes('devops')) {
      resources = [
        { title: 'Docker Documentation', url: 'https://docs.docker.com/get-started/', type: 'docs' },
        { title: 'AWS Documentation', url: 'https://docs.aws.amazon.com/', type: 'docs' },
        { title: 'Netlify Documentation', url: 'https://docs.netlify.com/', type: 'docs' },
        { title: 'DevOps Course - freeCodeCamp', url: 'https://www.youtube.com/watch?v=j5Zsa_eOXeY', type: 'video' }
      ];
    }
    // Mobile Development
    else if (combinedText.includes('mobile') || combinedText.includes('react native') || combinedText.includes('app development')) {
      resources = [
        { title: 'React Native Documentation', url: 'https://reactnative.dev/docs/getting-started', type: 'docs' },
        { title: 'Expo Documentation', url: 'https://docs.expo.dev/', type: 'docs' },
        { title: 'React Native Course - freeCodeCamp', url: 'https://www.freecodecamp.org/news/create-an-app-with-react-native/', type: 'interactive' },
        { title: 'React Native Tutorial - The Net Ninja', url: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ', type: 'video' }
      ];
    }
    // Algorithms and Data Structures
    else if (combinedText.includes('algorithm') || combinedText.includes('data structure') || combinedText.includes('sorting') || combinedText.includes('search')) {
      resources = [
        { title: 'Algorithm Visualizer', url: 'https://algorithm-visualizer.org/', type: 'interactive' },
        { title: 'LeetCode', url: 'https://leetcode.com/', type: 'interactive' },
        { title: 'Algorithms Course - freeCodeCamp', url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/', type: 'interactive' },
        { title: 'Data Structures - mycodeschool', url: 'https://www.youtube.com/playlist?list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P', type: 'video' }
      ];
    }
    // Default fallback resources based on topic title
    else {
      // Try to match by topic title if subtopic doesn't match
      if (lowerTopicTitle.includes('python')) {
        resources = [
          { title: 'Python Official Documentation', url: 'https://docs.python.org/3/', type: 'docs' },
          { title: 'Python Tutorial - Real Python', url: 'https://realpython.com/', type: 'article' },
          { title: 'Python Course - freeCodeCamp', url: 'https://www.freecodecamp.org/learn/scientific-computing-with-python/', type: 'interactive' },
          { title: 'Python Basics - Corey Schafer', url: 'https://www.youtube.com/playlist?list=PL-osiE80TeTskrapNbzXhwoFUiLCjGgY7', type: 'video' }
        ];
      } else if (lowerTopicTitle.includes('web') || lowerTopicTitle.includes('html') || lowerTopicTitle.includes('css')) {
        resources = [
          { title: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/', type: 'docs' },
          { title: 'Web.dev Learn', url: 'https://web.dev/learn/', type: 'interactive' },
          { title: 'freeCodeCamp Web Development', url: 'https://www.freecodecamp.org/learn/responsive-web-design/', type: 'interactive' },
          { title: 'Web Development - Traversy Media', url: 'https://www.youtube.com/c/TraversyMedia', type: 'video' }
        ];
      } else {
        // Generic programming resources
        resources = [
          { title: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/', type: 'docs' },
          { title: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', type: 'interactive' },
          { title: 'Stack Overflow', url: 'https://stackoverflow.com/', type: 'article' },
          { title: 'Programming Tutorials - freeCodeCamp', url: 'https://www.youtube.com/c/Freecodecamp', type: 'video' }
        ];
      }
    }

    // Adjust difficulty and time based on topic complexity
    if (lowerSubtopic.includes('basics') || lowerSubtopic.includes('intro') || lowerSubtopic.includes('fundamentals') || lowerSubtopic.includes('getting started')) {
      difficulty = 'Beginner';
      timeEstimate = '1-2 hours';
    } else if (lowerSubtopic.includes('advanced') || lowerSubtopic.includes('optimization') || lowerSubtopic.includes('architecture') || lowerSubtopic.includes('performance')) {
      difficulty = 'Advanced';
      timeEstimate = '4-8 hours';
    }

    return {
      description,
      learningObjectives: [
        `Understand core ${subtopic} principles`,
        `Implement ${subtopic} in real projects`,
        `Best practices and common patterns`,
        `Debugging and troubleshooting techniques`
      ],
      resources,
      projects: [
        `Build a ${subtopic} demo application`,
        `Create ${subtopic} components library`,
        `Implement ${subtopic} in existing project`
      ],
      timeEstimate,
      difficulty
    };
  };

  const info = getSubtopicInfo(subtopic, topicTitle);

  // ... keep existing code (getResourceIcon function and component JSX)
  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'docs': return <BookOpen className="w-3 h-3" />;
      case 'video': return <ExternalLink className="w-3 h-3" />;
      case 'interactive': return <Code className="w-3 h-3" />;
      default: return <ExternalLink className="w-3 h-3" />;
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="ml-2 p-1 rounded-full hover:bg-blue-100 transition-colors group">
          <Info className="w-3 h-3 text-blue-500 group-hover:text-blue-600" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0 shadow-xl border-0 bg-white/95 backdrop-blur-sm" side="right">
        <div className="p-4 space-y-4">
          {/* Header */}
          <div className="border-b border-gray-100 pb-3">
            <h4 className="font-bold text-gray-900 text-sm">{subtopic}</h4>
            <p className="text-xs text-gray-600 mt-1">Part of: {topicTitle}</p>
            <div className="flex items-center space-x-3 mt-2 text-xs">
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                {info.timeEstimate}
              </span>
              <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">
                {info.difficulty}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-sm text-gray-700 leading-relaxed">{info.description}</p>
          </div>

          {/* Learning Objectives */}
          <div>
            <h5 className="font-semibold text-gray-900 text-sm mb-2 flex items-center">
              <Target className="w-3 h-3 mr-1 text-green-600" />
              Learning Objectives
            </h5>
            <ul className="space-y-1">
              {info.learningObjectives.map((objective, index) => (
                <li key={index} className="text-xs text-gray-600 flex items-start">
                  <span className="w-1 h-1 bg-green-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                  {objective}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="font-semibold text-gray-900 text-sm mb-2 flex items-center">
              <BookOpen className="w-3 h-3 mr-1 text-blue-600" />
              Resources
            </h5>
            <div className="space-y-2">
              {info.resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-xs text-blue-600 hover:text-blue-800 transition-colors hover:bg-blue-50 rounded p-1 -m-1 cursor-pointer"
                >
                  {getResourceIcon(resource.type)}
                  <span className="truncate">{resource.title}</span>
                  <ExternalLink className="w-2 h-2 flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>

          {/* Practice Projects */}
          <div>
            <h5 className="font-semibold text-gray-900 text-sm mb-2 flex items-center">
              <Code className="w-3 h-3 mr-1 text-purple-600" />
              Practice Projects
            </h5>
            <ul className="space-y-1">
              {info.projects.map((project, index) => (
                <li key={index} className="text-xs text-gray-600 flex items-start">
                  <span className="w-1 h-1 bg-purple-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                  {project}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
