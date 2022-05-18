import React, { useState, useEffect } from 'react';
import { View } from '@tarojs/components';
import { } from 'taro-hooks'
import { AtInput, AtForm, AtButton, AtCheckbox } from 'taro-ui'
import './index.less';

interface Iindex {}
interface ICheckBoxOption {
  label: string,
  value: string,
  isChecked: boolean
}
export default function Index(props: Iindex) {
  const [state, setState] = useState({
    task: '',
    todoList: [] as ICheckBoxOption[],
    checkedList: [] as string[]
  })

  const handleInputChange = (value, event) => {
    // 输入框的值
    // console.log(value);
    // change事件对象
    // console.log(event);
    setState({ ...state, task: value })
  }
  const handleAdd = () => {
    const { task, todoList } = state
    if (task) {
      setState({ 
        ...state, 
        todoList: todoList.concat({
          label: task,
          value: task,
          isChecked: false
        }),
        task: ''
      })
    }
  }
  // state变化就会执行回调
  useEffect(() => {
    console.log('useEffect', state)
  }, [state])

  const handleCheckChange = (value) => {
    setState({
      ...state,
      checkedList: state.checkedList.concat(value)
    })
  }
  return (
    <View className='todo-list'>
      <AtForm>
        <AtInput
          name='task'
          title='任务'
          type='text'
          placeholder='请输入代办项'
          value={state.task}
          onChange={handleInputChange}
        />
        <AtButton onClick={handleAdd}>添加</AtButton>
      </AtForm>
      代办列表：
      <AtCheckbox
        options={state.todoList}
        selectedList={state.checkedList}
        onChange={handleCheckChange}
      />
    </View>
  );
}
Index.defaultProps = {};
