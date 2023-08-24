import React from "react";

function Button({ onClick, children, basic = false, ...props }) {
  const btnClass = basic ? "" : "bg-blackText text-white px-4 py-2 w-full ";

  return (
    <button
      className={`${btnClass} hover:opacity-90 focus:opacity-90`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
