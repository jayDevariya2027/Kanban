import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const GroupNav = () => {
  //
  const location = useLocation();
  const _isActive = (path) => location.pathname === path;
  const items = [
    {
      label: (
        <NavLink
          to="/groupby/users"
          className={_isActive("/groupby/users") && "custom-active"}
        >
          Users
        </NavLink>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: (
        <NavLink
          to="/groupby/status"
          className={_isActive("/groupby/status") && "custom-active"}
        >
          Status
        </NavLink>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <NavLink
          to="/groupby/priority"
          className={_isActive("/groupby/priority") && "custom-active"}
        >
          Priority
        </NavLink>
      ),
      key: "3",
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

export default GroupNav;
