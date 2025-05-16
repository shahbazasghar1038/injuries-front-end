import React, { useState } from 'react'
import { getAllLienOffers } from '../../../services/cases';
import { useEffect } from 'react';

const NegotitationFrom = () => {
  // 1. State for price (default: 4200)
  const [price, setPrice] = useState(4200);
  const [isManual, setIsManual] = useState(false);
  const [manualValue, setManualValue] = useState(price);

  // 2. Handlers
  const priceUp = () => setPrice(prev => prev + 1);
  const priceDown = () => setPrice(prev => (prev > 0 ? prev - 1 : 0));

  // 3. Format price as currency
  const formattedPrice = `$${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  const handleManualInput = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setManualValue(value);
  };

  const handleManualBlur = () => {
    const num = parseFloat(manualValue);
    if (!isNaN(num)) setPrice(num);
    setIsManual(false);
  };

  const handleManualKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleManualBlur();
    }
  };


  const [caseData, setCaseData] = useState(null);
  
const handleFetchSignleCase = () => {
  getAllLienOffers(id)
  .then((response) => {
    setCaseData(response);
    setCaseDoctors( response);
    console.log("single case data:", response);
    setLoading(false);
  })
  .catch((err) => {
    console.error(err);
    messageApi.error(err);

    setError("Failed to fetch single case data. Please try again later.");
    setLoading(false);
  });
}

useEffect(() => {
  handleFetchSignleCase()
}, [])


  return (
    <div className=' w-full'>
        <h6 className='font-600 text-blue-39 mb-2'>Select a lien negotiation request</h6>
        <p className='fs-14 fw-400 text-blue-85'>Send an Offer to Dr Jake </p>
        <div className="flex items-center gap-1 my-4">
            <p className='fs-18 fw-400 text-[#637381]'>Bill Amount:</p>
            <p className='fs-18 fw-500 text-gray-54'>$6,500</p>
        </div>
        <p className='fs-14 fw-500 text-gray-54 mb-3'>Enter Price</p>
        <div className="flex items-center gap-6 mb-6">
          <div className="flex items-center">
            <div className="border rounded-lg px-6 py-2.5 bg-white flex items-center h-[68px]">
              {isManual ? (
                <input
                  type="text"
                  className="text-[40px] font-bold font-outfit text-black tracking-wide outline-none w-32"
                  value={manualValue}
                  onChange={handleManualInput}
                  onBlur={handleManualBlur}
                  onKeyDown={handleManualKeyDown}
                  autoFocus
                />
              ) : (
                <span className="text-[40px] font-bold font-outfit text-black tracking-wide">{formattedPrice}</span>
              )}
            </div>
            <div className="flex flex-col ml-2">
              <button onClick={priceUp} className="text-gray-500 hover:text-black">
                <svg width="24" height="24" fill="none"><path d="M12 8l4 4H8l4-4z" fill="currentColor"/></svg>
              </button>
              <button onClick={priceDown} className="text-gray-500 hover:text-black">
                <svg width="24" height="24" fill="none"><path d="M12 16l-4-4h8l-4 4z" fill="currentColor"/></svg>
              </button>
            </div>
          </div>
          <span className="text-gray-500 mx-2">or</span>
          <button
            className="text-blue-600 font-medium hover:underline"
            onClick={() => {
              setManualValue(price);
              setIsManual(true);
            }}
          >
            Add Manually
          </button>
        </div>
        <p className='fs-14 fw-500 text-gray-54 mb-3'>Write a Message</p>
        <textarea className="w-full border rounded-lg px-4 py-3 bg-white" cols={30} rows={3} placeholder="" />
        <button className="btn btn-primary ml-auto mt-6">Send Offer</button>
    </div>
  )
}

export default NegotitationFrom