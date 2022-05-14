import React, {} from 'react';
import { View } from '@tarojs/components';
import './index.less';

interface Iindex {}
export default function index(props: Iindex) {
  return (
    <View className='todo-list'>
      todo list
    </View>
  );
}
index.defaultProps = {};