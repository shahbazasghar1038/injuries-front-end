import React, { useState } from 'react'
import AuthenticatedLayout from '../../layout/AuthenticatedLayout'
import Breadcrumb from '../../components/ui/Breadcrumb';
import PatientDetail from './partials/PatientDetail';
import CustomModal from '../../components/ui/CustomModal';
import AddNewCaseForm from './partials/AddNewCaseForm';


const CaseDashboard = () => {

    const breadcrumbLinks = [
        { label: "Home", href: "/" },
        { label: "Lien Resolution", href: "/" },
        { label: "Case Details"},
      ];

      const [isModalVisible, setIsModalVisible] = useState(false)

    
      const showModal = () => {
        setIsModalVisible(true)
      }
      
      const handleCancel = () => {
        setIsModalVisible(false)
      }
    
    
    // Add sample medical provider data
    const medicalProviders = [
      {
        id: 1,
        name: "Dr. Marina Paul",
        specialty: "Orthopedic",
        treatmentStatus: "Completed",
        lienOfferStatus: "In Progress",
        billAmount: "6,500",
        reducedAmount: "-"
      },
      {
        id: 2,
        name: "Dr. John Smith",
        specialty: "Neurology",
        treatmentStatus: "In Progress",
        lienOfferStatus: "Pending",
        billAmount: "8,200",
        reducedAmount: "5,400"
      },
      {
        id: 3,
        name: "Dr. Sarah Johnson",
        specialty: "Physical Therapy",
        treatmentStatus: "Completed",
        lienOfferStatus: "Completed",
        billAmount: "3,800",
        reducedAmount: "2,100"
      },
      {
        id: 4,
        name: "Dr. Sarah Johnson",
        specialty: "Physical Therapy",
        treatmentStatus: "Completed",
        lienOfferStatus: "Completed",
        billAmount: "3,800",
        reducedAmount: "2,100"
      }
    ];

  return (
    <AuthenticatedLayout>
        <div className='lg:flex gap-2 justify-between'>
            <p className='fs-20 fw-600 text-blue-39'>Case Dashboard</p>
            <Breadcrumb  links={breadcrumbLinks} />
        </div>

        <div className='mt-6'>
                <PatientDetail />
        </div>
        <div className="mt-6">
          <p className='fs-16 fw-500 text-blue-39'>Medical Providers</p>
          {/* -----------------------------------------------------------------  */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:gap-4 xl:gap-6 mt-3 relative ">
            {medicalProviders.map((provider) => (
              <div key={provider.id} className="flex flex-col w-full items-center gap-3 pt-2 pb-3 px-2 relative bg-white rounded-2xl overflow-hidden border border-solid border-[#e4e7ec]">
                <div className="flex flex-col items-start gap-3 p-4 self-stretch w-full bg-[#f8f9fb] rounded-lg relative flex-[0_0_auto]">
                  <div className="flex items-start gap-3 justify-between w-full relative flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-start justify-center gap-1 relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] fs-20 fw-700 text-blue-39">
                        {provider.name}
                      </div>

                      <div className="relative w-fit fs-14 fw-500 blue-light-b3 whitespace-nowrap">
                        {provider.specialty}
                      </div>
                    </div>
                    <div className="cursor-pointer inline-flex p-2 pr-0 items-center justify-center gap-2 rounded-lg overflow-hidden shadow-shadow-xs">
                      <div className="relative w-5 h-5">
                        <img
                          className="absolute w-3.5 h-3.5 top-0.5 left-1"
                          alt="Icon"
                          src="https://c.animaapp.com/m9vlz8e7aemWY8/img/icon.svg"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit whitespace-nowrap fs-14 fw-400 text-blue-85">
                      Treatment Status:
                    </div>

                    <div className={`inline-flex items-center justify-center px-2.5 py-0.5 relative flex-[0_0_auto] ${provider.treatmentStatus === "Completed" ? "bg-[#ebfdf2]" : "bg-[#ecf3ff]"} rounded-[999px]`}>
                      <div className={`relative w-fit mt-[-1.00px] fs-14 fw-500 ${provider.treatmentStatus === "Completed" ? "text-[#039754]" : "text-[#465fff]"} text-center  whitespace-nowrap `}>
                        {provider.treatmentStatus}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit whitespace-nowrap fs-14 fw-400 text-blue-85">
                      Lien Offer:
                    </div>

                    <div className={`inline-flex items-center justify-center px-2.5 py-0.5 relative flex-[0_0_auto] rounded-[999px] ${
                      provider.lienOfferStatus === "Pending" 
                        ? "bg-[#FFFAEB]" 
                        : provider.lienOfferStatus === "Completed" 
                          ? "bg-[#ebfdf2]" 
                          : "bg-[#ecf3ff]"
                    }`}>
                      <div className={`mt-[-1.00px] text-center relative w-fit whitespace-nowrap fs-14 fw-500 ${
                        provider.lienOfferStatus === "Pending" 
                          ? "text-[#DC6803]" 
                          : provider.lienOfferStatus === "Completed" 
                            ? "text-[#039754]" 
                            : "text-[#465fff]"
                      }`}>
                        {provider.lienOfferStatus}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-start justify-center gap-1 relative flex-[0_0_auto]">
                      <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] whitespace-nowrap fs-14 fw-400 text-blue-85">
                          Bill Amount:
                        </div>

                        <div className="mt-[-1.00px] relative w-fit  whitespace-nowrap fs-14 fw-500 text-gray-54">
                          - ${provider.billAmount}
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] whitespace-nowrap fs-14 fw-400 text-blue-85">
                          Reduced Amount:
                        </div>

                        <div className="mt-[-1.00px] text-[#98a1b2] relative w-fit  whitespace-nowrap fs-14 fw-500">
                          {provider.reducedAmount === "-" ? "-" : `$${provider.reducedAmount}`}
                        </div>
                      </div>
                    </div>

                    <div className="relative w-fit whitespace-nowrap fs-14 fw-500 text-blue-85">
                      View offer
                    </div>
                  </div>

                  <div className="flex items-start gap-6 self-stretch w-full relative flex-[0_0_auto]">
                    <button className="all-[unset] box-border flex items-center justify-center gap-2 px-4 py-3 relative flex-1 grow rounded-lg overflow-hidden border border-solid border-[#e4e7ec]">
                      <div className="mt-[-1.00px] relative w-fit whitespace-nowrap fs-14 fw-500 text-gray-54">
                        Medical records
                      </div>
                    </button>

                    <button className="all-[unset] box-border flex items-center justify-center gap-2 px-4 py-3 relative flex-1 grow rounded-lg overflow-hidden border border-solid border-[#e4e7ec]">
                      <div className="mt-[-1.00px] relative w-fit whitespace-nowrap fs-14 fw-500 text-gray-54">
                        Bills
                      </div>
                    </button>
                  </div>

                  
                </div>

                <div className="flex flex-col w-[90%] items-start gap-2.5 relative flex-[0_0_auto]">
                  <button className="all-[unset] whitespace-nowrap btn btn-primary px-4 py-3 relative w-full overflow-hidden">
                    <div className="text-white relative w-fit ">
                      Negotiate Amount
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* -----------------------------------------------------------------  */}
        </div>

        
        <CustomModal  open={isModalVisible} onClose={handleCancel} borderRadius={24}>
      <AddNewCaseForm visible={isModalVisible} onCancel={handleCancel} />
  </CustomModal>

    </AuthenticatedLayout>
  )
}

export default CaseDashboard