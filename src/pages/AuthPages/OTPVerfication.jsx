import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row, Typography } from "antd";
import React, { useState, useRef } from "react";
import AuthLayout from './AuthPageLayout'

const { Title, Text } = Typography;

const OTPVerfication = () => {
    const [otp, setOtp] = useState(Array(6).fill(""));
    const inputRefs = useRef([]);

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
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </div>

                        <Button className="btn btn-primary" block style={{ marginBottom: 16 }}>
                            Verify Code
                        </Button>

                        <p className="fs-14 fw-500 text-gray-54 text-center">
                            Didn't get the code? <a href='#'>Resend</a>
                        </p>
                    </Col>
                </Row>
            </div>
        </AuthLayout>
    )
}

export default OTPVerfication