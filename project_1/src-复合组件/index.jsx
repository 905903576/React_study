/*
 * @Author: LLL 905903576@qq.com
 * @Date: 2023-09-22 11:52:10
 * @LastEditors: LLL 905903576@qq.com
 * @LastEditTime: 2023-11-30 11:13:55
 * @FilePath: \project_1\src\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import ReactDOM from "react-dom/client";
// import Vote from "./views-类组件/Vote";
import Vote from "./views-函数组件/Vote";

/* 使用ANTD组件库 */
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import "./index.less";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider locale={zhCN}>
    <Vote />
  </ConfigProvider>
);
