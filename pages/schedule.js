import { useState } from "react";
import Image from "next/image";
import Container from "../components/Container";
import DatePicker from "../components/DatePicker";
import Layout from "../components/Layout";
import tw from "twin.macro";
import Steps from "../components/Steps";
import TimePicker from "../components/TimePicker";
import CustomerInfo from "../components/CustomerInfo";
import { useRouter } from "next/router";

const StyledContainer = tw(Container)`grid gap-8 lg:grid-cols-3 md:items-start`;

const Quote = () => {
  const [dateOfQuote, setDateOfQuote] = useState(null);
  const [timeOfQuote, setTimeOfQuote] = useState(null);
  const [infoInvalid, setInfoInValid] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [msg, setMsg] = useState("");

  const [step, setStep] = useState(1);

  const handleDateSelection = (date) => {
    setDateOfQuote(date);
  };

  const handleTimeSelection = (time) => {
    setTimeOfQuote(time);
  };

  const router = useRouter();

  const scheduleQuote = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/schedule", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          street,
          city,
          msg,
          timeOfQuote,
          dateOfQuote,
        }),
      });

      if (res.status === 200) {
        router.push("/scheduled");
      } else {
        router.push("/_error");
      }
    } catch (err) {
      router.push("/_error");
    }
  };

  return (
    <Layout title="Schedule Quote">
      <h1 tw="text-3xl sm:text-5xl md:text-6xl lg:text-7xl my-10 font-medium font-sans text-center">
        Get An Estimate
      </h1>

      {step != 4 ? (
        <StyledContainer>
          <div tw="border-gray-200 border p-8">
            <h4 tw="font-medium text-xl text-center mb-8 font-sans">
              Renovation Quote
            </h4>
            <ul tw="grid gap-4 font-serif">
              <li tw="grid gap-4 grid-flow-col auto-cols-min whitespace-nowrap items-center">
                <Image
                  src="/icons/iconmonstr-tag-21.svg"
                  width={20}
                  height={20}
                  layout="fixed"
                  alt="Cost"
                />
                Cost: FREE
              </li>
              <li tw="grid gap-4 grid-flow-col auto-cols-min whitespace-nowrap items-center">
                <Image
                  src="/icons/iconmonstr-time-16.svg"
                  width={20}
                  height={20}
                  layout="fixed"
                  alt="Duration"
                />{" "}
                Duration: 1 hr
              </li>
              <li tw="grid gap-4 grid-flow-col auto-cols-min whitespace-nowrap items-center">
                <Image
                  src="/icons/iconmonstr-calendar-6.svg"
                  width={20}
                  height={20}
                  layout="fixed"
                  alt="Date"
                />{" "}
                Date:{" "}
                {(dateOfQuote &&
                  `${
                    dateOfQuote.getMonth() + 1
                  } / ${dateOfQuote.getDate()} / ${dateOfQuote.getFullYear()}`) ||
                  "Not Selected"}
              </li>
              <li tw="grid gap-4 grid-flow-col auto-cols-min whitespace-nowrap items-center">
                <Image
                  src="/icons/iconmonstr-time-3-black.svg"
                  width={20}
                  height={20}
                  layout="fixed"
                  alt="Time"
                />{" "}
                Time: {timeOfQuote || "Not Selected"}
              </li>
            </ul>
          </div>

          <div tw="lg:col-span-2">
            <Steps
              steps={["Select Date", "Select Time", "Contact Info"]}
              currentStep={step}
            />

            {step == 1 && (
              <DatePicker
                handleDateSelection={handleDateSelection}
                dateOfQuote={dateOfQuote}
              />
            )}

            {step == 2 && (
              <TimePicker
                timeOfQuote={timeOfQuote}
                handleTimeSelection={handleTimeSelection}
              />
            )}

            {step == 3 && (
              <CustomerInfo
                setInvalid={(b) => setInfoInValid(b)}
                info={{ name, email, phone, street, city, msg }}
                setInfo={(info) => {
                  setName(info.name);
                  setEmail(info.email);
                  setPhone(info.phone);
                  setStreet(info.street);
                  setCity(info.city);
                  setMsg(info.msg);
                }}
              />
            )}

            <div tw="flex flex-row-reverse items-center justify-between my-4">
              {/* Reverse order so next button is next in tab index */}
              <button
                tw="disabled:(border-gray-200 text-gray-500 cursor-not-allowed bg-white hocus:(outline-none border-gray-200 text-gray-500 cursor-not-allowed bg-white)) transition bg-white border-red-700 text-red-700 border rounded-full py-1 px-4 hocus:(bg-red-700 text-white outline-none) font-serif"
                disabled={
                  (step == 1 && dateOfQuote == null) ||
                  (step == 2 && timeOfQuote == null) ||
                  (step == 3 && infoInvalid)
                }
                onClick={(e) => {
                  e.target.blur();
                  if (step == 3) {
                    window.scrollTo(0, 0);
                  }
                  setStep(step + 1);
                }}
              >
                Next
              </button>

              <button
                tw="disabled:(text-gray-500 cursor-not-allowed hocus:(outline-none no-underline cursor-not-allowed)) border-white border transition text-black rounded-full hocus:(underline outline-none) font-serif"
                disabled={step <= 1}
                onClick={(e) => {
                  e.target.blur();
                  setStep(step - 1);
                }}
              >
                Back
              </button>
            </div>
          </div>
        </StyledContainer>
      ) : (
        <Container>
          <div tw="p-8 max-w-lg mx-auto shadow-lg">
            <h4 tw="font-medium text-xl text-center mb-2 font-sans">
              Renovation Quote
            </h4>

            <p tw="text-base font-light text-gray-500 mb-8 text-center font-serif">
              Confirm the information is correct
            </p>

            <div tw="sm:(grid grid-flow-col gap-4)">
              <div tw="flex flex-col">
                <label
                  htmlFor="cost"
                  tw="text-gray-500 text-sm mb-2 font-serif"
                >
                  Cost
                </label>
                <input
                  type="text"
                  id="cost"
                  tw="bg-gray-100 rounded py-2 px-4 focus:(outline-none ring-red-700 ring ring-opacity-50) mb-4 font-serif"
                  value="Free"
                  readOnly
                  required
                />
              </div>

              <div tw="flex flex-col">
                <label
                  htmlFor="duration"
                  tw="text-gray-500 text-sm mb-2 font-serif"
                >
                  Duration
                </label>
                <input
                  type="text"
                  id="duration"
                  tw="bg-gray-100 rounded py-2 px-4 focus:(outline-none ring-red-700 ring ring-opacity-50) mb-4 font-serif"
                  value="1 hour"
                  readOnly
                  required
                />
              </div>
            </div>

            <div tw="sm:(grid grid-flow-col gap-4)">
              <div tw="flex flex-col">
                <label
                  htmlFor="date"
                  tw="text-gray-500 text-sm mb-2 font-serif"
                >
                  Date
                </label>
                <input
                  type="text"
                  id="date"
                  tw="bg-gray-100 rounded py-2 px-4 focus:(outline-none ring-red-700 ring ring-opacity-50) mb-4 font-serif"
                  value={`${
                    dateOfQuote.getMonth() + 1
                  } / ${dateOfQuote.getDate()} / ${dateOfQuote.getFullYear()}`}
                  readOnly
                  required
                />
              </div>

              <div tw="flex flex-col">
                <label
                  htmlFor="time"
                  tw="text-gray-500 text-sm mb-2 font-serif"
                >
                  Time
                </label>
                <input
                  type="text"
                  id="time"
                  tw="bg-gray-100 rounded py-2 px-4 focus:(outline-none ring-red-700 ring ring-opacity-50) mb-4 font-serif"
                  value={timeOfQuote}
                  readOnly
                  required
                />
              </div>
            </div>

            <div tw="flex flex-col">
              <label htmlFor="name" tw="text-gray-500 text-sm mb-2 font-serif">
                Name
              </label>
              <input
                type="text"
                id="name"
                tw="bg-gray-100 rounded py-2 px-4 focus:(outline-none ring-red-700 ring ring-opacity-50) mb-4 font-serif"
                value={name}
                readOnly
                required
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
                value={email}
                readOnly
                required
              />
            </div>

            <div tw="flex flex-col">
              <label htmlFor="phone" tw="text-gray-500 text-sm mb-2 font-serif">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                tw="bg-gray-100 rounded py-2 px-4 focus:(outline-none ring-red-700 ring ring-opacity-50) mb-4 font-serif"
                value={phone || "Not Provided"}
                readOnly
                required
              />
            </div>

            <div tw="flex flex-col">
              <label
                htmlFor="address"
                tw="text-gray-500 text-sm mb-2 font-serif"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                tw="bg-gray-100 rounded py-2 px-4 focus:(outline-none ring-red-700 ring ring-opacity-50) mb-4 font-serif"
                value={`${street} ${city}, Ohio`}
                readOnly
                required
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
                value={msg || "No Message"}
                readOnly
                required
              />
            </div>

            <div tw="flex flex-row-reverse items-center justify-between">
              {/* Reverse order so next button is next in tab index */}
              <button
                tw="disabled:(border-gray-200 text-gray-500 cursor-not-allowed bg-white hocus:(outline-none border-gray-200 text-gray-500 cursor-not-allowed bg-white)) transition bg-white border-red-700 text-red-700 border rounded-full py-1 px-4 hocus:(bg-red-700 text-white outline-none) font-serif"
                onClick={(e) => {
                  scheduleQuote(e);
                }}
              >
                Confirm
              </button>

              <button
                tw="disabled:(text-gray-500 cursor-not-allowed hocus:(outline-none no-underline cursor-not-allowed)) border-white border transition text-black rounded-full hocus:(underline outline-none) font-serif"
                disabled={step <= 1}
                onClick={(e) => {
                  e.target.blur();
                  setStep(step - 1);
                }}
              >
                Back
              </button>
            </div>
          </div>
        </Container>
      )}
    </Layout>
  );
};

export default Quote;
