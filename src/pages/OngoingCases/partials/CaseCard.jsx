import React from 'react'
import { Avatar, Button, Input } from 'antd';
import { ArrowRightOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const CaseCard = ({caseItem}) => {
  return (
    <div
    key={caseItem.id}
    className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow relative"
  > 

    <div className="flex justify-between items-start mb-4">
      <h2 className="text-lg font-semibold text-gray-800">{caseItem.name}</h2>
     <Link to={'/cases-detail'}> <ArrowRightOutlined className="text-gray-400" /></Link>
    </div>

    <div className="space-y-2 text-sm">
      <div className="flex">
        <span className="text-gray-500 w-32">No of files:</span>
        <span className="font-medium">{caseItem.files}</span>
      </div>

      <div className="flex">
        <span className="text-gray-500 w-32">Date of Accident:</span>
        <span className="font-medium">{caseItem.accidentDate}</span>
      </div>

      <div className="flex">
        <span className="text-gray-500 w-32">Case Started on:</span>
        <span className="font-medium">{caseItem.startDate}</span>
      </div>

      <div className="flex items-center">
        <span className="text-gray-500 w-32">Case Status:</span>
        <span className={`px-2 py-0.5 rounded-md font-medium ${caseItem.statusColor}`}>{caseItem.status}</span>
      </div>
    </div>
  </div>
  )
}

export default CaseCard