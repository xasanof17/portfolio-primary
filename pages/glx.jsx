import React from "react";
import AllProjects from '../components/AllProject';
import { images } from "../constants";

const onconnect = () => {
   return (
      <AllProjects head={'Glx'} imgSrc={images.glx} title={'Galaxy Travel App'} useSkills={'React JS / SCSS / React-Router-Dom'} overview='This app created with Reactjs and styled scss.' githubLink={'https://github.com/xasanof17/galaxy'} demoLink={'https://glx.vercel.app/'} technologies1={'React JS'} technologies2={'JavaScript'} technologies3={'SCSS'} technologies4={'react-router-dom'}/>
   );
};

export default onconnect;
