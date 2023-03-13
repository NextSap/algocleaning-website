import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html className="h-full w-full p-0 m-0">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <body className="h-full w-full p-0 m-0">
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}
