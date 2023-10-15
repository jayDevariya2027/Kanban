import React, { useContext } from "react";
import "./Status.css";
import Card from "../Card/Card";
import CardHeader from "../CardHeader/CardHeader";
import CardBody from "../CardBody/CardBody";
import { Avatar, Badge } from "antd";
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
const Status = (props) => {
  //
  const ctx = useContext(StateContext);
  const { users, tickets } = ctx;
  const status = ctx.status;

  //
  let TICKETS_WITH_USER = tickets.map((ticket) => {
    ticket["user"] = users.filter((user) => ticket.userId === user.id)[0];
    return ticket;
  });

  //
  const STATUS_CONTENT = status.map((st, index) => {
    const TICKETS = TICKETS_WITH_USER.filter((ticket) => ticket.status === st);
    return (
      <Card key={index}>
        <CardHeader title={st} noOfTickets={TICKETS.length}></CardHeader>
        {TICKETS.map((ticket) => {
          return (
            <CardBody key={ticket.id} ticket={ticket}>
              <Badge
                dot={true}
                offset={[0, 20]}
                color={ticket.user.available ? "red" : "#dfe6e9"}
                size="default"
              >
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
                  {(ticket.user.name[0] + ticket.user.name[1]).toUpperCase()}
                </Avatar>
              </Badge>
            </CardBody>
          );
        })}
      </Card>
    );
  });

  //
  return <>{STATUS_CONTENT}</>;
};

export default Status;
