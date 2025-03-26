import React from 'react'
import AuthLayout from './AuthPageLayout'
import {
    ArrowLeftOutlined,
    EyeInvisibleOutlined,
    EyeOutlined,
  } from "@ant-design/icons";
  import { Button, Checkbox, Col, Form, Input, Row, Typography } from "antd";
import { Link } from 'react-router-dom';

const { Text } = Typography;

const PersonalInfo = () => {
    return (
        <AuthLayout fullHeight={true}>
            <div className="card-bg max-w-[832px] w-full">
                <div style={{ marginBottom: 24 }}>
                    <p className='fs-12 fw-500 mb-3 text-primary'>Step 2/3</p>
                    <h4 className='text-blue-39 mb-3'>
                        Personals Information
                    </h4>
                    <p className='fs-14 fw-400 text-blue-85'>
                        Enter your personal info to get started!
                    </p>
                </div>
                <Form layout="vertical">
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item 
                                label={<>Full name <span style={{ color: "red" }}>*</span></>}
                                rules={[{ required: true, message: 'Please enter your full name' }]}
                            >
                                <Input className='auth-input' placeholder="Enter your full name" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item 
                                label={<>Email <span style={{ color: "red" }}>*</span></>}
                                rules={[{ required: true, message: 'Please enter your email' }]}
                            >
                                <Input className='auth-input' placeholder="Enter your email" type="email" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item 
                                label={<>Password <span style={{ color: "red" }}>*</span></>}
                                rules={[{ required: true, message: 'Please enter your password' }]}
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
                        <Col span={12}>
                            <Form.Item 
                                label={<>Re-enter Password <span style={{ color: "red" }}>*</span></>}
                                rules={[{ required: true, message: 'Please re-enter your password' }]}
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
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item 
                                label={<>Phone Number <span style={{ color: "red" }}>*</span></>}
                                rules={[{ required: true, message: 'Please enter your phone number' }]}
                            >
                                <Input 
                                    addonBefore="US" 
                                    defaultValue="+1 (355) 8701-0347" 
                                    style={{ height: '40px' }}
                                    className="phone-input"
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Specialty">
                                <Input className='auth-input' placeholder="Select specialty" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item label="Street Address">
                                <Input className='auth-input' placeholder="Enter your address" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Select State">
                                <Input className='auth-input' placeholder="Select your state" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Zip Code">
                                <Input className='auth-input' placeholder="Enter your zip" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item>
                        <Checkbox>
                            By creating an account means you agree to the{" "}
                            <a href="#">Terms and Conditions</a>, and our{" "}
                            <a href="#">Privacy Policy</a>
                        </Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Link to={'/otp-verification'} className='btn btn-primary' block>
                            Continue
                        </Link>
                    </Form.Item>
                    <Form.Item>
                        <p style={{ textAlign: "center" }}>
                            Already have an account? <Link to={'/sign-in'}>Sign In</Link>
                        </p>
                    </Form.Item>
                </Form>
            </div>
        </AuthLayout>
    )
}

export default PersonalInfo