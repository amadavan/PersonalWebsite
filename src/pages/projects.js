import React from "react"
import Layout from "../components/layout"
import Project from "../components/project"
import { Section } from "react-bulma-components"
import { Container } from "react-bulma-components"
import { Content } from "react-bulma-components"
import { Heading } from "react-bulma-components"

const projects = require("../../db/projects")

const Projects = () => (
  <Layout>
    <Section>
      <Container>
        <Heading>Projects</Heading>
        <Content>
          {projects && projects.map(project => <Project data={project}/>)}
        </Content>
      </Container>
    </Section>
  </Layout>
)

export default Projects