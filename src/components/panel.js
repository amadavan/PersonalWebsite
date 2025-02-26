import "../scss/panel.scss"

import React from "react"
import { Level } from "react-bulma-components"

const MainPanel = ({ children }) => (
  <Level className="main-panel">
    <Level.Item>{children}</Level.Item>
  </Level>
)

export default MainPanel