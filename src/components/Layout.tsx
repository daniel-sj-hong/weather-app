import { FunctionComponent } from "react";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    h1 {
      font-size: 16px;
    }
  }
`;

const Layout: FunctionComponent = (props) => {
  if (!props.children || !Array.isArray(props.children)) {
    return null;
  }

  return <StyledDiv>{props.children}</StyledDiv>;
};

export default Layout;
