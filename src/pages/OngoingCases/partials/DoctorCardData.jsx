import React from "react";

const DoctorCardData = ({ provider, isDoctor }) => {
  return (
    <div>
      <div className="flex items-center gap-1 mb-2 relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative w-fit whitespace-nowrap fs-14 fw-400 text-blue-85">
          Treatment Status:
        </div>

        <div
          className={`inline-flex items-center justify-center px-2.5 py-0.5 relative flex-[0_0_auto] ${
            provider.treatmentStatus === "Completed"
              ? "bg-[#ECFDF3]"
              : "bg-[#ecf3ff]"
          } rounded-[999px]`}
        >
          <div
            className={`relative w-fit mt-[-1.00px] fs-14 fw-500 ${
              provider.treatmentStatus === "Completed"
                ? "text-[#039855]"
                : "text-[#465fff]"
            } text-center  whitespace-nowrap `}
          >
            {provider.treatmentStatus}
          </div>
        </div>
      </div>

      {/* <div className="flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative w-fit whitespace-nowrap fs-14 fw-400 text-blue-85">
                        Lien Offer:
                      </div>

                      <div
                        className={`inline-flex items-center justify-center px-2.5 py-0.5 relative flex-[0_0_auto] rounded-[999px] ${
                          provider.lienOfferStatus === "Pending"
                            ? "bg-[#FFFAEB]"
                            : provider.lienOfferStatus === "Completed"
                            ? "bg-[#ECFDF3]"
                            : "bg-[#ecf3ff]"
                        }`}
                      >
                        <div
                          className={`mt-[-1.00px] text-center relative w-fit whitespace-nowrap fs-14 fw-500 ${
                            provider.lienOfferStatus === "Pending"
                              ? "text-[#DC6803]"
                              : provider.lienOfferStatus === "Completed"
                              ? "text-[#039855]"
                              : "text-[#465fff]"
                          }`}
                        >
                          {provider.lienOfferStatus}
                        </div>
                      </div>
                    </div> */}
      {isDoctor && (
        <>
          <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start justify-center gap-1 relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-1 mb-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] whitespace-nowrap fs-14 fw-400 text-blue-85">
                  Bill Amount:
                </div>

                <div className="mt-[-1.00px] relative w-fit  whitespace-nowrap fs-14 fw-500 text-gray-54">
                  - {provider.bill ? `$ ${provider.bill}` : "N/A"}
                </div>
              </div>

              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] whitespace-nowrap fs-14 fw-400 text-blue-85">
                  Reduced Amount:
                </div>

                <div className="mt-[-1.00px] text-[#344054] relative w-fit  whitespace-nowrap fs-14 fw-500">
                  {provider.reducedAmount ? `$${provider.reducedAmount}` : `N/A`}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DoctorCardData;
