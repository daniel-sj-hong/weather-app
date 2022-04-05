import { FunctionComponent } from "react";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    align-items; center;
    h1 {
      font-size: 16px;
    }
  }

  .zipSearch {
    display: flex;
    align-items: center;
  }

`;

const Layout: FunctionComponent = (props) => {
  if (!props.children || !Array.isArray(props.children)) {
    return null;
  }

  return <StyledDiv>{props.children}</StyledDiv>;
};

export default Layout;
