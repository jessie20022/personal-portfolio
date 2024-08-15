import {useState} from 'react'; 
import {Container, Row, Col} from 'react-bootstrap';

export const Contact = () => {
    const formInitialDetails= {
        name: '',
        email: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = () => {

    }

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <h2>contact</h2>
                        <p>feel free to send me a message @ aprilwushuang at gmail dot com</p>
                        <p></p><br></br><p></p>
                        <p style={{ marginBottom: '-50px', fontSize: '13px' }}>built by Jessica Wu
                            <br></br>
                            last updated August 10, 2024
                        </p>
                        
                    </Col>
                </Row>
            </Container>
        </section>
    );
}