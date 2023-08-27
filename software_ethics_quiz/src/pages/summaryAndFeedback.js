import React, { useState } from 'react';
import { Container, Row, Col, Button, Stack } from 'react-bootstrap';
import '../styles/summaryAndFeedback.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { scenariosAndQuestions as SCENARIO_AND_QUESTIONS } from '../constants/scenariosAndQuestions';
import { useLocation, useNavigate } from "react-router-dom";

function SummaryAndFeedback({selectedAnswers}) {
    // TODO: get answers from other pg
    // let selectedAnswers = [
    //     [3, 2, 3, 3],
    //     [3, 3, 3, 3],
    //     [3, 3, 3, 3],
    //     [3, 3, 3, 3]
    // ];

    // return;

    const navigate = useNavigate();

    const getScoreOutOfFive = (totalScore, maxScore) => {
        return Math.round((totalScore / maxScore) * 5);
        // return score;
    };

    const getScore = (selectedAnswers) => {
        let score = 0;
        selectedAnswers.forEach(function (scenarioAns, scenario) {
            scenarioAns.forEach(function (ans, ques) {
                score += SCENARIO_AND_QUESTIONS[scenario]?.questions[ques]?.answers[ans]?.score ?? 0;
            });
        });

        return score;
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

    const setScenario = (scenarioNum, quesNum, selectedAnswers) => {
        let scenario = SCENARIO_AND_QUESTIONS[scenarioNum].scenario;

        setFeedbackBoxContent(
            <div className="feedbackBoxQuestionBoxGroup">
                <p>
                    {scenario}
                </p>
                <button type="button" class="btn btn-outline-dark active feedbackBoxBtn" id='scenarioBtn' onClick={() => setScenario(scenarioNum, quesNum, selectedAnswers)}>Scenario</button>
                <button type="button" class="btn btn-outline-dark feedbackBoxBtn" id='questionBtn' onClick={() => setQuestionFeedback(scenarioNum, quesNum, selectedAnswers)}>Question</button>
            </div>
        );
    };

    const setQuestionFeedback = (scenarioNum, quesNum, selectedAnswers) => {
        setFeedbackBoxTitle("Question " + quesNum);

        quesNum = quesNum % 4 === 0 ? 4 : quesNum % 4;

        let ans = selectedAnswers[scenarioNum - 1][quesNum - 1];
        let quesFeedback = SCENARIO_AND_QUESTIONS[scenarioNum - 1].questions[quesNum - 1].answers[ans].userFeedback;
        let question = SCENARIO_AND_QUESTIONS[scenarioNum - 1].questions[quesNum - 1].question;

        // setFeedbackBoxContent(selectedAnswers[scenarioNum]);
        // setFeedbackBoxContent(ans);
        // setFeedbackBoxContent(SCENARIO_AND_QUESTIONS[scenario].questions[ques].question);
        setFeedbackBoxContent(
            <div className="feedbackBoxQuestionBoxGroup">
                <p className='feedbackBoxInnerTitle'>You Selected</p>
                <div className="feedbackBoxQuestionBox">
                    <p>
                        {question}
                    </p>
                </div>
                <p>{quesFeedback}</p>
                <button type="button" class="btn btn-outline-dark feedbackBoxBtn" id='scenarioBtn' onClick={() => setScenario(scenarioNum, quesNum, selectedAnswers)}>Scenario</button>
                <button type="button" class="btn btn-outline-dark active feedbackBoxBtn" id='questionBtn'>Question</button>
            </div>
        );
    };

    // let selectedAnswers = useLocation().state;

    // const { state: { selectedAnswers } = {} } = useLocation();
    console.log(selectedAnswers);
    let totalScore = 0;
    let score = 0;
    let maxScore = 16 * 4;

    if (selectedAnswers !== null) {
        totalScore = getScore(selectedAnswers);
        score = getScoreOutOfFive(totalScore, maxScore);
    } else {
        console.log('null answers');
        navigate('/');
    };

    const [feedbackBoxTitle, setFeedbackBoxTitle] = useState("Good Try!");
    // const [feedbackBoxContent, setFeedbackBoxContent] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in sem cursus, convallis ex in, rutrum lorem. Curabitur efficitur ante ac congue sodales. Mauris varius ac sapien sit amet fermentum. Morbi quis dui efficitur mauris ultrices ullamcorper in quis nibh. Nulla dignissim eu ex at imperdiet. Maecenas sollicitudin venenatis ex ut porttitor. Vestibulum eget sodales sapien, sed vehicula orci. Nunc vel augue vitae orci vestibulum molestie. Sed dapibus urna sed facilisis sagittis.");
    const stars = useState(getStars(score));
    const [feedbackBoxContent, setFeedbackBoxContent] = useState(<p>You scored {Math.round((totalScore / maxScore) * 100)}%</p>);

    function tryAgain() {
        const path = "/questions";
        navigate(path);
    }


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
                                    <div className="feedbackBox">
                                        {stars}
                                        {feedbackBoxContent}
                                    </div>
                                </div>
                            </Stack>
                            <button href="/" class="btn btn-outline-light btn-lg tryAgainButton" onClick={tryAgain}>Try Again</button>
                        </Col>
                        <Col sm={4} className="questions-container">
                            <Stack gap={1}>
                                <Button variant='outline-light' className="questionButton" onClick={() => setQuestionFeedback(1, 1, selectedAnswers)}>Question 1</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => setQuestionFeedback(1, 2, selectedAnswers)}>Question 2</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => setQuestionFeedback(1, 3, selectedAnswers)}>Question 3</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => setQuestionFeedback(1, 4, selectedAnswers)}>Question 4</Button>
                            </Stack>
                            <br />
                            <Stack gap={1}>
                                <Button variant='outline-light' className="questionButton" onClick={() => setQuestionFeedback(2, 5, selectedAnswers)}>Question 5</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => setQuestionFeedback(2, 6, selectedAnswers)}>Question 6</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => setQuestionFeedback(2, 7, selectedAnswers)}>Question 7</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => setQuestionFeedback(2, 8, selectedAnswers)}>Question 8</Button>
                            </Stack>
                            <br />
                            <Stack gap={1}>
                                <Button variant='outline-light' className="questionButton" onClick={() => setQuestionFeedback(3, 9, selectedAnswers)}>Question 9</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => setQuestionFeedback(3, 10, selectedAnswers)}>Question 10</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => setQuestionFeedback(3, 11, selectedAnswers)}>Question 11</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => setQuestionFeedback(3, 12, selectedAnswers)}>Question 12</Button>
                            </Stack>
                            <br />
                            <Stack gap={1}>
                                <Button variant='outline-light' className="questionButton" onClick={() => setQuestionFeedback(4, 13, selectedAnswers)}>Question 13</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => setQuestionFeedback(4, 14, selectedAnswers)}>Question 14</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => setQuestionFeedback(4, 15, selectedAnswers)}>Question 15</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => setQuestionFeedback(4, 16, selectedAnswers)}>Question 16</Button>
                            </Stack>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default SummaryAndFeedback;
