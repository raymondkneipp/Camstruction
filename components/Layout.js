import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Alert from "../components/Alert";

const Layout = ({ children, title }) => {
	const description = "Renovation And Construction Experts in Cincinnati, OH";

	return (
		<div>
			<Head>
				<title>
					{description} | {title} | Cam'struction Renovation
				</title>

				<meta
					name="description"
					content="Remodeling and construction team with over eight years of experience."
				></meta>

				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<link rel="icon" type="image/png" href="/favicon.png" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&family=Roboto+Slab&display=swap"
					rel="stylesheet"
				/>
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
