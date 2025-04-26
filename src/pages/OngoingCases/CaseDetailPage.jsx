import React, { useState, useEffect } from "react";
import { Button, Avatar, Card, Input, Form, Menu, Dropdown, Spin, message } from "antd";
import {
  UserOutlined,
  CheckCircleOutlined,
  CalendarOutlined,
  PlusOutlined,
  MoreOutlined,
  ExclamationCircleOutlined,
  SearchOutlined,
  DeleteOutlined,
  InboxOutlined,
  EditOutlined,
} from "@ant-design/icons";
import AuthenticatedLayout from "../../layout/AuthenticatedLayout";
import Breadcrumb from "./partials/Breadcrumb";
import oldman from "../../assets/icons/oldman.png";
import calender from "../../assets/icons/calender.png";
import flash from "../../assets/icons/bolt.png";
import { Icons } from "../../components/svg/Icons";
import CustomModal from "../../components/ui/CustomModal";
import TaskForm from "./partials/TaskForm";
import SelectMedicalProvidersDemo from "./partials/SelectMedicalProvidersModal";
import ActionModal from "../../components/ui/ActionModal";
import { useNavigate, useParams } from "react-router-dom";
import { addTaskToCase, archiveCase, deleteSingleCase, getSingleCase } from "../../services/cases";
import { formatDate } from "../../helper/formateDate";

const PatientStatusCard = ({ data, index }) => (
  <div
    className={` ${
      index == 3 ? "border-0" : "border-r"
    }  hover:shadow-md transition-shadow px-2`}
    size="small"
  >
    <div className="flex gap-2.5">
      <div className="p-3 rounded-lg bg-[#F2F4F7]">
        <img src={data?.img} alt="" className="h-4" />
      </div>
      <div>
        <p className="text-[#667085] font-normal text-xs">{data?.heading}</p>
        <div className="fs-14 fw-500 text-gray-54 whitespace-nowrap">{data?.name}</div>
      </div>
    </div>
  </div>
);

const CaseDetailPage = () => {
  const { id } = useParams();
    const [messageApi, contextHolder] = message.useMessage();
  const [caseData, setCaseData] = useState(null);
 const navigate = useNavigate()
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getSingleCase(id)
      .then((response) => {
        setCaseData(response);
        console.log('single case data:', response);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        messageApi.error(err);

        setError("Failed to fetch single case data. Please try again later.");
        setLoading(false);
      });
  }, [id]);

  const breadcrumbLinks = [
    { label: "Home", href: "/" },
    { label: "Ongoing Cases", href: "/cases" },
    { label: "Case Details" },
  ];

  const items = [
    {
      id: 1,
      heading: "Patient",
      name: caseData?.case?.fullName,
      img: oldman,
    },
    {
      id: 2,
      heading: "Case Status",
      name: caseData?.case?.status,
      img: flash,
    },
    {
      id: 3,
      heading: "Date of Accident",
      name: formatDate(caseData?.case?.dateOfAccident),
      img: calender,
    },
    {
      id: 4,
      heading: "Case Starting Date",
      name:formatDate(caseData?.case?.caseStartData) || 'Not started yet',
      img: calender,
    },
  ];

  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All Tasks", count: 18 },
    { id: "todo", label: "To do", count: 10 },
    { id: "client", label: "Client Data", count: 8 },
  ];

  const contacts = [
    {
      initials: "KF",
      name: "Kierra Franci",
      phone: "+1 (603) 111-2233",
      bgColor: "#fdf1f9",
      textColor: "#dc2590",
    },
    {
      initials: "?",
      name: "Unknown",
      phone: "+1 (603) 555-0123",
      bgColor: "white",
      textColor: "#344053",
    },
    {
      initials: "CP",
      name: "Chance Philips",
      phone: "+1 (603) 222-3344",
      bgColor: "#fff5ed",
      textColor: "#ec4909",
    },
    {
      initials: "TG",
      name: "Terry Geidt",
      phone: "+1 (603) 333-4455",
      bgColor: "#ebfdf2",
      textColor: "#039754",
    },
    {
      initials: "KF",
      name: "Kierra Frances",
      phone: "+1 (603) 444-5566",
      bgColor: "#fdf1f9",
      textColor: "#dc2590",
    },
    {
      initials: "TJ",
      name: "Terry Jones",
      phone: "+1 (603) 555-6677",
      bgColor: "#ebfdf2",
      textColor: "#039754",
    },
    {
      initials: "MP",
      name: "Michael Philips",
      phone: "+1 (603) 666-7788",
      bgColor: "#fff5ed",
      textColor: "#ec4909",
    },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  // Add state to track deleted questions
  const [deletedQuestions, setDeletedQuestions] = useState({});
  // Add state for delete confirmation modal
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const getContactQuestions = (contact) => {
    if (!contact) return [];

    return [
      {
        id: 1,
        question: "What is your first name?",
        answer: contact.name.split(" ")[0], // Extract first name from full name
        status: "Completed",
      },
      {
        id: 2,
        question: "What is your last name?",
        answer:
          contact.name.split(" ").length > 1
            ? contact.name.split(" ")[1]
            : "N/A", // Extract last name if available
        status: "Pending",
      },
      {
        id: 3,
        question: "What is your phone number?",
        answer: contact.phone,
        status: "Completed",
      },
      {
        id: 4,
        question: "When did the incident occur?",
        answer: `Last ${
          contact.name.length > 5 ? "Thursday" : "Monday"
        } around ${contact.phone.slice(-1)}pm.`, // Just an example of dynamic content
        status: "Pending",
      },
    ];
  };

  // Track which questions are open
  const [openQuestions, setOpenQuestions] = useState({});

  // Get questions for the selected contact
  const currentQuestions = getContactQuestions(selectedContact);

  // Filter out deleted questions
  const filteredQuestions = currentQuestions.filter(
    (question) => !deletedQuestions[`${selectedContact.phone}-${question.id}`]
  );

  const toggleQuestion = (id) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const [isAddModalVisible, setIsAddModalVisible] = useState(false)

  // Form instances
  const [addForm] = Form.useForm()

    // Modal handlers
    const showAddModal = () => {
        setIsAddModalVisible(true)
      }
    
      const handleAddCancel = () => {
        addForm.resetFields()
        setIsAddModalVisible(false)
      }
    
    
      const handleAddSubmit = (values) => {
        const model = {
          taskData: {...values},
          caseId: caseData?.case?.id,
        };
        console.log("Add task values:", model)
        
        addTaskToCase(model)
          .then((response) => {
          message.success(response?.message || "Task created successfully");
          addForm.resetFields()
          setIsAddModalVisible(false)
        })
        .catch((err) => {
            message.error(err?.message || "Task created failed");
            console.error("Error creating task:", err);
            setError("Failed to create task. Please try again.");
          });
        
      }

    //   provider menu 

    const handleMenuClick = (e) => {
      console.log('Clicked menu item:', e.key);
  
      switch (e.key) {
        case 'edit':
          // Handle edit logic
          console.log('Edit profile selected');
          break;
        case 'archive':
          // Handle archive logic
          handleArchiveCase()
          console.log('Move to archive selected');
          break;
        case 'delete':
          // Show action modal instead of CustomModal
          setIsDeleteModalVisible(true);
          break;
        default:
          break;
      }
    };
    
    // Handler for confirming deletion
    const handleConfirmDelete = () => {
      console.log('Confirmed delete action');
      deleteSingleCase(id)
      .then((response) => {
        setIsDeleteModalVisible(false);
        navigate('/ongoing-cases')

        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching case:", err);
        setError("Failed to fetch case data. Please try again later.");
        setLoading(false);
      });
    };



      const handleArchiveCase = () => {
    
        const model = {
          reason: 'Case is completed',
          caseId: caseData?.case?.id,
        };
        
        archiveCase(model)
          .then((response) => {
            console.log("Case archived successfully:", response);
          message.success(response?.message || "Case archived successfully");
          navigate('/ongoing-cases')
          })
          .catch((err) => {
        messageApi.error(err);

            console.error("Error archive case:", err);
          });
      }
    
    // Handler for canceling deletion
    const handleCancelDelete = () => {
      setIsDeleteModalVisible(false);
    };
    
    const menu = (
        <Menu
          className="rounded-2xl shadow-xl p-6 bg-white w-44 gap-8"
          onClick={handleMenuClick}
        >
          <Menu.Item
            key="edit"
            className="flex items-center gap-5 text-[#344054] hover:bg-gray-100 rounded-lg px-3 py-2"
          >
            <EditOutlined className="text-xl text-[#667085]" />
            <span className="fs-14 fw-500 text-gray-54 font-outfit ml-3">Edit profile</span>
          </Menu.Item>
    
          <Menu.Item
            key="archive"
            className="flex items-center gap-3 text-gray-800 hover:bg-gray-100 rounded-lg px-3 py-4"
          >
            <InboxOutlined className="text-xl" />
            <span className="fs-14 fw-500 text-gray-54 font-outfit ml-3">Move to archive</span>
          </Menu.Item>
    
          <Menu.Item
            key="delete"
            className="delete-provider flex items-center gap-3 text-red-500 hover:bg-red-100 rounded-lg px-3 py-2"
          >
            <DeleteOutlined className="text-xl text-[#D92D20]" />
            <span className="fs-14 fw-500 ml-3 font-outfit text-[#D92D20]">Delete</span>
          </Menu.Item>
        </Menu>
      );

  // Add state for action modal
  const [isActionModalVisible, setIsActionModalVisible] = useState(false);

  return (
    <AuthenticatedLayout>
      <div className="lg:flex gap-2 justify-between">
        <p className="page-heading text-blue-39">Case Dashboard</p>
        <Breadcrumb links={breadcrumbLinks} />
      </div>

      {loading ? (
        <Spin size="large" />
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="mt-6">
          <div className="relative mb-6">
            <div className="border border-yellow-300 bg-yellow-50 rounded-lg px-8 py-4 mb-6 w-fit">
              <div className="flex items-center gap-2">
                <ExclamationCircleOutlined className="text-yellow-500" />
                <span className="font-medium text-gray-800">
                  Treatment Status
                </span>
              </div>
              <p className="text-sm text-gray-500 ml-6">Treatment status</p>
            </div>
          </div>

          <div className="flex justify-between items-center mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 border rounded-xl  max-w-[760px]">
              {items?.map((data, index) => (
                <PatientStatusCard data={data} index={index} />
              ))}
            </div>

            <div className="flex gap-2">
              <SelectMedicalProvidersDemo caseID={caseData?.case?.id} />

              <Dropdown overlay={menu} trigger={['click']}>
                <Button
                  type="text"
                  icon={<MoreOutlined />}
                  className="flex items-center justify-center"
                />
              </Dropdown>
            </div>
          </div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-gray-800">
              Medical Providers
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center py-12 text-center">
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              No doctors added yet?
            </h3>
            <p className="text-gray-500">
              The doctors will appear once they are added to the case.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm mt-6  ">
            <div className="lg:flex xl:flex justify-between relative items-center p-6">
              <div className="relative bg-gray-100 p-1 rounded-lg">
                <div className="flex space-x-4">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      className={`px-4 py-2 rounded-lg text-sm flex items-center space-x-2 transition-colors ${
                        activeTab === tab.id
                          ? "text-gray-900 font-medium bg-white"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      <span>{tab.label}</span>
                      <span
                        className={`inline-flex items-center justify-center h-6 min-w-6 px-1.5 rounded-full text-xs ${
                          activeTab === tab.id
                            ? "bg-blue-100 text-blue-600"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {tab.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex  md:flex-row justify-between gap-4">
                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  size="large"
                  onClick={showAddModal}
                  className="bg-blue-600 hover:bg-blue-700 h-11"
                >
                  Add New Task
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between relative  w-full   p-6 border-t">
              <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-text-md-medium font-[number:var(--text-md-medium-font-weight)] text-[#1d2838] text-[length:var(--text-md-medium-font-size)] tracking-[var(--text-md-medium-letter-spacing)] leading-[var(--text-md-medium-line-height)] whitespace-nowrap [font-style:var(--text-md-medium-font-style)]">
                  To do{" "}
                  <span
                    className={`inline-flex items-center justify-center h-6 min-w-6 px-1.5 rounded-full text-xs ${"bg-gray-200 text-gray-600"}`}
                  >
                    10
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between relative gap-x-4">
                <div className="flex p-2.5  w-full bg-white rounded-lg items-center justify-center gap-2 relative overflow-hidden border-0 border-none">
                  <img
                    className="absolute w-[15px] h-[15px] top-[3px] left-[3px]"
                    alt="Icon"
                    src="https://c.animaapp.com/m8ta5gibWvtvPM/img/icon-14.svg"
                  />
                </div>

                <Button
                  type="primary"
                  size="large"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Send Link
                </Button>
              </div>
            </div>
            <div className="flex flex-col h-fit items-start gap-3 p-6 relative self-stretch w-full bg-white overflow-hidden overflow-y-scroll">
              {filteredQuestions.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-5 p-5 w-full relative bg-white rounded-xl border border-solid border-[#e4e7ec] shadow-shadows-shadow-sm"
                >
                  <div className="flex items-center gap-4 relative flex-1 grow">
                    <div className="items-start gap-3 flex-1 grow flex relative">
                      <div
                        className={`cursor-pointer ${
                          openQuestions[item.id] ? "hidden" : ""
                        }`}
                        onClick={() => toggleQuestion(item.id)}
                      >
                        <Icons.QuestionIconRIght />
                      </div>
                      <div
                        className={`cursor-pointer ${
                          openQuestions[item.id] ? "" : "hidden"
                        }`}
                        onClick={() => toggleQuestion(item.id)}
                      >
                        <Icons.QuestionDropDown />
                      </div>
                      <div className="flex flex-col items-start justify-center gap-1 relative flex-1 grow">
                        <div className="items-center gap-2.5 self-stretch w-full flex-[0_0_auto] flex relative">
                          <p
                            className="text-question cursor-pointer relative w-fit "
                            onClick={() => toggleQuestion(item.id)}
                          >
                            {item.question}
                          </p>
                        </div>

                        <div
                          className={`dropdown-content items-center justify-center gap-2.5 self-stretch w-full flex-[0_0_auto] flex relative ${
                            openQuestions[item.id] ? "animate-slideDown" : "hidden"
                          }`}
                        >
                          <p className="relative flex-1 text">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`inline-flex items-center justify-center px-2 py-0.5 relative flex-[0_0_auto] rounded-[999px] ${
                      item.status === "Completed" ? "bg-[#ECFDF3]" : "bg-[#FFFAEB]"
                    }`}
                  >
                    <div
                      className={`relative w-fit status-tag ${
                        item.status === "Completed"
                          ? "text-[#039855]"
                          : "text-[#B54708]"
                      }`}
                    >
                      {item.status}
                    </div>
                  </div>

                  <div className="relative w-6 h-6 cursor-pointer">
                    <Icons.EditIcon />
                  </div>

                  <div
                    className="relative w-6 h-6 cursor-pointer"
                    onClick={() => handleDeleteQuestion(item.id)}
                  >
                    <Icons.DelBoxIcon />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <CustomModal
        open={isAddModalVisible}
        onClose={handleAddCancel}>
        <TaskForm form={addForm} onCancel={handleAddCancel} onSubmit={handleAddSubmit} isEdit={false} />
      </CustomModal>

      <ActionModal
        open={isDeleteModalVisible}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        title="Are you sure you want to delete this case?"
        description="This action will permanently remove the case and all associated data. This cannot be undone. Please confirm that you want to proceed."
        cancelText="Cancel"
        confirmText="Delete"
        confirmButtonProps={{ danger: true }}
      />
    </AuthenticatedLayout>
  );
};

export default CaseDetailPage;
