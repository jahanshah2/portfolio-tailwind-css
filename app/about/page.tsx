import React from "react";

export default function about() {
  return (
    <div className="flex justify-center h-[89vh] md:h-[88vh]">
      <div className="h-[89vh] md:h-[88vh] w-[90%]">
        <div className="md:flex md:flex-col md:justify-center md:items-center mt-[5px]">
          <h1 className="font-semibold text-[35px] md:text-[40px] text-center">About</h1>
          <h2 className="text-center text-[20px] md:text-[30px] font-">Get to know me!</h2>
          <div className="flex flex-col gap-3 mt-[5px] text-center text-[13px] md:text-[16px] md:w-[400px]">
            <p className="bg-yellow-400 border-[1px] rounded-md border-black">
              I am a dedicated junior frontend web developer with a year of
              experience in an artificial intelligence course.
            </p>
            <p className="bg-yellow-400 border-[1px] rounded-md border-black">
              I have a strong command of HTML, CSS, and JavaScript, and I am
              currently diving deeper into advanced frameworks like Next.js.
            </p>
            <p className="bg-yellow-400 border-[1px] rounded-md border-black">
              My journey in AI and web development reflects my passion for
              learning and my commitment to building responsive and dynamic web
              applications.
            </p>
          </div>
          <h3 className="text-center mt-[10px] md:mb-[8px] text-[20px] font-medium">
            Skills
          </h3>
          <div className="flex justify-center flex-wrap gap-x-[11px] gap-y-[5px] ">
            <p className="bg-gray-200 px-[5px] rounded-md">
              HTML
            </p>
            <p className="bg-gray-200 px-[5px] rounded-md">
              CSS
            </p>
            <p className="bg-gray-200 px-[5px] rounded-md">
              JavaScript
            </p>
            <p className="bg-gray-200 px-[5px] rounded-md">
              React.js
            </p>
            <p className="bg-gray-200 px-[5px] rounded-md">
              Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
