import React, { useEffect, useState } from 'react';
import { getAllLienOffers } from '../../../services/cases';
import { useSelector } from 'react-redux';


const getTitle = (type) => {
  switch (type) {
    case 'bill': return 'Bill Amount';
    case 'your-offer': return 'Your Offer';
    case 'counter-offer': return 'Counter Offer';
    default: return '';
  }
};

const BillRecords = ({data, caseData}) => {
console.log('data' , data)
console.log('caseData' , caseData)
const storeUser = useSelector((state) => state.auth.user); // Add this line to select the user

const attornyID = caseData?.Users[0]?.id;
  const [caseLienConversation, setCaseLienConversation] = useState([]);
  
  const handleFetchSignleCase = () => {
    let query = `all?caseId=${data?.caseId}&userIds=${data?.user?.id},${attornyID}`;
    getAllLienOffers(query)
    .then((response) => {
      setCaseLienConversation(response?.lienOffers);
      console.log("lien all data:", response);
    })
    .catch((err) => {
      console.error(err);  
    });
  }
  
  useEffect(() => {
    handleFetchSignleCase()
  }, [data?.user?.id])

  return (
    <div>
      <div style={{ color: '#A3A3A3', fontWeight: 500, marginBottom: 8 }}>Offer accepted</div>
      <h2 style={{ margin: 0, fontWeight: 700 }}>Lien Negotiation</h2>
      <div style={{ color: '#A3A3A3', fontSize: 14, marginBottom: 24 }}>Sent a request to Dr. {data?.user?.fullName}</div>
      <div style={{ borderLeft: '2px dashed #E5E7EB', marginLeft: 16, paddingLeft: 24 }}>
          <div style={{ marginBottom: 32, position: 'relative' }}>
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
            <div style={{ fontWeight: 400, color:'#637381', fontSize: 16 }}>
            Bill Amount: <span style={{ color: '#525252' }}>{87}</span>
            </div>
            {/* <div style={{ color: '#737373', fontSize: 15, marginTop: 4, whiteSpace: 'pre-line' }}>
              Message: {item.message}
              {item.showMore && (
                <span style={{ color: '#2563EB', cursor: 'pointer', marginLeft: 4 }}>Show more</span>
              )}
            </div> */}
          </div>
      
          {caseLienConversation?.slice().reverse().map((item, idx) => (
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
            <div style={{  fontWeight: 400, color:'#637381', fontSize: 16 }}>
             {item?.User?.id === storeUser?.id ? 'Your Offer'  : 'Counter Offer' }  : <span style={{ color: '#525252' }}>{item.offerAmount}</span>
            </div>
            <div style={{ color: '#637381', fontSize: 15, marginTop: 4, whiteSpace: 'pre-line' }}>
              Message: {item.message}
              {item.showMore && (
                <span style={{ color: '#4B5563', cursor: 'pointer', marginLeft: 4 }}>Show more</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillRecords;