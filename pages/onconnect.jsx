import React from "react";
import AllProjects from '../components/AllProject';
import { images } from "../constants";

const onconnect = () => {
   return (
      <AllProjects head={'Onconnect'} imgSrc={images.onconnectDashboard} title={'Onconnect App'} useSkills={'React JS / Styled-components / React-Router-Dom'} overview='This app created with Reactjs and styled with styled-components + scss. This project has login and parol, you can see all them in github' githubLink={'https://github.com/xasanof17/onconnect'} demoLink={'https://onconnect.vercel.app/'} technologies1={'React JS'} technologies2={'JavaScript'} technologies3={'Styled-components'} technologies4={'react-router-dom'} technologies5={'SCSS'}/>
   );
};

export default onconnect;
