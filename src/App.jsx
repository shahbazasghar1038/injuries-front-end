import { useState } from 'react'
import './App.css'
import { DatePicker } from 'antd';
import { Col, Row } from 'antd';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Row>
      <Col span={8}>
      <p className="text-4xl text-red-500">
        Click on the Vite and React logos to learn more
      </p>
      </Col>
      <Col span={8} offset={8}>
      <DatePicker />;
      </Col>
    </Row>
     
      
    </>
  )
}

export default App
