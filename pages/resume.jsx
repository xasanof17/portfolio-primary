import React from "react";
import Head from "next/head";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { images } from "../constants";
import Link from "next/link";

const resume = () => {
  return (
    <>
      <Head>
        <title>Javohir | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[50px] sm:pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center text-lg">Xasanov Javohir</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/javohir-xasanov-40a186237/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/xasanof17/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block ">
            <p>
              Proven Leadership <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Effective and proven track record of critical
          thinking, idea generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className="text-center my-5">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <div className="py-2 flex flex-wrap">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span>HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Sass
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Vuejs
            <span className="px-2">|</span>Nextjs
            <span className="px-2">|</span>Nuxtjs
            <span className="px-2">|</span>Sveltejs
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span>Bootstrap
            <span className="px-2">|</span>Sanity
            <span className="px-2">|</span>Redux
          </div>
        </div>
        {/* Resume PDF */}
        <a href={'https://me-qr.com/z1SeeOH'} target="_blank"
          rel="noreferrer">
          <div className="flex items-center justify-center flex-col py-5">
          <h5 className="text-center underline text-[18px] py-2">Resume PDF</h5>
            <div className="flex items-center justify-center max-w-[200px]">
              <Image src={images.qrcode} alt='resume pdf' className="w-full h-full" />
            </div>
          </div>
        </a>
        {/* Certificate PROWEB */}
        <a href={'https://cdn.me-qr.com/jpg/8268650.jpg'} target="_blank"
          rel="noreferrer">
          <div className="flex flex-col items-center py-5">
            <h5 className="text-center underline text-[18px] py-2">Certificate</h5>
            <div className="flex items-center justify-center max-w-[200px]">
              <Image src={images.certificate} alt='certificate' />
            </div>
          </div>
        </a>
        {/* Experience */}
        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Yangiavlod</span>
            <span className="px-2">|</span>Tashkent, Uzbekistan
          </p>
          <p className="py-1 italic">Freelance Work (2021 - Current)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">RUM PLAST</span>
            <span className="px-2">|</span>Tashkent, Uzbekistan
          </p>
          <p className="py-1 italic">Cargo carrier (2020 - 2021)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Plastic products manufacturing plant</li>
            <li>
              Work surrounding departments organizing treatment protocols and
              facilitate hands on training operations.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
