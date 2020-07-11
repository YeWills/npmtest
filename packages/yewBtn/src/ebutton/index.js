/*
 * @Date: 2020-07-11 21:19:56
 * @Author: Scm <chengqiuhua@erayt.com>
 * @Copyright: 2015-2020 Erayt, Inc.
 * @Description: If you have some questions, please contact: chengqiuhua@erayt.com.
 */
import React from 'react';
import { Button } from 'antd';

export default props => {
  const { text = '提交1' } = props;
  return (
    <div>
      <span>{text}</span>
      <Button {...props}>{text}</Button>
      <input type="text" value="111" />
    </div>
  );
};
