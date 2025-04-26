
import { useState } from "react"
import { Form, Input, Select, Button } from "antd"
import { PlusOutlined, FilePdfOutlined, GoogleOutlined } from "@ant-design/icons"

const { TextArea } = Input
const { Option } = Select

const TaskForm = ({ form, initialValues, isEdit = false, onCancel, onSubmit }) => {
  // Mock files for demonstration
  const [fileList, setFileList] = useState([
    {
      uid: "1",
      name: "Guidelines.pdf",
      status: "done",
      type: "application/pdf",
      icon: <FilePdfOutlined />,
      format: "PDF",
    },
    {
      uid: "2",
      name: "Branding Assets",
      status: "done",
      type: "media",
      icon: <GoogleOutlined />,
      format: "Media",
    },
  ])

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        // Add files to the form values
        // values.files = fileList
        values.files = 'file name List'
        onSubmit(values)
      })
      .catch((info) => {
        console.log("Validate Failed:", info)
      })
  }

  // Status options
  const statusOptions = [
    { value: "pending", label: "Pending" },
    { value: "open", label: "Open" },
    { value: "completed", label: "Completed" },
    { value: "cancelled", label: "Cancelled" },
  ]

  return (
      <>
      <div className="pb-7">
          <h6 className="font-600 text-blue-39">Add a new task</h6>
          <p className="fs-14 fw-400 text-blue-85 mt-2">Effortlessly manage your to-do list: add a new task.</p>
        </div>
    <Form form={form} layout="vertical" initialValues={initialValues} className="task-form edit-personal-info-form">
      {/* Task Title */}
      <Form.Item name="taskTitle" label="Task Title" rules={[{ required: false, message: "Please enter task title" }]}>
        <Input placeholder="Enter task title" />
      </Form.Item>

      {/* Status */}
      <Form.Item name="status" label="Status" rules={[{ required: false, message: "Please select status" }]}>
        <Select placeholder="Select status">
          {statusOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </Form.Item>

      {/* Description */}
      <Form.Item name="description" label="Description">
        <TextArea placeholder="Enter task description" rows={4} />
      </Form.Item>

      {/* Files */}
      <div className="mt-6 mb-6 bg-[#F9FAFB] border border-[#F2F4F7] rounded-lg p-4">
        <label className="block text-[18px] font-medium text-gray-700 mb-2">Files</label>
        <div className="flex flex-wrap gap-2">
          {fileList.map((file) => (
            <div key={file.uid} className="group relative flex items-center p-2 border border-gray-200 rounded-xl bg-gray-50">
              <div className="mr-2">{file.icon}</div>
              <div className="flex flex-col">
                <span className="text-xs font-medium">{file.name}</span>
                <div className="flex items-center text-xs text-gray-500">
                  <span>{file.format}</span>
                  <span className="mx-1">•</span>
                  <a href="#" className="text-gray-500 hover:text-gray-700">
                    Download
                  </a>
                </div>
              </div>
              <svg className="absolute group-hover:block hidden cursor-pointer -top-2 -right-2" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 1C15.2467 1 19.5 5.2533 19.5 10.5C19.5 15.7467 15.2467 20 10 20C4.7533 20 0.5 15.7467 0.5 10.5C0.5 5.2533 4.7533 1 10 1Z" fill="white"/>
<path d="M10 1C15.2467 1 19.5 5.2533 19.5 10.5C19.5 15.7467 15.2467 20 10 20C4.7533 20 0.5 15.7467 0.5 10.5C0.5 5.2533 4.7533 1 10 1Z" stroke="#E4E7EC"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.02145 12.7706C6.82618 12.9659 6.82618 13.2825 7.02145 13.4778C7.21671 13.673 7.53329 13.673 7.72855 13.4778L9.99935 11.207L12.2704 13.478C12.4657 13.6733 12.7822 13.6733 12.9775 13.478C13.1728 13.2828 13.1728 12.9662 12.9775 12.7709L10.7065 10.4999L12.9775 8.2288C13.1728 8.03354 13.1728 7.71695 12.9775 7.52169C12.7822 7.32643 12.4657 7.32643 12.2704 7.52169L9.99935 9.79275L7.72855 7.52195C7.53329 7.32669 7.21671 7.32669 7.02145 7.52195C6.82618 7.71721 6.82618 8.03379 7.02145 8.22906L9.29224 10.4999L7.02145 12.7706Z" fill="#98A2B3"/>
</svg>

            </div>
          ))}

{!isEdit && (
  <Button
    type="dashed"
    className="!p-0 flex items-center justify-center !h-16 !w-16 rounded-xl"
    icon={<PlusOutlined className="text-xs" />}
  />
)}

        </div>
      </div>

      {/* Form Actions */}
      <div className="flex justify-between gap-4 mt-6">
        <Button size="large" className="w-full" onClick={onCancel}>
          {isEdit ? "Close" : "Cancel"}
        </Button>
        <Button type="primary" size="large" className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleSubmit}>
          {isEdit ? "Save Changes" : "Create Task"}
        </Button>
      </div>
    </Form>
    </>
  )
}

export default TaskForm

