import  React, { useEffect, useState } from "react"
import { Form, Input, Button, Select, DatePicker } from "antd"
import { CalendarOutlined } from "@ant-design/icons"
import GooglePlacesAutocomplete from "../../../components/ui/GooglePlacesAutocomplete"
import PhoneInput from "react-phone-input-2"
import moment from "moment"

const AddNewCaseForm = ({onCancel, onSubmit , data={}}) => {

  console.log('data:' , data)

   
  const [form] = Form.useForm();
  const [addresses, setAddresses] = useState ([{ id: 1, isPrimary: true }]); // Initialize addresses state

  // Pre-fill form fields when editing a case
  useEffect(() => {
    if (data?.case) {
      form.setFieldsValue({
        fullName: data.case.fullName,
        email: data.case.email,
        phone: data.case.phone,
        dateOfBirth: data.case.dateOfBirth
          ? moment(data.case.dateOfBirth)
          : null,
        dateOfAccident: data.case.dateOfAccident
          ? moment(data.case.dateOfAccident)
          : null,
        gender: data.case.gender,
        streetAddress: data.case.streetAddress,
      });
    }
  }, [data, form]);

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        // Format dates for submission
        const formattedValues = {
          ...values,
          dateOfBirth: values.dateOfBirth
            ? values.dateOfBirth.format("YYYY-MM-DD")
            : null,
          dateOfAccident: values.dateOfAccident
            ? values.dateOfAccident.format("YYYY-MM-DD")
            : null,
        };

        // Process addresses
        const formattedAddresses = addresses.map((addr) => ({
          street: values[`address_${addr.id}`]?.street || "",
          state: values[`address_${addr.id}`]?.state || "",
          zipCode: values[`address_${addr.id}`]?.zipCode || "",
          isPrimary: addr.isPrimary,
        }));

        // Create final form data
        const formData = {
          ...formattedValues,
          addresses: formattedAddresses,
        };

        onSubmit(formData);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  // Gender options
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
    { value: "prefer_not_to_say", label: "Prefer not to say" },
  ];

  const statusOptions = [
    { value: "Open", label: "Open" },
    { value: "In Progress", label: "In Progress" },
    { value: "Closed", label: "Completed" },
    { value: "Paid", label: "Paid" },
  ];

  return (
    <div>
         <div className="pb-2">
          <h6 className="font-600 text-blue-39">Add new case</h6>
          <p className="fs-14 fw-400 text-blue-85 mt-1">Add patient information to start the case.</p>
        </div>
           <Form form={form} layout="vertical" name="addNewCaseForm" className="mt-4 add-new-case-form">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
          {/* Full name */}
          <Form.Item name="fullName" label="Full name" rules={[{ required: false, message: "Please enter full name" }]}>
            <Input placeholder="Enter full name" size="large" />
          </Form.Item>

          {/* Email */}
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: false, message: "Please enter email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input placeholder="Enter email address" size="large" />
          </Form.Item>

          {/* Phone */}
          <Form.Item
      name="phone"
      // label="Phone"
      rules={[{ required: false, message: "Please enter phone number" }]}
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
          padding: '7px 11px',
        }}
        buttonStyle={{
          border: 'none',
          background: 'transparent',
        }}
        containerStyle={{ width: '100%' }}
      />
    </Form.Item>

          {/* Gender */}
          <Form.Item name="gender" label="Gender">
            <Select placeholder="Select gender" options={genderOptions} size="large" />
          </Form.Item>

          {/* Date of Birth */}
          <Form.Item
            name="dateOfBirth"
            label="Date of Birth"
            rules={[{ required: false, message: "Please select date of birth" }]}
          >
            <DatePicker
              placeholder="dd/mm/yyyy"
              format="DD/MM/YYYY"
              className="w-full"
              size="large"
              suffixIcon={<CalendarOutlined />}
            />
          </Form.Item>

          {/* Date of Accident */}
          <Form.Item
            name="dateOfAccident"
            label="Date of Accident"
            rules={[{ required: false, message: "Please select date of accident" }]}
          >
            <DatePicker
              placeholder="dd/mm/yyyy"
              format="DD/MM/YYYY"
              className="w-full"
              size="large"
              suffixIcon={<CalendarOutlined />}
            />
          </Form.Item>
        </div>

        {/* Street Address with Google Places Autocomplete - Full width */}
       {data?.case?.email ?
        <Form.Item
        name="status"
        label="Status"
        rules={[{ required: false, message: "Please select status" }]}
      >
        <Select placeholder="Select status">
          {statusOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </Form.Item>
       :
       <Form.Item
       name="streetAddress"
       label="Street Address"
       rules={[{ required: false, message: "Please enter street address" }]}
       className=""
       >
          <GooglePlacesAutocomplete placeholder="Enter address" size="large" />
        </Form.Item>
        }

        {/* Form Actions */}
        <div className="flex justify-between gap-4 mt-6">
          <Button size="large" className="w-full btn btn-cancel" onClick={onCancel}>
            Cancel
          </Button>
          <Button
            type="primary"
            size="large"
            className="w-full btn btn-primary h-11"
            onClick={handleSubmit}
          >
            Save Case Details
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default AddNewCaseForm