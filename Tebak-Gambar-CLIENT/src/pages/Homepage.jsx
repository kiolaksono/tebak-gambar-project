import { useContext, useState, useEffect } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Swal from "sweetalert2";
import { SocketContext } from "../contexts/appSocket";
import Exit from "../components/Exit";

export default function HomePage() {


  

  return (
    <>
      <Exit />

      <div className="w-screen h-screen bg-[url('https://jan-schlosser.de/wp-content/uploads/z_Pixel-Art-Star-Wars-Animation.gif')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center ">
        <div className="flex flex-row justify-center items-center space-x-10 mt-40">
          <Link to="/room">
            <button className="btn btn-lg w-80 h-40 bg-[url('/assets/multiplayer.png')] bg-cover bg-center text-white font-extrabold text-5xl rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl duration-300 ease-in-out flex items-center justify-center">
              Join Room
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
