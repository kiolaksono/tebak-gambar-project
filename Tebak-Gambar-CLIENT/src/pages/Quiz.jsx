import React, { useState, useEffect, useContext } from 'react';

import { SocketContext } from '../contexts/appSocket';
import data from '../flags.json'
import { useNavigate } from 'react-router-dom';
import Exit from '../components/Exit';



export default function Quiz() {
  const [answer, setAnswer] = useState("");
  const [dataPerItem, setDataPerItem] = useState([]);
  const [change, setChange] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  const socket = useContext(SocketContext);

  useEffect(() => {
    if(!socket) return navigate("/")
    let dataMap = data.map((item) => {
      return item;
    });

    let dataRandom = dataMap[Math.floor(Math.random() * dataMap.length)];
    setDataPerItem(dataRandom);
    localStorage.setItem("score", score);

    if (change === 10) {
        socket?.emit("leaderBoard:broadcast", {
            
            
            username: localStorage.getItem("username"),
            score
        })
        navigate("/leaderboard");
    }
  }, [change]);


    const handleAnswer = (e) => {
        e.preventDefault();
        
        if (answer.toUpperCase() === dataPerItem.name || answer.toUpperCase() === dataPerItem.commonName) {
            setScore(score + 10);
        }

        setChange(change + 1);

        setAnswer("");
    };

  return (
    <div
    className=" w-screen h-screen bg-[url('./assets/9.jpg')] bg-cover bg-no-repeat bg-center flex justify-center pb-20" 
    style={{ alignItems: "center" }}
  >
    <div className="flex justify-center items-center flex-col mt-12">
      <Exit/>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={dataPerItem.imageUrl} alt="flag" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{dataPerItem.hint}</h2>
          <p>fill the correct answer</p>
          <form onSubmit={handleAnswer}>
            <div className="card-actions">
              <input
                type="text"
          value={answer}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Enter country name"></input>
            </div>
            <div>
            <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Submit
        </button>
            </div>
          </form>
        </div>
        </div>

    </div>
    </div>
  );
}
