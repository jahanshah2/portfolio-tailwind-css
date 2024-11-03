import React from "react";
import { Button } from "@/components/ui/button";

export default function contact() {
  return (
    <div className="flex justify-center h-[89vh] md:h-[88vh]">
      <div className="h-[89vh] md:h-[88vh]  w-[90%]">
        <div className="lg:w-[54%] border-b-[1px] border-dashed border-gray-500 pb-1 mt-[20px]">
          <h1 className="font-medium text-[25px]">Contact Us</h1>
          <p className="text-[14px] text-gray-500">
            Please fill this form in a decent manner
          </p>
        </div>
        <form className="text-[14px] md:text-[16px] mt-[10px]" action="">
          <label htmlFor="name">
            Full Name <strong className="text-red-500">*</strong>
          </label>
          <br />
          <div className="flex gap-5 ">
            <div>
              <input
                className="h-[25px] md:h-[30px] w-[140px] md:w-[300px] border rounded-sm focus-visible:outline-none focus-visible:shadow-md focus-visible:shadow-blue-200"
                type="text"
              />
              <p className="mt-[5px] text-[10px] md:text-[12px] ">First Name</p>
            </div>
            <div>
              <input
                className="h-[25px] md:h-[30px] w-[140px] md:w-[300px] border rounded-sm focus-visible:outline-none focus-visible:shadow-md focus-visible:shadow-blue-200"
                type="text"
              />
              <p className="mt-[5px] text-[10px] md:text-[12px]">Last Name</p>
            </div>
          </div>
          <div className="mt-[15px]">
            <label htmlFor="name">
              E-mail <strong className=" text-red-500">*</strong>
            </label>
            <br />
            <input className="h-[20px] w-[20px]" type="checkbox" />
            <p className="mt-[5px] text-[10px]">example@example.com</p>
          </div>
          <div className="mt-[15px]">
            <label htmlFor="name">
              Message <strong className=" text-red-500">*</strong>
            </label>
            <br />
            <textarea
              className="w-[290px] md:w-[500px] h-[70px] border rounded-sm focus-visible:outline-none focus-visible:shadow-md focus-visible:shadow-blue-200"
              name="textarea"
              id="textarea"
            ></textarea>
          </div>
          <div className="pt-[10px] lg:pt-[4px] md:pt-0 flex justify-center lg:justify-start">
            <Button variant="default">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
