'use client';
/* eslint-disable react/no-unescaped-entities */

import React, {useState} from "react";
import { Tabs, TabsTrigger , TabsContent, TabsList } from '@/components/ui/tabs';
import ProjectCard from "@/components/ProjectCard";

const projectData = [
	{
		image: "",
		category: "Bubble.io",
		name: "Global Data Wifi",
		description: " ",
		link: "/",
		github: "/",
	},
	{
		image: "",
		category: "React Js",
		name: "Drive +",
		description: " ",
		link: "/",
		github: "/",
	},
	{
		image: "",
		category: "Devops",
		name: "Altschool sock shop",
		description: " ",
		link: "/",
		github: "/",
	},
	{
		image: "",
		category: "wordpress",
		name: "Nettinx website",
		description: " ",
		link: "/",
		github: "/",
	},
	{
		image: "",
		category: "Bubble.io",
		name: "Nettinx web app",
		description: " ",
		link: "/",
		github: "/",
	},
	{
		image: "",
		category: "React Js",
		name: "Drive +",
		description: " ",
		link: "/",
		github: "/",
	},
	{
		image: "",
		category: "Devops",
		name: "Temibrands global website",
		description: " ",
		link: "/",
		github: "/",
	},
	{
		image: "",
		category: "wordpress",
		name: "Sankofa Website",
		description: " ",
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