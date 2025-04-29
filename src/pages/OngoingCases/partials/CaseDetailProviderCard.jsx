import React from 'react'

const CaseDetailProviderCard = ({provider}) => {
    console.log('sdf:' , provider)
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
        <button className="all-[unset] bg-[#ECF3FF] text-[#3641F5] box-border flex items-center justify-center gap-2 px-4 py-3 relative flex-1 grow rounded-lg overflow-hidden border border-solid border-[#e4e7ec]">
          <div className="mt-[-1.00px] relative w-fit whitespace-nowrap fs-14 fw-500 text-gray-54">
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