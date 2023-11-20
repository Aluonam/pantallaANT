import React, { useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio } from 'antd';
const ButtonDownloadANT = () => {
  const [size, setSize] = useState('large'); // default is 'middle'
  return (
    <>    
          <Button  icon={<DownloadOutlined />} size={size} />   
    </>
  );
};
export default ButtonDownloadANT