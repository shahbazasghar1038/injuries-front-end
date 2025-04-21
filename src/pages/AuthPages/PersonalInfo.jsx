import React, { useState } from 'react'
import AuthLayout from './AuthPageLayout'
import {
    ArrowLeftOutlined,
    EyeInvisibleOutlined,
    EyeOutlined,
  } from "@ant-design/icons";
  import { Button, Checkbox, Col, Form, Input, Row, Typography, message } from "antd";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import { registerUser } from '../../services/auth';
import GooglePlacesAutocomplete from '../../components/ui/GooglePlacesAutocomplete';

const { Text } = Typography;

const PersonalInfo = () => {
    const [form] = Form.useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const userRole = location.state?.role;
    // Redirect if no role is selected
    React.useEffect(() => {
        if (!userRole) {
            message.error('Please select a role first');    
            navigate('/signup');
        }
    }, [userRole, navigate]);
    
    const onFinish = async (values) => {
        try {
            setLoading(true);
            const userData = {
                ...values,
                role: userRole,
            };

            const addresses = [{
                streetAddress: values.address,
                zipCode: values.zipCode,
                state: values.state,
            }];

            const payload = {
                userData,
                addresses,
            };
            
            console.log('user', payload);
            const response = await registerUser(payload);
            if (response) {
                navigate('/otp-verification', { state: { email: values.email } });
            }
        } catch (error) {
            message.error(error.message || 'Registration failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout fullHeight={true}>
            <div className="card-bg max-w-[832px] w-full">
                <div style={{ marginBottom: 24 }}>
                    <p className='fs-12 fw-500 mb-3 text-primary'>Step 2/3</p>
                    <h4 className='text-blue-39 mb-3'>
                        Personal Information
                    </h4>
                    <p className='fs-14 fw-400 text-blue-85'>
                        Enter your personal info to get started!
                    </p>
                </div>
                <Form 
                    form={form}
                    layout="vertical" 
                    className='personal-info-form'
                    onFinish={onFinish}
                    initialValues={{
                        agreement: false
                    }}
                >
                    <Row gutter={[16, 16]} style={{ marginBottom: '16px' }}>
                        <Col xs={24} sm={12}>
                            <Form.Item 
                                style={{ marginBottom: '16px' }} 
                                name="fullName"
                                label={<>Full name <span style={{ color: "red" }}>*</span></>}
                                rules={[
                                    { required: true, message: 'Please enter your full name' },
                                    { min: 2, message: 'Name must be at least 2 characters' }
                                ]}
                            >
                                <Input className='auth-input' placeholder="Enter your full name" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12}>
                            <Form.Item 
                                style={{ marginBottom: '16px' }} 
                                name="email"
                                label={<>Email <span style={{ color: "red" }}>*</span></>}
                                rules={[
                                    { required: true, message: 'Please enter your email' },
                                    { type: 'email', message: 'Please enter a valid email' }
                                ]}
                            >
                                <Input className='auth-input' placeholder="Enter your email" type="email" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]} style={{ marginBottom: '16px' }}>
                        <Col xs={24} sm={12}>
                            <Form.Item 
                                name="password"
                                label={<>Password <span style={{ color: "red" }}>*</span></>}
                                rules={[
                                    { required: true, message: 'Please enter your password' },
                                    { min: 8, message: 'Password must be at least 8 characters' }
                                ]}
                            >
                                <Input.Password
                                    className='auth-input'
                                    placeholder="Enter your password"
                                    iconRender={(visible) =>
                                        visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                                    }
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12}>
                            <Form.Item 
                                name="confirmPassword"
                                label={<>Re-enter Password <span style={{ color: "red" }}>*</span></>}
                                dependencies={['password']}
                                rules={[
                                    { required: true, message: 'Please re-enter your password' },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject('Passwords do not match');
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password
                                    className='auth-input'
                                    placeholder="Re-enter your password"
                                    iconRender={(visible) =>
                                        visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                                    }
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]} style={{ marginBottom: '16px' }}>
                        <Col xs={24} sm={12}>
                            <Form.Item 
                                name="phone"
                                className='phone-field-container'
                                label={<>Phone <span style={{ color: "red" }}>*</span></>}
                                rules={[{ required: true, message: "Please enter phone number" }]}
                            >
                                <PhoneInput
                                    country={'us'}
                                    enableSearch
                                    inputStyle={{
                                        width: '100%',
                                        height: '44px',
                                        borderRadius: '6px',
                                        border: '1px solid #d9d9d9',
                                        fontSize: '16px',
                                    }}
                                    buttonStyle={{
                                        border: 'none',
                                        background: 'transparent',
                                    }}
                                    containerStyle={{ width: '100%' }}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12}>
                            <Form.Item 
                                name="specialty"
                                label="Specialty"
                                rules={[
                                    { required: userRole === 'doctor', message: 'Please select specialty' }
                                ]}
                            >
                                <Input className='auth-input' placeholder="Select specialty" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]} style={{ marginBottom: '16px' }}>
                        <Col span={24}>
                            <Form.Item 
                                name="address"
                                label="Street Address"
                                rules={[{ required: true, message: 'Please enter your address' }]}
                            >
                                <GooglePlacesAutocomplete 
                                    className='auth-input'
                                    placeholder="Enter your address"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]} style={{ marginBottom: '16px' }}>
                        <Col xs={24} sm={12}>
                            <Form.Item 
                                name="state"
                                label="Select State"
                                rules={[{ required: true, message: 'Please select your state' }]}
                            >
                                <Input className='auth-input' placeholder="Select your state" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12}>
                            <Form.Item 
                                name="zipCode"
                                label="Zip Code"
                                rules={[{ required: true, message: 'Please enter your zip code' }]}
                            >
                                <Input className='auth-input' placeholder="Enter your zip" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item 
                        name="agreement" 
                        valuePropName="checked"
                        rules={[
                            { 
                                validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject('Please accept the terms and conditions'),
                            },
                        ]}
                        className='remember-checkbox'
                    >
                        <Checkbox>
                            By creating an account means you agree to the{" "}
                            <a href="#">Terms and Conditions</a>, and our{" "}
                            <a href="#">Privacy Policy</a>
                        </Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button 
                            type="primary" 
                            htmlType="submit"
                            className='btn btn-primary'
                            block
                            loading={loading}
                        >
                            Continue
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </AuthLayout>
    )
}

export default PersonalInfo