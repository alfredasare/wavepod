import Head from "next/head";
import {GlobalStyle} from "@/global/Global";

function MyApp({Component, pageProps}) {
    return (
        <>
            <GlobalStyle/>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap"
                      rel="stylesheet"/>
                <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
                        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
                        crossOrigin="anonymous"/>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp
