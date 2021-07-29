import { useEffect } from "react";
import Link from "next/link";
import tw, { css } from "twin.macro";
import Container from "./Container";

const StyledContainer = tw(
  Container
)`relative flex flex-col items-center justify-center overflow-hidden`;

const CTA = () => {
  useEffect(() => {
    gsap.to("#box", {
      width: "100%",
      scrollTrigger: {
        trigger: "#box",
        scrub: 1,
        start: "top bottom",
        end: "bottom center",
      },
    });
  }, []);

  return (
    <StyledContainer>
      <section tw="bg-white shadow-lg p-8 flex flex-col items-center w-full sm:w-8/12 lg:w-6/12 z-10 relative">
        <h2 tw="text-center text-xl sm:text-2xl md:text-3xl lg:text-3xl font-medium text-black my-2 font-sans">
          Get A Free Estimate
        </h2>
        <p tw="text-center text-base font-light text-gray-500 my-2 font-serif">
          Schedule a free estimate online today!
        </p>

        <Link href="/schedule" passHref>
          <a
            tw="bg-white text-red-700 border border-red-700 hover:(bg-red-700 text-white) transition rounded-full py-1 px-4 text-lg inline-block focus:(outline-none bg-red-700 text-white) my-2 font-serif"
            css={[
              css`
                animation: wiggle 5s ease-in-out infinite;
              `,
            ]}
          >
            Free Quote
          </a>
        </Link>
      </section>
      <div
        tw="bg-red-700 w-full sm:w-9/12 lg:w-7/12 h-48 transform -translate-y-1/2 z-0 absolute top-1/2"
        id="box"
      ></div>
    </StyledContainer>
  );
};

export default CTA;
