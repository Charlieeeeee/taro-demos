
import React, { useEffect } from 'react';
import { View, Navigator } from '@tarojs/components';
import { AtButton } from 'taro-ui'
import './index.less';

const Index = () => {

  useEffect(() => {
    // 12
  }, []);

  return (
    <View >
      <Navigator url='/pages/todo-list/index'>
        <AtButton type='secondary' size='normal'>
          todo list
        </AtButton>
      </Navigator>
    </View>
  );
};

export default Index;
