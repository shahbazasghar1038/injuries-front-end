"use client"

import { useState } from "react"
import { Avatar, Button, Card } from "antd"
import { EditOutlined } from "@ant-design/icons"
import EditPersonalInfo from "./partials/EditPersonalInfo"
import EditAddress from "./partials/EditAddress"
import CustomModal from "../../../components/ui/CustomModal"
import AuthenticatedLayout from "../../../layout/AuthenticatedLayout"
import SettingsLayout from "../../../layout/SettingsLayout"

export default function UserProfile() {
  const [userData, setUserData] = useState({
    firstName: "Emirhan",
    lastName: "Boruch",
    email: "emirhanboruch55@gmail.com",
    phone: "+09 363 398 46",
    bio: "Team Manager",
    country: "United Kingdom",
    city: "Leeds, East London",
    postalCode: "ERT 2489",
    taxId: "AS4568384",
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
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <Avatar
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-83blJX1WvAAyInDTx0RK0Md9DUtYDN.png"
                size={80}
                className="border-2 border-gray-200"
              />
              <div className="text-center sm:text-left">
                <h1 className="text-xl font-semibold">
                  {userData.firstName} {userData.lastName}
                </h1>
                <p className="text-gray-600">{userData.bio}</p>
                <p className="text-gray-600">
                  {userData.city.split(",")[0]}, {userData.country}
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
              <div>
                <p className="text-gray-500 text-sm">Last Name</p>
                <p>{userData.lastName}</p>
              </div>
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
                <p className="text-gray-500 text-sm">Country</p>
                <p>{userData.country}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">City/State</p>
                <p>{userData.city}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Postal Code</p>
                <p>{userData.postalCode}</p>
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
