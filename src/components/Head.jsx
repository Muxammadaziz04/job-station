import Head from "next/head";
import Script from "next/script";

const CHead = () => {
    return (
        <Head>
        <title>JobStation</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="stylesheet" href="css/custom-bs.css" />
        <link rel="stylesheet" href="css/jquery.fancybox.min.css" />
        <link rel="stylesheet" href="css/bootstrap-select.min.css" />
        <link rel="stylesheet" href="fonts/icomoon/style.css" />
        <link rel="stylesheet" href="fonts/line-icons/style.css" />
        <link rel="stylesheet" href="css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/animate.min.css" />
        {/* MAIN CSS */}
        <link rel="stylesheet" href="css/style.css" />

        <Script src="js/jquery.min.js"></Script>
        <Script src="js/bootstrap.bundle.min.js"></Script>
        <Script src="js/isotope.pkgd.min.js"></Script>
        <Script src="js/stickyfill.min.js"></Script>
        <Script src="js/jquery.fancybox.min.js"></Script>
        <Script src="js/jquery.easing.1.3.js"></Script>
        <Script src="js/jquery.waypoints.min.js"></Script>
        <Script src="js/jquery.animateNumber.min.js"></Script>
        <Script src="js/owl.carousel.min.js"></Script>
        <Script src="js/bootstrap-select.min.js"></Script>
        <Script src="js/custom.js"></Script>
      </Head>
    );
}

export default CHead;
