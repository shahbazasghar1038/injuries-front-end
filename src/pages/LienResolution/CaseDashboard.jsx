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
        <div className="mt-6">
          <p className='fs-16 fw-500 text-blue-39'>Medical Providers</p>
          {/* -----------------------------------------------------------------  */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3 relative">
            <div className="flex flex-col w-[361px] items-center gap-3 pt-2 pb-3 px-2 relative bg-white rounded-2xl overflow-hidden border border-solid border-[#e4e7ec]">
              <div className="flex flex-col items-start gap-3 p-4 self-stretch w-full bg-[#f8f9fb] rounded-lg relative flex-[0_0_auto]">
                <div className="flex items-center gap-3 self-stretch w-full relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-start justify-center gap-1 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-text-xl-bold font-[number:var(--text-xl-bold-font-weight)] text-[#1d2838] text-[length:var(--text-xl-bold-font-size)] tracking-[var(--text-xl-bold-letter-spacing)] leading-[var(--text-xl-bold-line-height)] whitespace-nowrap [font-style:var(--text-xl-bold-font-style)]">
                      Dr. Marina Paul
                    </div>

                    <div className="relative w-fit [font-family:'Outfit',Helvetica] font-medium text-[#98a1b2] text-sm tracking-[0] leading-5 whitespace-nowrap">
                      Orthopedic
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-fit font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#667084] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)] whitespace-nowrap [font-style:var(--text-sm-regular-font-style)]">
                    Treatment Status:
                  </div>

                  <div className="inline-flex items-center justify-center px-2.5 py-0.5 relative flex-[0_0_auto] bg-[#ebfdf2] rounded-[999px]">
                    <div className="relative w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-[#039754] text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                      Completed
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-fit font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#667084] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)] whitespace-nowrap [font-style:var(--text-sm-regular-font-style)]">
                    Lien Offer:
                  </div>

                  <div className="bg-[#ecf3ff] inline-flex items-center justify-center px-2.5 py-0.5 relative flex-[0_0_auto] rounded-[999px]">
                    <div className="mt-[-1.00px] text-[#465fff] text-center relative w-fit font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                      In Progress
                    </div>
                  </div>
                </div>

                <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-start justify-center gap-1 relative flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#667084] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)] whitespace-nowrap [font-style:var(--text-sm-regular-font-style)]">
                        Bill Amount:
                      </div>

                      <div className="mt-[-1.00px] text-[#344053] relative w-fit font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                        - $6,500
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#667084] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)] whitespace-nowrap [font-style:var(--text-sm-regular-font-style)]">
                        Reduced Amount:
                      </div>

                      <div className="mt-[-1.00px] text-[#98a1b2] relative w-fit font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                        -
                      </div>
                    </div>
                  </div>

                  <div className="relative w-fit font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-[#667084] text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                    View offer
                  </div>
                </div>

                <div className="flex items-start gap-6 self-stretch w-full relative flex-[0_0_auto]">
                  <button className="all-[unset] box-border flex items-center justify-center gap-2 px-4 py-3 relative flex-1 grow rounded-lg overflow-hidden border border-solid border-[#e4e7ec]">
                    <div className="mt-[-1.00px] text-[#344053] relative w-fit font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                      Medical records
                    </div>
                  </button>

                  <button className="all-[unset] box-border flex items-center justify-center gap-2 px-4 py-3 relative flex-1 grow rounded-lg overflow-hidden border border-solid border-[#e4e7ec]">
                    <div className="mt-[-1.00px] text-[#344053] relative w-fit font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                      Bills
                    </div>
                  </button>
                </div>

                <div className="inline-flex p-2 absolute top-4 left-[301px] items-center justify-center gap-2 rounded-lg overflow-hidden shadow-shadow-xs">
                  <div className="relative w-5 h-5">
                    <img
                      className="absolute w-3.5 h-3.5 top-0.5 left-1"
                      alt="Icon"
                      src="https://c.animaapp.com/m9vlz8e7aemWY8/img/icon.svg"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[313px] items-start gap-2.5 relative flex-[0_0_auto]">
                <button className="all-[unset] box-border flex px-4 py-3 relative self-stretch w-full flex-[0_0_auto] bg-[#465fff] border-0 border-none items-center justify-center gap-2 rounded-lg overflow-hidden shadow-shadow-xs">
                  <div className="text-white relative w-fit font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                    Negotiate Amount
                  </div>
                </button>
              </div>
            </div>
 
          </div>
          {/* -----------------------------------------------------------------  */}
        </div>

        


    </AuthenticatedLayout>
  )
}

export default CaseDashboard