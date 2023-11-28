/*
 * @Author: LLL 905903576@qq.com
 * @Date: 2023-09-22 11:52:10
 * @LastEditors: LLL 905903576@qq.com
 * @LastEditTime: 2023-11-21 10:12:49
 * @FilePath: \project_1\src\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import ReactDOM from "react-dom/client";
// import Task from "./views/Task";
// import Task from "./view/Task";
// import Demo from "./view/Demo";
// import Demo from "./view/useState的处理机制_1";
// import Demo from "./view/useState的处理机制_2";
// import Demo from "./view/Demo2";
// import Demo from "./view/Demo3";
// import Demo from "./view/Demo4";
// import Demo from "./view/Demo5";
// import Demo from "./view/Demo6";
// import Demo from "./view/Demo7";
// import Demo from "./view/Demo8";
// import Demo from "./view/Demo9";
// import Task from "./view/Task重构";
// import Demo from "./view/useMemo构建计算缓存/Demo1";
// import Demo from "./view/useCallback缓存函数/Demo1";
import Demo from "./view/自定义HOOK提取公共逻辑/Demo1";

// import Vote from "./view/Vote";

/* 使用ANTD组件库 */
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import "./index.less";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider locale={zhCN}>
    {/* <Task /> */}
    <Demo />
    {/* <Vote title="React需要JS功底" /> */}
  </ConfigProvider>
);
