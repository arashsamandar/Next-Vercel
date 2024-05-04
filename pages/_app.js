import { useEffect } from "react";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Component {...pageProps} />
    <Script src="https://code.jquery.com/jquery-3.6.0.min.js" />
    <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" />
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js" />
    </>
  );
}