import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowLeft, Pointer } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const Alexander = () => {
	const images = [
		{ url: "Alex.png", title: "Image 1" },
		{ url: "alex1.png", title: "Image 2" },
		{ url: "alex2.png", title: "Image 3" },
		{ url: "alex4.png", title: "Image 4" },
	];
	return (
		<main className="w-full mx-auto flex flex-col justify-center">
			<div className="flex flex-col">
				<div className="w-full mx-auto flex flex-col items-center gap-10 mb-5 fade-in-text">
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
							<div className="w-full text-3xl flex md:flex-row gap-2 items-center">
								<div className="font-bold">Alexander Catamin</div>
								<div>
									<Badge className="bg-gradient-to-r from-yellow-200 to bg-pink-400 outline-none border-none font-bold p-2 text-center">
										PC UPGRADE
									</Badge>
								</div>
							</div>
							<div>October 21, 2023</div>
						</div>
					</div>
					<div className="flex flex-col text-center sm:text-left">
						<div>
							Hey, check out the project I did for my client, Alexander Catamin!
							I hooked him up with some awesome new PC components, and I&apos;m
							stoked that he&apos;s happy with how I handled everything. I even
							gave him a few tips on keeping his PC in top-notch shape for peak
							performance.
						</div>
						<div>
							<h3 className="text-xl py-4 font-bold">
								Project: Installing Brandnew Pc Components and peripherals
							</h3>
							<div className="flex flex-col m-auto gap-5">
								<h3 className="font-semibold">
									Adding Components Specifications
								</h3>
								<li>
									Ryzen 5 4650G, 6 Cores 12 threads Base Clock 3.7GHz Max. Boost
									Clock Up to 4.2GHz
								</li>
								<li> Gigabyte GeForce GTX 1650</li>
								<li> 16gb 8x2 Ram TFroce 3200Mhz</li>
								<li> DarkFlash Twisted Ver 2.6 Liquid Cooling</li>
								<li> 512gb 2x2 GX2 SSD TeamGroup</li>
								<li> 24 inch Curve ATLAS Gamdias</li>
							</div>
						</div>
					</div>
				</div>
				<div>
					<Carousel opts={{ align: "center", loop: true }}>
						<CarouselContent>
							{images.map((image, index) => (
								<CarouselItem
									key={`carouselItem_${index + 1}`}
									className="basis-1/1 lg:basis-1/3 w-full"
								>
									<img
										src={image.url}
										alt={image.title}
										className="mx-auto w-full h-96 object-contain object-center"
									/>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="hidden lg:inline-flex" />
						<CarouselNext className="hidden lg:inline-flex" />
					</Carousel>
					<motion.div
						animate={{
							translateX: [20, -20],
							opacity: [0, 0.3, 0],
							transition: { duration: 2, repeat: Infinity },
						}}
						className="flex lg:hidden justify-center items-center gap-2 m-1 w-max mx-auto"
					>
						<Pointer className="text-5xl" />
					</motion.div>
				</div>
			</div>
		</main>
	);
};
export default Alexander;
