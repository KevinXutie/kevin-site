import "@/styles/globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Page from "@/components/page-wrapper";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import NextThemeProvider from "../components/theme-provider";

export default function App({ Component, pageProps }: AppProps) {
	const _queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
			},
		},
	});
	return (
		<>
			<NextThemeProvider>
				<NavBar />
				<QueryClientProvider client={_queryClient}>
				<ReactQueryDevtools />
				<div className="min-h-screen">
					<Page>
						<Component {...pageProps} />
						<Footer />
					</Page>
				</div>
				</QueryClientProvider>
			</NextThemeProvider>
			<Analytics />
		</>
	);
}

