import React from "react";
// import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/24/solid";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

import { PageInfo } from "@/typings";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  pageInfo: PageInfo;
};

function ContactMe({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:laurynas.martinkus2009@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I Have got what you need.{" "}
          <span className="decoration-[#63048B]/50 underline underline-offset-4">
            Lets Talk
          </span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#63048B] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+37062593930</p>
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#63048B] h-7 w-7 animate-pulse" />
            <p className="text-2xl">{pageInfo?.email}</p>
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#63048B] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Kaunas</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2 ">
            <input
              {...register("name")}
              className="contactInput"
              type="text"
              placeholder="Name"
            />
            <input
              {...register("email")}
              className="contactInput"
              type="text"
              placeholder="Email"
            />
          </div>
          <input
            {...register("subject")}
            className="contactInput"
            type="text"
            placeholder="Subject"
          />
          <textarea
            className="contactInput"
            placeholder="Message"
            {...register("message")}
          />
          <button
            type="submit"
            className="bg-[#63048B] py-5 px-10 rounded-md text-white font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
