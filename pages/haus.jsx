import React from "react";
import AllProjects from '../components/AllProject';
import { images } from "../constants";

const onconnect = () => {
   return (
      <AllProjects head={'Haus'} imgSrc={images.haus} title={'Haus Vue'} useSkills={'Vue JS / CSS / Bootstrap'} overview='This website created with Vuejs and styled with bootstrap.' githubLink={'https://github.com/xasanof17/hausvue'} demoLink={'https://hausvue.vercel.app/'} technologies1={'Vue JS'} technologies2={'JavaScript'} technologies3={'Bootstrap'} technologies4={'CSS'}/>
   );
};

export default onconnect;
