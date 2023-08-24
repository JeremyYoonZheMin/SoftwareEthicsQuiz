import '../styles/terms.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Terms() {
    const [agreement, setAgreement] = useState(false);
    const handleChange = (event) => {
        setAgreement(event.target.checked);
    }

    const navigate = useNavigate();
    function routeChange() {
        const path = "/role";
        navigate(path);
    }

    return (
        <div className="termPage">
            <Container fluid className='contentContainer'>
                <Row>
                    <div className='termsTitle'>
                        Terms & Conditions
                    </div>
                </Row>
                <Row>
                    <div className='termsBody'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in sem cursus, convallis ex in, rutrum lorem. Curabitur efficitur ante ac congue sodales. Mauris varius ac sapien sit amet fermentum. Morbi quis dui efficitur mauris ultrices ullamcorper in quis nibh. Nulla dignissim eu ex at imperdiet. Maecenas sollicitudin venenatis ex ut porttitor. Vestibulum eget sodales sapien, sed vehicula orci. Nunc vel augue vitae orci vestibulum molestie. Sed dapibus urna sed facilisis sagittis. Mauris egestas bibendum volutpat. Vivamus vel velit et urna efficitur tempor.
                        <br/><br/>
                        Donec euismod, urna ut maximus placerat, sem libero convallis felis, vitae varius eros enim et tellus. Praesent posuere felis lacus. In pellentesque ex efficitur, tincidunt dolor non, mattis risus. Curabitur scelerisque urna in ante eleifend, at fermentum sem facilisis. Curabitur vel convallis mi. Nam id luctus tellus, in lacinia nisl. Nam at arcu non libero sollicitudin tincidunt. Sed sapien orci, hendrerit eu finibus nec, lobortis at nulla. In iaculis felis ac augue pharetra, sit amet rhoncus massa feugiat.
                        <br/><br/>
                        Fusce bibendum felis rhoncus dapibus egestas. Curabitur faucibus augue id pellentesque mollis. Suspendisse ex purus, tincidunt et molestie non, semper ut ante. Vivamus vel massa accumsan, finibus tellus a, convallis risus. Curabitur faucibus euismod luctus. Nullam neque arcu, semper nec enim dapibus, laoreet convallis leo. Nam enim massa, tempor eget purus vel, consequat fringilla nunc.
                        <br/><br/>
                        Donec ex sapien, consectetur ut sapien et, consequat interdum leo. Vivamus vitae sem orci. Maecenas nec ipsum ullamcorper erat ornare congue. Nulla facilisi. Nulla elementum turpis vel nulla elementum, sed iaculis lorem tempor. Suspendisse potenti. Aliquam non interdum orci, vel tincidunt est. Suspendisse ut justo id purus convallis bibendum.
                        <br/><br/>
                        Donec felis arcu, scelerisque eu nibh in, dictum ullamcorper augue. Sed lacinia nec justo ut blandit. Duis euismod condimentum nisi, consectetur tincidunt nunc finibus sed. Suspendisse scelerisque egestas mollis. Fusce placerat tempus auctor. Cras eu interdum ex. Sed sagittis luctus tempor.
                    </div>
                </Row>
                <Row>
                    <Form className='checkbox'>
                        <Form.Check type={"checkbox"}>
                            <Form.Check.Input
                                type={"checkbox"}
                                name={"agreement"}
                                onChange={handleChange}
                            />
                            <Form.Check.Label>I understand and agree to the terms and conditions</Form.Check.Label>
                        </Form.Check>
                    </Form>
                </Row>
                <Row>
                    <div className='continueButtonContainer'>
                        <Button
                            variant='outline-light'
                            size='lg'
                            disabled={!agreement}
                            onClick={routeChange}
                        >
                            Continue
                        </Button>
                    </div>
                </Row>
                <Row>
                    <div className='termsFooter'></div>
                </Row>
            </Container>
        </div>
    )
}