"use client";

import { useState } from "react";

export default function Programs() {

  const [show, setShow] = useState("");

  return (
    <div className="p-10 text-white">

      <h1 className="text-4xl font-bold text-center mb-10">
        Our Programs
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div
          onClick={() => setShow("weight")}
          className="bg-gray-900 rounded-xl p-4 cursor-pointer"
        >
          <img
            src="/weight.jpeg"
            className="rounded-xl h-52 w-full object-cover"
          />

          <h2 className="text-2xl font-bold mt-4 text-red-500">
            Weight Training
          </h2>

          {show === "weight" && (
            <p className="mt-3 text-gray-300">
              Timing : 5 AM - 10 AM
            </p>
          )}
        </div>


        <div
          onClick={() => setShow("cardio")}
          className="bg-gray-900 rounded-xl p-4 cursor-pointer"
        >
          <img
            src="cardio.jpeg"
            className="rounded-xl h-52 w-full object-cover"
          />

          <h2 className="text-2xl font-bold mt-4 text-red-500">
            Cardio
          </h2>

          {show === "cardio" && (
            <p className="mt-3 text-gray-300">
              Timing : 6 AM - 9 AM
            </p>
          )}
        </div>


        <div
          onClick={() => setShow("yoga")}
          className="bg-gray-900 rounded-xl p-4 cursor-pointer"
        >
          <img
            src="/yoga.jpeg"
            className="rounded-xl h-52 w-full object-cover"
          />

          <h2 className="text-2xl font-bold mt-4 text-red-500">
            Yoga
          </h2>

          {show == "yoga" && (
            <p className="mt-3 text-gray-300">
              Timing : 7 AM - 8 AM
            </p>
          )}
        </div>

      </div>
    </div>
  );
}