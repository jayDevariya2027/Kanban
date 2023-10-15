import React from "react";
import "./CardBody.css";
import { Checkbox } from "antd";

// img realted content
import { DashOutlined, InfoOutlined } from "@ant-design/icons";
import { Image } from "antd";
import progress_1 from "../../assets/progress-1.png";
import progress_2 from "../../assets/progress-2.png";
import progress_3 from "../../assets/progress-3.png";
import backlog from "../../assets/backlog.png";
import inProgress from "../../assets/in-progress.png";
import done from "../../assets/done.png";
import cancel from "../../assets/cancel.png";
import todo from "../../assets/todo.png";

//
const CardBody = (props) => {
  console.log(props.ticket.priority);
  return (
    <div className="card-body">
      <div className="cb-head">
        <div className="cb-head-id">{props.ticket.id}</div>
        <div className="cb-head-avtar">{props.children}</div>
      </div>
      <div className="cb-title">
        {window.location.pathname !== "/groupby/status" && (
          <span style={{ marginRight: ".5rem" }}>
            {props.ticket.status === "Backlog" && (
              <Image src={backlog} width={18} />
            )}
            {props.ticket.status === "Done" && <Image src={done} width={18} />}
            {props.ticket.status === "In progress" && (
              <Image src={inProgress} width={18} />
            )}
            {props.ticket.status === "Todo" && <Image src={todo} width={18} />}
            {props.ticket.status === "Canceled" && (
              <Image src={cancel} width={18} />
            )}
          </span>
        )}
        <span>{props.ticket.title}</span>
      </div>
      <div className="cb-footer">
        {window.location.pathname !== "/groupby/priority" && (
          <div className="cb-footer-icon">
            <span className="span-info-icon">
              {props.ticket.priority === 0 && (
                <DashOutlined className="dashoutlined-icon" />
              )}
              {props.ticket.priority === 1 && (
                <Image src={progress_1} width={20} />
              )}
              {props.ticket.priority === 2 && (
                <Image src={progress_2} width={20} />
              )}
              {props.ticket.priority === 3 && (
                <Image src={progress_3} width={20} />
              )}
              {props.ticket.priority === 4 && (
                <InfoOutlined
                  style={{
                    background: "#ff5e57",
                    color: "#fff",
                    borderRadius: ".2rem",
                    padding: ".1rem",
                  }}
                />
              )}
            </span>
          </div>
        )}
        <div className="cb-footer-txt">
          <div className="span-txt"></div>
          <span className="txt">Feature Request</span>
        </div>
      </div>
    </div>
  );
};

export default CardBody;
