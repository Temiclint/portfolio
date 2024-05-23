import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
	RiBriefcase4Fill,
	RiTeamFill,
	RiTodoFill,
	RiArrowDownFill,
} from "react-icons/ri";

// components

import MyImg from "./MyImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
	return (
		<section className="py-12 xl:py-24 h-[84vh] xl:pt-28">
			<div className="container mx-auto">
				<div className="flex justify-between gap-x-8">
					{/* text */}
					<div
						className="flex max-w-[600px] flex-col justify-center mx-auto
					xl:mx-0 text-center xl:text-left">
						<div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
							{" "}
							 Web Developer / Designer - Devops Engineer
						</div>
						<h1 className="h1 mb-4">Temidire Adelaja</h1>
						<p className="subtitle max-w-[490px] mx-auto xl:mx-0">
							I am a Web developer and Devops Engineer
						</p>
						{/* buttons */}
						<div className="flex flex-col gasp-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
							<Link href="/contact">
								<Button className="gap-x-2">
									{" "}
									Contact me <Send size={18} />
								</Button>
							</Link>
							<Button variant="secondary" className="gap-x-2">
								{" "}
								Download Resume <Download size={18} />
							</Button>
						</div>
						{/* socials */}
						<Socials
							containerStyles="flex gap-x-6 mx-auto xl:mx-0"
							iconStyles="text-foreground text-[24px] hover:text-primary transition-all"
						/>
					</div>

					{/* image */}
					<div className="hidden xl:flex relative">
						{/* badge 1 */}
						<Badge
							containerStyles="absolute top-[10%] -left-[3rem]"
							icon={<RiTodoFill />}
							endCountNum={3}
							badgeText={"Years Of Experience"}
						/>
							{/* badge 2 */}
							<Badge
							containerStyles="absolute top-[90%] -left-[-5rem]"
							icon={<RiBriefcase4Fill />}
							endCountNum={40}
							endCountText=''
							badgeText= "Completed Projects"
						/>
						{/* badge 3 */}
						<Badge
							containerStyles="absolute top-[50%] -right-[25%]"
							icon={<RiTeamFill />}
							endCountNum={35}
							endCountText=''
							badgeText= "Happy clients"
						/>

						<div
							className="bg-hero_shape_red dark:bg-hero_shape_white w-[500px] h-[540px] bg-no-repeat absolute
						-top-1 -right-2"></div>
						<MyImg
							containerStyles="bg-hero_shape w-[450px] h-[470px] bg-no-repeat
						relative bg-bottom"
							imgSrc="/hero/devimg.png"
						/>

						
					</div>
				</div>
				{/* icons */}
				<div
					className="hidden md:flex absolute left-2/4 
        bottom-44 xl:bottom-12 animate-bounce">
					<RiArrowDownFill className="text-3xl text-primary" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
