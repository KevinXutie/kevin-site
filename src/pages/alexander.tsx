import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Alexander = () => {
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
				<div className="grid sm:grid-cols-2 grid-cols-1 gap-5 lg:col-span-2">
					<div className="w-fit animate-in bg-secondary mx-auto rounded-xl p-2 hover:bg-accent">
						<div className="relative w-[300px] h-[300px]">
							<Image
								src="/alex1.png"
								fill
								className="object-contain"
								alt="Alex1"
							/>
						</div>
					</div>
					<div className="w-fit animate-in bg-secondary mx-auto rounded-xl p-2 hover:bg-accent">
						<div className="relative w-[300px] h-[300px]">
							<Image
								src="/Alex.png"
								fill
								className="object-contain"
								alt="alex"
							/>
						</div>
					</div>
					<div className="w-fit animate-in bg-secondary mx-auto rounded-xl p-2 hover:bg-accent">
						<div className="relative w-[300px] h-[300px]">
							<Image
								src="/alex2.png"
								fill
								className="object-contain"
								alt="Alex2"
							/>
						</div>
					</div>
					<div className="w-fit animate-in bg-secondary mx-auto rounded-xl p-2 hover:bg-accent">
						<div className="relative w-[300px] h-[300px]">
							<Image
								src="/alex4.png"
								fill
								className="object-contain"
								alt="Alex4"
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};
export default Alexander;
