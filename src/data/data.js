import portfolio from "../assets/portfolio-milan.png"; // Imported image
import hamrocsit from "../assets/hamrocsit.png"; // Imported image
import college from "../assets/college.png"; // Imported image

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A fully responsive portfolio website built with React.js.",
    image: portfolio, // Using imported image
    liveUrl: "https://thapa-milan.com.np/",
  },
  {
    id: 2,
    title: "College Website",
    description: "A personal College Website showcasing projects and skills.",
    image: college, // Using imported image
    liveUrl: "https://milanedu.netlify.app/",
  },
  {
    id: 3,
    title: "Hamro CSIT Clone",
    description: "A mobile-responsive clone of HamroCSIT website.",
    image: hamrocsit, // Using imported image
    liveUrl: "https://thapa-milan.com.np/",
  },
];

export default projects;
