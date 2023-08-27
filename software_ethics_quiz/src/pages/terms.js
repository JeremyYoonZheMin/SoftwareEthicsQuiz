import '../styles/terms.css'
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
            <div className='termsTitle'>
                Terms & Conditions
            </div>
            <div className='frameContainer'>
                <iframe className='frame'
                        src="https://docs.google.com/document/d/e/2PACX-1vR8_5mbjPW7DLHReJ1_C6qf-29UX_wceOHesrIBxs69qWHgZgSVnn8jX2Ckrc2p1nu13veLY5If0RS1/pub?embedded=true"
                        title="Explanatory Statement">
                </iframe>
            </div>
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
            <div className='termsFooter'></div>
        </div>
    )
}