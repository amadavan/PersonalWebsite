import "../scss/_app.scss"

import React from "react"
import Header from "./header.js"

const Layout = ({ children }) => (
  <div>
    <Header/>
    {children}
  </div>
)

export default Layout