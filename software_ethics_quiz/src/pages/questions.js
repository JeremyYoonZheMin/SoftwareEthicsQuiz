import '../styles/questions.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import nerd from '../assets/nerd.png';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { scenariosAndQuestions } from '../constants/scenariosAndQuestions';

export default function Questions() {

    let numQuestions = scenariosAndQuestions.reduce((numQuestions, scenario) => numQuestions + scenario.questions.length, 0)
    let selectedAnswersStructure = Array(scenariosAndQuestions.length)
    for (let i = 0; i < selectedAnswersStructure.length; i++) {
        selectedAnswersStructure[i] = Array(scenariosAndQuestions[i].questions.length)
    }

    const [currentScenario, setCurrentScenario] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState([0, 0]) // [index of question out of all questions, index of question within scenario]
    const [selectedAnswers, setSelectedAnswers] = useState(selectedAnswersStructure)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const navigate = useNavigate();

    function selectAnswer(event) {
        let answer = event.target.id;
        setSelectedAnswer(answer)
    }

    function goToNextQuestion(event) {
        setSelectedAnswer(null)
        if (currentQuestion[0] == numQuestions - 1) {
            console.log(selectedAnswers);
            // console.log(selectedAnswersStructure);
            // navigate("/summary");
        } else if (currentQuestion[1] == scenariosAndQuestions[currentScenario].questions.length - 1) {
            setCurrentScenario(currentScenario + 1)
            setCurrentQuestion([currentQuestion[0] + 1, 0])
        } else {
            setCurrentQuestion([currentQuestion[0] + 1, currentQuestion[1] + 1])
        }
    }

    function goToPreviousQuestion(event) {
        setSelectedAnswer(null)
        if (currentQuestion[1] != 0) {
            setCurrentQuestion([currentQuestion[0] - 1, currentQuestion[1] - 1])
        } else {
            setCurrentScenario(currentScenario - 1)
            setCurrentQuestion([currentQuestion[0] - 1, scenariosAndQuestions[currentScenario].questions.length - 1])
        }   // User should not be able to call this function when they are on the first question
    }

    return (
        <div className="questionsPage">
            <div className='questionsHeader'>
                <h1 className={`questionNavigation ${(currentScenario == 0 && currentQuestion[0] == 0) && 'hidden'}`} onClick={goToPreviousQuestion}><i class="bi bi-arrow-left-circle-fill"></i></h1>
                <div className='questionHeaderCentreColumn'>
                    <div className="questionNumber">Question {currentQuestion[0] + 1}/{numQuestions}</div>
                    <h1 className='headerTitle'>Scenario {currentScenario + 1}</h1>
                </div>
                <h1 className={`questionNavigation ${(currentQuestion[0] == numQuestions - 1) && 'hidden'}`} onClick={goToNextQuestion}><i class="bi bi-arrow-right-circle-fill"></i></h1>
            </div>
            <div className='content'>
                <Container fluid className='contentContainer'>
                    <Row className='contentRow'>
                        <Col xs={4} className='d-flex align-items-center'>
                            <img src={nerd} alt='Person on laptop' className='img-fluid nerd'></img>
                        </Col>
                        <Col className='scenarioTextColumn'>
                            <div className='scenarioText'>{scenariosAndQuestions[currentScenario].scenario}</div>
                        </Col>
                    </Row>
                    <Row className='contentRow'>
                        <Col>
                            <div className='questionTitle'>Question {currentQuestion[1] + 1}</div>
                            <div className='questionText'>{scenariosAndQuestions[currentScenario].questions[currentQuestion[1]].question}</div>
                        </Col>
                    </Row>
                    <Row className='contentRow'>
                        <Col>
                            <div className='answersContainer'>
                                <div className='answerPrompt'>Please select an answer:</div>
                                <Form className='answers'>
                                    {scenariosAndQuestions[currentScenario].questions[currentQuestion[1]].answers.map((answer, i) =>

                                        <div key={`answer-${i}`} className="mb-3 answer">
                                            <Form.Check type="radio" id={`answer-${i}`} checked={selectedAnswer == `answer-${i}`} onChange={selectAnswer} />
                                            <div className='ms-3'>
                                                {answer.answer}
                                            </div>
                                        </div>
                                    )}
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className='continueButtonContainer my-5'>
                    <Button variant='outline-light' size='lg' className='continueButton' onClick={goToNextQuestion}>Continue</Button>
                </div>
            </div>
        </div>
    )
}