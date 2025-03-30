import React, { useState } from 'react'
import AuthenticatedLayout from '../../layout/AuthenticatedLayout'
import { Icons } from '../../components/svg/Icons'

// At the top of your component, before the return statement
const dropdownAnimation = `
  @keyframes slideDown {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-slideDown {
    animation: slideDown 0.3s ease-out forwards;
  }
`;

const Home = () => {

  // Add state to track which dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle dropdown function
  const toggleDropdown = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };



  const contacts = [
    { initials: "KF", name: "Kierra Franci", phone: "+1 (603) 111-2233", bgColor: "#fdf1f9", textColor: "#dc2590" },
    { initials: "?", name: "Unknown", phone: "+1 (603) 555-0123", bgColor: "white", textColor: "#344053" },
    { initials: "CP", name: "Chance Philips", phone: "+1 (603) 222-3344", bgColor: "#fff5ed", textColor: "#ec4909" },
    { initials: "TG", name: "Terry Geidt", phone: "+1 (603) 333-4455", bgColor: "#ebfdf2", textColor: "#039754" },
    { initials: "KF", name: "Kierra Frances", phone: "+1 (603) 444-5566", bgColor: "#fdf1f9", textColor: "#dc2590" },
    { initials: "TJ", name: "Terry Jones", phone: "+1 (603) 555-6677", bgColor: "#ebfdf2", textColor: "#039754" },
    { initials: "MP", name: "Michael Philips", phone: "+1 (603) 666-7788", bgColor: "#fff5ed", textColor: "#ec4909" },
  ];
  


  const [searchQuery, setSearchQuery] = useState("");

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.phone.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const questions = [
    "What is your first name?",
    "What is your last name?",
    "What is your phone number?",
    "Do you have health insurance?",
    "How old are you?",
    "How bad is your car damaged?",
    "What are your injuries?",
  ];

  // Sample data for dropdown content
  const dropdownContent = [
    {
      paragraph: "This field collects the client's first name for identification purposes.",
      pdfUrl: "/documents/first-name-guidelines.pdf",
      pdfName: "First Name Guidelines.pdf"
    },
    // Add similar content for other questions
    {
      paragraph: "This field collects the client's last name for identification purposes.",
      pdfUrl: "/documents/last-name-guidelines.pdf",
      pdfName: "Last Name Guidelines.pdf"
    },
    // ... add content for all questions
  ];

  return (
    <AuthenticatedLayout>
      <style>{dropdownAnimation}</style>
      <div className='flex justify-between items-center gap-2'>
        <p className='fs-20 fw-600 text-blue-39'>Pre-vetted Cases</p>
        <div className="flex items-center gap-1.5">
          <p className='fs-14 fw-400 text-gray-54'>Home</p>
          <Icons.ArrowRightIcon />
          <p className='fs-14 fw-400 text-blue-39'>Pre-vetted Cases</p>
        </div>
      </div>
      {/* ----------------------------------------------------------------------------- */}
      <div className="content-card-bg flex flex-col items-start relative mt-6">
      <div className="cases-tabs-container">
        <div className="inline-flex items-start gap-1 p-0.5 relative flex-[0_0_auto] bg-[#f2f3f6] rounded-lg">
          <div className="inline-flex h-10 items-center justify-center gap-2 px-4 py-2.5 relative flex-[0_0_auto] bg-white rounded-md shadow-[0px_1px_2px_#1018280d]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Outfit',Helvetica] font-medium text-[#0f1728] text-sm tracking-[0] leading-5 whitespace-nowrap">
              New Cases
            </div>

            <div className="mt-[-1.00px] mb-[-1.00px] bg-[#ecf3ff] inline-flex items-center justify-center px-2 py-0.5 relative flex-[0_0_auto] rounded-[999px]">
              <div className="relative w-fit mt-[-1.00px] font-medium text-[#465fff] text-xs text-center leading-[18px] whitespace-nowrap [font-family:'Outfit',Helvetica] tracking-[0]">
                23
              </div>
            </div>
          </div>

          <div className="inline-flex h-10 items-center justify-center gap-2 px-4 py-2.5 relative flex-[0_0_auto] rounded-md">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Outfit',Helvetica] font-medium text-[#667084] text-sm tracking-[0] leading-5 whitespace-nowrap">
              Archived
            </div>

            <div className="mt-[-1.00px] mb-[-1.00px] bg-white inline-flex items-center justify-center px-2 py-0.5 relative flex-[0_0_auto] rounded-[999px]">
              <div className="relative w-fit mt-[-1.00px] font-medium text-[#667084] text-xs text-center leading-[18px] whitespace-nowrap [font-family:'Outfit',Helvetica] tracking-[0]">
                3
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-wrapper-div">

        <div className="contact-list-main-div">
          <div className="flex flex-col w-[264px] items-start gap-1.5 relative flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center gap-2 px-4 py-2 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg overflow-hidden border border-solid border-[#cfd4dc] shadow-[0px_1px_2px_#1018280d]">
                <div className="flex items-center gap-2 relative flex-1 grow">
                  <div className="relative w-5 h-5">
                    <img
                      className="absolute w-[17px] h-[17px] top-0.5 left-0.5"
                      alt="Icon"
                      src="https://c.animaapp.com/m8ta5gibWvtvPM/img/icon-3.svg"
                    />
                  </div>

                  <input
        className="relative flex-1 mt-[-1.00px] font-normal text-[#98a1b2] text-sm leading-5 [font-family:'Outfit',Helvetica] tracking-[0] [background:transparent] border-[none] p-0"
        placeholder="Search..."
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

                </div>
              </div>
            </div>
          </div>

           
            <div className="h-[720px] gap-1 px-5 py-0 flex flex-col items-start relative self-stretch w-full">
            {filteredContacts.map((contact, index) => (
        <div
          key={index}
          className="flex flex-col items-start gap-[50px] p-3 relative self-stretch w-full flex-[0_0_auto] rounded-lg transition-all duration-300 hover:bg-[var(--Card-Secondary-Background,#F2F4F7)] hover:rounded-[var(--Utilities-Border-Radius-LG,8px)] cursor-pointer"
        >
          <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <div
              className="relative w-12 h-12 rounded-[28px] overflow-hidden"
              style={{ backgroundColor: contact.bgColor }}
            >
              <div
                className="flex items-center justify-center h-full fs-12 fw-600 pink-color"
                style={{ color: contact.textColor }}
              >
                {contact.initials}
              </div>
            </div>

            <div className="flex flex-col items-start justify-center gap-0.5 relative flex-1 grow">
              <div className="relative contact-name">{contact.name}</div>
              <div className="relative contact-phone text-gray-500">{contact.phone}</div>
            </div>
          </div>
        </div>
      ))}
            </div>
        </div>

        <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
          <div className="flex flex-col w-[828px] h-[800px] items-center relative bg-white border-r [border-right-style:solid] border-b [border-bottom-style:solid] border-[#e4e7ec]">
            <div className="flex h-16 items-center gap-4 px-6 py-5 relative self-stretch w-full border-b [border-bottom-style:solid] border-[#e4e7ec]">
              <div className="relative w-5 h-5 bg-[#98a1b2] rounded-[10px]" />

              <div className="flex flex-col items-start gap-1 relative flex-1 grow mt-[-11.00px] mb-[-11.00px]">
                <div className="self-stretch font-medium text-[#1d2838] text-base leading-6 relative mt-[-1.00px] [font-family:'Outfit',Helvetica] tracking-[0]">
                  +1 (603) 555-0123
                </div>

                <div className="flex items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="w-fit font-[number:var(--text-xs-regular-font-weight)] text-[#667084] text-[length:var(--text-xs-regular-font-size)] leading-[var(--text-xs-regular-line-height)] whitespace-nowrap relative mt-[-1.00px] font-text-xs-regular tracking-[var(--text-xs-regular-letter-spacing)] [font-style:var(--text-xs-regular-font-style)]">
                    New Client
                  </div>

                  <div className="w-fit font-[number:var(--text-xs-regular-font-weight)] text-[#465fff] text-[length:var(--text-xs-regular-font-size)] leading-[var(--text-xs-regular-line-height)] whitespace-nowrap relative mt-[-1.00px] font-text-xs-regular tracking-[var(--text-xs-regular-letter-spacing)] [font-style:var(--text-xs-regular-font-style)]">
                    Transferred Call
                  </div>
                </div>
              </div>

              <div className="flex-center relative flex-[0_0_auto] mt-[-8.00px] mb-[-8.00px]">
                <div className="flex-center relative flex-[0_0_auto] overflow-hidden bg--btn">
                  <div className="relative w-6 h-6">
                    <Icons.downloadIcon />
                  </div>
                </div>

                <div className=" relative flex-[0_0_auto] overflow-hidden bg--btn">
                  <div className="relative w-6 h-6">
                    <Icons.DeleteIcon />
                  </div>
                </div>

                <button className="btn btn-primary btn-sm">
                    Accept
                </button>
              </div>
            </div>

            <div className="flex flex-col h-[688px] items-start gap-6 p-6 relative self-stretch w-full bg-white overflow-hidden overflow-y-scroll">
              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-text-md-medium font-[number:var(--text-md-medium-font-weight)] text-[#1d2838] text-[length:var(--text-md-medium-font-size)] tracking-[var(--text-md-medium-letter-spacing)] leading-[var(--text-md-medium-line-height)] whitespace-nowrap [font-style:var(--text-md-medium-font-style)]">
                    Intake
                  </div>
                </div>

                <div className="flex w-24 items-center justify-between relative">
                  <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
                    <div className="flex p-2.5 self-stretch w-full bg-white rounded-lg items-center justify-center gap-2 relative flex-[0_0_auto] overflow-hidden border-0 border-none">
                      <div className="relative w-5 h-5">
                        <img
                          className="absolute w-[15px] h-[15px] top-[3px] left-[3px]"
                          alt="Icon"
                          src="https://c.animaapp.com/m8ta5gibWvtvPM/img/icon-14.svg"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex p-2.5 bg-[#ecf3ff] rounded-[999px] items-center justify-center gap-2 relative flex-[0_0_auto] overflow-hidden border-0 border-none">
                    <div className="relative w-5 h-5">
                      <img
                        className="absolute w-3 h-3 top-1 left-1"
                        alt="Icon"
                        src="https://c.animaapp.com/m8ta5gibWvtvPM/img/icon-5.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-col items-start gap-3 flex relative self-stretch w-full flex-[0_0_auto]">
                  {questions.map((question, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-start w-full"
                    >
                      <div
                        className="p-5 w-full bg-white rounded-xl border border-solid border-[#e4e7ec] shadow-shadows-shadow-sm relative flex-[0_0_auto]"
                      >
                        <div className='flex items-center gap-5  self-stretch'>
                            <div className="flex items-center gap-4 relative flex-1 grow">
                              <div 
                                className="inline-flex items-center gap-3 relative flex-[0_0_auto] cursor-pointer"
                                onClick={() => toggleDropdown(index)}
                              >
                                <Icons.ArrowRightIcon className="cursor-pointer" />
                                <p className="relative w-fit mt-[-1.00px] font-text-md-regular text-[#1d2838] cursor-pointer">
                                  {question}
                                </p>
                              </div>
                            </div>

                            <div className="inline-flex items-center justify-center px-2 py-0.5 bg-[#fff9eb] rounded-[999px]">
                              <div className="font-medium text-[#db6803] text-xs text-center leading-[18px] whitespace-nowrap">
                                Pending
                              </div>
                            </div>

                            <div className="relative w-6 h-6 cursor-pointer">
                              <Icons.EditIcon />
                            </div>

                            <div className="relative w-6 h-6 cursor-pointer">
                              <Icons.DelBoxIcon />
                            </div>
                        </div>
                          {/* <div className="flex flex-col gap-2">
                              <p className="text-gray-700 mb-3">{dropdownContent[index]?.paragraph || "Additional information about this question."}</p>
                              <div className="flex items-center gap-2 bg-white p-2 rounded border border-gray-200">
                                <Icons.downloadIcon className="w-5 h-5 text-blue-500" />
                                <a href={dropdownContent[index]?.pdfUrl || "#"} className="text-blue-500 hover:underline" download>
                                  {dropdownContent[index]?.pdfName || "Documentation.pdf"}
                                </a>
                              </div>
                          </div> */}
                      </div>
                      
                      {/* Dropdown content */}
                      {openDropdown === index && (
                        <div className="overflow-hidden transition-all duration-300 ease-in-out transform origin-top">
                          <div className="mt-2 animate-slideDown">
                            <p className="text-gray-700 mb-3">{dropdownContent[index]?.paragraph || "Additional information about this question."}</p>
                            <div className="flex items-center gap-2 bg-white p-2 rounded border border-gray-200">
                              <Icons.downloadIcon className="w-5 h-5 text-blue-500" />
                              <a href={dropdownContent[index]?.pdfUrl || "#"} className="text-blue-500 hover:underline" download>
                                {dropdownContent[index]?.pdfName || "Documentation.pdf"}
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* ----------------------------------------------------------------------------- */}
    </AuthenticatedLayout>
  )
}

export default Home