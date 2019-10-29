import React from "react";
import styled from "@emotion/styled";
import Container from "./Container";
import Column from "./Column";
import CardContent from "./CardContent";

const AboutStyled = styled.div`
  background: #56e;
  padding: 8rem 0;
  color: #fff;
  h2 {
    color: #fff;
  }
  font-size: 1rem;
  font-weight: bold;
  p {
    text-align: justify;
  }
`;

export default function About() {
  return (
    <AboutStyled>
      <Container>
        <Column>
          <CardContent>
            <h2>About Me</h2>
            <p>
              I'm a web developer that specializes in writing performant
              frontend applications using React. Some of my favorite tools
              include: ES6+ JavaScript, TypeScript, Redux, MobX, Firebase,
              Emotion/Styled Components.
            </p>
            <p>
              I live in New York City, NY with my wife Lia and our pet roomba,
              Ruby.
            </p>
          </CardContent>
        </Column>
      </Container>
    </AboutStyled>
  );
}
