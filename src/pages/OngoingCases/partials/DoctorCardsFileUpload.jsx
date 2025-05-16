import { useState } from "react"
import { Card, Button, Modal, Upload, DatePicker, Select, Input, message } from "antd"
import { UploadOutlined, PlusOutlined, FileTextOutlined, DollarOutlined, MedicineBoxOutlined } from "@ant-design/icons"
import { InboxOutlined } from "@ant-design/icons"
import "antd/dist/reset.css"
import { medicalRecordRequest } from "../../../services/cases"

const { Dragger } = Upload
const { TextArea } = Input

const DoctorCardFileUpload = ({data}) => {
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
          const model = {
            medicalRecord: recordsFileList[0],
          }; 
        medicalRecordRequest(model, data?.id)
          .then((response) => {
            console.log("record sent successfully:", response);
            message.success(
              response?.message || "Record sent successfully"
            );
          })
          .catch((err) => {
            message.error(err.message);
            console.error("Error Record request sent :", err);
          });      

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
        {data?.recordRequest === "Requested" &&
        <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex flex-col h-full">
            <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <FileTextOutlined className="text-blue-600 text-xl" />
            </div>
            <h3 className="fs-20 fw-500 text-blue-39 mb-2">Medical Records</h3>
            <p className="fs-14 fw-400 text-blue-85 mb-5">Easily upload and share patient medical records.</p>
            <div className="mt-auto">
              <button 
                className="flex items-center gap-1 fs-14 fw-500 text-gray-54"
                onClick={() => setRecordsModalVisible(true)}
              >
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00104 1.91797C7.78669 1.91797 7.59334 2.00789 7.45666 2.15207L4.38624 5.22053C4.09326 5.51333 4.0931 5.98821 4.3859 6.28119C4.6787 6.57418 5.15358 6.57433 5.44656 6.28153L7.25104 4.4782L7.25104 10.668C7.25104 11.0822 7.58683 11.418 8.00104 11.418C8.41525 11.418 8.75104 11.0822 8.75104 10.668L8.75104 4.48092L10.5529 6.28155C10.8459 6.57434 11.3208 6.57417 11.6136 6.28118C11.9064 5.98818 11.9062 5.51331 11.6132 5.22052L8.57085 2.18028C8.43329 2.01971 8.22905 1.91797 8.00104 1.91797ZM3.41638 10.668C3.41638 10.2538 3.0806 9.91797 2.66638 9.91797C2.25217 9.91797 1.91638 10.2538 1.91638 10.668V11.8346C1.91638 13.0773 2.92374 14.0846 4.16638 14.0846H11.8336C13.0763 14.0846 14.0836 13.0773 14.0836 11.8346V10.668C14.0836 10.2538 13.7478 9.91797 13.3336 9.91797C12.9194 9.91797 12.5836 10.2538 12.5836 10.668V11.8346C12.5836 12.2488 12.2478 12.5846 11.8336 12.5846H4.16638C3.75217 12.5846 3.41638 12.2488 3.41638 11.8346V10.668Z" fill="#344054"/>
                    </svg>
                </span>
                Upload
              </button>
            </div>
          </div>
        </Card>
        }

        {/* Medical Bills Card */}
                {data?.BillRequest === "Requested" && 
        <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex flex-col h-full">
            <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <DollarOutlined className="text-blue-600 text-xl" />
            </div>
            <h3 className="fs-20 fw-500 text-blue-39 mb-2">Medical Bills</h3>
            <p className="fs-14 fw-400 text-blue-85 mb-5">Easily upload and share patient medical bills.</p>
            <div className="mt-auto">
              <button
                className="flex items-center gap-1 fs-14 fw-500 text-gray-54"
                onClick={() => setBillsModalVisible(true)}
              >
                Upload
              </button>
            </div>
          </div>
        </Card>
}

        {/* Treatment Status Card */}
        <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex flex-col h-full">
            <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <MedicineBoxOutlined className="text-blue-600 text-xl" />
            </div>
            <h3 className="text-lg font-medium mb-2">Treatment Status</h3>
            <p className="text-gray-600 mb-4">Update and track patient treatment status.</p>
            <div className="mt-auto">
              <button
                icon={<PlusOutlined />}
                className="flex items-center gap-1 fs-14 fw-500 text-gray-54"
                onClick={() => setTreatmentModalVisible(true)}
              >
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.25016 4C7.25016 3.58579 7.58595 3.25 8.00016 3.25C8.41437 3.25 8.75016 3.58579 8.75016 4V7.25016H12.0004C12.4147 7.25016 12.7504 7.58595 12.7504 8.00016C12.7504 8.41437 12.4147 8.75016 12.0004 8.75016H8.75016V12.0004C8.75016 12.4147 8.41437 12.7504 8.00016 12.7504C7.58595 12.7504 7.25016 12.4147 7.25016 12.0004V8.75016H4C3.58579 8.75016 3.25 8.41437 3.25 8.00016C3.25 7.58595 3.58579 7.25016 4 7.25016H7.25016V4Z" fill="#344054"/>
</svg>
                </span>
                Add details
              </button>
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
