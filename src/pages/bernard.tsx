import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const Bernard = () => {
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
				<div className="grid sm:grid-cols-2 grid-cols-1 gap-5 lg:col-span-2">
					<div className="w-fit animate-in bg-secondary mx-auto rounded-xl p-2 hover:bg-accent">
						<div className="relative w-[300px] h-[300px]">
							<Image
								src="/bernard1.png"
								fill
								className="object-contain"
								alt=""
							/>
						</div>
					</div>
					<div className="w-fit animate-in bg-secondary mx-auto rounded-xl p-2 hover:bg-accent">
						<div className="relative w-[300px] h-[300px]">
							<Image
								src="/bernard2.png"
								fill
								className="object-contain"
								alt=""
							/>
						</div>
					</div>
					<div className="w-fit animate-in bg-secondary mx-auto rounded-xl p-2 hover:bg-accent">
						<div className="relative w-[300px] h-[300px]">
							<Image
								src="/bernard3.png"
								fill
								className="object-contain"
								alt=""
							/>
						</div>
					</div>
					<div className="w-fit animate-in bg-secondary mx-auto rounded-xl p-2 hover:bg-accent">
						<div className="relative w-[300px] h-[300px]">
							<Image
								src="/bernard4.png"
								fill
								className="object-contain"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};
export default Bernard;