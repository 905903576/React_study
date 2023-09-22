import React from "react";

class Demo extends React.Component {
  // 手指按下：记录手指的起始坐标
  touchstart = (ev) => {
    console.log(ev);
    let finger = ev.changedTouches[0]; // 记录了操作手指的相关信息
    this.touch = {
      startX: finger.pageX,
      startY: finger.pageY,
      isMove: false,
    };
    console.log(this.touch);
  };
  // 手指移动：记录手指偏移值，和误差值做对比，分析出是否发生移动
  touchMove = (ev) => {
    let finger = ev.changeTouches[0],
      { startX, startY } = this.touch;
    let changeX = finger.pageX - startX,
      changeY = finger.pageY - startY;
    if (Math.abs(changeX) > 10 || Math.abs(changeY) > 10) {
      this.touch.isMove = true;
    }
  };
  // 手指离开：根据 isMove 判断是否是点击
  touchEnd = (ev) => {
    let { isMove } = this.touch;
    if (isMove) return;
    console.log("点击了按钮");
  };
  render() {
    return (
      <div>
        <button
          onTouchStart={this.touchstart}
          onTouchMove={this.touchMove}
          onTouchEnd={this.touchEnd}
        >
          提交
        </button>
      </div>
    );
  }
}

export default Demo;
