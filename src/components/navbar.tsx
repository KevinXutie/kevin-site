import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button, buttonVariants } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const NavBar = () => {
    
    const {theme, setTheme} = useTheme()

    return (
					<nav className="fixed w-full top-0 left-0 flex justify-center items-center z-40 px-5 py-2  lg:px-0 bg-background">
						<div className="w-full max-w-5xl flex justify-between items-center py-4">
							<div className="relative w-[30px] h-[30px]">
								<Link href={"/"}>
									<Image
										src="/logo.png"
										fill
										className="object-contain"
										alt="Company Logo"
									/>
								</Link>
							</div>
							<div className="flex items-center gap-5">
								<Link
									href={"/"}
									className={`${buttonVariants({
										variant: "ghost",
										size: "sm",
									})}`}
								>
									Home
								</Link>
								<Link
									href={"/portfolio"}
									className={`${buttonVariants({
										variant: "ghost",
										size: "sm",
									})}`}
								>
									Portfolio
								</Link>
								<Link
									href={"/blog"}
									className={`${buttonVariants({
										variant: "ghost",
										size: "sm",
									})}`}
								>
									Blog
								</Link>
								{!!theme && (
									<Button
										variant="ghost"
										type="button"
										size="sm"
										onClick={() =>
											setTheme(theme === "dark" ? "light" : "dark")
										}
									>
										{theme === "dark" ? <Sun /> : <Moon />}
									</Button>
								)}
							</div>
						</div>
					</nav>
				);
}
export default NavBar;