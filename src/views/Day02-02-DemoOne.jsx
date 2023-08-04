import PropTypes from "prop-types";
import React from "react";

const DemoOne = function DemoOne(props) {
  let { title, x, children } = props;
  // 要对 children（相当于 vue 的slot） 的类型做处理
  // 可以基于 React.Children 对象中提供的方法，对 props.children 做处理：count/forEach/map/toArray...
  // 好处：在这些方法的内部，已经对 children 的各种形式做了处理
  children = React.Children.toArray(children); // 把插槽信息变为数组
  let headerSlot = [],
    footerSlot = [],
    defaultSlot = [];
  children.forEach((child) => {
    // 按照插槽名字，筛选出不同的插槽信息
    // 传递进来的插槽信息，都是编译为 virtualDOM 后传递进来的 【而不是传递的标签】
    // 父组件定义的插槽名为 slot，这里就用 slot 解构（如果父组件为 aaa，这里就为 aaa）
    let { slot } = child.props;
    if (slot === "header") {
      headerSlot.push(child);
    } else if (slot === "footer") {
      footerSlot.push(child);
    } else {
      defaultSlot.push(child);
    }
  });

  return (
    /* 把筛选出来的具体插槽信息，放在指定的位置进行渲染 */
    <div className="demoBox">
      {headerSlot}
      {/* 不具名插槽使用方法 */}
      {/* {children[0]} */}
      <br />
      <h2 className="title">{title}</h2>
      <span>{x}</span>
      <br />
      {footerSlot}
      {/* 不具名插槽使用方法 */}
      {/* {children[1]} */}
    </div>
  );
};

/* 通过把函数当做对象，设置静态的私有属性方法，来给其设置属性的校验规则 */
DemoOne.defaultProps = {
  x: 0,
};
DemoOne.propTypes = {
  title: PropTypes.string.isRequired,
  x: PropTypes.number,
  y: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DemoOne;
