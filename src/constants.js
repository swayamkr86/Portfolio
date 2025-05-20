// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";
import daisyUI from "./assets/tech_logo/daisyUI.png";
import thunderClient from "./assets/tech_logo/thunderClient.png";
import render from "./assets/tech_logo/render.png";
import jwt from "./assets/tech_logo/jwt.png";
import Cloudinary from "./assets/tech_logo/Cloudinary.png";

// Experience Section Logo's
import CognifyzLogo from "./assets/company_logo/Cognifyz_logo.png";

// Education Section Logo's
import KV_logo from "./assets/education_logo/KV_logo.png";
import BVP_logo from "./assets/education_logo/BVP_logo.png";

// Project Section Logo's
import airbnb from "./assets/work_logo/airbnb.png";
import bookStore from "./assets/work_logo/bookStore.png";
import Myntra from "./assets/work_logo/Myntra.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      // { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      // { name: "Angular", logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      // { name: "GSAP", logo: gsapLogo },
      // { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "daisyUI", logo: daisyUI },
    ],
  },
  {
    title: "Backend",
    skills: [
      // { name: "Springboot", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      // { name: "Firebase", logo: firebaseLogo },
      // { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      // { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      // { name: "C-Sharp", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      // { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Thunder Client", logo: thunderClient },
      { name: "Render", logo: render },
      { name: "JWT", logo: jwt },
      { name: "Cloudinary", logo: Cloudinary },
      // { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: CognifyzLogo,
    role: "Fullstack Developer",
    company: "Cognifyz Technologies",
    date: "July 2024 - August 2024",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Express JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: BVP_logo,
    school: "Bharati Vidyapeeth Deemed University",
    date: "Sept 2021 - Aug 2025",
    // grade: "73.2%",
    desc: "I am pursuing my Bachelor's degree (B.Tech) in Computer Science and Engineering from Deemed University, Pune. During my time, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at Deemed University has been instrumental in shaping my technical abilities and professional growth.",
    degree:
      "Bachelor of Technology - B.Tech in Computer Science and Engineering (CSE)",
  },
  {
    id: 1,
    img: KV_logo,
    school: "Kendriya Vidyalaya No.1 AFS Pune",
    date: "Apr 2020 - March 2021",
    // grade: "67.4%",
    desc: "I completed my class 12 education from Kendriya Vidyalaya, Pune, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: KV_logo,
    school: "Kendriya Vidyalaya No.1 AFS Pune",
    date: "Apr 2018 - March 2019",
    // grade: "74%",
    desc: "I completed my class 10 education from Kendriya Vidyalaya, Pune, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "Smart House Rental Platform",
    description:
      "It is a full-stack house renting web application built with the MERN stack (MongoDB, Express.js, React, Node.js). It features user authentication, form validation, property listings, and a seamless booking experience for both renters and landlords.",
    image: airbnb,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node.js",
      "Express",
      "API",
      "Tailwind CSS",
      "MongoDB",
      "NPM",
      "Validation",
      "JWT",
    ],
    github: "https://github.com/swayamkr86/Airbnb",
    webapp: "https://airbnb-x5ai.onrender.com",
  },
  {
    id: 1,
    title: "Your Online Bookstore",
    description:
      "It is a MERN stack-powered online bookstore that offers a smooth browsing and purchasing experience. With robust form validation, user authentication, it provides a secure and user-friendly platform for book lovers and sellers alike.",
    image: bookStore,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node.js",
      "Express",
      "API",
      "DaisyUI",
      "MongoDB",
      "NPM",
      "Validation",
    ],
    github: "https://github.com/swayamkr86/bookStore",
    webapp: "https://bookstore-13nr.onrender.com",
  },
  {
    id: 2,
    title: "Trendy Clothing Store",
    description:
      "It is a sleek and responsive clothing website developed using React, Bootstrap, Node.js, and Express.js. It features intuitive navigation, delivering a smooth and stylish shopping experience for fashion-forward users.",
    image: Myntra,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node.js",
      "Express",
      "API",
      "Bootstrap",
    ],
    github: "https://github.com/swayamkr86/Myntra-React",
    webapp: "https://myntra-react.onrender.com",
  },
];
