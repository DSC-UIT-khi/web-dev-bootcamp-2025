import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <section className="flex items-center justify-center w-screen">
      <div className="py-5 px-3 flex items-center justify-between w-full max-w-7xl ">
        <div>
          <p>Logo</p>
        </div>
        <ul className="flex items-center justify-center gap-3">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
