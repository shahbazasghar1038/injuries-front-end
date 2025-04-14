import React from 'react'
import AuthenticatedLayout from '../../layout/AuthenticatedLayout'
import Breadcrumb from '../../components/ui/Breadcrumb'

const Archieve = () => {

    const breadcrumbLinks = [
        { label: "Home", href: "/" },
        { label: "Archive"},
      ];

  return (
   <>
    <AuthenticatedLayout>
        <div className='lg:flex gap-2 justify-between'>
        <p className='page-heading'>Archive</p>
        <Breadcrumb  links={breadcrumbLinks} />
      </div>
      </AuthenticatedLayout>
   </>
  )
}

export default Archieve