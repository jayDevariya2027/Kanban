import React from "react";
import "./Navbar.css";
import "../../App.css";
import GroupNav from "./GroupNav";
import OrderNav from "./OrderNav";
import { Outlet } from "react-router-dom";
import { Dropdown, Space, Image } from "antd";
import { DownOutlined } from "@ant-design/icons";
import filter_icon from "../../assets/filter.png";

const RootLayout = () => {
  const item1 = (
    <div className="dd_item">
      <div className="dd_item_title">Grouping : </div>
      <div className="dd_item_ele">
        <GroupNav />
      </div>
    </div>
  );
  const item2 = (
    <div className="dd_item">
      <div className="dd_item_title">Ordering : </div>
      <div className="dd_item_ele">
        <OrderNav />
      </div>
    </div>
  );
  const items = [
    {
      key: "main",
      type: "group",
      children: [
        {
          label: item1,
          key: "0",
        },
        {
          type: "divider",
        },
        {
          label: item2,
          key: "1",
        },
      ],
    },
  ];
  return (
    <div>
      <div className="main-dd-div">
        <Dropdown
          menu={{
            items,
            selectable: true,
          }}
          trigger={["click"]}
          className="dropdown"
        >
          <a
            onClick={(e) => e.preventDefault()}
            style={{
              display: "flex",
              width: "fit-content",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Space>
              <Image src={filter_icon} width={25}></Image>
              Display
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
      <div className="main-card-div">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
