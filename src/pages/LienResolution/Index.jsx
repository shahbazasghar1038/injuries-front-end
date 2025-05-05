import React, { useEffect, useState } from 'react'
import AuthenticatedLayout from '../../layout/AuthenticatedLayout'
import Breadcrumb from '../../components/ui/Breadcrumb'
import { Avatar, Button, Input } from 'antd';
import { ArrowRightOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import CaseCard from './partials/CaseCard';
import CustomModal from '../../components/ui/CustomModal';
import AddNewCaseForm from './partials/AddNewCaseForm';
import { useSelector } from 'react-redux';


const LienResolution = () => {
  const user = useSelector((state) => state.auth.user); // Add this line to select the user

    const breadcrumbLinks = [
        { label: "Home", href: "/" },
        { label: "Lien Resolution"},
      ];

  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  const cases = [
    {
      id: 1,
      name: "Emerson Workman",
      files: 0,
      accidentDate: "04/01/24",
      startDate: "03/11/25",
      status: "Enrolled",
      statusColor: "success-color success-color-bg",
    },
    {
      id: 2,
      name: "Flora Berry",
      files: 4,
      accidentDate: "04/01/24",
      startDate: "12/25/24",
      status: "In Progress",
      statusColor: "text-primary bg-primary-color-bg",
    },
    {
      id: 3,
      name: "Robyn Washington",
      files: 4,
      accidentDate: "04/01/24",
      startDate: "01/26/25",
      status: "In Progress",
      statusColor: "text-primary bg-primary-color-bg",
    },
    {
      id: 4,
      name: "Kristina Bush",
      files: 4,
      accidentDate: "04/01/24",
      startDate: "02/15/25",
      status: "In Progress",
      statusColor: "text-primary bg-primary-color-bg",
    },
    {
      id: 5,
      name: "Kristina Bush",
      files: 4,
      accidentDate: "04/01/24",
      startDate: "02/15/25",
      status: "In Progress",
      statusColor: "text-primary bg-primary-color-bg",
    },
  ]
 
  const filteredCases = cases.filter((c) =>
    c.name?.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <AuthenticatedLayout>
      <div className='lg:flex gap-2 justify-between'>
        <p className='fs-20 fw-600 text-blue-39'>Lien Resolution</p>
        <Breadcrumb  links={breadcrumbLinks} />
      </div>

 


<div className="p-6 bg-white rounded-xl shadow-sm mt-6  ">
      <div className="lg:flex xl:flex justify-between items-center relative mb-3">

        <div className="flex flex-col w-full">
          <h1 className="fs-16 fw-500 text-blue-39">Cases</h1>
        </div>

        <div className="flex  md:flex-row flex-col justify-end gap-4 w-full">
        <Input
        placeholder="Search by Name, Speciality or Address"
        prefix={<SearchOutlined className="text-gray-400" />}
        className=" md:max-w-sm order-1 md:order-0"
        size="large"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
        </div>
      </div>
        <hr />

   
 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-4 mt-6">
        {filteredCases.map((caseItem) => (
         <CaseCard key={caseItem.id} caseItem={caseItem}  />
        ))}
      </div>
      {error && <div className="text-red-500 mt-4">{error}</div>}
    </div>

  

    </AuthenticatedLayout>

  )
}

export default LienResolution