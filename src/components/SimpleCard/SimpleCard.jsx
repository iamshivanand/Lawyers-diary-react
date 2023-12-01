import React, { useEffect, useState } from "react";
import "./SimpleCard.css";

const SimpleCard = ({ Title, Value }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const duration = 100; // Set the desired duration in milliseconds
    const steps = Math.max(1, Value); // Ensure at least 1 step

    const interval = setInterval(() => {
      if (count < Value) {
        setCount(count + 1);
      }
    }, duration / steps);
  

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [count]);

  return (
    <div className="simpleCard">
      <p className="simpleCardTitle">{Title}</p>
      <p className="simpleCardValue">{count}</p>
    </div>
  );
};

export default SimpleCard;
