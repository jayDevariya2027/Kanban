import React from "react";
import "./CardHeader.css";
import { PlusOutlined, DashOutlined, InfoOutlined } from "@ant-design/icons";
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

const CardHeader = (props) => {
  return (
    <div className="card-header">
      {props.children}
      <div className="ch-title">
        {props.title === "No Priority" && <DashOutlined />}
        {props.title === "Low" && <Image src={progress_1} width={18} />}
        {props.title === "Medium" && <Image src={progress_2} width={18} />}
        {props.title === "High" && <Image src={progress_3} width={18} />}
        {props.title === "Urgent" && (
          <InfoOutlined
            style={{
              background: "#ff5e57",
              color: "#fff",
              borderRadius: ".2rem",
              padding: ".1rem",
            }}
          />
        )}
        {props.title === "Backlog" && <Image src={backlog} width={18} />}
        {props.title === "Done" && <Image src={done} width={18} />}
        {props.title === "In progress" && <Image src={inProgress} width={18} />}
        {props.title === "Todo" && <Image src={todo} width={18} />}
        {props.title === "Canceled" && <Image src={cancel} width={18} />}
        <span style={{ marginLeft: ".5rem" }}>{props.title}</span>
        <span style={{ marginLeft: ".5rem", color: "gray" }}>
          {props.noOfTickets}
        </span>
      </div>
      <div className="ch-btns">
        <div>
          <button className="ant-icon">
            <PlusOutlined />
          </button>
        </div>
        <div>
          <button className="ant-icon">
            <DashOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
