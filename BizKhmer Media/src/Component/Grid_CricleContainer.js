
import React, {Component} from 'react'
import '../App.css';
import Image from 'react-image-resizer';
import group from '../Image/group.png';
import { Button, Card, Accordion } from 'react-bootstrap';

class Grid_CircleContainer extends Component {
    render() {
      return (
<>

    <div className="social" id="WORK FLOW">
        Social Media Marketing<p> Services</p>
    </div>
    <div className="kromsocial">
        Social media advertising can be one of the fastest ways to propel your business to the<p> top.</p>
    </div>
        <div className="gen">
            <div className="gridSubmit">
                <Image src={group} width={700} height={700}  />
                
<Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Analyze & In-deep Research of Your Products/Services
                    </Accordion.Toggle>
                </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                We have been using many tools and technologies to deeply explore your 
                problem so that we can craft workable solutions in the context of competition.
                With an unrivalled blend of expertise in communications, experience and 
                technology, we believe that your problems will be clearly identifies for 
                recommendation and marketing solutions. 
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
                <br></br><br></br>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Planning & Strategies
                    </Accordion.Toggle>
                </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            Social media advertising can be one of the fastest ways to propel your business 
                            to the top in your industry. Right media & digital marketing planning and 
                            strategies can help you bring in purchases, leads, and boost brand awareness 
                            effectively. For every scope of work with our client, planning & strategies are the 
                            first essential steps of our execution. Our team will craft a plan to achieve your 
                            goal. This means that we have got your targets first before hitting them with our 
                            weapons. 
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
                <br></br><br></br>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        Execution
                    </Accordion.Toggle>
                </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            We have our resources and extensive partners across APAC region especially a 
                            large of IT world India & a top creative mindset kingdom Thailand to support 
                            your campaigns. From our inside team, we have our production including video, 
                            photography & graphic design. You'll get your assets on time and on budget.  
                            There's nothing we can't deliver.
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
                <br></br><br></br>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                        Optimization & First Class Support  
                    </Accordion.Toggle>
                </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            See how our tactics are driving results, with a well-presented reporting and high-
                            touch services. You'll get regular updates and suggestions on how you can best 
                            optimize your plan according to your results & your budget. Rather than just 
                            Social Media services, you will gain our support on other online advertising 
                            channels including BizKhmer website and other media friends' websites. 
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
                <br></br><br></br>
        </Accordion> 
</div>  
</div>
</>     
);
  }
}

export default Grid_CircleContainer;
