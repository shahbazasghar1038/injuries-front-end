import React from 'react';
import { Card, Button, Avatar, Breadcrumb, message } from 'antd';
import { CloseOutlined, HomeOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';
import { medicalRecordRequest } from '../../../services/cases';

function DoctorInvitationCard({casesRequest,onSuccess}) {

  const handleCaseInvitation = (id, accept ) => {
    let model = {
      doctorAcceptanceStatus: accept ? 'Accepted' : 'Rejected',
    };  
    medicalRecordRequest(model, id)
      .then((response) => {
        console.log("case invite action successfully:", response);
        onSuccess()
        message.success(response?.message || "invitation action successfully");
      })
      .catch((err) => {
        message.error(err.message);
        console.error("Error case invition action :", err);
      });
  };
  
  return (
    <div className=" bg-gray-50">
      {/* Grid for cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {casesRequest.map((invitation) => (
          <Card
            key={invitation.id}
            className="rounded-lg shadow-sm border border-gray-200"
            bodyStyle={{ padding: '12px 24px 24px 12px'}}
          >
            <div className="flex items-start mb-6">
              <div className="flex justify-between w-full">
                <p className="text-[#344054] text-[14px] font-[400] p-4 mb-0">
                  You've been invited to a case by Attorney {invitation.attorney?.fullName}.
                </p>
                <Button
                type="text"
                icon={<CloseOutlined />}
                className="text-gray-400 hover:text-gray-600 -mr-4"
                style={{ border: 'none' }}
              />
              </div> 
            </div>
            <div className="flex justify-end space-x-3">
              <Button 
              onClick={() => handleCaseInvitation(invitation?.id , false)}
                className="px-6 border-gray-300 h-11 text-gray-700 hover:border-gray-400"
              >
                Reject
              </Button> 
              <Button
              onClick={() => handleCaseInvitation(invitation?.id , true)}
              type="primary"
              size="large"
              className="order-0 md:order-1 mt-2 md:mt-0 h-11 bg-blue-600 hover:bg-[#3641F5]"
            >
              Accept Invitation
            </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default DoctorInvitationCard;