import AuthPageLayout from './AuthPageLayout'
import React, { useState } from 'react';
import { LockOutlined, UserOutlined, EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { Link, useNavigate } from 'react-router-dom';


const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
const navigate = useNavigate()
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };


  return (
    <AuthPageLayout>
      <div className='form-bg'>
        <h4 className="text-blue-39 mb-3">Sign In</h4>
        <p className="text-blue-85 mb-8">Enter your email and password to sign in!</p>

        {/* --------FORM------- */}
        <Form
          name="login"
          initialValues={{
            remember: true,
          }}
          style={{
            display:'flex',
            flexDirection:'column',
            gap: '20px',
          }}
          onFinish={onFinish}
        >
          <Form.Item 
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
            style={{ marginBottom:'20px !important' }}
          >
          <label className='text-14 fw-500 text-blue-39 mb-2' style={{display: 'block', marginBottom: '8px'}}>Email</label>
            <Input className='auth-input' placeholder="Username" />
          </Form.Item>
          <Form.Item 
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
          <label className='text-14 fw-500 text-blue-39 mb-2' style={{display: 'block', marginBottom: '8px'}}>Password</label>
            <Input
              type={passwordVisible ? "text" : "password"}
              className='auth-input'
              placeholder="******"
              suffix={
                <span onClick={() => setPasswordVisible(!passwordVisible)} style={{ cursor: 'pointer' }}>
                  {passwordVisible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                </span>
              }
            />
          </Form.Item>
          <Form.Item className='remember-checkbox' style={{ marginBottom: '0px' }}>
            <Flex justify="space-between" align="center" className='custom-checkbox'>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox className='text-14 fw-400 secondary-color-54'>Remember me</Checkbox>
              </Form.Item>
              <Link to={'/forgot-password'} className='text-14 fw-500 text-primary'>Forgot password</Link>
            </Flex>
          </Form.Item>
              
          <Form.Item>
            <Button onClick={()=>navigate('/home ')} block type="primary" htmlType="submit" className='btn btn-primary'>
              Log in
            </Button>
            <p className='text-14 fw-400 $color-gray-54 text-center mt-5'>Don't have an account?  <Link to={'/sign-up'} className="text-primary">Sign Up</Link></p>
          </Form.Item>
        </Form>

        {/* --------FORM------- */}

      </div>
    </AuthPageLayout>
  )
}

export default SignIn