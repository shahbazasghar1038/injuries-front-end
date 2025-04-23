import React, { useEffect, useState } from 'react'
import AuthenticatedLayout from '../../layout/AuthenticatedLayout'
import Breadcrumb from './partials/Breadcrumb';
import { Avatar, Button, Input } from 'antd';
import { ArrowRightOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import CaseCard from './partials/CaseCard';
import AddNewCaseForm from './partials/AddNewCaseForm';
import CustomModal from '../../components/ui/CustomModal';
import { createCase, getAllCases } from '../../services/cases';
import { useSelector } from 'react-redux';
const OngoingCases = () => {
  const user = useSelector((state) => state.auth.user); // Add this line to select the user

console.log('user',user)

const userID = 3;

  const breadcrumbLinks = [
    { label: "Home", href: "/" },
    { label: "Ongoing Cases"},
  ];
  const [search, setSearch] = useState("");
   
  
  const [isModalVisible, setIsModalVisible] = useState(false)
  
  const showModal = () => {
    setIsModalVisible(true)
  }
  
  const handleCancel = () => {
    setIsModalVisible(false)
  }
  
  
  const [cases, setCases] = useState([]); // State to store cases
  const [error, setError] = useState(null); // State to store errors
  
  // Fetch all cases when the component mounts
  useEffect(() => {
    fetchAllCases();
  }, []);

  const fetchAllCases = () => {
    getAllCases(userID)
    .then((response) => {
      console.log('resp : ' , response)
      setCases(response);  
    })
    .catch((err) => {
      console.error("Error fetching cases:", err);
      setError("Failed to fetch cases. Please try again later.");
    });
  };
  
  const handleSubmit = (values) => {
    const model = {
      caseData: {
        ...values,
      },
      userId: user?.id || 3,
    };
    
    createCase(model)
      .then((response) => {
        console.log("Case created successfully:", response);
        setIsModalVisible(false);
        fetchAllCases(); // Refresh the list of cases after a successful submission
      })
      .catch((err) => {
        console.error("Error creating case:", err);
        setError("Failed to create case. Please try again.");
      });
    };
    
    
    const filteredCases = cases.filter((c) =>
      c.fullName?.toLowerCase().includes(search.toLowerCase())
    );
    
    
  return (
    <AuthenticatedLayout>
      <div className='lg:flex gap-2 justify-between'>
        <p className='fs-20 fw-600 text-blue-39'>Ongoing Cases</p>
        <Breadcrumb  links={breadcrumbLinks} />
      </div>

 


<div className="p-6 bg-white rounded-xl shadow-sm mt-6  ">
      <div className="lg:flex xl:flex justify-between relative">

        <div className="flex flex-col mb-6">
          <h1 className="fs-16 fw-500 text-blue-39">Cases</h1>
          <p className="fs-14 fw-400 text-blue-85">
            First three cases are free, after that you will have to pay $50 per case.
          </p>
        </div>

        <div className="flex  md:flex-row flex-col justify-between gap-4 mb-8">
        <Input
        placeholder="Search cases..."
        prefix={<SearchOutlined className="text-gray-400" />}
        className=" md:max-w-md mb-4 order-1 md:order-0"
        size="large"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
          <Button type="primary"  onClick={showModal} icon={<PlusOutlined />} size="large" className="order-0 md:order-1 mt-2 md:mt-0 bg-blue-600 hover:bg-[#3641F5]">
            Add New Case
          </Button>
        </div>
      </div>

   
 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-4">
      {filteredCases.map((caseItem) => (
  <CaseCard key={caseItem.id} caseItem={caseItem} />
))}

      </div>
    </div>

    <CustomModal  open={isModalVisible} onClose={handleCancel} borderRadius={24}>

    <AddNewCaseForm visible={isModalVisible} onCancel={handleCancel} onSubmit={handleSubmit} />
    </CustomModal>

    </AuthenticatedLayout>
  )
}

export default OngoingCases