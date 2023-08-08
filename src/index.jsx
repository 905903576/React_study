/* 多 ES6 内置 API 做兼容处理 */
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.less";
// import Dialog from "./components/Day03-01-Dialog";
// import Vote from "./views/Day03-02-Vote函数组件";
// import Vote from "./views/Day03-03-Vote";
// import Demo from "./views/Day04-01-Demo2";
// import Demo from "./views/Day04-02-Demo3";
// import Demo from "./views/Day04-03-Demo4";
// import Demo from "./views/Day05-01-Demo1";
// import Demo from "./views/Day05-02-Demo2";
import Demo from "./views/Day05-03-Demo3";
// import DemoOne from "./view/Day02-02-DemoOne";

const root = ReactDOM.createRoot(document.getElementById("root"));

/* Day05-02 setState 进阶处理 */
root.render(
  <>
    <Demo />
  </>
);

/* Day05-01 setState 进阶处理 */
// root.render(
//   <>
//     <Demo />
//   </>
// );

/* Day04-03 有关 ref 操作的详细解读 */
// root.render(
//   <>
//     <Demo />
//   </>
// );

/* Day04-02 有关 ref 操作的详细解读 */
// root.render(
//   <>
//     <Demo />
//   </>
// );

/* Day04-01 PureComponent 和 Component 的区别 */
// root.render(
//   <>
//     <Demo />
//   </>
// );

/* Day03-03 */
// root.render(
//   <>
//     <Vote title="react 很简单!" />
//   </>
// );

// setTimeout(() => {
//   root.render(
//     <>
//       <Vote title="5秒后，react 很简单!" />
//     </>
//   );
// }, 5000);

/* Day03-02 */
// root.render(
//   <>
//     <Vote title="react 很简单!" />
//   </>
// );

/* 
render函数在渲染的时候，如果 type 是：
    +   字符串：创建一个表情
    +   普通函数：把函数执行，并且把 props 传递给函数
    +   构造函数：把构造函数基于 new 执行[也就是创建类的一个实例，也会把解析出来的 props 传递过去]
        +   每调用一次类组件都会创建一个单独的实例
        +   把在类组件中编写的 render 函数执行，把返回的 jsx [virtualDOM] 当做组件视图进行渲染
        例如：
        new Vote({
            title: 'react 很简单!'
        })
*/

/* Day03-01 对话框组件*/
// root.render(
//   <>
//     <Dialog title="友情提示" content="做好防护!!!" />

//     <Dialog content="学习ing!!!">
//       <button>确定</button>
//       <button>sure</button>
//     </Dialog>
//   </>
// );

/* Day02-02 DemoOne 静态组件 */
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

// root.render(<div>LLL_study</div>);
