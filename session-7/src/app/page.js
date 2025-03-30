"use client";

import Contact from "@/components/contact";
import Home from "@/components/home";
import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

export default function Page() {
  const [clicked, setClicked] = useState(false);
  return (
    <GlobalContext.Provider
      value={{
        name: "Hadi Haider",
        clicked,
        setClicked,
      }}
    >
      <Home />
      <Contact />
    </GlobalContext.Provider>
  );
}

// export const UseGlobalContext = () => {
//   const UseContext = useContext(GlobalContext);

//   return UseContext;
// };
