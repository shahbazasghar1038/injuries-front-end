
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
        values.files = fileList
        onSubmit(values)
      })
      .catch((info) => {
        console.log("Validate Failed:", info)
      })
  }

  // Status options
  const statusOptions = [
    { value: "pending", label: "Pending" },
    { value: "in_progress", label: "In Progress" },
    { value: "completed", label: "Completed" },
    { value: "cancelled", label: "Cancelled" },
  ]

  return (
      <>
      <div className="pb-7">
          <h6 className="font-600 text-blue-39">Add a new task</h6>
          <p className="fs-14 fw-400 text-blue-85 mt-2">Effortlessly manage your to-do list: add a new task.</p>
        </div>
    <Form form={form} layout="vertical" initialValues={initialValues} className="task-form">
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
      <div className="mt-20 mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Files</label>
        <div className="flex flex-wrap gap-2">
          {fileList.map((file) => (
            <div key={file.uid} className="flex items-center p-2 border border-gray-200 rounded-md bg-gray-50">
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
            </div>
          ))}

          {!isEdit && (
            <Button type="dashed" className="flex items-center justify-center h-16 w-16" icon={<PlusOutlined />} />
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

