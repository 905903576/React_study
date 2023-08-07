/* 
创建类组件
    创建一个构造函数(类)
        +   要求必须继承 React.Component/PureComponent 这个类
        +   我们习惯于使用 ES6 中的 class 创建类 [因为方便]
        +   必须给当前类设置一个 render 的方法[放在其原型上]：在 render 方法中，返回需要渲染的视图
    从调用类组件 [new Vote({...})] 开始，类组件内部发生的事情：
    先规则校验，校验完毕后，再处理属性的其他操作!!
        1.初始化属性 && 规则校验
        方案一：
            constructor(props) {
                super(props); // 会把传递进来的属性挂载到 this 实例上
                console.log(this.props) // 获取到传递的属性
            }
        方案二：及时我们自己不在 constructor 中处理[或者 constructor 都没写]，在 constructor 处理完毕后，React 内部也会把传递的 props 挂载到实例上；
        所以在其它的函数中，只要保证 this 是实例，就可以基于 this.props 获取传递的属性
            +   同样 this.props 获取的属性对象也是被冻结的{只读的}  Object.isFrozen(this.props) -> true

        2.初始化状态
            状态：后期修改状态，可以触发视图的更新
            需要手动初始化，如果我们没有去做相关的处理，则默认回望实例上挂着一个 state，初始值是 null => this.state = null
            手动处理:
            state = {
              ...
            }
          ---------------修改状态：控制视图更新
          this.state.xxx=xxx:这种操作仅仅是修改了状态值，但是无法让视图更新
          想让视图更新，我们需要基于 React.Component.prototype 提供的方法操作：
            @1  this.setState(partialState) 既可以修改状态，也可以让视图更新 [推荐]
              partialState：部分状态
              this.setState({
                xxx: xxx
              })
            @2  this.forceUpdate() 强制更新

        3.触发 componentDidMount 周期函数（钩子函数）：组件第一次渲染之前
          钩子函数：在程序运行到某个阶段，我们可以基于提供一个函数处理，让开发者在这个阶段做一些自定义的事情
          + 此周期函数：目前是不安全的[虽然可以用，但是未来可能要被移除了，所以不建议使用]
              + 控制会抛出黄色警告[为了不抛出警告，我们可以暂时使用 UNSAFE_componentWillMount]
          + 如果开启了 React.StrictMode [React 的严格模式]，则我们使用 UNSAFE_componentWillMount 这样的函数，控制台会直接抛出红色警告错误！！
            React.StrictMode VS "use strict"
            + "use strict": JS的严格模式
            + React.StrictMode: React 的严格模式，他会去检查 React 中一些不规范的语法、或者是一些不建议使用的 API 等

        4.触发 render 函数

        5.触发 componentDidMount 周期函数：第一次渲染完毕
          + 已经把 virtualDOM 变为真实 DOM 了[所有我们可以获取真实 DOM 了]
          + ...

*/

import React from "react";
import PropTypes from "prop-types";

class Vote extends React.Component {
  // 属性规则校验
  static defaultProps = {
    num: 0,
  };
  static propTypes = {
    title: PropTypes.string.isRequired,
    num: PropTypes.number,
    // supNum: PropTypes.number,
    // oppNum: PropTypes.number,
  };

  /* 初始化状态 */
  state = {
    supNum: 10,
    oppNum: 5,
  };

  render() {
    console.log("render：渲染");
    let { title } = this.props,
      { supNum, oppNum } = this.state;

    return (
      <div className="vote">
        <div className="header">
          <h2 className="title">{title}</h2>
          <span>{supNum + oppNum}人</span>
        </div>
        <div className="main">
          <p>支持人数：{supNum}人</p>
          <p>反对人数：{oppNum}人</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              this.setState({
                supNum: supNum + 1,
              });
            }}
          >
            支持
          </button>
          <button
            onClick={() => {
              this.state.oppNum++;
              this.forceUpdate();
            }}
          >
            反对
          </button>
        </div>
      </div>
    );
  }

  UNSAFE_componentWillMount() {
    console.log("componentDidMount：第一次渲染之前");
  }

  componentDidMount() {
    console.log("componentDidMount：第一次渲染完毕");
  }
}

export default Vote;
