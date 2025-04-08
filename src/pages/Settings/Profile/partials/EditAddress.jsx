
import { useState } from "react"
import { Form, Input, Select, Button } from "antd"
import { PlusOutlined, FilePdfOutlined, GoogleOutlined } from "@ant-design/icons"

const EditAddress = ({ open, onClose, onSave, initialData }) => {

  const [form] = Form.useForm()

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      onSave(values)
    })
  }

  return (
      <>
      <div className="pb-2">
          <h2 className="text-2xl font-semibold">Edit Address</h2>
          <p className="text-gray-500 text-sm mt-1">Update your details to keep your profile up-to-date.</p>
        </div>
        <Form form={form} layout="vertical" initialValues={initialData}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item name="country" label="Country" rules={[{ required: true, message: "Please enter your country" }]}>
            <Input placeholder="Enter your country" />
          </Form.Item>

          <Form.Item
            name="city"
            label="City/State"
            rules={[{ required: true, message: "Please enter your city/state" }]}
          >
            <Input placeholder="Enter your city/state" />
          </Form.Item>

          <Form.Item
            name="postalCode"
            label="Postal Code"
            rules={[{ required: true, message: "Please enter your postal code" }]}
          >
            <Input placeholder="Enter your postal code" />
          </Form.Item>

          <Form.Item name="taxId" label="TAX ID">
            <Input placeholder="Enter your TAX ID" />
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

export default EditAddress

