import React from 'react';

const negotiationData = [
  {
    type: 'bill',
    amount: '$6,500.00',
    message: 'John Lawfirm, here is the bill amount you owe us for the treatment of your patient. John Lawfirm, here is the bill amount you owe us for the treatment of your patient...',
    showMore: true,
  },
  {
    type: 'your-offer',
    amount: '$5,000',
    message: '-',
  },
  {
    type: 'counter-offer',
    amount: '$5,500',
    message: "Hey, Let's talk over the phone and get it finalised ASAP.",
  },
  {
    type: 'your-offer',
    amount: '$4,200',
    message: `Hey, Let's talk over the phone and get it finalized ASAP.`.repeat(10),
  },
];

const getTitle = (type) => {
  switch (type) {
    case 'bill': return 'Bill Amount';
    case 'your-offer': return 'Your Offer';
    case 'counter-offer': return 'Counter Offer';
    default: return '';
  }
};

const BillRecords = () => {
  return (
    <div>
      <div style={{ color: '#A3A3A3', fontWeight: 500, marginBottom: 8 }}>Offer accepted</div>
      <h2 style={{ margin: 0, fontWeight: 700 }}>Lien Negotiation</h2>
      <div style={{ color: '#A3A3A3', fontSize: 14, marginBottom: 24 }}>Sent a request to Dr. Jake</div>
      <div style={{ borderLeft: '2px dashed #E5E7EB', marginLeft: 16, paddingLeft: 24 }}>
        {negotiationData.map((item, idx) => (
          <div key={idx} style={{ marginBottom: 32, position: 'relative' }}>
            <div style={{
              position: 'absolute',
              left: -40,
              top: 0,
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: '#F3F4F6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20,
              color: '#A3A3A3'
            }}>
              <span role="img" aria-label="user">👤</span>
            </div>
            <div style={{ fontWeight: 600, fontSize: 16 }}>
              {getTitle(item.type)}: <span style={{ color: '#525252' }}>{item.amount}</span>
            </div>
            <div style={{ color: '#737373', fontSize: 15, marginTop: 4, whiteSpace: 'pre-line' }}>
              Message: {item.message}
              {item.showMore && (
                <span style={{ color: '#2563EB', cursor: 'pointer', marginLeft: 4 }}>Show more</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillRecords;