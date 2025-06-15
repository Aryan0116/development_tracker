
export interface Topic {
  id: string;
  title: string;
  subtopics?: string[];
  practicalExercises?: string[];
  timeEstimate?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface Module {
  id: string;
  title: string;
  duration: string;
  topics: Topic[];
  learningObjectives?: string[];
  prerequisites?: string[];
}

export interface Phase {
  id: number;
  title: string;
  description: string;
  duration: string;
  color: string;
  modules: Module[];
  projects?: string[];
  jobReadinessIndicators?: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  skills: string;
  complexity: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'personal-website',
    title: 'Personal Website/Blog with CMS',
    description: 'Full-featured personal website with blog, portfolio showcase, and admin panel',
    skills: 'Frontend, CMS, SEO, Analytics, Responsive Design',
    complexity: 'Beginner',
    estimatedTime: '2-3 weeks'
  },
  {
    id: 'fullstack-app',
    title: 'Full-Stack E-commerce Platform',
    description: 'Complete e-commerce solution with payment integration, inventory management, and user roles',
    skills: 'Full-Stack, Database Design, Payment APIs, Authentication, Admin Dashboard',
    complexity: 'Intermediate',
    estimatedTime: '4-6 weeks'
  },
  {
    id: 'ai-powered-app',
    title: 'AI-Powered Code Review Assistant',
    description: 'Tool that analyzes code repositories and provides intelligent feedback using LLMs',
    skills: 'AI/ML, LLM Integration, Code Analysis, RAG, Vector Databases',
    complexity: 'Advanced',
    estimatedTime: '3-4 weeks'
  },
  {
    id: 'microservices-system',
    title: 'Microservices Social Media Platform',
    description: 'Scalable social media platform with multiple services, message queues, and real-time features',
    skills: 'Microservices, Event-Driven Architecture, WebSockets, Caching, Load Balancing',
    complexity: 'Advanced',
    estimatedTime: '6-8 weeks'
  },
  {
    id: 'open-source',
    title: 'Major Open Source Contribution',
    description: 'Significant contribution to a popular open source project with documentation',
    skills: 'Collaboration, Git Advanced, Code Quality, Community Engagement',
    complexity: 'Intermediate',
    estimatedTime: '4-6 weeks'
  },
  {
    id: 'system-design',
    title: 'Distributed System Design & Implementation',
    description: 'Design and implement a distributed system with detailed architecture documentation',
    skills: 'System Design, Architecture Patterns, Documentation, Scalability',
    complexity: 'Advanced',
    estimatedTime: '4-5 weeks'
  },
  {
    id: 'devops-project',
    title: 'Complete DevOps Pipeline with Monitoring',
    description: 'End-to-end CI/CD pipeline with Infrastructure as Code, monitoring, and alerting',
    skills: 'DevOps, Kubernetes, Terraform, Monitoring, CI/CD, Security',
    complexity: 'Advanced',
    estimatedTime: '3-4 weeks'
  },
  {
    id: 'mobile-app',
    title: 'Cross-Platform Mobile Application',
    description: 'Full-featured mobile app with offline capabilities and real-time synchronization',
    skills: 'Mobile Development, Offline Storage, Real-time Sync, Push Notifications',
    complexity: 'Intermediate',
    estimatedTime: '5-6 weeks'
  },
  {
    id: 'data-platform',
    title: 'Real-time Data Analytics Platform',
    description: 'Big data processing platform with real-time dashboards and ML predictions',
    skills: 'Big Data, Stream Processing, Analytics, ML Pipeline, Data Visualization',
    complexity: 'Advanced',
    estimatedTime: '6-7 weeks'
  },
  {
    id: 'blockchain-app',
    title: 'Blockchain-based Application',
    description: 'Decentralized application with smart contracts and Web3 integration',
    skills: 'Blockchain, Smart Contracts, Web3, DeFi, Cryptocurrency',
    complexity: 'Advanced',
    estimatedTime: '4-5 weeks'
  }
];

export const phases: Phase[] = [
  {
    id: 1,
    title: 'Programming Fundamentals & Computer Science',
    description: 'Master core programming concepts, data structures, algorithms, and system fundamentals',
    duration: '3-4 months',
    color: 'bg-blue-500',
    jobReadinessIndicators: [
      'Can solve medium-level algorithmic problems',
      'Understands time and space complexity',
      'Proficient in at least two programming languages',
      'Can design and implement basic data structures'
    ],
    modules: [
      {
        id: 'python-mastery',
        title: 'Python Mastery & Software Engineering',
        duration: '6-8 weeks',
        learningObjectives: [
          'Master Python syntax and advanced features',
          'Write clean, maintainable, and tested code',
          'Understand software engineering principles',
          'Build command-line applications'
        ],
        prerequisites: ['Basic programming knowledge (optional)'],
        topics: [
          {
            id: 'core-python',
            title: 'Core Python Programming',
            timeEstimate: '2 weeks',
            difficulty: 'Beginner',
            subtopics: [
              'Variables, data types, and type hints',
              'Control structures (if/else, loops, comprehensions)',
              'Functions, arguments, and scope rules',
              'Error handling and exception hierarchy',
              'File I/O, CSV, JSON processing',
              'String manipulation and regular expressions',
              'Working with dates and time'
            ],
            practicalExercises: [
              'Build a password strength checker',
              'Create a file organizer script',
              'Implement a simple calculator with error handling',
              'Build a log file analyzer'
            ]
          },
          {
            id: 'advanced-python',
            title: 'Advanced Python & OOP',
            timeEstimate: '2 weeks',
            difficulty: 'Intermediate',
            subtopics: [
              'Object-oriented programming (classes, inheritance, polymorphism)',
              'Magic methods and operator overloading',
              'Decorators, context managers, and metaclasses',
              'Generators, iterators, and async/await',
              'Lambda functions and functional programming',
              'Memory management and garbage collection',
              'Python data model and protocols'
            ],
            practicalExercises: [
              'Design a library management system using OOP',
              'Create custom decorators for logging and timing',
              'Implement a async web scraper',
              'Build a simple ORM-like data mapper'
            ]
          },
          {
            id: 'python-ecosystem',
            title: 'Python Ecosystem & Best Practices',
            timeEstimate: '2 weeks',
            difficulty: 'Intermediate',
            subtopics: [
              'Virtual environments (venv, pipenv, poetry)',
              'Package management and dependency resolution',
              'Code formatting (black, isort) and linting (flake8, pylint)',
              'Testing frameworks (pytest, unittest, doctest)',
              'Documentation (docstrings, Sphinx, MkDocs)',
              'Debugging tools and techniques',
              'Performance profiling and optimization',
              'Security best practices'
            ],
            practicalExercises: [
              'Set up a complete Python project with all tools',
              'Write comprehensive tests for a existing codebase',
              'Create API documentation with examples',
              'Profile and optimize a slow Python script'
            ]
          }
        ]
      },
      {
        id: 'javascript-typescript',
        title: 'JavaScript/TypeScript & Web Fundamentals',
        duration: '4-5 weeks',
        learningObjectives: [
          'Master modern JavaScript and TypeScript',
          'Understand web browser APIs and DOM manipulation',
          'Build interactive web applications',
          'Handle asynchronous programming effectively'
        ],
        topics: [
          {
            id: 'js-fundamentals',
            title: 'JavaScript Core Concepts',
            timeEstimate: '1.5 weeks',
            difficulty: 'Beginner',
            subtopics: [
              'Variables, hoisting, and scope (let, const, var)',
              'Data types, type coercion, and equality',
              'Functions, closures, and the `this` keyword',
              'Arrays, objects, and destructuring',
              'DOM manipulation and event handling',
              'Browser APIs (localStorage, fetch, geolocation)',
              'Error handling and debugging techniques'
            ],
            practicalExercises: [
              'Build an interactive todo list with local storage',
              'Create a dynamic image gallery with lazy loading',
              'Implement a simple calculator with history',
              'Build a weather app using geolocation API'
            ]
          },
          {
            id: 'advanced-js',
            title: 'Advanced JavaScript & ES6+',
            timeEstimate: '1.5 weeks',
            difficulty: 'Intermediate',
            subtopics: [
              'ES6+ features (arrow functions, template literals, modules)',
              'Promises, async/await, and error handling',
              'Prototypes, inheritance, and classes',
              'Modules (CommonJS, ES6 modules, dynamic imports)',
              'Regular expressions and string processing',
              'Set, Map, WeakSet, WeakMap collections',
              'Generators, iterators, and symbols',
              'Proxy and Reflect for metaprogramming'
            ],
            practicalExercises: [
              'Implement a Promise-based HTTP client',
              'Create a module bundler from scratch',
              'Build a custom event emitter class',
              'Implement debounce and throttle utilities'
            ]
          },
          {
            id: 'typescript',
            title: 'TypeScript & Static Typing',
            timeEstimate: '2 weeks',
            difficulty: 'Intermediate',
            subtopics: [
              'Type annotations, interfaces, and type aliases',
              'Generics, constraints, and utility types',
              'Union types, intersection types, and type guards',
              'Advanced types (mapped, conditional, template literal)',
              'Decorators and metadata reflection',
              'Module resolution and declaration files',
              'Integration with build tools and linters',
              'Migrating JavaScript projects to TypeScript'
            ],
            practicalExercises: [
              'Convert a JavaScript project to TypeScript',
              'Create a type-safe REST API client',
              'Build a generic data structure library',
              'Implement advanced TypeScript patterns'
            ]
          }
        ]
      },
      {
        id: 'data-structures-algorithms',
        title: 'Data Structures & Algorithms',
        duration: '6-8 weeks',
        learningObjectives: [
          'Master fundamental data structures and algorithms',
          'Analyze time and space complexity',
          'Solve coding interview problems efficiently',
          'Understand algorithmic thinking and problem-solving patterns'
        ],
        topics: [
          {
            id: 'complexity-analysis',
            title: 'Complexity Analysis & Problem Solving',
            timeEstimate: '1 week',
            difficulty: 'Beginner',
            subtopics: [
              'Big O notation and complexity analysis',
              'Time complexity vs space complexity',
              'Best, average, and worst-case scenarios',
              'Amortized analysis and recurrence relations',
              'Problem-solving frameworks and patterns',
              'Code optimization techniques'
            ],
            practicalExercises: [
              'Analyze complexity of common algorithms',
              'Optimize inefficient code snippets',
              'Practice problem-solving methodologies',
              'Compare different algorithm approaches'
            ]
          },
          {
            id: 'linear-data-structures',
            title: 'Linear Data Structures',
            timeEstimate: '2 weeks',
            difficulty: 'Beginner',
            subtopics: [
              'Arrays and dynamic arrays (vectors)',
              'Strings and string manipulation algorithms',
              'Linked lists (singly, doubly, circular)',
              'Stacks and their applications',
              'Queues (simple, circular, priority, deque)',
              'Implementation and optimization techniques'
            ],
            practicalExercises: [
              'Implement all data structures from scratch',
              'Solve array manipulation problems',
              'Build a text editor using stacks',
              'Create a task scheduler with priority queues'
            ]
          },
          {
            id: 'trees-graphs',
            title: 'Trees and Graphs',
            timeEstimate: '2.5 weeks',
            difficulty: 'Intermediate',
            subtopics: [
              'Binary trees and tree traversals',
              'Binary search trees and balanced trees (AVL, Red-Black)',
              'Heaps and heap operations',
              'Tries and suffix trees',
              'Graph representations and traversals (BFS, DFS)',
              'Shortest path algorithms (Dijkstra, Bellman-Ford)',
              'Minimum spanning trees (Kruskal, Prim)',
              'Topological sorting and cycle detection'
            ],
            practicalExercises: [
              'Implement various tree data structures',
              'Build a file system navigator',
              'Create a route planning application',
              'Implement autocomplete with trie'
            ]
          },
          {
            id: 'advanced-algorithms',
            title: 'Advanced Algorithms & Techniques',
            timeEstimate: '2.5 weeks',
            difficulty: 'Advanced',
            subtopics: [
              'Dynamic programming patterns and optimization',
              'Greedy algorithms and proof techniques',
              'Divide and conquer strategies',
              'Backtracking and branch and bound',
              'Bit manipulation and bitwise operations',
              'Sliding window and two-pointer techniques',
              'Hash tables and collision resolution',
              'Advanced sorting algorithms and their applications'
            ],
            practicalExercises: [
              'Solve classic DP problems (knapsack, LCS, etc.)',
              'Implement advanced sorting algorithms',
              'Build a hash table with custom hash functions',
              'Create solutions using multiple algorithmic paradigms'
            ]
          }
        ]
      },
      {
        id: 'system-fundamentals',
        title: 'Computer Systems & Software Engineering',
        duration: '3-4 weeks',
        learningObjectives: [
          'Understand computer systems and operating system concepts',
          'Learn software engineering principles and practices',
          'Master version control and collaboration tools',
          'Understand software development lifecycle'
        ],
        topics: [
          {
            id: 'computer-systems',
            title: 'Computer Systems Fundamentals',
            timeEstimate: '1.5 weeks',
            difficulty: 'Intermediate',
            subtopics: [
              'Computer architecture and memory hierarchy',
              'Operating system concepts (processes, threads, memory)',
              'File systems and I/O operations',
              'Network protocols and socket programming',
              'Concurrency and synchronization primitives',
              'Performance profiling and system monitoring'
            ],
            practicalExercises: [
              'Build a simple shell in Python/C',
              'Implement basic threading examples',
              'Create a client-server socket application',
              'Monitor and optimize system resource usage'
            ]
          },
          {
            id: 'software-engineering',
            title: 'Software Engineering Principles',
            timeEstimate: '1.5 weeks',
            difficulty: 'Intermediate',
            subtopics: [
              'SOLID principles and design patterns',
              'Software architecture patterns (MVC, MVP, MVVM)',
              'Code review practices and pair programming',
              'Testing strategies (unit, integration, e2e)',
              'Refactoring techniques and code smells',
              'Agile methodologies and project management',
              'Documentation and technical writing'
            ],
            practicalExercises: [
              'Refactor legacy code using SOLID principles',
              'Implement common design patterns',
              'Set up automated testing pipeline',
              'Conduct code reviews and write documentation'
            ]
          },
          {
            id: 'dev-tools',
            title: 'Development Tools & Workflow',
            timeEstimate: '1 week',
            difficulty: 'Beginner',
            subtopics: [
              'Git advanced features (rebase, cherry-pick, hooks)',
              'IDE/Editor optimization and extensions',
              'Command line tools and shell scripting',
              'Package managers and dependency management',
              'Build tools and task automation',
              'Debugging techniques and tools'
            ],
            practicalExercises: [
              'Set up a complete development environment',
              'Create Git workflows for team collaboration',
              'Build automation scripts for common tasks',
              'Master debugging tools for your chosen languages'
            ]
          }
        ]
      }
    ],
    projects: [
      'Command-line task manager with file persistence',
      'Web scraper with concurrent processing and error handling',
      'RESTful API with comprehensive testing suite',
      'Algorithm visualization tool with interactive UI',
      'File compression utility using Huffman coding',
      'Simple database engine with B-tree indexing',
      'Network chat application with multiple clients',
      'Code analyzer tool with complexity metrics'
    ]
  },
  {
    id: 2,
    title: 'Full-Stack Web Development',
    description: 'Master modern web development with React, Node.js, databases, and deployment',
    duration: '4-5 months',
    color: 'bg-green-500',
    jobReadinessIndicators: [
      'Can build complete full-stack applications',
      'Understands modern web architecture patterns',
      'Proficient in database design and optimization',
      'Can deploy applications to production environments'
    ],
    modules: [
      {
        id: 'frontend-fundamentals',
        title: 'Frontend Web Development Mastery',
        duration: '6-8 weeks',
        learningObjectives: [
          'Master HTML5, CSS3, and responsive design',
          'Build complex React applications with hooks',
          'Implement state management and routing',
          'Optimize performance and accessibility'
        ],
        topics: [
          {
            id: 'html-css-advanced',
            title: 'Advanced HTML5 & CSS3',
            timeEstimate: '2 weeks',
            difficulty: 'Beginner',
            subtopics: [
              'Semantic HTML5 elements and accessibility (ARIA)',
              'CSS Grid, Flexbox, and modern layout techniques',
              'CSS custom properties and advanced selectors',
              'Responsive design patterns and mobile-first approach',
              'CSS preprocessors (Sass/SCSS) and PostCSS',
              'CSS-in-JS solutions and styled-components',
              'Performance optimization (critical CSS, lazy loading)',
              'Cross-browser compatibility and vendor prefixes'
            ],
            practicalExercises: [
              'Build a complex responsive layout from design mockup',
              'Create reusable CSS component library',
              'Implement dark/light theme switching',
              'Optimize CSS for performance and maintainability'
            ]
          },
          {
            id: 'react-fundamentals',
            title: 'React Core Concepts',
            timeEstimate: '2 weeks',
            difficulty: 'Beginner',
            subtopics: [
              'Components, JSX, and the virtual DOM',
              'Props, state, and unidirectional data flow',
              'Event handling and synthetic events',
              'Conditional rendering and list rendering',
              'Form handling and controlled components',
              'Component lifecycle and cleanup',
              'Error boundaries and error handling'
            ],
            practicalExercises: [
              'Build a complex form with validation',
              'Create a reusable component library',
              'Implement a data table with sorting and filtering',
              'Build an image gallery with modal viewer'
            ]
          },
          {
            id: 'react-advanced',
            title: 'Advanced React & Hooks',
            timeEstimate: '2 weeks',
            difficulty: 'Intermediate',
            subtopics: [
              'React hooks (useState, useEffect, useContext, useReducer)',
              'Custom hooks and hook composition patterns',
              'Performance optimization (React.memo, useMemo, useCallback)',
              'Code splitting and lazy loading with Suspense',
              'Render props and higher-order components',
              'Context API and prop drilling solutions',
              'Testing React components (Jest, React Testing Library)',
              'React DevTools and debugging techniques'
            ],
            practicalExercises: [
              'Build a real-time dashboard with multiple hooks',
              'Create custom hooks for common functionality',
              'Optimize a slow React application',
              'Implement comprehensive component testing'
            ]
          },
          {
            id: 'react-ecosystem',
            title: 'React Ecosystem & Modern Tools',
            timeEstimate: '2 weeks',
            difficulty: 'Intermediate',
            subtopics: [
              'React Router for single-page applications',
              'State management (Context API, Zustand, Redux Toolkit)',
              'Form libraries (React Hook Form, Formik)',
              'Styling solutions (Tailwind CSS, Emotion, Styled Components)',
              'UI component libraries (Material-UI, Ant Design, Chakra UI)',
              'Animation libraries (Framer Motion, React Spring)',
              'Build tools (Vite, Create React App, Webpack)',
              'TypeScript integration and best practices'
            ],
            practicalExercises: [
              'Build a multi-page application with routing',
              'Implement global state management',
              'Create animated UI components',
              'Set up a modern React development environment'
            ]
          }
        ]
      },
      {
        id: 'backend-development',
        title: 'Backend Development & APIs',
        duration: '6-8 weeks',
        learningObjectives: [
          'Build scalable REST and GraphQL APIs',
          'Implement authentication and authorization',
          'Design and optimize databases',
          'Handle real-time communication and background jobs'
        ],
        topics: [
          {
            id: 'nodejs-express',
            title: 'Node.js & Express.js Mastery',
            timeEstimate: '2 weeks',
            difficulty: 'Beginner',
            subtopics: [
              'Node.js runtime, event loop, and non-blocking I/O',
              'Express.js framework and middleware patterns',
              'Routing, parameter handling, and route organization',
              'Error handling and custom error middleware',
              'Request/response processing and data validation',
              'File uploads and static file serving',
              'Security best practices (helmet, CORS, rate limiting)',
              'Environment configuration and secrets management'
            ],
            practicalExercises: [
              'Build a RESTful API for a blog platform',
              'Implement file upload service with validation',
              'Create middleware for logging and authentication',
              'Build API rate limiting and security features'
            ]
          },
          {
            id: 'database-design',
            title: 'Database Design & Management',
            timeEstimate: '2.5 weeks',
            difficulty: 'Intermediate',
            subtopics: [
              'Relational database design and normalization',
              'SQL fundamentals and advanced queries',
              'Database indexing and query optimization',
              'Transactions, ACID properties, and concurrency control',
              'NoSQL databases (MongoDB, Redis) and when to use them',
              'Database migrations and schema versioning',
              'ORM/ODM tools (Prisma, Sequelize, Mongoose)',
              'Database backup, recovery, and replication'
            ],
            practicalExercises: [
              'Design a complex e-commerce database schema',
              'Optimize slow database queries',
              'Implement database migrations system',
              'Build a caching layer with Redis'
            ]
          },
          {
            id: 'api-development',
            title: 'API Design & Development',
            timeEstimate: '2 weeks',
            difficulty: 'Intermediate',
            subtopics: [
              'RESTful API design principles and best practices',
              'HTTP methods, status codes, and headers',
              'API versioning strategies and backwards compatibility',
              'Input validation, sanitization, and error responses',
              'API documentation (OpenAPI/Swagger, Postman)',
              'GraphQL fundamentals and schema design',
              'Real-time APIs (WebSockets, Server-Sent Events)',
              'API testing and monitoring'
            ],
            practicalExercises: [
              'Design and document a complete REST API',
              'Build a GraphQL API with resolvers',
              'Implement real-time chat functionality',
              'Create comprehensive API testing suite'
            ]
          },
          {
            id: 'auth-security',
            title: 'Authentication & Security',
            timeEstimate: '1.5 weeks',
            difficulty: 'Intermediate',
            subtopics: [
              'Authentication strategies (JWT, sessions, OAuth)',
              'Password hashing and security best practices',
              'Role-based access control (RBAC)',
              'API security (HTTPS, CORS, CSRF protection)',
              'Input validation and SQL injection prevention',
              'Rate limiting and DDoS protection',
              'Security headers and content security policy',
              'Vulnerability scanning and security audits'
            ],
            practicalExercises: [
              'Implement complete authentication system',
              'Build role-based permission system',
              'Secure an API against common vulnerabilities',
              'Conduct security audit of existing application'
            ]
          }
        ]
      },
      {
        id: 'fullstack-integration',
        title: 'Full-Stack Integration & Deployment',
        duration: '4 weeks',
        learningObjectives: [
          'Integrate frontend and backend applications',
          'Implement testing strategies for full-stack apps',
          'Deploy applications to production environments',
          'Monitor and maintain production applications'
        ],
        topics: [
          {
            id: 'integration-testing',
            title: 'Testing & Quality Assurance',
            timeEstimate: '2 weeks',
            difficulty: 'Intermediate',
            subtopics: [
              'Unit testing strategies and frameworks',
              'Integration testing for APIs and databases',
              'End-to-end testing with Cypress or Playwright',
              'Test-driven development (TDD) practices',
              'Mocking and stubbing external dependencies',
              'Continuous integration and automated testing',
              'Performance testing and load testing',
              'Code coverage and quality metrics'
            ],
            practicalExercises: [
              'Implement comprehensive testing suite',
              'Set up automated testing pipeline',
              'Write end-to-end tests for user workflows',
              'Conduct performance testing and optimization'
            ]
          },
          {
            id: 'deployment-production',
            title: 'Deployment & Production Management',
            timeEstimate: '2 weeks',
            difficulty: 'Intermediate',
            subtopics: [
              'Cloud platforms (AWS, Google Cloud, Azure basics)',
              'Platform-as-a-Service (Heroku, Vercel, Netlify)',
              'Environment management and configuration',
              'Database deployment and management',
              'SSL certificates and domain configuration',
              'Monitoring and logging (application and infrastructure)',
              'Error tracking and alerting systems',
              'Backup and disaster recovery strategies'
            ],
            practicalExercises: [
              'Deploy full-stack application to cloud platform',
              'Set up production monitoring and alerting',
              'Implement automated backup strategies',
              'Configure custom domain with SSL'
            ]
          }
        ]
      }
    ],
    projects: [
      'Personal portfolio website with admin panel and blog',
      'E-commerce platform with payment integration',
      'Social media application with real-time features',
      'Project management tool with team collaboration',
      'Recipe sharing platform with search and ratings',
      'Event management system with ticketing',
      'Learning management system with video streaming',
      'Real estate platform with map integration'
    ]
  },
  {
    id: 3,
    title: 'DevOps & Cloud Infrastructure',
    description: 'Master containerization, cloud platforms, and deployment automation',
    duration: '3-4 months',
    color: 'bg-purple-500',
    jobReadinessIndicators: [
      'Can containerize and deploy applications',
      'Understands cloud architecture and services',
      'Can implement CI/CD pipelines',
      'Proficient in infrastructure automation'
    ],
    modules: [
      {
        id: 'containerization',
        title: 'Docker & Container Technologies',
        duration: '3-4 weeks',
        learningObjectives: [
          'Master Docker containerization concepts',
          'Build and optimize Docker images',
          'Orchestrate multi-container applications',
          'Implement container security best practices'
        ],
        topics: [
          {
            id: 'docker-fundamentals',
            title: 'Docker Fundamentals',
            timeEstimate: '1.5 weeks',
            difficulty: 'Beginner',
            subtopics: [
              'Container concepts vs virtual machines',
              'Docker architecture and components',
              'Images, containers, and registries',
              'Dockerfile best practices and layer optimization',
              'Volume management and data persistence',
              'Network configuration and port mapping',
              'Docker commands and CLI mastery'
            ],
            practicalExercises: [
              'Containerize existing applications',
              'Build optimized Docker images',
              'Set up development environment with containers',
              'Implement data persistence strategies'
            ]
          },
          {
            id: 'docker-compose',
            title: 'Multi-Container Applications',
            timeEstimate: '1 week',
            difficulty: 'Intermediate',
            subtopics: [
              'Docker Compose configuration and services',
              'Service dependencies and startup order',
              'Environment variables and secrets management',
              'Load balancing and service discovery',
              'Development vs production configurations',
              'Scaling services and resource limits'
            ],
            practicalExercises: [
              'Orchestrate full-stack application with Docker Compose',
              'Implement service scaling and load balancing',
              'Set up development and production environments',
              'Configure service health checks and restart policies'
            ]
          },
          {
            id: 'container-security',
            title: 'Container Security & Optimization',
            timeEstimate: '0.5 weeks',
            difficulty: 'Intermediate',
            subtopics: [
              'Container security best practices',
              'Image vulnerability scanning',
              'User permissions and privilege escalation',
              'Resource constraints and limits',
              'Multi-stage builds and image optimization',
              'Container monitoring and logging'
            ],
            practicalExercises: [
              'Secure containers following best practices',
              'Implement vulnerability scanning pipeline',
              'Optimize images for size and performance',
              'Set up container monitoring and alerting'
            ]
          }
        ]
      },
      {
        id: 'cloud-platforms',
        title: 'Cloud Platforms & Services',
        duration: '4-5 weeks',
        learningObjectives: [
          'Understand major cloud service models',
          'Deploy applications on AWS/Google Cloud/Azure',
          'Implement cloud storage and database solutions',
          'Design for scalability and reliability'
        ],
        topics: [
          {
            id: 'cloud-fundamentals',
            title: 'Cloud Computing Fundamentals',
            timeEstimate: '1 week',
            difficulty: 'Beginner',
            subtopics: [
              'Cloud service models (IaaS, PaaS, SaaS)',
              'Public, private, and hybrid cloud strategies',
              'Cloud pricing models and cost optimization',
              'Service level agreements and compliance',
              'Cloud security shared responsibility model',
              'Multi-cloud and vendor lock-in considerations'
            ],
            practicalExercises: [
              'Compare cloud providers and services',
              'Calculate and optimize cloud costs',
              'Design cloud architecture for different scenarios',
              'Implement cloud security best practices'
            ]
          },
          {
            id: 'aws-services',
            title: 'AWS Core Services',
            timeEstimate: '2 weeks',
            difficulty: 'Intermediate',
            subtopics: [
              'AWS account setup, IAM, and security groups',
              'EC2 instances, auto-scaling, and load balancers',
              'S3 storage, CloudFront CDN, and static hosting',
              'RDS databases and DynamoDB NoSQL',
              'Lambda functions and serverless computing',
              'VPC networking and security configuration',
              'CloudWatch monitoring and logging',
              'Route 53 DNS and domain management'
            ],
            practicalExercises: [
              'Deploy scalable web application on AWS',
              'Set up auto-scaling and load balancing',
              'Implement serverless backend with Lambda',
              'Configure monitoring and alerting systems'
            ]
          },
          {
            id: 'serverless-paas',
            title: 'Serverless & Platform Services',
            timeEstimate: '1.5 weeks',
            difficulty: 'Intermediate',
            subtopics: [
              'Serverless architecture patterns and benefits',
              'Function-as-a-Service (AWS Lambda, Vercel Functions)',
              'API Gateway and serverless HTTP APIs',
              'Database-as-a-Service (Firebase, Supabase, PlanetScale)',
              'Platform-as-a-Service (Heroku, Railway, Render)',
              'Edge computing and CDN services',
              'Serverless monitoring and debugging'
            ],
            practicalExercises: [
              'Build serverless API with multiple functions',
              'Deploy full-stack app on PaaS platform',
              'Implement edge functions for dynamic content',
              'Set up serverless monitoring and logging'
            ]
          },
          {
            id: 'cloud-databases',
            title: 'Cloud Databases & Storage',
            timeEstimate: '0.5 weeks',
            difficulty: 'Intermediate',
            subtopics: [
              'Managed database services and benefits',
              'Database backup and recovery in cloud',
              'Database scaling and performance optimization',
              'Object storage and file management',
              'Data warehousing and analytics services',
              'Database security and access controls'
            ],
            practicalExercises: [
              'Set up managed database with automated backups',
              'Implement database scaling strategies',
              'Configure secure database access',
              'Build data pipeline with cloud services'
            ]
          }
        ]
      },
      {
        id: 'cicd-automation',
        title: 'CI/CD & Automation',
        duration: '3-4 weeks',
        learningObjectives: [
          'Implement automated testing and deployment pipelines',
          'Master Infrastructure as Code concepts',
          'Set up monitoring and observability',
          'Automate operational tasks'
        ],
        topics: [
          {
            id: 'cicd-pipelines',
            title: 'CI/CD Pipeline Implementation',
            timeEstimate: '2 weeks',
            difficulty: 'Intermediate',
            subtopics: [
              'Continuous Integration principles and practices',
              'GitHub Actions workflows and automation',
              'Automated testing in CI pipeline',
              'Build artifact management and versioning',
              'Deployment strategies (blue-green, canary, rolling)',
              'Environment promotion and gating',
              'Pipeline security and secret management',
              'Multi-branch and GitFlow strategies'
            ],
            practicalExercises: [
              'Set up complete CI/CD pipeline for full-stack app',
              'Implement automated testing and quality gates',
              'Configure multi-environment deployment',
              'Set up automated security scanning'
            ]
          },
          {
            id: 'infrastructure-code',
            title: 'Infrastructure as Code',
            timeEstimate: '1.5 weeks',
            difficulty: 'Advanced',
            subtopics: [
              'Infrastructure as Code principles and benefits',
              'Terraform fundamentals and best practices',
              'AWS CloudFormation and ARM templates',
              'Infrastructure versioning and change management',
              'State management and remote backends',
              'Module development and reusability',
              'Infrastructure testing and validation'
            ],
            practicalExercises: [
              'Define infrastructure using Terraform',
              'Create reusable infrastructure modules',
              'Implement infrastructure CI/CD pipeline',
              'Set up multi-environment infrastructure'
            ]
          },
          {
            id: 'monitoring-observability',
            title: 'Monitoring & Observability',
            timeEstimate: '0.5 weeks',
            difficulty: 'Intermediate',
            subtopics: [
              'Application performance monitoring (APM)',
              'Infrastructure monitoring and metrics',
              'Distributed tracing and request correlation',
              'Log aggregation and analysis',
              'Alerting and incident response',
              'SLI/SLO/SLA concepts and implementation',
              'Observability tools and platforms'
            ],
            practicalExercises: [
              'Implement comprehensive monitoring solution',
              'Set up distributed tracing for microservices',
              'Create effective alerting and dashboards',
              'Conduct incident response simulation'
            ]
          }
        ]
      }
    ],
    projects: [
      'Containerized microservices application with Docker Compose',
      'Scalable web application deployed on AWS with auto-scaling',
      'Serverless API with multiple functions and database integration',
      'Complete CI/CD pipeline with automated testing and deployment',
      'Infrastructure as Code setup for multi-environment deployment',
      'Monitoring and observability solution for distributed system',
      'Disaster recovery and backup automation system'
    ]
  },
  {
    id: 4,
    title: 'AI/ML Integration & Modern Development',
    description: 'Master AI/ML fundamentals, LLM integration, and modern development practices',
    duration: '4-5 months',
    color: 'bg-red-500',
    jobReadinessIndicators: [
      'Can integrate AI/ML capabilities into applications',
      'Understands LLM APIs and prompt engineering',
      'Can build AI-powered features and tools',
      'Proficient in modern development frameworks and patterns'
    ],
    modules: [
      {
        id: 'ai-fundamentals',
        title: 'AI/ML Fundamentals & Data Science',
        duration: '4-5 weeks',
        learningObjectives: [
          'Understand machine learning concepts and algorithms',
          'Master data processing and analysis with Python',
          'Implement basic ML models and evaluate performance',
          'Work with neural networks and deep learning'
        ],
        topics: [
          {
            id: 'ml-concepts',
            title: 'Machine Learning Core Concepts',
            timeEstimate: '1.5 weeks',
            difficulty: 'Intermediate',
            subtopics: [
              'Supervised, unsupervised, and reinforcement learning',
              'Training, validation, and test datasets',
              'Overfitting, underfitting, and model generalization',
              'Feature engineering and selection',
              'Model evaluation metrics and cross-validation',
              'Bias-variance tradeoff and regularization',
              'Classification vs regression problems'
            ],
            practicalExercises: [
              'Build and evaluate classification models',
              'Implement regression analysis for prediction',
              'Perform feature engineering on real datasets',
              'Compare different ML algorithms on same problem'
            ]
          },
          {
            id: 'python-ml-stack',
            title: 'Python ML & Data Science Stack',
            timeEstimate: '2 weeks',
            difficulty: 'Intermediate',
            subtopics: [
              'NumPy for numerical computing and array operations',
              'Pandas for data manipulation and analysis',
              'Matplotlib and Seaborn for data visualization',
              'Scikit-learn for traditional machine learning',
              'Jupyter notebooks and interactive development',
              'Data cleaning and preprocessing techniques',
              'Statistical analysis and hypothesis testing',
              'Time series analysis and forecasting'
            ],
            practicalExercises: [
              'Complete data analysis project from raw data to insights',
              'Build ML pipeline with preprocessing and evaluation',
              'Create interactive data visualizations',
              'Implement time series forecasting model'
            ]
          },
          {
            id: 'deep-learning-intro',
            title: 'Deep Learning Introduction',
            timeEstimate: '1.5 weeks',
            difficulty: 'Advanced',
            subtopics: [
              'Neural networks and backpropagation',
              'TensorFlow and PyTorch frameworks',
              'Convolutional Neural Networks (CNNs)',
              'Recurrent Neural Networks (RNNs) and LSTMs',
              'Transfer learning and pre-trained models',
              'Model training optimization and GPU usage',
              'Computer vision and image processing',
              'Natural language processing basics'
            ],
            practicalExercises: [
              'Build image classification model with CNN',
              'Implement text sentiment analysis with RNN',
              'Use transfer learning for custom image recognition',
              'Train models using GPU acceleration'
            ]
          }
        ]
      },
      {
        id: 'llm-integration',
        title: 'LLM Integration & AI-Powered Applications',
        duration: '5-6 weeks',
        learningObjectives: [
          'Master LLM APIs and prompt engineering',
          'Build applications with AI capabilities',
          'Implement RAG and vector search systems',
          'Create AI agents and tool-using systems'
        ],
        topics: [
          {
            id: 'llm-apis',
            title: 'LLM APIs & Prompt Engineering',
            timeEstimate: '2 weeks',
            difficulty: 'Intermediate',
            subtopics: [
              'OpenAI API (GPT-4, GPT-3.5) and pricing models',
              'Anthropic Claude API and other LLM providers',
              'Prompt engineering techniques and best practices',
              'Few-shot learning and in-context learning',
              'Token management and cost optimization strategies',
              'Streaming responses and real-time interactions',
              'Error handling and fallback strategies',
              'Rate limiting and API quota management'
            ],
            practicalExercises: [
              'Build chatbot with advanced conversation management',
              'Create content generation tool with prompt optimization',
              'Implement streaming responses for better UX',
              'Develop cost-efficient LLM application'
            ]
          },
          {
            id: 'vector-databases-rag',
            title: 'Vector Databases & RAG Systems',
            timeEstimate: '2 weeks',
            difficulty: 'Advanced',
            subtopics: [
              'Text embeddings and semantic search',
              'Vector databases (Pinecone, Weaviate, Chroma, Qdrant)',
              'Retrieval-Augmented Generation (RAG) architecture',
              'Document processing and chunking strategies',
              'Similarity search algorithms and optimization',
              'Hybrid search (vector + keyword) implementation',
              'RAG evaluation and quality metrics',
              'Scalable vector search infrastructure'
            ],
            practicalExercises: [
              'Build document Q&A system with RAG',
              'Implement semantic search for knowledge base',
              'Create custom embedding pipeline',
              'Optimize RAG system for accuracy and speed'
            ]
          },
          {
            id: 'ai-agents-tools',
            title: 'AI Agents & Tool Integration',
            timeEstimate: '1.5 weeks',
            difficulty: 'Advanced',
            subtopics: [
              'Function calling and tool use with LLMs',
              'AI agent architectures and decision making',
              'LangChain and LangGraph frameworks',
              'Multi-agent systems and coordination',
              'Tool integration (APIs, databases, web scraping)',
              'Agent memory and conversation persistence',
              'Safety and reliability in AI agents',
              'Evaluation and testing of AI systems'
            ],
            practicalExercises: [
              'Build AI agent with multiple tool integrations',
              'Create multi-agent system for complex tasks',
              'Implement agent with persistent memory',
              'Develop evaluation framework for AI agents'
            ]
          },
          {
            id: 'ai-app-patterns',
            title: 'AI Application Patterns & Production',
            timeEstimate: '0.5 weeks',
            difficulty: 'Advanced',
            subtopics: [
              'AI application architecture patterns',
              'Caching strategies for AI responses',
              'User experience design for AI features',
              'A/B testing AI model performance',
              'Monitoring and observability for AI systems',
              'AI safety and responsible AI practices',
              'Fine-tuning and model customization',
              'Edge deployment and on-device AI'
            ],
            practicalExercises: [
              'Implement production-ready AI application',
              'Set up monitoring for AI system performance',
              'Design user-friendly AI interaction patterns',
              'Conduct A/B testing on AI features'
            ]
          }
        ]
      },
      {
        id: 'modern-frameworks',
        title: 'Modern Development Frameworks & Patterns',
        duration: '4-5 weeks',
        learningObjectives: [
          'Master modern React patterns and Next.js',
          'Understand server-side rendering and static generation',
          'Implement real-time features and WebSocket communication',
          'Build progressive web applications'
        ],
        topics: [
          {
            id: 'nextjs-fullstack',
            title: 'Next.js Full-Stack Development',
            timeEstimate: '2 weeks',
            difficulty: 'Intermediate',
            subtopics: [
              'Next.js App Router and file-based routing',
              'Server-side rendering (SSR) and static generation (SSG)',
              'API routes and serverless functions',
              'Data fetching patterns and caching strategies',
              'Authentication with NextAuth.js',
              'Image optimization and performance',
              'Deployment on Vercel and other platforms',
              'Middleware and edge functions'
            ],
            practicalExercises: [
              'Build full-stack Next.js application with authentication',
              'Implement SSR/SSG for optimal performance',
              'Create API routes with database integration',
              'Deploy optimized Next.js app to production'
            ]
          },
          {
            id: 'realtime-features',
            title: 'Real-Time Applications & WebSockets',
            timeEstimate: '1.5 weeks',
            difficulty: 'Intermediate',
            subtopics: [
              'WebSocket protocol and real-time communication',
              'Socket.io for bidirectional communication',
              'Server-Sent Events (SSE) for live updates',
              'Real-time database synchronization',
              'Scaling real-time applications',
              'Push notifications and service workers',
              'Conflict resolution in real-time collaboration',
              'Real-time monitoring and debugging'
            ],
            practicalExercises: [
              'Build real-time chat application',
              'Create collaborative document editor',
              'Implement live data dashboard',
              'Add real-time notifications to existing app'
            ]
          },
          {
            id: 'pwa-mobile',
            title: 'Progressive Web Apps & Mobile Development',
            timeEstimate: '0.5 weeks',
            difficulty: 'Intermediate',
            subtopics: [
              'Progressive Web App (PWA) concepts and benefits',
              'Service workers and offline functionality',
              'Web app manifests and installation',
              'Push notifications in web applications',
              'Mobile-responsive design patterns',
              'Touch interactions and mobile UX',
              'Performance optimization for mobile',
              'Native mobile development with React Native'
            ],
            practicalExercises: [
              'Convert web app to PWA with offline support',
              'Implement push notifications system',
              'Build mobile-first responsive interface',
              'Create React Native mobile app'
            ]
          }
        ]
      }
    ],
    projects: [
      'AI-powered code review and documentation tool',
      'Smart content management system with automated tagging',
      'Personal AI assistant with tool integration',
      'Document analysis and summarization platform',
      'AI-enhanced project management tool',
      'Intelligent customer support chatbot',
      'Real-time collaborative AI writing tool',
      'Recommendation system for e-commerce platform'
    ]
  },
  {
    id: 5,
    title: 'System Design & Architecture',
    description: 'Master large-scale system design, microservices, and distributed systems',
    duration: '3-4 months',
    color: 'bg-indigo-500',
    jobReadinessIndicators: [
      'Can design scalable distributed systems',
      'Understands microservices architecture patterns',
      'Can handle high-scale system challenges',
      'Proficient in system design interviews'
    ],
    modules: [
      {
        id: 'system-design-fundamentals',
        title: 'System Design Fundamentals',
        duration: '4-5 weeks',
        learningObjectives: [
          'Understand scalability and reliability principles',
          'Master load balancing and caching strategies',
          'Design database architectures for scale',
          'Implement monitoring and observability'
        ],
        topics: [
          {
            id: 'scalability-principles',
            title: 'Scalability & Performance Principles',
            timeEstimate: '1.5 weeks',
            difficulty: 'Advanced',
            subtopics: [
              'Horizontal vs vertical scaling strategies',
              'Load balancing algorithms and implementations',
              'Caching layers (application, database, CDN)',
              'Performance metrics and bottleneck identification',
              'Capacity planning and resource estimation',
              'Auto-scaling strategies and implementation',
              'Performance testing and load generation',
              'Latency vs throughput optimization'
            ],
            practicalExercises: [
              'Design and implement load balancer',
              'Build multi-layer caching system',
              'Conduct performance testing and optimization',
              'Implement auto-scaling for cloud application'
            ]
          },
          {
            id: 'database-architecture',
            title: 'Database Architecture & Scaling',
            timeEstimate: '2 weeks',
            difficulty: 'Advanced',
            subtopics: [
              'Database sharding and partitioning strategies',
              'Master-slave replication and consistency models',
              'CAP theorem and distributed database trade-offs',
              'Database federation and functional partitioning',
              'NoSQL database selection and use cases',
              'ACID vs BASE properties in distributed systems',
              'Data warehousing and analytics architectures',
              'Database migration strategies for scale'
            ],
            practicalExercises: [
              'Implement database sharding strategy',
              'Set up master-slave replication',
              'Design polyglot persistence architecture',
              'Build data pipeline for analytics'
            ]
          },
          {
            id: 'distributed-systems',
            title: 'Distributed Systems Concepts',
            timeEstimate: '1.5 weeks',
            difficulty: 'Advanced',
            subtopics: [
              'Distributed system challenges and trade-offs',
              'Consensus algorithms (Raft, PBFT)',
              'Event sourcing and CQRS patterns',
              'Distributed transactions and saga patterns',
              'Service discovery and registry patterns',
              'Circuit breaker and retry patterns',
              'Eventual consistency and conflict resolution',
              'Distributed system testing strategies'
            ],
            practicalExercises: [
              'Implement consensus algorithm simulation',
              'Build event sourcing system',
              'Create distributed transaction coordinator',
              'Design service discovery mechanism'
            ]
          }
        ]
      },
      {
        id: 'microservices-architecture',
        title: 'Microservices Architecture',
        duration: '4-5 weeks',
        learningObjectives: [
          'Design and implement microservices systems',
          'Master inter-service communication patterns',
          'Implement API gateways and service mesh',
          'Handle data consistency in distributed systems'
        ],
        topics: [
          {
            id: 'microservices-design',
            title: 'Microservices Design Patterns',
            timeEstimate: '2 weeks',
            difficulty: 'Advanced',
            subtopics: [
              'Service decomposition strategies and domain modeling',
              'Database per service pattern',
              'API gateway and backend for frontend patterns',
              'Service mesh architecture and benefits',
              'Inter-service communication (sync vs async)',
              'Data consistency patterns in microservices',
              'Microservices security and authentication',
              'Testing strategies for microservices'
            ],
            practicalExercises: [
              'Decompose monolith into microservices',
              'Implement API gateway with routing',
              'Build service mesh with Istio/Linkerd',
              'Create comprehensive microservices testing suite'
            ]
          },
          {
            id: 'message-queues',
            title: 'Message Queues & Event-Driven Architecture',
            timeEstimate: '2 weeks',
            difficulty: 'Advanced',
            subtopics: [
              'Message queue patterns and implementations',
              'Apache Kafka for event streaming',
              'RabbitMQ for reliable message delivery',
              'Event-driven architecture patterns',
              'Pub/sub messaging and topic design',
              'Message ordering and delivery guarantees',
              'Dead letter queues and error handling',
              'Event sourcing and event store design'
            ],
            practicalExercises: [
              'Build event-driven microservices system',
              'Implement reliable message processing',
              'Create event sourcing architecture',
              'Design real-time event streaming pipeline'
            ]
          },
          {
            id: 'service-communication',
            title: 'Service Communication & Integration',
            timeEstimate: '1 week',
            difficulty: 'Advanced',
            subtopics: [
              'REST API design for microservices',
              'GraphQL federation and schema stitching',
              'gRPC for high-performance communication',
              'Service contracts and API versioning',
              'Integration patterns (aggregator, proxy, etc.)',
              'Asynchronous processing and callbacks',
              'Service documentation and discovery',
              'Contract testing and API governance'
            ],
            practicalExercises: [
              'Implement gRPC services with protocol buffers',
              'Build GraphQL federation setup',
              'Create service contract testing framework',
              'Design comprehensive API documentation system'
            ]
          }
        ]
      },
      {
        id: 'advanced-architecture',
        title: 'Advanced Architecture Patterns',
        duration: '2-3 weeks',
        learningObjectives: [
          'Implement advanced architectural patterns',
          'Design for high availability and disaster recovery',
          'Master security in distributed systems',
          'Understand emerging architecture trends'
        ],
        topics: [
          {
            id: 'advanced-patterns',
            title: 'Advanced Architectural Patterns',
            timeEstimate: '1.5 weeks',
            difficulty: 'Advanced',
            subtopics: [
              'Hexagonal architecture and clean architecture',
              'Domain-driven design (DDD) principles',
              'CQRS with event sourcing implementation',
              'Serverless architecture patterns',
              'Edge computing and CDN strategies',
              'Multi-tenant architecture design',
              'Strangler fig pattern for system migration',
              'Bulkhead pattern for failure isolation'
            ],
            practicalExercises: [
              'Implement hexagonal architecture',
              'Build CQRS system with event sourcing',
              'Design multi-tenant SaaS architecture',
              'Create serverless application architecture'
            ]
          },
          {
            id: 'reliability-security',
            title: 'Reliability & Security Architecture',
            timeEstimate: '1 week',
            difficulty: 'Advanced',
            subtopics: [
              'High availability and disaster recovery design',
              'Chaos engineering and fault injection',
              'Security patterns in distributed systems',
              'Zero-trust architecture principles',
              'Backup and recovery strategies',
              'Incident response and post-mortem analysis',
              'SLI/SLO/SLA design and monitoring',
              'Compliance and auditing in distributed systems'
            ],
            practicalExercises: [
              'Design disaster recovery system',
              'Implement chaos engineering practices',
              'Create zero-trust security architecture',
              'Build comprehensive monitoring and alerting'
            ]
          }
        ]
      }
    ],
    projects: [
      'Scalable e-commerce microservices platform',
      'Real-time analytics and monitoring system',
      'Multi-tenant SaaS platform with advanced architecture',
      'Event-driven order processing system',
      'Distributed file storage system',
      'High-availability chat platform with global distribution',
      'Microservices migration from monolithic application'
    ]
  },
  {
    id: 6,
    title: 'Production Engineering & Advanced DevOps',
    description: 'Master Kubernetes, advanced CI/CD, infrastructure automation, and site reliability engineering',
    duration: '3-4 months',
    color: 'bg-orange-500',
    jobReadinessIndicators: [
      'Can manage production Kubernetes clusters',
      'Proficient in Infrastructure as Code and automation',
      'Understands Site Reliability Engineering practices',
      'Can implement comprehensive monitoring and observability'
    ],
    modules: [
      {
        id: 'kubernetes-mastery',
        title: 'Kubernetes Production Management',
        duration: '5-6 weeks',
        learningObjectives: [
          'Master Kubernetes architecture and operations',
          'Implement advanced Kubernetes patterns',
          'Manage production Kubernetes clusters',
          'Troubleshoot and optimize Kubernetes deployments'
        ],
        topics: [
          {
            id: 'kubernetes-fundamentals',
            title: 'Kubernetes Architecture & Core Concepts',
            timeEstimate: '2 weeks',
            difficulty: 'Intermediate',
            subtopics: [
              'Kubernetes architecture and control plane components',
              'Pods, services, deployments, and replica sets',
              'ConfigMaps, secrets, and environment management',
              'Persistent volumes and storage classes',
              'Kubernetes networking and DNS',
              'Resource management and quality of service',
              'Kubernetes API and custom resources',
              'Cluster administration and node management'
            ],
            practicalExercises: [
              'Set up production-ready Kubernetes cluster',
              'Deploy complex multi-tier application',
              'Implement persistent storage solutions',
              'Configure advanced networking policies'
            ]
          },
          {
            id: 'advanced-kubernetes',
            title: 'Advanced Kubernetes Operations',
            timeEstimate: '2 weeks',
            difficulty: 'Advanced',
            subtopics: [
              'Helm charts and package management',
              'Operators and custom resource definitions',
              'Horizontal Pod Autoscaler and Vertical Pod Autoscaler',
              'Ingress controllers and load balancing',
              'Service mesh integration (Istio, Linkerd)',
              'Multi-cluster management and federation',
              'Kubernetes security and RBAC',
              'Cluster upgrades and maintenance'
            ],
            practicalExercises: [
              'Create complex Helm charts with dependencies',
              'Build custom Kubernetes operator',
              'Implement auto-scaling strategies',
              'Set up service mesh for microservices'
            ]
          },
          {
            id: 'kubernetes-production',
            title: 'Production Kubernetes & Troubleshooting',
            timeEstimate: '2 weeks',
            difficulty: 'Advanced',
            subtopics: [
              'Production monitoring with Prometheus and Grafana',
              'Centralized logging with ELK or Loki stack',
              'Kubernetes troubleshooting methodologies',
              'Performance optimization and resource tuning',
              'Backup and disaster recovery strategies',
              'Security scanning and compliance',
              'Cost optimization and resource management',
              'GitOps workflows with ArgoCD or Flux'
            ],
            practicalExercises: [
              'Implement comprehensive Kubernetes monitoring',
              'Set up centralized logging and alerting',
              'Create disaster recovery procedures',
              'Implement GitOps deployment workflow'
            ]
          }
        ]
      },
      {
        id: 'infrastructure-automation',
        title: 'Infrastructure as Code & Automation',
        duration: '3-4 weeks',
        learningObjectives: [
          'Master Terraform for infrastructure management',
          'Implement advanced CI/CD patterns',
          'Automate infrastructure operations',
          'Design secure and compliant infrastructure'
        ],
        topics: [
          {
            id: 'terraform-advanced',
            title: 'Advanced Terraform & IaC',
            timeEstimate: '2 weeks',
            difficulty: 'Advanced',
            subtopics: [
              'Terraform advanced features and best practices',
              'Module development and registry management',
              'State management and remote backends',
              'Terraform Cloud and enterprise features',
              'Multi-cloud and provider management',
              'Infrastructure testing with Terratest',
              'Policy as Code with Sentinel or OPA',
              'Infrastructure cost management and optimization'
            ],
            practicalExercises: [
              'Build reusable Terraform modules',
              'Implement multi-environment infrastructure',
              'Create infrastructure testing pipeline',
              'Set up policy enforcement for infrastructure'
            ]
          },
          {
            id: 'advanced-cicd',
            title: 'Advanced CI/CD & GitOps',
            timeEstimate: '1.5 weeks',
            difficulty: 'Advanced',
            subtopics: [
              'Advanced GitHub Actions workflows and runners',
              'Pipeline as Code with Jenkins or GitLab CI',
              'GitOps principles and implementation',
              'Progressive delivery and feature flags',
              'Security scanning in CI/CD pipelines',
              'Artifact management and dependency scanning',
              'Multi-cloud deployment strategies',
              'Pipeline optimization and parallelization'
            ],
            practicalExercises: [
              'Implement advanced CI/CD pipeline with security scanning',
              'Set up GitOps deployment with ArgoCD',
              'Create progressive delivery system',
              'Build multi-cloud deployment pipeline'
            ]
          },
          {
            id: 'automation-scripting',
            title: 'Infrastructure Automation & Scripting',
            timeEstimate: '0.5 weeks',
            difficulty: 'Intermediate',
            subtopics: [
              'Infrastructure automation with Ansible',
              'Cloud-native automation tools',
              'Runbook automation and incident response',
              'Infrastructure drift detection and remediation',
              'Automated backup and recovery systems',
              'Cost optimization automation',
              'Compliance automation and reporting',
              'Infrastructure self-healing patterns'
            ],
            practicalExercises: [
              'Build automated infrastructure provisioning system',
              'Create self-healing infrastructure patterns',
              'Implement automated compliance checking',
              'Build cost optimization automation'
            ]
          }
        ]
      },
      {
        id: 'site-reliability-engineering',
        title: 'Site Reliability Engineering (SRE)',
        duration: '2-3 weeks',
        learningObjectives: [
          'Implement SRE principles and practices',
          'Design and implement comprehensive observability',
          'Handle incidents and conduct post-mortems',
          'Build reliable and resilient systems'
        ],
        topics: [
          {
            id: 'sre-principles',
            title: 'SRE Fundamentals & Reliability',
            timeEstimate: '1 week',
            difficulty: 'Advanced',
            subtopics: [
              'SRE principles and service level objectives',
              'Error budgets and reliability mathematics',
              'Toil elimination and automation strategies',
              'Capacity planning and performance engineering',
              'Reliability patterns and anti-patterns',
              'Chaos engineering and fault injection',
              'Load testing and performance validation',
              'Reliability culture and organizational practices'
            ],
            practicalExercises: [
              'Define SLOs and error budgets for services',
              'Implement chaos engineering practices',
              'Build automated capacity planning system',
              'Create reliability dashboard and reporting'
            ]
          },
          {
            id: 'observability-monitoring',
            title: 'Advanced Observability & Monitoring',
            timeEstimate: '1.5 weeks',
            difficulty: 'Advanced',
            subtopics: [
              'Three pillars of observability (metrics, logs, traces)',
              'Distributed tracing with Jaeger or Zipkin',
              'Application performance monitoring (APM)',
              'Custom metrics and business KPIs',
              'Alerting best practices and alert fatigue',
              'Observability as Code practices',
              'Cost-effective monitoring strategies',
              'Observability for microservices and serverless'
            ],
            practicalExercises: [
              'Implement comprehensive observability stack',
              'Set up distributed tracing for microservices',
              'Create effective alerting and on-call procedures',
              'Build custom monitoring and dashboards'
            ]
          },
          {
            id: 'incident-management',
            title: 'Incident Management & Response',
            timeEstimate: '0.5 weeks',
            difficulty: 'Advanced',
            subtopics: [
              'Incident response procedures and playbooks',
              'On-call management and escalation policies',
              'Post-mortem culture and blameless retrospectives',
              'Root cause analysis methodologies',
              'Service level agreements and communication',
              'Disaster recovery testing and procedures',
              'Crisis communication and stakeholder management',
              'Learning from failures and continuous improvement'
            ],
            practicalExercises: [
              'Create comprehensive incident response playbook',
              'Conduct disaster recovery simulation',
              'Perform post-mortem analysis and documentation',
              'Build incident management and communication system'
            ]
          }
        ]
      }
    ],
    projects: [
      'Production Kubernetes cluster with full monitoring stack',
      'Complete Infrastructure as Code setup for multi-environment deployment',
      'Advanced CI/CD pipeline with security scanning and GitOps',
      'Site reliability engineering implementation for microservices platform',
      'Disaster recovery and business continuity system',
      'Cost optimization and resource management automation',
      'Comprehensive observability and monitoring solution'
    ]
  },
  {
    id: 7,
    title: 'Specialization & Career Readiness',
    description: 'Choose specialization path, prepare for interviews, and build professional portfolio',
    duration: 'Ongoing (2-6 months)',
    color: 'bg-pink-500',
    jobReadinessIndicators: [
      'Have chosen and excelled in a specialization path',
      'Can pass technical interviews for senior positions',
      'Have built impressive portfolio of projects',
      'Understand industry trends and emerging technologies'
    ],
    modules: [
      {
        id: 'specialization-paths',
        title: 'Choose Your Specialization Path',
        duration: 'Ongoing',
        learningObjectives: [
          'Deep dive into chosen specialization area',
          'Build expertise in specific domain',
          'Stay current with industry trends',
          'Contribute to community and open source'
        ],
        topics: [
          {
            id: 'ai-ml-engineering',
            title: 'AI/ML Engineering Specialization',
            timeEstimate: 'Ongoing',
            difficulty: 'Advanced',
            subtopics: [
              'Advanced deep learning with TensorFlow/PyTorch',
              'MLOps with MLflow, Kubeflow, and model serving',
              'Large language model fine-tuning and deployment',
              'Computer vision and NLP specialization tracks',
              'ML system design and scalable inference',
              'Data engineering and feature stores',
              'ML monitoring and model governance',
              'Research and staying current with AI developments'
            ],
            practicalExercises: [
              'Build end-to-end ML platform',
              'Fine-tune and deploy custom LLM',
              'Create computer vision or NLP application',
              'Implement MLOps pipeline with monitoring'
            ]
          },
          {
            id: 'platform-devops-engineering',
            title: 'Platform/DevOps Engineering Specialization',
            timeEstimate: 'Ongoing',
            difficulty: 'Advanced',
            subtopics: [
              'Advanced Kubernetes and container orchestration',
              'Cloud architecture and multi-cloud strategies',
              'Infrastructure automation and policy as code',
              'Security and compliance automation',
              'Site reliability engineering practices',
              'Developer experience and platform engineering',
              'Cost optimization and resource management',
              'Emerging DevOps tools and practices'
            ],
            practicalExercises: [
              'Build internal developer platform',
              'Implement advanced security automation',
              'Create multi-cloud deployment strategy',
              'Build comprehensive SRE practices'
            ]
          },
          {
            id: 'fullstack-ai-development',
            title: 'Full-Stack AI Development Specialization',
            timeEstimate: 'Ongoing',
            difficulty: 'Advanced',
            subtopics: [
              'Advanced React patterns and Next.js applications',
              'Mobile development with React Native or Flutter',
              'Real-time applications and WebSocket architecture',
              'Progressive web apps and offline functionality',
              'AI integration patterns and user experience',
              'Performance optimization and scalability',
              'Modern frontend architecture patterns',
              'Cross-platform development strategies'
            ],
            practicalExercises: [
              'Build complex full-stack AI application',
              'Create cross-platform mobile app',
              'Implement real-time collaborative features',
              'Build high-performance web application'
            ]
          },
          {
            id: 'system-architecture',
            title: 'System Architecture Specialization',
            timeEstimate: 'Ongoing',
            difficulty: 'Advanced',
            subtopics: [
              'Large-scale system design and architecture',
              'Distributed systems and consensus algorithms',
              'High-performance computing and optimization',
              'Database architecture and data modeling',
              'Security architecture and threat modeling',
              'Scalability patterns and performance engineering',
              'Technology leadership and decision making',
              'Architecture documentation and communication'
            ],
            practicalExercises: [
              'Design large-scale distributed system',
              'Build high-performance data processing system',
              'Create comprehensive architecture documentation',
              'Lead technical architecture decisions'
            ]
          }
        ]
      },
      {
        id: 'interview-preparation',
        title: 'Technical Interview Mastery',
        duration: '2-3 months',
        learningObjectives: [
          'Master coding interview problems and patterns',
          'Excel at system design interviews',
          'Prepare for behavioral and leadership interviews',
          'Build strong interview communication skills'
        ],
        topics: [
          {
            id: 'coding-interviews',
            title: 'Coding Interview Preparation',
            timeEstimate: '6-8 weeks',
            difficulty: 'Advanced',
            subtopics: [
              'LeetCode patterns and problem-solving strategies',
              'Data structures and algorithms interview questions',
              'Dynamic programming and optimization problems',
              'Tree and graph traversal interview questions',
              'String manipulation and array problems',
              'Time and space complexity analysis',
              'Code optimization and clean code practices',
              'Mock interview practice and feedback'
            ],
            practicalExercises: [
              'Solve 200+ LeetCode problems across all categories',
              'Practice mock interviews with peers',
              'Time-boxed coding challenges',
              'Code review and optimization exercises'
            ]
          },
          {
            id: 'system-design-interviews',
            title: 'System Design Interview Mastery',
            timeEstimate: '4-6 weeks',
            difficulty: 'Advanced',
            subtopics: [
              'System design interview framework and approach',
              'Scalable system architecture patterns',
              'Database design and data modeling for scale',
              'Caching strategies and performance optimization',
              'Load balancing and distributed system concepts',
              'Real-world system design examples (Twitter, Uber, etc.)',
              'Trade-offs and decision-making in system design',
              'Communication and presentation skills'
            ],
            practicalExercises: [
              'Practice 20+ system design problems',
              'Present system designs to peers',
              'Analyze real-world system architectures',
              'Mock system design interviews'
            ]
          },
          {
            id: 'behavioral-interviews',
            title: 'Behavioral & Leadership Interviews',
            timeEstimate: '2-3 weeks',
            difficulty: 'Intermediate',
            subtopics: [
              'STAR method for behavioral questions',
              'Leadership and conflict resolution examples',
              'Technical decision-making and trade-offs',
              'Project management and team collaboration',
              'Learning from failures and growth mindset',
              'Company research and culture fit',
              'Salary negotiation and offer evaluation',
              'Personal branding and career storytelling'
            ],
            practicalExercises: [
              'Prepare STAR stories for common questions',
              'Practice behavioral interviews',
              'Research target companies and roles',
              'Develop personal brand and narrative'
            ]
          }
        ]
      },
      {
        id: 'professional-development',
        title: 'Professional Portfolio & Networking',
        duration: 'Ongoing',
        learningObjectives: [
          'Build impressive professional portfolio',
          'Establish strong professional network',
          'Contribute to open source and community',
          'Develop thought leadership and personal brand'
        ],
        topics: [
          {
            id: 'portfolio-building',
            title: 'Professional Portfolio Development',
            timeEstimate: 'Ongoing',
            difficulty: 'Intermediate',
            subtopics: [
              'GitHub portfolio optimization and showcasing',
              'Technical blog writing and content creation',
              'Conference speaking and presentation skills',
              'Open source contribution strategies',
              'Personal website and professional branding',
              'Case study documentation and storytelling',
              'Video content and tutorial creation',
              'Professional photography and presentation'
            ],
            practicalExercises: [
              'Create comprehensive GitHub portfolio',
              'Write technical blog posts regularly',
              'Contribute to major open source projects',
              'Speak at conferences or meetups'
            ]
          },
          {
            id: 'networking-community',
            title: 'Professional Networking & Community',
            timeEstimate: 'Ongoing',
            difficulty: 'Beginner',
            subtopics: [
              'LinkedIn optimization and professional networking',
              'Twitter/X presence and tech community engagement',
              'Local meetups and conference participation',
              'Mentoring and knowledge sharing',
              'Industry connections and relationship building',
              'Personal brand development and consistency',
              'Content creation and thought leadership',
              'Community building and leadership'
            ],
            practicalExercises: [
              'Build strong LinkedIn and social media presence',
              'Attend and present at technical meetups',
              'Mentor junior developers or contribute to education',
              'Build relationships with industry professionals'
            ]
          },
          {
            id: 'career-advancement',
            title: 'Career Strategy & Advancement',
            timeEstimate: 'Ongoing',
            difficulty: 'Intermediate',
            subtopics: [
              'Career path planning and goal setting',
              'Skill gap analysis and continuous learning',
              'Performance review and promotion strategies',
              'Technical leadership development',
              'Entrepreneurship and startup considerations',
              'Remote work and global opportunities',
              'Industry trend analysis and adaptation',
              'Work-life balance and sustainable growth'
            ],
            practicalExercises: [
              'Create 5-year career development plan',
              'Set up continuous learning and skill development',
              'Seek leadership opportunities and responsibilities',
              'Build network of mentors and industry contacts'
            ]
          }
        ]
      }
    ],
    projects: [
      'Advanced specialization project showcasing expertise',
      'Open source contribution with significant impact',
      'Technical blog series or tutorial content',
      'Conference presentation or workshop',
      'Mentorship program or educational content',
      'Industry consulting or freelance project',
      'Startup or entrepreneurial venture',
      'Research project or technical innovation'
    ]
  }
];
