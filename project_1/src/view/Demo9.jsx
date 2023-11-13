import React, { useState, useEffect, useRef, useImperativeHandle } from "react";
import "./Demo.less";

/*
// 基于 ref 获取子组件的实例, 这样基于实例, 可以调用子组件内部挂载到实例上的东西
class Child extends React.Component {
  state = { x: 1000 };
  render() {
    return <div className="childBox">{this.state.x}</div>;
  }
}*/

/* 
// 基于 React.forwardRef 实现 ref 转发, 目的: 获取子组件内部的某个元素
const Child = React.forwardRef(function Child(props, ref) {
  // console.log(ref); //  在Demo中, 调用 Child 的时候, 传递的 ref 对象 [x]
  return (
    <div className="childBox">
      <span ref={ref}>哈哈哈</span>
    </div>
  );
}); */

// 函数子组件内部, 可以有自己的状态和方法了; 如何实现: 基于 forwardRef 实现 ref 的同时,
// 获取函数子组件内部的状态或者方法呢?  => useImperativeHandle
const Child = React.forwardRef(function Child(props, ref) {
  let [text, setText] = useState("hello word!");
  const submit = () => {};

  useImperativeHandle(ref, () => {
    // 在这里返回的内容,都可以被父组件的 ref 对象获取到
    return {
      text,
      submit,
    };
  });

  return (
    <div className="childBox">
      <span>哈哈哈</span>
    </div>
  );
});

const Demo = function Demo() {
  let x = useRef(null);
  useEffect(() => {
    console.log(x.current);
  }, []);

  return (
    <div className="demo">
      <Child ref={x} />
    </div>
  );
};

export default Demo;
