import React from "react";

/* 
    在 React18 中，setState 在任何地方执行，都是 "异步处理"
        + React18 中有一套更新队列的机制
        + 基于异步操作，实现状态的 "批处理"
    好处：
        + 减少视图更新的次数，降低渲染消耗的性能
        + 让更新的逻辑和流程更清晰&稳健
*/

class Demo extends React.Component {
  state = {
    x: 10,
    y: 5,
    z: 0,
  };

  handle = () => {
    // this -> 实例 [宿主环境]
    // let { x, y, z } = this.state;
    // this.setState({ x: 100 }, () => {
    //   console.log("X更新完毕");
    // });
    // 同时修改三个状态值：只会触发一次视图更新
    // this.setState({
    //   x: x + 1,
    //   y: y + 1,
    //   z: z + 1,
    // });
    /* 
        不会立即更新状态和视图，而是加入到队列中

        在产生的私有上下文中，代码自上而下执行
            @1 会把所有的 setState 操作，先加入到更新队列 [支队当前上下文，同步要做的事情做处理]
            @2 当上下文中的代码都处理完毕后，会让更新队列中的任务，统一渲染/更新一次 [批处理]
    */
    // this.setState({ x: x + 1 });
    // console.log(this.state.x); // 10
    // this.setState({ y: y + 1 });
    // console.log(this.state.y); // 5
    // this.setState({ z: z + 1 });
    // console.log(this.state.z); // 0
    console.log(this.state, "state");
  };
  //   shouldComponentUpdate() {
  //     return false;
  //   }

  //   componentDidUpdate() {
  //     console.log("更新完毕");
  //   }

  render() {
    console.log("视图渲染：RENDER");
    let { x, y, z } = this.state;
    return (
      <div>
        x:{x} - y:{y} - z:{z}
        <br />
        <button onClick={this.handle}>按钮</button>
      </div>
    );
  }
}

export default Demo;

/* 
this.setState([partialState],[callback])
    [partialState]: 支持部分状态更改
        this.setState({
            x: 100  // 不论总共有多少状态，我们只修改了 x，其余的状态不动
        })
    [callback]: 在状态更改/视图更新完毕后触发执行 [也可以说只要执行了 setState, callback 一定会执行]
        + 发生在 componentDidUpdate 周期函数之后 [ DidUpdate 会在任何状态更改后都触发执行；而回调函数方式，可以在指定状态更新后
        处理一些事情；]
        + 特殊：即便我们基于 shouldComponentUpdate 阻止了状态/视图的更新，DidUpdate 周期函数肯定不会执行了，但是我们设置的这个
        callback 回调函数依然会被触发执行 !!
    类似于 Vue 框架中的 $nextTick !!

在 React18 中，setState 操作都是异步的 [不论是在哪执行，例如：合成事件、周期函数、定时器...]
    目的：实现状态的批处理 [统一处理]
        + 有效减少更新次数，降低性能消耗
        + 有效管理代码执行的逻辑顺序
        + ...
    原来：利用了更新队列 [updater] 机制来处理的
        + 在当前相同时间段内 [浏览器此时可以处理的事情中]，遇到 setState 会立即放到更新队列中!
        + 此时状态/视图还未更新
        + 当所有的代码操作结束，会 "刷新队列" [通知更新队列中的任务执行]：把所有放入的 setState 合并在一起执行，只触发一次视图更
        新[批处理操作]
*/
