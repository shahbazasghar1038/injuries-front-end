"use client"

import { useEffect, useState } from "react"
import { Avatar, Button, Card, message } from "antd"
import { EditOutlined } from "@ant-design/icons"
import EditPersonalInfo from "./partials/EditPersonalInfo"
import EditAddress from "./partials/EditAddress"
import CustomModal from "../../../components/ui/CustomModal"
import AuthenticatedLayout from "../../../layout/AuthenticatedLayout"
import SettingsLayout from "../../../layout/SettingsLayout"
import { useDispatch, useSelector } from "react-redux"
import placeholder from '../../../assets/img/placeholder.png'
import { getAllCases, updateUser } from "../../../services/cases"
import { getSingleUser } from "../../../services/auth"
import { setAuthData } from "../../../store/authSlice"

export default function UserProfile() {
  const dispatch = useDispatch();

  const storeUser = useSelector((state) => state.auth.user); // Add this line to select the user
  const [user, setUser] = useState(storeUser);
  const isDoctor = user?.role === 'Doctor'; // Check if the user is a doctor
  const token = useSelector((state) => state.auth.token);

  const fetchSingleUser = () => {
    getSingleUser(user?.id)
      .then((response) => {
        console.log("single user resp : ", response);
          dispatch(
                  setAuthData({
                    user: response.user, // Assuming the API returns user data
                    token: token,
                  })
                );
        // setUser(response);
      })
      .catch((err) => {
        console.error("Error fetching cases:", err);
        setError("Failed to fetch cases. Please try again later.");
      });
  };



  const [userData, setUserData] = useState({
    firstName: user?.fullName,
    // lastName: "Boruch",
    email: user?.email,
    phone: user?.phone ,
    bio: user?.bio || 'N/A',
    role: user?.role,
    street: user?.Addresses[0]?.streetAddress,
    state: user?.Addresses[0]?.state,
    zipCode: user?.Addresses[0]?.zipCode,
    speciality: user?.speciality || 'N/A',
    texId: user?.texID || "Not added yet",
  })

  const [personalInfoModalOpen, setPersonalInfoModalOpen] = useState(false)
  const [addressModalOpen, setAddressModalOpen] = useState(false)

  const handlePersonalInfoUpdate = (updatedInfo) => {
    setUserData({ ...userData, ...updatedInfo })
    console.log('as;ldfjs' , updatedInfo)
    let model ={
      userData:{
        fullName: updatedInfo.firstName,
        phonNumber: updatedInfo.phone,
        bio: updatedInfo.bio, 
        speciality: updatedInfo.speciality,
      }
    }
    
    updateUser(user?.id , model)
    .then((response) => {
      message.success(response?.message || "Personal info updated successfully");
      fetchSingleUser()
      setPersonalInfoModalOpen(false)
    })
    .catch((err) => {
        message.error(err?.message || "personal failed");
        console.error("Error personal info:", err);
        setError("Failed to personal info. Please try again.");
      });
  }


  const handleAddressUpdate = (updatedAddress) => {
    setUserData({ ...userData, ...updatedAddress })
    
    let model ={
      addresses:{
        streetAddress: updatedAddress.street,
        state: updatedAddress.state,
        zipCode: updatedAddress.zipCode,
        texID: updatedAddress.taxId,
      }
    }
    
    updateUser(user?.id , model)
    .then((response) => {
      message.success(response?.message || "Address updated successfully");
      fetchSingleUser()
      setAddressModalOpen(false)
    })
    .catch((err) => {
        message.error(err?.message || "Address update failed");
        console.error("Error Address update:", err);
        setError("Failed to Address update. Please try again.");
      });


  }

  return (
    <SettingsLayout>
        <div className="min-h-screen">
          <Card className="mb-6 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 h-fit md:h-[80px] ">
              <img
                src={placeholder}
                className="border-2 border-gray-200 h-11 md:h-[80px] rounded-full "
              />
              <div className="text-center sm:text-left flex flex-col justify-center h-full">
                <h1 className="fs-18 fw-600 text-blue-39">
                  {userData.firstName}  
                </h1>
                {/* <p className="text-gray-600">{userData.bio}</p> */}
                <p className="fs-14 fw-400 text-blue-85 mt-2">
                {isDoctor ? userData?.speciality : userData?.bio} | {user?.Addresses[0]?.state}
                </p>
              </div>
            </div>
          </Card>

          <Card className="mb-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="fs-18 fw-600 text-blue-39">Personal Information</h2>
              <Button
                type="text"
                icon={<EditOutlined />}
                onClick={() => setPersonalInfoModalOpen(true)}
                className="flex items-center"
              >
                Edit
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="fs-12 fw-400 text-blue-85 mb-2">First Name</p>
                <p className="fs-14 fw-500 text-blue-39">{userData.firstName}</p>
              </div>
              {/* <div>
                <p className="fs-12 fw-400 text-blue-85 mb-2">Last Name</p>
                <p>{userData.lastName}</p>
              </div> */}
              <div>
                <p className="fs-12 fw-400 text-blue-85 mb-2">Email address</p>
                <p className="fs-14 fw-500 text-blue-39">{userData.email}</p>
              </div>
              <div>
                <p className="fs-12 fw-400 text-blue-85 mb-2">Phone</p>
                <p className="fs-14 fw-500 text-blue-39">{userData.phone}</p>
              </div>
              <div className="">
                <p className="fs-12 fw-400 text-blue-85 mb-2">{isDoctor ? 'Specialty' : 'Law Firm Name'} </p>
                <p className="fs-14 fw-500 text-blue-39">{isDoctor ? userData?.speciality : userData.bio}</p>
              </div>
            </div>
          </Card>

          <Card className="shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="fs-18 fw-600 text-blue-39">Address</h2>
              <Button
                type="text"
                icon={<EditOutlined />}
                onClick={() => setAddressModalOpen(true)}
                className="flex items-center"
              >
                Edit
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="fs-12 fw-400 text-blue-85 mb-2">Street</p>
                <p className="fs-14 fw-500 text-blue-39">{userData.street}</p>
              </div>
              <div>
                <p className="fs-12 fw-400 text-blue-85 mb-2">City/State</p>
                <p className="fs-14 fw-500 text-blue-39">{userData.state}</p>
              </div>
              <div>
                <p className="fs-12 fw-400 text-blue-85 mb-2">Postal Code</p>
                <p className="fs-14 fw-500 text-blue-39">{userData.zipCode}</p>
              </div>
             {!isDoctor &&
              <div>
                <p className="fs-12 fw-400 text-blue-85 mb-2">TAX ID</p>
                <p className="fs-14 fw-500 text-blue-39">{userData.taxId}</p>
              </div>}
            </div>
          </Card>

    <CustomModal 
    open={personalInfoModalOpen}
    onClose={() => setPersonalInfoModalOpen(false)}
    >
          <EditPersonalInfo
            open={personalInfoModalOpen}
            onClose={() => setPersonalInfoModalOpen(false)}
            onSave={handlePersonalInfoUpdate}
            initialData={userData}
          />

    </CustomModal>



    <CustomModal 
    open={addressModalOpen}
    onClose={() => setAddressModalOpen(false)}
    onSave={handleAddressUpdate}
    >
          <EditAddress
            open={addressModalOpen}
            onClose={() => setAddressModalOpen(false)}
            onSave={handleAddressUpdate}
            initialData={userData}
          />

    </CustomModal>

        </div>
    </SettingsLayout>
  )
}
