import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "../../layout/AuthenticatedLayout";
import Breadcrumb from "./partials/Breadcrumb";
import { Avatar, Button, Input, message } from "antd";
import {
  ArrowRightOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import CaseCard from "./partials/CaseCard";
import AddNewCaseForm from "./partials/AddNewCaseForm";
import CustomModal from "../../components/ui/CustomModal";
import { createCase, getAllCases } from "../../services/cases";
import { useSelector } from "react-redux";
import DoctorInvitationCard from "./partials/DoctorInvitationCard";
import SubmissionModal from "../../components/ui/SubmissionModal";
import PurchaseCases from "./partials/PurchaseCases";

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripeModal from '../OngoingCases/partials/StripeModal';
import { getSingleUser } from "../../services/auth";

const OngoingCases = () => {
  const user = useSelector((state) => state.auth.user); // Add this line to select the user
const isDoctor = user?.role === 'Doctor'; // Check if the user is a doctor
  const breadcrumbLinks = [
    { label: "Home", href: "/" },
    { label: isDoctor ? 'Cases' : 'Ongoing Cases' },
  ];
  const [search, setSearch] = useState("");

  const [showStripeModal, setshowStripeModal] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const handleSuccessBuyNow =()=>{
    setshowStripeModal(true)
    setIsPurchaseModalVisible(false)
  }
  

  const [isPurchaseModalVisible, setIsPurchaseModalVisible] = useState(false);

  const showModal = () => {
    if (userr?.usercaseLimit === userr?.usercaseCount) {
      showPurchaseModal()
    }else{
      setIsModalVisible(true);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showPurchaseModal = () => {
    setIsPurchaseModalVisible(true);
  };

  const handlePurchaseModalClose = () => {
    setIsPurchaseModalVisible(false);
  };

  const [cases, setCases] = useState([]); // State to store cases
  const [casesRequest, setCasesRequest] = useState([]); // State to store cases
  const [error, setError] = useState(null); // State to store errors

  // Fetch all cases when the component mounts
  useEffect(() => {
    fetchAllCases();
  }, []);

  const fetchAllCases = () => {
    getAllCases(user?.id)
      .then((response) => {
        console.log("al  cases resp : ", response);
        const filteredCasesRequest = isDoctor
          && response?.treatmentRecords?.filter(c => c.doctorAcceptanceStatus === 'Pending')

        // If user is doctor, filter cases with DoctorAcceptanceStatus === 'Accepted'
        const filteredCases = isDoctor
          ? response?.treatmentRecords?.filter(c => c.doctorAcceptanceStatus === 'Accepted')
          : response?.cases;

          const caseIds = filteredCases.map(item => item.caseId);

const matchedCases = response?.cases?.filter(caseItem =>
  caseIds.includes(caseItem.id)
);


      console.log('matchedCases' , matchedCases)
        setCases(isDoctor ? matchedCases : response?.cases);
        setCasesRequest(filteredCasesRequest)
      })
      .catch((err) => {
        console.error("Error fetching cases:", err);
        setError("Failed to fetch cases. Please try again later.");
      });
  };

  const [userr, setUserr] = useState({});


    const fetchSingleUser = () => {
      getSingleUser(user?.id)
        .then((response) => {
          console.log("single user resp : ", response?.user);
          setUserr(response?.user);
        })
        .catch((err) => {
          console.error("Error fetching cases:", err);
        });
    };

    useEffect(() => {
      fetchSingleUser()
    }, [])
    
    const handleSuccessStripePayment =()=>{
      message.success('Payment successful!');
      fetchSingleUser()
setshowStripeModal(false)
}

  const handleSubmit = (values) => {

    const model = {
      caseData: {
        ...values,
        billAmount: 0,
      },
      userId: user?.id,
    };

    createCase(model)
      .then((response) => {
        console.log("Case created successfully:", response);
        setIsModalVisible(false);
        fetchAllCases(); // Refresh the list of cases after a successful submission
        fetchSingleUser()
      })
      .catch((err) => {
        console.error("Error creating case:", err);
        message.error(err.message);
        setError("Failed to create case. Please try again.");
      });
  };

  const filteredCases = cases.filter((c) =>
    c.fullName?.toLowerCase().includes(search.toLowerCase())
  );

  const stripePromise = loadStripe(
    'pk_test_51RNeokQ6HHYXAL2WzWHmXRzwzBtgFLUjbMge2O1LecJwE8YPawolnNBD7N783m1WGhnpT7JI3OCBN0sQ4t6SM6GI00VCpNKhHu'
  );

  return (
    <AuthenticatedLayout>

      <div className="lg:flex gap-2 justify-between">
        <p className="fs-20 fw-600 text-blue-39">{isDoctor ? 'Cases' : 'Ongoing Cases' }</p>
        <Breadcrumb links={breadcrumbLinks} />
      </div>

     {isDoctor && casesRequest?.length > 0 ? <DoctorInvitationCard casesRequest={casesRequest} onSuccess={fetchAllCases} /> : null}

      <div className="p-6 bg-white rounded-xl shadow-sm mt-6  ">
        <div className="lg:flex xl:flex justify-between relative">
          <div className="flex flex-col mb-6">
            <h1 className="fs-16 fw-500 text-blue-39">{isDoctor ? 'My Cases' : 'Cases' } </h1>
           {!isDoctor && <p className="fs-14 fw-400 text-blue-85">
              First three cases are free, after that you will have to pay $50
              per case.
            </p>}
          </div>

          <div className="flex  md:flex-row flex-col justify-between gap-4 mb-8">
            <Input
              placeholder="Search cases..."
              prefix={<SearchOutlined className="text-gray-400" />}
              className=" md:max-w-md mb-4 order-1 md:order-0"
              size="large"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
           {!isDoctor &&  <Button
              type="primary"
              onClick={showModal}
              icon={<PlusOutlined />}
              size="large"
              className="order-0 md:order-1 mt-2 md:mt-0 bg-blue-600 hover:bg-[#3641F5]"
            >
              Add New Case
            </Button>}
            {/* <Button
              type="primary"
              onClick={showPurchaseModal}
              icon={<PlusOutlined />}
              size="large"
              className="order-0 md:order-1 mt-2 md:mt-0 bg-blue-600 hover:bg-[#3641F5]"
            >
              Add New purchaseCase
            </Button> */}
          </div>
        </div>

       {filteredCases?.length > 0  ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-4">
          {filteredCases.map((caseItem) => (
            <CaseCard key={caseItem.id} caseItem={caseItem} isDoctor={isDoctor} />
          ))}
        </div> : 
        <div className="flex justify-center items-center p-6">
          <p className="text-gray-500">No cases</p>
        </div>}
      </div>

      <CustomModal
        open={isModalVisible}
        onClose={handleCancel}
        borderRadius={24}
      >
        <AddNewCaseForm
          visible={isModalVisible}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
        />
      </CustomModal>

      <SubmissionModal open={isPurchaseModalVisible} onClose={handlePurchaseModalClose}>
        <PurchaseCases onSuccess={handleSuccessBuyNow}/>
      </SubmissionModal>

      {showStripeModal && (
        <Elements stripe={stripePromise}>
          <StripeModal
            setshowStripeModal={setshowStripeModal}
            showStripeModal={showStripeModal}
            onSuccess={handleSuccessStripePayment}
            userId={user?.id}
          />
        </Elements>
      )}
    </AuthenticatedLayout>
  );
};

export default OngoingCases;
