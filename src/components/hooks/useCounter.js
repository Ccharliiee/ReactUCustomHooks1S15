import { useState, useEffect } from "react";

const useCounter = (delta = 1) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + delta);
    }, 1000);

    return () => clearInterval(interval);
  }, [delta]);

  return counter;
};

export default useCounter;
