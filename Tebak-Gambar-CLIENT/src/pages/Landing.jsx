import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { SocketContext } from "../contexts/appSocket";

export default function LandingPage() {
  // const [name, setName] = useState();
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if(!username){
      return(
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please put your name before play!",
        })
      )
    }

    localStorage.setItem("username",username);
    navigate("/homepage");
  };

  const socket = useContext(SocketContext);

  const greet = () => {
    socket.emit("Greet");

    socket.on("Hi", (data) => {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: `Connect success in socket ${data.socketId}`,
      });
    });
  };

  return (
    <div
    className="w-screen h-screen bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center gap-10"
    style={{ backgroundImage: "url('./assets/bg.jpg')" }}
  >
  <h1
    className="font-fantasy text-8xl text-white mb-10 text-center bg-white p-10 rounded-full shadow-2xl relative bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('https://storage.ko-fi.com/cdn/useruploads/post/330f80a5-28d4-4807-8d08-e54e2bdcb7b9_bluecityrevisitedclean.gif')" }}
  >
    WELCOME TO FLAGVOYAGE
  </h1>
    <div className="relative w-120 h-80 rounded-xl shadow-2xl p-10">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center rounded-xl"
        style={{ backgroundImage: "url('https://media.tenor.com/3sfuk5VM_BsAAAAM/boi-hype-boy.gif')" }}
      ></div>
      <div className="box-content w-full h-full flex flex-col gap-8 justify-center items-center relative z-10 bg-opacity-50">
        <div className="join">
          <input
            className="input input-bordered join-item w-96 h-16 text-xl rounded-full shadow-md px-6"
            placeholder="Type your nickname here..."
            name="nickname"
            id="nickname"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
        <button
          onClick={handleClick}
          className="btn btn-transparent border-2 border-white w-52 h-16 text-xl rounded-full shadow-md transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out text-white bg-transparent"
        >
          Play
        </button>
      </div>
      </div>
    </div>
  </div>
  

  );
}
