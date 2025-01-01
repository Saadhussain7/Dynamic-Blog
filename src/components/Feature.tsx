import React from "react";

export default function Feature() {
  return (
    <div>
      <section className="py-8 bg-neutral-100 mb-40">
        <h2
          className="text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out
                transform hover:translate-y-[5px] hover:text-black text-red-600"
        >
          Saad Hussain : Navigating the Secrets of Technology in Tech Chronicles
          Blog!
        </h2>
        <p className="text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-16 animate-fade-in-up delay-100">
          Join Saad Hussain as he delves into the dynamic world of web
          development. From foundational concepts to advanced techniques, this
          blog is packed with insights, tutorials and tips to empower aspiring
          devlopers in crafting stunning and functional websites. Explore,
          learn, and evaluate your web development journey!
        </p>

        <div className="mx-auto max-w-7xl px-5">
          <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
            {" "}
            Exploring Our Categories{" "}
          </h1>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-3 animate-fade-in-up delay-100">
            {[
              "Artificial Intelligence",
              "Technology",
              "HTML",
              "CSS",
              "Next Js",
              "Web Deveopment",
            ].map((category, index) => (
              <div
                key={index}
                className="relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-lack transition-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600">
                <p className="text-center text-lg font-semibold">{category}</p>
                <div className="absolute insert-0 border-2 border-transparent group-hover:border-white roundend-lg transition duration-300 ease-in-out gap-8">

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
