import React from 'react';
import { Col, Row } from 'antd';

const items = [
    {
        key: "1",
        icon: <i className='fas fa-search-location'></i>,
        title: "Simplified Search",
        content: "It is a long established fact that a reader will be distracted by the readable content",
    },
    {
        key: "2",
        icon: <i className='fas fa-search-database'></i>,
        title: "Lots of Properties",
        content: "It is a long established fact that a reader will be distracted by the readable content",
    },
    {
        key: "1",
        icon: <i className='fas fa-globe-africa'></i>,
        title: "Property of Africa",
        content: "It is a long established fact that a reader will be distracted by the readable content",
    }
]

const About = () => {
    return (
        <div id='about' className='block about-section'>
            <div className='fluid-container'>
                <div className='title-section'>
                    <h2>About Us</h2>
                    <p>You will find us very interesting</p>
                </div>
                <div className='content-section'>
                    <p>Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <Row gutter={[16,16]}>
                    {items.map((item) => {
                        return (
                            <Col md={{span: 8}} key={item.key}>
                                <div className='content'>
                                    <div className='icon'>{item.icon}</div>
                                    <h3>{item.title}</h3>
                                    <h3>{item.content}</h3>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </div>
            
        </div>
    )
}

export default About
