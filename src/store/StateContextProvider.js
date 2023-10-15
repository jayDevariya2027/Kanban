import React, { useState, useEffect } from "react";
import StateContext from "./StateContext";

const INITIAL_PRIORITIES = [
  { initial_order: 1, name: "No Priority", val: 0 },
  { initial_order: 2, name: "Urgent", val: 4 },
  { initial_order: 3, name: "High", val: 3 },
  { initial_order: 4, name: "Medium", val: 2 },
  { initial_order: 5, name: "Low", val: 1 },
];
const INITIAL_STATUS = ["Backlog", "Todo", "In progress", "Done", "Canceled"];

export const StateContextProvider = (props) => {
  //
  //----------------- STATE-HANDLING -----------------
  const [users, setUsers] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [orderBy, setOrderBy] = useState("");
  const [priorities, setPriorities] = useState(INITIAL_PRIORITIES);
  const [status, setStatus] = useState(INITIAL_STATUS);

  //----------------- API-FETCH -----------------
  const fetchTemp = async () => {
    try {
      //
      const response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      const responseData = await response.json();

      //
      // console.log(responseData);
      setUsers(responseData["users"]);
      setTickets(responseData["tickets"]);

      //
    } catch (error) {
      console.log("this is error in data fetching");
    }
  };
  useEffect(() => {
    fetchTemp();
  }, []);

  //
  const handleOrder = (order) => {
    if (order === "title") {
      tickets.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0; // equal
      });
      priorities.sort((a, b) => {
        const IOA = a.initial_order;
        const IOB = b.initial_order;

        if (IOA < IOB) return -1;
        if (IOA > IOB) return 1;
        return 0; // equal
      });
      setPriorities(priorities); // SET PRIORITIES
      setTickets(tickets);
    }
    if (order === "priority") {
      //
      priorities.sort((a, b) => {
        const ValA = a.val;
        const ValB = b.val;

        if (ValA > ValB) return -1;
        if (ValA < ValB) return 1;
        return 0; // priority are equal
      });
      setPriorities(priorities); // SET PRIORITIES

      //
      tickets.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0; // equal
      });
      setTickets(tickets);
      fetchTemp(); // RESET TICKETS & USERS
    }

    setOrderBy(order);
  };

  //
  const INITIAL_STATE = {
    orderBy,
    users,
    tickets,
    priorities,
    status,
    handleOrder,
  };

  return (
    <StateContext.Provider value={INITIAL_STATE}>
      {props.children}
    </StateContext.Provider>
  );
};
