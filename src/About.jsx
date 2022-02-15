import React from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Popover from "react-bootstrap/Popover"
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="container-md container-fluid myback">
            <br />
            <Container >
                <h2 className="myheadings">About...</h2>
                
                <Row >
                    <p className=""> 
                        <MyPop />
                    </p>
                    <br />
                    <p> 
                        Hello!   
                        <br />
                         I am Chigozirim (pronounced chee-goh-zi-rim) Margaret Arukwe,
                        <br />
                        a 2nd year Computer Science student at Jacobs University Bremen in Germany.
                    </p>
                    <p>
                        I am a team assistant at the African Heritage Society and a member of the Society of Women in STEM (SWSTEM) at my school.
                        <br /><br />
                        In my first year, I was privileged to participate in the UK Bright Network Internship Program where I learned a lot from seasoned speakers and tech professionals.
                        <br />
                        Last year I worked in an IT team as an organizer for <i>jacobsHack!</i>- a student-run hackathon held in Jacobs University.
                    </p>
                    <p>
                        During the onset of the pandemic in Germany, I volunteered as a health provider to help combat the spreading of the virus in my school's campus;
                         one of the most fulfilling experiences of my first year  &#129309;.
                    </p>
                    <p>
                        Generally, I love to learn new things: skills, information, tech tools etc., <br />
                        and I am constantly channelling this curiosity and will more and more into expanding my tech knowledge and skills.
                    </p>
                    <p>
                        I code (a lot more than I realize actually), <br />
                        and also read a lot, according to everyone around me, although I don't think it's a lot &#128578;
                        <br /> and as a result, my social life is non-existent (I'm joking)
                    </p>
                    <p>
                        At my leisure, I like to play puzzle games(mostly sudoku) and scrabble and watch movies.
                        <br /> I also play table tennis, seldom.
                    </p>
                    <p>
                        I enjoy travelling and exploring new places,
                        <br /> but I'll probably choose to stay indoors 85% of the time, 
                        so you see, it's a battle.
                    </p>
                    <p>
                        While I know this is a rather casual <i>Tell-me-about-yourself</i> situation, I also have a formal 
                        résumé if you are into that kind of thing.
                        <br /> <br />
                        And while you are at it, do check out my 
                        work!  <Button variant="dark" size="small"> 
                        <Link to="/portfolio" className="mybutton" style={{ color: 'white' }}> Portfolio </Link>
                        </Button>
                    </p>
                    <p>
                        Thanks. Bye!
                    </p>
                    <br /> 
                </Row>
            </Container>
            <br />
        </div>
    );
};

const popover = (
  <Popover id="popover-basic">
    <Popover.Body as={'h6'}>
      Life is too short to remove that USB safely.
      <br /> Take it out now!
    </Popover.Body>
  </Popover>
);

const MyPop = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-info-square-fill" viewBox="0 0 16 16">
        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
    </svg>
  </OverlayTrigger>
);


export default About;