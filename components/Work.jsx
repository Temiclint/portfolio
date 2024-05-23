"use client";
import Link from "next/link";
import { Button } from "./ui/button";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination , Navigation } from "swiper/modules";

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

const Work = () => {
	return (
		<section className="relative mb-12 xl-mb-48">
			<div className="container mx-auto">
				{/* text */}
				<div
					className="max-w-[400px] mx-auto xl:mx-0 
    text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center
    items-center xl:items-start">
					<h2 className="section-title mb-4">Past Projects</h2>
					<p className="subtitle mb-8"> Here are a few from past projects</p>
					<Link href="/projects">
						<Button> All Projects</Button>
					</Link>
				</div>
				{/* slider */}
				<div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
					<Swiper
						className="h-[480px]"
						sliderPerView={1}
						breakpoints={{
							640: {
								slidesPerView: 2,
							},
						}}
						spaceBetween={30}
						modules= {[Pagination]}
						pagination = {{ clickable: true }}
                        >
						{/* show first 3 to 4 projects */}
						{projectData.slice(0, 4).map((project, index) => {
							return (
								<SwiperSlide key={index}>
									<ProjectCard project={project} />
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default Work;
