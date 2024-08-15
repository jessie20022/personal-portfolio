import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Sun } from "react-bootstrap-icons";
import headerImage1 from "../img/headerImage1.jpg";
import headerImage2 from "../img/headerImage2.jpg";
import headerImage3 from "../img/headerImage3.jpeg";

export const Banner = () => {
    const rotateImages = [headerImage1, headerImage2, headerImage3];
    const [loopNum, setLoopNum] = useState(0);

    useEffect(() => {
        let ticker = setInterval(() => {
            setLoopNum(prevLoopNum => (prevLoopNum + 1) % rotateImages.length);
        }, 2000);

        return () => { clearInterval(ticker); };
    }, [rotateImages.length]);

    const renderImage = () => {
        let i = loopNum % rotateImages.length;
        let currentImage = rotateImages[i];
        return <img src={currentImage} alt={`header ${i + 1}`} className="rounded-image" />;
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <p style={{ fontSize: '18px', marginBottom: '0px'}}>Hi! My name is</p>
                        <h1>{"Jessica Wu"}</h1>
                        <span className="tagline"> <Sun size={20} /> welcome to my haven <Sun size={20} /> </span>
                        <p> I am a software engineer analyst at Deloitte. </p>
                        {/* <button onClick={() => console.log('connect')}> check out my blog! </button> */}
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        {renderImage()}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
