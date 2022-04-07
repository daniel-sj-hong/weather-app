import styled from "@emotion/styled";
import { useState, useEffect } from "react";


const StyledDiv = styled.div`
  padding: 1rem;
  text-align: right;
`;

export default function CountDown() {
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    const timer : any = counter > 0 && setInterval(() => {
      setCounter(counter - 1)}, 1000)
      if (counter === 0) {

        setCounter(10)
      }
    return () => clearInterval(timer);
  }, [counter])


  return (
    <StyledDiv>
      <h3 className="blah">Refreshing In:</h3>
      <p>{counter} seconds</p>
    </StyledDiv>
  );
}
