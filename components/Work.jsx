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
		image: "",
		category: "Bubble.io development",
		name: "Global Data Wifi",
		description: " ",
		link: "/",
		github: "/",
	},
	{
		image: "",
		category: "React Js frontend design",
		name: "Drive +",
		description: " ",
		link: "/",
		github: "/",
	},
	{
		image: "",
		category: "Sock Shop deployment with terraform on aws",
		name: "Altschool sock shop",
		description: " ",
		link: "/",
		github: "/",
	},
	{
		image: "",
		category: "wordpress Website Design",
		name: "Nettinx website",
		description: " ",
		link: "/",
		github: "/",
	},
	{
		image: "",
		category: "Bubble.io development",
		name: "Nettinx web app",
		description: " ",
		link: "/",
		github: "/",
	},
	{
		image: "",
		category: "React Js frontend design",
		name: "Drive +",
		description: " ",
		link: "/",
		github: "/",
	},
	{
		image: "",
		category: "Sock Shop deployment with terraform on aws",
		name: "Temibrands global website",
		description: " ",
		link: "/",
		github: "/",
	},
	{
		image: "",
		category: "wordpress Website Design",
		name: "Sankofa Website",
		description: " ",
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
					<p className="subtitle mb-8"> Lorem Ipsum donor</p>
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
