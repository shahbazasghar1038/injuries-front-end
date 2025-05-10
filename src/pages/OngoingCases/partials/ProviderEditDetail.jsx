import   React from "react"
import { useState } from "react"
import { Modal, Select, Input, Button, Typography, Space } from "antd"
import { DeleteOutlined, FileOutlined, CloseOutlined } from "@ant-design/icons"

const { Title, Text } = Typography
const { TextArea } = Input
const { Option } = Select

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
  )

const ProviderEditDetail = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)
  const [status, setStatus] = useState("completed")

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const handleSave = () => {
    console.log("Saving changes...")
    setIsModalOpen(false)
  }

  return (
    <div className="">
          <div className="flex justify-between items-start mb-6">
            <div>
              <Title level={4} style={{ margin: 0 }} className="fs-20 fw-600 text-blue-39">
                Dr. Marina Paul
              </Title>
              <div className="flex items-center gap-2">
              <Text type="secondary" className="fs-14 fw-400 text-blue-85">Orthopedic</Text>
              <Button type="text" danger icon={<DeleteOutlined />} className="text-red-500">
              Delete
            </Button>
              </div>
            </div>
            
          </div>

          <div className="mb-5">
            <Text strong className="block mb-2">
              Status
            </Text>
            <Select
              value={status}
              onChange={setStatus}
              style={{ width: "100%" }}
              suffixIcon={<span className="text-gray-400">⌄</span>}
            >
              <Option value="completed">
                <div className="flex items-center">
                  <span className="inline-block w-4 h-4 rounded-full bg-green-500 mr-2"></span>
                  Completed
                </div>
              </Option>
              <Option value="pending">
                <div className="flex items-center">
                  <span className="inline-block w-4 h-4 rounded-full bg-yellow-500 mr-2"></span>
                  Pending
                </div>
              </Option>
              <Option value="cancelled">
                <div className="flex items-center">
                  <span className="inline-block w-4 h-4 rounded-full bg-red-500 mr-2"></span>
                  Cancelled
                </div>
              </Option>
            </Select>
          </div>

          <div className="mb-6">
            <Text strong className="block mb-2">
              Description
            </Text>
            <TextArea rows={6} defaultValue="388-23-443." style={{ resize: "none"}} className="edit-textarea" />
          </div>

          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <Text strong className="block mb-4">
              Medical records
            </Text>
            <div className="grid grid-cols-3 gap-4">
              <FileDownload
                icon={
                  <span className="fs-12 fw-400">
                    <FileOutlined />
                  </span>
                }
                title="Initial Reports"
                format="Mp4"
              />
              <FileDownload
                icon={
                  <span className="fs-12 fw-400">
                    <FileOutlined />
                  </span>
                }
                title="MRI Scans"
                format="Jpeg"
              />
              <FileDownload
                icon={
                  <span className="fs-12 fw-400">
                    <FileOutlined />
                  </span>
                }
                title="Final Reports"
                format="Mp4"
              />
            </div>
          </div>

          <div className="mb-6">
            <Text strong className="block mb-4">
              Bills
            </Text>
            <div className="grid grid-cols-3 gap-4">
              <FileDownload
                icon={
                  <span className="fs-12 fw-400">
                    <FileOutlined />
                  </span>
                }
                title="Bills report"
                format="PDF"
              />
              <FileDownload
                icon={
                  <span className="fs-12 fw-400">
                    <FileOutlined />
                  </span>
                }
                title="Bills report"
                format="PDF"
              />
              <FileDownload
                icon={
                  <span className="fs-12 fw-400">
                    <FileOutlined />
                  </span>
                }
                title="Bills report"
                format="PDF"
              />
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <Button block onClick={handleCancel} className="flex-1 btn btn-secondary">
              Close
            </Button>
            <Button type="primary" block onClick={handleSave} className="flex-1 btn btn-primary">
              Save Changes
            </Button>
          </div>
        </div>
  )
}

export default ProviderEditDetail