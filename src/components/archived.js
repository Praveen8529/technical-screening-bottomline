import React from "react";
const Archived = ({ archived }) => {
  return (
    <>
      <ul>
        {archived.map((item, i) => {
          return (
            <li>
              <span>{item.name}</span>
              <span>{item.amount}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Archived;
