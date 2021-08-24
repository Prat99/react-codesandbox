import { useEffect, useState } from "react";

export const Home = () => {
  const [counter, setCounter] = useState(0);

  const clickHandler = () => {
    let count = counter;
    setCounter(++count);
  };

  console.log("home component");

  useEffect(() => {
    console.log("initial render");
  }, [counter]);

  return (
    <>
      <button onClick={clickHandler}>click</button>
      <p>{counter}</p>
    </>
  );
};
