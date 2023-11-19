import React, { useState } from 'react';
import { Select } from 'antd';

const SelectEntityANT = () => {

  const [data, setData] = useState([]);
  const [value, setValue] = useState();

  const handleSearch = (newValue) => {
  };
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const ejemploOpciones = [
    { label:"ejemeplo1",value:"ejemplo1" },
    { label:"ejemeplo2",value:"ejemplo2" },
    { label:"ejemeplo3",value:"ejemplo3" },
    { label:"ejemeplo4",value:"ejemplo4" }



  ]
  return (
    <Select
      showSearch
      value={value}
      placeholder={"busca"}
      allowClear={true}
      defaultActiveFirstOption={false}
      suffixIcon={null}
      filterOption={false}
      onSearch={handleSearch}
      onChange={handleChange}
      notFoundContent={null}
      options={ejemploOpciones}
    //   size='large'
      style={{width:"100%"}}
    />
  );
};


export default SelectEntityANT;