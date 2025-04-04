import React from 'react'
import AuthenticatedLayout from '../../layout/AuthenticatedLayout'
import Breadcrumb from './partials/Breadcrumb';
import { Avatar, Button, Input } from 'antd';
import { ArrowRightOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import CaseCard from './partials/CaseCard';

const OngoingCases = () => {
  const breadcrumbLinks = [
    { label: "Home", href: "/" },
    { label: "Ongoing Cases"},
    // { label: "Case Details" },
  ];
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

        <div className="flex  md:flex-row justify-between gap-4 mb-8">
          <Input
            placeholder="Search cases..."
            prefix={<SearchOutlined className="text-gray-400" />}
            className="max-w-md"
            size="large"
          />
          <Button type="primary" icon={<PlusOutlined />} size="large" className="bg-blue-600 hover:bg-blue-700">
            Add New Case
          </Button>
        </div>
      </div>

   
 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-4">
        {cases.map((caseItem) => (
         <CaseCard caseItem={caseItem}  />
        ))}
      </div>
    </div>

    </AuthenticatedLayout>
  )
}

export default OngoingCases