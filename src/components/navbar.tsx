import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";

import { buttonVariants } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
	const { theme, setTheme } = useTheme();

	return (
		<nav className="fixed w-full top-0 left-0 flex justify-center items-center z-40 px-5 py-2 lg:px-0 bg-background">
			<div className="w-full max-w-5xl flex justify-center items-center md:justify-between py-4">
				<div className="hidden md:block">
					<Link href={"/"} className="flex gap-2 items-center group">
						<Image
							src={"/logo.png"}
							width={25}
							height={25}
							alt="Company Logo"
						/>
						<h6 className="font-bold opacity-0 group-hover:opacity-100 -translate-x-[5px] group-hover:translate-x-0 transition-all hidden md:block">
							Kevin Corpin
						</h6>
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
					<div>
						<Link
							href={"/portfolio"}
							className={`${buttonVariants({
								variant: "ghost",
								size: "sm",
							})}`}
						>
							Portfolio
						</Link>
					</div>
					<div>
						<Link
							href={"/blog"}
							className={`${buttonVariants({
								variant: "ghost",
								size: "sm",
							})}`}
						>
							Blog
						</Link>
					</div>
					<div>
						<Select
							value={theme}
							onValueChange={setTheme}
							defaultValue="dark"
						>
							<SelectTrigger>
								<SelectValue placeholder="Theme" />
							</SelectTrigger>
							<SelectContent align="end">
								<SelectItem value="system">System</SelectItem>
								<SelectItem value="light">Light</SelectItem>
								<SelectItem value="dark">Dark</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
			</div>
		</nav>
	);
};
export default NavBar;
