import { useNavigate } from "react-router-dom"

export default function Button({status, name,}){
    const navigate = useNavigate()
    
    const handlePvp = (e)=>{
      e.preventDefault()
      if(name==="PVP") {
        status.setIsPvP(true)
        console.log("SDSD")
        navigate("/room")
        
      }
    }

    return (
        <button onClick={handlePvp} className="btn btn-lg mx-2">{name==="PVP"? "1 VS 1" : "Multiplayer"}</button>
    )
}