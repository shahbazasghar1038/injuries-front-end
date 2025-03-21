import AuthPageLayout from './AuthPageLayout'
import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';


const ForgotPassword = () => {

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };


  return (
    <AuthPageLayout>
      <div className='form-bg'>
        <h4 className="text-blue-39 mb-3">Forgot Your Password?</h4>
        <p className="text-blue-85 mb-8">Enter the email address linked to your account, and we’ll send you a link to reset your password.</p>

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
            name="Email"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
          <label className='text-14 fw-500 text-blue-39 mb-2'>Email</label>
            <Input className='auth-input' placeholder="Email" />
          </Form.Item>

          <Form.Item className='mb--0 mt--20'>
            <Button block type="primary" htmlType="submit" className='btn btn-primary'>
            Send Reset Link
            </Button>
          </Form.Item>
        </Form>

        {/* --------FORM------- */}

      </div>
    </AuthPageLayout>
  )
}

export default ForgotPassword