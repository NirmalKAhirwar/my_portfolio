import {
  SiReact,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiCss3,
  SiMysql,
  SiMongodb,
  SiCplusplus,
  SiC,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiHtml5,
  SiDocker,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
const Skills = () => {
  const skills = [
    { name: "C", icon: <SiC className="h-8 w-8 text-blue-500 mx-auto" /> },
    {
      name: "C++",
      icon: <SiCplusplus className="h-8 w-8 text-blue-500 mx-auto" />,
    },
    {
      name: "Python",
      icon: <SiPython className="h-8 w-8 text-cyan-500 mx-auto" />,
    },
    {
      name: "Java",
      icon: <FaJava className="h-8 w-8 text-orange-500 mx-auto" />,
    },
    {
      name: "Javascript",
      icon: <SiJavascript className="h-8 w-8 text-yellow-400 mx-auto" />,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="h-8 w-8 text-green-500 mx-auto" />,
    },
    {
      name: "React.js",
      icon: <SiReact className="h-8 w-8 text-cyan-500 mx-auto" />,
    },
    {
      name: "HTML",
      icon: <SiHtml5 className="h-8 w-8 text-orange-500 mx-auto" />,
    },
    {
      name: "CSS",
      icon: <SiCss3 className="h-8 w-8 text-blue-500 mx-auto" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="h-8 w-8 text-blue-500 mx-auto" />,
    },
    {
      name: "React Naitve",
      icon: <SiReact className="h-8 w-8 text-cyan-500 mx-auto" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="h-8 w-8 text-green-400 mx-auto" />,
    },
    {
      name: "MySQL",
      icon: <SiMysql className="h-12 w-12 text-white-500 mx-auto" />,
    },

    {
      name: "Tensorflow",
      icon: <SiTensorflow className="h-8 w-8 text-orange-500 mx-auto" />,
    },
    {
      name: "Pytorch",
      icon: <SiPytorch className="h-8 w-8 text-orange-500 mx-auto" />,
    },

    { name: "Git", icon: <SiGit className="h-8 w-8 text-red-500 mx-auto" /> },
    {
      name: "GitHub",
      icon: <SiGithub className="h-8 w-8 text-gray-300 mx-auto" />,
    },
    {
      name: "Docker",
      icon: <SiDocker className="h-8 w-8 text-blue-500 mx-auto" />,
    },
  ];

  return (
    <section id="skills" className="py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-gray-800 rounded-lg p-4 text-center  transition duration-300 ease-in-out">
            {skill.icon}
            <span className="mt-2 block text-sm font-semibold text-white">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
