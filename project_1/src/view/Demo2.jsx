import React, { useState } from "react";
import { Button } from "antd";
import "./Demo.less";
import { flushSync } from "react-dom";

/* 官方建议是: 需要多个状态，就把 useState 执行多次即可 */

const Vote = function Vote(props) {
  let [x, setX] = useState(10),
    [y, setY] = useState(5),
    [z, setZ] = useState(5);

  const handle = (type) => {
    flushSync(() => {
      setX(x + 1);
      setY(y + 1);
    });
    setZ(z + 1);
  };

  return (
    <div className="demo">
      <span className="num">x:{x}</span>
      <span className="num">y:{y}</span>
      <span className="num">z:{z}</span>
      <Button type="primary" size="small" onClick={handle}>
        新增
      </Button>
    </div>
  );
};
export default Vote;
