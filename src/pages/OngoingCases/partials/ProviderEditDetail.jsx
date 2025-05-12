import React, { useState } from "react";
import { Form, Modal, Select, Input, Button, Typography, Space, message } from "antd";
import { DeleteOutlined, FileOutlined } from "@ant-design/icons";
import { medicalRecordRequest } from "../../../services/cases";

const { Title, Text } = Typography;
const { TextArea } = Input;
const { Option } = Select;

const FileDownload = ({ icon, title, format }) => (
  <div className="bg-white rounded-md p-4 border border-gray-200">
    <Space direction="vertical" size={2}>
      <Space>
        {icon}
        <Text strong className="fs-14 fw-500 text-blue-39">{title}</Text>
      </Space>
      <Space>
        <Text type="secondary" className="fs-12 fw-400 text-blue-85">{format}</Text>
        <Text type="secondary" className="fs-12 fw-400 text-blue-85">•</Text>
        <Text type="secondary" className="fs-12 fw-400 text-blue-85 cursor-pointer">
          Download
        </Text>
      </Space>
    </Space>
  </div>
);

const ProviderEditDetail = ({ provider , onSuccess , onClose }) => {
  console.log("provider", provider);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const statusOptions = [
    { value: "Open", label: "Open", color: "cyan-600" },
    { value: "Pending", label: "In Progress", color: "yellow-500" },
    { value: "Closed", label: "Completed", color: "green-500" },
    { value: "Paid", label: "Paid", color: "red-500" },
  ];

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Saving changes...", values);
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error("Validation failed:", error);
      });
  };


  const handleCaseInvitation = ( ) => {
    let model = {
      doctorAcceptanceStatus: 'Rejected',
    };  
    medicalRecordRequest(model, provider?.id)
      .then((response) => {
        console.log("case invite action successfully:", response);
        onSuccess()
        onClose()
        message.success(response?.message || "invitation action successfully");
      })
      .catch((err) => {
        message.error(err.message);
        console.error("Error case invition action :", err);
      });
  };

  return (
    <div className="">
      <div className="flex justify-between items-start mb-6">
        <div>
          <Title level={4} style={{ margin: 0 }} className="fs-20 fw-600 text-blue-39">
            Dr. {provider?.user?.fullName}
          </Title>
          <div className="flex items-center gap-2">
            <Text type="secondary" className="fs-14 fw-400 text-blue-85">
              {provider?.user?.speciality}
            </Text>
            <Button onClick={handleCaseInvitation} type="text" danger icon={<DeleteOutlined />} className="text-red-500">
              Delete
            </Button>
          </div>
        </div>
      </div>

      <Form
        form={form}
        layout="vertical"
        initialValues={{
          status: provider?.treatmentStatus,
          description: provider?.description || "",
        }}
      >
        <div className="mb-5">
          <Form.Item
            name="status"
            label={<Text strong className="block mb-2">Status</Text>}
          >
            <Select
              style={{ width: "100%" }}
              suffixIcon={<span className="text-gray-400">⌄</span>}
            >
              {statusOptions.map(({ value, label, color }) => (
                <Option key={value} value={value}>
                  <div className="flex items-center">
                    <span className={`inline-block w-4 h-4 rounded-full bg-${color} mr-2`}></span>
                    {label}
                  </div>
                </Option>
              ))}
            </Select>
          </Form.Item>
        </div>

        <div className="mb-6">
          <Form.Item
            name="description"
            label={<Text strong className="block mb-2">Description</Text>}
          >
            <TextArea
              rows={6}
              style={{ resize: "none" }}
              className="edit-textarea"
            />
          </Form.Item>
        </div>
      </Form>

      <div className="bg-gray-50 p-4 rounded-md mb-6">
        <Text strong className="block mb-4">Medical records</Text>
        <div className="grid grid-cols-3 gap-4">
          <FileDownload
            icon={<span className="fs-12 fw-400"><FileOutlined /></span>}
            title="Initial Reports"
            format="Mp4"
          />
          <FileDownload
            icon={<span className="fs-12 fw-400"><FileOutlined /></span>}
            title="MRI Scans"
            format="Jpeg"
          />
          <FileDownload
            icon={<span className="fs-12 fw-400"><FileOutlined /></span>}
            title="Final Reports"
            format="Mp4"
          />
        </div>
      </div>

      <div className="mb-6">
        <Text strong className="block mb-4">Bills</Text>
        <div className="grid grid-cols-3 gap-4">
          <FileDownload
            icon={<span className="fs-12 fw-400"><FileOutlined /></span>}
            title="Bills report"
            format="PDF"
          />
          <FileDownload
            icon={<span className="fs-12 fw-400"><FileOutlined /></span>}
            title="Bills report"
            format="PDF"
          />
          <FileDownload
            icon={<span className="fs-12 fw-400"><FileOutlined /></span>}
            title="Bills report"
            format="PDF"
          />
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <Button block onClick={handleCancel} className="flex-1 btn btn-secondary">
          Close
        </Button>
        <Button
          type="primary"
          block
          onClick={handleSave}
          className="flex-1 btn btn-primary"
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default ProviderEditDetail;