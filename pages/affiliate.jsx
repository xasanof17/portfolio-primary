import React from "react";
import AllProjects from './../components/AllProject';
import { images } from "../constants";

const affiliate = () => {
   return (
      <AllProjects head={'Affiliate'} imgSrc={images.affiliate} title={'Affilite App'} useSkills={'React JS / Tailwind / Firebase'} overview='I built this application in React JS and is hosted on GitHub pages.
      This app features user authentication with firebase as well as the
      firestore cloud storage database. This application is pulling movie
      data from an the IMDB movie API and displaying different categories.
      It features horizontal sliding and a featured selection. The
      useContext hook is also being implemented for app-wide state
      management.' githubLink={'https://github.com/xasanof17/hausvue'} demoLink={'https://hausvue.vercel.app/'} technologies1={'Vue'} technologies2={'JavaScript'} technologies3={'Css'}/>
   );
};

export default affiliate;
