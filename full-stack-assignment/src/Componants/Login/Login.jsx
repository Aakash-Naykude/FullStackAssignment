import React from "react";
import "./login.css";
import { Form, Input, Button, Checkbox } from "antd";
function Login() {
  return (
    <div>
      <Form>
        <Input
          className="form-control"
          type="text"
          placeholder="Enter Email"
          style={{ width: "30%", marginTop: "180px" }}
        />
        <br />
        <Input
          className="form-control"
          type="text"
          placeholder="Enter Password"
          style={{ width: "30%", marginTop: "15px" }}
        />
        <br />
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
