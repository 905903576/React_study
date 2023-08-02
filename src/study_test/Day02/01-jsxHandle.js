/* 
    封装一个对象迭代方法
        + 基于传统的 for/in 循环，会存在一些弊端[性能较差（即可迭代私有的，也可以迭代公有的）只能迭代"可枚举、非 Symbol 类型的"属性...]
        + 解决思路：获取对象所有的私有属性[私有的、不论是否可枚举、不论类型]
          + Object.getOwnPropertyNames(arr) -> 获取对象非 Symbol 类型的私有属性[无关是否可枚举]
          + Object.getOwnPropertySymbols(arr) -> 获取 Symbol 类型的私有属性
          获取所有的私有属性：
            let keys = Object.getOwnPropertyNames(arr).concat(Object.getOwnPropertySymbols(arr))
          可以基于 ES6 中的 Reflect.ownKeys 代替上述操作[弊端：不兼容 IE ]
            let keys = Reflect.ownKeys(arr)
 */

const each = function each(obj, callback) {
  if (obj === null || typeof obj !== "object")
    throw new TypeError("obj is not a object");
  if (typeof callback !== "function")
    throw new TypeError("callback is not a function");
  // 获取对象所有的私有属性
  let keys = Reflect.ownKeys(obj);
  keys.forEach((key) => {
    let value = obj[key];
    callback(value, key);
  });
};

/* createElement:创建虚拟 DOM 对象 */
export function createElement(ele, props, ...children) {
  let virtualDOM = {
    $$typeof: Symbol("react.element"),
    key: null,
    ref: null,
    // 标签名
    type: "",
    // 属性
    props: {},
  };
  let len = children.length;
  virtualDOM.type = ele;
  if (props) {
    virtualDOM.props = {
      ...props,
    };
  }
  if (len === 1) virtualDOM.props.children = children[0];
  if (len > 1) virtualDOM.props.children = children;
  return virtualDOM;
}

// console.log(
// createElement(
//   React.Fragment,
//   null,
//   createElement("h1", { id: "title" }, "Hello World"),
//   createElement("p", null, "This is a paragraph"),
//   createElement("p", null, "This is another paragraph")
// )
//   );

/* createElement:把虚拟 DOM 变为真实 DOM */
export function render(virtualDOM, container) {
  let { type, props } = virtualDOM;
  if (typeof type === "string") {
    // 存储的是标签名：动态创建一个标签
    let ele = document.createElement(type);
    // 为标签设置相关的属性 & 子节点
    each(props, (value, key) => {
      // className的处理：value存储的是样式类名
      if (key === "className") {
        ele.className = value;
        return;
      }
      // style的处理: value 存储的是样式对象
      if (key === "style") {
        each(value, (val, attr) => {
          ele.style[attr] = val;
        });
        return;
      }
      // 子节点的处理: value 存储的 children 属性值
      if (key === "children") {
        let children = value;
        if (!Array.isArray(children)) children = [children];
        children.forEach((child) => {
          // 子节点是文本节点：直接插入
          if (/^(string|number)$/.test(typeof child)) {
            ele.appendChild(document.createTextNode(child));
            return;
          }
          // 子节点又是一个 virtualDOm：递归处理
          render(child, ele);
        });
        return;
      }
      // 普通属性
      ele.setAttribute(key, value);
    });

    // 把新增的标签，增加到指定容器中
    container.appendChild(ele);
  }
}

// let styObj = {
//   color: "red",
//   fontSize: "20px",
// };

// let x = 10,
//   y = 20;

// let jsxObj = createElement(
//   "div",
//   { className: "container" },
//   createElement("h2", { className: "title", style: styObj }, "Hello World"),
//   createElement(
//     "div",
//     { className: "box" },
//     createElement("span", null, x),
//     createElement("span", null, y)
//   )
// );

// render(jsxObj,document.getElementById('root'))
