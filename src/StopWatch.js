import React, { useEffect, useState } from "react";

export const StopWatch = () => {
  const [watch, setWatch] = useState(0);
  const [controller, setController] = useState(false);

  useEffect(() => {
    let timer;
    if (controller) {
      timer = setTimeout(() => {
        let val = watch;
        setWatch(++val);
      }, 1000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [controller, watch]);

  useEffect(() => {
    // console.log('second effect');
    return () => console.log("second cleanup");
  });

  const onStartHandler = () => {
    setController(true);
  };

  const onStopHandler = () => {
    setController(false);
  };

  const onResetHandler = () => {
    setWatch(0);
    setController(false);
  };

  return (
    <>
      <button onClick={onStartHandler}>Start</button>
      <button onClick={onStopHandler}>Stop</button>
      <button onClick={onResetHandler}>Reset</button>
      <h4>Stop Watch</h4>
      <p>{watch}</p>
    </>
  );
};
