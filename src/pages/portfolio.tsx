import { Card, CardContent, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import * as React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";

const Portfolio = () => {
    return (
					<main className="w-full mx-auto">
						<div className="w-full mx-auto grid grid-cols-1 gap-10">
							<div>
								<h3 className="text-4xl font-bold">Portfolio</h3>
								<p>Here&apos;s what i have done so far</p>
								<p>Feel free to check them out or gice some feedback.</p>
							</div>
							<div className="grid lg:grid-cols-1 md:grid-cols-2 gap-5 ">
								<Card
									className="w-full mx-auto px-4 py-5 
								fade-in-image hover:bg-secondary rounded-xl"
								>
									<Link href={"/alexander"}>
										<div className="flex px-2 flex-col lg:flex-row gap-10 items-center md:flex-col">
											<div>
												<Image
													src="/Alex.png"
													alt="image"
													width={200}
													height={200}
													className="object-cover object-center rounded-lg"
												/>
											</div>
											<div className="w-full max-h-full flex flex-col justify-center gap-2">
												<h3>
													<p className="text-2xl font-semibold">
														Installing Brandnew Pc Components and peripherals
													</p>
												</h3>
												<p className="line-clamp-4">
													I am pleased to present a project in which I undertook
													the assembly of PC components for my client, Mr.
													Alexander Catamin. This endeavor was initiated to
													facilitate the necessary upgrade of his computer
													system, specifically tailored to enhance its
													capabilities for video editing, an essential
													requirement for his professional work.
												</p>
											</div>
										</div>
									</Link>
								</Card>
								<Card
									className="w-full px-4 py-5 
								fade-in-image hover:bg-secondary rounded-xl"
								>
									<Link href={"/mywebsite"}>
										<div className="flex px-2 flex-col lg:flex-row gap-10 items-center md:flex-col">
											<div>
												<Image
													src="/mywebsite.png"
													alt="image"
													width={200}
													height={200}
													className="object-cover object-center rounded-lg"
												/>
											</div>
											<div className="w-full max-h-full flex flex-col justify-center gap-2">
												<h3>
													<p className="text-2xl font-semibold">
														Personal Website
													</p>
												</h3>
												<p>
													Hey, have a quick look at my website! I&apos;m all
													about front-end development and UI/UX design. Would
													love to hear your thoughts, so feel free to explore!
												</p>
											</div>
										</div>
									</Link>
								</Card>
								<Card
									className="w-full px-4 py-5 
								fade-in-image hover:bg-secondary rounded-xl"
								>
									<Link href={"/bernard"}>
										<div className="flex px-2 flex-col lg:flex-row gap-10 items-center md:flex-col">
											<div>
												<Image
													src="/Bernard.png"
													alt="image"
													width={200}
													height={200}
													className="object-cover object-center rounded-lg"
												/>
											</div>
											<div className="w-full max-h-full flex flex-col justify-center gap-2">
												<h3>
													<p className="text-2xl font-semibold">
														Fulfilling the Dream
													</p>
												</h3>
												<p>
													Crafting the Ultimate Personal Computer for Client
													Bernard Turiana within Budget Constraints.
												</p>
											</div>
										</div>
									</Link>
								</Card>
							</div>
						</div>
					</main>
				);
}
export default Portfolio;
