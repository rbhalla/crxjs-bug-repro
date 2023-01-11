import React from "react";

export const Context = React.createContext<{}>({});

export function Provider({ children }: { children: React.ReactNode }) {
  console.log("change me!");

  return <Context.Provider value={{}}>{children}</Context.Provider>;
}

export function foo() {
  return "foo";
}
