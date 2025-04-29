import React, { useEffect, useState } from 'react'
import AuthenticatedLayout from '../../layout/AuthenticatedLayout'
import { Button, Form, Input, Table } from 'antd'
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import CustomModal from '../../components/ui/CustomModal';
import AddNewCaseForm from '../OngoingCases/partials/AddNewCaseForm';
import AddNewProviderForm from './partials/AddNewProviderForm';
import Breadcrumb from '../../components/ui/Breadcrumb'
import { getAllProvider, inviteNewDoctor } from '../../services/cases';


const ProviderPage = () => {
  const [form] = Form.useForm()
    const breadcrumbLinks = [
        { label: "Home", href: "/" },
        { label: "Providers"},
      ];

      const [isModalVisible, setIsModalVisible] = useState(false)

      const showModal = () => {
        setIsModalVisible(true)
      }
    
      const handleCancel = () => {
        setIsModalVisible(false)
      }
    
      const handleSubmit = (values) => {
        console.log("Form values:", values)
        
    
        inviteNewDoctor(values)
        .then((response) => {
          message.success(response?.message || "Task created successfully");
          addForm.resetFields()
          setIsModalVisible(false) 
        })
        .catch((err) => {
            message.error(err?.message || "Task created failed");
            console.error("Error creating task:", err);
            setError("Failed to create task. Please try again.");
          });


      }

      // const providersData = [
      //   {
      //     key: "1",
      //     name: "Alex Smith",
      //     speciality: "Neurologist",
      //     address: "591 Memorial Dr, Chicago MA 10320",
      //     contact: "+1 (094) 724-3099",
      //     email: "smith@medicalworks.com",
      //     availability: "Available",
      //   },
      //   {
      //     key: "2",
      //     name: "Alex Smith",
      //     speciality: "Neurologist",
      //     address: "55 Brooksby Village Way, Danvers MA...",
      //     contact: "+1 (509) 472-4309",
      //     email: "smith@medicalworks.com",
      //     availability: "Available",
      //   },
      //   {
      //     key: "3",
      //     name: "Tomas Carroll",
      //     speciality: "Orthopedic Surgeon",
      //     address: "233 5th Ave Ext, Johnstown NY 12...",
      //     contact: "+1 (705) 024-0800",
      //     email: "tyrone_ortega@yahoo.com",
      //     availability: "Available",
      //   },
      //   {
      //     key: "4",
      //     name: "Daisy Acosta",
      //     speciality: "Pediatrician",
      //     address: "200 Otis Street, Northborough MA...",
      //     contact: "+1 (276) 763-4443",
      //     email: "willie_mason@outlook.com",
      //     availability: "Available",
      //   },
      //   {
      //     key: "5",
      //     name: "Jamie Owens",
      //     speciality: "Neurologist",
      //     address: "72 Main St, North Reading MA 1864",
      //     contact: "+1 (670) 629-7944",
      //     email: "ana_larson@icloud.com",
      //     availability: "Available",
      //   },
      //   {
      //     key: "6",
      //     name: "Jake Paul",
      //     speciality: "Orthopedic Surgeon",
      //     address: "55 Brooksby Village Way, Danvers MA...",
      //     contact: "+1 (688) 481-3328",
      //     email: "jake-paul@medical.com",
      //     availability: "Available",
      //   },
      //   {
      //     key: "7",
      //     name: "Michelle Rivera",
      //     speciality: "Orthopedic Surgeon",
      //     address: "2972 Westheimer Rd, Santa Ana, Ill...",
      //     contact: "+1 (219) 555-0114",
      //     email: "michelle.rivera@example.com",
      //     availability: "Available",
      //   },
      //   {
      //     key: "8",
      //     name: "Jessica Hanson",
      //     speciality: "Orthopedic Surgeon",
      //     address: "2972 Westheimer Rd, Santa Ana, Ill...",
      //     contact: "+1 (688) 481-3328",
      //     email: "jessica.hanson@example.com",
      //     availability: "Available",
      //   },
      //   {
      //     key: "9",
      //     name: "Deanna Curtis",
      //     speciality: "Neurologist",
      //     address: "2464 Royal Ln, Mesa, New Jersey...",
      //     contact: "+1 (603) 555-0123",
      //     email: "deanna.curtis@example.com",
      //     availability: "Available",
      //   },
      //   {
      //     key: "10",
      //     name: "Nevaeh Simmons",
      //     speciality: "Pediatrician",
      //     address: "3517 W. Gray St, Utica, Pennsylvan...",
      //     contact: "+1 (229) 555-0109",
      //     email: "nevaeh.simmons@example.com",
      //     availability: "Available",
      //   },
      // ]

        const [providersData, setProvidersData] = useState([]); // State to store cases
          const [error, setError] = useState(null); // State to store errors
          
          // Fetch all cases when the component mounts
          useEffect(() => {
            fetchAllProviders();
          }, []);
        
          const fetchAllProviders = () => {
            getAllProvider()
            .then((response) => {
              console.log('resp :', response);
            
              const formattedProviders = response.map((item) => ({
                id: item.id?.toString() || "", // making sure id is string
                name: item.fullName || "",      // mapping fullName to name
                speciality: item.speciality || "", 
                address: item.address || "",    
                contact: item.phone || "",      
                email: item.email || "",        
                availability: item.availability || "Available", // default to Available
              }));
            
              setProvidersData(formattedProviders);
            })
            
            .catch((err) => {
              console.error("Error fetching cases:", err);
              setError("Failed to fetch cases. Please try again later.");
            });
          };
  const [searchText, setSearchText] = useState("")

      
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
          Available on  
          InjurySynx
        </div>
      ),
      dataIndex: "availability",
      key: "availability",
      width: 120,
      render: (text) => (
        <div className="text-right">
          <span className="text-green-600 font-semibold px-2 py-0.5 rounded-full bg-green-100">{text}</span>
        </div>
      ),
    },
  ]


  return (
    <AuthenticatedLayout>
    <div className='lg:flex gap-2 justify-between'>
      <p className='fs-20 fw-600 text-blue-39'>Providers</p>
      <Breadcrumb  links={breadcrumbLinks} />
    </div>



    <div className=" bg-white rounded-xl shadow-sm mt-6  ">
      <div className=" p-3 lg:p-6 lg:flex xl:flex justify-between items-center relative">

        <div className="flex flex-col mb-">
          <h1 className="text-xl font-semibold text-gray-800">Medical Providers</h1>
        </div>

        <div className="flex  md:flex-row flex-col justify-between gap-4 mb-">
        <Input
        placeholder="Search providers..."
        prefix={<SearchOutlined className="text-gray-400" />}
        className=" md:max-w-md mb-4 order-1 md:order-0"
        size="large"
        value={searchText}
            onChange={handleSearch}
            allowClear
      />
          <Button type="primary"  onClick={showModal} icon={<PlusOutlined />} size="large" className="order-0 md:order-1 mt-2 md:mt-0 bg-blue-600 hover:bg-blue-700">
          Add medical provider
          </Button>
        </div>
      </div>

   
      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={false}
        scroll={{ y: 400 }}
        size="small"
        className="providers-table"
      />
  
    </div>


    <CustomModal  open={isModalVisible} onClose={handleCancel} borderRadius={24}>

<AddNewProviderForm form={form} visible={isModalVisible} onCancel={handleCancel} onSubmit={handleSubmit} />
</CustomModal>
    </AuthenticatedLayout>
  )
}

export default ProviderPage