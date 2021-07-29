import Image from "next/image";
import Layout from "../components/Layout";
import Container from "../components/Container";
import tw from "twin.macro";
import CTA from "../components/CTA";

const StyledContainer = tw(Container)`grid gap-8 md:(gap-0)`;

const About = () => {
  return (
    <Layout title="About Us">
      <h1 tw="text-3xl sm:text-5xl md:text-6xl lg:text-7xl my-10 font-medium font-sans text-center">
        About Us
      </h1>
      <StyledContainer>
        <article tw="grid gap-8 md:grid-cols-2 md:gap-0">
          <Image
            src="/images/logo.png"
            width={300}
            height={200}
            layout="responsive"
            objectFit="cover"
            alt="Logo"
          />
          <div tw="md:p-8 md:pr-0 self-center">
            <h2 tw="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-medium text-black mb-2 font-sans">
              Who We Are
            </h2>
            <p tw="text-base font-light text-gray-500 mt-2 font-sans">
              Cam'struction Renovation is owned and managed by Camren Mofford.
              We have over 8 years of experience providing our clients with
              exceptional remodeling services for every part of their home.
            </p>
          </div>
        </article>

        <article tw="grid gap-8 md:grid-cols-2 md:gap-0">
          <Image
            src="/images/grid.png"
            width={300}
            height={200}
            layout="responsive"
            objectFit="cover"
            alt="Renovations"
          />
          <div tw="md:order-first md:p-8 md:pl-0 self-center">
            <h2 tw="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-medium text-black mb-2 font-sans">
              What We Do
            </h2>
            <p tw="text-base font-light text-gray-500 mt-2 font-sans">
              We offer remodeling services in the Cincinnati and Florence area.
              You can count on us to give new life to all areas of your home
              including your kitchen, bathroom, basement, and even your outdoor
              living space. We get things done the right way in a timely manner
              while staying within your budget.
            </p>
          </div>
        </article>
      </StyledContainer>
      <CTA />
    </Layout>
  );
};

export default About;
