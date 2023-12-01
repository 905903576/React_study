/*
 * @Author: LLL 905903576@qq.com
 * @Date: 2023-11-30 10:09:38
 * @LastEditors: LLL 905903576@qq.com
 * @LastEditTime: 2023-11-30 11:37:44
 * @FilePath: \project_1\src-复核组件\views-函数组件\Vote.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useCallback, useState } from "react";
import "./Vote.less";
import VoteMain from "./VoteMain";
import VoteFooter from "./VoteFooter";

const Vote = () => {
  let [supNum, setSupNum] = useState(10),
    [oppNum, setOppNum] = useState(0);

  const change = useCallback(
    (type) => {
      if (type === "sup") {
        setSupNum(supNum + 1);
        return;
      }
      setOppNum(oppNum + 1);
    },
    [supNum, oppNum]
  ); // 只要supNum/oppNum状态改变, 就会重新创建新的方法

  return (
    <div className="vote-box">
      <div className="header">
        <h2 className="title">React是很棒的前端框架</h2>
        <span className="num">{supNum + oppNum}</span>
      </div>
      <VoteMain supNum={supNum} oppNum={oppNum} />
      <VoteFooter change={change} />
    </div>
  );
};

export default Vote;
