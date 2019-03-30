import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
          <meta property="og:title" content="" key="ogTitle" />
          <meta property="og:type" content="website" key="ogType" />
          <meta property="og:url" content="" key="ogUrl" />
          <meta property="og:site_name" content="" key="ogSiteName" />
          <meta property="og:image" content="" key="ogImage" />
          <meta property="og:image:type" content="image/jpeg" key="ogImageType" />
          <meta property="og:image:width" content="400" key="ogImageWidth" />
          <meta property="og:image:height" content="400" key="ogImageHeight" />
          <meta property="og:image:alt" content="" key="ogAlt" />
          {/* <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" key="faviconApple" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" key="favicon32" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" key="favicon16" />
          <link rel="manifest" href="/static/site.webmanifest" key="faviconManifest" />
          <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5bbad5" key="faviconSafari" />
          <meta name="msapplication-TileColor" content="#da532c" key="faviconMs" />
          <meta name="theme-color" content="#ffffff" key="faviconTheme" /> */}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
