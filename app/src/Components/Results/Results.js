import React from 'react'
import './Results.css'
import Container from '../Container'
import Row from '../Row'
import Col from '../Col'


class Results extends React.Component {
  render() {
    return (
      <section>
        <Container>
          <Row>
            <Col size="12">
              <div className="results" />
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default Results
