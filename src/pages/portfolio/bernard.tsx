import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, useScroll } from "framer-motion";
import { ArrowLeft, Pointer } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Bernard = () => {
	const { scrollYProgress } = useScroll();
	const images = [
		{
			url: "/bernard1.png",
			title: "Image 2",
		},
		{
			url: "/bernard2.png",
			title: "Image 2",
		},
		{
			url: "/bernard3.png",
			title: "Image 3",
		},
		{
			url: "/bernard4.png",
			title: "Image 4",
		},
	];
	return (
		<main className="w-full mx-auto flex flex-col justify-center">
			<motion.div
				className="progress-bar z-40 mt-20"
				style={{ scaleX: scrollYProgress }}
			/>
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
								<div className="font-bold">Bernard Turiana</div>
								<div>
									<Badge className="bg-gradient-to-r from-yellow-200 to bg-pink-400 outline-none border-none font-bold p-2 text-center">
										PC ASSEMBLY
									</Badge>
								</div>
							</div>
							<div>October 21, 2023</div>
						</div>
					</div>
					<div className="flex flex-col text-center sm:text-left">
						<div>
							Hey there! Just wanted to share the awesome project I recently
							wrapped up for my client, Bernard Turiana! I put together a killer
							personal computer for him, working within the budget he had on
							hand. It was a blast bringing his vision to life, and I&apos;m
							stoked with how it turned out. If you&apos;re into tech stuff, you
							should definitely take a peek!
						</div>
						<div>
							<h3 className="text-xl py-4 font-bold">
								Project: Crafting the Ultimate Personal Computer for Client
								Bernard Turiana within Budget Constraints.
							</h3>
							<div className="flex flex-col m-auto gap-5">
								<li>
									Ryzen 5 5600G, 6 Cores 12 threads Base Clock 3.9GHz Max. Boost
									Clock Up to 4.4GHz
								</li>
								<li> MSI B450-A Pro Max</li>
								<li> 16gb 8x2 Ram TFroce 3200Mhz</li>
								<li> TreadSonic Case</li>
								<li> Inplay 650W Ultra Series GS650 80plus bronze</li>
								<li> 512gb 2x2 GX2 SSD TeamGroup</li>
								<li> 24 inch Frameless Monitor NVISION</li>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full max-w-5xl mx-auto px-2 lg:px-0">
					<Carousel opts={{ align: "center", loop: true }}>
						<CarouselContent>
							{images.map((image, index) => (
								<CarouselItem
									key={`carouselitem_${index + 1}`}
									className="basis-1/1 lg:basis-1/3 w-full relative"
								>
									<div className="mx-auto w-full h-96">
									<Image
										src={image.url}
										alt={image.title}
										className=" object-contain object-center"
										fill
										/>
									</div>
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
						className="flex lg:hidden justify-center items-center gap-2
						 mt-1 w-max mx-auto"
					>
						<Pointer className="text-5xl" />
					</motion.div>
				</div>
			</div>
		</main>
	);
};
export default Bernard;