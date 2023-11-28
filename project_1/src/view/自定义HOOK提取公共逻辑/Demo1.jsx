/*
 * @Author: LLL 905903576@qq.com
 * @Date: 2023-11-20 15:57:45
 * @LastEditors: LLL 905903576@qq.com
 * @LastEditTime: 2023-11-28 11:55:36
 * @FilePath: \project_1\src\view\自定义HOOK提取公共逻辑\Demo1.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from "react";
import { Button } from "antd";
import "../useMemo构建计算缓存/Demo.less";

/**
 * 自定义 Hook
 *  作用: 提取封装一些公共的处理逻辑
 *  玩法: 创建一个函数, 名字需要时 useXxx, 后期就可以再组件中调用这个方法!
 */

const usePartialState = (initialValue) => {
  let [state, setState] = useState(initialValue);
  // setState: 不支持部分状态更改
  // setPartial: 我们期望这个方法可以支持部分状态更改
  const setPartial = (partialState) => {
    setState({
      ...state,
      ...partialState,
    });
  };

  return [state, setPartial];
};

// 自定义 Hook, 在组件第一次渲染完毕后,统一干点啥事
const useDidMount = (title) => {
  if (!title) title = "LLL";
  // 基于 React 内部的 Hook 函数, 实现需求即可
  useEffect(() => {
    document.title = title;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

const Demo = () => {
  let [state, setPartial] = usePartialState({
    supNum: 10,
    oppNum: 10,
  });

  const handle = (type) => {
    if (type === "sup") {
      setPartial({
        supNum: state.supNum + 1,
      });
      return;
    }
    setPartial({
      oppNum: state.oppNum + 1,
    });
  };

  useDidMount("测试");

  return (
    <div className="voteBox">
      <div className="main">
        <p>支持人数: {state.supNum}人</p>
        <p>反对人数: {state.oppNum}人</p>
      </div>
      <div className="footer">
        <Button type="primary" onClick={handle.bind(null, "sup")}>
          支持
        </Button>
        <Button type="primary" danger onClick={handle.bind(null, "opp")}>
          反对
        </Button>
      </div>
    </div>
  );
};

export default Demo;
