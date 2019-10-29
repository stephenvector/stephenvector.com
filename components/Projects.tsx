import React from "react";
import styled from "@emotion/styled";
import { Button, Slider } from "@stephenvector/prefab";
import Container from "./Container";
import Column from "./Column";
import Card from "./Card";

import CardContent from "./CardContent";

import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  ArrowLeft,
  ArrowDown,
  ArrowRight,
  ArrowUp
} from "@stephenvector/picto";

const ProjectsStyled = styled.div`
  max-width: 48rem;
`;

const IconPreview = styled.div`
  background: linear-gradient(30deg, #d56, #a9d);
  min-height: 8rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  margin: 0;
  svg {
    width: 4rem;
    height: 4rem;
    margin: 2rem;
  }
  polyline,
  line {
    stroke: #fff;
  }
`;

const PrefabDemo = styled.div`
  padding: 3rem;
  background: linear-gradient(30deg, #2be, #8eb);
`;

export default function Projects() {
  return (
    <>
      <Container>
        <Column>
          <h2 className="white">
            Selected
            <br />
            Projects
          </h2>
          <Card>
            <CardContent>
              <h3>Open House New York</h3>
              <a href="https://ohny.org" target="_blank">
                ohny.org
              </a>
              <p>
                Architected a custom CMS that allowed OHNY to organize their
                data into flexible data structures and map relationships across
                content types Built in React, using Google Firebase for
                authentication, cloud functions, media management, and database.
              </p>
              {/* <h3>Poursteady</h3>
              <a href="https://poursteady.com">poursteady.com</a>
              <p>
                Developed a real1remtime client-server syncing application using
                Node.js that kept coffee machines in sync with web app.
                Contributed to frontend website construction. Used Firebase for
                authentication, realtime database, and cloud functions.
              </p> */}
              <h3>Urban Design Forum</h3>
              <a href="https://urbandesignforum.org" target="_blank">
                urbandesignforum.org
              </a>
              <p>
                Integrated custom WordPress JSON API and integrated into a
                Node.js static site generator that utilizes Jade templates. The
                site is generated and then deployed using Netlify, for a fast
                initial load time.
              </p>
              <h3>Justseeds</h3>
              <a href="justseeds.org" target="_blank">
                justseeds.org
              </a>
              <p>
                Created a custom theme for WordPress to sort and filter
                thousands of posts across multiple post types. Sales went up 60%
                after launch of site redesign.
              </p>
              <h3>Fast Food Justice</h3>
              <a href="https://fastfoodjustice.org" target="_blank">
                fastfoodjustice.org
              </a>
              <p>
                This is an editable frontend web app that supports translation
                across a dynamic number of languages. Built custom registration
                system for managing paid memberships that syncs with
                transactional email providers.
              </p>
              <h3>The Future of the Catskill Interpretive Center</h3>
              <a href="https://future.cic.design" target="_blank">
                future.cic.design
              </a>
              <p>
                This site was a simple React app that's 100% static. Simple,
                clean, and fast.
              </p>
              <h3>Power: Infrastructure in America</h3>
              <a href="https://power.buellcenter.columbia.edu/" target="_blank">
                power.buellcenter.columbia.edu/
              </a>
              <p>
                A React app that's backed by a Drupal JSON API. This
                architecture provides an easy way for clients to update content,
                and a simple frontend structure that makes frontend development
                easy.
              </p>
              <h3>Stories | Bookshop + Storytelling Lab</h3>
              <a href="https://storiesbk.com/" target="_blank">
                https://storiesbk.com/
              </a>
              <p>This is a Jekyll site, with all content stored as Markdown.</p>
            </CardContent>
          </Card>
        </Column>
      </Container>
      <Container>
        <Column>
          <div className="margin-bottom-big">
            <h2>
              Open Source
              <br /> Projects
            </h2>

            <Card>
              <PrefabDemo>
                <Slider onChange={() => {}} value={3} min={0} max={7} />
                <Button fullWidth bg="#fff" fg="#56e">
                  Button
                </Button>
                <p>
                  <Button fullWidth bg="#56e" fg="#fff">
                    Button
                  </Button>
                </p>
              </PrefabDemo>
              <CardContent>
                <h3>Prefab</h3>
                <a
                  target="_blank"
                  href="http://github.com/stephenvector/prefab"
                >
                  GitHub Page
                </a>
                <div>
                  <a target="_blank" href="https://prefab.now.sh">
                    Documentation / Demo
                  </a>
                </div>
                <p>
                  A collection of components designed to be flexible enough to
                  compose into more complex components Written in TypeScript,
                  React.
                </p>
              </CardContent>
            </Card>
            <Card>
              <IconPreview>
                <AlignCenter />
                <AlignJustify />
                <AlignLeft />
                <AlignRight />
                <ArrowLeft />
                <ArrowUp />
                <ArrowDown />
                <ArrowRight />
              </IconPreview>
              <CardContent>
                <h3>Picto</h3>
                <a target="_blank" href="http://github.com/stephenvector/picto">
                  GitHub Page
                </a>
                <div>
                  <a target="_blank" href="https://picto.now.sh">
                    Documentation / Demo
                  </a>
                </div>
                <p>
                  React SVG icon components generated using simple geometry.
                  Written in TypeScript, React.
                </p>
              </CardContent>
            </Card>
          </div>
        </Column>
      </Container>
    </>
  );
}
