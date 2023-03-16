import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { RxAvatar } from 'react-icons/rx';

function Header() {
        return (
                <div className='header'>
                        <Row>
                                <Col xs={12} md={6} xl={6} className='header-content'>
                                        <Row>
                                                <Col xs={12} md={1} xl={1}> <RxAvatar /></Col>
                                                <Col xs={12} md={11} xl={11}> Header</Col>
                                        </Row>

                                </Col>
                        </Row></div>
        )
}

export default Header