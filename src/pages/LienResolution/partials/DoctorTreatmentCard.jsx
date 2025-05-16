import React from 'react';
import { Link } from 'react-router-dom';
import icon1 from '../../../assets/icons/clipboard-icon.svg';
import icon2 from '../../../assets/icons/bills.svg';
import icon3 from '../../../assets/icons/stethoscope-alt.svg';
 

const DoctorTreatmentCard = ({ treatments = [
  {
    id: 1,
    icon: icon1,
    title: 'Medical Records',
    description: 'Easily upload and share patient medical records.',
    action: 'Upload',
    link: '/'
  },
  {
    id: 2,
    icon: icon2,
    title: 'Medical Bills',
    description: 'Easily upload and share patient medical bills..',
    action: 'Upload',
    link: '/'
  },
  {
    id: 2,
    icon: icon3,
    title: 'Treatment Status',
    description: 'Update and track patient treatment status.',
    action: 'Add details',
    link: '/'
  }
] }) => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {treatments.map((treatment) => (
        <div key={treatment.id} className="doctor-treatment-card">
            <div className='icon-bg mb-5'>
                <img src={treatment.icon} alt="" />
               
            </div>
            <p className='fs-20 fw-500 text-blue-39 mb-2'>{treatment.title}</p>
            <p className='fs-14 fw-400 text-blue-85 mb-5'>{treatment.description}</p>
            <Link to={treatment.link} className='flex items-center gap-1 fs-14 fw-500 text-gray-54'>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00104 1.91797C7.78669 1.91797 7.59334 2.00789 7.45666 2.15207L4.38624 5.22053C4.09326 5.51333 4.0931 5.98821 4.3859 6.28119C4.6787 6.57418 5.15358 6.57433 5.44656 6.28153L7.25104 4.4782L7.25104 10.668C7.25104 11.0822 7.58683 11.418 8.00104 11.418C8.41525 11.418 8.75104 11.0822 8.75104 10.668L8.75104 4.48092L10.5529 6.28155C10.8459 6.57434 11.3208 6.57417 11.6136 6.28118C11.9064 5.98818 11.9062 5.51331 11.6132 5.22052L8.57085 2.18028C8.43329 2.01971 8.22905 1.91797 8.00104 1.91797ZM3.41638 10.668C3.41638 10.2538 3.0806 9.91797 2.66638 9.91797C2.25217 9.91797 1.91638 10.2538 1.91638 10.668V11.8346C1.91638 13.0773 2.92374 14.0846 4.16638 14.0846H11.8336C13.0763 14.0846 14.0836 13.0773 14.0836 11.8346V10.668C14.0836 10.2538 13.7478 9.91797 13.3336 9.91797C12.9194 9.91797 12.5836 10.2538 12.5836 10.668V11.8346C12.5836 12.2488 12.2478 12.5846 11.8336 12.5846H4.16638C3.75217 12.5846 3.41638 12.2488 3.41638 11.8346V10.668Z" fill="#344054"/>
                    </svg>
                </span>
                {treatment.action}
            </Link>
        </div>
      ))}
    </div>
  )
}

export default DoctorTreatmentCard