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
    height: 65px;
    top: 0;
    margin-left: 5%;
    right: 0;
    align-items: center;
    background-color: #ffffff;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 80px 60px rgba(0, 0, 0, 0.1);
  `;
  const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${(props) => (props.primary ? "palevioletred" : "white")};
    color: ${(props) => (props.primary ? "white" : "palevioletred")};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
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
            style={{ width: "80px", marginTop: "-15px" }}
          />
        </Link>
        <Link to="/home">
          <Button style={{ height: "35px" }}>Home</Button>
        </Link>
        {token ? (
          <Button onClick={() => handleLogin(null)} style={{ height: "35px" }}>
            Log Out
          </Button>
        ) : (
          <Link to="/">
            <Button style={{ height: "35px" }}>Log In</Button>
          </Link>
        )}
        <Button style={{ height: "35px" }}>FAQ</Button>
      </div>
    </Div>
  );
}
export default Navbar;
