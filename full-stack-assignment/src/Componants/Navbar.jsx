import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../ContextApi/AuthContext";

function Navbar() {
  const { token, handleLogin } = useContext(AuthContext);
  const Div = styled.nav`
    position: fixed;
    padding: 5px 10px;
    width: 100%;
    height: 60px;
    top: 0;
    margin-left: 5%;
    right: 0;
    align-items: center;
    background-color: #ffffff;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 80px 60px rgba(0, 0, 0, 0.1);
  `;

  return (
    <Div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "80%",
          marginLeft: "10%",
        }}
      >
        <Link to="/home">
          <img
            src="https://user-images.githubusercontent.com/87421852/154792165-fbba1305-27fd-4bc9-a4da-f50cfa9cc44e.png"
            alt="logo"
            style={{ width: "80px", marginTop: "-18px" }}
          />
        </Link>
        <Link to="/home">
          <h1>Home</h1>
        </Link>
        {token ? (
          <h1 onClick={() => handleLogin(null)}>Log Out</h1>
        ) : (
          <Link to="/">
            <h1>Log In</h1>
          </Link>
        )}
        <h1>FAQ</h1>
      </div>
    </Div>
  );
}
export default Navbar;
