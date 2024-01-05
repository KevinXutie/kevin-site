import Link from "next/link";
import { Atom, Figma, Facebook, Mail, Linkedin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
const Footer = () => {
    return (
					<footer className="w-full flex max-h-5 py-28 flex-col">
						<div className="w-full max-w-5xl lg:px-0">
							<div className="flex items-center sm:block py-10 flex-col">
								<h3 className="text-3xl font-bold"> Contact Me Here</h3>
								<p>Are you interested in working with me?</p>
								<p>Or do you want to ask me something?</p>
								<p>Fell free to contact me in these platforms.</p>
							</div>
							<div className="flex flex-col sm:flex-row  items-center gap-2">
								<div>
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
								<div>
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
								</div>
								<div>
									<Link
										href="mailto:kevincorpin40@mail.com"
										className={`${buttonVariants({
											variant: "outline",
										})} flex items-center gap-2`}
									>
										<Mail />
										<span>Google Mail</span>
									</Link>
								</div>
							</div>
						</div>
						<div className="mt-10">
							<p>Kevin Corpin @2024</p>
						</div>
					</footer>
				);
}
export default Footer;