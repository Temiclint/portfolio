import MyImg from "./MyImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
	User2,
	MailIcon,
	HomeIcon,
	PhoneCall,
	Briefcase,
	GraduationCap,
} from "lucide-react";
import { get } from "react-hook-form";

const infoData = [
	{
		icon: <User2 size={20} />,
		text: " Dire Adelaja",
	},
	{
		icon: <PhoneCall size={20} />,
		text: "+234 8166174296 ",
	},
	{
		icon: <MailIcon size={20} />,
		text: " contact@direadelaja.com",
	},
	{
		icon: <HomeIcon size={20} />,
		text: " Lagos",
	},
];

const qualificationData = [
	{
		title: "Education",
		data: [
			{
				university: "Ladoke Akintola University of Technology",
				qualification: "Bachelor of Technology",
				years: "2010 - 2015",
			},
			{
				university: "",
				qualification: "New Horizon Nigeria",
				years: "2018 - 2019",
			},
			{
				university: "AltSchool Africa",
				qualification: "Devops Engineer",
				years: "2023 - 2024",
			},
		],
	},
	{
		title: "Experience",
		data: [
			{
				company: "Dnar",
				role: "Brand Expert",
				years: "2019 - 2022",
			},
			{
				company: "Flying Doctor",
				role: "Brand Expert",
				years: "2020 - 2023",
			},
			{
				company: "Fiverr & Upwork",
				role: "Front End Developer",
				years: "2020 - present",
			},
			{
				company: "Nettinx",
				role: "Software Engineer",
				years: "2024 - present",
			},
		],
	},
];

const skillData = [
	{
		title: "Skills",
		data: [
			{
				name: "HTML, CSS",
			},
			{
				name: "Front-End Development",
			},
			{
				name: "Javascript, PHP, React JS, Node JS, MongoDB, Express.js",
			},
			{
				name: "Back-End Development",
			},
            {
                name: "No Code Development, Bubble.io"
            },
			{
				name: "TailWind, BootStrap",
			},
			{
				name: "Devops",
			},
		],
	},
	{
		title: "Tools",
		data: [
			{
				imgPath: "/about/vscode.svg",
			},
			{
				imgPath: "/about/figma_logo.svg",
			},
			{
				imgPath: "/about/webflow.svg",
			},
			{
				imgPath: "/about/wordpress.svg",
			},
			{
				imgPath: "/about/aws.svg",
			},
            {
                imgPath: "/about/bubble.svg"
            },
		],
	},
];

const About = () => {
	const getData = (arr, title) => {
		return arr.find((item) => item.title === title);
	};

	return (
		<section className="xl:h-[860px] ob-12 xl:py-24">
			<div className="container mx-auto">
				<h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
					About me
				</h2>
				<div className="flex flex-col xl:flex-row">
					{/* <div className="hidden xl:flex flex-1 relative"> */}
						{/* image */}

						{/* <MyImg
							containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
							imgSrc=""
						/>
					</div> */}

					{/* tabs */}
					<div className="flex-1">
						<Tabs defaultValue="personal">
							<TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[650px] mx-auto xl:border dark:border-none">
								<TabsTrigger className="w-[126px] xl:w-auto" value="personal">
									Personal Info{" "}
								</TabsTrigger>
								<TabsTrigger
									className="w-[126px] xl:w-auto"
									value="qualifications">
									Qualification
								</TabsTrigger>
								<TabsTrigger className="w-[126px] xl:w-auto" value="skills">
									Skills{" "}
								</TabsTrigger>
							</TabsList>
							{/* tabs content */}
							<div className="text-lg mt-12 xl:mt-8">
								{/* personal */}
								<TabsContent value="personal">
									<div className="text-center xl:text-left">
										<h3 className="h3 mb-4"> Unmatched Service Quality</h3>
										<p className="subtitle max-w-xl max-auto xl:mx-0">
											I specialize in crating intuitive websites with
											cutting-edge technology, delivering dynamic and engaging
											user Experiences.
										</p>
										{/* icons */}
										<div className="grid xl:grid-cols-2 gap-4 mb-12">
											{infoData.map((item, index) => {
												return (
													<div
														className="flex items-center gap-x-4 mx-auto xl:mx-0"
														key={index}>
														<div className="text-primary">{item.icon} </div>
														<div>{item.text} </div>
													</div>
												);
											})}
										</div>
										{/* languages */}
										<div className="flex flex-col gap-y-2">
											<div className="text-primary"> Language Skill</div>
											<div className="border-b border-border"></div>
											<div> English, Arabic, Yoruba</div>
										</div>
									</div>
								</TabsContent>
								{/* Qualifications */}
								<TabsContent value="qualifications">
									<div>
										<h3
											className="h3 mb-8 text-center
                                xl:text-left">
											{" "}
											My Journey
										</h3>
										{/* experience and education */}
										<div className="grid md:grid-cols-2 gap-y-8">
											{/* experience */}
											<div className="flex flex-col gap-y-6">
												<div className="flex gap-x-4 items-center text-[22px] text-primary">
													<Briefcase />
													<h4 className="capitialize font-medium">
														{getData(qualificationData, "Experience").title}
													</h4>
												</div>
												{/* list */}
												<div className="flex flex-col gap-y-8">
													{getData(qualificationData, "Experience").data.map(
														(item, index) => {
															const { company, role, years } = item;
															return (
																<div className="flex gap-x-8 group" key={index}>
																	<div className="h-[84px] w-[1px] bg-border relative ml-2 ">
																		<div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
																	</div>
																	<div>
																		<div className="font-semibold text-xl leading-none mb-2">
																			{company}
																		</div>
																		<div className="text-lg leading-none text-muted-foreground mb-4">
																			{role}
																		</div>
																		<div className="text-base font-medium">
																			{years}
																		</div>
																	</div>
																</div>
															);
														}
													)}
												</div>
											</div>
											{/* education */}
											<div className="flex flex-col gap-y-6">
												<div className="flex gap-x-4 items-center text-[22px] text-primary">
													<GraduationCap size={28} />
													<h4 className="capitialize font-medium">
														{getData(qualificationData, "Education").title}
													</h4>
												</div>
												{/* list */}
												<div className="flex flex-col gap-y-8">
													{getData(qualificationData, "Education").data.map(
														(item, index) => {
															const { university, qualification, years } = item;
															return (
																<div className="flex gap-x-8 group" key={index}>
																	<div className="h-[84px] w-[1px] bg-border relative ml-2 ">
																		<div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
																	</div>
																	<div>
																		<div className="font-semibold text-xl leading-none mb-2">
																			{university}
																		</div>
																		<div className="text-lg leading-none text-muted-foreground mb-4">
																			{qualification}
																		</div>
																		<div className="text-base font-medium">
																			{years}
																		</div>
																	</div>
																</div>
															);
														}
													)}
												</div>
											</div>
										</div>
									</div>
								</TabsContent>
								{/* skills */}
								<TabsContent value="skills">
									<div className="text-center xl:text-left">
										<h3 className="h3 mb-5">Tools I Use</h3>
										<div className="flex flex-col xl:flex-row gap-[50px] justify-center">
                                        <div className="mb-14">
                                            <h4 className="text-xl text-center font-semibold mb-2"> Skills</h4>
                                            <div className="border-b border-border mb-4"></div>
                                            {/* skills list */}
                                            <div>
                                                {getData(skillData,'Skills').data.map((item, index)=>{
                                                    const {name} = item;
                                                    return (
                                                        <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0 " key={index}> 
                                                            <div className="font-medium">{name} </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        {/* tools */}
                                        <div > 
                                            <h4 className="text-xl font-semibold mb-2 xl:text-center">
                                                Tools
                                            </h4>
                                            <div className="border-b border-border mb-4"></div>
                                            <div className="flex flex-row xl:flex-col  gap-x-8 xl: gap-y-4 justify-center items-center w-[350px] mb-14 ">
                                                {getData(skillData, "Tools").data.map((item, index)=>{
                                                    const {imgPath} = item
                                                    return <div key={index}>
                                                        <Image src={imgPath} width={48} height={48} alt="" priority />
                                                        </div>
                                                })}
                                            </div>
                                        </div>
										</div>
									</div>
								</TabsContent>
							</div>
						</Tabs>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
