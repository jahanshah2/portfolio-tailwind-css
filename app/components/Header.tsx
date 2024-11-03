import React from "react";
import { MdMenu } from "react-icons/md";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between mx-[5%] h-[10vh] md:h-[50px]">
        <div>
          <h1 className="font-bold text-xl md:text-[25px]">My CV</h1>
        </div>
        <div className="hidden  (sm:block sm:flex justify-between w-[300px]">
          <Link className="md:hover:text-gray-400" href={"/"}>
            Home
          </Link>
          <Link className="md:hover:text-gray-400" href={"about"}>
            About
          </Link>
          <Link className="md:hover:text-gray-400" href={"contact"}>
            Contact
          </Link>
        </div>
        <div className="mt-[6px] sm:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MdMenu className="outline-none size-[25px]" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href={"/"}>Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"about"}>About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"contact"}>Contact</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}

export default Navbar;
