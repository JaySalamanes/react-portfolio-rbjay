import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a dedicated Software Developer with a strong passion for building scalable and efficient web applications. With a year of hands-on experience, I have developed skills in both front-end and back-end development, working with technologies like HTML, CSS, React, Laravel, Tailwind CSS, JavaScript, Java, PHP, MySQL, and more. I enjoy solving complex challenges, optimizing performance, and creating seamless user experiences. My goal is to apply my expertise to develop practical and effective solutions that drive business growth and enhance digital experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer with a passion for building efficient and user-friendly web applications. With one year of professional experience, I have worked with a range of technologies, including HTML, CSS, React, Laravel, Tailwind CSS, JavaScript, Java, PHP, and MySQL.

My journey in web development began with a deep curiosity about how things work, which has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy tackling complex problems to deliver high-quality solutions.

Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Software Developer",
    company: "Freelance",
    description: `Developed a project website for a student by gathering requirements and implementing key features, resulting in a fully functional and well-received submission for their academic project.
Implemented custom websites for clients by designing responsive and user-friendly interfaces, resulting in improved client satisfaction and engagement.
Established clear communication with clients by discussing project requirements and objectives, resulting in a better understanding of their needs and expectations.
`,
    technologies: ["HTML", "CSS", "React JS", "Tailwind"],
  },
  {
    year: "2022 - 2023",
    role: "City Hall Data Entry Specialist Intern	",
    company: "City Hall",
    description: `Maintained data integrity by carefully digitizing physical records, resulting in enhanced accuracy and efficient access to information for the team.
 Improved data accessibility by transferring physical documents into digital formats, ensuring accurate records and easy retrieval for future use.
Optimized the data management process by inputting information from paper files into the electronic system, resulting in improved data organization and reduced retrieval time.
`,
    technologies: ["HTML", "CSS", "React JS", "Tailwind"],
  },
];

// export const PROFILE = {
//   name: "David Stones",
//   role: "Full Stack Developer",
//   subheading:
//     "With 10 years of full-stack development experience, I build efficient, scalable web applications. Not on the job hunt, but always curious about interesting projects.",
// };

export const PROJECTS2 = [
  {
    id: 1,
    title: "VirtualR Website",
    description:
      "Experience the future of digital interaction with cutting-edge Virtual Reality technology. Our platform brings immersive, interactive, and lifelike virtual experiences to life, revolutionizing gaming, education, training, and beyond. Explore new worlds, push the boundaries of reality, and unlock endless possibilities with the power of VR.",
    techStack: ["HTML", "CSS", "React JS", "Tailwind"],
    imgSrc: project1,
    link: "https://virtualreality-kappa.vercel.app/",
  },
  {
    id: 2,
    title: "A Taste of Excellence: Discover Restaura’s Culinary Creations",
    description:
      "Indulge in a culinary experience like no other at Restaura. Our website brings you a glimpse of our carefully crafted menu, showcasing a fusion of flavors made with the freshest ingredients.",
    techStack: ["HTML", "CSS", "React JS", "Tailwind"],
    imgSrc: project2,
    link: "https://example-socialapp.com",
  },
  {
    id: 3,
    title: "LPU MIL Website",
    description:
      "This landing page is designed to showcase the Media and Information Literacy (MIL) exam along with various student projects completed throughout the semester. It serves as an informative and engaging platform where students can access exam details, review their past projects, and reflect on their learning journey.",
    techStack: ["HTML", "CSS", "React JS", "Tailwind"],
    imgSrc: project3,
    link: "https://creativity-mil.netlify.app/",
  },
];

export const PROJECTS = [
  {
    title: "Virtual Reality Website",
    image: project1,
    description:
      "Experience the future of digital interaction with cutting-edge Virtual Reality technology. Our platform brings immersive, interactive, and lifelike virtual experiences to life, revolutionizing gaming, education, training, and beyond. Explore new worlds, push the boundaries of reality, and unlock endless possibilities with the power of VR.",
    technologies: ["HTML", "CSS", "React", "Tailwind Css"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Davao City Philippines ",
  phoneNo: "09660272735",
  email: "itsmerbjaysalamanes@gmail.com",
};
