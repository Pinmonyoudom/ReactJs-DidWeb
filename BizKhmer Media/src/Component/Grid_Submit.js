import React, { Component} from 'react';
import '../App.css';
import Image from 'react-image-resizer';
import nextGen from '../Image/nextGen.png'
import {Form,Row,Col} from 'react-bootstrap';

class Grid_Submit extends Component {
  render() {
    return (
<>
  <div style={{marginTop:"100px"}}> 
    <div className="gridSubmit">
      <Image src={nextGen} width={700} height={700}  />
        <div className="streg2">The Next Generation of the Marketing
          <div style={{marginTop:"19px",fontSize:"15px",width:"400px"}} >
            We will take everything you hate about social platforms, 
            crossed it out in red ink and wrote down everything your 
            customers would like to see. This is the capacity that we 
            wish to move it the next generation along with the updates 
            of new marketing tools and technologies.       
          </div>
    <Form>
      <Row>
        <Col style={{marginTop:"30px", marginRight:"-100px"}}>
          <Form.Control placeholder="youremail@domain.com" />
        </Col>
          <Col>
            <a class="hire" style={{textDecoration:"none", cursor:"pointer", marginLeft:"90px"}} >SUBMIT</a>
          </Col>
      </Row>
    </Form>
      </div>   
    </div>     
  </div>
</>
);
  }
}
export default Grid_Submit;