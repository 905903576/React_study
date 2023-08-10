import React from "react";

class Child1 extends React.Component {
  state = {
    x: 100,
    y: 200,
  };
  render() {
    return (
      <div>
        子组件1
        <em ref={(x) => (this.emBox = x)}>100</em>
      </div>
    );
  }
}

const Child2 = React.forwardRef(function Child2(props, ref) {
  //   console.log(ref); // 我们调用 Child2 的时候，设置的 ref 属性值[函数]
  // -> x => this.child2 = x
  return (
    <div>
      子组件2
      <button ref={ref}>按钮</button>
    </div>
  );
});

class Demo extends React.Component {
  render() {
    return (
      <div>
        <Child1 ref={(x) => (this.child1 = x)} />
        <Child2 ref={(x) => (this.child2 = x)} />
      </div>
    );
  }
  componentDidMount() {
    console.log(this.child1); // 存储的是：子组件的实例对象
    // console.log(this.child2); // 存储的是：子组件内部的 button 按钮
  }
}

export default Demo;

/* 
给元素标签设置 ref, 目的：获取对应的 DOM 元素
给类组件设置 ref, 目的：获取当前调用组件创建的实例[后续可以根基实例获取子组件中的相关信息]
给函数组件设置 ref ，直接报错 Function components cannot be given refs. Attempts to access this ref will fail.
    + 但是我们让其配合 React.forwardRef 实现 ref 的转发
    + 目的：获取函数组件内部的某个元素
*/
