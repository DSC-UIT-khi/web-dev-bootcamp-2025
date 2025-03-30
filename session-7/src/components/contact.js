import { GlobalContext } from "@/app/page";
import React, { useContext } from "react";

const Contact = () => {
  const context = useContext(GlobalContext);

  return (
    <div>
      <p>CONTACT ___ Hello button is clicked ----- {String(context.clicked)}</p>
      <button onClick={() => context.setClicked(!context.clicked)}>
        Click here!
      </button>
    </div>
  );
};

export default Contact;
