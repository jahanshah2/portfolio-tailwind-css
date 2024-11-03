"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <>
      <div className="h-[89vh] md:h-[88vh]">
        <div className="flex items-center gap-6 pt-[50px] md:pt-[0px] h-[200px] md:h-[230px] ">
          <div className=" bg-yellow-400 border-[1px] border-black shadow-xl h-[100px] md:h-[200px] w-[100px] md:w-[200px] overflow-hidden rounded-full">
            <Image
              className="h-[100px] md:h-[200px] w-[100px] md:w-[200px] relative right-1"
              src={"/my-pic.png"}
              alt=""
              height={0}
              width={1000}
            />
          </div>
          <div>
            <h1 className="text-[25px] md:text-[35px] font-medium">Hi, I'm</h1>
            <h2 className="text-[29px] md:text-[38px] font-medium font-mono text-yellow-400">
              Jahan Shah
            </h2>
            <span>
              <TypeAnimation
                className="text-[20px] md:text-[40px] font-medium"
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Web Developer",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  " Web Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "20px md:40px", display: "inline-block" }}
                repeat={Infinity}
              />
            </span>
          </div>
        </div>
        <div className="lg:w-[50%] lg:ml-[17%] pl-1 bg-yellow-400 border-[1px] border-black rounded-md h-[205px] md:h-[170px] text-[14px] md:text-[18px] lg:text-[17px]">
          I'm a passionate junior frontend web developer with a solid foundation
          in HTML, CSS, and JavaScript. Currently, I am expanding my skillset by
          mastering Next.js while pursuing a course in artificial intelligence.
          My goal is to build innovative and efficient solutions, combining my
          growing technical expertise with a creative approach to
          problem-solving.
        </div>
      </div>
    </>
  );
}

export default Hero;
