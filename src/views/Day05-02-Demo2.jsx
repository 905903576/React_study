import React from "react";
import { flushSync } from "react-dom";
// flushSync: 可以刷新 "updater 更新队列",也就是让修改状态的任务立即批处理一次!!

class Demo extends React.Component {
  state = {
    x: 10,
    y: 5,
    z: 0,
  };

  //   handle = () => {
  //     let { x, y, z } = this.state;
  //     this.setState({ x: x + 1 }); // 异步
  //     this.setState({ y: y + 1 }); // 异步
  //     console.log(this.state); // {x:10,y:5,z:0}
  //     setTimeout(() => {
  //       this.setState({ z: z + 1 }); // React16(同步): 渲染 ->  {x:11,y:6,z:1}
  //       console.log(this.state); // React18(异步): {x:11,y:6,z:1} -> 渲染
  //     }, 1000);
  //   };
  handle = () => {
    let { x, y } = this.state;

    this.setState({ x: x + 1 });
    console.log(this.state); // 10/5/0
    flushSync(() => {
      this.setState({ y: y + 1 });
      console.log(this.state); // 10/5/0
    });
    // 在 flushSync 操作结束后，会立即 "刷新" 更新队列
    console.log(this.state); // 11/6/0
    // 在修改 z 之前，要保证 x/y 都已经更改和让视图更新了
    this.setState({ z: this.state.x + this.state.y });
  };

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
在 React18 和 React16 当中，关于 setState 是同步还是异步，是有一些区别的!
    React18中：不论在什么地方执行 setState，他都是异步的 [都是基于 Updater 更新队列机制，实现批处理]
    React16中：如果在合成事件中 [jsx 元素中基于 onXxx 绑定的事件]、周期函数中，setState 的操作是异步的 !! 但是如果
    setState 出现在异步操作中 [例如：定时器、手动获取 DOM 元素做的事件绑定等]，他将变为同步的操作 [立即更新状态和让
    视图渲染] !!
*/
