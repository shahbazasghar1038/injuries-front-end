import React, { useState } from 'react';
import { Form, Input, Button, message as antdMessage } from 'antd';
import { createLienOffers } from '../../../services/cases'; // Make sure this function exists and works

const NegotiationForm = ({ data }) => {
  const [form] = Form.useForm();
  const [price, setPrice] = useState(data?.bill - 5 || 0);
  const [isManual, setIsManual] = useState(false);
  const [manualValue, setManualValue] = useState(price);

  const priceUp = () => setPrice((prev) => prev + 1);
  const priceDown = () => setPrice((prev) => (prev > 0 ? prev - 1 : 0));

  const formattedPrice = `$${price.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

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

  const onFinish = async (values) => {
    const payload = {
      offerAmount: price,
      message: values.message,
      caseId: data?.caseId,
      userId: data?.user?.id,
    };

    try {
      await createLienOffers(payload);
      antdMessage.success('Offer sent successfully');
      form.resetFields();
    } catch (error) {
      console.error(error);
      antdMessage.error('Failed to send offer');
    }
  };

  return (
    <div className="w-full">
      <h6 className="font-600 text-blue-39 mb-2">Select a lien negotiation request</h6>
      <p className="fs-14 fw-400 text-blue-85">
        Send an Offer to Dr {data?.user?.fullName}
      </p>

      <div className="flex items-center gap-1 my-4">
        <p className="fs-18 fw-400 text-[#637381]">Bill Amount:</p>
        <p className="fs-18 fw-500 text-gray-54">${data?.bill}</p>
      </div>

      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item label="Enter Price" className="mb-3">
          <div className="flex items-center gap-6">
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
                  <span className="text-[40px] font-bold font-outfit text-black tracking-wide">
                    {formattedPrice}
                  </span>
                )}
              </div>
              <div className="flex flex-col ml-2">
                <button type="button" onClick={priceUp} className="text-gray-500 hover:text-black">
                  <svg width="24" height="24" fill="none">
                    <path d="M12 8l4 4H8l4-4z" fill="currentColor" />
                  </svg>
                </button>
                <button type="button" onClick={priceDown} className="text-gray-500 hover:text-black">
                  <svg width="24" height="24" fill="none">
                    <path d="M12 16l-4-4h8l-4 4z" fill="currentColor" />
                  </svg>
                </button>
              </div>
            </div>
            <span className="text-gray-500 mx-2">or</span>
            <button
              type="button"
              className="text-blue-600 font-medium hover:underline"
              onClick={() => {
                setManualValue(price);
                setIsManual(true);
              }}
            >
              Add Manually
            </button>
          </div>
        </Form.Item>

        <Form.Item
          name="message"
          label="Write a Message"
          rules={[{ required: true, message: 'Please enter a message' }]}
        >
          <Input.TextArea rows={5} className='textarea' placeholder="Write something for the doctor..." />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" type="primary" className="ml-auto mt-6">
            Send Offer
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NegotiationForm;
