import { useEffect, useState } from "react";
import Room from "../components/Room";
import Exit from "../components/Exit";

export default function Roompage() {

  return (
    <div className="bg-[url('https://cdn.dribbble.com/users/2968360/screenshots/7533734/__.gif')] w-full h-screen bg-cover  ">

      <div className=" flex flex-wrap gap-10 p-20 justify-center">
      <Exit/>
          <Room />

      </div>
    </div>
  );
}
