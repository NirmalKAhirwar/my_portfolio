import { SiGithub, SiLeetcode, SiLinkedin, SiGmail } from "react-icons/si";
import { FaKaggle } from "react-icons/fa";
const FloatingBar = () => {
  return (
    <div className="flex justify-center ">
      <div className="fixed z-10 border-2 border-gray-500 bg-gray-700 backdrop-blur  flex justify-center gap-5 place-content-center bottom-10 content-center space-x-4  py-4 px-8 rounded-full h-auto">
        <a
          href="https://www.linkedin.com/in/nirmal-ahirwar/"
          target="_blank"
          rel="noopener noreferrer">
          <SiLinkedin className="h-6 w-6   transition duration-300 ease-in-out text-blue-500 mx-auto " />
        </a>
        <a
          href="https://github.com/NirmalKAhirwar"
          target="_blank"
          rel="noopener noreferrer">
          <SiGithub className="h-6 w-6  transition duration-300 ease-in-out text-gray-100 mx-auto" />
        </a>
        <a
          href="https://leetcode.com/u/NirmalKAhirwar/"
          target="_blank"
          rel="noopener noreferrer">
          <SiLeetcode className="h-6 w-6  transition duration-300 ease-in-out text-yellow-400 mx-auto" />
        </a>
        <a
          href="https://www.kaggle.com/klausmikaelson2002"
          target="_blank"
          rel="noopener noreferrer">
          <FaKaggle className="h-6 w-6  transition duration-300 ease-in-out text-blue-500 mx-auto" />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=ahirwarnirmal2017@gmail.com"
          target="_blank"
          rel="noopener noreferrer">
          <SiGmail className="h-6 w-6  transition duration-300 ease-in-out text-red-500 mx-auto" />
        </a>
      </div>
    </div>
  );
};

export default FloatingBar;
