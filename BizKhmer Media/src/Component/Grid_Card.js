import React, { Component } from 'react';
import '../App.css'
import {Card} from 'react-bootstrap';
import Image from 'react-image-resizer';
import sophearith from '../Image/sophearith.png'
import lati from '../Image/lati.png'
import chanleap from '../Image/chanleap.png'
import vannak from '../Image/vannak.png'
import hout from '../Image/hout.png'
import sokheng from '../Image/sokheng.png'
import youheng from '../Image/youheng.png'
import matiya from '../Image/matiya.png'
import roth from '../Image/roth.png'
import sokly from '../Image/sokly.png'
class Grid_Card extends Component {

    render() {
      const style = {
        image: {
          marginLeft:"-5px",
          marginTop:"-150px"
        },
};
      return (
        <>             
          <div style={{textAlign: "center", color:"#162466", fontSize: "30px", fontWeight: "bold", marginTop:"200px"}} id="TEAM">
            Our Expert People
          </div>
            <div style={{textAlign: "center", color:"#162466", fontSize: "20px", fontWeight: "bold"}}> 
              Our growth is binding with our army team. 
            </div>
              <div  style={{marginTop:"100px"}}></div>
                <div className="gridCard">
                  <Card style={{ 
                      width: '250px', 
                      marginLeft:"50px", 
                      marginTop:"200px",
                      boxShadow: "10px 10px 5px 0px rgba(199,199,199,1)" ,
                      display:"grid",
                  }}>
                    <Image src={sophearith} width={200} height={200} style={style.image} />
                      <Card.Body style={{textAlign:"center",color:"#162466",marginTop:"-75px"}}>
                        <Card.Title > YORN Sophearith</Card.Title>
                          <Card.Text>
                            Founder & Managing Director<p></p>
                            He is a machine who put all clients above his life    
                          </Card.Text>
                      </Card.Body>
                  </Card>

                  <Card style={{ 
                      width: '250px', 
                      marginLeft:"50px", 
                      marginTop:"200px",
                      boxShadow: "10px 10px 5px 0px rgba(199,199,199,1)" ,
                      display:"grid",
                  }}>
                    <Image src={lati} width={200} height={200} style={style.image} />
                      <Card.Body style={{textAlign:"center",color:"#162466",marginTop:"-75px"}}>
                        <Card.Title style={{fontSize:"17px"}} > TRY Raksmey (La Ti)</Card.Title>
                          <Card.Text>
                            Social Media Executive<p></p>
                            She is our Project manager ninja. She manages local countless projects
                          </Card.Text>
                      </Card.Body>
                  </Card>

                  <Card style={{ 
                      width: '250px', 
                      marginLeft:"50px", 
                      marginTop:"200px",
                      boxShadow: "10px 10px 5px 0px rgba(199,199,199,1)" ,
                      display:"grid",
                  }}>
                    <Image src={chanleap} width={200} height={200} style={style.image} />
                      <Card.Body style={{textAlign:"center",color:"#162466",marginTop:"-5px"}}>
                        <Card.Title > KIM Chanleap</Card.Title>
                          <Card.Text>
                            Creative & Production Coordinator<p></p>
                            Chanleap is very humble in creating something new for clients. She coordinates with countless local partners.
                          </Card.Text>
                      </Card.Body>

                  </Card>

                  <Card style={{ 
                      width: '250px', 
                      marginLeft:"50px", 
                      marginTop:"200px",
                      boxShadow: "10px 10px 5px 0px rgba(199,199,199,1)" ,
                      display:"grid",
                  }}>
                    <Image src={vannak} width={200} height={200} style={style.image} />
                      <Card.Body style={{textAlign:"center",color:"#162466",marginTop:"-50px"}}>
                        <Card.Title > LUNG Vannak</Card.Title>
                          <Card.Text>
                            Content Operation Supervisor<p></p>
                            He is an English/Khmer content editor who work more than 500 articles
                          </Card.Text>
                      </Card.Body>
                  </Card>
                  <Card style={{ 
                      width: '250px', 
                      marginLeft:"50px", 
                      marginTop:"200px",
                      boxShadow: "10px 10px 5px 0px rgba(199,199,199,1)" ,
                      display:"grid",
                  }}>
                    <Image src={hout} width={200} height={200} style={style.image} />
                      <Card.Body style={{textAlign:"center",color:"#162466"}}>
                        <Card.Title > BUN Houth</Card.Title>
                          <Card.Text>
                            Head of Web/Mobile App<p></p>
                            He has extensive experiences with both local and international clients
                          </Card.Text>
                      </Card.Body>
                  </Card>
                  <Card style={{ 
                      width: '250px', 
                      marginLeft:"50px", 
                      marginTop:"200px",
                      boxShadow: "10px 10px 5px 0px rgba(199,199,199,1)" ,
                      display:"grid",
                  }}>
                    <Image src={sokheng} width={200} height={200} style={style.image} />
                      <Card.Body style={{textAlign:"center",color:"#162466",marginTop:"-30px"}}>
                        <Card.Title > LEU Sokheng</Card.Title>
                          <Card.Text>
                            PA & Sales Consultant<p></p>
                            A passionate young boy with extensive knowledge of products & services
                          </Card.Text>
                      </Card.Body>
                  </Card>
                  <Card style={{ 
                      width: '250px', 
                      marginLeft:"50px", 
                      marginTop:"200px",
                      boxShadow: "10px 10px 5px 0px rgba(199,199,199,1)" ,
                      display:"grid",
                  }}>
                    <Image src={youheng} width={200} height={200} style={style.image} />
                      <Card.Body style={{textAlign:"center",color:"#162466"}}>
                        <Card.Title > TOUCH Youheng</Card.Title>
                          <Card.Text>
                            Photographer/Video & Video Editor<p></p>
                            He posses of a broad background in photography & video shooting.
                          </Card.Text>
                      </Card.Body>
                  </Card>
                  <Card style={{ 
                      width: '250px', 
                      marginLeft:"50px", 
                      marginTop:"200px",
                      boxShadow: "10px 10px 5px 0px rgba(199,199,199,1)" ,
                      display:"grid",
                  }}>
                    <Image src={matiya} width={200} height={200} style={style.image} />
                      <Card.Body style={{textAlign:"center",color:"#162466"}}>
                        <Card.Title > TIN Matiya</Card.Title>
                          <Card.Text>
                            PR Writer & Consultant<p></p>
                            She holds a wider range of expertise in copywriting & local news
                          </Card.Text>
                      </Card.Body>
                  </Card>
                  <Card style={{ 
                      width: '250px', 
                      marginLeft:"50px", 
                      marginTop:"200px",
                      boxShadow: "10px 10px 5px 0px rgba(199,199,199,1)" ,
                      display:"grid",
                  }}>
                    <Image src={roth} width={200} height={200} style={style.image} />
                      <Card.Body style={{textAlign:"center",color:"#162466"}}>
                        <Card.Title > CHOUB Sreyroth</Card.Title>
                          <Card.Text>
                            Local News Reporter<p></p>
                            She is a graduated student of Media & Communications. She has been producing numerous quality local news.
                          </Card.Text>
                      </Card.Body>
                  </Card>
                  <Card style={{ 
                      width: '250px', 
                      marginLeft:"50px", 
                      marginTop:"200px",
                      boxShadow: "10px 10px 5px 0px rgba(199,199,199,1)" ,
                      display:"grid",
                  }}>
                    <Image src={sokly} width={200} height={200} style={style.image} />
                      <Card.Body style={{textAlign:"center",color:"#162466",marginTop:"-50px"}}>
                        <Card.Title > NOUN Sokly</Card.Title>
                          <Card.Text>
                            Graphic DESIGNER<p></p>
                            He is also one of our project ninja. He managing over 20 accounts.
                          </Card.Text>
                      </Card.Body>
                  </Card>  
                  
    </div>  
   

  </>
      );
    }
  }
  export default Grid_Card;