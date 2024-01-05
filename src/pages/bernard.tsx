import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const Bernard = () => {
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
							<p className="font-bold">Bernard Turiana</p>
							<Badge className="bg-gradient-to-r from-yellow-200 to bg-pink-400 outline-none border-none font-bold">
								PC ASSEMBLY
							</Badge>
						</div>
						<div>October 21, 2023</div>
					</div>
				</div>
				<p>
					Hey there! Just wanted to share the awesome project I recently wrapped
					up for my client, Bernard Turiana! I put together a killer personal
					computer for him, working within the budget he had on hand. It was a
					blast bringing his vision to life, and I&apos;m stoked with how it
					turned out. If you&apos;re into tech stuff, you should definitely take
					a peek!
				</p>
				<div>
					<h3 className="text-xl mb-5 fontbo">
						Project: Crafting the Ultimate Personal Computer for Client Bernard
						Turiana within Budget Constraints.
					</h3>
					<div className="flex flex-col m-auto gap-5">
						<h3 className="font-semibold">Adding Components Specifications</h3>
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
			<div className=" max-h-max fade-in-image rounded-xl px-5 py-5 grid gap-5 lg:grid-cols-2 md:grid-cols-1 ">
				<div className="w-fit px-5 py-5 animate-in bg-secondary mx-auto rounded-xl hover:bg-accent">
					<div className="relative w-[400px] h-[400px]">
						<Image src="/bernard1.png" fill className="object-contain" alt="" />
					</div>
				</div>
				<div className="w-fit px-5 py-5 animate-in bg-secondary mx-auto rounded-xl hover:bg-accent">
					<div className="relative w-[400px] h-[400px]">
						<Image src="/bernard2.png" fill className="object-contain" alt="" />
					</div>
				</div>
				<div className="w-fit px-5 py-5 animate-in bg-secondary mx-auto rounded-xl hover:bg-accent">
					<div className="relative w-[400px] h-[400px]">
						<Image src="/bernard3.png" fill className="object-contain" alt="" />
					</div>
				</div>
				<div className="w-fit px-5 py-5 animate-in bg-secondary mx-auto rounded-xl hover:bg-accent">
					<div className="relative w-[400px] h-[400px]">
						<Image src="/bernard4.png" fill className="object-contain" alt="" />
					</div>
				</div>
			</div>
		</main>
	);
};
export default Bernard;