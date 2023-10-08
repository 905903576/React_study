import React from "react";
import ReactDOM from "react-dom/client";
// import Task from "./views/Task";
// import Task from "./view/Task";
// import Demo from "./view/Demo";
// import Demo from "./view/useState的处理机制_1";
// import Demo from "./view/useState的处理机制_2";
// import Demo from "./view/Demo2";
// import Demo from "./view/Demo3";
import Demo from "./view/Demo4";

// import Vote from "./view/Vote";

/* 使用ANTD组件库 */
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import "./index.less";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider locale={zhCN}>
    {/* <Task /> */}
    <Demo x={10} y={20} />
    {/* <Vote title="React需要JS功底" /> */}
  </ConfigProvider>
);
