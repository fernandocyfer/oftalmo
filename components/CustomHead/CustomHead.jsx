import Head from 'next/head'
import { useRouter } from 'next/router'

export default function CustomHead({ title, description }) {
  const router = useRouter()

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Oftalmocenter" />
      <meta name="keywords" content="Oftalmocenter, Oftalmocenter" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Portuguese" />
      <meta name="distribution" content="global" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo192.webp" />
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="canonical"
        href={'https://americasoftalmocenter' + router.pathname}
      />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Oftalmocenter" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://americasoftalmocenter.com/" />
      <meta property="og:site_name" content="Oftalmocenter" />
      <meta property="og:image" content="./public/images/carteiras.webp" />
      <meta
        property="og:image:secure_url"
        content="./public/images/carteiras.webp"
      />
      <meta property="og:image:width" content="192" />
      <meta property="og:image:height" content="192" />
      <meta property="og:image:alt" content="Oftalmocenter" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:description"
        content="https://americasoftalmocenter.com/"
      />
      <meta name="twitter:title" content="Oftalmocenter" />
      <meta
        name="twitter:image"
        content="https://americasoftalmocenter.com//logo192.webp"
      />
      <meta name="twitter:site" content="@assetinvestimentos" />
      <meta name="twitter:creator" content="@assetinvestimentos" />
      <meta name="twitter:image:alt" content="Oftalmocenter" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-TileImage" content="/logo192.webp" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="application-name" content="Oftalmocenter" />
      <meta name="msapplication-tooltip" content="Oftalmocenter" />
      <meta name="msapplication-starturl" content="/" />
      <meta name="msapplication-navbutton-color" content="#000000" />
      <meta name="msapplication-TileImage" content="/logo192.webp" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-square70x70logo" content="/logo192.webp" />
      <meta name="msapplication-square150x150logo" content="/logo192.webp" />
      <meta name="msapplication-wide310x150logo" content="/logo192.webp" />
      <meta name="msapplication-square310x310logo" content="/logo192.webp" />
      <meta
        name="msapplication-notification"
        content="frequency=30;polling-uri=https://notifications.buildmypinnedsite.com/?feed=https://americasoftalmocenter.com//feed.xml&amp;id=1;polling-uri2=https://notifications.buildmypinnedsite.com/?feed=https://americasoftalmocenter.com//feed.xml&amp;id=2;polling-uri3=https://notifications.buildmypinnedsite.com/?feed=https://americasoftalmocenter.com//feed.xml&amp;id=3;polling-uri4=https://notifications.buildmypinnedsite.com/?feed=https://americasoftalmocenter.com//feed.xml&amp;id=4;polling-uri5=https://notifications.buildmypinnedsite.com/?feed=https://americasoftalmocenter.com//feed.xml&amp;id=5;cycle=1"
      />
    </Head>
  )
}
