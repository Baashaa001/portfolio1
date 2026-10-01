import chatboxImg from '../assets/chatbox.jpg';
import quickshowImg from '../assets/quickshow.jpg';
import spotifyImg from '../assets/spotify.jpg';
import avatarImg from '../assets/avatar.jpg';

export const personalInfo = {
  name: "Manikanda Prabu S",
  shortName: "Manikanda",
  initials: "MP",
  role: "Aspiring MERN Stack Developer",
  email: "prabumanikanda178@gmail.com",
  phone: "+91 82204 37593",
  github: "https://github.com/Baashaa001",
  githubUsername: "Baashaa001",
  location: "Chennai, Tamil Nadu, India",
  avatar: avatarImg,
  heroBio: "Aspiring MERN Stack Developer with a strong foundation in MongoDB, Express.js, React.js, Node.js and JavaScript. Passionate about building responsive, scalable web applications and solving real-world problems.",
  aboutBio: "Aspiring MERN Stack Developer eager to contribute to a dynamic team while continuously learning and improving as a full-stack developer. I enjoy solving real-world problems through clean, efficient, and user-friendly code.",
};

export const techStackRow = [
  { name: "React.js", category: "Frontend", color: "from-cyan-400 to-blue-500", icon: "react" },
  { name: "Node.js", category: "Backend", color: "from-emerald-400 to-green-600", icon: "node" },
  { name: "Express.js", category: "Backend", color: "from-gray-300 to-slate-400", icon: "express" },
  { name: "MongoDB", category: "Database", color: "from-green-500 to-emerald-700", icon: "mongodb" },
  { name: "JavaScript", category: "Language", color: "from-yellow-400 to-amber-500", icon: "js" },
  { name: "Tailwind CSS", category: "Styling", color: "from-sky-400 to-teal-400", icon: "tailwind" },
];

export const stats = [
  { label: "Projects Built", value: "3+", icon: "FolderCode", desc: "Full-stack web applications" },
  { label: "Internship Completed", value: "1", icon: "Briefcase", desc: "Embedded systems & logic" },
  { label: "Technologies Mastered", value: "5+", icon: "Cpu", desc: "MERN core & databases" },
  { label: "Dedication to Learning", value: "100%", icon: "Zap", desc: "Always upskilling" },
];

export const education = {
  degree: "B.E. Electronics and Communication Engineering",
  institution: "Anna University",
  period: "2021 – 2025",
  score: "CGPA: 75.3%",
  description: "Focused on embedded computing, digital electronics, software problem solving, and building engineering foundations.",
};

export const skillColumns = [
  {
    title: "Core & Frontend",
    skills: [
      { name: "JavaScript (ES6+)", percentage: 90, level: "Advanced" },
      { name: "HTML5", percentage: 90, level: "Advanced" },
      { name: "CSS3", percentage: 85, level: "Proficient" },
    ],
  },
  {
    title: "UI & Modern Frameworks",
    skills: [
      { name: "React.js", percentage: 85, level: "Proficient" },
      { name: "Tailwind CSS", percentage: 85, level: "Proficient" },
      { name: "MySQL", percentage: 75, level: "Solid" },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", percentage: 80, level: "Proficient" },
      { name: "Express.js", percentage: 80, level: "Proficient" },
      { name: "MongoDB", percentage: 80, level: "Proficient" },
    ],
  },
];

export const additionalSkills = [
  "Java",
  "Python",
  "Object-Oriented Programming (OOPS)",
  "Data Structures & Algorithms (DSA)",
  "REST APIs",
  "Socket.io",
  "Git & GitHub",
  "Postman",
  "Vite",
  "Responsive Design",
];

export const projects = [
  {
    id: "01",
    title: "ChatBox",
    tagline: "Real-time MERN Chat Application with Socket.io",
    description: "Real-time chat app built with MERN + Socket.io. Instant messaging, live typing indicators, online/offline status, multiple chat rooms, RESTful auth APIs.",
    longDescription: "ChatBox provides seamless instantaneous bidirectional messaging with real-time presence indicators. Users can register securely, join custom chat rooms, exchange live messages, observe typing indicators, and receive real-time updates powered by Socket.io and MongoDB database persistence.",
    image: chatboxImg,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    github: "https://github.com/Baashaa001",
    liveUrl: "https://chat-app-five-blush-kixp4w2zj4.vercel.app/",
    featured: true,
    highlights: [
      "Real-time bidirectional messaging via Socket.io",
      "Instant typing indicator & live online/offline user status",
      "Secure user authentication with JWT & encrypted passwords",
      "Dynamic room creation and persistent message history in MongoDB"
    ]
  },
  {
    id: "02",
    title: "Quick-Show",
    tagline: "Full-Stack Movie Ticket Booking Platform",
    description: "Full-stack movie ticket booking platform with seat selection, admin panel, secure auth, and real-time seat-lock handling to prevent double booking.",
    longDescription: "Quick-Show is an end-to-end cinema reservation platform. It features an interactive auditorium seat map, real-time seat locking to avoid concurrent booking collisions, a comprehensive administration panel for managing movies and showtimes, and automated booking receipts.",
    image: quickshowImg,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    github: "https://github.com/Baashaa001",
    liveUrl: "https://quickshow.vercel.app/",
    featured: true,
    highlights: [
      "Interactive visual theater seat map with real-time status",
      "Concurrency seat-lock algorithm preventing double bookings",
      "Admin dashboard for managing movies, schedules, and theaters",
      "RESTful API architecture with structured error handling"
    ]
  },
  {
    id: "03",
    title: "Spotify Clone",
    tagline: "Responsive Music-Streaming Web UI",
    description: "Responsive music-streaming UI clone built with React + Vite + Tailwind CSS, React Router navigation, component-driven architecture.",
    longDescription: "A high-fidelity music streaming desktop and mobile web player interface modeled after Spotify. Incorporates a dynamic music catalog, responsive sidebar navigation, interactive audio player controls with progress bar, and component-driven modular React architecture.",
    image: spotifyImg,
    tags: ["React.js", "Vite", "Tailwind CSS", "React Router"],
    github: "https://github.com/Baashaa001",
    liveUrl: "https://spotify-ten-lac-91.vercel.app/",
    featured: true,
    highlights: [
      "Pixel-perfect responsive dark music player interface",
      "Fluid routing with React Router for playlists and albums",
      "Modular, reusable component structure with Tailwind styling",
      "Instant page loads powered by Vite bundling"
    ]
  },
];

export const experience = [
  {
    company: "Vector India",
    location: "Perungalathur, Chennai",
    role: "Embedded Systems Intern",
    period: "2024",
    type: "Internship",
    description: "Worked on a Home Automation system using the 8051 microcontroller. Designed and implemented microcontroller-based control logic to automate and monitor household appliances.",
    highlights: [
      "Designed and coded control logic on 8051 microcontroller architecture using Embedded C",
      "Interfaced relay modules and sensors to automate household appliance operations",
      "Tested real-time responsiveness and hardware-software communication reliability"
    ],
  },
];

export const currentlyLearning = [
  { name: "Next.js 14 / App Router", status: "In Progress", icon: "Layers" },
  { name: "TypeScript", status: "Active Learning", icon: "Code2" },
  { name: "Docker & Containerization", status: "Exploring", icon: "Box" },
  { name: "System Design & Architecture", status: "Studying", icon: "Network" },
];
