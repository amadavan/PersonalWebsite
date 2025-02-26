import React from "react"
import Layout from "../components/layout"
import MainPanel from "../components/panel"
import { Columns } from "react-bulma-components"
import { Heading } from "react-bulma-components"
import { Container } from "react-bulma-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact"
import { faOrcid } from "@fortawesome/free-brands-svg-icons/faOrcid"

const Index = () => (
  <Layout>
    <MainPanel>
      <Columns centered>
        <Columns.Column narrow textAlign="centered">
          <Heading>Avinash N. Madavan</Heading>
          <Heading subtitle>
            Ph.D. Student in Electrical and Computer Engineering
          </Heading>
          <Container className="personal-links">
            <a href="https://github.com/amadavan/">
              <FontAwesomeIcon icon={faGithub} fixedWidth/>
            </a>
            <a href="https://scholar.google.com/citations?user=Oqqtb00AAAAJ&hl=en">
              <FontAwesomeIcon icon={faReact} fixedWidth/>
            </a>
            <a href="https://orcid.org/0000-0002-1016-0118">
              <FontAwesomeIcon icon={faOrcid} fixedWidth/>
            </a>
          </Container>
        </Columns.Column>
      </Columns>
    </MainPanel>
  </Layout>
)

export default Index