import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbCircleLetterCFilled } from "react-icons/tb";
import { SiPhp } from "react-icons/si";
import { FaSwift } from "react-icons/fa";

const iconMap = {
    "React": <FaReact />,
    "JavaScript": <IoLogoJavascript />,
    "CSS": <FaCss3Alt />,
    "HTML": <FaHtml5 />,
    "Angular": <FaAngular />,
    "Vue": <FaVuejs />,
    "Node.js": <FaNodeJs />,
    "Python": <FaPython />,
    "TypeScript": <SiTypescript />,
    "Express": <SiExpress />,
    "MongoDB": <SiMongodb />,
    "C++": <TbCircleLetterCFilled />,
    "php": <SiPhp />,
    "Swift": <FaSwift/>
}


import './TechBadge.css';

function TechBadge({tech}){
    // Create a safe CSS class name (e.g. "Node.js" -> "node.js", "C++" -> "c++")
    const techClass = `tech-${tech.name.toLowerCase()}`;
    
    return (
        <span className={`badge ${techClass}`}>
            {iconMap[tech.name]} <span>{tech.name}</span>
        </span>
    )
}

export default TechBadge