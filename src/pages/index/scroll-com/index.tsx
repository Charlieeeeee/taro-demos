import { View, ScrollView } from '@tarojs/components';
import React from 'react';
import './index.less';

export default function index() {
  const onScrollToUpper = () => {}

  const onScroll = (e) => {
    console.log(e.detail)
  }
  const scrollTop = 0
  const Threshold = 20
  return (
    <ScrollView
      className='scrollview'
      scrollY
      scrollWithAnimation
      scrollTop={scrollTop}
      lowerThreshold={Threshold}
      upperThreshold={Threshold}
      onScrollToUpper={onScrollToUpper} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
      onScroll={onScroll}
    >
      <View className='view view-a'>A</View>
      <View className='view view-b'>B</View>
      <View className='view view-c'>C</View>
    </ScrollView>
  );
}
index.defaultProps = {};
