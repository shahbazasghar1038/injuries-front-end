import React from 'react'
import AuthenticatedLayout from '../../layout/AuthenticatedLayout'
import Breadcrumb from '../../components/ui/Breadcrumb';
import PatientDetail from './partials/PatientDetail';


const CaseDashboard = () => {

    const breadcrumbLinks = [
        { label: "Home", href: "/" },
        { label: "Lien Resolution", href: "/" },
        { label: "Case Details"},
      ];


  return (
    <AuthenticatedLayout>
        <div className='lg:flex gap-2 justify-between'>
            <p className='fs-20 fw-600 text-blue-39'>Case Dashboard</p>
            <Breadcrumb  links={breadcrumbLinks} />
        </div>

        <div className='mt-6'>
                <PatientDetail />
        </div>

        


    </AuthenticatedLayout>
  )
}

export default CaseDashboard