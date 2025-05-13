import React from 'react'

const PurchaseCases = ({onSuccess}) => {
  return (
    <div>
        <h5 className='text-blue-39 mb-7'>Purchase Case</h5>
        <p className='fs-14 fw-500 text-gray-54 mb-7'>If you want to create a new case, you will have to purchase a new case. If you click “Buy Now”, you will redirected to Stripe.</p>
        <div className="flex items-center gap-4 w-full">
        <button type='primary' className='btn btn-secondary w-full border rounded-2'>Cancel</button>
        <button onClick={()=>{onSuccess()}} type='primary' className='btn btn-primary w-full'>Buy Now</button>
        </div>

    </div>
  )
}

export default PurchaseCases