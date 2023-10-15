import React, { createContext } from "react";

const StateContext = createContext({
  orderBy: "",
  users: [],
  tickets: [],
  priorities: [],
  status: [],
  handleOrder: () => {},
});

export default StateContext;
