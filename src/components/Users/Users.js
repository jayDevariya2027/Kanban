import React, { useContext } from "react";
import "./User.css";
import Card from "../Card/Card";
import CardHeader from "../CardHeader/CardHeader";
import CardBody from "../CardBody/CardBody";
import { Avatar, Badge } from "antd";
import { UserOutlined } from "@ant-design/icons";
import StateContext from "../../store/StateContext";

//
const BG_COLORS = [
  "#f56a00",
  "#87d068",
  "#1677ff",
  "#34e7e4",
  "#ff3f34",
  "#3c40c6",
  "#ffa801",
];

//
const Users = (props) => {
  const ctx = useContext(StateContext);
  //
  const { users, tickets } = ctx;

  //
  const USER_CONTENT = users.map((user, index) => {
    const USER_TICKETS = tickets.filter((ticket) => {
      return ticket.userId === user.id;
    });

    return (
      <Card key={index}>
        <CardHeader title={user.name} noOfTickets={USER_TICKETS.length}>
          <Avatar
            size="small"
            style={{
              backgroundColor:
                BG_COLORS[
                  Number.parseInt(
                    Math.floor((Math.random() * 10) % BG_COLORS.length)
                  )
                ],
            }}
          >
            {(user.name[0] + user.name[1]).toUpperCase()}
          </Avatar>
        </CardHeader>
        {USER_TICKETS.map((ticket) => {
          return (
            <CardBody key={ticket.id} ticket={ticket}>
              {/* offset={[left, top]} */}
              <Badge
                dot={true}
                offset={[0, 20]}
                color={user.available ? "red" : "#dfe6e9"}
                size="default"
              >
                <Avatar size="small" icon={<UserOutlined />} />
              </Badge>
            </CardBody>
          );
        })}
      </Card>
    );
  });

  return <>{USER_CONTENT}</>;
};

export default Users;
