import React, { Component} from 'react';
import '../App.css';
import biz from '../Image/biz.png';
import Image from 'react-image-resizer';
import {Form,Row,Col} from 'react-bootstrap';

class Ff extends Component {
    render() {
      return (

<>
    <div style={{marginTop:"150px",marginLeft:"70px", color:"#162466",marginBottom:"-310px"}} >
    <Image src={biz} width={200} height={200} alt="logo"/>
    BizKhmer Media is an affiliate of<br></br>
      <span style={{fontWeight:"bold"}}>BizKhmer</span> (founded in 2015). We<br></br>
       provide digital marketing services<br></br> 
       at reasonable price but great<br></br> 
       results. 
       <div class="row" style={{marginLeft:"350px",marginTop:"-250px"}}>
  <div class="column" >
    <p>Business Hour</p>
    
  </div>
  
  <div class="column" >
    <p>Practice Areas</p>
    <ul className="decnone" style={{fontWeight:"normal",fontSize:"17px",marginLeft:"-40px",marginTop:"25px"}}>
    <a href="#" id="HOME" className="decnone">Home</a><br></br>
    <a href="#" id="SERVICES">Services</a><br></br>
    <a href="#" id="TEAM">Team</a><br></br>
    <a href="#" id="WORK FLOW">Work Flow</a><br></br>
    <a href="#" id="CONTACT US">Contact Us</a><br></br>
    </ul>
  </div>
  <div class="column" >
    <p>Newsletter</p>
  </div>

</div>
    </div>
    <div style={{marginLeft:"430px",marginTop:"80px",color:"#132466",fontWeight:"bold"}}>Opening Days :
        <ul></ul>
        <p style={{fontWeight:"normal",marginTop:"-10px"}}>Monday – Friday : 8am to 17 pm</p>
        <p style={{fontWeight:"normal"}}>Saturday : 9am to 17 pm</p>
        <p>Vacations:</p>
        <p style={{fontWeight:"normal",marginTop:"-10px"}}>All Sunday Days</p>
    </div>
    
    <div style={{marginLeft:"1050px",marginTop:"-190px",color:"#132466",fontWeight:"bold"}}>
        <ul></ul>
        <p style={{fontWeight:"normal",marginTop:"-10px"}}>Be the first to hear about the latest<br></br> product releases, collaborations:</p>
    
    </div>
    <Form>
      <Row style={{marginLeft:"1030px",width:"200px",marginTop:"-30px"}}>
        <Col style={{marginTop:"30px", marginRight:"-500px"}}>
          <Form.Control placeholder="Your E-Mail" />
        </Col>
          <Col>

          </Col>
      </Row>
    </Form>
    <a class="go" style={{textDecoration:"none", cursor:"pointer", marginRight:"-910px",marginLeft:"1220px"}} >></a>

    <div style={{color:"#132466",marginTop:"250px",marginBottom:"50px",textAlign:"center"}}>
    © 2019 BizKhmer Media All rights reserved.
    </div>

</>

);
  }
}
export default Ff;