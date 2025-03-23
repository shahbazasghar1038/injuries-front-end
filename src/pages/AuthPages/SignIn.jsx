import AuthPageLayout from './AuthPageLayout'
import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { Link } from 'react-router-dom';


const SignIn = () => {

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
            gap: 20,
          }}
          onFinish={onFinish}
        >
          <Form.Item className="mb--20"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
          <label className='text-14 fw-500 text-blue-39 mb-2'>Email</label>
            <Input className='auth-input' placeholder="Username" />
          </Form.Item>
          <Form.Item className="mb--20"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
          <label className='text-14 fw-500 text-blue-39 mb-2'>Password</label>
            <Input type="password" className='auth-input' placeholder="******" />
          </Form.Item>
          <Form.Item className='mb--20'>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Link to={'/forgot-password'}>Forgot password</Link>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit" className='btn btn-primary'>
              Log in
            </Button>
            <p className='text-14 fw-400 $color-gray-54 mt-5'>Don’t have an account?  <Link to={'/sign-up'} className="text-primary">Sign Up</Link></p>
          </Form.Item>
        </Form>

        {/* --------FORM------- */}

      </div>
    </AuthPageLayout>
  )
}

export default SignIn