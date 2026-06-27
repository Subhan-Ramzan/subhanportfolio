"use client";
import React, { useState } from "react";
import axios from "axios";

const PaymentForm = () => {
  const [amount, setAmount] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/pay", {
        amount,
        phoneNumber,
        username,
        email,
      });
      alert(response.data.message);
    } catch (error) {
      alert("An error occurred!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4 flex flex-col">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Username:
        </label>
        <input
          id="username"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-6 flex flex-col">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email:
        </label>
        <input
          id="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="phoneNumber"
        >
          Phone Number:
        </label>
        <input
          id="phoneNumber"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="amount"
        >
          Amount:
        </label>
        <input
          id="amount"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      

      <div className="w-full">
        <button
          type="submit"
          className="w-full bg-linear-to-r from-purple-700 to-blue-700 hover:from-purple-900 hover:to-blue-900 text-white font-bold py-2 px-4 rounded-lg"
        >
          Pay
        </button>
      </div>

    </form>
  );
};

export default PaymentForm;
