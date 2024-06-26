import '../styles/globals.css'
import '@fontsource/inter'
import '@fontsource/merriweather'
import '@fontsource/cinzel/800.css'
import '@fontsource/orbitron'

import Script from 'next/script'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>

			<Script strategy="lazyOnload" id="analytics">
				{`
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
				page_path: window.location.pathname,
				});
		`}
			</Script>

			<Component {...pageProps} />
		</>
	)
}

export default MyApp
