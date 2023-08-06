import React, { useState } from 'react';
import { Container, Row, Col, Button, Stack } from 'react-bootstrap';
import '../styles/summaryAndFeedback.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { scenariosAndQuestions } from '../constants/scenariosAndQuestions';

function SummaryAndFeedback() {
    // TODO: get answers from other pg
    let selectedAnswers = [
        [3, 2, 3, 3],
        [3, 3, 3, 3],
        [3, 3, 3, 3],
        [3, 3, 3, 3]
    ];
    let maxScore = 16 * 4;


    const getScore = (selectedAnswers, maxScore) => {
        let score = 0;
        selectedAnswers.forEach(function (scenarioAns, scenario) {
            scenarioAns.forEach(function (ans, ques) {
                score += scenariosAndQuestions[scenario].questions[ques].answers[ans].score;
            });
        });
        return Math.round(score / maxScore);
        // return score;
    };

    const getStars = (score) => {
        const stars = [];
        let numStars = 5;
        for (let i = 0; i < score; i++) {
            stars.push(<FontAwesomeIcon icon={faStar} className='star' color='orange' />);
        }
        for (let i = 0; i < (numStars - score); i++) {
            stars.push(<FontAwesomeIcon icon={faStar} className='star' />);
        }

        return stars;
    };

    const handleClick = (questionNumber) => {
        let numScenarios = 4;
        let totalQuestions = 16;
        let scenario = Math.ceil(questionNumber/numScenarios);
        let question = totalQuestions - questionNumber;

        q = qByScenario * scenario

        setFeedbackBoxTitle("Question " + questionNumber);
        // setFeedbackBoxContent("content of " + questionNumber);
        setFeedbackBoxContent(scenariosAndQuestions[scenario].questions[ques].answers[ans].score);
    };


    let score = getScore(selectedAnswers, maxScore);


    const [feedbackBoxTitle, setFeedbackBoxTitle] = useState("Good Try!");
    // const [feedbackBoxContent, setFeedbackBoxContent] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in sem cursus, convallis ex in, rutrum lorem. Curabitur efficitur ante ac congue sodales. Mauris varius ac sapien sit amet fermentum. Morbi quis dui efficitur mauris ultrices ullamcorper in quis nibh. Nulla dignissim eu ex at imperdiet. Maecenas sollicitudin venenatis ex ut porttitor. Vestibulum eget sodales sapien, sed vehicula orci. Nunc vel augue vitae orci vestibulum molestie. Sed dapibus urna sed facilisis sagittis.");
    const stars = useState(getStars(score));
    const [feedbackBoxContent, setFeedbackBoxContent] = useState(score);


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
                                        {stars}
                                        <p>
                                            {feedbackBoxContent}
                                        </p>
                                    </div>
                                </div>
                                <button type="button" class="startButton btn btn-outline-light btn-sm" id='scenarioBtn' hidden>Scenario</button>
                            </Stack>

                        </Col>
                        <Col sm={4} className="questions-container">
                            <Stack gap={1}>
                                <Button variant='outline-light' className="questionButton" onClick={() => handleClick(1)}>Question 1</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => handleClick(2)}>Question 2</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => handleClick(3)}>Question 3</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => handleClick(4)}>Question 4</Button>
                            </Stack>
                            <br />
                            <Stack gap={1}>
                                <Button variant='outline-light' className="questionButton" onClick={() => handleClick(5)}>Question 5</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => handleClick(6)}>Question 6</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => handleClick(7)}>Question 7</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => handleClick(8)}>Question 8</Button>
                            </Stack>
                            <br />
                            <Stack gap={1}>
                                <Button variant='outline-light' className="questionButton" onClick={() => handleClick(9)}>Question 9</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => handleClick(10)}>Question 10</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => handleClick(11)}>Question 11</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => handleClick(12)}>Question 12</Button>
                            </Stack>
                            <br />
                            <Stack gap={1}>
                                <Button variant='outline-light' className="questionButton" onClick={() => handleClick(13)}>Question 13</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => handleClick(14)}>Question 14</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => handleClick(15)}>Question 15</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => handleClick(16)}>Question 16</Button>
                            </Stack>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant='outline-light' className="tryAgainButton">Try Again</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default SummaryAndFeedback;
