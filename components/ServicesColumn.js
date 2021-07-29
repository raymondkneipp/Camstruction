import Link from "next/link";
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
        image="kitchen.jpg"
        header="Kitchen Remodeling"
        subheader="Let Us Build Your Perfect Kitchen"
        paragraph="Whether you are looking for a sleek modern look or a rustic homely feel, We will help you create the perfect kitchen of your dreams."
      />
      <ServiceItem
        image="bath.jpg"
        header="Bathroom Remodeling"
        subheader="Create The Ultimate Bathroom"
        paragraph="We can bring life back to your bathroom with new plumbing, electrical, lighting, tile, and cabinetry."
        flip
      />
      <ServiceItem
        image="decking.jpg"
        header="Decking And Patios"
        subheader="Bring Life To Your Backyard"
        paragraph="Create the perfect outdoor living space that's sure to leave a lasting impression."
      />
      <div tw="mx-auto">
        <Link href="/services" passHref>
          <a tw="text-red-700 font-serif text-center hocus:(underline outline-none) mb-8">
            View All Services
          </a>
        </Link>
      </div>
    </StyledContainer>
  );
};

export default ServicesColumn;
