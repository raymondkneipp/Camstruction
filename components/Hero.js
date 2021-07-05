import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import tw, { css } from "twin.macro";

const StyledContainer = tw(
  Container
)`grid grid-flow-row gap-8 grid-cols-6 items-center`;

const Hero = () => {
  return (
    <section tw="min-h-screen flex items-center pt-24 sm:pt-12 md:pt-0 -mt-28 sm:-mt-14">
      <StyledContainer>
        <article tw="flex flex-col items-center md:(items-start text-left col-end-6 row-span-full) md: text-center col-span-6 sm:col-start-1 relative z-20">
          <h1 tw="text-3xl sm:text-5xl md:text-6xl lg:text-7xl my-2 font-medium">
            We Service All Your Drainage Needs
          </h1>
          <h2 tw="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-light text-gray-500 my-2">
            Professional Foundation Care
          </h2>
          <p tw="text-sm sm:text-base md:text-lg lg:text-xl font-light text-gray-500 my-2">
            Yard Drainage, Basement Waterproofing, and more...
          </p>
          <Link href="/contact" passHref>
            <a
              tw="bg-white text-blue-700 border border-blue-700 transition rounded-full py-1 px-4 text-lg inline-block hocus:(outline-none bg-blue-700 text-white) my-2"
              css={[
                css`
                  animation: wiggle 5s ease-in-out infinite;
                `,
              ]}
            >
              Contact Us
            </a>
          </Link>
        </article>

        <div tw="col-span-6 md:col-start-3 md:col-end-7 md:row-span-full relative z-0">
          <Image
            src="/images/grid.jpg"
            width={300}
            height={200}
            layout="responsive"
            objectFit="cover"
            alt="Mowers on cut grass"
          />
        </div>

        <div tw="hidden md:block col-start-3 col-end-6 row-span-full relative z-10 h-full w-full bg-gradient-to-r from-white"></div>
      </StyledContainer>
    </section>
  );
};

export default Hero;
