import React, { useState } from 'react'
import AuthenticatedLayout from '../../layout/AuthenticatedLayout'
import Breadcrumb from './partials/Breadcrumb';
import { Avatar, Button, Input } from 'antd';
import { ArrowRightOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import CaseCard from './partials/CaseCard';
import AddNewCaseForm from './partials/AddNewCaseForm';
import CustomModal from '../../components/ui/CustomModal';

const OngoingCases = () => {
  const breadcrumbLinks = [
    { label: "Home", href: "/" },
    { label: "Ongoing Cases"},
  ];
  const [search, setSearch] = useState("");
   
  const cases = [
    {
      id: 1,
      name: "Emerson Workman",
      files: 0,
      accidentDate: "04/01/24",
      startDate: "03/11/25",
      status: "Enrolled",
      statusColor: "text-emerald-600 bg-emerald-50",
    },
    {
      id: 2,
      name: "Flora Berry",
      files: 4,
      accidentDate: "04/01/24",
      startDate: "12/25/24",
      status: "In Progress",
      statusColor: "text-blue-600 bg-blue-50",
    },
    {
      id: 3,
      name: "Robyn Washington",
      files: 4,
      accidentDate: "04/01/24",
      startDate: "01/26/25",
      status: "In Progress",
      statusColor: "text-blue-600 bg-blue-50",
    },
    {
      id: 4,
      name: "Kristina Bush",
      files: 4,
      accidentDate: "04/01/24",
      startDate: "02/15/25",
      status: "In Progress",
      statusColor: "text-blue-600 bg-blue-50",
    },
    {
      id: 5,
      name: "Kristina Bush",
      files: 4,
      accidentDate: "04/01/24",
      startDate: "02/15/25",
      status: "In Progress",
      statusColor: "text-blue-600 bg-blue-50",
    },
  ]

  const filteredCases = cases.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleSubmit = (values) => {
    console.log("Form values:", values)
    setIsModalVisible(false)
    // Here you would typically send the data to your backend
  }
  return (
    <AuthenticatedLayout>
      <div className='lg:flex gap-2 justify-between'>
        <p className='page-heading'>Ongoing Cases</p>
        <Breadcrumb  links={breadcrumbLinks} />
      </div>

 


<div className="p-6 bg-white rounded-xl shadow-sm mt-6  ">
      <div className="lg:flex xl:flex justify-between relative">

        <div className="flex flex-col mb-6">
          <h1 className="text-xl font-semibold text-gray-800">Cases</h1>
          <p className="text-sm text-gray-500">
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
          <Button type="primary"  onClick={showModal} icon={<PlusOutlined />} size="large" className="order-0 md:order-1 mt-2 md:mt-0 bg-blue-600 hover:bg-blue-700">
            Add New Case
          </Button>
        </div>
      </div>

   
 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-4">
        {filteredCases.map((caseItem) => (
         <CaseCard caseItem={caseItem}  />
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