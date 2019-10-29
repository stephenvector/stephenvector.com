import React from "react";
import styled from "@emotion/styled";

import Container from "./Container";
import Column from "./Column";

const HeaderStyled = styled.div`
  padding-top: 6rem;
  position: relative;
  padding-bottom: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: #56e; */
  position: relative;
  text-align: left;
  color: #fff;
  margin-bottom: 0rem;

  p {
    margin: 2rem 0;
  }

  h2 {
    color: #fff;
  }

  a {
    display: inline-block;
    padding: 1rem;
    line-height: 1rem;
    border: none;

    border-radius: 3px;
    background: transparent;
    box-shadow: inset 0 0 0 2px #fff;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
  }
  a:hover {
    background: #fff;
    color: #56e;
  }
`;

const Skewed = styled.div`
  @keyframes slideranimation {
    0% {
      left: -0.5rem;
    }
    30% {
      left: calc(90% - 0.5rem);
    }
    50% {
      left: calc(30% - 0.5rem);
    }
    66% {
      left: calc(100% - 0.5rem);
    }
    87% {
      left: calc(50% - 0.5rem);
    }
    100% {
      left: -0.5rem;
    }
  }

  .wrapper {
    @keyframes NAME-YOUR-ANIMATION {
      0% {
        box-shadow: 1rem 1rem 0 0 rgba(0, 0, 0, 0.3);
      }
      50% {
        box-shadow: 1.2rem 1.2rem 0 0 rgba(0, 0, 0, 0.2);
      }
      100% {
        box-shadow: 1rem 1rem 0 0 rgba(0, 0, 0, 0.3);
      }
    }
    transform: rotateZ(-30deg) translateX(-4rem) translateY(4rem);
    background: #fff;
    animation: NAME-YOUR-ANIMATION 2s infinite;
    width: 200px;
    height: 400px;
    border-radius: 1rem;
    position: relative;
    bottom: 0;
    border: 2px solid #000;
    box-shadow: 1rem 1rem 0 0 rgba(0, 0, 0, 0.3);
    .dot {
      width: 2rem;
      height: 2rem;
      border-radius: 1rem;
      border: 2px solid #000;
      position: absolute;
      left: 50%;
      bottom: 1rem;
      transform: none;
      animation: none;
    }
  }

  .screen {
    position: absolute;
    left: 0.5rem;
    right: 0.5rem;
    top: 1.5rem;
    bottom: 3rem;
    background: radial-gradient(ellipse at bottom right, #bbb, #f2f2f2);
    /* border-right: 3px solid #666; */
    /* border-bottom: 3px solid #666; */
    border-radius: 3px;
    box-shadow: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slider {
    width: 80%;
    height: 3px;
    background: #fff;
    position: relative;
    border: 2px solid #000;
    border-radius: 3px;
    .slider-dot {
      height: 1rem;
      width: 1rem;
      background: #fff;
      border: 2px solid #000;
      border-radius: 1rem;
      position: absolute;
      top: -0.5rem;
      left: -0.5rem;
      animation: slideranimation 6s infinite;
    }
  }
`;

const Weird = styled.div`
  position: absolute;
  width: 100%;
  height: 240%;
  transform: skewY(8deg) translateY(0rem);
  background: #56e;
  z-index: -1;
`;

export default function Header() {
  return (
    <HeaderStyled>
      <Weird />
      <Container>
        <Column>
          <h1>
            <span className="stephen">Stephen</span>
            <br />
            Vector
          </h1>

          <h2>Frontend Engineer</h2>
          <h3>New York, NY</h3>

          <p>
            I'm a web developer that specializes in writing performant frontend
            applications using React. Some of my favorite tools include: ES6+
            JavaScript, TypeScript, Redux, MobX, Firebase, Emotion/Styled
            Components.
          </p>

          <p>
            <a href="https://github.com/stephenvector/" target="_blank">
              &#128279; View My Code on GitHub -->
            </a>
          </p>
        </Column>
      </Container>
    </HeaderStyled>
  );
}
