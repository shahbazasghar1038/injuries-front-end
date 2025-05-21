import React, { useState } from "react";
import SubmissionModal from "../../../components/ui/SubmissionModal";
import ProviderEditDetail from "../../OngoingCases/partials/ProviderEditDetail";
import CustomModal from "../../../components/ui/CustomModal";
import NegotitationFrom from "./NegotitationFrom";
import BillRecords from "./BillRecords";
import { MedicalBillingModal } from "./MedicalBillingModal";

const ProviderCardsLien = ({ caseData, onSuccess }) => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selecedProvider, setSelectedProvider] = useState({});
  
  console.log("sdf:", selecedProvider);
  // Function to open the modal
  const EditProviderDetailshowModal = (provider) => {
    setSelectedProvider(provider)
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const [selectedLienData, setSelectedLienData] = useState({});

  const showRecordModal = (provi) => {
    setSelectedLienData(provi);
    setIsRecordModalOpen(true);
  };

  const handleRecordModalClose = () => {
    setIsRecordModalOpen(false);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [isNegotiationModalOpen, setNegotiationModalOpen] = useState(false);
  const [isSubmissionModalOpen, setSubmissionModalOpen] = useState(false);
  const [isRecordModalOpen, setIsRecordModalOpen] = useState(false);

  const showNegotiationModal = (provider) => {
    setSelectedLienData(provider);
    setSubmissionModalOpen(true);
  };
  const closeNegotiationModal = () => {
    setSubmissionModalOpen(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {caseData?.providerTreatmentRecords
          ?.filter((provider) => provider.doctorAcceptanceStatus === "Accepted")
          .map((provider) => (
            <div
              key={provider.id}
              className="flex flex-col w-full items-center gap-3 pt-2 pb-3 px-2 relative bg-white rounded-2xl overflow-hidden border border-solid border-[#e4e7ec]"
            >
              <div className="flex flex-col items-start gap-3 p-4 self-stretch w-full bg-[#f8f9fb] rounded-lg relative flex-[0_0_auto]">
                <div className="flex items-start gap-3 justify-between w-full relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-start justify-center gap-1 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] fs-20 fw-700 text-blue-39">
                      {provider?.user?.fullName}
                    </div>
                    <div className="relative w-fit fs-14 fw-500 blue-light-b3 whitespace-nowrap">
                      {provider.specialty}
                    </div>
                  </div>

                  <div
                    className="cursor-pointer inline-flex p-2 pr-0 items-center justify-center gap-2 rounded-lg overflow-hidden shadow-shadow-xs"
                    onClick={()=>EditProviderDetailshowModal(provider)}
                  >
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
                      } text-center whitespace-nowrap`}
                    >
                      {provider.treatmentStatus}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
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
                </div>

                <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-start justify-center gap-1 relative flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] whitespace-nowrap fs-14 fw-400 text-blue-85">
                        Bill Amount:
                      </div>
                      <div className="mt-[-1.00px] relative w-fit whitespace-nowrap fs-14 fw-500 text-gray-54">
                        - ${provider.bill}
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] whitespace-nowrap fs-14 fw-400 text-blue-85">
                        Reduced Amount:
                      </div>
                      <div className="mt-[-1.00px] text-[#344054] relative w-fit whitespace-nowrap fs-14 fw-500">
                        {provider.reducedAmount === "-"
                          ? "-"
                          : `$${provider.reducedAmount}`}
                      </div>
                    </div>
                  </div>

                  <div
                    onClick={() => showRecordModal(provider)}
                    className="cursor-pointer relative w-fit whitespace-nowrap fs-14 fw-500 text-blue-85"
                  >
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
                <button
                disabled={!provider.bill}
                  onClick={() => showNegotiationModal(provider)}
                  className="all-[unset] whitespace-nowrap btn btn-primary   px-4 py-3 relative w-full overflow-hidden"
                >
                  <div className="text-white relative w-fit">
                    Negotiate Amount
                  </div>
                </button>
              </div>
            </div>
          ))}
      </div>
{/* add bill by doctor lien page card  */}
      <SubmissionModal open={isModalOpen} onClose={handleModalClose}>
        <MedicalBillingModal provider={selecedProvider}
           onSuccess={onSuccess}
          onClose={handleModalClose}/>
      </SubmissionModal>

      <SubmissionModal
        open={isSubmissionModalOpen}
        onClose={() => closeNegotiationModal()}
        borderRadius={24}
      >
        <NegotitationFrom
          visible={isNegotiationModalOpen}
          onCancel={() => setNegotiationModalOpen(false)}
          data={selectedLienData}
        />
      </SubmissionModal>

      <SubmissionModal
        open={isRecordModalOpen}
        onClose={handleRecordModalClose}
        borderRadius={24}
      >
        <BillRecords
          visible={isRecordModalOpen}
          onCancel={handleRecordModalClose}
          data={selectedLienData}
          caseData={caseData}
        />
      </SubmissionModal>
    </>
  );
};

export default ProviderCardsLien;
