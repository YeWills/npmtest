import React from 'react';
import { Button } from 'antd';

export default props => {
  const { text = '提交10 month 24' } = props;
  return (
    <div>
      <span>{text}</span>
      <Button {...props}>{text}</Button>
      <input type="text" value="111" />
    </div>
  );
};
