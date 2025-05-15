import { useState } from "react"
import { Card, Button, Modal, Upload, DatePicker, Select, Input, message } from "antd"
import { UploadOutlined, PlusOutlined, FileTextOutlined, DollarOutlined, MedicineBoxOutlined } from "@ant-design/icons"
import { InboxOutlined } from "@ant-design/icons"
import "antd/dist/reset.css"

const { Dragger } = Upload
const { TextArea } = Input

const DoctorCardFileUpload = () => {
  // State for modals
  const [recordsModalVisible, setRecordsModalVisible] = useState(false)
  const [billsModalVisible, setBillsModalVisible] = useState(false)
  const [treatmentModalVisible, setTreatmentModalVisible] = useState(false)

  // State for file lists
  const [recordsFileList, setRecordsFileList] = useState([])
  const [billsFileList, setBillsFileList] = useState([])

  // Treatment status form data
  const [treatmentData, setTreatmentData] = useState({
    lastVisitDate: null,
    visitsLeft: undefined,
    visitsCompleted: undefined,
    description: "",
  })

  // Handle file uploads for records
  const handleRecordsUpload = ({ fileList }) => {
    setRecordsFileList(fileList)
  }

  // Handle file uploads for bills
  const handleBillsUpload = ({ fileList }) => {
    setBillsFileList(fileList)
  }

  // Handle form changes for treatment status
  const handleTreatmentChange = (field, value) => {
    setTreatmentData({
      ...treatmentData,
      [field]: value,
    })
  }

  // Submit handlers
  const handleRecordsSubmit = () => {
    message.success(`${recordsFileList.length} medical record(s) uploaded successfully`)
    setRecordsModalVisible(false)
  }

  const handleBillsSubmit = () => {
    message.success(`${billsFileList.length} medical bill(s) uploaded successfully`)
    setBillsModalVisible(false)
  }

  const handleTreatmentSubmit = () => {
    message.success("Treatment status updated successfully")
    setTreatmentModalVisible(false)
  }

  // Upload props configuration
  const uploadProps = {
    accept: ".pdf,.doc,.docx,.jpg,.jpeg,.png,.svg",
    multiple: true,
    showUploadList: false,
  }

  return (
    <div className="py-6 bg-gray-50 min-h-fit">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Medical Records Card */}
        <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex flex-col h-full">
            <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <FileTextOutlined className="text-blue-600 text-xl" />
            </div>
            <h3 className="text-lg font-medium mb-2">Medical Records</h3>
            <p className="text-gray-600 mb-4">Easily upload and share patient medical records.</p>
            <div className="mt-auto">
              <Button
                icon={<UploadOutlined />}
                className="flex items-center"
                onClick={() => setRecordsModalVisible(true)}
              >
                Upload
              </Button>
            </div>
          </div>
        </Card>

        {/* Medical Bills Card */}
        <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex flex-col h-full">
            <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <DollarOutlined className="text-blue-600 text-xl" />
            </div>
            <h3 className="text-lg font-medium mb-2">Medical Bills</h3>
            <p className="text-gray-600 mb-4">Easily upload and share patient medical bills.</p>
            <div className="mt-auto">
              <Button
                icon={<UploadOutlined />}
                className="flex items-center"
                onClick={() => setBillsModalVisible(true)}
              >
                Upload
              </Button>
            </div>
          </div>
        </Card>

        {/* Treatment Status Card */}
        <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex flex-col h-full">
            <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <MedicineBoxOutlined className="text-blue-600 text-xl" />
            </div>
            <h3 className="text-lg font-medium mb-2">Treatment Status</h3>
            <p className="text-gray-600 mb-4">Update and track patient treatment status.</p>
            <div className="mt-auto">
              <Button
                icon={<PlusOutlined />}
                className="flex items-center"
                onClick={() => setTreatmentModalVisible(true)}
              >
                Add details
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Medical Records Modal */}
      <Modal
        title="Medical Records"
        open={recordsModalVisible}
        onCancel={() => setRecordsModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setRecordsModalVisible(false)}>
            Cancel
          </Button>,
          <Button key="upload" type="primary" onClick={handleRecordsSubmit} className="bg-blue-600 hover:bg-blue-700">
            Upload Files
          </Button>,
        ]}
        width={600}
      >
        <p className="text-gray-500 mb-4">Alex smith has requested MRI reports.</p>

        <Dragger {...uploadProps} fileList={recordsFileList} onChange={handleRecordsUpload} className="mb-6">
          <p className="ant-upload-drag-icon">
            <InboxOutlined className="text-blue-500" />
          </p>
          <p className="font-medium">Drop File Here</p>
          <p className="text-gray-500 text-sm">Drag and drop your PNG, JPG, WebP, SVG images here or browse</p>
          <Button type="link" className="text-blue-500 mt-2">
            Browse File
          </Button>
        </Dragger>

        {recordsFileList.length > 0 && (
          <div>
            <h4 className="font-medium mb-3">Files</h4>
            <div className="space-y-2">
              {recordsFileList.map((file) => (
                <div key={file.uid} className="flex items-center justify-between p-2 border rounded">
                  <div className="flex items-center">
                    <FileTextOutlined className="text-red-500 mr-2" />
                    <div>
                      <p className="text-sm font-medium">{file.name}</p>
                      <p className="text-xs text-gray-500">{Math.round(file.size / 1024)} KB • Uploaded</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Modal>

      {/* Medical Bills Modal */}
      <Modal
        title="Medical Bills"
        open={billsModalVisible}
        onCancel={() => setBillsModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setBillsModalVisible(false)}>
            Cancel
          </Button>,
          <Button key="upload" type="primary" onClick={handleBillsSubmit} className="bg-blue-600 hover:bg-blue-700">
            Upload Files
          </Button>,
        ]}
        width={600}
      >
        <p className="text-gray-500 mb-4">Alex smith has requested bills reports.</p>

        <Dragger {...uploadProps} fileList={billsFileList} onChange={handleBillsUpload} className="mb-6">
          <p className="ant-upload-drag-icon">
            <InboxOutlined className="text-blue-500" />
          </p>
          <p className="font-medium">Drop File Here</p>
          <p className="text-gray-500 text-sm">Drag and drop your PNG, JPG, WebP, SVG images here or browse</p>
          <Button type="link" className="text-blue-500 mt-2">
            Browse File
          </Button>
        </Dragger>

        {billsFileList.length > 0 && (
          <div>
            <h4 className="font-medium mb-3">Files</h4>
            <div className="space-y-2">
              {billsFileList.map((file) => (
                <div key={file.uid} className="flex items-center justify-between p-2 border rounded">
                  <div className="flex items-center">
                    <FileTextOutlined className="text-red-500 mr-2" />
                    <div>
                      <p className="text-sm font-medium">{file.name}</p>
                      <p className="text-xs text-gray-500">{Math.round(file.size / 1024)} KB • Uploaded</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Modal>

      {/* Treatment Status Modal */}
      <Modal
        title="Update Treatment Status"
        open={treatmentModalVisible}
        onCancel={() => setTreatmentModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setTreatmentModalVisible(false)}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleTreatmentSubmit} className="bg-blue-600 hover:bg-blue-700">
            Upload Status
          </Button>,
        ]}
        width={600}
      >
        <p className="text-gray-500 mb-4">Alex smith has requested MRI reports.</p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date of last visit</label>
            <DatePicker
              className="w-full"
              format="DD/MM/YYYY"
              onChange={(date) => handleTreatmentChange("lastVisitDate", date)}
              value={treatmentData.lastVisitDate}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">No. of visits left</label>
              <Select
                className="w-full"
                placeholder="Select Option"
                onChange={(value) => handleTreatmentChange("visitsLeft", value)}
                value={treatmentData.visitsLeft}
                options={[
                  { value: 0, label: "0" },
                  { value: 1, label: "1" },
                  { value: 2, label: "2" },
                  { value: 3, label: "3" },
                  { value: 4, label: "4" },
                  { value: 5, label: "5" },
                ]}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">No. of visits completed</label>
              <Select
                className="w-full"
                placeholder="Select Option"
                onChange={(value) => handleTreatmentChange("visitsCompleted", value)}
                value={treatmentData.visitsCompleted}
                options={[
                  { value: 0, label: "0" },
                  { value: 1, label: "1" },
                  { value: 2, label: "2" },
                  { value: 3, label: "3" },
                  { value: 4, label: "4" },
                  { value: 5, label: "5" },
                ]}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description (Optional)</label>
            <TextArea
              rows={4}
              placeholder="Enter your message"
              onChange={(e) => handleTreatmentChange("description", e.target.value)}
              value={treatmentData.description}
            />
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default DoctorCardFileUpload
