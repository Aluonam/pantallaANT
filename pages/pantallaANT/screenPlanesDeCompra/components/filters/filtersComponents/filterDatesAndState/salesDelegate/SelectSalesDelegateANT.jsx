import React from 'react';
import { Select, Space } from 'antd';
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const SelectSalesDelegateANT = () => (
    <Select
      style={{width:"100%"}}
      defaultValue="lucy"
      allowClear
      options={[
        {
          value: 'lucy',
          label: 'Lucy',
        },
      ]}
    />
);
export default SelectSalesDelegateANT;