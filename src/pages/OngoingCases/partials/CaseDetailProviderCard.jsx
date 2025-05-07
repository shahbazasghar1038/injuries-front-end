import React, { useState } from 'react'
import { ongoingMedicalProvider } from "../../../services/cases";

const CaseDetailProviderCard = ({provider}) => {
    const [medicalActive, setMedicalActive] = useState(false);

    const handleongoingMedicalProvider = () => {
      const model = {
        reason: "Case is completed",
        caseId: caseData?.case?.id,
        userId: user?.id,
      };
  
      ongoingMedicalProvider(model)
        .then((response) => {
          console.log("Case archived successfully:", response);
          message.success(response?.message || "Case archived successfully");
          navigate("/ongoing-cases");
        })
        .catch((err) => {
          message.error(err.message);
          console.error("Error archive case:", err);
        });
    };

  return (
    <div> <div key={provider.id} className="flex flex-col w-full items-center gap-3 pt-2 pb-3 px-2 relative bg-white rounded-2xl overflow-hidden border border-solid border-[#e4e7ec]">
    <div className="flex flex-col items-start gap-3 p-4 self-stretch w-full bg-[#f8f9fb] rounded-lg relative flex-[0_0_auto]">
      <div className="flex items-start gap-3 justify-between w-full relative flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start justify-center gap-1 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] fs-20 fw-700 text-blue-39">
            {provider.fullName}
          </div>

          <div className="relative w-fit fs-14 fw-500 blue-light-b3 whitespace-nowrap">
            {provider.speciality || 'N/A'}
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

      <div className="flex items-start gap-6 self-stretch w-full relative flex-[0_0_auto]">
        <button
          className={`all-[unset] box-border flex items-center justify-center gap-2 px-4 py-3 relative flex-1 grow rounded-lg overflow-hidden border border-solid border-[#e4e7ec] ${
            medicalActive ? 'bg-[#F79009] text-[#fff]' : 'bg-[#ECF3FF] text-gray-54'
            // medicalActive ? 'bg-[#F79009] text-[#fff]' : 'bg-[#12B76A] text-[#fff]' : 'bg-[#ECF3FF] text-gray-54'
          }`}
          onClick={() => setMedicalActive(!medicalActive)}
        >
          {medicalActive && (
            <span className="flex items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 21 20" fill="none">
                <path d="M18.5625 17.7187H17.5625C17.5937 17.4687 17.5937 17.25 17.5937 17C17.5937 14.7812 15.6562 12.3437 13.9375 10.1875C13.9062 10.125 13.8437 10.0625 13.8125 10C13.8437 9.9375 13.9062 9.875 13.9375 9.8125C15.6562 7.65625 17.5937 5.21875 17.5937 3C17.5937 2.75 17.5937 2.5 17.5625 2.28125H18.5625C18.9375 2.28125 19.2812 1.96875 19.2812 1.5625C19.2812 1.15625 18.9687 0.84375 18.5625 0.84375H2.9375C2.5625 0.84375 2.21875 1.15625 2.21875 1.5625C2.21875 1.96875 2.53125 2.28125 2.9375 2.28125H3.9375C3.90625 2.53125 3.90625 2.78125 3.90625 3C3.90625 5.21875 5.84375 7.65625 7.5625 9.8125C7.59375 9.875 7.65625 9.9375 7.6875 10C7.65625 10.0625 7.59375 10.125 7.5625 10.1875C5.84375 12.3437 3.90625 14.7812 3.90625 17C3.90625 17.25 3.90625 17.5 3.9375 17.7187H2.9375C2.5625 17.7187 2.21875 18.0312 2.21875 18.4375C2.21875 18.8437 2.53125 19.1562 2.9375 19.1562H18.5625C18.9375 19.1562 19.2812 18.8437 19.2812 18.4375C19.2812 18.0312 18.9375 17.7187 18.5625 17.7187ZM5.3125 17C5.3125 15.2812 7.1875 12.9375 8.6875 11.0625C8.84375 10.8437 9.03125 10.6562 9.1875 10.4375C9.375 10.1875 9.375 9.8125 9.1875 9.5625C9.03125 9.375 8.875 9.15625 8.6875 8.9375C7.1875 7.0625 5.3125 4.71875 5.3125 3C5.3125 2.75 5.3125 2.5 5.34375 2.28125H16.1562C16.1875 2.53125 16.1875 2.78125 16.1875 3C16.1875 4.71875 14.3125 7.0625 12.8125 8.9375C12.6562 9.15625 12.4687 9.34375 12.3125 9.5625C12.125 9.8125 12.125 10.1875 12.3125 10.4375C12.4687 10.625 12.625 10.8437 12.8125 11.0625C14.3125 12.9375 16.1875 15.2812 16.1875 17C16.1875 17.25 16.1875 17.5 16.1562 17.7187H5.34375C5.3125 17.4687 5.3125 17.25 5.3125 17Z" fill="white"/>
              </svg>
            </span>
            // <span className="flex items-center download-icon">
            //   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
            //     <path d="M18.5 11.9688C18.125 11.9688 17.7813 12.2812 17.7813 12.6875V15.4688C17.7813 15.75 17.5625 15.9688 17.2813 15.9688H2.21875C1.9375 15.9688 1.71875 15.75 1.71875 15.4688V12.6875C1.71875 12.3125 1.40625 11.9688 1 11.9688C0.59375 11.9688 0.28125 12.2812 0.28125 12.6875V15.4688C0.28125 16.5313 1.125 17.375 2.1875 17.375H17.2813C18.3438 17.375 19.1875 16.5313 19.1875 15.4688V12.6875C19.2188 12.2812 18.875 11.9688 18.5 11.9688Z" fill="white"/>
            //     <path d="M9.25017 12.7187C9.37517 12.8437 9.56267 12.9062 9.75017 12.9062C9.93767 12.9062 10.0939 12.8437 10.2502 12.7187L14.7189 8.375C15.0002 8.09375 15.0002 7.65625 14.7502 7.375C14.4689 7.09375 14.0314 7.09375 13.7502 7.34375L10.4689 10.5625V1.34375C10.4689 0.96875 10.1564 0.625 9.75017 0.625C9.37517 0.625 9.03142 0.9375 9.03142 1.34375V10.5625L5.75017 7.375C5.46892 7.09375 5.03142 7.125 4.75017 7.375C4.46892 7.65625 4.50017 8.09375 4.75017 8.375L9.25017 12.7187Z" fill="white"/>
            //   </svg>
            // </span>
          )}
          <div className="mt-[-1.00px] relative w-fit whitespace-nowrap fs-14 fw-500">
            Medical records
          </div>
        </button>

        <button className="all-[unset] bg-[#ECF3FF] text-[#3641F5] box-border flex items-center justify-center gap-2 px-4 py-3 relative flex-1 grow rounded-lg overflow-hidden border border-solid border-[#e4e7ec]">
          <div className="mt-[-1.00px] relative w-fit whitespace-nowrap fs-14 fw-500 text-gray-54">
            Bills
          </div>
        </button>
      </div>

      
    </div>  
  </div></div>
  )
}

export default CaseDetailProviderCard