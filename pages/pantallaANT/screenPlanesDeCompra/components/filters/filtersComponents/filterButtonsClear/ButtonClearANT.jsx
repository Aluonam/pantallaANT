import React from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';

const ButtonClearANT = () => (
  <Flex gap="small" vertical>

    <Flex wrap="wrap" gap="small">
      <Button  icon={<DeleteOutlined/>}>Limpiar</Button>
    </Flex>
  
  </Flex>
);
export default ButtonClearANT;