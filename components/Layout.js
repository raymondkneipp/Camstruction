import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Alert from "../components/Alert";
import tw from "twin.macro";

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>Plus Drainage | {title}</title>

        <meta name="title" content="Plus Drainage" />
        <meta
          name="description"
          content="Plus Drainage is your professional drainage solution with the personal touch of a local company. Our engineers and employees have a combined 40+ years in this market, delivering solutions to drainage issues."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.https://www.plusdrainage.com/"
        />
        <meta property="og:title" content="Plus Drainage" />
        <meta
          property="og:description"
          content="Plus Drainage is your professional drainage solution with the personal touch of a local company. Our engineers and employees have a combined 40+ years in this market, delivering solutions to drainage issues."
        />
        {/* <meta property="og:image" content="/images/bg-logo.jpg" /> */}

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.https://www.plusdrainage.com/"
        />
        <meta property="twitter:title" content="Plus Drainage" />
        <meta
          property="twitter:description"
          content="Plus Drainage is your professional drainage solution with the personal touch of a local company. Our engineers and employees have a combined 40+ years in this market, delivering solutions to drainage issues."
        />
        {/* <meta property="twitter:image" content="/images/bg-logo.jpg"></meta> */}

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />

        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js"
          defer
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollTrigger.min.js"
          defer
        ></script>
      </Head>

      <div tw="min-h-screen flex flex-col">
        <Alert text="Schedule a free estimate today!" url="/schedule" />
        <Navbar />
        <main tw="flex-1 flex flex-col">{children}</main>
      </div>

      <Footer />
    </div>
  );
};
export default Layout;
