import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useState, useContext, useEffect } from "react";
import { SocketContext } from "../contexts/appSocket";
export default function Room() {
  const navigate = useNavigate();
  const socket = useContext(SocketContext);

  let [data, setData] = useState([]); // data room
  let [leader, setLeader] = useState([]);
  const handleRoom = () => {
    socket.emit("GameStart");
    // navigate("/room");
  };


  useEffect(() => {
    if(!socket) return navigate("/")
    socket?.on("StartTheGame", () => {
      let timerInterval;
      Swal.fire({
        title: "Game will start in",
        html: "<b></b> milliseconds.",
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
          navigate("/quiz");
        },
      });
    });

    socket?.on("showLeaderBoard:broadcast", (leaderBoard) => {
      setLeader(leaderBoard);
    });

    // *Saat User baru masuk ke room
    socket?.emit("username", localStorage.getItem("username"));
    socket?.on("Greetings with username", (data) => {
      setData(data.users);
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
        title: data.message,
      });
    });

    socket?.on("UsersRemaining", (users) => {
      setData(users);
    });

  }, [])


  return (
    <div className=" flex flex-col justify-center items-center gap-10 mt-24">
      <div className="overflow-x-auto bg-amber-50 rounded-md">
        <table className="table text-lg w-96">
          {/* head */}
          <thead>
            <tr className="bg-amber-500 text-white text-xl">
              <th>No</th>
              <th>Player</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data?.length === 0? (
              <th>Loading</th>
            ) : 
              (data?.map((el, i) => (
                <tr key={i}>
              <th>{i + 1}</th>
              <td>{el.username}</td>
            </tr>
            )))}
          </tbody>
        </table>
      </div>
      <div className="text-center">
      <Link onClick={handleRoom}>
        <button
          className="w-52 btn bg-cover bg-center text-white font-bold text-2xl px-12 py-6 rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl duration-300 ease-in-out"
          style={{
            backgroundImage: "url('https://i.pinimg.com/originals/0a/e6/d6/0ae6d6b90d8f455ce7f742ff1887d714.gif')",
            backgroundSize: "cover",
          }}
        >
        </button>
        </Link>
      </div>
    </div>
  );
}
