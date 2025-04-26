"use client"

import { useState } from "react"
import { Avatar, Button, Card } from "antd"
import { EditOutlined } from "@ant-design/icons"
import EditPersonalInfo from "./partials/EditPersonalInfo"
import EditAddress from "./partials/EditAddress"
import CustomModal from "../../../components/ui/CustomModal"
import AuthenticatedLayout from "../../../layout/AuthenticatedLayout"
import SettingsLayout from "../../../layout/SettingsLayout"
import { useSelector } from "react-redux"
import placeholder from '../../../assets/img/placeholder.png'

export default function UserProfile() {
  const user = useSelector((state) => state.auth.user); // Add this line to select the user
console.log('user :' ,  user)
  const [userData, setUserData] = useState({
    firstName: user?.fullName,
    // lastName: "Boruch",
    email: user?.email,
    phone: user?.phone ,
    bio: user?.bio || 'N/A',
    street: user?.Addresses[0]?.streetAddress,
    state: user?.Addresses[0]?.state,
    zipCode: user?.Addresses[0]?.zipCode,
    taxId: user?.textID || "Not added yet",
  })

  const [personalInfoModalOpen, setPersonalInfoModalOpen] = useState(false)
  const [addressModalOpen, setAddressModalOpen] = useState(false)

  const handlePersonalInfoUpdate = (updatedInfo) => {
    setUserData({ ...userData, ...updatedInfo })
    setPersonalInfoModalOpen(false)
  }

  const handleAddressUpdate = (updatedAddress) => {
    setUserData({ ...userData, ...updatedAddress })
    setAddressModalOpen(false)
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
                <h1 className="text-xl font-semibold">
                  {userData.firstName}  
                </h1>
                {/* <p className="text-gray-600">{userData.bio}</p> */}
                <p className="text-gray-600 mt-2">
                {userData?.bio} | {user?.Addresses[0]?.state}
                </p>
              </div>
            </div>
          </Card>

          <Card className="mb-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Personal Information</h2>
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
                <p className="text-gray-500 text-sm">First Name</p>
                <p>{userData.firstName}</p>
              </div>
              {/* <div>
                <p className="text-gray-500 text-sm">Last Name</p>
                <p>{userData.lastName}</p>
              </div> */}
              <div>
                <p className="text-gray-500 text-sm">Email address</p>
                <p>{userData.email}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Phone</p>
                <p>{userData.phone}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-500 text-sm">Bio</p>
                <p>{userData.bio}</p>
              </div>
            </div>
          </Card>

          <Card className="shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Address</h2>
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
                <p className="text-gray-500 text-sm">Street</p>
                <p>{userData.street}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">City/State</p>
                <p>{userData.state}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Postal Code</p>
                <p>{userData.zipCode}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">TAX ID</p>
                <p>{userData.taxId}</p>
              </div>
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
