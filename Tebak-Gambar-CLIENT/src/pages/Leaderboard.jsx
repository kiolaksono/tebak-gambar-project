import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../contexts/appSocket";
import Exit from "../components/Exit";
import { useNavigate } from "react-router-dom";

export default function Leaderboard() {
  const socket = useContext(SocketContext);
  const [leader, setLeader] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // if(!socket) return navigate("/")
    socket?.on("showLeaderBoard:broadcast", (leaderBoard) => {
      setLeader(leaderBoard);
    });
  }, [leader]);

  return (
    <div>
        
        {leader?.length === 0 ? (
            <div
            className="w-screen h-screen bg-cover bg-no-repeat bg-center flex justify-center items-start"
            style={{
              backgroundImage:
                "url('https://comicvine.gamespot.com/a/uploads/original/11124/111241908/7724665-1eedc391-c316-4930-8aca-5abe21de148a.gif')",
              paddingTop: "50px",
            }}
          >
            <div className="w-3/4 bg-white bg-opacity-80 border-black border-2 rounded-lg shadow-lg p-6">
              <table className="table w-full">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="px-4 py-2"></th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Score</th>
                    <th className="px-4 py-2">Time</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Loading</td>
                    </tr>
                </tbody>
          </table>
        </div>
      </div>
        ) : (
    <>
      <Exit />
      <div
        className="w-screen h-screen bg-cover bg-no-repeat bg-center flex justify-center items-start"
        style={{
          backgroundImage:
            "url('https://comicvine.gamespot.com/a/uploads/original/11124/111241908/7724665-1eedc391-c316-4930-8aca-5abe21de148a.gif')",
          paddingTop: "50px",
        }}
      >
        <div className="w-3/4 bg-white bg-opacity-80 border-black border-2 rounded-lg shadow-lg p-6">
          <table className="table w-full">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-4 py-2"></th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Score</th>
                <th className="px-4 py-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {leader?.map((user, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-200 transition duration-300 ease-in-out"
                >
                  <th className="px-4 py-4 border-b border-black">
                    {index + 1}
                  </th>
                  <td className="px-4 py-4 flex items-center border-b border-black">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5zv605IDYRA7f3I0IMFUy4BKP3ETSMleuJA&s"
                      alt="User Avatar"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    {user.username}
                  </td>
                  <td className="px-4 py-4 border-b border-black">
                    {user.score}
                  </td>
                  <td className="px-4 py-4 border-b border-black">
                    {new Date().toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
        )}
    </div>
  );
}
