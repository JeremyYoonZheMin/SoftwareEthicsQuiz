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
    // responses = {
    //    profession: "IT Student",
    //     answers: [[3, 2, 3, 3],
    //    [3, 3, 3, 3],
    //     [3, 3, 3, 3],
    //     [3, 3, 3, 3]]
    // };

    // return;

    const navigate = useNavigate();

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
    };

    const getMaxScore = (scenariosAndQuestions) => {
        let score = 0;

        scenariosAndQuestions.forEach(s => {
            s.questions.forEach(q => {
                let quesMaxScore = 0;
                q.answers.forEach(a => {
                    if (a.score > quesMaxScore) {
                        quesMaxScore = a.score;
                    }
                });
                score += quesMaxScore;
            });
        })

        return score;
    };


    const getStars = (totalScore, maxScore) => {
        let score = Math.round((totalScore / maxScore) * 5);
        const stars = [];
        let numStars = 5;

        for (let i = 0; i < score; i++) {
            stars.push(<FontAwesomeIcon key={'star_'+ i} icon={faStar} className='star' color='orange' />);
        }
        for (let i = 0; i < (numStars - score); i++) {
            stars.push(<FontAwesomeIcon key={'star_'+ (i + score)} icon={faStar} className='star' />);
        }

        return stars;
    };

    const setScenario = (scenarioNum, quesNum, overallQuesNum, selectedAnswers) => {
        let scenario = SCENARIO_AND_QUESTIONS[scenarioNum].scenario;

        setFeedbackBoxContent(
            <div className="feedbackBoxQuestionBoxGroup">
                <p>
                    {scenario}
                </p>
                <button type="button" className="btn btn-outline-dark active feedbackBoxBtn" id='scenarioBtn' onClick={() => setScenario(scenarioNum, quesNum, overallQuesNum, selectedAnswers)}>Scenario</button>
                <button type="button" className="btn btn-outline-dark feedbackBoxBtn" id='questionBtn' onClick={() => setQuestionFeedback(scenarioNum, quesNum, overallQuesNum, selectedAnswers)}>Question</button>
            </div>
        );
    };

    const setQuestionFeedback = (scenarioNum, quesNum, overallQuesNum, selectedAnswers) => {
        setFeedbackBoxTitle("Question " + overallQuesNum);

        let ans = selectedAnswers[scenarioNum][quesNum];
        let quesFeedback = SCENARIO_AND_QUESTIONS[scenarioNum].questions[quesNum].answers[ans].userFeedback;
        let question = SCENARIO_AND_QUESTIONS[scenarioNum].questions[quesNum].question;

        let answers = [];
        SCENARIO_AND_QUESTIONS[scenarioNum].questions[quesNum].answers.forEach(function (e, i) {
            let isBest = e.score === 4;

            if (ans === i && isBest) {
                answers[0] = <div className="answerGroup">
                    <p className='feedbackBoxInnerTitle'>You Selected The Best answer</p>
                    <div className="feedbackBoxInnerBox" id='answerBox'>
                        {e.answer}
                    </div>
                </div>;
                return false;
            } else if (isBest) {
                answers[1] = <div className="answerGroup">
                    <p className='feedbackBoxInnerTitle'>Best Answer</p>
                    <div className="feedbackBoxInnerBox" id='answerBox'>
                        {e.answer}
                    </div>
                </div>;
            } else if (ans === i) {
                answers[0] = <div className="answerGroup">
                    <p className='feedbackBoxInnerTitle'>You Selected</p>
                    <div className="feedbackBoxInnerBox" id='answerBox'>
                        {e.answer}
                    </div>
                </div>;
            }

        });

        setFeedbackBoxContent(
            <div className="feedbackBoxQuestionBoxGroup">
                <p>{question}</p>
                {answers}
                <p>{quesFeedback}</p>
                <button type="button" className="btn btn-outline-dark feedbackBoxBtn" id='scenarioBtn' onClick={() => setScenario(scenarioNum, quesNum, overallQuesNum, selectedAnswers)}>Scenario</button>
                <button type="button" className="btn btn-outline-dark active feedbackBoxBtn" id='questionBtn'>Question</button>
            </div>
        );
    };

    const getQuestionBtns = (scenariosAndQuestions) => {
        let questionCount = 0;
        let btnGroup = [];

        scenariosAndQuestions.forEach(function (scenario, scenarioNum) {
            let btns = [];

            scenario.questions.forEach(function (question, questionNum) {
                let q = ++questionCount;
                btns.push(<Button variant='outline-light' className="questionButton" key={'ques_btn_' + q} onClick={() => setQuestionFeedback(scenarioNum, questionNum, q, responses.answers)}>Question {questionCount}</Button>);
            });

            btnGroup.push(<Stack gap={1}>
                {btns}
            </Stack>);
        })

        return (
            <Col sm={4} className="questions-container">
                {btnGroup}
            </Col>
        );
    };

    if (responses === null) {
        console.log('null answers');
        navigate('/');

    }

    let totalScore = getScore(responses.answers);
    let maxScore = getMaxScore(SCENARIO_AND_QUESTIONS);

    const [feedbackBoxTitle, setFeedbackBoxTitle] = useState("Question");
    const stars = useState(getStars(totalScore, maxScore));
    const [feedbackBoxContent, setFeedbackBoxContent] = useState(<p>Select a question to view your results</p>);
    const questionBtnContent = useState(getQuestionBtns(SCENARIO_AND_QUESTIONS));

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
    else {
        overallFeedbackTitle = "Excellent Attempt";
        overallFeedbackContent = "Congratulations! You are a software ethics expert.";
    }

    const [showFeedbackForm, setShowFeedbackForm] = React.useState(false);
    const toggleFeedbackForm = () => {
        setShowFeedbackForm(!showFeedbackForm);
    };
    
    function tryAgain() {
        const path = "/role";
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
                            <Stack gap={2}>
                                <button href="/" className="btn btn-outline-light btn-lg tryAgainButton" onClick={tryAgain}>Try Again</button>
                                <button href="/" className="btn btn-outline-light btn-lg showFeedbackFormButton" onClick={toggleFeedbackForm}>Give Your Feedback</button>
                                {showFeedbackForm && 
                                    (
                                        <div classname="feedbackForm">
                                        <iframe className="feedbackFrame"
                                        src="https://docs.google.com/forms/d/e/1FAIpQLSdaLn482RAEdQ39qqFw5oN71F7ghV_pCwRiCNVP_L80K1bitA/viewform?embedded=true" title='frame'>
                                            Loading…
                                        </iframe>
                                    </div>
                                    )
                                }
                            </Stack>
                        </Col>
                        {questionBtnContent}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default SummaryAndFeedback;
