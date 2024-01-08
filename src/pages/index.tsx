import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Atom, Figma } from "lucide-react";
import {
	BiLogoNodejs,
	BiLogoTailwindCss,
	BiLogoTypescript,
} from "react-icons/bi";

import { TabsContent } from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import Link from "next/link";
import { SiNextdotjs } from "react-icons/si";

const HomePage = () => {
	return (
		<main className="w-full mx-auto">
			<div className="w-full mx-auto flex justify-center items-center flex-col-reverse lg:flex-row gap-5 fade-in-text">
				<div className="flex flex-col items-center fade-in-text lg:text-center">
					<h3 className="flex text-5xl font-bold flex-col items-center md:flex-row gap-2">
						<div>I&apos;m</div>
						<div className="bg-gradient-to-r from-yellow-500 to bg-pink-500 bg-clip-text text-transparent">
							Kevin Corpin
						</div>
					</h3>
					<div className="flex flex-col text-center">
						<p className="text-lg mt-4">
							Front-end developer and UI/UX designer based in the philippines,
						</p>
						<p className="text-lg ">
							I&apos;m currently running a small business which is Afforda Pc
							Workshop as a Computer Technian.
						</p>
					</div>
				</div>
				<div>
					<img
						src="/kevin.png"
						alt=""
						className="object-cover rounded-3xl w-[275px] h-[325px]"
					/>
				</div>
			</div>
			<div className=" w-full mx-auto py-5 fade-in-text">
				<h3 className="text-2xl font-bold mb-5">Here&apos;s my Tech</h3>

				<div className="flex flex-col gap-5">
					<Link target="https://react.dev" href="https://react.dev">
						<motion.div
							whileHover={{ scale: 1.05 }}
							transition={{ ease: "easeInOut", transition: 1 }}
						>
							<div className="w-full mx-auto flex flex-row gap-5 bg-secondary p-4 rounded-lg hover:bg-accent">
								<div className="flex items-center">
									<Atom className="w-[50px] h-[50px]" />
								</div>

								<div className=" flex max-h-full items-center  flex-col gap-2 lg:flex-row ">
									<p className="text-xl font-semibold w-full lg:w-fit">React</p>
									<p>A JavaScripts Library for building user interfaces. </p>
								</div>
							</div>
						</motion.div>
					</Link>

					<Link
						target="https://www.typescriptlang.org/"
						href="https://www.typescriptlang.org/"
					>
						<motion.div
							whileHover={{ scale: 1.05 }}
							transition={{ ease: "easeInOut", transition: 1 }}
						>
							<div className="w-full mx-auto flex flex-row gap-5 bg-secondary p-4 rounded-lg hover:bg-accent">
								<div className="flex items-center">
									<BiLogoTypescript className="w-[50px] h-[50px]" />
								</div>
								<div className=" flex max-h-full items-center  flex-col gap-2 lg:flex-row ">
									<p className="text-xl font-semibold w-full lg:w-fit line-clamp-0">
										TypeScripts
									</p>
									<p>
										A strongly typed programming language that builds on
										JavaScript, giving you better tooling at any scale.
									</p>
								</div>
							</div>
						</motion.div>
					</Link>

					<Link
						target="https://tailwindcss.com/"
						href="https://tailwindcss.com"
					>
						<motion.div
							whileHover={{ scale: 1.05 }}
							transition={{ ease: "easeInOut", transition: 1 }}
						>
							<div className="w-full mx-auto flex flex-row gap-5 bg-secondary p-4 rounded-lg hover:bg-accent">
								<div className="flex items-center">
									<BiLogoTailwindCss className="w-[50px] h-[50px]" />
								</div>
								<div className=" flex max-h-full items-center  flex-col gap-2 lg:flex-row ">
									<p className="text-xl font-semibold w-full lg:w-fit">
										Tailwind CSS
									</p>
									<p>
										A utility-first CSS framework for rapidly building custom
										user interfaces.
									</p>
								</div>
							</div>
						</motion.div>
					</Link>
					<Link target="https://nextjs.org" href="https://nextjs.org">
						<motion.div
							whileHover={{ scale: 1.05 }}
							transition={{ ease: "easeOut", transition: 1 }}
						>
							<div className="w-full mx-auto flex flex-row gap-5 bg-secondary p-4 rounded-lg hover:bg-accent">
								<div className="flex items-center">
									<SiNextdotjs className="w-[50px] h-[50px]" />
								</div>
								<div className=" flex max-h-full items-center  flex-col gap-2 lg:flex-row ">
									<p className="text-xl font-semibold w-full lg:w-fit ">
										Next Js
									</p>
									<p>
										The ultimate React framework that enables developers to
										build web application with ease.
									</p>
								</div>
							</div>
						</motion.div>
					</Link>
					<Link target="https://nodejs.org/en" href="https://nodejs.org/en">
						<motion.div
							whileHover={{ scale: 1.05 }}
							transition={{ ease: "easeOut", transition: 1 }}
						>
							<div className="w-full mx-auto flex flex-row gap-5 bg-secondary p-4 rounded-lg hover:bg-accent">
								<div className="flex items-center">
									<BiLogoNodejs className="w-[50px] h-[50px]" />
								</div>
								<div className=" flex max-h-full items-center  flex-col gap-2 lg:flex-row ">
									<p className="text-xl font-semibold w-full lg:w-fit ">
										Node Js
									</p>
									<p className="line-clamp-4">
										Node.js is a cross-platform, open-source JavaScript runtime
										environment.
									</p>
								</div>
							</div>
						</motion.div>
					</Link>
					<Link target="https://www.figma.com" href="https://www.figma.com">
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 1.05 }}
							transition={{ ease: "easeInOut", transition: 1 }}
						>
							<div className="w-full flex flex-row gap-5 bg-secondary p-4 rounded-lg hover:bg-accent">
								<div className="flex items-center">
									<Figma className="w-[50px] h-[50px]" />
								</div>
								<div className=" flex max-h-full items-center  flex-col gap-2 lg:flex-row ">
									<p className="text-xl font-semibold w-full lg:w-fit">Figma</p>
									<p>
										A vector graphics editor and prototyping tool which is
										primarily web-based.
									</p>
								</div>
							</div>
						</motion.div>
					</Link>
				</div>
			</div>

			<Tabs defaultValue="education" className="mt-10">
				<TabsList>
					<TabsTrigger value="education">Education</TabsTrigger>
					<TabsTrigger value="personal">Personal Life</TabsTrigger>
					<TabsTrigger value="work">Work Experience</TabsTrigger>
				</TabsList>
				<TabsContent value="education" className="fade-in-text">
					<div className="w-full grid grid-cols-1 lg:grid-cols-2 py-5 gap-5">
						<div className="bg-secondary rounded-xl px-5 py-4">
							<h3 className="text-2xl font-bold">
								What college did you attend?
							</h3>
							<h3 className="text-2xl font-bold">What course did you take?</h3>
							<p className="mt-2 line-clamp-6">
								I studied in the University of Caloocan City, taking up Bachelor
								of Science in Computer Science. I graduated last June 2023.
							</p>
						</div>
						<div className="bg-secondary rounded-xl px-5 py-4">
							<h3 className="text-2xl font-bold">
								What did you focus on during your studies?
							</h3>
							<p className="mt-2">
								I focused on UI/UX Designer using Next.js and Tailwind CSS,also
								I&apos;m Computer Technician and I made a small business called
								Afforda Pc Workshop where I accepts repair and assemble personal
								computers from my clients based on their budget.
							</p>
						</div>
						<div className="bg-secondary rounded-xl px-5 py-4">
							<h3 className="text-2xl font-bold">
								How important is education to you?
							</h3>
							<p className="mt-2">
								To me, education plays a crucial role in honing not only skills
								but also ethical values, preparing individuals to navigate
								real-life challenges—an arena I often refer to as the outside
								world.
							</p>
						</div>
					</div>
				</TabsContent>
				<TabsContent value="personal" className="fade-in-text">
					<div className="w-full grid grid-cols-1 lg:grid-cols-2 py-5 gap-5">
						<div className="bg-secondary rounded-xl px-5 py-4">
							<h3 className="text-2xl font-bold">
								What is your Favorite Food?
							</h3>
							<p className="mt-2">
								When it comes to Filipino grub, I&apos;m all about that
								&bdquo;Adobo,&bdquo; &bdquo;Sinigang,&bdquo; and
								&bdquo;Kare-Kare&bdquo; life—especially when it&apos;s whipped
								up by the folks I love. That&apos;s the real deal!
							</p>
						</div>
						<div className="bg-secondary rounded-xl px-5 py-4">
							<h3 className="text-2xl font-bold">
								What&apos;s your dream job??
							</h3>
							<p className="mt-2">
								I&apos;m all about chasing my dream job as a pro web developer.
								The plan? Stack up some savings, kickstart my own small
								business, and eventually open up a sweet computer store.
								I&apos;m all about that tech life!
							</p>
						</div>
						<div className="bg-secondary rounded-xl px-5 py-4">
							<h3 className="text-2xl font-bold">
								What&apos;s your biggest fear?
							</h3>
							<p className="mt-2">
								My biggest fear I guess is deep ocean&apos;s since I have
								thalassophobia.
							</p>
						</div>
						<div className="bg-secondary rounded-xl px-5 py-4">
							<h3 className="text-2xl font-bold">What&apos;s your hobbies?</h3>
							<p className="mt-2">
								My hobbies include basketball and playing games on both my
								computer and mobile— you know, stuff like League of Legends,
								Mobile Legends, Clash of Clans, and Dota 2. .
							</p>
						</div>
						<div className="bg-secondary rounded-xl px-5 py-4">
							<h3 className="text-2xl font-bold">
								If you could be an animal for a day, what would you be and why?
							</h3>
							<p className="mt-2">
								If I could be any animal for a day, I&apos;d totally pick a
								bird. I mean, flying in the sky, checking out the world from
								above, and skipping traffic – that would be the great!
							</p>
						</div>
					</div>
				</TabsContent>
				<TabsContent value="work" className="fade-in-text">
					<div className="w-full grid grid-cols-1 lg:grid-cols-2 py-5 gap-5">
						<div className="bg-secondary rounded-xl px-5 py-4">
							<h3 className="text-2xl font-bold">Afforda Pc WorkShop</h3>
							<p className="mt-2 font-semibold text-lg">
								Computer Technician - Freelance
							</p>
							<p className="mt-2">
								• Accept client desktop and laptop for repairs
							</p>
							<p className="mt-2">
								• Disassembled System unit to diagnose issues and make selected
								repairs
							</p>
							<p className="mt-2">
								• Break down systems, remove malfunctioning hardware, and
								install new parts.
							</p>
							<p className="mt-2">
								• Provided computer repair services to small business and
								private customers.{" "}
							</p>
							<p className="mt-4 italic">December 2020 - Present</p>
						</div>
						<div className="bg-secondary rounded-xl px-5 py-4">
							<h3 className="text-2xl font-bold">
								Japan Tabacco International
							</h3>
							<p className="mt-2 font-semibold text-lg">
								Finance Branch Support
							</p>
							<p className="mt-2">
								• Calling a customer to validate their information in our
								database
							</p>
							<p className="mt-2">
								• Check and correct their Customer Master Data
							</p>
							<p className="mt-2">
								• Scanning and organize the customer requirements and upload it
								through online.
							</p>
							<p className="mt-4 italic">August - November 2023</p>
						</div>
						<div className="bg-secondary rounded-xl px-5 py-4">
							<h3 className="text-2xl font-bold">IT INTERN</h3>
							<p className="mt-2 font-semibold text-lg">IT Support</p>
							<p className="mt-2">• Network Troubleshooting </p>
							<p className="mt-2">• Assembling Office Computer </p>
							<p className="mt-2">• Technical Support </p>
							<p className="mt-4 italic">June- December 2022</p>
						</div>
					</div>
				</TabsContent>
			</Tabs>
		</main>
	);
};
export default HomePage;
{
	/* <Button variant="outline" className="gap-2"><Facebook />Facebook</Button>
        <Button variant="outline" className="gap-2"><Mail />Google Mail</Button>
        <Button variant="outline" className="gap-2"><Linkedin />LinkedIn</Button> */
}
