/* eslint-disable no-unused-vars */
import AuthPageLayout from "./AuthPageLayout";
import React, { useState } from "react";
import {
  LockOutlined,
  UserOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/auth";

const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const handleLogin = async (credentials) => {
    try {
      const response = await loginUser(credentials);
      if (response.token) {
        return response;
      }
      throw new Error('Login failed');
    } catch (error) {
      throw error;
    }
  };

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await handleLogin(values);
      messageApi.success('Login successful!');
      navigate('/home');
    } catch (error) {
      messageApi.error(error.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthPageLayout>
      {contextHolder}
      <div className="form-bg">
        <h4 className="text-blue-39 fw-600 mb-3">Sign In</h4>
        <p className="text-blue-85 fw-400 mb-8">
          Enter your email and password to sign in!
        </p>

        <Form
          name="login"
          initialValues={{
            remember: true,
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
              {
                type: 'email',
                message: 'Please enter a valid email!',
              }
            ]}
            style={{ marginBottom: "20px !important" }}
          >
            <label
              className="text-14 fw-500 text-blue-39 mb-2"
              style={{ display: "block", marginBottom: "8px" }}
            >
              Email
            </label>
            <Input className="auth-input" placeholder="Email" />
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
                <Checkbox className='text-14 fw-400 secondary-color-54'>Remember me</Checkbox>
              </Form.Item>
              <Link to={"/forgot-password"} className="text-14 fw-400 text-primary">Forgot password</Link>
            </Flex>
          </Form.Item>
              
          <Form.Item>
            <Button
              block
              type="primary"
              htmlType="submit"
              className="btn btn-primary"
              loading={loading}
            >
              Log in
            </Button>
            <p className='text-14 fw-400 $color-gray-54 text-center mt-5'>
              Don't have an account? <Link to={'/sign-up'} className="text-primary">Sign Up</Link>
            </p>
          </Form.Item>
        </Form>
      </div>
    </AuthPageLayout>
  );
};

export default SignIn;
