import { ArrowLeftOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row, Typography, Modal as AntdModal } from "antd";
import React, { useState, useRef } from "react";
import AuthLayout from './AuthPageLayout'
import { Link, useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const OTPVerfication = () => {
    const [otp, setOtp] = useState(Array(6).fill(""));
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const inputRefs = useRef([]);
    const navigate = useNavigate();

    // Initialize inputRefs
    if (inputRefs.current.length !== 6) {
        inputRefs.current = Array(6).fill().map((_, i) => inputRefs.current[i] || React.createRef());
    }

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (value.length <= 1 && !isNaN(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            
            // Auto focus next input after entering a digit
            if (value !== "" && index < 5) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        // Move to previous input on backspace
        if (e.key === "Backspace" && index > 0 && otp[index] === "") {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleCloseModal = () => {
        setShowSuccessModal(false);
        navigate('/home'); // Redirect to home page
    };

    const handleVerifyCode = () => {
        // You can add validation logic here if needed
        setShowSuccessModal(true);
    };

    return (
        <AuthLayout>
            <div className="card-bg max-w-[333px] w-full">
                <Row justify="center" align="middle" className="w-full">
                    <Col
                        xs={24}
                        sm={24}
                        md={24}
                        lg={24}
                        xl={24}
                        className="w-full"
                    >
                        <div style={{ marginBottom: 24 }}>
                            <p className='fs-12 fw-500 mb-3 text-primary'>Step 3/3</p>
                            <h4 className='text-blue-39 mb-3'>OTP Verification</h4>
                            <p className='fs-14 fw-400 text-blue-85'>
                                A verification code has been sent to{" "}
                                <Text strong>paul.jakey89@gmail.com</Text>. Please enter it in the
                                field below.
                            </p>
                        </div>

                        <div style={{ marginBottom: 24 }}>
                            <Text>Type your 6 digits security code</Text>
                            <Row gutter={16} style={{ marginTop: 8 }}>
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <Col key={index} span={4}>
                                        <Input
                                            maxLength={1}
                                            style={{ textAlign: "center" }}
                                            value={otp[index]}
                                            onChange={(e) => handleChange(e, index)}
                                            onKeyDown={(e) => handleKeyDown(e, index)}
                                            ref={(el) => (inputRefs.current[index] = el)}
                                            className="h-11 otp-input input-px-1"
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </div>

                        <Button 
                            className="btn btn-primary" 
                            block 
                            style={{ marginBottom: 16 }}
                            onClick={handleVerifyCode}
                        >
                            Verify Code
                        </Button>

                        <p className="fs-14 fw-500 text-gray-54 text-center">
                            Didn't get the code? <a href='#'>Resend</a>
                        </p>
                    </Col>
                </Row>
            </div>
            {/* ------------MODAL --------- */}
            <AntdModal
                visible={showSuccessModal}
                footer={null}
                closable={false}
                centered
                style={{
                    borderRadius: "24px",
                    maxWidth: "580px",
                    height: "298px"
                }}
                width={580}
                bodyStyle={{ 
                    padding: "40px", 
                    textAlign: "center",
                    height: "298px"
                }}
                modalRender={(node) => (
                    <Link to={'/sign-up'} style={{ borderRadius: "24px", overflow: "hidden" }}>
                        {node}
                    </Link>
                )}
            >
                <Row justify="center" style={{ marginBottom: "20px" }}>
                    <Col>
                        <div
                            style={{
                                width: "120px",
                                height: "120px",
                                backgroundImage:
                                    "url(https://c.animaapp.com/m8kdviwdBkWVsc/img/star-1.svg)",
                                backgroundSize: "100% 100%",
                                position: "relative",
                            }}
                        >
                            <div
                                style={{
                                    width: "38px",
                                    height: "38px",
                                    position: "absolute",
                                    top: "41px",
                                    left: "41px",
                                }}
                            >
                                <img
                                    style={{
                                        width: "32px",
                                        height: "32px",
                                        position: "absolute",
                                        top: "3px",
                                        left: "3px",
                                    }}
                                    alt="Icon"
                                    src="https://c.animaapp.com/m8kdviwdBkWVsc/img/icon.svg"
                                />
                            </div>
                        </div>
                    </Col>
                </Row>

                <h5 className="text-blue-39 mb-3">Account Created</h5>
                <p className="fs-14 text-blue-85 mb-8">Congratulations! You've successfully created account.</p>

                <div
                    style={{
                        position: "absolute",
                        top: "24px",
                        right: "24px",
                        width: "44px",
                        height: "44px",
                        backgroundColor: "#f2f3f6",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                    }}
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent the Link wrapper from capturing the click
                        setShowSuccessModal(false);
                        navigate('/');
                    }}
                >
                    <CloseOutlined style={{ fontSize: "16px", color: "#000" }} />
                </div>
            </AntdModal>
        </AuthLayout>
    )
}

export default OTPVerfication