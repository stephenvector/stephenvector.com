import React from "react";
import styled from "@emotion/styled";
import Container from "./Container";

const HeaderStyled = styled.div`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f2f2f2;
  position: relative;
  text-align: center;
  margin-bottom: 3rem;
  svg {
    position: absolute;
    top: 30%;
    right: 30%;
  }
`;

export default function Header() {
  return (
    <HeaderStyled>
      <svg xmlns="http://www.w3.org/2000/svg" width="170" height="170">
        <path
          stroke="none"
          fill="#20be86"
          d="M80.669872981078 13.356751765077a5 5 0 0 1 8.6602540378444 0l79.839745962156 138.28649646985a5 5 0 0 1 -4.3301270189222 7.5l-159.67949192431 0a5 5 0 0 1 -4.3301270189222 -7.5"
        ></path>
      </svg>
      <Container>
        <h1>
          <span className="stephen">Stephen</span>
          <br />
          Vector
        </h1>

        <h2>Frontend Engineer</h2>
        <h3>New York, NY</h3>

        <p>
          <a href="https://github.com/stephenvector/" target="_blank">
            GitHub
          </a>
        </p>
      </Container>
    </HeaderStyled>
  );
}
