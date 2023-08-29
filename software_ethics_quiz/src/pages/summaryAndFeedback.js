import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Stack } from 'react-bootstrap';
import '../styles/summaryAndFeedback.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { scenariosAndQuestions as SCENARIO_AND_QUESTIONS } from '../constants/scenariosAndQuestions';
import { useNavigate } from "react-router-dom";

function SummaryAndFeedback({ responses }) {
    useEffect(() => {
        console.log("I fire once");
        insert();
    }, []);
    // TODO: get answers from other pg
    // responses = {
    //    profession: "IT Student",
    //     answers: [[3, 2, 3, 3],
    //    [3, 3, 3, 3],
    //     [3, 3, 3, 3],
    //     [3, 3, 3, 3]]
    // };

    // return;

    const navigate = useNavigate();

    const getScoreOutOfFive = (totalScore, maxScore) => {
        return Math.round((totalScore / maxScore) * 5);
        // return score;
    };

    async function insert() {
        await fetch("https://softwareethicsquiz-api.onrender.com/answer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(responses),
        }).catch(e => {
            console.error(e);
            return;
        });
    }

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
        let scenario = SCENARIO_AND_QUESTIONS[scenarioNum - 1].scenario;

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

    const getBestAnswer = (scenarioNum, quesNum) => {
        let bestAnsScore = Number.MIN_VALUE;
        let bestAns;
        let answers = SCENARIO_AND_QUESTIONS[scenarioNum - 1].questions[quesNum - 1].answers;

        for (let i = 0; i < answers.length; i++) {
            if (answers[i].score > bestAnsScore) {
                bestAnsScore = answers[i].score;
                bestAns = answers[i];
            }
        }
        return bestAns;
    }

    const getAllAnswers = (scenarioNum, quesNum) => {
        let answers = SCENARIO_AND_QUESTIONS[scenarioNum - 1].questions[quesNum - 1].answers;
        let answerList = [];
        for (let i = 0; i < answers.length; i++) {
            answerList[i] = answers[i].answer;
        }
        return answerList;
    }

    const setQuestionFeedback = (scenarioNum, quesNum, selectedAnswers) => {
        setFeedbackBoxTitle("Question " + quesNum);

        quesNum = quesNum % 4 === 0 ? 4 : quesNum % 4;

        let ans = selectedAnswers[scenarioNum - 1][quesNum - 1];
        let quesFeedback = SCENARIO_AND_QUESTIONS[scenarioNum - 1].questions[quesNum - 1].answers[ans].userFeedback;
        let question = SCENARIO_AND_QUESTIONS[scenarioNum - 1].questions[quesNum - 1].question;

        let answers = [];
        SCENARIO_AND_QUESTIONS[scenarioNum - 1].questions[quesNum - 1].answers.forEach(function (e, i) {
            let isBest = e.score === 4;
            let classes = "answerGroup";
            let subtitle = null;
            if (isBest) {
                subtitle = "Best answer";
                classes += " bestAns";
            } else if (ans === i) {
                subtitle = "Selected answer";
                classes += " selectedAns";
            }

            answers.push(
                <div className={classes}>
                    {subtitle ? <div className='subtitle fs-5 text'>{subtitle}</div> : null}
                    <div className='answerGroup'>
                        {isBest ? <i class="bi bi-check-lg" ></i> : <i class="bi bi-x-lg" ></i>}
                        {e.answer}
                    </div>
                    <br />
                </div>
            );
        });

        setFeedbackBoxContent(
            <div className="feedbackBoxQuestionBoxGroup">
                <p>{question}</p>
                <p className='feedbackBoxInnerTitle'>Answer</p>
                <div className="feedbackBoxInnerBox" id='answerBox'>
                    {answers}
                </div>
                <p>{quesFeedback}</p>
                <button type="button" class="btn btn-outline-dark feedbackBoxBtn" id='scenarioBtn' onClick={() => setScenario(scenarioNum, quesNum, selectedAnswers)}>Scenario</button>
                <button type="button" class="btn btn-outline-dark active feedbackBoxBtn" id='questionBtn'>Question</button>
            </div>
        );
    };

    // let selectedAnswers = useLocation().state;

    // const { state: { selectedAnswers } = {} } = useLocation();
    console.log(responses);
    let totalScore = 0;
    let score = 0;
    let maxScore = 16 * 4;

    if (responses !== null) {
        totalScore = getScore(responses.answers);
        score = getScoreOutOfFive(totalScore, maxScore);
    } else {
        console.log('null answers');
        navigate('/');
    };

    const [feedbackBoxTitle, setFeedbackBoxTitle] = useState("Question");
    // const [feedbackBoxContent, setFeedbackBoxContent] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in sem cursus, convallis ex in, rutrum lorem. Curabitur efficitur ante ac congue sodales. Mauris varius ac sapien sit amet fermentum. Morbi quis dui efficitur mauris ultrices ullamcorper in quis nibh. Nulla dignissim eu ex at imperdiet. Maecenas sollicitudin venenatis ex ut porttitor. Vestibulum eget sodales sapien, sed vehicula orci. Nunc vel augue vitae orci vestibulum molestie. Sed dapibus urna sed facilisis sagittis.");
    const stars = useState(getStars(score));
    const [feedbackBoxContent, setFeedbackBoxContent] = useState(<p>Select a question to view your results</p>);

    let overallFeedbackTitle = "";
    let overallFeedbackContent = "";
    let overallScore = Math.round((totalScore / maxScore) * 100);

    if (overallScore >= 0 && overallScore <= 25) {
        overallFeedbackTitle = "Unsatisfactory Attempt";
        overallFeedbackContent = "There is much room for improvement"
    }
    else if (overallScore >= 26 && overallScore <= 50) {
        overallFeedbackTitle = "Satisfactory Attempt";
        overallFeedbackContent = "With a little more knowledge, you can become a software ethics expert";
    }
    else if (overallScore >= 51 && overallScore <= 75) {
        overallFeedbackTitle = "Very Good Attempt";
        overallFeedbackContent = "You are on track to becoming a software ethics expert.";
    }
    else if (overallScore >= 51 && overallScore <= 75) {
        overallFeedbackTitle = "Excellent Attempt";
        overallFeedbackContent = "Congratulations! You are a software ethics expert.";
    }

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
                                    <h2 className='feedbackBoxTitle'>{overallFeedbackTitle}</h2>
                                    <div className="feedbackBox">
                                        {stars}
                                        <p>You scored {overallScore}%</p>
                                        {overallFeedbackContent}
                                    </div>
                                </div>
                                <div>
                                    <h2 className='feedbackBoxTitle'>{feedbackBoxTitle}</h2>
                                    <div className="feedbackBox">
                                        {feedbackBoxContent}
                                    </div>
                                </div>
                            </Stack>
                            <button href="/" class="btn btn-outline-light btn-lg tryAgainButton" onClick={tryAgain}>Try Again</button>
                        </Col>
                        <Col sm={4} className="questions-container">
                            <Stack gap={1}>
                                <Button variant='outline-light' className="questionButton" onClick={() => setQuestionFeedback(1, 1, responses.answers)}>Question 1</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => setQuestionFeedback(1, 2, responses.answers)}>Question 2</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => setQuestionFeedback(1, 3, responses.answers)}>Question 3</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => setQuestionFeedback(1, 4, responses.answers)}>Question 4</Button>
                            </Stack>
                            <br />
                            <Stack gap={1}>
                                <Button variant='outline-light' className="questionButton" onClick={() => setQuestionFeedback(2, 5, responses.answers)}>Question 5</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => setQuestionFeedback(2, 6, responses.answers)}>Question 6</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => setQuestionFeedback(2, 7, responses.answers)}>Question 7</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => setQuestionFeedback(2, 8, responses.answers)}>Question 8</Button>
                            </Stack>
                            <br />
                            <Stack gap={1}>
                                <Button variant='outline-light' className="questionButton" onClick={() => setQuestionFeedback(3, 9, responses.answers)}>Question 9</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => setQuestionFeedback(3, 10, responses.answers)}>Question 10</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => setQuestionFeedback(3, 11, responses.answers)}>Question 11</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => setQuestionFeedback(3, 12, responses.answers)}>Question 12</Button>
                            </Stack>
                            <br />
                            <Stack gap={1}>
                                <Button variant='outline-light' className="questionButton" onClick={() => setQuestionFeedback(4, 13, responses.answers)}>Question 13</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => setQuestionFeedback(4, 14, responses.answers)}>Question 14</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => setQuestionFeedback(4, 15, responses.answers)}>Question 15</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => setQuestionFeedback(4, 16, responses.answers)}>Question 16</Button>
                            </Stack>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default SummaryAndFeedback;
