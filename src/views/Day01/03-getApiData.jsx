import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

/* 需求二：从服务器获取一组列表数据，循环动态绑定相关的内容 */
let data = [
  {
    id: 1,
    title: "111",
  },
  {
    id: 2,
    title: "222",
  },
  {
    id: 3,
    title: "333",
  },
];

root.render(
  <>
    <h2 className="title">今日新闻</h2>
    <ul className="newsBox">
      {data.map((item, index) => {
        return (
          /* 循环创建的元素一定设置 key 属性，属性值是本次循环中的"唯一值"[优化 DOM-DIFF ] */
          <li key={item.id}>
            <em>{index + 1}</em>
            &nbsp;&nbsp;
            <span>{item.title}</span>
          </li>
        );
      })}
    </ul>

    <br />

    {/* 扩展需求：没有数组，就是想单独循环五次 */}
    {new Array(5).fill(null).map((_, index) => {
      return <button key={index}>按钮{index + 1}</button>;
    })}
  </>
);
