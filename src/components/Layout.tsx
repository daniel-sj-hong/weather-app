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
    background: rgba(0, 176, 255, .7);
    position: relative;
  }

  .cloud {
    position: absolute;
    top: 90px;
    left: 50px;
    background: rgba(255, 255, 255);
    width: 150px;
    height: 50px;
    border-radius: 150px;
    box-shadow: 10px 10px rgba(0,0,0,0.2);
    animation: move 3s infinite;
  }

  .cloud:after {
    content: '';
    background: rgba(255, 255, 255);
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    bottom: 5px;
    left: 50px;
}

 .cloud:before {
    content: '';
    background: rgba(255, 255, 255);
    position: absolute;
    width: 50px;
    height: 30px;
    border-radius: 50%;
    top: -21px;
    left: 20px;
}

@keyframes move {
  0% {
    transform: translatex(0);
  }
  50% {
    transform: translatex(-40px);
  }
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

  .background {
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
    margin: 10px;
    font-family: "Arial Black", Gadget, sans-serif;
    font-size: 20px;
    padding: 5px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: #f7f6f6;
    border-radius: 10px;
    border: none;
    width: 200px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    cursor: pointer;
    display: inline-block;
    border-radius: 25px;
  }

  .submit-button:hover{
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    margin: 8px 10px 12px;
    background-position: right center;
  }

  .submit-button {
    background-image: linear-gradient(to right, #2BC0E4 0%, #EAECC6 51%, #2BC0E4 100%)
  }

  .row {
    display: flex;
    align-items: start;
  }

  .col-half {
    width: 50%;
  }

  .weather-box {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    color: #fdf0f0;
    text-shadow: 2px 3px rgba(50, 50, 70, 0.5);
    margin-right: 5px;
  }

  .today,
  .local {
    padding-left: 10px;
  }

  .hidden {
    display: none;
  }

  .transition {
    animation: 1s ease-out 0s 1 slideInFromLeft;
  }

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }

    50% {
      opacity: 0.33;
    }

    100% {
      transform: translateX(0);
    }
  }

  .forecast-box {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    color: #fdf0f0;
    text-shadow: 2px 3px rgba(50, 50, 70, 0.5);
    margin-left: 5px;
    height: 15.5rem
  }


  .sun {
    width: 35%;
    height: 100%;
    z-index: 1;
    position: absolute;
    right: -21px;
  }

  .white {
    color: #fdf0f0;
  }

  .text-positioning {
    text-align: center;
    position: absolute;
    top: 17rem;
    left: 22rem;
    font-weight: 700;
  }

  .lds-dual-ring {
    position: absolute;
    top: 20rem;
    left: 26rem;
    width: 80px;
    height: 80px;
  }

  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #dfc;
    border-color: #05ff24 transparent #ed5555 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  ul {
    list-style: none;
  }

  .width-90 {
    width: 90%;
    margin: auto;
    justify-content: space-evenly
  }

  .height-80 {
    height: 20rem;
  }

  .overflow {
    overflow: scroll;
  }

  .overflow::-webkit-scrollbar {
    height: 0;
    width: 0;
  }

  .justify-center {
    justify-content: center;
  }

  .align-center {
    text-align: center
  }

  .icons {
    height: 3rem;
  }
`;



const Layout: FunctionComponent = (props) => {
  if (!props.children || !Array.isArray(props.children)) {
    return null;
  }

  return <StyledDiv>{props.children}</StyledDiv>;
};

export default Layout;
