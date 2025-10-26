// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Experience Section Logo's
import drdo_logo from './assets/company_logo/drdo_logo.png';
import ibm from './assets/company_logo/ibm.png'


// Project Section Logo's
import aiResumeLogo from './assets/work_logo/aiResumeLogo.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: drdo_logo,
      role: "Research intern ",
      company: "DRDO (Defence Research and Development Organization)",
      date: "June 2025 - July 2025",
      desc: "Developed a predictive maintenance system using Python and ML (Logistic Regression, Random Forest) with over 95% anomaly detection accuracy. Built a real-time dashboard for data visualization and automated log analysis, leveraging data analytics to reduce unexpected system failures by up to 40%.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Machine Learnig",
        "Node JS",
        "Python (Pandas, NumPy, Scikit-learn)",
        "Data Analytics & Visualization (Matplotlib, Dash/Plotly)"
      ],
    },
    {
      id: 1,
      img: ibm,
      role: "Cyber Security Intern",
      company: "IBM Skillsbuild",
      date: "Jan 2025 - Feb 2025",
      desc: "Gained hands-on experience in cybersecurity, covering data privacy, network security, and ethical hacking. Conducted practical exercises in identifying system vulnerabilities, analyzing phishing threats, and performing malware analysis.",
      skills: [
        "Network Security",
        "Ethical Hacking & Vulnerability Assessment",
        "Malware Analysis",
        "Tailwind CSS",
        "Cyber Threat Detection",
        "Data Privacy & Protection",
      ],
    }
  ];
  
  export const education = [
    {
      id: 0,
      school: "NIT Bhopal ",
      date: "Aug 2023 - Apr 2027(Expected)",
      grade: "7.6 CGPA(Till 4th Sem)",
      desc: "I’m pursuing a B.Tech in Mech. Engineering from NIT Bhopal, where I’ve built a strong foundation in programming, software development, and core CS concepts. I’ve studied key subjects like Data Structures, Algorithms, OOP, DBMS, Web Development, and Software Engineering, and actively participated in technical workshops and events that strengthened my practical skills and professional growth.",
      degree: "Bachelor's of Technology - BTech",
    },
    {
      id: 1,
      school: "Jawahar Navodaya Vidyalaya, Chhatarpur (MP)",
      date: "July 2015 - May 2022",
      grade: "90.6%",
      desc: "I completed my class secondry  education (from 6th class to intermediate ) from Jawahar Navodaya Vidyalaya under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: " AI-Resume-Builder",
      description:
      "AI-powered Resume Builder — Generate personalized, ATS-friendly resumes in seconds using AI. Built with React, Node.js ,Tailwind, and OpenAI integration.",
      image: aiResumeLogo,
      tags: ["Frontend: React (Vite) + TailwindCSS", "Backend: Node.js + Express.js", "Database: MongoDB Atlas", "AI Engine: OpenAI API (Gemini Model)", "Image Hosting: ImageKit","Hosting:Vercel"],
      github: "https://github.com/ROHIT-ONGIT/AI-Resume-Builder",
      webapp: "https://ai-resume-builder-0-omlz.vercel.app/",
    },
    {
      id: 1,
      title: "Fiscal-Flow-AI",
      description:
        "A cutting-edge personal finance management platform powered by artificial intelligence, built with Next.js 15, TypeScript, and Google AI Genkit.",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript",'Gemini Ai',],
      github: "https://github.com/ROHIT-ONGIT/fiscal-flow-ai",
      webapp: "https://fiscal-flow-ai.vercel.app/",
    },
    {
      id: 2,
      title: "Breast-Cancer-Detection-using-ML",
      description:
        " In this project i have used various machine learning algorithms to classify breast cancer cells from normal cells . The Accuracy achieved is more than 98%",
      image: movierecLogo,
      tags: ["Python", "Machine Learning", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
      github: "https://github.com/ROHIT-ONGIT/Breast-Cancer-Detection-using-ML",
      webapp: "https://github.com/ROHIT-ONGIT/Breast-Cancer-Detection-using-ML",
    },
  ];  
