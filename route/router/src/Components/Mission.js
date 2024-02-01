import React from "react";
import { useNavigate } from "react-router-dom";

function Mission() {
  const navigate = useNavigate();
  return (
    <div>
      <div>Mission</div>
      <button onClick={() => navigate("/")}>Geri Git</button>
    </div>
  );
}

export default Mission;
