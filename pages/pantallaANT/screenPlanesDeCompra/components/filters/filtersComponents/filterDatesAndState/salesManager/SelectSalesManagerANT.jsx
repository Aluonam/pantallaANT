import React from 'react';
import { Select, Space } from 'antd';
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const SelectSalesManagerANT = () => (
    <Select
      style={{width:"100%"}}
      allowClear
      placeholder="-Seleccione-"
      options={[
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
      ]}
    />
);
export default SelectSalesManagerANT;