import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "../../layout/AuthenticatedLayout";
import Breadcrumb from "../../components/ui/Breadcrumb";
import { Avatar, Button, Input } from "antd";
import {
  ArrowRightOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import CaseCard from "./partials/CaseCard";
import CustomModal from "../../components/ui/CustomModal";
import AddNewCaseForm from "./partials/AddNewCaseForm";
import { useSelector } from "react-redux";
import { getAllCases } from "../../services/cases";

const LienResolution = () => {
  const user = useSelector((state) => state.auth.user); // Add this line to select the user

  const [cases, setCases] = useState([]); // State to store cases
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchAllCases();
  }, []);

  const fetchAllCases = () => {
    getAllCases(user?.id)
      .then((response) => {
        console.log("resp  lien : ", response);
        setCases(response);
      })
      .catch((err) => {
        console.error("Error fetching cases:", err);
        setError("Failed to fetch cases. Please try again later.");
      });
  };

  const filteredCases = cases.filter((c) =>
    c.fullName?.toLowerCase().includes(search.toLowerCase())
  );
  const breadcrumbLinks = [
    { label: "Home", href: "/" },
    { label: "Lien Resolution" },
  ];

  return (
    <AuthenticatedLayout>
      <div className="lg:flex gap-2 justify-between">
        <p className="fs-20 fw-600 text-blue-39">Lien Resolution</p>
        <Breadcrumb links={breadcrumbLinks} />
      </div>

      <div className="p-6 bg-white rounded-xl shadow-sm mt-6  ">
        <div className="lg:flex xl:flex justify-between items-center relative mb-3">
          <div className="flex flex-col w-full">
            <h1 className="fs-16 fw-500 text-blue-39">Cases</h1>
          </div>

          <div className="flex  md:flex-row flex-col justify-end gap-4 w-full">
            <Input
              placeholder="Search by Name, Speciality or Address"
              prefix={<SearchOutlined className="text-gray-400" />}
              className=" md:max-w-sm order-1 md:order-0"
              size="large"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <hr />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-4 mt-6">
          {filteredCases.map((caseItem) => (
            <CaseCard key={caseItem.id} caseItem={caseItem} />
          ))}
        </div>
        {error && <div className="text-red-500 mt-4">{error}</div>}
      </div>
    </AuthenticatedLayout>
  );
};

export default LienResolution;
