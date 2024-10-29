import { useNavigate } from "react-router-dom";

export default function Exit() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <button
        className="btn btn-accent text-lg"
        name="Logout"
        onClick={handleLogout}
        style={{
          backgroundColor: "red",
          color: "white",
          position: "absolute",
          top: "20px",
          left: "20px",
        }}
        onMouseEnter={(e) => (e.target.style.color = "white")}
        onMouseLeave={(e) => (e.target.style.color = "black")}
      >
        Exit
      </button>
    </>
  );
}
