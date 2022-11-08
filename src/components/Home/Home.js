import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useJwt } from "react-jwt";

function Home() {
  const [token, useToken] = useState(() => localStorage.getItem("token") || "");
  const { decodedToken, isExpired } = useJwt(token);

  const navigate = useNavigate();

  useEffect(() => {
    if (token.length === 0) navigate("/login");
    console.log(decodedToken);
  });

  return <div>Home</div>;
}

export default Home;
