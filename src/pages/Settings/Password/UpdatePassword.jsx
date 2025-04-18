"use client"

import { useState } from "react"
import { Card, Button, Form, Input, Divider } from "antd"
import { EyeOutlined, EyeInvisibleOutlined, CheckCircleFilled, ExclamationCircleFilled } from "@ant-design/icons"
import SettingsLayout from "../../../layout/SettingsLayout"

const UpdatePassword = () => {
  const [form] = Form.useForm()
  const [passwordVisible, setPasswordVisible] = useState({
    current: false,
    new: false,
    confirm: false,
  })
  const [password, setPassword] = useState("")
  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
  })

  const togglePasswordVisibility = (field) => {
    setPasswordVisible({
      ...passwordVisible,
      [field]: !passwordVisible[field],
    })
  }

  const validatePassword = (password) => {
    setPassword(password)
    setPasswordValidation({
      length: password.length >= 8 && password.length <= 16,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
    })
  }

  const handleSubmit = (values) => {
    console.log("Password change submitted:", values)
    // Here you would typically call an API to update the password
    form.resetFields()
    setPassword("")
    setPasswordValidation({
      length: false,
      uppercase: false,
      lowercase: false,
      number: false,
    })
  }

  const ValidationIcon = ({ isValid }) => {
    return isValid ? (
      <CheckCircleFilled className="text-green-500" />
    ) : (
      <ExclamationCircleFilled className="text-gray-300" />
    )
  }

  return (
    <SettingsLayout> 


    <Card className="shadow-sm mb-6">
      <h2 className="text-lg font-semibold mb-4">Password</h2>
      <Divider/>
      <Form form={form} layout="vertical" onFinish={handleSubmit}  className="max-w-[491px]">
        <Form.Item className="password-field-container"
          name="currentPassword"
          label={<span>Current Password <span className="text-red-500">*</span></span>}
          rules={[{ required: true, message: "Please enter your current password" }]}
        >
          <Input.Password
            placeholder="Enter your current password"
            visibilityToggle={{
              visible: passwordVisible.current,
              onVisibleChange: () => togglePasswordVisibility("current"),
            }}
            iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
          />
        </Form.Item>

        <Form.Item className="password-field-container"
          name="newPassword"
          label={<span>New Password <span className="text-red-500">*</span></span>}
          rules={[
            { required: true, message: "Please enter your new password" },
            {
              validator: (_, value) => {
                if (
                  value &&
                  value.length >= 8 &&
                  value.length <= 16 &&
                  /[A-Z]/.test(value) &&
                  /[a-z]/.test(value) &&
                  /[0-9]/.test(value)
                ) {
                  return Promise.resolve()
                }
                return Promise.reject("Password doesn't meet requirements")
              },
            },
          ]}
        >
          <Input.Password
            placeholder="Enter your new password"
            onChange={(e) => validatePassword(e.target.value)}
            visibilityToggle={{
              visible: passwordVisible.new,
              onVisibleChange: () => togglePasswordVisibility("new"),
            }}
            iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
          />
        </Form.Item>

        <div className="mb-5 ml-2">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
            <ValidationIcon isValid={passwordValidation.length} />
            <span>Min. of 8-16 characters</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
            <ValidationIcon isValid={passwordValidation.uppercase} />
            <span>Min. one uppercase letter (A-Z)</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
            <ValidationIcon isValid={passwordValidation.lowercase} />
            <span>Min. one lowercase letter (a-z)</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
            <ValidationIcon isValid={passwordValidation.number} />
            <span>Min. one number (0-9)</span>
          </div>
        </div>

        <Form.Item className="password-field-container"
          name="confirmPassword"
          label={<span>Confirm Password <span className="text-red-500">*</span></span>}
          dependencies={["newPassword"]}
          rules={[
            { required: true, message: "Please confirm your password" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve()
                }
                return Promise.reject("The two passwords do not match")
              },
            }),
          ]}
        >
          <Input.Password
            placeholder="Confirm your new password"
            visibilityToggle={{
              visible: passwordVisible.confirm,
              onVisibleChange: () => togglePasswordVisibility("confirm"),
            }}
            iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
          />
        </Form.Item>

        <div className="flex gap-2 mt-6">
          <Button type="primary" htmlType="submit" className="bg-blue-600 hover:bg-blue-700">
            Save Changes
          </Button>
          <Button onClick={() => form.resetFields()}>Cancel</Button>
        </div>
      </Form>
    </Card>
    </SettingsLayout>

  )
}

export default UpdatePassword
