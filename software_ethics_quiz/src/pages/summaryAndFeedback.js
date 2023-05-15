import React, { useState } from 'react';
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import '../styles/summaryAndFeedback.css';

function SummaryAndFeedback() {
    const [currentQuestion, setCurrentQuestion] = useState(1);

    const handleClick = (questionNumber) => {
        setCurrentQuestion(questionNumber);
    };

    return (
        <div className="summaryAndFeedbackPage">
            
            <div className="summaryAndFeedbackHeader">
                <h1 className='headerTitle'>Summary and Feedback</h1>
            </div>
            <Container>
                <Row>
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
            <div className='summaryAndFeedbackContent'>

                <Container>
                    <Row className="content">
                        <Col sm={8} className="feedback-container">
                            <div className="feedback">
                                <h2>Question {currentQuestion}</h2>
                                <p>Content for Question {currentQuestion} goes here.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="questions-container">
                            <ListGroup class="list-group-item">
                                <ListGroup.Item>
                                    <Button variant='outline-light' className="questionButton" onClick={() => handleClick(1)}>Question 1</Button>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button variant='outline-light' className="questionButton" onClick={() => handleClick(2)}>Question 2</Button>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button variant='outline-light' className="questionButton" onClick={() => handleClick(3)}>Question 3</Button>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button variant='outline-light' className="questionButton" onClick={() => handleClick(4)}>Question 4</Button>
                                </ListGroup.Item>
                            </ListGroup>
                            <br />
                            <ListGroup class="list-group-item">
                                <ListGroup.Item>
                                    <Button variant='outline-light' className="questionButton" onClick={() => handleClick(5)}>Question 5</Button>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button variant='outline-light' className="questionButton" onClick={() => handleClick(6)}>Question 6</Button>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button variant='outline-light' className="questionButton" onClick={() => handleClick(7)}>Question 7</Button>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button variant='outline-light' className="questionButton" onClick={() => handleClick(8)}>Question 8</Button>
                                </ListGroup.Item>
                            </ListGroup>
                            <br />
                            <ListGroup class="list-group-item">
                                <ListGroup.Item>
                                    <Button variant='outline-light' className="questionButton" onClick={() => handleClick(9)}>Question 9</Button>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button variant='outline-light' className="questionButton" onClick={() => handleClick(10)}>Question 10</Button>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button variant='outline-light' className="questionButton" onClick={() => handleClick(11)}>Question 11</Button>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button variant='outline-light' className="questionButton" onClick={() => handleClick(12)}>Question 12</Button>
                                </ListGroup.Item>
                            </ListGroup>
                            <br />
                            <ListGroup class="list-group-item">
                                <ListGroup.Item>
                                    <Button variant='outline-light' className="questionButton" onClick={() => handleClick(13)}>Question 13</Button>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button variant='outline-light' className="questionButton" onClick={() => handleClick(14)}>Question 14</Button>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button variant='outline-light' className="questionButton" onClick={() => handleClick(15)}>Question 15</Button>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button variant='outline-light' className="questionButton" onClick={() => handleClick(16)}>Question 16</Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default SummaryAndFeedback;
