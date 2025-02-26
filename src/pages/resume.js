import React from "react"
import Layout from "../components/layout"
import PDFViewer from "../components/PDFViewer"

const Resume = () => (
  <Layout>
    <PDFViewer file={"/avinash_madavan_resume.pdf"} />
  </Layout>
)

export default Resume