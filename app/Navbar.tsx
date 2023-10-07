import  Link  from "next/link";
import React from "react";


const Navbar = () => {

  return (
    <nav className= "row bg-gray-600 ">
      <Link className="p-3" href="/">Home</Link>
      <Link className="p-3"href="/users/productId">Products</Link>
      <Link className="p-3" href="/users">Users </Link>
      <Link className="p-3" href="/about">About</Link>
    </nav>
  );
};
export default Navbar;
