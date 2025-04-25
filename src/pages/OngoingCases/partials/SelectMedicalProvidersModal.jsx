import { useEffect, useState } from "react"
import { Modal, Input, Button, Table, message } from "antd"
import { PlusOutlined, SearchOutlined } from "@ant-design/icons"
import { addDoctorToCase, getAllProvider } from "../../../services/cases"

const SelectMedicalProvidersModal = ({ visible, onCancel, onSendInvite }) => {
  // State for selected providers
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [searchText, setSearchText] = useState("")

  // Sample data for medical providers
  const allProviders  = [
    {
      id: 1,
      name: "Alex Smith",
      speciality: "Neurologist",
      address: "591 Memorial Dr, Chicago MA 10320",
      contact: "+1 (094) 724-3099",
      email: "smith@medicalworks.com",
      availability: "Available",
    },
    {
      id: 2,
      name: "Alex Smith",
      speciality: "Neurologist",
      address: "55 Brooksby Village Way, Danvers MA...",
      contact: "+1 (509) 472-4309",
      email: "smith@medicalworks.com",
      availability: "Available",
    },
    {
      id: 3,
      name: "Tomas Carroll",
      speciality: "Orthopedic Surgeon",
      address: "233 5th Ave Ext, Johnstown NY 12...",
      contact: "+1 (705) 024-0800",
      email: "tyrone_ortega@yahoo.com",
      availability: "Available",
    },
    {
      id: 4,
      name: "Daisy Acosta",
      speciality: "Pediatrician",
      address: "200 Otis Street, Northborough MA...",
      contact: "+1 (276) 763-4443",
      email: "willie_mason@outlook.com",
      availability: "Available",
    },
    {
      id: 5,
      name: "Jamie Owens",
      speciality: "Neurologist",
      address: "72 Main St, North Reading MA 1864",
      contact: "+1 (670) 629-7944",
      email: "ana_larson@icloud.com",
      availability: "Available",
    },
    {
      id: 6,
      name: "Jake Paul",
      speciality: "Orthopedic Surgeon",
      address: "55 Brooksby Village Way, Danvers MA...",
      contact: "+1 (688) 481-3328",
      email: "jake-paul@medical.com",
      availability: "Available",
    },
    {
      id: 7,
      name: "Michelle Rivera",
      speciality: "Orthopedic Surgeon",
      address: "2972 Westheimer Rd, Santa Ana, Ill...",
      contact: "+1 (219) 555-0114",
      email: "michelle.rivera@example.com",
      availability: "Available",
    },
    {
      id: 8,
      name: "Jessica Hanson",
      speciality: "Orthopedic Surgeon",
      address: "2972 Westheimer Rd, Santa Ana, Ill...",
      contact: "+1 (688) 481-3328",
      email: "jessica.hanson@example.com",
      availability: "Available",
    }
  ]

    const [providersData, setProvidersData] = useState([]); // State to store cases
    const [error, setError] = useState(null); // State to store errors
    
    // Fetch all cases when the component mounts
    useEffect(() => {
      fetchAllProviders();
    }, []);
  
    const fetchAllProviders = () => {
      getAllProvider()
      .then((response) => {
        console.log('resp : ' , response)
        setProvidersData(response);  
      })
      .catch((err) => {
        console.error("Error fetching cases:", err);
        setError("Failed to fetch cases. Please try again later.");
      });
    };


  // Handle row selection change
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }

  // Row selection configuration
  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys) => {
      const keysAsNumbers = newSelectedRowKeys.map(Number);
      setSelectedRowKeys(keysAsNumbers);
    },    
    columnWidth: 60,
  }

  // Handle search input change
  const handleSearch = (e) => {
    setSearchText(e.target.value)
  }

  // Filter data based on search text
  const filteredData = searchText
    ? providersData.filter(
        (item) =>
          item.name.toLowerCase().includes(searchText.toLowerCase()) ||
          item.speciality.toLowerCase().includes(searchText.toLowerCase()) ||
          item.email.toLowerCase().includes(searchText.toLowerCase()),
      )
    : providersData

  // Table columns
  const columns = [
    {
      title: "Provider Name",
      dataIndex: "name",
      key: "name",
      width: 150,
    },
    {
      title: "Speciality",
      dataIndex: "speciality",
      key: "speciality",
      width: 150,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: 200,
    },
    {
      title: "Contact #",
      dataIndex: "contact",
      key: "contact",
      width: 150,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 200,
    },
    {
      title: (
        <div className="text-right">
          Available on <br />
          InjurySynx
        </div>
      ),
      dataIndex: "availability",
      key: "availability",
      width: 120,
      render: (text) => (
        <div className="text-right">
          <span className="text-green-500">{text}</span>
        </div>
      ),
    },
  ]

  // Handle send invite
  const handleSendInvite = () => {
    // Ensure selectedRowKeys contains only valid IDs
    const selectedProviders = providersData.filter((item) =>
      selectedRowKeys.includes(item.id)
    );

    if (selectedProviders.length === 0) {
      console.error("No providers selected.");
      return;
    }

    console.log("Selected Providers:", selectedProviders);
    onSendInvite(selectedProviders);
  };

  return (
    <Modal
      open={visible}
      onCancel={onCancel}
      footer={null}
      width={900}
      title={<div className="text-lg font-medium">Select Medical Providers</div>}
      bodyStyle={{ padding: "16px" }}
    >
      <div className="flex justify-between mb-4">
        <div className="w-1/2">
          <Input
            placeholder="Search providers..."
            prefix={<SearchOutlined className="text-gray-400" />}
            value={searchText}
            onChange={handleSearch}
            className="w-full"
            allowClear
          />
        </div>
        <Button
          type="primary"
          className="bg-blue-600 hover:bg-blue-700"
          onClick={handleSendInvite}
          disabled={selectedRowKeys.length === 0}
        >
          Send Invite
        </Button>
      </div>

      <Table
      rowKey="id"
        rowSelection={rowSelection}
        columns={columns}
        dataSource={filteredData}
        pagination={false}
        scroll={{ y: 400 }}
        size="small"
        className="providers-table"
      />
    </Modal>
  )
}

// Demo component to show the modal
const SelectMedicalProvidersDemo = ({caseID}) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleSendInvite = (selectedProviders) => {
    const selectedProviderIDs = selectedProviders.map(provider => provider.id);

    const model = {
      doctorIds: selectedProviderIDs,
      caseId: caseID || 3,
    };
    
    addDoctorToCase(model)
      .then((response) => {
        console.log("Case created successfully:", response);
        setIsModalVisible(false)
      message.success(response?.message || "Case created successfully");

      })
      .catch((err) => {
        console.error("Error creating case:", err);
        setError("Failed to create case. Please try again.");
      });
  }

  return (
    <div>
      <Button
        onClick={showModal}
        type="primary"
        icon={<PlusOutlined />}
        className="bg-blue-600 hover:bg-blue-700"
      >
        Add Provider
      </Button>

      <SelectMedicalProvidersModal visible={isModalVisible} onCancel={handleCancel} onSendInvite={handleSendInvite} />
    </div>
  )
}

export default SelectMedicalProvidersDemo

