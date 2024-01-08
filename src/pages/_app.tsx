import "@/styles/globals.css";

import Page from "@/components/page-wrapper";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import NextThemeProvider from "../components/theme-provider";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<NextThemeProvider>
				<NavBar />
				<div className="min-h-screen">
					<Page>
						<Component {...pageProps} />
						<Footer />
					</Page>
				</div>
			</NextThemeProvider>
			<Analytics />
		</>
	);
}

