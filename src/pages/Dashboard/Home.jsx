import React, { useState } from 'react'
import AuthenticatedLayout from '../../layout/AuthenticatedLayout'
import { Icons } from '../../components/svg/Icons'
import ActionModal from '../../components/ui/ActionModal'

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
  // Add state for active tab
  const [activeTab, setActiveTab] = useState("new");

  const contacts = [
    { initials: "KF", name: "Kierra Franci", phone: "+1 (603) 111-2233", bgColor: "#fdf1f9", textColor: "#dc2590" },
    { initials: "?", name: "Unknown", phone: "+1 (603) 555-0123", bgColor: "white", textColor: "#344053" },
    { initials: "CP", name: "Chance Philips", phone: "+1 (603) 222-3344", bgColor: "#fff5ed", textColor: "#ec4909" },
    { initials: "TG", name: "Terry Geidt", phone: "+1 (603) 333-4455", bgColor: "#ebfdf2", textColor: "#039754" },
    { initials: "KF", name: "Kierra Frances", phone: "+1 (603) 444-5566", bgColor: "#fdf1f9", textColor: "#dc2590" },
    { initials: "TJ", name: "Terry Jones", phone: "+1 (603) 555-6677", bgColor: "#ebfdf2", textColor: "#039754" },
    { initials: "MP", name: "Michael Philips", phone: "+1 (603) 666-7788", bgColor: "#fff5ed", textColor: "#ec4909" },
  ];

  // Create separate arrays for new and archived contacts
  const archivedContacts = [
    { initials: "AR", name: "Archived User", phone: "+1 (603) 999-8877", bgColor: "#f0f4ff", textColor: "#465fff" },
    { initials: "OA", name: "Old Account", phone: "+1 (603) 888-7766", bgColor: "#ebfdf2", textColor: "#039754" },
    { initials: "DA", name: "Deleted Account", phone: "+1 (603) 777-6655", bgColor: "#fdf1f9", textColor: "#dc2590" },
  ];

  // Instead of using the contacts array directly, maintain it in state so we can modify it
  const [contactsList, setContactsList] = useState(contacts);
  const [archivedList, setArchivedList] = useState(archivedContacts);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // Initialize selectedContact based on activeTab
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  // Add state to track deleted questions
  const [deletedQuestions, setDeletedQuestions] = useState({});
  
  // Instead of a static questions array, let's create a function that generates questions based on selected contact
  const getContactQuestions = (contact) => {
    if (!contact) return [];
    
    return [
      { 
        id: 1, 
        question: "What is your first name?", 
        answer: contact.name.split(' ')[0], // Extract first name from full name
        status: "Completed" 
      },
      { 
        id: 2, 
        question: "What is your last name?", 
        answer: contact.name.split(' ').length > 1 ? contact.name.split(' ')[1] : "N/A", // Extract last name if available
        status: "Pending" 
      },
      { 
        id: 3, 
        question: "What is your phone number?", 
        answer: contact.phone, 
        status: "Completed" 
      },
      { 
        id: 4, 
        question: "When did the incident occur?", 
        answer: `Last ${contact.name.length > 5 ? "Thursday" : "Monday"} around ${contact.phone.slice(-1)}pm.`, // Just an example of dynamic content
        status: "Pending" 
      }
    ];
  };

  // Track which questions are open
  const [openQuestions, setOpenQuestions] = useState({});
  
  // Get questions for the selected contact
  const currentQuestions = getContactQuestions(selectedContact);
  
  // Filter out deleted questions
  const filteredQuestions = currentQuestions.filter(
    question => !deletedQuestions[`${selectedContact.phone}-${question.id}`]
  );

  const toggleQuestion = (id) => {
    setOpenQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
    // Reset open questions when switching contacts
    setOpenQuestions({});
  };

  // Add this function to handle question deletion
  const handleDeleteQuestion = (questionId) => {
    setDeletedQuestions(prev => ({
      ...prev,
      [`${selectedContact.phone}-${questionId}`]: true
    }));
  };

  // Add state for delete confirmation modal
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  
  // Modify the handleDeleteContact function to show modal instead of deleting immediately
  const handleDeleteContact = () => {
    if (!selectedContact) return;
    // Show confirmation modal
    setDeleteModalVisible(true);
  };
  
  // Add function to handle actual deletion after confirmation
  const confirmDeleteContact = () => {
    // Remove the contact from the list
    const updatedContacts = contactsList.filter(contact => contact.phone !== selectedContact.phone);
    setContactsList(updatedContacts);
    
    // Select the first contact from the remaining list or set to null if empty
    if (updatedContacts.length > 0) {
      setSelectedContact(updatedContacts[0]);
    } else {
      setSelectedContact(null);
    }
    
    // Reset any open questions
    setOpenQuestions({});
    
    // Close the modal
    setDeleteModalVisible(false);
  };
  
  // Get the current list based on active tab
  const currentList = activeTab === "new" ? contactsList : archivedList;
  
  // Filter contacts based on search query from the current list
  const filteredContacts = currentList.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.phone.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Update tab switching to set the first contact as active
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    
    // Reset search query when switching tabs
    setSearchQuery("");
    
    // Select first contact from the appropriate list
    if (tab === "new" && contactsList.length > 0) {
      setSelectedContact(contactsList[0]);
    } else if (tab === "archived" && archivedList.length > 0) {
      setSelectedContact(archivedList[0]);
    } else {
      // If the selected list is empty, set selectedContact to null
      setSelectedContact(null);
    }
    
    // Reset open questions when switching tabs
    setOpenQuestions({});
  };

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
            <div 
              className={`new-cases-btn cursor-pointer inline-flex h-10 items-center justify-center gap-2 px-4 py-2.5 relative flex-[0_0_auto] ${
                activeTab === "new" ? "bg-white rounded-md shadow-[0px_1px_2px_#1018280d]" : "bg-transparent"
              }`}
              onClick={() => handleTabChange("new")}
            >
              <div className={`relative w-fit mt-[-1.00px] [font-family:'Outfit',Helvetica] font-medium ${
                activeTab === "new" ? "text-[#0f1728]" : "text-[#667084]"
              } text-sm tracking-[0] leading-5 whitespace-nowrap`}>
                New Cases
              </div>

              <div className={`mt-[-1.00px] mb-[-1.00px] inline-flex items-center justify-center px-2 py-0.5 relative flex-[0_0_auto] rounded-[999px] ${
                activeTab === "new" ? "bg-[#ECF3FF]" : "bg-white"
              }`}>
                <div className={`relative w-fit mt-[-1.00px] font-medium text-xs text-center leading-[18px] whitespace-nowrap [font-family:'Outfit',Helvetica] tracking-[0] ${
                  activeTab === "new" ? "text-[#465FFF]" : "text-[#667085]"
                }`}>
                  {contactsList.length}
                </div>
              </div>
            </div>

            <div 
              className={`archived-btn cursor-pointer inline-flex h-10 items-center justify-center gap-2 px-4 py-2.5 relative flex-[0_0_auto] ${
                activeTab === "archived" ? "bg-white rounded-md shadow-[0px_1px_2px_#1018280d]" : "bg-transparent"
              }`}
              onClick={() => handleTabChange("archived")}
            >
              <div className={`relative w-fit mt-[-1.00px] [font-family:'Outfit',Helvetica] font-medium ${
                activeTab === "archived" ? "text-[#0f1728]" : "text-[#667084]"
              } text-sm tracking-[0] leading-5 whitespace-nowrap`}>
                Archived
              </div>

              <div className={`mt-[-1.00px] mb-[-1.00px] inline-flex items-center justify-center px-2 py-0.5 relative flex-[0_0_auto] rounded-[999px] ${
                activeTab === "archived" ? "bg-[#ECF3FF]" : "bg-white"
              }`}>
                <div className={`relative w-fit mt-[-1.00px] font-medium text-xs text-center leading-[18px] whitespace-nowrap [font-family:'Outfit',Helvetica] tracking-[0] ${
                  activeTab === "archived" ? "text-[#465FFF]" : "text-[#667085]"
                }`}>
                  {archivedList.length}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -----------------CONTENT WRAPPER DIV------------------------------------------------------------ */}
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

            {/* ---------------CONTACT LIST  -----------------------------  */}
            <div className="h-[720px] gap-1 px-5 py-0 flex flex-col items-start relative self-stretch w-full">
              {filteredContacts.map((contact, index) => (
                <div
                  key={index}
                  className={`contact-list-item flex flex-col items-start gap-[50px] p-3 relative self-stretch w-full flex-[0_0_auto] rounded-lg transition-all duration-300 hover:bg-[var(--Card-Secondary-Background,#F2F4F7)] hover:rounded-[var(--Utilities-Border-Radius-LG,8px)] cursor-pointer ${
                    selectedContact && selectedContact.phone === contact.phone ? 'active bg-[var(--Card-Secondary-Background,#F2F4F7)] rounded-[var(--Utilities-Border-Radius-LG,8px)]' : ''
                  }`}
                  onClick={() => handleContactSelect(contact)}
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
            {/* ---------------CONTACT LIST  -----------------------------  */}

          </div>

          <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
            <div className="contact-detail-div flex flex-col w-[828px] h-[800px] items-center relative bg-white border-r [border-right-style:solid] border-b [border-bottom-style:solid] border-[#e4e7ec]">
              <div className="flex h-16 items-center gap-4 px-6 py-5 relative self-stretch w-full border-b [border-bottom-style:solid] border-[#e4e7ec]">
                <div className="relative w-5 h-5 bg-[#98a1b2] rounded-[10px]" />

                <div className="flex flex-col items-start gap-1 relative flex-1 grow mt-[-11.00px] mb-[-11.00px]">
                  <div className="self-stretch font-medium text-[#1d2838] text-base leading-6 relative mt-[-1.00px] [font-family:'Outfit',Helvetica] tracking-[0]">
                    {selectedContact ? selectedContact.name : "No contact selected"}
                  </div>

                  <div className="flex items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="w-fit font-[number:var(--text-xs-regular-font-weight)] text-[#667084] text-[length:var(--text-xs-regular-font-size)] leading-[var(--text-xs-regular-line-height)] whitespace-nowrap relative mt-[-1.00px] font-text-xs-regular tracking-[var(--text-xs-regular-letter-spacing)] [font-style:var(--text-xs-regular-font-style)]">
                      {selectedContact ? selectedContact.phone : ""}
                    </div>

                    {/* Only show "Transferred Call" text in New Cases tab */}
                    {selectedContact && activeTab === "new" && (
                      <div className="w-fit font-[number:var(--text-xs-regular-font-weight)] text-[#465fff] text-[length:var(--text-xs-regular-font-size)] leading-[var(--text-xs-regular-line-height)] whitespace-nowrap relative mt-[-1.00px] font-text-xs-regular tracking-[var(--text-xs-regular-letter-spacing)] [font-style:var(--text-xs-regular-font-style)]">
                        Transferred Call
                      </div>
                    )}
                  </div>
                </div>

                {/* Show action buttons for New Cases tab */}
                {selectedContact && activeTab === "new" && (
                  <div className="flex-center relative flex-[0_0_auto] mt-[-8.00px] mb-[-8.00px]">
                    <div className="flex-center relative flex-[0_0_auto] overflow-hidden bg--btn">
                      <div className="relative w-6 h-6">
                        <Icons.downloadIcon />
                      </div>
                    </div>

                    <div 
                      className="case-delete-btn relative flex-[0_0_auto] overflow-hidden bg--btn cursor-pointer"
                      onClick={handleDeleteContact}
                    >
                      <div className="relative w-6 h-6">
                        <Icons.DeleteIcon />
                      </div>
                    </div>

                    <button className="btn btn-primary btn-sm">
                      Accept
                    </button>
                  </div>
                )}
                
                {/* Show vertical ellipsis menu for Archive tab */}
                {selectedContact && activeTab === "archived" && (
                  <div 
                    className="flex-center relative flex-[0_0_auto] mt-[-8.00px] mb-[-8.00px] cursor-pointer"
                    onClick={() => {
                      // Handle the vertical menu click action
                      console.log("Archive actions menu clicked");
                      // Could show a popup menu with archive-specific actions
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path 
                        fill-rule="evenodd" 
                        clip-rule="evenodd" 
                        d="M8.24512 5C8.24512 4.0335 9.02862 3.25 9.99512 3.25H10.0035C10.9699 3.25 11.7535 4.0335 11.7535 5C11.7535 5.9665 10.9699 6.75 10.0035 6.75H9.99512C9.02862 6.75 8.24512 5.9665 8.24512 5ZM8.24512 15C8.24512 14.0335 9.02862 13.25 9.99512 13.25H10.0035C10.9699 13.25 11.7535 14.0335 11.7535 15C11.7535 15.9665 10.9699 16.75 10.0035 16.75H9.99512C9.02862 16.75 8.24512 15.9665 8.24512 15ZM9.99512 8.25C9.02862 8.25 8.24512 9.0335 8.24512 10C8.24512 10.9665 9.02862 11.75 9.99512 11.75H10.0035C10.9699 11.75 11.7535 10.9665 11.7535 10C11.7535 9.0335 10.9699 8.25 10.0035 8.25H9.99512Z" 
                        fill="#667085"
                      />
                    </svg>
                  </div>
                )}
              </div>

              <div className="flex flex-col h-[688px] items-start gap-6 p-6 relative self-stretch w-full bg-white overflow-hidden overflow-y-scroll">
                <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-text-md-medium font-[number:var(--text-md-medium-font-weight)] text-[#1d2838] text-[length:var(--text-md-medium-font-size)] tracking-[var(--text-md-medium-letter-spacing)] leading-[var(--text-md-medium-line-height)] whitespace-nowrap [font-style:var(--text-md-medium-font-style)]">
                      Intake
                    </div>
                  </div>

                  {/* Only show the Intake action icons in New Cases tab */}
                  {activeTab === "new" && (
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
                  )}
                </div>

               
                {/* ------------------------------------------------------------- */}
                {filteredQuestions.map((item) => (
                  <div key={item.id} className="flex items-center gap-5 p-5 w-full relative bg-white rounded-xl border border-solid border-[#e4e7ec] shadow-shadows-shadow-sm">
                    <div className="flex items-center gap-4 relative flex-1 grow">
                      <div className="items-start gap-3 flex-1 grow flex relative">
                        <div className={`cursor-pointer ${openQuestions[item.id] ? 'hidden' : ''}`} onClick={() => toggleQuestion(item.id)}>
                          <Icons.QuestionIconRIght />
                        </div>
                        <div className={`cursor-pointer ${openQuestions[item.id] ? '' : 'hidden'}`} onClick={() => toggleQuestion(item.id)}>
                          <Icons.QuestionDropDown />
                        </div>
                        <div className="flex flex-col items-start justify-center gap-1 relative flex-1 grow">
                          <div className="items-center gap-2.5 self-stretch w-full flex-[0_0_auto] flex relative">
                            <p className="text-question cursor-pointer relative w-fit "
                               onClick={() => toggleQuestion(item.id)}>
                              {item.question}
                            </p>
                          </div>

                          <div className={`dropdown-content items-center justify-center gap-2.5 self-stretch w-full flex-[0_0_auto] flex relative ${openQuestions[item.id] ? 'animate-slideDown' : 'hidden'}`}>
                            <p className="relative flex-1 text">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Only show status badges in New Cases tab */}
                    {activeTab === "new" && (
                      <div 
                        className={`inline-flex items-center justify-center px-2 py-0.5 relative flex-[0_0_auto] rounded-[999px] ${
                          item.status === "Completed" 
                            ? "bg-[#ECFDF3]" 
                            : "bg-[#FFFAEB]"
                        }`}
                      >
                        <div 
                          className={`relative w-fit status-tag ${
                            item.status === "Completed" 
                              ? "text-[#039855]" 
                              : "text-[#B54708]"
                          }`}
                        >
                          {item.status}
                        </div>
                      </div>
                    )}

                    {/* Only show edit and delete icons in New Cases tab */}
                    {activeTab === "new" && (
                      <>
                        <div className="relative w-6 h-6 cursor-pointer">
                          <Icons.EditIcon />
                        </div>

                        <div 
                          className="relative w-6 h-6 cursor-pointer"
                          onClick={() => handleDeleteQuestion(item.id)}
                        >
                          <Icons.DelBoxIcon />
                        </div>
                      </>
                    )}
                  </div>
                ))}
                {/* ------------------------------------------------------------- */}
              </div>
            </div>
          </div>
        </div>
        {/* -----------------CONTENT WRAPPER DIV------------------------------------------------------------ */}
      </div>
      {/* ----------------------------------------------------------------------------- */}
      <ActionModal 
        open={deleteModalVisible}
        onCancel={() => setDeleteModalVisible(false)}
        onConfirm={confirmDeleteContact}
        title="Delete Case"
        content={`Lorem ipsum dolor sit amet consectetur. Feugiat ipsum libero tempor felis
risus nisi non. Quisque eu ut tempor curabitur.`}
      />
    </AuthenticatedLayout>
  )
}

export default Home