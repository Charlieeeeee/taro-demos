import React, { useState } from 'react';
import { View, Swiper, SwiperItem, MovableArea, MovableView, Button } from '@tarojs/components';
import './index.less';

export default function Index(props: any) {
  const [state, setstate] = useState({
    x: 0,
    y: 0
  })
  const tap = () => {
    setstate({
      x: 30,
      y: 30
    })
  }
  return (
    <View>
      <Swiper
        className='test-h'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay
      >
        <SwiperItem>
          <View className='demo-text'>1</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text' style={{color: props.color}}>2</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text'>3</View>
        </SwiperItem>
      </Swiper>

      <view className='page-section'>
        <view className='page-section-title first'>movable-view区域小于movable-area</view>
        <MovableArea scaleArea className='mv-ar'>
          <MovableView className='mv-vw' x={state.x} y={state.y} direction='all'>text</MovableView>
        </MovableArea>
        <Button className='mv-btn' onClick={tap}>点击移动到 (30px, 30px)</Button>
      </view>
    </View>
  )
}
Index.defaultProps = {
  color: 'red'
};
