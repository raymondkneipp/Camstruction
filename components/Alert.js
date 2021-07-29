import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Container from "./Container";
import tw from "twin.macro";

const StyledContainer = tw(Container)`py-4! flex items-center justify-center`;

const Alert = ({ text, url }) => {
  const router = useRouter();

  if (router.pathname === url) {
    return null;
  }

  return (
    <Link href={url} passHref>
      <a tw="bg-red-700 hocus:(bg-red-800 outline-none underline) transition text-white">
        <StyledContainer>
          <Image
            src="/icons/iconmonstr-time-3.svg"
            width={20}
            height={20}
            layout="fixed"
            alt="Calendar"
          />
          <p tw="font-medium text-sm sm:text-base lg:text-lg capitalize text-center ml-4 font-serif">
            {text}
          </p>
        </StyledContainer>
      </a>
    </Link>
  );
};

export default Alert;
