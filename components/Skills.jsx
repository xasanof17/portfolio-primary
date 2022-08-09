import Image from "next/image";
import React from "react";

import { images } from "../constants";

const skills = [
  { id: 1, name: "HTML", img: images.Html },
  { id: 2, name: "CSS", img: images.Css },
  { id: 3, name: "JavaScript", img: images.Javascript },
  { id: 4, name: "SASS", img: images.Sass },
  { id: 5, name: "Reactjs", img: images.ReactImg },
  { id: 6, name: "Vuejs", img: images.Vue },
  { id: 7, name: "Nextjs", img: images.NextJS },
  { id: 8, name: "Nuxtjs", img: images.Nuxt },
  { id: 9, name: "Sveltejs", img: images.Sveltejs },
  { id: 10, name: "Nx", img: images.Nx },
  { id: 11, name: "Bootstrap", img: images.bootstrap },
  { id: 12, name: "Material-UI", img: images.mui },
  { id: 13, name: "Semantic-UI", img: images.semanticui },
  { id: 14, name: "Ionic-UI", img: images.ionic },
  { id: 15, name: "ReactBootstrap", img: images.reactBootstrap },
  { id: 16, name: "VueBootstrap", img: images.vueBootstrap },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map(({ id, name, img }) => (
            <div
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
              key={id}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center items-center sm:flex sm:flex-col">
                <div className="m-auto flex items-center justify-center w-[60px] h-[60px] sm:w-[50px] sm:h-[50px]">
                  <Image src={img} className="w-full h-full" alt="/" />
                </div>
                <div className="hidden sm:flex flex-col items-center justify-center">
                  <p>{name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
