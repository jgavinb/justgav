import {
  python,
  r,
  sql,
  git,
  weatherpedia,
  termpw,
  payloadmaster,
  postgresql,
  tableau,
  powerbi,
  mhft,
  sketcher,
  syneos,
  CompileVortex,
  artemis,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Python", icon: python },
  { title: "R", icon: r },
  { title: "SQL", icon: sql },
];

export const technologies = [
  { name: "PostgreSQL", icon: postgresql },
  { name: "Tableau", icon: tableau },
  { name: "Power BI", icon: powerbi },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Data Scientist, Communications Lead",
    company_name: "Artemis Health",
    icon: artemis,
    iconBg: "#161329",
    date: "Sep 2024 - Current",
    points: [
      "Performing data engineering on a billion-row dataset in PostgreSQL, employing SQL optimizations, indexing, and partitioning for faster queries and efficent data handling.",
      "Developing an ensemble of anomaly detection and unsupervised learning algorithms to identify, categorize, and score data quality issues within third-party vendor datasets.",
      "Creating comprehensive data quality dashboards in Python, providing real-time, actionable interventions based on root-cause analysis to assist the client's data operations team in improving data quality.",
      "Collaborating with stakeholders to define the scope of work including key quality indicators, aligning the project with broader data governance objectives and existing company infrastructure.",
    ],
  },
  {
    title: "Application Security Intern",
    company_name: "Syneos Health",
    icon: syneos,
    iconBg: "#161329",
    date: "Dec 2022 - Jan 2024",
    points: [
      "Enhanced CI/CD pipeline efficiency by integrating code-scanning tools and providing guidance to development leads on tool implementation to proactively identify and mitigate security vulnerabilities early in the development process.",
      "Improved decision-making and security practices by communicating code scan results to stakeholders and development teams, facilitating timely, data-driven actions to address critical findings and reduce potential risks.",
      "Strengthened legal and privacy standards by implementing a 'Shift left' approach within the Software Development Lifecycle, ensuring compliance with national and international regulations and minimizing compliance-related risks across projects.",
    ],
  },
  {
    title: "Solution Architect Intern",
    company_name: "Syneos Health",
    icon: syneos,
    iconBg: "#161329",
    date: "May 2022 - Dec 2022",
    points: [
      "Increased data accuracy and visibility of project progress by developing and managing PowerBI dashboards with automated data pipelines, providing the Enterprise Architecture team and upper management with real-time metrics on data transfer from the existing Change Management Database to LeanIX.",
      "Enhanced productivity and efficiency of the Architecture Review Board by creating key performance indicator dashboards with automated data pipelines, enabling Syneos Health to track performance and effectively identify areas for process improvement.",
    ],
  },
];

export const projects = [
  {
    name: "WeatherPedia",
    description:
      "Web-based platform that allows users to access weather information for their location by entering it in the search field",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
      { name: "Weather API by API Ninjas", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
  {
    name: "Terminal Like Portfolio Website",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/lohitkolluri/lohitkolluri.github.io",
  },
  {
    name: "Mental Health Fitness Tracker",
    description:
      "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://github.com/lohitkolluri/mental_health_fitness_tracker",
  },
  {
    name: "PayloadMaster",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "shell", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/lohitkolluri/PayloadMaster",
  },
  {
    name: "CompileVortex",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/lohitkolluri/CompileVortex",
  },
  {
    name: "Sketcher",
    description:
      "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],

    image: sketcher,
    source_code_link: "https://github.com/lohitkolluri/Image_to_Pencil_Sketch_App",
  },
];
