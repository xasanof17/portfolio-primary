import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { images } from '../constants';
import ProjectItem from './ProjectItem';

const projectsItem = [
   { id: 1, title: 'Affiliate App', backgroundImg: images.affiliate, projectUrl: '/affilite', tech: 'Next JS' },
   { id: 2, title: 'Grill App', backgroundImg: images.grill, projectUrl: '/grill', tech: 'React JS' },
   { id: 2, title: 'Onconnect App', backgroundImg: images.onconnectDashboard, projectUrl: '/onconnect', tech: 'React JS' },
   { id: 2, title: 'Haus App', backgroundImg: images.haus, projectUrl: '/haus', tech: 'Vue JS' },
   { id: 2, title: 'Discounts on Services App', backgroundImg: images.discounts, projectUrl: '/discounts', tech: 'React JS' },
   { id: 2, title: 'Galaxy Travel App', backgroundImg: images.glx, projectUrl: '/glx', tech: 'React JS' },
]

const Projects = () => {
   return (
      <section id='projects' className='w-full'>
         <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
               Projects
            </p>
            <h2 className='py-4'>What I&apos;ve Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
               {projectsItem.map(({ id, title, backgroundImg, projectUrl, tech }) => (
                  <ProjectItem
                     key={id}
                     title={title}
                     backgroundImg={backgroundImg}
                     projectUrl={projectUrl}
                     tech={tech}
                  />
               ))}
            </div>
         </div>
      </section>
   );
};

export default Projects;
