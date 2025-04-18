import React from "react";
const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold p-4 m-4">Contact Us</h1>
      <form action="">
        <input
          type="text"
          name=""
          id=""
          placeholder="Name"
          className="border p-2 m-2"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Message"
          className="border p-2 m-2"
        />
        <button className="border p-2 m-2 bg-blue-300 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
