import React from "react";

// 检查是否为对象
const isObject = function isObject(obj) {
  return obj !== null && /^(object|function)$/.test(typeof obj);
};
// 对象浅比较的方法
const shallowEqual = function shallowEqual(objA, objB) {
  if (!isObject(objA) || !isObject(objB)) return false;
  if (objA === objB) return true;
  // 先比较成员的数量
  let keyA = Reflect.ownKeys(objA),
    keyB = Reflect.ownKeys(objB);
  if (keyA.length !== keyB.length) return false;
  // 数量一直，再逐一比较内部的成员[只比较第一级：浅比较]
  for (let i = 0; i < keyA.length; i++) {
    let key = keyA[i];
    // 如果一个对象中有这个成员，一个对象中没有；或者，都有这个成员，但是成员值不一样；都应该被判定为不相同
    if (!objB.hasOwnProperty(key) || !Object.is(objA[key], objB[key]))
      return false;
  }
  // 以上都处理完，发现没有不相同的成员，则认为两个对象是相等的
  return true;
};

class Demo extends React.PureComponent {
  // 把继承改为 Component 自己设置 shouldComponentUpdate 周期函数，发现和继承 PureComponent 是一样的效果
  state = {
    arr: [10, 20, 30], // 0x001
  };

  render() {
    let { arr } = this.state; // arr -> 0x001

    return (
      <div>
        {arr.map((item, index) => {
          return (
            <span
              key={index}
              style={{
                display: "inline-block",
                width: 100,
                height: 100,
                background: "skyblue",
                marginRight: 10,
              }}
            >
              {item}
            </span>
          );
        })}
        <br />
        <button
          onClick={() => {
            arr.push(40); // 给 0x001 堆中新增一个 40
            /* // 无法更新的
            this.setState({arr}); // 最新修改的状态地址，还是 0x001 [状态地址没有改]
            */

            // 跳过默认加的 shouldComponentUpdate，直接更新
            // this.forceUpdate();
            this.setState({
              arr: [...arr], // 我们是让 arr 状态值改为一个新的数组 [堆地址]
            });
          }}
        >
          新增SPAN
        </button>
      </div>
    );
  }

  /* shouldComponentUpdate(nextProps,nextState) {
    let {props,state} = this
    // props/state: 修改之前的属性状态
    // nextProps/nextState: 将要修改的属性状态
    return !shallowEqual(props,nextProps) || !shallowEqual(state,nextState)
  } */
}

export default Demo;

/* 
    PureComponent 和 Component 的区别：
        PureComponent 会给类组件默认加一个 shouldComponentUpdate 周期函数
            + 在此周期函数中，它对新老的属性/状态 会做一个浅比较
            + 如果经过钱比较，发现属性和状态并没有改变，则会返回 false [也就是不继续更新组件]；有变化才会去更新 !!
*/

let obj = {
  z: 20,
};

let objA = {
  x: 10,
  y: obj,
  arr: [10, 20, 30],
};
obj.n = 1000;
let objB = {
  x: 10,
  y: obj,
  arr: [10, 20, 30],
};

console.log(shallowEqual(objA, objB));
