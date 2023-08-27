import '../styles/landing.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";

export default function Landing() {
    const navigate = useNavigate();
    function routeChange() {
        const path = "/terms";
        navigate(path);
    }

    return (
            <div className="landingPage">
                <Container fluid className='contentContainer'>
                    <Row>
                        <div className='landingTitle'>
                            Software Ethics Quiz
                        </div>
                    </Row>
                    <Row>
                        <div className='startButtonContainer'>
                            <Button
                                variant='outline-light'
                                size='lg'
                                className='startButton'
                                onClick={routeChange}
                            >
                                Start
                            </Button>
                        </div>
                    </Row>
                </Container>
            </div>
        )
}