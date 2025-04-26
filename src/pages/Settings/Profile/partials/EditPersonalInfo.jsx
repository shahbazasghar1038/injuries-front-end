
import { useState } from "react"
import { Form, Input, Select, Button } from "antd"
import { PlusOutlined, FilePdfOutlined, GoogleOutlined } from "@ant-design/icons"
import PhoneInput from "react-phone-input-2"

const { TextArea } = Input
const { Option } = Select

const EditPersonalInfo = ({ open, onClose, onSave, initialData }) => {

  const [form] = Form.useForm()

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      onSave(values)
    })
  }

  return (
      <>
      <div className="pb-2">
          <h2 className="text-2xl font-semibold">Edit Personal Information</h2>
          <p className="text-gray-500 text-sm mt-1">Update your details to keep your profile up-to-date.</p>
        </div>
        <Form form={form} layout="vertical" initialValues={initialData}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[{ required: true, message: "Please enter your first name" }]}
          >
            <Input placeholder="Enter your first name" />
          </Form.Item>

          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[{ required: true, message: "Please enter your last name" }]}
          >
            <Input placeholder="Enter your last name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email Address"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item name="phone" label="Phone" rules={[{ required: true, message: "Please enter your phone number" }]}>
          <PhoneInput
                  country={"us"}
                  enableSearch
                  inputStyle={{
                    width: "100%",
                    height: "44px",
                    borderRadius: "6px",
                    border: "1px solid #d9d9d9",
                    fontSize: "16px",
                  }}
                  buttonStyle={{
                    border: "none",
                    background: "transparent",
                  }}
                  containerStyle={{ width: "100%" }}
                />
          </Form.Item>

          <Form.Item name="bio" label="Bio" className="md:col-span-2">
            <Input placeholder="Enter your bio" />
          </Form.Item>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <Button onClick={onClose}>Close</Button>
          <Button type="primary" onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700">
            Save Changes
          </Button>
        </div>
      </Form>
    </>
  )
}

export default EditPersonalInfo

