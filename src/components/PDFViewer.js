import React from "react"
import { Document, Page, pdfjs } from "react-pdf"
import { Columns } from "react-bulma-components"
import "react-pdf/dist/esm/Page/TextLayer.css"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

class PDFViewer extends React.Component {
  state = {
    width: 700,
  }

  componentDidMount() {
    this.setState({
      width:
        this.state.width < this.container.offsetWidth
          ? this.state.width
          : this.container.offsetWidth,
    })
  }

  render() {
    return (
      <div ref={el => (this.container = el)} fullwidth>
        <Columns centered>
          <Columns.Column narrow>
            <Document file={this.props.file} renderMode="svg">
              <Page pageNumber={1} width={this.state.width}/>
            </Document>
          </Columns.Column>
        </Columns>
      </div>
    )
  }
}

export default PDFViewer
