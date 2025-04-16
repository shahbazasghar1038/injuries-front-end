/* eslint-disable no-unused-vars */
import AuthPageLayout from "./AuthPageLayout";
import React, { useState } from "react";
import {
  LockOutlined,
  UserOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/auth";
// To handle loading state

const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    setLoading(true);
    const { username, password } = values;
  };
  const onSubmit = async () => {
    setLoading(true);
    const payload = {
      email: "muhammadshahbaz1038@gmail.com",
      password: "password123",
    };

    try {
      console.log("Logging in with payload:", payload);

      const response = await loginUser(payload);
      console.log("Login successful:", response);
      // Check if the response contains a token or user data
      if (response.token) {
        alert("Login successful!");
        navigate("/home ");
      }
    } catch (error) {
      console.error("Login failed:", error);
      // Optionally show an error message to the user
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthPageLayout>
      <div className="form-bg">
        <h4 className="text-blue-39 mb-3">Sign In</h4>
        <p className="text-blue-85 mb-8">
          Enter your email and password to sign in!
        </p>

        {/* --------FORM------- */}
        <Form
          name="login"
          initialValues={{
            remember: true,
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
            style={{ marginBottom: "20px !important" }}
          >
            <label
              className="text-14 fw-500 text-blue-39 mb-2"
              style={{ display: "block", marginBottom: "8px" }}
            >
              Email
            </label>
            <Input className="auth-input" placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <label
              className="text-14 fw-500 text-blue-39 mb-2"
              style={{ display: "block", marginBottom: "8px" }}
            >
              Password
            </label>
            <Input
              type={passwordVisible ? "text" : "password"}
              className="auth-input"
              placeholder="******"
              suffix={
                <span
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  style={{ cursor: "pointer" }}
                >
                  {passwordVisible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                </span>
              }
            />
          </Form.Item>
          <Form.Item
            className="remember-checkbox"
            style={{ marginBottom: "0px" }}
          >
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Link to={"/forgot-password"}>Forgot password</Link>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button
              onClick={() => onSubmit()}
              block
              type="primary"
              htmlType="submit"
              className="btn btn-primary"
            >
              Log in
            </Button>
            <p className="text-14 fw-400 $color-gray-54 mt-5">
              Don't have an account?{" "}
              <Link to={"/sign-up"} className="text-primary">
                Sign Up
              </Link>
            </p>
          </Form.Item>
        </Form>

        {/* --------FORM------- */}
      </div>
    </AuthPageLayout>
  );
};

export default SignIn;
