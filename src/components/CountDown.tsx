import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";

const StyledDiv = styled.div`
  padding: 1rem;
  text-align: right;
`;
interface CountDownProps {
  handleSubmit: (e: React.SyntheticEvent) => void
}

export default function CountDown({handleSubmit}: CountDownProps) {
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    const timer : any = counter > 0 && setInterval(() => {
      setCounter(counter - 1)}, 1000)
      if (counter === 0) {
        setCounter(10)
        handleSubmit({} as React.SyntheticEvent);
      }
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter])


  return (
    <StyledDiv>
      <h3>Refreshing In:</h3>
      <p>{counter} seconds</p>
    </StyledDiv>
  );
}
