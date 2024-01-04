import Link from "next/link";
import { Atom, Figma, Facebook, Mail, Linkedin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
const Footer = () => {
    return (
					<footer className="w-full flex max-h-5 py-28">
						<div className="w-full max-w-5xl px-5 lg:px-0">
							<div className="py-10">
								<h3 className="text-3xl font-bold"> Contact Me Here</h3>
								<p>Are you interested in working with me?</p>
								<p>Or do you want to ask me something?</p>
								<p>
									Or do you just wanted to become my friends? Fell free to
									contact me in these platforms.
								</p>
							</div>
							<div className="flex flex-row gap-2">
								<Link
									target="https://www.facebook.com/affordapcworks"
									href="https://www.facebook.com/affordapcworks"
									className={`${buttonVariants({
										variant: "outline",
									})} flex items-center gap-2`}
								>
									<Facebook />
									<span>Facebook</span>
								</Link>
								<Link
									href="mailto:kevincorpin40@mail.com"
									className={`${buttonVariants({
										variant: "outline",
									})} flex items-center gap-2`}
								>
									<Mail />
									<span>Google Mail</span>
								</Link>
								<Link
									target="https://www.linkedin.com/in/corpin-kevin-z-8a0961219/"
									href="https://www.linkedin.com/in/corpin-kevin-z-8a0961219/"
									className={`${buttonVariants({
										variant: "outline",
									})} flex items-center gap-2`}
								>
									<Linkedin />
									<span>LinkedIn</span>
								</Link>
							</div>
							<div className="mt-10">
								<p>Kevin Corpin @2024</p>
							</div>
						</div>
					</footer>
				);
}
export default Footer;