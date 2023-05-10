import React from "react";

export default function Games() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h2 className="sm:text-4xl text-xl font-small title-font mb-4 text-gray">
            [3.2] Games
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Real-World use of my skills
          </p>
          <br></br>
          <iframe
            frameborder="0"
            src="https://itch.io/embed-upload/7882365?color=333333"
            allowfullscreen=""
            height="700"
          >
            <a href="https://mayapik.itch.io/in-the-dark"></a>
          </iframe>
          <br></br>
          <iframe
            frameborder="0"
            src="https://itch.io/embed-upload/7885401?color=333333"
            allowfullscreen=""
            height="700"
          >
            <a href="https://mayapik.itch.io/rush-game"></a>
          </iframe>
        </div>
      </div>
    </section>
  );
}
