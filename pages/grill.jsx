import React from "react";
import AllProjects from './../components/AllProject';
import { images } from "../constants";

const grill = () => {
   return (
      <AllProjects head={'Grill'} imgSrc={images.grill} title={'Grill App'} useSkills={'React JS / Styled-components'} overview='This app created with Reactjs' githubLink={'https://github.com/xasanof17/grill'} demoLink={'https://grillreact.vercel.app/'} technologies1={'React JS'} technologies2={'JavaScript'} technologies3={'Styled-components'}/>
   );
};

export default grill;
