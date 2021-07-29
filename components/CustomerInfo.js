import { useEffect, useState } from "react";
import tw from "twin.macro";

const CustomerInfo = ({ setInvalid, info, setInfo }) => {
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const [name, setName] = useState(info.name);
  const [email, setEmail] = useState(info.email);
  const [phone, setPhone] = useState(info.phone);
  const [street, setStreet] = useState(info.street);
  const [city, setCity] = useState(info.city);
  const [msg, setMsg] = useState(info.msg);

  useEffect(() => {
    if (
      name == "" ||
      email == "" ||
      street == "" ||
      city == "" ||
      !validateEmail(email)
    ) {
      setInvalid(true);
    } else {
      setInvalid(false);
    }
  }, [name, email, street, city]);

  // Update parent component state
  useEffect(() => {
    setInfo({ name, email, phone, street, city, msg });
  }, [name, email, phone, street, city, msg]);

  return (
    <form tw="mt-8">
      <div tw="flex flex-col">
        <label htmlFor="name" tw="text-gray-500 text-sm mb-2 font-serif">
          Name
        </label>
        <input
          type="text"
          id="name"
          tw="bg-gray-100 rounded py-2 px-4 focus:(outline-none ring-red-700 ring ring-opacity-50) mb-4 font-serif"
          placeholder="John Wick"
          required
          autoFocus
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
        <label htmlFor="phone" tw="text-gray-500 text-sm mb-2 font-serif">
          Phone Number (optional)
        </label>
        <input
          type="tel"
          id="phone"
          tw="bg-gray-100 rounded py-2 px-4 focus:(outline-none ring-red-700 ring ring-opacity-50) mb-4 font-serif"
          placeholder="123-456-7890"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div tw="flex flex-col">
        <label htmlFor="street" tw="text-gray-500 text-sm mb-2 font-serif">
          Street
        </label>
        <input
          type="text"
          id="street"
          tw="bg-gray-100 rounded py-2 px-4 focus:(outline-none ring-red-700 ring ring-opacity-50) mb-4 font-serif"
          placeholder="123 Main St"
          required
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
      </div>

      <div tw="sm:(grid grid-flow-col gap-4)">
        <div tw="flex flex-col">
          <label htmlFor="city" tw="text-gray-500 text-sm mb-2 font-serif">
            City
          </label>
          <input
            type="text"
            id="city"
            tw="bg-gray-100 rounded py-2 px-4 focus:(outline-none ring-red-700 ring ring-opacity-50) mb-4 font-serif"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div tw="flex flex-col">
          <label htmlFor="state" tw="text-gray-500 text-sm mb-2 font-serif">
            State
          </label>
          <input
            type="text"
            id="state"
            tw="bg-gray-100 rounded py-2 px-4 focus:(outline-none ring-red-700 ring ring-opacity-50) mb-4 font-serif"
            value="Ohio"
            readOnly
            disabled
            required
          />
        </div>
      </div>

      <div tw="flex flex-col">
        <label htmlFor="msg" tw="text-gray-500 text-sm mb-2 font-serif">
          Message (optional)
        </label>
        <textarea
          id="msg"
          rows="4"
          tw="bg-gray-100 rounded py-2 px-4 focus:(outline-none ring-red-700 ring ring-opacity-50) resize-none font-serif"
          placeholder="Type your message here..."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
      </div>
    </form>
  );
};

export default CustomerInfo;
