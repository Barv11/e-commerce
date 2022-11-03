import React from "react";

export default function Star({ filled, quantity }) {
  let arr = [];

  for (let i = 0; i < quantity; i++) {
    arr.push(i);
  }

  return (
    <>
      {arr.map((el) => (
        <svg
          key={el.toString()}
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-star"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="rgb(236, 207, 39)"
          fill={filled ? "rgb(236, 207, 39)" : "none"}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
        </svg>
      ))}
    </>
  );
}
