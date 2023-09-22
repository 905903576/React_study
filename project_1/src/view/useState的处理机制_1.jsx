import React, { useState } from "react";
import { Button } from "antd";
import "./Demo.less";

/* 
  useState: React Hook 函数之一，目的是再函数组件中使用状态，并且后期基于状态的修改，可以让组件更新
    let [num, setNum] = useState(initialValue);
      + 执行 useState, 传递的 initialValue 是初始的状态值
      + 执行这个方法，返回结果是一个数组：[状态值，修改状态的方法]
        + num 变量存储的是获取的状态值
        + setNum 变量存储的是: 需要状态的方法
      + 执行 setNum(value) 
        + 修改状态值为 value
        + 通知视图更新
      + 函数组件[或者 Hooks 组件] 不是类组件，所以没有实例的概念 [调用组件不再是创建类的实例，而是把函数执行，产生
        一个私有上下文而已], 再所以，在函数组件中不涉及 this 的处理 !!
*/
const Demo = function Demo() {
  let [num, setNum] = useState(0);

  const handle = () => {
    setNum(num + 10);
  };

  return (
    <div className="demo">
      <span className="num">{num}</span>
      <Button type="primary" size="small" onClick={handle}>
        新增
      </Button>
    </div>
  );
};

/*
// 纯函数组件： 静态组件
const Demo = function Demo() {
  let n = 0;
  return (
    <div className="demo">
      <span className="num">{n}</span>
      <Button
        type="primary"
        size="small"
        onClick={() => {
          n += 10;
        }}
      >
        新增
      </Button>
    </div>
  );
};
*/

/*
// 类组件 本身是动态组件
class Demo extends React.Component {
  state = {
    n: 0,
  };
  handle = () => {
    let { n } = this.state;
    this.setState({
      n: n + 1,
    });
  };
  render() {
    let { n } = this.state;
    return (
      <div className="demo">
        <span className="num">{n}</span>
        <Button type="primary" size="small" onClick={this.handle}>
          新增
        </Button>
      </div>
    );
  }
}
*/

export default Demo;
