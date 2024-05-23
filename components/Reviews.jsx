"use client";

import Image from "next/image";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper/modules";

const reviewsData = [
	{
		avatar: "/reviews/avatar-1.jpg",
		name: "John doe ",
		job: "Architech",
		review: "my review on this job was beautiful",
	},
	{
		avatar: "/reviews/avatar-2.jpg",
		name: "Ahmad fulan",
		job: "Engineer",
		review: "my review on this job was beautiful",
	},
	{
		avatar: "/reviews/avatar-3.jpg",
		name: "Eran show",
		job: "Chef",
		review: "my review on this job was beautiful",
	},
	{
		avatar: "/reviews/avatar-4.jpg",
		name: "Noah Shawnn",
		job: "Sales rep",
		review: "my review on this job was beautiful",
	},
	{
		avatar: "/reviews/avatar-5.jpg",
		name: "Tola Aramide",
		job: "video Editor",
		review: "my review on this job was beautiful",
	},
	{
		avatar: "/reviews/avatar-6.jpg",
		name: "Zayd Faruk",
		job: "Real Estate",
		review: "my review on this job was beautiful",
	},
];

const Reviews = () => {
	return (
		<section className="mb-12 xl:mb-32">
			<div className=" container mx-auto xl:mt-48">
				<h2 className="section-title mb-12 text-center mx-auto "> Reviews</h2>
				{/* slider */}
				<Swiper
					slidesPerView={1}
					breakpoints={{
						640: { slidesPerView: 2 },
						1400: { slidesPerView: 3 },
					}}
					spaceBetween={30}
					modules={[Pagination]}
					pagination={{
						clickable: true,
					}}
					className="h-[350px]">
					{reviewsData.map((person, index) => {
						return (
							<SwiperSlide key={index}>
								<Card className="bg-rose-50 dark:bg-secondary/40 p-8 min-h-[300px]">
									<CardHeader> 
                                    <div className="flex items-center gap-x-4">
                                        <Image className="rounded-full" src={person.avatar} width={70} height={70} alt="" priority/>
                                 {/*name*/}
                                 <div className="flex flex-col">
                                    <CardTitle>{person.name}</CardTitle>
                                    <p>{person.job}</p>
                                 </div>
                                    </div>
                                    </CardHeader>
									<CardDescription>{person.review} </CardDescription>
								</Card>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</section>
	);
};

export default Reviews;
