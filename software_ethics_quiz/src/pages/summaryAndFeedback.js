import React, { useState } from 'react';
import { Container, Row, Col, Button, ListGroup, Stack } from 'react-bootstrap';
import '../styles/summaryAndFeedback.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function SummaryAndFeedback() {
    const [feedbackBoxTitle, setFeedbackBoxTitle] = useState("Good Try!");
    const [feedbackBoxContent, setFeedbackBoxContent] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in sem cursus, convallis ex in, rutrum lorem. Curabitur efficitur ante ac congue sodales. Mauris varius ac sapien sit amet fermentum. Morbi quis dui efficitur mauris ultrices ullamcorper in quis nibh. Nulla dignissim eu ex at imperdiet. Maecenas sollicitudin venenatis ex ut porttitor. Vestibulum eget sodales sapien, sed vehicula orci. Nunc vel augue vitae orci vestibulum molestie. Sed dapibus urna sed facilisis sagittis.");

    const handleClick = (questionNumber) => {
        setFeedbackBoxTitle("Question " + questionNumber);
        setFeedbackBoxContent("content of " + questionNumber);
    };

    return (
        <div className="summaryAndFeedbackPage">
            <div className="summaryAndFeedbackHeader">
                <h1 className='headerTitle'>Summary and Feedback</h1>
            </div>
            <div className='summaryAndFeedbackContent'>

                <Container>
                    <Row>
                        <Col sm={8} className="feedback-container ">
                            <Stack gap={3} justify-content-center>
                                <div>
                                    <h2 className='feedbackBoxTitle'>{feedbackBoxTitle}</h2>
                                    <div className="feedbackBox ">
                                        <FontAwesomeIcon icon={faStar} id='star1' className='star' />
                                        <FontAwesomeIcon icon={faStar} id='star2' className='star' />
                                        <FontAwesomeIcon icon={faStar} id='star3' className='star' />
                                        <FontAwesomeIcon icon={faStar} id='star4' className='star' />
                                        <FontAwesomeIcon icon={faStar} id='star5' className='star' />
                                        <p>
                                            {feedbackBoxContent}
                                        </p>
                                    </div>
                                </div>
                                <button type="button" class="startButton btn btn-outline-light btn-sm" id='scenarioBtn'>Scenario</button>
                            </Stack>

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
