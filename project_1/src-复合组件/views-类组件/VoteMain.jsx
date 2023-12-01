/*
 * @Author: LLL 905903576@qq.com
 * @Date: 2023-11-28 16:42:46
 * @LastEditors: LLL 905903576@qq.com
 * @LastEditTime: 2023-11-28 17:08:36
 * @FilePath: \project_1\src-复核组件\views\VoteMain.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import PropTypes from "prop-types";

class VoteMain extends React.Component {
  /* 属性规则校验 */
  static defaultProps = {
    supNum: 0,
    oppNum: 0,
  };
  static propTypes = {
    supNum: PropTypes.number,
    oppNum: PropTypes.number,
  };

  render() {
    let { supNum, oppNum } = this.props;
    let ratio = "--",
      total = supNum + oppNum;
    if (total > 0) ratio = ((supNum / total) * 100).toFixed(2) + "%";
    return (
      <div className="main">
        <p>支持人数：{supNum}人</p>
        <p>反对人数：{oppNum}人</p>
        <p>支持比率：{ratio}</p>
      </div>
    );
  }
}

export default VoteMain;
