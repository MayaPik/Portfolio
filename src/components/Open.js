import React from "react";
import { CodeIcon } from "@heroicons/react/solid";

export default function Open() {
  return (
    <section id="open">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center justify-center ">
        <div className=" lg:flex-grow lg:pr-16 md:pr-10 flex flex-col md:items-center md:text-center mb-5 md:mb-0 ">
          <h1 className="title-font sm:text-4xl text-5xl mb-4 font-medium text-white text-center ">
            <CodeIcon className="w-10 inline-block mb-2" /> Hello World{" "}
            <CodeIcon className="w-10 inline-block mb-2" />
          </h1>

          <div className="flex justify-center flex-wrap flex-row">
            <a
              href="https://github.com/MayaPik"
              className="m-4 inline-flex text-purple-200 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              My Github
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1X8piBa0aPaMx1imnv4qc8JreiIFanuNv"
              download
              className="m-4 inline-flex text-purple-200 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              My Resume
            </a>
            <a
              href="https://www.linkedin.com/in/maya-pik/"
              className="m-4 inline-flex text-purple-200 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
