import { MdOutlineConstruction } from "react-icons/md";

const Blog = () => {
    return (
					<main className="flex items-center justify-center py-28">
						<div
							className="flex items-center flex-col animate-pulse
                        "
						>
							<div>
								<MdOutlineConstruction className="w-[70px] h-[70px]" />
							</div>
							<div>
								<span className="text-2xl font-semibold bg-gradient-to-r bg-clip-text text-transparent from-yellow-700 to-pink-700">
									Underconstruction
								</span>
							</div>
						</div>
					</main>
				);
}
export default Blog;