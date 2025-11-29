import Sidebar from "./Sidebar";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { RiTodoLine } from "react-icons/ri";

function Home() {
  return (
    <div className="w-full flex items-center mt-10 relative px-20">
      <div className="flex flex-col max-w-xl gap-5 mt-5">
        <h3 className="text-yellow-500 text-xl font-semibold tracking-wider">
          FULL STACK DEVELOPER
        </h3>

        <h1 className="font-serif text-4xl font-bold leading-tight">
          Hello, My Name is <br /> Anisha J K
        </h1>

        <p className="text-gray-600 font-inter text-lg leading-relaxed max-w-md">
          Hello, Thank you for visiting my profile. My name is Anisha. I am a
          full stack developer who has been working in these technologies,
          providing service for clients, and currently working as a .NET full
          stack developer.
        </p>

        <div className="flex gap-4 mt-5">
          <a
            href=""
            className="btn-default flex items-center gap-2 justify-center"
          >
            Projects <RiTodoLine />
          </a>

          <a
            href="https://www.linkedin.com/in/anisha-j-k-profile"
            className="btn-default flex items-center gap-2 justify-center"
          >
            LinkedIn <FaLinkedin />
          </a>

          <a
            href="https://github.com/Anisha0023"
            className="btn-default flex items-center gap-2 justify-center"
          >
            GitHub <FaGithub />
          </a>
        </div>
      </div>

    
    </div>
  );
}

export default Home;
