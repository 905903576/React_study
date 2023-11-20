import React, { useEffect, useState, useRef } from "react";
import { Button } from "antd";
import "./Demo.less";

/*
  ref
    1.赋值给一个标签: 获取 DOM 元素
    2.赋值给一个类子组件: 获取子组件实例 [可以基于实例调用子组件的属性和方法等]
    3.赋值给一个函数子组件: 报错 [需要配合 React.forwardRef实现 ref 转发，获取子组件中的摸一个 DOM 元素]

  ref 在类组件中的使用方法
    1. ref="box"
      this.refs.box 获取 {不推荐使用}
    2. ref={x=>this.box=x} {推荐}
      this.box 获取
    3. this.box = React.createRef() 创建一个 ref 对象  {推荐}
      <h2 ref={this.box}>
      this.box.current 获取 DOM 元素
*/

// const Demo = function Demo() {
//   let [num, setNum] = useState(0);

//   /* 可以使用但不推荐使用 */
//   /* 基于 ref={函数}的方式, 可以把创建的 DOM 元素(或者子组件的实例)赋值给 box 变量 */
//   let box;
//   useEffect(() => {
//     console.log(box);
//   }, []);

//   return (
//     <div className="demo">
//       <span className="num" ref={(x) => (box = x)}>
//         {num}
//       </span>
//       <Button
//         type="primary"
//         size="small"
//         onClick={() => {
//           setNum(num + 1);
//         }}
//       >
//         新增
//       </Button>
//     </div>
//   );
// };

// const Demo = function Demo() {
//   let [num, setNum] = useState(0);

//   /* 也可以基于 React.createRef 创建 ref 对象来获取想要的内容 */
//   let box = React.createRef();
//   useEffect(() => {
//     console.log(box.current);
//   }, []);
//   return (
//     <div className="demo">
//       <span className="num" ref={box}>
//         {num}
//       </span>
//       <Button
//         type="primary"
//         size="small"
//         onClick={() => {
//           setNum(num + 1);
//         }}
//       >
//         新增
//       </Button>
//     </div>
//   );
// };

/*const Demo = function Demo() {
  let [num, setNum] = useState(0);

  /!* 
    函数组件中，还可以基于 useRef Hook函数，创建一个 ref 对象 
      + React.createRef 也是创建 ref 对象，即可在类组件中使用, 也可以在函数式组件中使用
      + useRef 只能在函数组件中用 [所有的 ReactHook 函数，都只能在函数组件中时候用，在类组件中使用会报错]
  *!/
   let box = useRef(null) ;
  console.log(box);
  useEffect(() => {
    console.log(box.current);
  }, []);
  return (
    <div className="demo">
      <span className="num" ref={box}>
        {num}
      </span>
      <Button
        type="primary"
        size="small"
        onClick={() => {
          setNum(num + 1);
        }}
      >
        新增
      </Button>
    </div>
  );
}; */

let prev1, prev2;
const Demo = function Demo() {
  let [num, setNum] = useState(0);

  let box1 = useRef(null),
    box2 = React.createRef();

  if (!prev1) {
    // 第一次 DEMO 执行, 把第一次创建的 Ref 对象赋值给变量
    prev1 = box1;
    prev2 = box2;
  } else {
    // 第二次 Demo 执行，验证新创建的 ref 对象, 和之前第一次创建的 Ref 对象 是否一致?
    console.log(prev1 === box1);
    console.log(prev2 === box2);
  }

  useEffect(() => {
    console.log(box1.current); // true
    /* useRef 在每一次组件更新的时候(函数重新执行), 再次执行useRef 方法的时候,
     不会创建新的 Ref 对象, 获取到的还是第一次创建的那个 Ref 对象!! */
    console.log(box2.current); // false
    //createRef 在每一次组件更新的时候, 都会创建一个全新的 Ref 对象出来, 比较浪费性能!!

    // 总结: 在类组件中, 创建 Ref 对象, 我们基于 React.createRef 处理; 但是在函数组件中,
    // 为了保证性能,我们应该使用专属的 useRef 处理 !!
    // eslint-disable-next-line
  }, []);
  return (
    <div className="demo">
      <span className="num" ref={box1}>
        {num}
      </span>
      <span className="num" ref={box2}>
        HHH
      </span>
      <Button
        type="primary"
        size="small"
        onClick={() => {
          setNum(num + 1);
        }}
      >
        新增
      </Button>
    </div>
  );
};

export default Demo;
