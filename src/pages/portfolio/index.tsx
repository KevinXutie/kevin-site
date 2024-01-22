import { Card } from "@/components/ui/card";
import $$hygraph from "@/lib/graphql-client";
import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import Image from "next/image";
import Link from "next/link";

type PortfolioProps = {
	portfolios: {
		id: string;
		title: string;
		slug: string;
		shortDescription: string;
		cardImage: {
			url: string;
		};
	}[];
};
const Portfolio = () => {
	const GetAllPortfoliosCard = async () => {
		const query = gql`
			{
				portfolios {
					id
					title
					slug
					shortDescription
					cardImage {
						url
					}
				}
			}
		`;
		const data = await $$hygraph.request(query);
		return data as PortfolioProps;
	};
	const _portfolios = useQuery({
		queryFn: GetAllPortfoliosCard,
		queryKey: ["portfolios.all"],
	});
	return (
		<main className="w-full mx-auto">
			<div className="w-full mx-auto grid grid-cols-1 gap-10">
				<div>
					<h3 className="text-4xl font-bold">Portfolio</h3>
					<p>Here&apos;s what i have done so far</p>
					<p>Feel free to check them out or gice some feedback.</p>
				</div>
				<div className="grid lg:grid-cols-1 md:grid-cols-2 gap-5 ">
					{_portfolios.isLoading ? <p>Loading</p> : null}
					{_portfolios.isSuccess ? (
						<>
							{_portfolios.data?.portfolios?.map(
								(item, index) => (
									<Card
										key={`portfolio_image_${index}`}
										className="w-full mx-auto px-4 py-5 
								fade-in-image hover:bg-secondary rounded-xl"
									>
										<Link href={`/portfolio/${item.slug}`}>
											<div className="flex px-2 flex-col lg:flex-row gap-10 items-center md:flex-col h-full">
												<div className="relative h-[200px] w-[200px]">
													<Image
														src={item.cardImage.url}
														alt={item.title}
														fill
														className="object-contain object-center rounded-lg"
													/>
												</div>
												<div className="w-full max-h-full flex flex-col justify-center gap-2">
													<h3 className="text-2xl font-semibold">
														{item.title}
													</h3>
													<p className="line-clamp-4">
														{item.shortDescription}
													</p>
												</div>
											</div>
										</Link>
									</Card>
								)
							)}
						</>
					) : null}
				</div>
			</div>
		</main>
	);
};
export default Portfolio;
