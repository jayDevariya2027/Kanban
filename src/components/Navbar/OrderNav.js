import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import StateContext from "../../store/StateContext";

const OrderNav = (props) => {
  //
  const ctx = useContext(StateContext);
  const location = useLocation();
  const _isActive = (path) => location.pathname === path;

  const items = [
    {
      label: "Priority",
      key: "0",
      onClick: () => ctx.handleOrder("priority"),
    },
    {
      type: "divider",
    },
    {
      label: "Title",
      key: "1",
      onClick: () => ctx.handleOrder("title"),
    },
  ];

  //
  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
      }}
      trigger={["click"]}
      className="dropdown"
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default OrderNav;
