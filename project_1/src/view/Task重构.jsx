import React, { useState, useEffect } from "react";
import "./Task.less";
import {
  Button,
  Tag,
  Table,
  Popconfirm,
  Modal,
  Form,
  Input,
  DatePicker,
  message,
} from "antd";
import { getTaskList, addTask, removeTask, completeTask } from "@/api";

// 时间补零
const zero = function zero(text) {
  text = String(text);
  return text.length < 2 ? "0" + text : text;
};
// 格式化时间
const formatTime = function formatTime(time) {
  let arr = time.match(/\d+/g),
    [, month, day, hours = "00", minutes = "00"] = arr;
  return `${zero(month)}-${zero(day)} ${zero(hours)}:${zero(minutes)}`;
};

const Task = function Task() {
  // 定义表格列的数据
  const columns = [
    {
      title: "编号",
      dataIndex: "id",
      align: "center",
      width: "8%",
    },
    {
      title: "任务描述",
      dataIndex: "task",
      ellipsis: true,
      width: "50%",
    },
    {
      title: "状态",
      dataIndex: "state",
      align: "center",
      width: "10%",
      render: (text) => (+text === 1 ? "未完成" : "已完成"),
    },
    {
      title: "完成时间",
      dataIndex: "time",
      align: "center",
      width: "15%",
      render: (_, record) => {
        let { state, time, complete } = record;
        if (+state === 2) time = complete;
        return formatTime(time);
      },
    },
    {
      title: "操作",
      render: (_, record) => {
        let { state, id } = record;
        return (
          <>
            <Popconfirm
              title="您确定要删除此任务吗?"
              onConfirm={removeHandle.bind(null, id)}
            >
              <Button type="link">删除</Button>
            </Popconfirm>

            {+state !== 2 ? (
              <Popconfirm
                title="您确把此任务设置为完成吗?"
                onConfirm={updateHandle.bind(null, id)}
              >
                <Button type="link">完成</Button>
              </Popconfirm>
            ) : null}
          </>
        );
      },
    },
  ];

  /* 定义需要的状态 */
  let [selectedIndex, setSelectedIndex] = useState(0),
    [tableData, setTableData] = useState([]),
    [tableLoading, setTableLoading] = useState(false),
    [modalVisible, setModalVisible] = useState(false),
    [confirmLoading, setConfirmLoading] = useState(false);

  // let formIns = useRef(null);
  let [formIns] = Form.useForm();

  /* 关于 table 和数据的处理 */
  const query = async () => {
    try {
      let { code, list } = await getTaskList(selectedIndex);
      if (+code !== 0) list = [];
      setTableData(list);
    } catch (_) {}
    setTableLoading(false);
  };
  /* 通过 useEffect 依赖的方式来触发更新数据 */
  useEffect(() => {
    query();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex]);

  /* 关于 modal 和 表单的处理 */
  const closeModal = () => {
    setModalVisible(false);
    setConfirmLoading(false);
    formIns.resetFields();
  };
  const submit = async () => {
    // console.log(formIns.current);
    // console.log(formIns);
    try {
      await formIns.validateFields();
      let { task, time } = formIns.getFieldValue();
      time = time.format("YYYY-MM-DD HH:mm:ss");
      // 表单校验通过, 向服务器发生请求
      setConfirmLoading(true);
      let { code } = await addTask(task, time);
      if (+code === 0) {
        closeModal();
        query();
        message.success("新增任务成功");
      } else {
        message.error("新增任务失败");
      }
    } catch (_) {}
  };

  /* 删除和完成操作 */
  const removeHandle = async (id) => {
    try {
      let { code } = await removeTask(id);
      if (+code === 0) {
        query();
        message.success("删除任务成功");
      } else {
        message.error("删除任务失败");
      }
    } catch (_) {}
  };
  const updateHandle = async (id) => {
    try {
      let { code } = await completeTask(id);
      if (+code === 0) {
        query();
        message.success("完成任务成功");
      } else {
        message.error("完成任务失败");
      }
    } catch (_) {}
  };

  return (
    <div className="task-box">
      {/* 头部 */}
      <div className="header">
        <h2 className="title">TASK OA 任务管理系统</h2>
        <Button
          type="primary"
          onClick={() => {
            setModalVisible(true);
          }}
        >
          新增任务
        </Button>
      </div>

      {/* 标签 */}
      <div className="tag-box">
        {["全部", "未完成", "已完成"].map((item, index) => {
          return (
            <Tag
              key={index}
              color={selectedIndex === index ? "#1677ff" : ""}
              onClick={() => {
                // useState 内部优化机制 如果相等, 状态不会更新, 视图也不会重新渲染
                // if (selectedIndex === index) return;
                setSelectedIndex(index);
              }}
            >
              {item}
            </Tag>
          );
        })}
      </div>

      {/* 表格 */}
      <Table
        dataSource={tableData}
        columns={columns}
        loading={tableLoading}
        pagination={false}
        rowKey="id"
      />

      {/* 对话框 & 表单 */}
      <Modal
        title="新增任务窗口"
        open={modalVisible}
        confirmLoading={confirmLoading}
        keyboard={false}
        maskClosable={false}
        okText="确认提交"
        onCancel={closeModal}
        onOk={submit}
      >
        <Form
          // ref={formIns}
          form={formIns}
          layout="vertical"
          initialValues={{
            task: "",
            time: "",
          }}
          validateTrigger="onBlur"
        >
          <Form.Item
            label="任务描述"
            name="task"
            validateTrigger="onBlur"
            rules={[
              { required: true, message: "任务描述是必填项" },
              { min: 6, message: "输入的内容至少6位及以上" },
            ]}
          >
            <Input.TextArea rows={4}></Input.TextArea>
          </Form.Item>
          <Form.Item
            label="预期完成时间"
            name="time"
            validateTrigger="onBlur"
            rules={[{ required: true, message: "预期完成时间是必填项" }]}
          >
            <DatePicker showTime />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Task;
