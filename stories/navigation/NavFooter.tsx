import React from "react";
import { Divider } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
export default function NavFooter() {
  const date = new Date()
  let year = date.getFullYear()

  return (
    <div className="container mx-auto p-4">
      <div className="w-full flex justify-center ">
        <div className="flex flex-col">
        <div>
          <p className="text-xl">Kisetsu Tech</p>
        </div>
        <div className="flex h-5 items-center space-x-4 text-small">
        <Link isDisabled color="foreground" href="">{year}</Link>
          <Divider orientation="vertical" />
          <Link color="foreground" href="https://sakamichi.online/">Japan</Link>
          <Divider orientation="vertical" />
          <Link isDisabled color="foreground" >Blog</Link>
        </div>
        </div>
      </div>
    </div>
  );
}
