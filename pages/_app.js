import '../styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import nprogress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';
import {AuthProvider} from "../auth/context";

Router.events.on("routeChangeStart", () => {
  nprogress.start();
})

Router.events.on("routeChangeComplete", () => {
  nprogress.done();
})

Router.events.on("routeChangeError", () => {
  nprogress.done();
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}

export default MyApp
