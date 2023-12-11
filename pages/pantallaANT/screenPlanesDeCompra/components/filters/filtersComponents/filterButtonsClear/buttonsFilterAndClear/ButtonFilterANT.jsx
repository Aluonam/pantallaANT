import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Flex} from 'antd';

const ButtonFilterANT = () => (
  <Flex gap="small" vertical>
    <Flex wrap="wrap" gap="small">
     
      <Button type="primary" icon={<SearchOutlined />}>
        Filtrar
      </Button>
      
    </Flex>
  </Flex>
);
export default ButtonFilterANT;