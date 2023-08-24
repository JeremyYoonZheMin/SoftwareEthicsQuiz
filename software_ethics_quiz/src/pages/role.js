import '../styles/questions.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";

export default function Role() {

    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const navigate = useNavigate();

    const roles = ["IT Student", "Software Practitioner", "IT Researcher", "Working in the IT domain", "Other"]

    function selectAnswer(event) {
        let answer = event.target.id;
        setSelectedAnswer(answer)
    }

    function routeChange() {
        const path = "/questions";
        navigate(path);
    }

    return (
        <div className="questionsPage">
            <div className='content'>
                <Container fluid className='contentContainer'>
                    <Row className='contentRow'>
                        <Col>
                            <div className='answersContainer'>
                                <div className='answerPrompt'>Please select a role that best describes you:</div>
                                <Form className='answers'>
                                    {roles.map((role, i) =>
                                        <div key={`${i}`} className="mb-3 answer">
                                            <Form.Check type="radio" id={`${i}`} checked={selectedAnswer === `${i}`}
                                                        onChange={selectAnswer}/>
                                            <div className='ms-3'>
                                                {role}
                                            </div>
                                        </div>
                                    )}
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className='continueButtonContainer my-5'>
                    <div>
                        <Button variant='outline-light' size='lg' className='continueButton' onClick={routeChange}
                                disabled={(selectedAnswer == null)}>Start</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}