import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { CONTENST } from '../../components/Contents'
import ItemsCard from '../../components/ItemsCard'

function About() {
  return (
    <div>
      <Row>
        {
          CONTENST.map((content) => (
            <Col xs={12} md={4} xl={4}><ItemsCard data={content} /></Col>))
        }
      </Row>
    </div>
  )
}

export default About