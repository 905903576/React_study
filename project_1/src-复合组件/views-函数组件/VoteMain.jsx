/*
 * @Author: LLL 905903576@qq.com
 * @Date: 2023-11-30 10:09:38
 * @LastEditors: LLL 905903576@qq.com
 * @LastEditTime: 2023-11-30 12:01:24
 * @FilePath: \project_1\src-复核组件\views-函数组件\VoteMain.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useMemo } from "react";
import PropTypes from "prop-types";

const VoteMain = (props) => {
  let { supNum, oppNum } = props;

  let ratio = useMemo(() => {
    let ratio = "--",
      total = supNum + oppNum;
    if (total > 0) ratio = ((supNum / total) * 100).toFixed(2) + "%";
    return ratio;
  }, [supNum, oppNum]);

  return (
    <div className="main">
      <p>支持人数：{supNum}人</p>
      <p>反对人数：{oppNum}人</p>
      <p>支持比率：{ratio}</p>
    </div>
  );
};

/* 属性规则校验 */
VoteMain.defaultProps = {
  supNum: 0,
  oppNum: 0,
};

VoteMain.prototype = {
  supNum: PropTypes.number,
  oppNum: PropTypes.number,
};

export default VoteMain;
