import React, { useEffect, useState } from 'react'
import AuthenticatedLayout from '../../layout/AuthenticatedLayout'
import Breadcrumb from '../../components/ui/Breadcrumb'
import ActionModal from '../../components/ui/ActionModal'
import { Avatar, Button, Input } from 'antd';
import { ArrowRightOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { getAllarchiveCase } from '../../services/cases';
import { formatDate } from '../../helper/formateDate';


const Archieve = () => {
    // Add state to track which dropdown is open
    const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
    // Add state for delete modal
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    // Add state for move modal
    const [moveModalOpen, setMoveModalOpen] = useState(false);
    const [itemToMove, setItemToMove] = useState(null);

    // Function to handle dropdown toggle
    const toggleDropdown = (index) => {
        if (openDropdownIndex === index) {
            setOpenDropdownIndex(null);
        } else {
            setOpenDropdownIndex(index);
        }
    };

    // Function to open delete modal
    const handleDeleteClick = (item, index) => {
        setItemToDelete(item);
        setDeleteModalOpen(true);
        setOpenDropdownIndex(null); // Close dropdown after clicking
    };

    // Function to open move modal
    const handleMoveClick = (item, index) => {
        setItemToMove(item);
        setMoveModalOpen(true);
        setOpenDropdownIndex(null); // Close dropdown after clicking
    };

    // Function to handle deletion confirmation
    const handleConfirmDelete = () => {
        // Implement actual deletion logic here
        console.log('Deleting item:', itemToDelete);
        setDeleteModalOpen(false);
        setItemToDelete(null);
    };

    // Function to handle move confirmation
    const handleConfirmMove = () => {
        // Implement actual move logic here
        console.log('Moving item to ongoing cases:', itemToMove);
        setMoveModalOpen(false);
        setItemToMove(null);
    };

    const breadcrumbLinks = [
        { label: "Home", href: "/" },
        { label: "Archive"},
      ];
      
    // Sample data array for archive items
    const archiveItems = [
      {
        name: "Robyn Washington",
        filesCount: 4,
        accidentDate: "04/01/24",
        caseStartDate: "01/26/25",
        status: "Archived"
      },
      {
        name: "John Smith",
        filesCount: 2,
        accidentDate: "03/15/24",
        caseStartDate: "03/20/24",
        status: "Archived"
      },
      {
        name: "Emma Johnson",
        filesCount: 6,
        accidentDate: "02/10/24",
        caseStartDate: "02/25/24",
        status: "Archived"
      },
      {
        name: "Emma Johnson",
        filesCount: 6,
        accidentDate: "02/10/24",
        caseStartDate: "02/25/24",
        status: "Archived"
      },
    ];

      const [cases, setCases] = useState([]); // State to store cases
      const [error, setError] = useState(null); // State to store errors
      
      // Fetch all cases when the component mounts
      useEffect(() => {
        fetchAllArchivedCases();
      }, []);
    
      const fetchAllArchivedCases = () => {
        getAllarchiveCase()
        .then((response) => {
          console.log('resp : ' , response)
          setCases(response);  
        })
        .catch((err) => {
          console.error("Error fetching cases:", err);
          setError("Failed to fetch cases. Please try again later.");
        });
      };

  return (
   <>
    <AuthenticatedLayout>
        <div className='lg:flex gap-2 justify-between mb-6'>
            <p className='fs-20 fw-600 text-blue-39'>Archive</p>
            <Breadcrumb  links={breadcrumbLinks} />
        </div>

        <div className="content-card-bg p--24">
            <div className="lg:flex xl:flex justify-between items-center border-b border-solid border-[#e4e7ec] pb-2.5 mb-6 relative">
                <div className="flex flex-col w-full">
                    <h1 className="text-xl font-semibold text-gray-800">Cases</h1>
                </div>

                <div className="flex  md:flex-row flex-col justify-end gap-4 w-full">
                    <Input
                    placeholder="Search cases..."
                    prefix={<SearchOutlined className="text-gray-400" />}
                    className=" md:max-w-sm w-full order-1 md:order-0 h-12"
                    size="large"
                    onChange={(e) => setSearch(e.target.value)}
                    />
                 
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-[20px_20px] relative">
                {cases.map((item, index) => (
                    <div key={index} className="flex flex-col w-full items-center gap-2 p-2 relative bg-white rounded-2xl overflow-hidden border border-solid border-[#e4e7ec]">
                        <div className="flex flex-col items-start gap-3 p-4 relative flex-1 self-stretch w-full grow bg-[#f8f9fb] rounded-lg">
                            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                                <div className="inline-flex flex-col items-start justify-center gap-1 relative flex-[0_0_auto]">
                                    <div className="relative w-fit mt-[-1.00px]  whitespace-nowrap fs-20 fw-700 text-blue-39">
                                        {item?.case.fullName}
                                    </div>
                                </div>

                                <div className="inline-flex items-center gap-2.5 p-2 relative flex-[0_0_auto] bg-white rounded-lg overflow-hidden">
                                    <div className="inline-flex flex-col items-end gap-3 relative flex-[0_0_auto]">
                                        <div 
                                            className='archive-dots-icon cursor-pointer' 
                                            onClick={() => toggleDropdown(index)}
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 19C14 17.8954 13.1046 17 12 17C10.8954 17 10 17.8954 10 19C10 20.1046 10.8954 21 12 21C13.1046 21 14 20.1046 14 19Z" fill="#637381"/>
                                                <path d="M14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12Z" fill="#637381"/>
                                                <path d="M14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7C13.1046 7 14 6.10457 14 5Z" fill="#637381"/>
                                            </svg>
                                        </div>
                                    </div>
                                    
                                </div>
                                {openDropdownIndex === index && (
                                        <div className="archive-dropdown absolute right-2 top-10 z-10">
                                            <div className="archive-dropdown-item p-2 cursor-pointer hover:bg-gray-50 rounded-lg">
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
                                                        <path d="M22.5 5.66289H7.3875C6.9375 5.66289 6.5625 5.28789 6.5625 4.83789C6.5625 4.38789 6.9375 4.01289 7.3875 4.01289H20.7L18.975 1.98789C18.675 1.61289 18.7125 1.08789 19.0875 0.787891C19.4625 0.487891 19.9875 0.52539 20.2875 0.90039L23.175 4.31289C23.4 4.57539 23.4375 4.91289 23.2875 5.21289C23.1375 5.47539 22.8375 5.66289 22.5 5.66289Z" fill="#667085"/>
                                                        <path d="M4.3875 17.4379C4.1625 17.4379 3.9 17.3254 3.75 17.1379L0.862504 13.7254C0.637504 13.4629 0.600004 13.1254 0.750004 12.8254C0.900004 12.5254 1.2 12.3379 1.5 12.3379H16.6125C17.0625 12.3379 17.4375 12.7129 17.4375 13.1629C17.4375 13.6129 17.0625 13.9879 16.6125 13.9879H3.3L5.025 16.0129C5.325 16.3879 5.2875 16.9129 4.9125 17.2129C4.7625 17.4004 4.575 17.4379 4.3875 17.4379Z" fill="#667085"/>
                                                    </svg>
                                                </span>
                                                <p className='fs-14 fw-600'>Move to Ongoing cases</p>
                                            </div>
                                            <div onClick={() => handleDeleteClick(item, index)} className="archive-dropdown-item p-2 cursor-pointer hover:bg-red-50 rounded-lg">
                                                <div 
                                                    className="flex items-center" 
                                                    
                                                >
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99951 4.25C7.99951 3.00736 9.00687 2 10.2495 2H13.7495C14.9922 2 15.9995 3.00736 15.9995 4.25V5H18.75H19.999C20.4132 5 20.749 5.33579 20.749 5.75C20.749 6.16421 20.4132 6.5 19.999 6.5H19.5V9.89585V15.8958V19.75C19.5 20.9926 18.4926 22 17.25 22H6.75C5.50736 22 4.5 20.9926 4.5 19.75V15.8958V9.89585V6.5H4C3.58579 6.5 3.25 6.16421 3.25 5.75C3.25 5.33579 3.58579 5 4 5H5.25H7.99951V4.25ZM18 15.8958V9.89585V6.5H15.9995H15.2495H8.74951H7.99951H6V9.89585V15.8958V19.75C6 20.1642 6.33579 20.5 6.75 20.5H17.25C17.6642 20.5 18 20.1642 18 19.75V15.8958ZM9.49951 5H14.4995V4.25C14.4995 3.83579 14.1637 3.5 13.7495 3.5H10.2495C9.8353 3.5 9.49951 3.83579 9.49951 4.25V5ZM10 9.75C10.4142 9.75 10.75 10.0858 10.75 10.5V16.5C10.75 16.9142 10.4142 17.25 10 17.25C9.58579 17.25 9.25 16.9142 9.25 16.5V10.5C9.25 10.0858 9.58579 9.75 10 9.75ZM14.75 10.5C14.75 10.0858 14.4142 9.75 14 9.75C13.5858 9.75 13.25 10.0858 13.25 10.5V16.5C13.25 16.9142 13.5858 17.25 14 17.25C14.4142 17.25 14.75 16.9142 14.75 16.5V10.5Z" fill="#D92D20"/>
                                                        </svg>
                                                    </span>
                                                    <p className='fs-14 fw-600 text-red-600'>Delete</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                            </div>

                            <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
                                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                                    <div className="relative w-fit mt-[-1.00px]  whitespace-nowrap fs-14 fw-400 text-blue-85">
                                        No of files:
                                    </div>

                                    <div className="relative w-fit mt-[-1.00px]  whitespace-nowrap fs-14 fw-500 text-gray-54">
                                        {item?.case.filesCount || 0}
                                    </div>
                                </div>

                                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                                    <div className="relative w-fit mt-[-1.00px]  whitespace-nowrap  fs-14 fw-400 text-blue-85">
                                        Case Started on:
                                    </div>

                                    <div className="relative w-fit mt-[-1.00px]  whitespace-nowrap fs-14 fw-500 text-gray-54">
                                        {formatDate(item.case?.caseStartData) || 'Not started yet'}
                                    </div>
                                </div>

                                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                                    <div className="relative w-fit  whitespace-nowrap fs-14 fw-400 text-blue-85">
                                        Case Status:
                                    </div>

                                    <div className="inline-flex items-center justify-center px-2.5 py-0.5 relative flex-[0_0_auto] bg-[#98a1b2] rounded-[999px]">
                                        <div className="relative w-fit mt-[-1.00px]  text-white  text-center   whitespace-nowrap fs-14 fw-500">
                                            Archived
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Add delete confirmation modal */}
        <ActionModal
            open={deleteModalOpen}
            onCancel={() => setDeleteModalOpen(false)}
            onConfirm={handleConfirmDelete}
            title="Delete Archive Item"
            content={`Are you sure you want to delete this archived case for ${itemToDelete?.name}? This action cannot be undone.`}
        />

        {/* Add move confirmation modal */}
        <ActionModal
            open={moveModalOpen}
            onCancel={() => setMoveModalOpen(false)}
            onConfirm={handleConfirmMove}
            title="Move to Ongoing Cases"
            content={`Are you sure you want to move this archived case for ${itemToMove?.name} to ongoing cases?`}
            icon={
                <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.364 6.85053C38.6205 -2.28351 51.3795 -2.28351 55.636 6.85053C58.0129 11.951 63.5594 14.6722 68.9556 13.3853C78.6192 11.0807 86.5743 21.2433 82.2185 30.3287C79.7862 35.402 81.1561 41.5165 85.5082 45.0122C93.3019 51.2725 90.4628 63.9451 80.7747 66.1403C75.3648 67.3661 71.5265 72.2695 71.5572 77.9156C71.6123 88.0265 60.1169 93.6664 52.3918 87.3184C48.0781 83.7737 41.9219 83.7737 37.6082 87.3184C29.8831 93.6664 18.3877 88.0266 18.4428 77.9156C18.4735 72.2695 14.6352 67.3661 9.22531 66.1403C-0.462787 63.9451 -3.30193 51.2725 4.49185 45.0122C8.84391 41.5165 10.2138 35.402 7.78151 30.3287C3.42572 21.2433 11.3808 11.0807 21.0444 13.3853C26.4406 14.6722 31.9871 11.951 34.364 6.85053Z" fill="#EAECF5"/>
                    <path d="M53.2285 33.7075L53.2285 57.1875" stroke="#1D2939" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M64.7485 45.4475L53.2285 57.1875L41.7085 45.4475" stroke="#1D2939" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M36.4485 56.9675L36.4485 33.4875" stroke="#1D2939" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M24.9297 45.2275L36.4497 33.4875L47.9697 45.2275" stroke="#1D2939" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            }
            footer={[
                <div className='flex items-center gap-3'>
                    <button 
                        key="cancel" 
                        className="btn btn-secondary mr-3"
                        onClick={() => setMoveModalOpen(false)}
                    >
                        Cancel
                    </button>,
                    <button 
                        key="move" 
                        className="btn btn-primary"
                        onClick={handleConfirmMove}
                    >
                        Move Case
                    </button>
                </div>
            ]}
        />

      </AuthenticatedLayout>
   </>
  )
}

export default Archieve