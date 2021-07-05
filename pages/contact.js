import Image from "next/image";
import Container from "../components/Container";
import Layout from "../components/Layout";
import tw from "twin.macro";
import { useState } from "react";
import { useRouter } from "next/router";

const StyledContainer = tw(Container)`grid gap-8 md:grid-cols-2 items-center`;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [honey, setHoney] = useState("");

  const router = useRouter();

  const contactUs = async (e) => {
    e.preventDefault();

    if (honey === "") {
      try {
        const res = await fetch("/api/contact", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            msg,
          }),
        });

        if (res.status === 200) {
          router.push("/success");
        } else {
          router.push("/_error");
        }
      } catch (err) {
        router.push("/_error");
      }
    }
  };

  return (
    <Layout title="Contact Us">
      <div tw="bg-blue-700 mt-36 flex-1">
        <StyledContainer>
          <form tw="bg-white shadow-lg p-8 -mt-36" onSubmit={contactUs}>
            <h2 tw="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-medium text-black my-2 text-center">
              Send A Message
            </h2>

            <div tw="flex flex-col">
              <label htmlFor="name" tw="text-gray-500 text-sm mb-2">
                First Name
              </label>
              <input
                type="text"
                id="name"
                tw="bg-gray-100 rounded py-2 px-4 focus:(outline-none ring-blue-700 ring ring-opacity-50) mb-4"
                placeholder="John"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div tw="flex flex-col">
              <label htmlFor="email" tw="text-gray-500 text-sm mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                tw="bg-gray-100 rounded py-2 px-4 focus:(outline-none ring-blue-700 ring ring-opacity-50) mb-4"
                placeholder="john@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div tw="flex flex-col">
              <label htmlFor="msg" tw="text-gray-500 text-sm mb-2">
                Message
              </label>
              <textarea
                id="msg"
                rows="4"
                tw="bg-gray-100 rounded py-2 px-4 focus:(outline-none ring-blue-700 ring ring-opacity-50) mb-4 resize-none"
                placeholder="Type your message here..."
                required
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              />
            </div>

            <input
              type="text"
              id="city"
              value={honey}
              onChange={(e) => setHoney(e.target.value)}
              tw="hidden"
              tabindex="-1"
              autocomplete="off"
            />

            <input
              type="submit"
              tw="bg-white text-blue-700 border border-blue-700 transition rounded-full py-1 px-4 text-lg inline-block hocus:(outline-none bg-blue-700 text-white) my-2 cursor-pointer self-start"
              value="Send Message"
            />
          </form>

          <div>
            <section tw="bg-black bg-opacity-25 p-8">
              <h2 tw="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-medium text-gray-200 mb-4">
                Contact Us
              </h2>
              <ul tw="text-gray-300 whitespace-nowrap grid gap-4">
                <li tw="grid grid-flow-col auto-cols-min items-center gap-4">
                  <Image
                    src="/icons/envelope-solid.svg"
                    width={20}
                    height={20}
                    layout="fixed"
                    alt="Email"
                  />
                  <span tw="select-all">help@plusdrainage.com</span>
                </li>
                <li tw="grid grid-flow-col auto-cols-min items-center gap-4">
                  <Image
                    src="/icons/phone-solid.svg"
                    width={20}
                    height={20}
                    layout="fixed"
                    alt="Phone number"
                  />
                  <span tw="select-all">(513) 455-0289</span>
                </li>
                <li tw="grid grid-flow-col auto-cols-min items-center gap-4">
                  <Image
                    src="/icons/map-marker-alt-solid.svg"
                    width={20}
                    height={20}
                    layout="fixed"
                    alt="Location"
                  />
                  Serving Greater Cincinnati, Northern Kentucky and Dayton
                  Markets.
                </li>
              </ul>
            </section>

            <div tw="grid grid-flow-col items-center justify-center gap-8 p-8">
              <a
                href="mailto:help@plusdrainage.com"
                tw="bg-blue-700 text-white border border-white transition rounded-full py-1 px-4 text-lg inline-block hocus:(outline-none bg-white text-blue-700)"
              >
                Email Us
              </a>
              <a
                href="tel:(513) 455-0289"
                tw="bg-blue-700 text-white border border-white transition rounded-full py-1 px-4 text-lg inline-block hocus:(outline-none bg-white text-blue-700)"
              >
                Call Now
              </a>
            </div>
          </div>
        </StyledContainer>
      </div>
    </Layout>
  );
};

export default Contact;
