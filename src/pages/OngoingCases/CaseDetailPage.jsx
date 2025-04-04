import React from "react";
import { Button, Avatar, Card } from "antd";
import {
  UserOutlined,
  CheckCircleOutlined,
  CalendarOutlined,
  PlusOutlined,
  MoreOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import AuthenticatedLayout from "../../layout/AuthenticatedLayout";
import Breadcrumb from "./partials/Breadcrumb";
import oldman from "../../assets/icons/oldman.png";
import calender from "../../assets/icons/calender.png";
import flash from "../../assets/icons/bolt.png";


const PatientStatusCard = ({data , index}) => (
    <div className={` ${index==3 ? 'border-0' : 'border-r'}  hover:shadow-md transition-shadow px-2`} size="small">
      <div className="flex gap-2.5">
        <div className="p-3 rounded-lg bg-[#F2F4F7]">
          <img src={data?.img} alt="" className="h-4" />
        </div>
        <div>
          <p className="text-[#667085] font-normal text-xs">{data?.heading}</p>
          <div className="font-medium text-xs">{data?.name}</div>
        </div>
      </div>
    </div>
  );
  

const CaseDetailPage = () => {
  const breadcrumbLinks = [
    { label: "Home", href: "/" },
    { label: "Ongoing Cases", href: "/cases" },
    { label: "Case Details" },
  ];

  const items = [
    {
      id: 1,
      heading: "Patient",
      name: "Emerson Workman",
      img: oldman,
    },
    {
      id: 2,
      heading: "Case Status",
      name: "Enrolled",
      img: flash,
    },
    {
      id: 3,
      heading: "Date of Accident",
      name: "04/01/24",
      img: calender,
    },
    {
      id: 4,
      heading: "Case Starting Date",
      name: "04/01/24",
      img: calender,
    },
  ];

  return (
    <AuthenticatedLayout>
      <div className="lg:flex gap-2 justify-between">
        <p className="page-heading">Case Dashboard</p>
        <Breadcrumb links={breadcrumbLinks} />
      </div>

      <div className="mt-6">
        {/* Header with avatar */}
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

        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 border rounded-xl  max-w-[760px]">
         {items?.map((data , index)=>(
             <PatientStatusCard data={data} index={index} />
            ))}       
        </div>

          <div className="flex gap-2">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Add Provider
            </Button>
            <Button
              type="text"
              icon={<MoreOutlined />}
              className="flex items-center justify-center"
            />
          </div>
            </div>
        {/* Action buttons */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium text-gray-800">
            Medical Providers
          </h2>
        </div>

        {/* Empty state */}
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            No doctors added yet?
          </h3>
          <p className="text-gray-500">
            The doctors will appear once they are added to the case.
          </p>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default CaseDetailPage;
