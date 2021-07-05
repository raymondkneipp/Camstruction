import { useEffect } from "react";
import tw from "twin.macro";
import Container from "./Container";
import ServiceItem from "./ServiceItem";

const StyledContainer = tw(
  Container
)`grid grid-flow-row gap-16 overflow-hidden`;

const ServicesColumn = () => {
  useEffect(() => {
    gsap.from(".serviceItem:first-of-type", {
      x: -200,
      opacity: 0,
      scrollTrigger: {
        trigger: ".serviceItem:first-of-type",
        scrub: 1,
        end: "center center",
      },
    });

    gsap.from(".serviceItem:nth-of-type(2)", {
      x: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: ".serviceItem:nth-of-type(2)",
        scrub: 1,
        end: "center center",
      },
    });

    gsap.from(".serviceItem:last-of-type", {
      x: -200,
      opacity: 0,
      scrollTrigger: {
        trigger: ".serviceItem:last-of-type",
        scrub: 1,
        end: "center center",
      },
    });
  }, []);

  return (
    <StyledContainer>
      <ServiceItem
        image="7.jpeg"
        header="Yard Drainage"
        subheader="Lorem ipsum dolor"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      />
      <ServiceItem
        image="5.jpeg"
        header="Basement Waterproofing"
        subheader="Lorem ipsum dolor"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        flip
      />
      <ServiceItem
        image="1.jpeg"
        header="Downspout Water Management"
        subheader="Lorem ipsum dolor"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      />
    </StyledContainer>
  );
};

export default ServicesColumn;
