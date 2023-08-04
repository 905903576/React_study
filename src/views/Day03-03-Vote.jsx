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
        ------
        设置规则校验

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

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      // supNum: 8,
      // oppNum: 2,
    };
  }

  render() {
    let { title } = this.props;
    return (
      <div className="vote">
        <div className="header">
          <h2 className="title">{title}</h2>
          <span>15人</span>
        </div>
        <div className="main">
          <p>支持人数：8人</p>
          <p>反对人数：7人</p>
        </div>
        <div className="footer">
          <button>支持</button>
          <button>反对</button>
        </div>
      </div>
    );
  }
}

export default Vote;
