import { useState } from "react";
import { Form, Input, Select, Button, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { Option } = Select;

const TaskForm = ({caseId, form, initialValues, isEdit = false, onCancel, onSubmit }) => {
  const [fileList, setFileList] = useState([]); // Initialize with an empty file list
console.log('files are :' , fileList)
  // Handle file upload
  const handleFileChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  // Add this new function to convert file to base64
  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      console.log('Validated form values:', values);

      let fileBase64 = null;
      if (fileList.length > 0 && fileList[0].originFileObj) {
        fileBase64 = await convertFileToBase64(fileList[0].originFileObj);
      }

      // Create payload object
      const payload = {
        taskTitle: values.taskTitle,
        status: values.status,
        description: values.description,
        caseId: caseId,
        fileBase64: fileBase64 // This will be null if no file was selected
      };

      onSubmit(payload);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Status options
  const statusOptions = [
    { value: "pending", label: "Pending" },
    { value: "open", label: "Open" },
    { value: "completed", label: "Completed" },
    { value: "cancelled", label: "Cancelled" },
  ];

  return (
    <>
      <div className="pb-7">
        <h6 className="font-600 text-blue-39">Add a new task</h6>
        <p className="fs-14 fw-400 text-blue-85 mt-2">
          Effortlessly manage your to-do list: add a new task.
        </p>
      </div>
      <Form
        form={form}
        layout="vertical"
        initialValues={initialValues}
        className="task-form edit-personal-info-form"
      >
        {/* Task Title */}
        <Form.Item
          name="taskTitle"
          label="Task Title"
          rules={[{ required: true, message: "Please enter task title" }]}
        >
          <Input placeholder="Enter task title" />
        </Form.Item>

        {/* Status */}
        <Form.Item
          name="status"
          label="Status"
          rules={[{ required: true, message: "Please select status" }]}
        >
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
          <label className="block text-[18px] font-medium text-gray-700 mb-2">
            Files
          </label>
          <Upload
  multiple={false}
  fileList={fileList}
  onChange={({ file, fileList }) => {
    // Keep only the latest selected file
    setFileList(fileList.slice(-1));
  }}
  beforeUpload={() => false} // Prevent automatic upload
  listType="picture-card"
>
  {fileList.length >= 1 ? null : (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Add File</div>
    </div>
  )}
</Upload>

        </div>

        {/* Form Actions */}
        <div className="flex justify-between gap-4 mt-6">
          <Button size="large" className="w-full" onClick={onCancel}>
            {isEdit ? "Close" : "Cancel"}
          </Button>
          <Button
            type="primary"
            size="large"
            className="w-full bg-blue-600 hover:bg-blue-700"
            onClick={handleSubmit}
          >
            {isEdit ? "Save Changes" : "Create Task"}
          </Button>
        </div>
      </Form>
    </>
  );
};

export default TaskForm;

