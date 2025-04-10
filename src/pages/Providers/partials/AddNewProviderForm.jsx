import { useState } from "react"
import { Form, Input, Select, Button, Checkbox } from "antd"
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons"
import PhoneInput from "react-phone-input-2"

const { Option } = Select

const AddNewProviderForm = ({ form, onCancel, onSubmit }) => {
  const [addresses, setAddresses] = useState([
    { id: 1, isPrimary: true },
  ])

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        // Process addresses
        const formattedAddresses = addresses.map((addr) => ({
          ...values[`address_${addr.id}`],
          isPrimary: addr.isPrimary,
        }))

        // Create final form data
        const formData = {
          fullName: values.fullName,
          email: values.email,
          phone: values.phone,
          phonePrefix: values.phonePrefix,
          specialty: values.specialty,
          addresses: formattedAddresses,
        }

        onSubmit(formData)
      })
      .catch((info) => {
        console.log("Validate Failed:", info)
      })
  }

  // Handle primary address selection
  const handlePrimaryChange = (id) => {
    setAddresses(
      addresses.map((addr) => ({
        ...addr,
        isPrimary: addr.id === id,
      })),
    )
  }

  // Add new address
  const addNewAddress = () => {
    const newId = Math.max(...addresses.map((a) => a.id)) + 1
    setAddresses([...addresses, { id: newId, isPrimary: false }])
  }

  // Remove address
  const removeAddress = (id) => {
    // Don't allow removing if only one address remains
    if (addresses.length <= 1) return

    // If removing the primary address, make the first remaining one primary
    const isPrimaryRemoved = addresses.find((a) => a.id === id)?.isPrimary
    const filteredAddresses = addresses.filter((a) => a.id !== id)

    if (isPrimaryRemoved && filteredAddresses.length > 0) {
      filteredAddresses[0].isPrimary = true
    }

    setAddresses(filteredAddresses)
  }

  // Specialty options
  const specialtyOptions = [
    { value: "orthopedic", label: "Orthopedic" },
    { value: "neurologist", label: "Neurologist" },
    { value: "cardiologist", label: "Cardiologist" },
    { value: "pediatrician", label: "Pediatrician" },
    { value: "dermatologist", label: "Dermatologist" },
  ]

  // Prefill form with sample data
  const initialValues = {
    fullName: "Jake Paul",
    email: "jake@medical_com",
    phonePrefix: "US",
    phone: "+1 688 4813 328",
    specialty: "orthopedic",
    address_1: {
      street: "55 Brooksby Village Way, Danvers MA 1923",
      state: "Massachusetts",
      zipCode: "334563",
    }
  }

  return (<>
  
  <div className="pb-2">
          <h2 className="text-2xl font-semibold">Add Medical Provider</h2>
          <p className="text-gray-500 text-sm mt-1">Create a medical provider by adding their details.</p>
        </div>
  
    <Form form={form} layout="vertical" initialValues={initialValues} className="medical-provider-form">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Full Name */}
        <Form.Item name="fullName" label="Full Name" rules={[{ required: true, message: "Please enter full name" }]}>
          <Input placeholder="Enter full name" />
        </Form.Item>

        {/* Email */}
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please enter email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
          >
          <Input placeholder="Enter email address" />
        </Form.Item>

       {/* Phone */}
       <Form.Item
      name="phone"
      label="Phone"
      rules={[{ required: true, message: "Please enter phone number" }]}
    >
      <PhoneInput
        country={'us'}
        enableSearch
        inputStyle={{
          width: '100%',
          height: '40px',
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

        {/* Specialty */}
        <Form.Item name="specialty" label="Specialty" rules={[{ required: true, message: "Please select specialty" }]}>
          <Select placeholder="Select specialty">
            {specialtyOptions.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </div>

      {/* Addresses */}
      {addresses.map((address, index) => (
        <div key={address.id} className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-base font-medium">{index === 0 ? "Address" : `Address ${index + 1}`}</h3>
            {addresses.length > 1 && (
              <Button
                type="text"
                danger
                icon={<DeleteOutlined />}
                onClick={() => removeAddress(address.id)}
                className="flex items-center justify-center h-8 w-8 hover:bg-red-50"
              />
            )}
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            {/* Street */}
            <Form.Item
              name={["address", address.id, "street"]}
              label="Street"
              initialValue={initialValues[`address_${address.id}`]?.street}
              rules={[{ required: true, message: "Please enter street address" }]}
              >
              <Input placeholder="Enter street address" />
            </Form.Item>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* State */}
              <Form.Item
                name={["address", address.id, "state"]}
                label="State"
                initialValue={initialValues[`address_${address.id}`]?.state}
                rules={[{ required: true, message: "Please enter state" }]}
                >
                <Input placeholder="Enter state" />
              </Form.Item>

              {/* ZIP Code */}
              <Form.Item
                name={["address", address.id, "zipCode"]}
                label="ZIP Code"
                initialValue={initialValues[`address_${address.id}`]?.zipCode}
                rules={[{ required: true, message: "Please enter ZIP code" }]}
                >
                <Input placeholder="Enter ZIP code" />
              </Form.Item>
            </div>

            {/* Mark as primary */}
            <Form.Item>
              <Checkbox checked={address.isPrimary} onChange={() => handlePrimaryChange(address.id)}>
                Mark as primary address
              </Checkbox>
            </Form.Item>
          </div>
        </div>
      ))}

      {/* Add New Address Button */}
      <Button
        type="link"
        icon={<PlusOutlined />}
        onClick={addNewAddress}
        className="text-blue-600 hover:text-blue-800 p-0 h-auto flex items-center mb-6"
        >
        Add New Address
      </Button>

      {/* Form Actions */}
      <div className="flex justify-between gap-4 mt-6">
        <Button size="large" className="w-full" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="primary" size="large" className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleSubmit}>
          Create
        </Button>
      </div>
    </Form>
        </>
  )
}

export default AddNewProviderForm

