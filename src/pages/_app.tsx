import type {AppProps} from 'next/app';
import "./base.css";
import localFont from 'next/font/local'
import Head from "next/head";

// Font files can be colocated inside of `pages`
const myFont = localFont({src: "../../public/Montserrat-Regular.ttf"})
export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Algo Façade</title>
                <link rel="shortcut icon" href="/assets/ShortLogo.ico" />
                <meta
                    name="description"
                    content="Algo Façade, votre expert en nettoyage de façades, terrasses et toitures. Nos professionnels qualifiés utilisent des méthodes respectueuses de l'environnement pour éliminer les algues, mousses et autres salissures qui ternissent l'aspect de votre habitation. Contactez-nous dès maintenant pour un devis gratuit et retrouvez une maison comme neuve !"
                />
            </Head>
            <main className={myFont.className}>
                <Component {...pageProps} />
            </main>

        </>
    );
}
