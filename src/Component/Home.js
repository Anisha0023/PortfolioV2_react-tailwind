import Sidebar from './Sidebar';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { RiTodoLine } from 'react-icons/ri';
import About from './About';

function Home() {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row items-start justify-between px-8 mt-20 gap-10">

        <div className="max-w-xl flex flex-col gap-5">
          <h3 className="text-yellow-500 text-xl font-semibold tracking-wider">
            FULL STACK DEVELOPER
          </h3>

          <h1 className="font-serif text-4xl font-bold leading-tight">
            Hello, My Name is <br /> Anisha J K
          </h1>

          <p className="text-gray-600 font-inter text-lg leading-relaxed">
            Hello, Thank you for visiting my profile. My name is Anisha. I am a
            full stack developer who has been working in these technologies,
            providing service for clients, and currently working as a .NET full
            stack developer.
          </p>

          <div className="flex flex-wrap gap-4 mt-5">
            <a className="btn-default flex items-center gap-2 justify-center">
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

        {/* RIGHT CONTENT (Empty for now, you can add anything later) */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          {/* Add any features later like icons, images, stats, etc */}
          <div className="text-gray-400 text-sm">
            {/* Placeholder */}
          </div>
        </div>

      </div>

      <div id="about" className="mt-28 w-full">
        <About />
      </div>
    </>
  );
}

export default Home;


