import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiExpress } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-500" size={40} /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" size={40} /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" size={40} /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" size={40} /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-400" size={40} /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" size={40} /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" size={40} /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-600" size={40} /> },
];

const MySkill = () => {
  return (
    <section className="h-screen">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h2 className="text-2xl md:text-3xl text-primary
         font-bold text-center mb-24 font-archivoBlack">My Skills</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center hover:scale-105 transition-transform"
            >
              {skill.icon}
              <h3 className="text-lg font-semibold mt-3">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MySkill
