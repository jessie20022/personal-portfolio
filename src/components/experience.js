import { Container, Row, Col, Nav, Tab, Tabs } from 'react-bootstrap';


export const Experience = () => {
    return (
        <section className="experience" id="experience">
            <Container>
                <Row>
                    <Col>
                        <h2>experience</h2>
                        <p>Below, you can see my experience--whether it was involvement on campus or work during/post college.</p>
                        <p></p>
                        <Tabs id="experience-tabs" defaultActiveKey="profile" className="mb-3" justify>
                            <Tab eventKey="work" title="Work">
                                <Tab.Container id="work-tabs" defaultActiveKey="first">
                                    <Row>
                                        <Col>
                                        <Nav variant="pills" className="flex-column" id="work-tabs">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Deloitte</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Chewy</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Akira Technologies</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="fourth">Motorola Solutions</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="fifth">Leidos</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="sixth">University of Maryland</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        </Col>
                                        <Col>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                                <h5>Software Engineer Analyst @ Deloitte</h5>
                                                <h6>Arlington, Virginia</h6>
                                                <h6>June 2024 - Current</h6>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <h5>Software Engineer Intern @ Chewy</h5>
                                                <h6>Boston, Massachusetts</h6>
                                                <h6>June 2023 - August 2023</h6>
                                                <div class="experience-text">
                                                    Conducted chaos testing for the header and footer on the home page, injecting API errors using Java to ensure system resilience
                                                    <div className="custom-br"></div>
                                                    Developed API faults error object and formulated fault injections to simulate custom probability of error injection to requests
                                                    <div className="custom-br"></div>
                                                    Replicated API errors via Postman and executed comprehensive chaos tests within the Jenkins pipeline to evaluate system performance
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <h5>Data Scientist/Analyst Intern @ Akira Technologies</h5>
                                                <h6>Washington, DC (Remote)</h6>
                                                <h6>September 2022 - December 2023</h6>
                                                <div class="experience-text">
                                                    Developed and managed a healthcare data pipeline, combining diverse sources to analyze COVID trends across all 50 states
                                                    <div className="custom-br"></div>
                                                    Enhanced the data pipeline observability by reducing anomalies in datasets and modeled employee trends
                                                    <div className="custom-br"></div>
                                                    Researched Large Language Models to optimize future analysis strategies and improve modeling accuracy/efficiency
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="fourth">
                                                <h5>Pre-Sales Systems Engineer Intern @ Motorola Solutions</h5>
                                                <h6>Chicago, Illinois</h6>
                                                <h6>May 2022 - August 2022</h6>
                                                <div class="experience-text">Developed 4 internal tools to automate and simplify daily tasks from Google Scripts in Javascript
                                                    <div className="custom-br"></div>
                                                    Collected Nitro's project data to create a master sheet for all current projects; analyzed various trends based on each project’s characteristics; created a report of crutial trends, charts, and pivot tables
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="fifth">
                                                <h5>Security Engineer Intern @ Leidos</h5>
                                                <h6>Columbia, Maryland</h6>
                                                <h6>February 2022 - May 2022</h6>
                                                <div class="experience-text">
                                                    Gained hands-on experience in basic hardware Security Functional Requirements for products
                                                    <div className="custom-br"></div>
                                                    Conducted testing and physically tampered with evidence for critical criteria
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="sixth">
                                                <h5>Undergraduate Math Tutor & Community Assistant @ University of Maryland</h5>
                                                <h6>College Park, Maryland</h6>
                                                <h6>August 2021 - December 2023</h6>
                                                <div class="experience-text">
                                                    Enhanced college student’s academics and learning in college algebra, pre-calculus, trigonometry, and elementary statistics and probability
                                                    <div className="custom-br"></div>
                                                    Assistant at front desks in community center to assist 1300+ residents with questions at their resident hall
                                                    <div className="custom-br"></div>
                                                    Quick thinking and adaptable responses to important situations regarding COVID-19 and quarantine housing
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                        </Col>
                                    </Row>
                                </Tab.Container>
                            </Tab>
                            <Tab eventKey="research" title="Research">
                                <Tab.Container id="research-tabs" defaultActiveKey="first">
                                    <Row>
                                        <Col>
                                        <Nav variant="pills" className="flex-column" id="work-tabs">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">BALTO</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">VisCorpus</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        </Col>
                                        <Col>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                                <h5>Research Assistant @ University of Maryland</h5>
                                                <h6>January 2023 - May 2024</h6>
                                                <div class="experience-text">
                                                    Implemented incentive payment system to calculate user rewards derived from MariaDB trips using Pandas and SQL queries
                                                    <div className="custom-br"></div>
                                                    Created visualizations in React and d3.js to display average wait time, ride time, and transfer time calculated from TrackIntel
                                                    <div className="custom-br"></div>
                                                    Redesigned the website's UI to display rider information and add components with personal travel statistics, enhancing UX
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <h5>Research Assistant @ University of Maryland</h5>
                                                <h6>Setember 2023 - May 2024</h6>
                                                <div class="experience-text">
                                                    Conducted tool testing with SVGs, pinpointing areas to improve accuracy in recognizing and differentiating data groups
                                                    <div className="custom-br"></div>
                                                    Implemented tool features: added pop-ups for axes/legends, introduced display box for identifying axes in bar charts, and expanded tool functionality with unseen chart marks in data visualization.
                                                    <div className="custom-br"></div>
                                                    Crafted the website's UI to display SVG elements, chart details, extracted elements, and backend integration for processing selections
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                        </Col>
                                    </Row>
                                </Tab.Container>
                            </Tab>
                            <Tab eventKey="projects" title="Projects">
                                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                    <Row>
                                        <Col>
                                        <Nav variant="pills" className="flex-column" id="work-tabs">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Evexia</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">UMD Grade Data</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Squirrel.IO</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="fourth">PyTracker</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        </Col>
                                        <Col>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                            <div class="experience-text">
                                                    <h5><a href="https://github.com/jessie20022/Evexia" target="_blank" rel="noopener noreferrer">Evexia</a></h5>
                                                    Technologies: HTML, CSS, Javascript
                                                    <div className="custom-br"></div>
                                                    Evexia is a web-app created to track user's fitness levels, weight, sleep, and calorie/macronutrients. 
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <div class="experience-text">
                                                    <h5><a href="https://jessie20022.github.io/cmsc320finalproject/" target="_blank" rel="noopener noreferrer">How Does Your Major Affect Your Average GPA?</a></h5>
                                                    Technology: Python
                                                    <div className="custom-br"></div>
                                                    Analysis on the grade data of CMSC and KNES courses at UMD
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <div class="experience-text">
                                                    <h5><a href="https://github.com/Michael-Amaya/Squirrel.IO" target="_blank" rel="noopener noreferrer">Squirrel.IO</a></h5>
                                                    Technologies: Swift/Swift UI, Firebase
                                                    <div className="custom-br"></div>
                                                    Squirrel.IO is a social media app intended for users to post and share pictures of squrriels found on the University of Maryland campus.
                                                </div>
                                                </Tab.Pane>
                                            <Tab.Pane eventKey="fourth">
                                                <div class="experience-text">
                                                    <h5><a href="https://jessie20022.github.io/PyTracker/" target="_blank" rel="noopener noreferrer">PyTracker</a></h5>
                                                    <h6>Beginning stages of development</h6>
                                                    <div className="custom-br"></div>
                                                    Technologies: React, MySQL
                                                    <div className="custom-br"></div>
                                                    PyTracker will assist the user in tracking their sleep hours, reaction times, and gather statistics for the data.
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                        </Col>
                                    </Row>
                                </Tab.Container>
                            </Tab>
                        </Tabs>

                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-right" src={headerImage3}></img> */}
        </section>
    );
}