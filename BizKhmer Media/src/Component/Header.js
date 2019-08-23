import React, { Component} from 'react';
import '../App.css';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import biz from '../Image/biz.png';
import Cambodia from '../Image/cambodia.png'
import USA from '../Image/usa.png'
import China from '../Image/china.png'
import Image from 'react-image-resizer';

class Header extends Component {
    render() {
      return (
<>
    <img src={biz} alt="Error" className="biz"/>
    <a class="hire" style={{textDecoration:"none",marginLeft:"1160px" }} href="#HIRE US NOW">
    HIRE US NOW
    </a>
        <div style={{marginTop:"-105px",marginLeft:"450px"}}>
            <Navbar>
            <Navbar.Collapse>
                    <Nav.Link href="#HOME" className="headbar">HOME</Nav.Link>
                    <Nav.Link href="#SERVICES" className="headbar">SERVICES</Nav.Link>
                    <Nav.Link href="#TEAM" className="headbar">TEAM</Nav.Link>
                    <Nav.Link href="#WORK FLOW" className="headbar">WORK FLOW</Nav.Link>
                    <Nav.Link href="#CONTACT US" className="headbar">CONTACT US</Nav.Link> 
                <div style={{marginRight:"7px",display:"inline-block"}}>  
                <img src={Cambodia} alt="khmer" className="krom"/>
                </div>
            <NavDropdown title="LANGUAGES" style={{fontWeight:"bold"}}>  
                <NavDropdown.Item href="https://www.lonelyplanet.com/cambodia" target="_blank"><Image src={Cambodia} width={50} height={50} alt="logo"/></NavDropdown.Item>
                <NavDropdown.Item href="https://www.lonelyplanet.com/usa" target="_blank"><Image src={USA} width={50} height={50} alt="logo"/></NavDropdown.Item>
                <NavDropdown.Item href="https://www.lonelyplanet.com/china" target="_blank"><Image src={China} width={50} height={50} alt="logo"/></NavDropdown.Item>
            </NavDropdown>
            </Navbar.Collapse>
            </Navbar>
        </div>
</>
);
  }
}
export default Header;