import React from "react";
import Image from "next/image";
import Link from "next/link";
import {images} from '../constants'

const About = () => {
  return (
    <section id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            / / I am not your average developer
          </p>
          <p className="py-2 text-gray-600 text-start">
            Before I entered this realm of web programming, I had no idea who I
            would be and what I could do. Before entering this industry, I have
            worked in many places, factories, sales centers, stores, etc., but
            my current job is very different from all the previous ones, do you
            think everything is easy? only your fingers and eyes can get tired
            but when you get a salary that suits your job, you forget all that
            😅. I have always had the ability to work with technology and
            computers. In 2021, I became very interested in web programming and
            started attending courses. In the beginning, everything seemed very
            difficult to me, but as I worked on myself, everything became easier
            and now I can say that I am a master of my profession.
          </p>
          <p className="py-2 text-gray-600">
            I was amazed at how complicated programming was and quickly became
            interested in learning more. I started learning JavaScript and
            became even more passionate about making websites interactive. I&apos;m
            currently spending my time building projects with React JS, Firebase
            and learning new technologies (Nodejs, Express, Mongodb).
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={images.AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </section>
  );
};

export default About;
