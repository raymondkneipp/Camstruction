import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import tw from "twin.macro";
import Container from "./Container";
import { useState, useEffect } from "react";

const StyledContainer = tw(
  Container
)`grid grid-flow-row gap-8 md:grid-flow-col`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    gsap.from(".listItem", {
      y: -100,
      opacity: 0,
      stagger: 0.1,
    });
  }, []);

  return (
    <StyledContainer>
      <header tw="grid grid-flow-col items-center justify-between gap-4">
        <Link href="/" passHref>
          <a tw="grid grid-flow-col items-center gap-4 text-lg sm:text-xl font-bold focus:outline-none focus:underline">
            <Image
              src="/images/logo.svg"
              layout="fixed"
              width={50}
              height={50}
              alt="Plus Drainage"
            />
            Plus Drainage
          </a>
        </Link>

        <button
          style={{ fontSize: 0 }}
          tw="hocus:(outline-none bg-gray-100) rounded p-2 transition duration-150 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? (
            <Image
              src="/icons/iconmonstr-x-mark-thin.svg"
              width={30}
              height={30}
              layout="fixed"
              alt="Menu"
            />
          ) : (
            <Image
              src="/icons/iconmonstr-menu-thin.svg"
              width={30}
              height={30}
              layout="fixed"
              alt="Menu"
            />
          )}
        </button>
      </header>

      <nav
        tw="hidden md:(flex justify-end) border border-gray-200 rounded p-4 md:(border-0 p-0)"
        css={[open && tw`block`]}
      >
        <ul tw="grid grid-flow-row grid-cols-1 sm:grid-cols-none gap-8 text-lg sm:grid-flow-col justify-between items-center">
          <li className="listItem" tw="flex">
            <Link href="/" passHref>
              <a
                tw="text-gray-500 hocus:(text-black outline-none after:w-6) transition after:(transition-all w-0 h-0.5 bg-black content block rounded-full) flex-1 flex flex-col items-start"
                css={[
                  router.pathname == "/" &&
                    tw`text-black after:(w-6 h-0.5 bg-black content block) hocus:(after:(w-0))`,
                ]}
              >
                Home
              </a>
            </Link>
          </li>
          <li className="listItem" tw="flex">
            <Link href="/services" passHref>
              <a
                tw="text-gray-500 hocus:(text-black outline-none after:w-6) transition after:(transition-all w-0 h-0.5 bg-black content block rounded-full) flex-1 flex flex-col items-start"
                css={[
                  router.pathname == "/services" &&
                    tw`text-black after:(w-6 h-0.5 bg-black content block) hocus:(after:(w-0))`,
                ]}
              >
                Services
              </a>
            </Link>
          </li>
          <li className="listItem" tw="flex">
            <Link href="/about" passHref>
              <a
                tw="text-gray-500 hocus:(text-black outline-none after:w-6) transition after:(transition-all w-0 h-0.5 bg-black content block rounded-full) flex-1 flex flex-col items-start"
                css={[
                  router.pathname == "/about" &&
                    tw`text-black after:(w-6 h-0.5 bg-black content block) hocus:(after:(w-0))`,
                ]}
              >
                About
              </a>
            </Link>
          </li>
          <li className="listItem">
            <Link href="/contact" passHref>
              <a
                tw="text-blue-700 border border-blue-700 rounded-full py-1 px-4 transition duration-150 hover:bg-blue-700 hover:text-white focus:bg-blue-700 focus:text-white focus:outline-none inline-block"
                css={[
                  router.pathname == "/contact" &&
                    tw` bg-blue-700 text-white hover:text-blue-700 hover:bg-white focus:bg-white focus:text-blue-700 focus:outline-none`,
                ]}
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </StyledContainer>
  );
};

export default Navbar;
