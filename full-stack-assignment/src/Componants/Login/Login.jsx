import React, { useContext, useState } from "react";
import "./login.css";
import { Form, Input, Button, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../ContextApi/AuthContext";
function Login() {
  const navigate = useNavigate();
  const { token, handleLogin } = useContext(AuthContext);
  const [form, setForm] = useState(null);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    fetch("http://localhost:4000/admin", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        handleLogin(res.email);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Form>
        <Input
          className="form-control"
          type="text"
          name="email"
          placeholder="Enter Email"
          style={{ width: "30%", marginTop: "180px" }}
          onChange={handleChange}
        />
        <br />
        <Input
          className="form-control"
          type="Password"
          name="password"
          placeholder="Enter Password"
          style={{ width: "30%", marginTop: "15px" }}
          onChange={handleChange}
        />
        <br />
        <div style={{ marginTop: "15px" }}></div>
        <label>
          User Type :
          <select onChange={handleChange} name="Type">
            <option value="Admin">Select</option>
            <option value="Admin">Admin</option>
            <option value="Guest">Guest</option>
          </select>
        </label>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Button onClick={handleSubmit} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
