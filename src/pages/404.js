import React from "react"
import Layout from "../components/layout"
import MainPanel from "../components/panel"
import { Columns } from "react-bulma-components"
import { Heading } from "react-bulma-components"

const Err = () => (
  <Layout>
    <MainPanel>
      <Columns centered>
        <Columns.Column narrow textAlignment="centered">
          <Heading>Page not found</Heading>
        </Columns.Column>
      </Columns>
    </MainPanel>
  </Layout>
)

export default Err