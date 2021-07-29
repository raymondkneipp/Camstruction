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
      <h1 tw="text-3xl sm:text-5xl md:text-6xl lg:text-7xl my-10 font-medium font-sans text-center">
        Contact Us
      </h1>
      <div tw="bg-red-700 mt-36 flex-1">
        <StyledContainer>
          <form tw="bg-white shadow-lg p-8 -mt-36" onSubmit={contactUs}>
            <h2 tw="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-medium text-black my-2 text-center font-sans">
              Send A Message
            </h2>

            <div tw="flex flex-col">
              <label htmlFor="name" tw="text-gray-500 text-sm mb-2 font-serif">
                First Name
              </label>
              <input
                type="text"
                id="name"
                tw="bg-gray-100 rounded py-2 px-4 focus:(outline-none ring-red-700 ring ring-opacity-50) mb-4 font-serif"
                placeholder="John"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div tw="flex flex-col">
              <label htmlFor="email" tw="text-gray-500 text-sm mb-2 font-serif">
                Email
              </label>
              <input
                type="email"
                id="email"
                tw="bg-gray-100 rounded py-2 px-4 focus:(outline-none ring-red-700 ring ring-opacity-50) mb-4 font-serif"
                placeholder="john@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div tw="flex flex-col">
              <label htmlFor="msg" tw="text-gray-500 text-sm mb-2 font-serif">
                Message
              </label>
              <textarea
                id="msg"
                rows="4"
                tw="bg-gray-100 rounded py-2 px-4 focus:(outline-none ring-red-700 ring ring-opacity-50) mb-4 font-serif resize-none"
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
              tw="bg-white text-red-700 border border-red-700 transition rounded-full py-1 px-4 text-lg inline-block hocus:(outline-none bg-red-700 text-white) my-2 cursor-pointer self-start font-serif"
              value="Send Message"
            />
          </form>

          <div>
            <section tw="bg-black bg-opacity-25 p-8">
              <h2 tw="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-medium text-gray-200 mb-4 font-sans">
                Reach Out To Us
              </h2>
              <ul tw="text-gray-300 whitespace-nowrap grid gap-4 font-serif">
                <li tw="grid grid-flow-col auto-cols-min items-center gap-4">
                  <Image
                    src="/icons/envelope-solid.svg"
                    width={20}
                    height={20}
                    layout="fixed"
                    alt="Email"
                  />
                  <span tw="select-all">camrenworkemail@gmail.com</span>
                </li>
                <li tw="grid grid-flow-col auto-cols-min items-center gap-4">
                  <Image
                    src="/icons/phone-solid.svg"
                    width={20}
                    height={20}
                    layout="fixed"
                    alt="Phone number"
                  />
                  <span tw="select-all">(513) 828-5801</span>
                </li>
                <li tw="grid grid-flow-col auto-cols-min items-center gap-4">
                  <Image
                    src="/icons/map-marker-alt-solid.svg"
                    width={20}
                    height={20}
                    layout="fixed"
                    alt="Location"
                  />
                  Serving Cincinnati And Florence
                </li>
              </ul>
            </section>

            <div tw="grid grid-flow-col items-center justify-center gap-8 p-8">
              <a
                href="mailto:camrenworkemail@gmail.com"
                tw="bg-red-700 text-white border border-white transition rounded-full py-1 px-4 text-lg inline-block hocus:(outline-none bg-white text-red-700) font-serif"
              >
                Email Us
              </a>
              <a
                href="tel:(513) 828-5801"
                tw="bg-red-700 text-white border border-white transition rounded-full py-1 px-4 text-lg inline-block hocus:(outline-none bg-white text-red-700) font-serif"
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
