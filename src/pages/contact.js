import "../scss/contact.scss"

import React from "react"
import Layout from "../components/layout"
import MainPanel from "../components/panel"
import { Container } from "react-bulma-components"
import { Columns } from "react-bulma-components"
import { Heading } from "react-bulma-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope"

const Contact = () => (
  <Layout>
    <MainPanel>
      <Container>
        <Columns id="contact-info" centered>
          <Columns.Column textAlign="centered" size="one-third">
            <FontAwesomeIcon icon={faEnvelope}/>
            <Heading renderAs="p" heading>
              Email
            </Heading>
            <p>avinash [dot] madavan [at] gmail.com</p>
          </Columns.Column>
        </Columns>
      </Container>
    </MainPanel>
  </Layout>
)

export default Contact