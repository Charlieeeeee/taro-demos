import React, { useCallback } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Button, Image } from "@tarojs/components";
import { useEnv, useNavigationBar, useModal, useToast } from "taro-hooks";
import logo from "./hook.png";
import ScrollCom from './scroll-com'

import './index.less'

const Index = () => {
  const env = useEnv();
  // 获取当前实例
  const curIns = Taro.getCurrentInstance() || Taro.Current
  console.log('%ccurIns:', 'color: green;', curIns)

  // 测试可选链
  const optionalObj = { a: { b: 'has b'}}
  console.log(optionalObj?.a?.b)
  console.log(optionalObj?.b?.c)

  // 设置当前页面标题
  const { navigationBarTitleText } = curIns.page?.config || {}
  const [_, { setTitle }] = useNavigationBar({ title: navigationBarTitleText });

  const [show] = useModal({
    title: "Taro Hooks!",
    showCancel: false,
    confirmColor: "#8c2de9",
    confirmText: "支持一下",
    mask: true,
  });
  const [showToast] = useToast({ mask: true });

  const handleModal = useCallback(() => {
    show({ content: "不如给一个star⭐️!" }).then(() => {
      showToast({ title: "点击了支持!" });
    });
  }, [show, showToast]);

  const handleGoSwiper = () => {
    Taro.navigateTo({
      url: '/pages/swiper/index'
    })
  }
  return (
    <View className='wrapper'>
      <Image className='logo' src={logo} />
      <Text className='title'>为Taro而设计的Hooks Library</Text>
      <Text className='desc'>
        目前覆盖70%官方API. 抹平部分API在H5端短板. 提供近40+Hooks!
        并结合ahook适配Taro!
      </Text>
      <View className='list'>
        <Text className='label'>运行环境</Text>
        <Text className='note'>{env}</Text>
      </View>
      <Button className='button' onClick={() => setTitle("首页!")}>
        设置标题
      </Button>
      <Button className='button' onClick={handleModal}>
        使用Modal
      </Button>
      <Button className='button' onClick={handleGoSwiper}>
        go to swiper
      </Button>
      <ScrollCom />
    </View>
  );
};

export default Index;
