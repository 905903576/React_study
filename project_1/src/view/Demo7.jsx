import React, { useState, useEffect, useLayoutEffect } from "react";
import { Button } from "antd";
import "./Demo.less";

// 模拟从服务器异步获取数据
const queryData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([10, 20, 30]);
    }, 1000);
  });
};

const Demo = function Demo() {
  console.log("RENDER");
  let [num, setNum] = useState(0);

  /*useLayoutEffect(() => {
    if (num === 0) {
      setNum(10);
    }
  }, [num]);*/

  /*
    useLayoutEffect 会阻止浏览器渲染真实 DOM, 优先执行 Effect 链表中的 callback;
    useEffect 不会阻塞浏览器渲染真实 DOM,在渲染真实 DOM 的同时, 去执行 Effect 链表中的 callback;
      + useLayoutEffect 设置的 callback 要优先于 useEffect 去执行!!
      + 在两者设置的 callback 中, 依然可以获取 DOM 元素 [原因: 真实 DOM 对象已经创建了，区别只是浏览器是否渲染]
      + 如果在 callback 函数中又修改状态值 [视图又要更新]
        + useEffect: 浏览器肯定是把第一次的真实 DOM 已经绘制了, 再去渲染第二次真实 DOM
        + useLayoutEffect: 浏览器是把两次真实 DOM 的渲染，合并在一起渲染

    视图更新的步骤:
      第一步: 基于 babel-preset-react-app 把 JSX 编译为 createElement 格式
      第二步: 把 createElement 执行, 创建出 virtualDOM
      第三部: 基于 root.render 方法把 virtualDOM 变为真实 DOM 对象 [DOM-DIFF]
        useLayoutEffect 阻塞第四步操作，先去执行 Effect 链表中的方法[同步操作]
        useEffect 第四步和Effect 链表中的方法执行，是同时进行的[异步操作]
      第四步: 浏览器渲染和绘制真实 DOM 对象
  */
  useLayoutEffect(() => {
    console.log("useLayoutEffect"); // 第一个输出
    console.log(document.querySelector(".num"));
  }, [num]);

  useEffect(() => {
    console.log("useEffect"); // 第二个输出
    console.log(document.querySelector(".num"));
  }, [num]);

  return (
    <div className="demo">
      <span
        className="num"
        style={{
          color: num === 0 ? "red" : "green",
        }}
      >
        {num}
      </span>
      <Button
        type="primary"
        size="small"
        onClick={() => {
          setNum(0);
        }}
      >
        新增
      </Button>
    </div>
  );
};

export default Demo;
