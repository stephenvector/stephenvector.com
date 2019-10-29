import React from "react";
import styled from "@emotion/styled";
import Container from "./Container";

const ProjectsStyled = styled.div`
  max-width: 48rem;
`;

export default function Projects() {
  return (
    <Container>
      <h2>Professional Projects</h2>
      <p></p>

      <h4>Open House New York</h4>
      <p>
        For this site, I led the development team for the backend, which
        consisted of a serverless API & a full CMS written in React. The CMS
        allows users to defined custom content types (Posts, Events, etc.) and
        provides an interface for media management. I also helped out with
        building some of the frontend features.
      </p>

      <h4>Poursteady</h4>

      <h4>Fast Food Justice</h4>
      <p>This project involved making.</p>

      <h4>The Future of the Catskill Interpretive Center</h4>

      <h4>Power: Infrastructure in America</h4>

      <h4>Justseeds</h4>

      <h4>Stories | Bookshop + Storytelling Lab</h4>
    </Container>
  );
}
