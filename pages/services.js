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
      <h1 tw="text-3xl sm:text-5xl md:text-6xl lg:text-7xl my-10 font-medium font-sans text-center">
        Services We Offer
      </h1>
      <StyledContainer>
        <ServiceItem
          image="kitchen.jpg"
          header="Kitchen Remodeling"
          subheader="Let Us Build Your Perfect Kitchen"
          paragraph="Whether you are looking for a sleek modern look or a rustic homely feel, We will help you create the perfect kitchen of your dreams."
          vertical
        />
        <ServiceItem
          image="bath.jpg"
          header="Bathroom Remodeling"
          subheader="Create The Ultimate Bathroom"
          paragraph="We can bring life back to your bathroom with new plumbing, electrical, lighting, tile, and cabinetry."
          vertical
        />
        <ServiceItem
          image="decking.jpg"
          header="Decking"
          subheader="Bring Life To Your Backyard"
          paragraph="Create the perfect outdoor living space that's sure to leave a lasting impression."
          vertical
        />

        <ServiceItem
          image="flooring.jpg"
          header="Flooring"
          subheader="Hard Wood, Tile, & More"
          paragraph="Make your home feel a little more elegant with hard wood and tile flooring."
          vertical
        />

        <ServiceItem
          image="tile.jpg"
          header="Tile"
          subheader="Tiling Showers & Backsplashes"
          paragraph="Add a little bit of stone accents anywhere in your home. Add tile to your kitchen or bathroom backsplash or in your bath and shower."
          vertical
        />

        <ServiceItem
          image="patios.jpg"
          header="Patios"
          subheader="Bring Your Life Outside"
          paragraph="Create the perfect outdoor living space without the maintenance of wooden decks. Patios are a great place to have parties or just enjoy some sunshine."
          vertical
        />

        <ServiceItem
          image="fencing.jpg"
          header="Fencing"
          subheader="Outdoor Privacy"
          paragraph="Give your animals a place to run around or add some privacy to your outdoor living area."
          vertical
        />

        <ServiceItem
          image="framing.jpg"
          header="Framing And Additions"
          subheader="Extend Your Home"
          paragraph="We can help you create a new, larger living area for your home."
          vertical
        />

        <ServiceItem
          image="drywall.jpg"
          header="Drywall, Concrete, And More"
          subheader="Make Your Home Unique"
          paragraph="We can help you change up your floor plan, add some stone  indoor and outdoor, and much more!"
          vertical
        />
      </StyledContainer>
      <CTA />
    </Layout>
  );
};

export default Services;
