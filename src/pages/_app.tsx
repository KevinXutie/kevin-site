import '@/styles/globals.css'
import Page from '@/components/page-wrapper'
import type { AppProps } from 'next/app'
import NavBar from '../components/navbar'
import NextThemeProvider from '../components/theme-provider'
import Footer from '../components/footer'

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
			</>
		);
}

