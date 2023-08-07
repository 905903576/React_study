import React from "react";

class Demo extends React.Component {
  box3 = React.createRef(); // this.box3 = xxx
  render() {
    return (
      <div>
        <h2 className="title" ref="title">
          温馨提示
        </h2>
        <h2 className="title" ref={(x) => (this.box2 = x)}>
          友情提示
        </h2>
        <h2 className="title" ref={this.box3}>
          郑重提示
        </h2>
      </div>
    );
  }
  componentDidMount() {
    // 第一次渲染完毕 [virtualDOM 已经变成真实 DOM]：此时我们可以获取需要操作的 DOM 元素
    // console.log(document.querySelector(".title"));
    // console.log(this.refs.title);
    // console.log(this.box2);
    console.log(this.box3.current);
  }
}

export default Demo;

/* 
    受控组件：基于修改数据，让视图更新，达到需要的效果 [推荐]
    非受控组件：基于 ref 获取 DOM 元素，来实现需求和效果 [偶尔]
        基于 ref 获取 DOM 元素的语法
        1.给需要获取的元素设置 ref='xxx',后期基于 this.refs.xxx 去获取相应的 DOM 元素 [不推荐使用：在React.
        StrictMode 模式下会报错]
            <h2 ref="title">...</h2>
            获取：this.refs.title

        2.把 ref 属性值设置为一个函数
            ref={x=>this.xxx=x}
                + x 是函数的形参：存储的就是当前 DOM 元素
                + 然后我们获取的 DOM 元素 "x" 直接挂载到实例的某个属性上(例如：box2)
            获取：this.xxx
        
        3.基于 React.createRef() 方法创建一个 REF对象 -> { current: null }
            this.xxx = React.createRef();   // => this.xxx = {current: null}
            ref={ REF对象(this.xxx) }
            获取：this.xxx.current

        原理：在 render 渲染的时候，会获取 virtualDOM 的 ref 属性
            + 如果属性值是一个字符串，则会给 this.refs 增加这样的一个成员，成员值就是当前的 DOM 元素
            + 如果属性值是一个函数，则会把函数执行，把当前 DOM 元素传递给这个函数 [x -> DOM 元素] ,而在函数执行的内部，
            我们一般都会把 DOM 元素直接挂载到实例的某个属性上
*/
