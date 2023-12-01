/*
 * @Author: LLL 905903576@qq.com
 * @Date: 2023-11-30 10:09:38
 * @LastEditors: LLL 905903576@qq.com
 * @LastEditTime: 2023-11-30 11:34:41
 * @FilePath: \project_1\src-复核组件\views-函数组件\VoteFooter.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { memo } from "react";
import { Button } from "antd";
import PropTypes from "prop-types";

const VoteFooter = (props) => {
  let { change } = props;
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
};

/* 属性规则校验 */
VoteFooter.defaultProps = {};

VoteFooter.prototype = {
  change: PropTypes.func.isRequired,
};

export default memo(VoteFooter);
