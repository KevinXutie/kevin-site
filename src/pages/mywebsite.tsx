import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const MyWebsite = () => {
    return (
					<main>
						<div className="w-full mx-auto flex flex-col gap-10 mb-5 fade-in-text lg:px-0">
							<div className="w-full mx-auto flex flex-row items-center gap-4">
								<div className="w-fit rounded-lg">
									<Link
										href="/portfolio"
										className={buttonVariants({ variant: "ghost", size: "sm" })}
									>
										<ArrowLeft />
									</Link>
								</div>
								<div>
									<div className="w-full text-3xl flex flex-row gap-2">
										<p className="font-bold">Personal Website</p>
									</div>
									<div>October 21, 2023</div>
								</div>
							</div>
							<p>
								Welcome to my personal website, where I&apos;m thrilled to take
								you on a joyous ride through my unique journey! I&apos;m Kevin
								Corpin, a computer technician and Front-end Developer with a
								special focus on UI/UX Design. As a cheerful freelancer,
								I&apos;m passionate about not only fixing and building computers
								but also crafting delightful user experiences and innovative web
								solutions that promise a fantastic user adventure. Join me on
								this exciting exploration of technology and creativity!
							</p>
							<div className="flex flex-col gap-5">
								<h3 className="text-xl font-bold">
									My Journey as Computer Technician and front-end developer
								</h3>
								<div className="flex flex-col m-auto gap-5">
									<div className="flex flex-col gap-2">
										<h3 className="font-semibold text-xl">
											Afforda PC Workshop: Where I Make Tech Magic Happen!
										</h3>
										<p>
											In the Afforda PC workshop, I serve as a Computer
											Technician, responsible for accepting clients desktops and
											laptops for repairs. My duties include disassembling
											system units to diagnose issues and conducting selected
											repairs. This involves breaking down systems, removing
											malfunctioning hardware, and installing new parts as
											needed. Additionally, I provide computer repair services
											to both small businesses and private customers, ensuring
											their systems are up and running smoothly.
										</p>
									</div>
								</div>
								<div className="flex flex-col m-auto gap-5">
									<div className="flex flex-col gap-2">
										<h3 className="font-semibold text-xl">
											UI/UX Designer: Forging Seamless Journeys Through
											Intuitive Design
										</h3>
										<p>
											In the Afforda PC workshop, I serve as a Computer
											Technician, responsible for accepting clients desktops
											and laptops for repairs. My duties include disassembling
											system units to diagnose issues and conducting selected
											repairs. This involves breaking down systems, removing
											malfunctioning hardware, and installing new parts as
											needed. Additionally, I provide computer repair services
											to both small businesses and private customers, ensuring
											their systems are up and running smoothly.
										</p>
									</div>
								</div>
							</div>
						</div>
					</main>
				);
}
export default MyWebsite;