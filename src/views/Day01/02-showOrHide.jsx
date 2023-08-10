import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

/* 需求依： 基于数据的值，来判断元素的显示隐藏 */

let flag = true;

root.render(
  <>
    {/* 控制元素的 display 样式： 不论显示还是隐藏，元素本身都渲染出来了 */}
    <button
      style={{
        display: flag ? "block" : "none",
      }}
    >
      按钮1
    </button>

    <br />

    {/* 控制元素渲染或者不渲染 */}
    {flag ? <button>按钮2</button> : null}
    {flag && <button>按钮2</button>}

    <br />

    <button>{flag ? "显示" : "隐藏"}</button>
  </>
);
