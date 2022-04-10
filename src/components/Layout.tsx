import { FunctionComponent } from "react";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  display: grid;
  grid-template-rows: auto 30rem;
  grid-template-columns: calc(50% - 0.5rem) calc(50% - 0.5rem);
  grid-template-areas:
    "header header"
    "weather weather";
  gap: 1rem;

  border-radius: 0.25rem;
  padding: 1rem;
  margin: 2rem;
  box-shadow: 0.5rem 0.5rem 2rem rgba(0, 0, 0, 0.3);
  color: #222;
  max-width: 50rem;

  .header {
    grid-area: header;
    text-align: center;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5));
  }

  .card {
    grid-area: weather;
  }

  .section {
    box-shadow: 0.25rem 0.25rem 1rem rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
    padding: 1rem;
    position: relative;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  * {
    font-family: sans-serif;
    box-sizing: border-box
  }

  blockquote {
    font-style: italic;
  }

  td {
    padding: 0.5rem;
  }

  td:nth-of-type(1) {
    font-style: italic;
    text-transform: lowercase;
  }

  td:nth-of-type(2) {
    font-weight: bold;
    text-transform: uppercase;
  }

  input {
    font-size: 1.5rem;
  }

  .search-bar {
    color: #313131;
    padding: 5px 15px;
    appearance: none;
    background: none;
    border: none;
    outline: none;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 15px;
    box-shadow: 0px 5px rgba(0, 0, 0, 0.2);
    transition: 0.4s ease;
  }

  .search-bar:focus {
    background-color: rgba(255, 255, 255, 0.75);
  }

  .submit-button {
    margin: 10px 0;
    border: none;
    border-radius: 15px;
    padding: 5px 15px;
  }

  .row {
    display: flex;
  }

  .col-half {
    width: 50%;
  }

  .weather-box {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    color: #fdf0f0;
    text-shadow: 2px 3px rgba(50, 50, 70, 0.5);
  }

  .today,
  .local {
    padding-left: 10px;
  }

  table {
  }
`;



const Layout: FunctionComponent = (props) => {
  if (!props.children || !Array.isArray(props.children)) {
    return null;
  }

  return <StyledDiv>{props.children}</StyledDiv>;
};

export default Layout;
