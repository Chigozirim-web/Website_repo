import React from "react";
import Navbar from "react-bootstrap/Navbar"
import NavbarBrand from "react-bootstrap/NavbarBrand"
import Nav from "react-bootstrap/Nav"

const Footer = () => {
    return (
        <div className="fixed-bottom">  
            <Navbar bg="dark" expand="sm" variant="dark" className="mb-0 py-0">
              <Navbar.Text>
                <i> Created by Chigozirim Arukwe</i> <span>&copy;</span>
              </Navbar.Text>
                <Nav className="me-auto">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 my-0">
                        <li>
                            <a 
                            href="http://www.linkedin.com/in/margaretarukwe" 
                            target={'_blank'} 
                            className="btn btn-outline-light mx-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                </svg> 
                            </a>
                            <a href="mailto:arukwemargaret@gmail.com" className="btn btn-outline-light">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-paper-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M6.5 9.5 3 7.5v-6A1.5 1.5 0 0 1 4.5 0h7A1.5 1.5 0 0 1 13 1.5v6l-3.5 2L8 8.75l-1.5.75ZM1.059 3.635 2 3.133v3.753L0 5.713V5.4a2 2 0 0 1 1.059-1.765ZM16 5.713l-2 1.173V3.133l.941.502A2 2 0 0 1 16 5.4v.313Zm0 1.16-5.693 3.337L16 13.372v-6.5Zm-8 3.199 7.941 4.412A2 2 0 0 1 14 16H2a2 2 0 0 1-1.941-1.516L8 10.072Zm-8 3.3 5.693-3.162L0 6.873v6.5Z"/>
                                </svg>  
                            </a>
                        </li>
                     </ul>           
                </Nav>
            </Navbar>
        </div>
    );
};

export default Footer;