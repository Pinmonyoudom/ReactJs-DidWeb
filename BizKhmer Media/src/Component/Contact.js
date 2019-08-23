import React, { Component} from 'react';
import '../App.css';
import {Form,Col} from 'react-bootstrap';

class Contact extends Component {
    render() {
      return (
  <>

    <div id="CONTACT US" style={{marginTop:"50px"}}>
        <div style={{textAlign: "center", color:"#162466", fontSize: "30px", fontWeight: "bold"}} id="HIRE US NOW"> Contact US</div>
            <div style={{marginTop:"19px", marginLeft:"20px"}} >
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Control placeholder="Name" /><br></br>
                            <Form.Control placeholder="Email" /><br></br>
                            <Form.Control placeholder="Phone" /><br></br>
                        </Col>
                        <Col >
                            <textarea rows="6" cols="70" placeholder="Message" />
                        </Col>
                    </Form.Row>
                </Form>
      <a class="hire" style={{textDecoration:"none", cursor:"pointer", marginLeft:"1px"}} > SEND</a>
      </div>
      </div>
      </>
);
  }
}
export default Contact;