import Image from "next/image";
import Layout from "../components/Layout";
import Container from "../components/Container";
import tw from "twin.macro";
import CTA from "../components/CTA";

const StyledContainer = tw(Container)`grid gap-8 sm:(gap-0)`;

const About = () => {
  return (
    <Layout title="About Us">
      <StyledContainer>
        <article tw="grid gap-8 sm:grid-cols-2 sm:gap-0">
          <Image
            src="/images/10.jpeg"
            width={300}
            height={200}
            layout="responsive"
            objectFit="cover"
            alt="Two mowers sitting on cut grass"
          />
          <div tw="sm:p-8 self-center">
            <h2 tw="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-medium text-black mb-2">
              Who We Are
            </h2>
            <p tw="text-base font-light text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </article>

        <article tw="grid gap-8 sm:grid-cols-2 sm:gap-0">
          <Image
            src="/images/8.jpeg"
            width={300}
            height={200}
            layout="responsive"
            objectFit="cover"
            alt="Perfectly cut grass"
          />
          <div tw="sm:order-first sm:p-8 self-center">
            <h2 tw="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-medium text-black mb-2">
              Engineering, Detail, & Passion
            </h2>
            <p tw="text-base font-light text-gray-500 mt-2">
              We use the very latest engineered best practices to give you the
              results you can count on. We pride ourselves in having very high
              attention to detail and want to meet every need you have for your
              drainage needs. Our team is passionate and cares about each job we
              do. We extend that level of care to every job.
            </p>
          </div>
        </article>

        <article tw="grid gap-8 sm:grid-cols-2 sm:gap-0">
          <Image
            src="/images/6.jpeg"
            width={300}
            height={200}
            layout="responsive"
            objectFit="cover"
            alt="Dew on grass"
          />
          <div tw="sm:p-8 self-center">
            <h2 tw="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-medium text-black mb-2">
              Our Mission
            </h2>
            <p tw="text-base font-light text-gray-500 mt-2">
              Plus Drainage is your professional drainage solution with the
              personal touch of a local company. Our engineers and employees
              have a combined 40+ years in this market, delivering solutions to
              drainage issues.
            </p>
          </div>
        </article>
      </StyledContainer>
      <CTA />
    </Layout>
  );
};

export default About;
