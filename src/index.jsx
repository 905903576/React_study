/* 多 ES6 内置 API 做兼容处理 */
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.less";
// import DemoOne from "./view/Day02-02-DemoOne";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<div>LLL_study</div>);

// fetch('/jian/subscriptions/recommended_collections')
// .then(res => res.json())
// .then(val => {
//     console.log(val,"jian");
// })

// fetch('/zhi/news/latest')
// .then(res => res.json())
// .then(val => {
//     console.log(val,"zhi");
// })

// root.render(
//   <>
//     <DemoOne title="REACT好好玩" x={10}>
//       {/* 给传递的插槽信息设置名字（slot字段可以改变，相应的子组件获取也随之改变；
//         footer/header这些也可以改变） */}
//       <span slot="footer">页脚</span>
//       <span>主要内容</span>
//       <span slot="header">页眉</span>
//     </DemoOne>

//     {/* <DemoOne title="hahaha" /> */}
//   </>
// );
