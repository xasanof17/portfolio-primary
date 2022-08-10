import React from "react";
import AllProjects from '../components/AllProject';
import { images } from "../constants";

const onconnect = () => {
   return (
      <AllProjects head={'OkeyPost'} imgSrc={images.okeypost} title={'OkeyPost App'} useSkills={'Next JS / Tailwind / React-icons'} overview='This app created with Nextjs and bootstrapped with tailwindcss.' githubLink={'https://github.com/xasanof17/okeypost'} demoLink={'https://okeypost.vercel.app/'} technologies1={'Next JS'} technologies2={'JavaScript'} technologies3={'Tailwindcss'} technologies4={''}/>
   );
};

export default onconnect;
