import img1 from "../assets/Project Management Tool.png";
import img2 from "../assets/Blog.png";
import img3 from "../assets/Todo.png";
import img4 from "../assets/Git_Profile_Finder.png";

const ProjectsList = [
  {
    id: 1,
    title: "Project Management Tool",
    link: "https://project-management-tool-mern.netlify.app/",
    github: "https://github.com/Hawkpraveen/Project_Management_Tool_FrontEnd",
    image: img1,
    desc: "Project Management Tool is a MERN Stack full stack project.It includes features such as drag and drop, navigation,calendar,dashboard,reports download and upload images",
    tech: [
      "React JS",
      "React Redux",
      "React DND",
      "Tailwind",
      "Node JS",
      "ExpressJS",
      "MongoDB",
      "JWt",
      "Google Authentication",
    ],
  },
  {
    id: 2,
    title: "Blog App",
    link: "https://blog-app-react-redux-tailwind.netlify.app/",
    github: "https://github.com/Hawkpraveen/BLOG_APP_FE",
    image: img2,
    desc: "Admin centric Blog app.It includes features such as Create Post by admin and view the blog by users",
    tech: [
      "React JS",
      "React Redux",
      "Tailwind",
      "Node JS",
      "ExpressJS",
      "MongoDB",
      "JWt",
      "Google Authentication",
      "React Quill"
    ],
  },
  {
    id: 3,
    title: "Todo App",
    link: "https://crud-todo-localstroage.netlify.app/",
    github: "https://github.com/Hawkpraveen/CRUD-Project-TODO",
    image: img3,
    desc: "The Todo App is based on the Java Script DOM Manipulation with the utilization of the Local Storage for saving the tasks created by the Users",
    tech: [
      "React JS",
      "BootStrap",
      "DOM Manipulation",
      "Java Script",
      "Local Storage",
    ],
  },
  {
    id: 4,
    title: "GitHub Profile Finder",
    link: "https://gitrhub-profile-finder.netlify.app/",
    github:
      "https://github.com/Hawkpraveen/Fetch-Project-Github-Profile-Finder",
    image: img4,
    desc: "The GitHub Profile Finder is based on the Java Script DOM Manipulation with the utilization of the GitHub API for getting the Users profile",
    tech: [
      "React JS",
      "BootStrap",
      "DOM Manipulation",
      "Java Script",
      "API Integration",
    ],
  },
];

export default ProjectsList;
