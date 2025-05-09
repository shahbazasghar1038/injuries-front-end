import React, { useState } from 'react';
import { Card, Typography, Switch, Divider } from 'antd';
import 'antd/dist/reset.css';
import SettingsLayout from '../../../layout/SettingsLayout';

const { Title } = Typography;
const DoctorCaseSetting = () => {
    const [caseTypes, setCaseTypes] = useState({
        'Accept Car Accidents': true,
        'Accept Medical Malpractice': true,
        'Accept Simple Liability Cases': false,
        'Accept Complex Liability Cases': false,
        'Accept Slip and Fall': true,
        'Accept Mass Torts': true,
        'Product Liability': true,
        'Workforce Injuries': false,
        'Assault & Battery Cases': false,
        'Dog Bites & Animal Attacks': false,
        'Construction Accidents': false,
        'Nursing Home Abuse': false,
        'Require Insurance Coverage': false
      });
    
      const handleToggle = (caseType) => {
        setCaseTypes({
          ...caseTypes,
          [caseType]: !caseTypes[caseType]
        });
      };
      return (
    <SettingsLayout> 


        <div>
          <Card bordered={false}>
            <Title level={4} style={{ marginBottom: '20px' }}>Cases</Title>
            
            {Object.entries(caseTypes).map(([caseType, isChecked], index) => (
              <div key={index}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '10px 0',
                  color: '#667085',
                }}>
                  <span>{caseType}</span>
                  <Switch 
                    checked={isChecked} 
                    onChange={() => handleToggle(caseType)} 
                  />
                </div>
                {index < Object.entries(caseTypes).length - 1 && (
                  <Divider style={{ margin: '0' }} />
                )}
              </div>
            ))}
          </Card>
        </div>
        </SettingsLayout>

      );
}

export default DoctorCaseSetting