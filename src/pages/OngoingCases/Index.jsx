import React from 'react'
import AuthenticatedLayout from '../../layout/AuthenticatedLayout'
import Breadcrumb from './partials/Breadcrumb';

const OngoingCases = () => {
  const breadcrumbLinks = [
    { label: "Home", href: "/" },
    { label: "Ongoing Cases", href: "/cases" },
    { label: "Case Details" },
  ];
  return (
    <AuthenticatedLayout>
      <div className='flex justify-between'>

        <p className='page-heading'>Ongoing Cases</p>
        <Breadcrumb  links={breadcrumbLinks} />
      </div>
    </AuthenticatedLayout>
  )
}

export default OngoingCases