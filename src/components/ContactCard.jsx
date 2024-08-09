import emailjs from "@emailjs/browser";

import { useRef, useState } from "react";

const ContactCard = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_2dtrzfi",
        "template_rksl5bd",
        {
          from_name: form.firstName + " " + form.lastName,
          to_name: "Patricia",
          from_email: form.email,
          to_email: "pchildresstherapy@gmail.com",
          message:
            "Appointment request from: " +
            form.firstName +
            " " +
            form.lastName +
            "\nMessage: " +
            '"' +
            form.message +
            '"' +
            "\nContact them at this email: " +
            form.email +
            "\nOr at this number: " +
            form.number,
        },
        "z2eVh7qvMk-WCoEx-"
      )
      .then(
        () => {
          setLoading(false);
          alert("Message received! Thank you!");
          setForm({
            firstName: "",
            lastName: "",
            email: "",
            number: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong. Use email icon instead!");
        }
      );
  };
  return (
    <div className="font-serif flex flex-col w-full h-full pt-6 pb-10 px-8 bg-card-bg text-white shadow-[20px_0px_100px_rgba(146,128,94,0.9)]">
      <form ref={formRef} onSubmit={handleSubmit}>
        <h1 className="font-serif-italic font-bold pb-3 text-dark-text text-xl 3xl:text-4xl 2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-md xs:text-md">
          Schedule An Appointment
        </h1>
        <div className="flex flex-row font-semibold text-lg pb-2">
          <h2 className="w-1/2">Name *</h2>
        </div>
        <div className="flex flex-row  text-black">
          <input
            type="text"
            className="w-1/2 p-2"
            placeholder="First"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
          ></input>
          <input
            type="text"
            className="ml-3 w-1/2 p-2 "
            placeholder={"Last"}
            value={form.lastName}
            name="lastName"
            onChange={handleChange}
          ></input>
        </div>
        <div className="flex flex-row font-semibold text-lg pt-5 pb-2">
          <h2 className="w-1/2">Email *</h2>
          <h2 className="w-1/2 ml-3">Phone Number</h2>
        </div>
        <div className="flex flex-row text-black">
          <input
            type="email"
            className="w-1/2 p-2"
            placeholder={"Email"}
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          ></input>
          <input
            type="number"
            className="ml-3 w-1/2 p-2"
            placeholder={"Number"}
            name="number"
            value={form.number}
            onChange={handleChange}
          ></input>
        </div>
        <h2 className="w-1/2 font-semibold text-lg pt-5 pb-2">Message *</h2>
        <input
          type="text"
          className="w-full pb-40 p-2 text-black"
          placeholder={"Message"}
          name="message"
          value={form.message}
          onChange={handleChange}
          required
        ></input>
        <div className="pt-4"></div>
        <button className="w-full border-2 p-2 px-4 border-white hover:bg-header-select hover:border-header-select">
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactCard;
