import tw from "twin.macro";
import Image from "next/image";
import Container from "./Container";

const StyledContainer = tw(
  Container
)`flex flex-col-reverse items-center sm:flex-row justify-between`;

const Footer = () => (
  <footer tw="border-t border-gray-300 text-black">
    <StyledContainer>
      <p tw="text-center flex flex-col sm:items-start md:flex-row">
        &copy; 2021 by Plus Drainage LLC.{" "}
        <a
          href="https://raymondkneipp.com"
          target="_blank"
          rel="noopener noreferrer"
          tw="hocus:(outline-none underline) transition duration-150 mt-2 md:mt-0 md:ml-4"
        >
          Website by Raymond Kneipp
        </a>
      </p>
      <div tw="grid grid-cols-3 gap-4 mb-4 sm:mb-0" style={{ fontSize: 0 }}>
        <a
          href="https://www.facebook.com/plusdrainage"
          target="_blank"
          rel="noopener noreferrer"
          tw="hocus:(outline-none scale-125) p-2 transform transition duration-150"
        >
          <Image
            src="/icons/facebook-square-brands.svg"
            alt="Facebook"
            width={30}
            height={30}
            layout="intrinsic"
          />
        </a>

        <a
          href="https://twitter.com/plusdrainage/"
          target="_blank"
          rel="noopener noreferrer"
          tw="hocus:(outline-none scale-125) p-2 transform transition duration-150"
        >
          <Image
            src="/icons/twitter-brands.svg"
            alt="Instagram"
            width={30}
            height={30}
            layout="intrinsic"
          />
        </a>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          tw="hocus:(outline-none scale-125) p-2 transform transition duration-150"
        >
          <Image
            src="/icons/instagram-brands.svg"
            alt="Instagram"
            width={30}
            height={30}
            layout="intrinsic"
          />
        </a>
      </div>
    </StyledContainer>
  </footer>
);

export default Footer;
