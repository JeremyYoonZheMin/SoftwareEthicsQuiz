import '../styles/questions.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import nerd from '../assets/nerd.png';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'
import Button from 'react-bootstrap/Button';

export default function Questions() {

    const [selectedAnswer, setSelectedAnswer] = useState(null)

    function selectAnswer(event) {
        let answer = event.target.id;
        setSelectedAnswer(answer)
    }

    return(
        <div className="questionsPage">
            <div className='questionsHeader'>
                <div className="questionNumber">Question 1/16</div>
                <h1 className='scenarioTitle'>Scenario 1</h1>
            </div>
            <div className='content'>
                <Container fluid className='contentContainer'>
                    <Row>
                        <Col xs={4} className='d-flex align-items-center'>
                            <img src={nerd} alt='Person on laptop' className='img-fluid nerd'></img>
                        </Col>
                        <Col>
                            <div className='scenarioText'>Facebook and Twitter use sophisticated algorithms to determine the exact combination of notifications, icons, and lurid content that will keep their users hooked. As a result, everyone’s social media experience is different, with each News Feed perfectly tailored to the user’s vices. The result is a digital echo chamber that reinforces an individual’s parochial worldview. Moreover, social media shows content a user is likely to click on, regardless of whether it’s true, useful, or good for their well-being.You are part of a company publishing a popular social media application called Convey, similar to Facebook. In the interests of economic profit, your company has gradually implemented more and more features into Convey to drive user engagement in the hopes of gathering more user data.</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='questionTitle'>Question 1</div>
                            <div className='questionText'>It was discovered that, by presenting users with more inflammatory content to boost user engagement, echo chambers and silos have been created on Convey. This has led to the propagation of misinformation and more extreme ideas inside these echo chambers, and have contributed to a larger divide in the population. What should be Convey's publisher's first course of action?</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <div className='answersContainer'>
                            <div className='answerPrompt'>Please select an answer:</div>
                            <Form className='answers'>
                                <div key={'answer-1'} className="mb-3 answer">
                                    <Form.Check type="radio" id="answer-1" checked={selectedAnswer=='answer-1'} onChange={selectAnswer}/>
                                    <div className='ms-3'>
                                        Capitalise on the increase in polarisation to attract political and ideological investors as advertisers to further increase Convey’s reach and influence.
                                    </div>
                                </div>
                                <div key={'answer-2'} className="mb-3 answer">
                                    <Form.Check type="radio" id="answer-2" checked={selectedAnswer=='answer-2'} onChange={selectAnswer}/>
                                    <div className='ms-3'>
                                        Remove the design and algorithms that contribute to the creation of these echo chambers.
                                    </div>
                                </div>
                                <div key={'answer-3'} className="mb-3 answer">
                                    <Form.Check type="radio" id="answer-3" checked={selectedAnswer=='answer-3'} onChange={selectAnswer}/>
                                    <div className='ms-3'>
                                        Wait (and possibly fight) for regulations to require change from all social media platforms, so the company can make the required ethical changes without losing to its competitors.
                                    </div>
                                </div>
                                <div key={'answer-4'} className="mb-3 answer">
                                    <Form.Check type="radio" id="answer-4" checked={selectedAnswer=='answer-4'} onChange={selectAnswer}/>
                                    <div className='ms-3'>
                                        Fight against regulations and allow users’ subconscious biases to determine their content, as is the situation now.
                                    </div>
                                </div>
                            </Form>
                        </div>
                        </Col>
                    </Row>
                </Container>
                <div className='continueButtonContainer my-5'>
                    <Button variant='outline-light' size='lg' className='continueButton'>Continue</Button>
                </div>
            </div>
        </div>
    )
}