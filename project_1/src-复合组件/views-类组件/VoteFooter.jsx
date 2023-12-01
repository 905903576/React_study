/*
 * @Author: LLL 905903576@qq.com
 * @Date: 2023-11-28 16:42:46
 * @LastEditors: LLL 905903576@qq.com
 * @LastEditTime: 2023-11-30 10:10:42
 * @FilePath: \project_1\src-复核组件\views\VoteFooter.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { Button } from "antd";
import PropTypes from "prop-types";

class VoteFooter extends React.PureComponent {
  /* 属性规则校验 */
  static defaultProps = {};
  static propTypes = {
    change: PropTypes.func.isRequired,
  };

  render() {
    let { change } = this.props;
    return (
      <div className="footer">
        <Button type="primary" onClick={change.bind(null, "sup")}>
          支持
        </Button>
        <Button type="primary" danger onClick={change.bind(null, "opp")}>
          反对
        </Button>
      </div>
    );
  }
}

export default VoteFooter;
