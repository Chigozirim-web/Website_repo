import React from "react";
import Container from "react-bootstrap/Container"

const Portfolio = () => {
    return (
        <div >
            <div className="container-md container-fluid myback myheadings">
                <br />
                <p>
                    <>Hello! Here a a few of my projects.</> 
                    <br />
                    Other projects and assignments I've worked on can be 
                    found in my github: <a 
                    href="https://github.com/Chigozirim-web/" 
                    target={'_blank'} 
                    className="btn bn-outline-dark"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-folder-symlink-fill" viewBox="0 0 16 16">
                            <path d="M13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2l.04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3zM2.19 3c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672a1 1 0 0 1 .707.293L7.586 3H2.19zm9.608 5.271-3.182 1.97c-.27.166-.616-.036-.616-.372V9.1s-2.571-.3-4 2.4c.571-4.8 3.143-4.8 4-4.8v-.769c0-.336.346-.538.616-.371l3.182 1.969c.27.166.27.576 0 .742z"/>
                        </svg> 
                    </a>
                </p>
                <p>
                    This list would be updated regularly, as I continue to work on more exciting projects
                    <br /> <br />
                    In the mean time, check these out
                </p>
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                    </svg>
                </p>
                <br />
            </div>
            <br /> <br /> 

            <div className="container-md container-fluid myback">
                <br />
                <Container fluid='md'>
                    <h3 style={{ color: 'green' }}>Web application for Book Recommendations:</h3>
                    <p>
                        Having gained web development skills from taking the course <i>Database Systems and Web services</i> at my school,
                        I was searching for a way to apply the skills and create something that I was genuinely interested in. 
                        <br />
                        This led me to create a web application where users can submit their book recommendations and also view those of others. 
                    </p>
                    <p>
                        <strong style={{ color: 'green' }}>Why?</strong>
                        <br /> 
                        Well I have always enjoyed reading books, be it fiction or non-fiction.
                        <br />
                         And occassionally I like to ask people to know what book(s) of theirs they would certainly recommend to others,
                        after which I would add them all to my list of "must-reads".
                    </p>

                    <p>
                        <strong style={{ color: 'green' }}> How?</strong>
                        <br />
                        I developed my app's backend using python's Flask library, which served the purpose of authenticating users using jwt,
                        handling incoming AJAX request and returning JSON responses, and connecting the client side to my MySQL database.
                    </p>
                    <p>
                        The frontend was developed using Javascript's Vue framework and bootstrap for styling and interactivity.
                        <br />
                        The applications routes were set and navigated using Vue-router; axios was implemented to send requests to the backend server;
                        vuex was used for state management and cookies from <i>js-cookie</i> were used to locally store user's state.
                    </p>
                    <p>
                        The flask backend was served with heroku and the SPA frontend was hosted on github pages.
                    </p>
                    <p>
                       <strong style={{ color: 'green' }}> Where?</strong>
                        <br /> 
                        Visit the application here <a 
                        href="https://chigozirim-web.github.io/book-review/" 
                        target={'_blank'} 
                        className=" btn btn-outline-success btn-sm mybutton"
                        >
                            Book Review
                        </a> and do signup and leave a book recommendation if you have the time- 
                        I would love to read something new&#128578;
                        <br />
                        (This app's repo on git hub: 
                        <a href="https://github.com/Chigozirim-web/book-review" target={'_blank'} className="btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-folder-symlink-fill" viewBox="0 0 16 16">
                                <path d="M13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2l.04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3zM2.19 3c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672a1 1 0 0 1 .707.293L7.586 3H2.19zm9.608 5.271-3.182 1.97c-.27.166-.616-.036-.616-.372V9.1s-2.571-.3-4 2.4c.571-4.8 3.143-4.8 4-4.8v-.769c0-.336.346-.538.616-.371l3.182 1.969c.27.166.27.576 0 .742z"/>
                            </svg> 
                        </a>)
                    </p>

                </Container>
                <br />
            </div>
        
            <br /> <br /> 
            <div className="container-md container-fluid myback">
                <br />
                <Container fluid='md'>
                    <h3 style={{ color: 'green' }}>My Website:</h3>
                    <p>
                        This website is itself one of my projects. 
                        <br /> 
                        I began working on it sometime in early February 2022 and finished it, up 
                        until this point, on 16th February.
                    </p>
                    <p>
                        I implemented the Javascript library "<i>React</i>" in designing this website, and
                        React-bootsrap and main bootstrap for the UI.
                    </p>
                    <p>
                        This website's repo on my github: <a 
                        href="https://github.com/Chigozirim-web/Chigozirim-web.github.io" 
                        target={'_blank'} 
                        className="btn btn-dark"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-folder-symlink-fill" viewBox="0 0 16 16">
                                <path d="M13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2l.04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3zM2.19 3c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672a1 1 0 0 1 .707.293L7.586 3H2.19zm9.608 5.271-3.182 1.97c-.27.166-.616-.036-.616-.372V9.1s-2.571-.3-4 2.4c.571-4.8 3.143-4.8 4-4.8v-.769c0-.336.346-.538.616-.371l3.182 1.969c.27.166.27.576 0 .742z"/>
                            </svg>
                        </a>
                    </p>
                </Container>
                <br />
            </div>

            <br /><br /> 

            <div className="container-md container-fluid myback">
                <br />
                <Container fluid='md'>
                    <h3 style={{ color: 'green' }}>Libevent Server:</h3>

                    <p>
                        This is a simple guessing game which was part of an assignment from the course <i>Operating systems</i> which I took last fall.
                    </p>
                    <p>
                        With the help of the Libevent library, I developed this simple server in C. 
                        <br /> <br />
                        The server obtains phrases via the Linux program fortune, i.e., 
                        by running fortune -s as a child process and reading the output produced by the child process from a pipe.
                        <br />
                        The server then selects a random word, replaces it with underscores, and sends the challenge to the client.
                    </p>
                    <p>
                        The server has listening sockets for both ipv4 and ipv6 addresses.
                        <br /> <br />
                        See repo and source code: <a 
                         href="https://github.com/Chigozirim-web/libevent_server" 
                         target={'_blank'} 
                         className="btn btn-dark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-folder-symlink-fill" viewBox="0 0 16 16">
                                <path d="M13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2l.04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3zM2.19 3c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672a1 1 0 0 1 .707.293L7.586 3H2.19zm9.608 5.271-3.182 1.97c-.27.166-.616-.036-.616-.372V9.1s-2.571-.3-4 2.4c.571-4.8 3.143-4.8 4-4.8v-.769c0-.336.346-.538.616-.371l3.182 1.969c.27.166.27.576 0 .742z"/>
                            </svg>
                        </a>
                    </p>
                    <br />
                </Container>
            </div>
            <br /> 
        </div>
    );
};


export default Portfolio;