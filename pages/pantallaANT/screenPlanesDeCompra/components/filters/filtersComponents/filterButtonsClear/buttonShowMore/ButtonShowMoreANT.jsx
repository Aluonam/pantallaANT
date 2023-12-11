import React from 'react';
import { Button, Flex } from 'antd';
import { UpOutlined, DownOutlined } from '@ant-design/icons';

const ButtonShowMoreANT = ({showMore,onClick}) => (
  <Flex gap="small" wrap="wrap">
    {showMore?<Button onClick={()=>onClick()} type="link" icon={<UpOutlined />}>Mostrar menos</Button>:<Button onClick={()=>onClick()} type="link"  icon={<DownOutlined />}>Mostrar más</Button>}
  </Flex>
);
export default ButtonShowMoreANT;