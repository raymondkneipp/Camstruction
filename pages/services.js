import { useEffect } from "react";
import tw from "twin.macro";
import Container from "../components/Container";
import CTA from "../components/CTA";
import Layout from "../components/Layout";
import ServiceItem from "../components/ServiceItem";

const StyledContainer = tw(
  Container
)`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-min`;

const Services = () => {
  useEffect(() => {
    gsap.from(".serviceItem", {
      y: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: ".serviceItem",
      },
      stagger: 0.1,
    });
  }, []);

  return (
    <Layout title="Services">
      <StyledContainer>
        <ServiceItem
          image="7.jpeg"
          header="Yard Drainage"
          subheader="Lorem ipsum dolor"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          vertical
        />
        <ServiceItem
          image="5.jpeg"
          header="Basement Waterproofing"
          subheader="Lorem ipsum dolor"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          vertical
        />
        <ServiceItem
          image="1.jpeg"
          header="Downspout Water Management"
          subheader="Lorem ipsum dolor"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          vertical
        />

        <ServiceItem
          image="3.jpeg"
          header="French Drains"
          subheader="Lorem ipsum dolor"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          vertical
        />

        <ServiceItem
          image="8.jpeg"
          header="Window Well Drains"
          subheader="Lorem ipsum dolor"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          vertical
        />

        <ServiceItem
          image="9.png"
          header="Sump Pumps & More..."
          subheader="Lorem ipsum dolor"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          vertical
        />
      </StyledContainer>
      <CTA />
    </Layout>
  );
};

export default Services;
