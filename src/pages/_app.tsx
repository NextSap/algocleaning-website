import type {AppProps} from 'next/app';
import "./base.css";
import localFont from 'next/font/local'

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: "../../public/Montserrat-Regular.ttf" })
export default function App({Component, pageProps}: AppProps) {
    return (
        <main className={myFont.className}>
            <Component {...pageProps} />
        </main>
    );
}
