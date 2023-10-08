import React, { useState } from "react";
import { Button } from "antd";
import "./Demo.less";
// import { flushSync } from "react-dom";

/* 
  useState自带了性能优化的机制
    + 每一次修改状态值的时候，会拿最新要修改的值和之前的状态值做比较 [基于 Object.is 作比较]
    + 如果发现两次的值是一样的，则不会修改状态，也不会让视图更新 [可以理解为: 雷士与 PureComponent,在
    shouldComponentUpdate 中做了浅比较和优化]
*/

const Vote = function Vote(props) {
  console.log("render");
  let [x, setX] = useState(10);

  const handle = (type) => {
    // for (let i = 0; i < 10; i++) {
    //   flushSync(() => {
    //     setX(x + 1);
    //   });
    // }
    // setX(10);

    /* 需求: 视图只更新一次, 但最后的结果为 20 */
    for (let i = 0; i < 10; i++) {
      setX((prev) => {
        // prev: 存储上一次的状态值
        return prev + 1;
      });
    }
  };

  /*
    不用 flushSync 点击新增后视图渲染一次, 因为为异步操作, 值为：11
    setX里的x值一直会从上下文的x中取，所有x会一直为10
    用 flushSync(同步处理) 视图会渲染两次, 值为：11
      + 因为第一次渲染后 x = 11, 再次执行setX(x+1)时，x为上下文中的 10，执行结果仍为 11
      + 通过 useState 自带的优化机制，两次值相等，则不会修改状态值
  */

  return (
    <div className="demo">
      <span className="num">x:{x}</span>
      <Button type="primary" size="small" onClick={handle}>
        新增
      </Button>
    </div>
  );
};
export default Vote;
