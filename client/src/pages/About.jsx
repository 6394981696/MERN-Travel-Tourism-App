import aboutImg from "../assets/images/about_img.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-purple-100 p-5">
      <div className="w-[90%] max-w-2xl rounded-2xl shadow-2xl bg-white p-6 flex flex-col gap-6">
        <h1 className="text-4xl text-center font-bold text-purple-700">About Me</h1>
        <div className="flex flex-col items-center">
          <img
            src={aboutImg}
            className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-purple-300 transition-transform duration-300 hover:scale-105"
            alt="Profile"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mt-3">Durgawati Chaurasiya</h2>
        </div>

        <ul className="flex flex-col items-center gap-3">
          <li className="hover:underline hover:text-purple-600 transition-colors">
            <a
              className="flex items-center gap-2 text-lg"
              href="https://github.com/6394981696"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <FaExternalLinkAlt />
            </a>
          </li>
          <li className="hover:underline hover:text-purple-600 transition-colors">
            <a
              className="flex items-center gap-2 text-lg"
              href="https://www.linkedin.com/in/durgawati-chaurasiya-22a260275/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <FaExternalLinkAlt />
            </a>
          </li>
        </ul>

        <p className="text-gray-700 text-justify leading-relaxed">
          Hello! I am <span className="font-semibold text-purple-600">Durgawati Chaurasiya</span>, a passionate 
          Full Stack Developer skilled in building dynamic and responsive web applications. 
          I love solving real-world problems with clean, efficient code and continuously learning 
          new technologies. Lets connect and create amazing projects together!
        </p>
      </div>
    </div>
  );
};

export default About;
