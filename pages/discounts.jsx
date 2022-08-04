import React from "react";
import AllProjects from '../components/AllProject';
import { images } from "../constants";

const onconnect = () => {
   return (
      <AllProjects head={'Discounts on Services'} imgSrc={images.discounts} title={'Discounts on Services App'} useSkills={'React JS / Styled-components / React-Router-Dom'} overview='This app created with Reactjs and styled with styled-components + scss.' githubLink={'https://github.com/xasanof17/discounts'} demoLink={'https://discountreact.vercel.app/'} technologies1={'React JS'} technologies2={'JavaScript'} technologies3={'Styled-components'} technologies4={'react-router-dom'} technologies5={'CSS'}/>
   );
};

export default onconnect;
