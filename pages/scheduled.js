import Layout from "../components/Layout";
import tw from "twin.macro";
import Container from "../components/Container";
import Link from "next/link";

const StyledContainer = tw(
  Container
)`flex flex-col items-center justify-center flex-1`;

const Scheduled = () => {
  return (
    <Layout title="Renovation Quote Scheduled">
      <StyledContainer>
        <h2 tw="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-light text-gray-500 my-2 text-center font-sans">
          Thank You For Scheduling Your Free Quote
        </h2>
        <p tw="text-sm sm:text-base md:text-lg lg:text-xl font-light text-gray-500 my-2 font-serif">
          You will receive a confirmation email shortly
        </p>
        <Link href="/" passHref>
          <a tw="bg-white text-red-700 border border-red-700 transition rounded-full py-1 px-4 text-lg inline-block hocus:(outline-none bg-red-700 text-white) my-2 font-serif">
            Return To Home
          </a>
        </Link>
      </StyledContainer>
    </Layout>
  );
};

export default Scheduled;
