'use client';
/* eslint-disable react/no-unescaped-entities */

import React, {useState} from "react";
import { Tabs, TabsTrigger , TabsContent, TabsList } from '@/components/ui/tabs';
import ProjectCard from "@/components/ProjectCard";

const projectData = [
	{
		image: '/work/gdw_bubble.png',
		category: "Bubble.io",
		name: "Global Data Wifi",
		description: "No Code Web App Development for an Internet Data Company. Figma also included",
		link: "https://globaldatawifi.com/",
		github: "/",
	},
	{
		image: "/work/driveplus.png",
		category: "React Js",
		name: "Drive +",
		description: "personal Front-end Project for a Ride Hauling App designed with React and Tailwind",
		link: "/",
		github: "/",
	},
	{
		image: "/work/sockshop.png",
		category: "Aws Devops",
		name: "Altschool sock shop",
		description: "A final year project on devops application including a host of tools ",
		link: "/",
		github: "/",
	},
	{
		image: "/work/nettinx_website.png",
		category: "wordpress",
		name: "Nettinx website",
		description: " Website design for Nettinx  ",
		link: "/",
		github: "/",
	},
	{
		image: "/work/nettinx_bubble.png",
		category: "Bubble.io",
		name: "Nettinx web app",
		description: " Web App design for Nettinx",
		link: "/",
		github: "/",
	},
	
	{
		image: "/work/sankofa_wp.png",
		category: "wordpress",
		name: "Sankofa Website",
		description: "Website design for Sankofa ",
		link: "/",
		github: "/",
	},
];


const uniqueCategories = ['all projects',
  ...new Set(projectData.map((item) => item.category))];


const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all Projects')
  

  const filteredProjects = projectData.filter(project =>{
    return category === 'all projects' 
    ? project
    : project.category === category;
  })
   
  return (
    <section className='min-h-screen pt-1'> 
    <div className="container mx-auto">
      <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
        My Projects
      </h2>
      <Tabs defaultValue={category} className="mb-24 xl:mb-48">
        <TabsList className='w-full grid h-full md:grid-cols-5 lg:max-w-[750px] mb-12 mx-auto md:border 
        dark:border-none'>
          {categories.map((category, index)=> {
            return (
            <TabsTrigger 
            onClick={() => setCategory(category)}
            value={category} key={index} className="capitalize w-[162px] md:w-auto">
              {category}
            </TabsTrigger>)
          })}
        </TabsList>
        <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
         {filteredProjects.map((project, index)=>{
         
         return <TabsContent value ={category} key={index}>
            <ProjectCard project={project}/>
          </TabsContent>
         })}
        </div>
      </Tabs>
      </div>
      </section>
  )
}

export default Projects