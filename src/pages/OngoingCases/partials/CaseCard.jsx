import React from 'react'
import { Avatar, Button, Input } from 'antd';
import { ArrowRightOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { formatDate } from '../../../helper/formateDate';

const CaseCard = ({caseItem, isDoctor}) => {
  const getRandomColor = () => {
    const colors = ["#FF5733", "#33B5FF", "#FFC300", "#9B59B6", "#2ECC71", "#FF33A6", "#F39C12"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getStatusStyles = (status) => {
    switch (status?.toLowerCase()) {
      case 'in progress':
        return { background: '#ECF3FF', color: '#465FFF' };
      case 'enrolled':
        return { background: '#F2F4F7', color: '#344054' };
      case 'pending':
        return { background: '#FFFAEB', color: '#DC6803' };
      default:
        return { background: '#F2F4F7', color: '#344054' }; // default style
    }
  };

  console.log('caseItem', caseItem)
  return (
    <div
    key={caseItem.id}
    className="border border-gray-200 rounded-xl p-2 hover:shadow-md transition-shadow relative"
  > 

<div className='rounded-xl bg-[#F9FAFB] p-4 '>
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-1">
     {isDoctor &&
     <div
  style={{
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: getRandomColor(),
  }}
></div>}
      <h2 className="fs-20 fw-700 text-blue-39 mb-0"> {caseItem.fullName}</h2>

      </div>

     <Link to={`/cases-detail/${caseItem?.id}`} className='rounded-lg bg-[#fff] w-8 h-8 flex justify-center items-center'> <ArrowRightOutlined className="text-gray-400" /></Link>

    </div>

    <div className="space-y-3 text-sm">
      <div className="flex">
        <span className="fs-14 fw-400 text-blue-85 w-32">No of files:</span>
        <span className="fs-14 fw-500 text-gray-54">{caseItem.files || 0}</span>
      </div>

      <div className="flex">
        <span className="fs-14 fw-400 text-blue-85 w-32">Date of Accident:</span>
        <span className="fs-14 fw-500 text-gray-54">{formatDate(caseItem.dateOfAccident)}</span>
      </div>

      <div className="flex">
        <span className="fs-14 fw-400 text-blue-85 w-32">Case Started on:</span>
        <span className="fs-14 fw-500 text-gray-54">{formatDate(caseItem.caseStartData) || 'Not started yet'}</span>
      </div>

      <div className="flex items-center">
        <span className="fs-14 fw-400 text-blue-85 w-32">Case Status:</span>
        <span
          className="px-2 py-0.5 rounded-md fs-14 fw-500"
          style={getStatusStyles(
            caseItem.status === 'Open' ? 'Enrolled' : caseItem.status
          )}
        >
          {caseItem.status === 'Open' ? 'Enrolled' : caseItem.status}
        </span>
      </div>
    </div>
  </div>
  </div>
  )
}

export default CaseCard