"use client";
import { useState } from "react";

import { contactDetail, contactInputs } from "./constant";
import axios from "axios";

export default function ContectComponent() {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://formspree.io/f/mdknkkga", data);
      // Clear form data upon successful submission
      setData({
        fullName: "",
        email: "",
        mobile: "",
        message: "",
      });
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleInputs = (input, index) => {
    if (input?.tagType === "input") {
      return (
        <>
          <input
            key={index}
            type={input.type}
            name={input.name}
            id=""
            className={input.className}
            placeholder={input.placeholder}
            onChange={handleChange}
            value={data[input.name]}
          />
        </>
      );
    } else {
      return (
        <textarea
          key={index}
          type="text"
          name="message"
          id=""
          className={input.className}
          placeholder="Enter Message"
          onChange={handleChange}
          value={data.message}
        />
      );
    }
  };

  return (
    <>
      <p className="text-center text-2xl p-2"> Contact</p>
      <div className="min-h-screen  md:flex">
        <form
          onSubmit={handleSubmit}
          className=" w-full flex flex-col md:w-1/2 p-2"
        >
          {contactInputs?.map((input, index) => handleInputs(input, index))}
          <button type="submit" className="w-full bg-blue-700 py-2 rounded-sm mt-3 " >Submit</button>
        </form>
        <div className=" w-full md:w-1/2">
          {contactDetail?.map((item, index) => (
            <>
              <div key={index}>
                <p className="p-2 text-2xl font-black text-blue-800">
                  {item.type}
                </p>
                <span className="p-2">{item.contact}</span>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
