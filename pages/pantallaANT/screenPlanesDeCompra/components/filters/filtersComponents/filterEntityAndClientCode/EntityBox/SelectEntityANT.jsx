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
    { label:"ejemplo1",value:"ejemplo1" },
    { label:"ejemplo2",value:"ejemplo2" },
    { label:"ejemplo3",value:"ejemplo3" },
    { label:"ejemplo4",value:"ejemplo4" }



  ]
  return (
    <Select
      showSearch
      value={value}
      placeholder={"Escribe para buscar una entidad"}
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