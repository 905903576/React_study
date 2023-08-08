import React from "react";
// import { flushSync } from "react-dom";

/* 
this.setState((prevState)=>{
    // prevState: 存储之前的状态值
    // return 的对象，就是我们想要修改的新状态值 [支持修改部分状态]
    return {
        xxx:xxx
    };
})
*/

class Demo extends React.Component {
  state = {
    x: 0,
  };
  handle = () => {
    for (let i = 0; i < 20; i++) {
      // 让视图渲染 1 次 最后结果是 1
      /* this.setState({
            x: this.state.x + 1,
          }); */

      // 使用 flushSync
      // 让视图渲染 20 次 最后结果是 20
      /* flushSync(() => {
        this.setState({
          x: this.state.x + 1,
        });
      }); */
      /* this.setState({
        x: this.state.x + 1,
      });
      flushSync(); */

      /* 让视图渲染1次 最后结果是 20  */
      this.setState((prevState) => {
        return {
          x: prevState.x + 1,
        };
      });
    }
  };

  render() {
    console.log("视图渲染：RENDER");
    let { x } = this.state;
    return (
      <div>
        x:{x}
        <br />
        <button onClick={this.handle}>按钮</button>
      </div>
    );
  }
}

export default Demo;
