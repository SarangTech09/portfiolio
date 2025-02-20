import React from "react";

const Card = ({ children, className }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow ${className}`}>
      {children}
    </div>
  );
};

export default Card;
