import { useActionState, useState } from "react";

const ActionStateForm = () => {
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

  console.log("state", state, "isPending", isPending);

  return (
    <div>
      {state.message && <p>{state.message}</p>}
      <form action={formAction}>
        <input
          placeholder="Enter email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          placeholder="Enter password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button>{isPending ? "Submitting..." : "Submit"}</button>
      </form>
    </div>
  );
};

export default ActionStateForm;
