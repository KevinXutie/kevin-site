import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const MyComponets = () => {
	const images = [
		{
			url: "bernard1.png",
			title: "Image 1",
		},
		{
			url: "bernard2.png",
			title: "Image 2",
		},

		{
			url: "bernard3.png",
			title: "Image 3",
		},

		{
			url: "bernard4.png",
			title: "Image 4",
		},
	];
	return (
		<div className="w-full max-w-5xl mx-auto px-2 lg:px-0">
			<Carousel>
				<CarouselContent>
					{images.map((image, i) => (
						<CarouselItem
							key={`carouselitem_${i + 1}`}
							className="basis-1/1 lg:basis-1/3 w-fit"
						>
							<img
								src={image.url}
								alt={image.title}
								className="mx-auto w-full h-96 object-contain object-center"
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="hidden lg:inline-flex" />
				<CarouselNext className="hidden lg:inline-flex" />
			</Carousel>
		</div>
	);
};

// 	return (
// 		<motion.div
// 			className="w-[200px] h-[50px] rounded-xl bg-red-600 flex items-center"
// 			whileHover={{ scale: 1.1 }}
// 			transition={{ type: "spring", stiffness: 400, damping: 10 }}
// 		>
// 			<div className="w-full mx-auto flex items-center justify-center">
// 				Test
// 			</div>
// 		</motion.div>
// 	);
// };

export default MyComponets;