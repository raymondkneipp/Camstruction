import Image from "next/image";
import tw from "twin.macro";

const ServiceItem = ({
  image,
  header,
  subheader,
  paragraph,
  flip,
  vertical,
}) => {
  return (
    <>
      <article
        css={[
          tw`grid gap-8 sm:grid-cols-2 items-center md:(grid-cols-5 gap-8) lg:grid-cols-6`,
          vertical && tw`items-start! grid-cols-1! grid-flow-row auto-rows-min`,
        ]}
        className="serviceItem"
      >
        <div
          css={[
            tw`order-2 sm:order-1 md:col-span-2`,
            flip && tw`sm:order-2`,
            vertical && tw`col-span-full! order-1!`,
          ]}
        >
          <Image
            src={`/images/${image}`}
            height={500}
            width={500}
            layout="responsive"
            objectFit="cover"
            alt={header}
          />
        </div>
        <div
          css={[
            tw`order-1 sm:order-2 md:col-span-3 lg:col-span-4`,
            flip && tw`sm:order-1`,
            vertical && tw`col-span-full! order-2!`,
          ]}
        >
          <h2 tw="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-medium text-black my-2 font-sans">
            {header}
          </h2>
          <h3 tw="text-lg sm:text-xl md:text-xl lg:text-xl font-normal text-gray-500 my-2 font-sans">
            {subheader}
          </h3>
          <p tw="text-base font-light text-gray-500 my-2 font-serif">
            {paragraph}
          </p>
        </div>
      </article>
    </>
  );
};

export default ServiceItem;
