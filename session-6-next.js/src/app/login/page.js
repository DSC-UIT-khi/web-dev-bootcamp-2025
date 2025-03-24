"use client";

import React, { useActionState, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    // e.preventDefault();
    console.log("Email>>", email);
    console.log("Password>>", password);
    // await new Promise(() =>
    //   setTimeout(() => {
    //     console.log("Email>>", email);
    //     console.log("Password>>", password);
    //   }, 1000)
    // );

    return {
      message: "Form submitted Successfully!",
      success: true,
    };
  };

  const [state, formAction, isPending] = useActionState(onSubmit, {});

  const inputClass = "border border-black p-2 rounded-md";

  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <div>
        {state?.message && <p>{state.message}</p>}
        <h1 className="text-center my-3 text-3xl">Login</h1>
        <form
          action={formAction}
          className="flex items-center justify-center flex-col gap-3"
        >
          <input
            placeholder="Enter email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className={inputClass}
            required
          />
          <input
            placeholder="Enter password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className={inputClass}
            required
          />
          <button className="bg-black w-full text-white cursor-pointer rounded-md py-2">
            {isPending ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
