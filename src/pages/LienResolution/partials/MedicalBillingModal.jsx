import React, { useState } from 'react';
import { Modal, Input, Select, Button, Divider } from 'antd';
import { CloseOutlined, DownloadOutlined } from '@ant-design/icons';

export const MedicalBillingModal = ({onClose, provider }) => {
  const [formData, setFormData] = useState({
    billAmount: provider?.bill || '0.00',
    reducedAmount: provider?.reducedAmount || '0.00',
    lienOffer: provider?.reducedAmount || '0.00',
    lienOfferStatus: provider?.lienOfferStatus || 'In Progress',
    caseStatus: provider?.caseStatus || 'In Progress',
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const handleSaveChanges = () => {
    console.log('Saving changes:', formData);
    onClose();
  };

  return (
 
      <div className="p-2">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-medium text-gray-800">Dr. {provider?.user?.fullName}</h2>
          <p className="text-gray-500">{provider?.user?.speciality}</p>
        </div>

        {/* Financial Information */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Bill amount</label>
            <Input
              value={formData.billAmount}
              onChange={(e) => handleInputChange('billAmount', e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Reduced amount</label>
            <Input
              value={formData.reducedAmount}
              onChange={(e) => handleInputChange('reducedAmount', e.target.value)}
              className="w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Lien Offer</label>
            <Input
              value={formData.lienOffer}
              onChange={(e) => handleInputChange('lienOffer', e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Lien Offer Status</label>
            <Select
              value={formData.lienOfferStatus}
              onChange={(value) => handleInputChange('lienOfferStatus', value)}
              className="w-full"
              suffixIcon={<span className="text-gray-400">▼</span>}
            >
              <Select.Option value="In Progress">
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                  In Progress
                </div>
              </Select.Option>
              <Select.Option value="Completed">
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                  Completed
                </div>
              </Select.Option>
              <Select.Option value="Pending">
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                  Pending
                </div>
              </Select.Option>
            </Select>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm text-gray-600 mb-1">Case Status</label>
          <Select
            value={formData.caseStatus}
            onChange={(value) => handleInputChange('caseStatus', value)}
            className="w-full"
            suffixIcon={<span className="text-gray-400">▼</span>}
          >
            <Select.Option value="Completed">
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                Completed
              </div>
            </Select.Option>
            <Select.Option value="In Progress">
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                In Progress
              </div>
            </Select.Option>
            <Select.Option value="Pending">
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                Pending
              </div>
            </Select.Option>
          </Select>
        </div>

        {/* Medical Records Section */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h3 className="text-base font-medium text-gray-800 mb-4">Medical records</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Initial Reports */}
            <div className="bg-white p-3 rounded-lg border border-gray-100">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-md bg-green-50 flex items-center justify-center mr-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13 2V9H20" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Initial Reports</p>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <span>.Mpx</span>
                    <span className="mx-1">•</span>
                    <a href="#" className="text-blue-500 flex items-center">
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* MRI Scans */}
            <div className="bg-white p-3 rounded-lg border border-gray-100">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-md bg-blue-50 flex items-center justify-center mr-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13 2V9H20" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">MRI Scans</p>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <span>.jpeg</span>
                    <span className="mx-1">•</span>
                    <a href="#" className="text-blue-500 flex items-center">
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Reports */}
            <div className="bg-white p-3 rounded-lg border border-gray-100">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-md bg-blue-50 flex items-center justify-center mr-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13 2V9H20" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Final Reports</p>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <span>.Mpx</span>
                    <span className="mx-1">•</span>
                    <a href="#" className="text-blue-500 flex items-center">
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bills Section */}
        <div className="mb-6">
          <h3 className="text-base font-medium text-gray-800 mb-4">Bills</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-white p-3 rounded-lg border border-gray-100">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-md bg-red-50 flex items-center justify-center mr-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M13 2V9H20" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Bills report</p>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <span>PDF</span>
                      <span className="mx-1">•</span>
                      <a href="#" className="text-blue-500 flex items-center">
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-8">
          <Button 
            onClick={onClose} 
            className="flex-1 h-10 border-gray-200 text-gray-700"
          >
            Close
          </Button>
          <Button 
            type="primary" 
            onClick={handleSaveChanges} 
            className="flex-1 h-10 bg-blue-600 hover:bg-blue-700 border-blue-600"
          >
            Save Changes
          </Button>
        </div>
      </div>
  );
};