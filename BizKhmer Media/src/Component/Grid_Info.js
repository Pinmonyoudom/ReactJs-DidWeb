import React, {Component} from 'react'
import streg from '../Image/streg.png';
import web_mobile from '../Image/web&mobile.png';
import digital from '../Image/digital.png';
import seo from '../Image/seo.png';
import Image from 'react-image-resizer';

class Grid_Info extends Component {
    render() {
      return (
<>
    <div className="grid">
        <div>
            <div style={{color:"#162466", width:"400px"}}>
            <h2>Planning & Strategies + Branding (Long Term) + Execution</h2>
                <div style={{marginTop:"20px",marginBottom:"30px"}}>
                    Before we implement your project, we need to have a 
                    solid conversation about your brand & your weaknesses. 
                    Planning and Strategies are the inputs we give you 
                    first.We care about your branding, your corporate 
                    identity and your brand guideline.As our slogan, we 
                    intend to make your online channels looks better and as 
                    a result, you can obtain more conversion.
                </div>         
            </div>
                <a class="hire" style={{textDecoration:"none", cursor:"pointer"}} >REQUEST QUOTE</a>
        </div>
    <div className="txtgrid">
        <div className="contentCenter">
            <Image src={streg} width={85} height={85}  />
        </div>
            <div className="streg">Strategic Analyse & Input</div>
                <div className="align">
                    Before we execute our project, we thoroughly 
                    investigate your past performances. We 
                    understand in-deep and using some tools to 
                    evaluate your previous works
                </div>
    </div>
    <div className="txtgrid">
        <div className="contentCenter">
            <Image src={web_mobile} width={85} height={85}  />
        </div>
            <div className="streg">Web/Mobile App</div>
                <div className="align">
                    We use our latest technologies to develop 
                    websites for our clients. Like Serverless and other 
                    most popular tools in advanced economies world. 
                    Local integration plus local preferences. 
                </div>
    </div>  
    <br></br>      
    <div className="txtgrid">
        <div className="contentCenter">
            <Image src={digital} width={85} height={85}  />
        </div>
            <div className="streg">Digital Marketing</div>
                <div className="align">
                    Facebook Marketing is one of our key services 
                    that we have been working for 50 clients 
                    counting from local to international companies. 
                    We absolutely can do more than just Facebook 
                    Page services. 
                </div>
    </div>              
    <div className="txtgrid">
        <div className="contentCenter">
            <Image src={seo} width={85} height={85}  />
        </div>
            <div className="streg">SEO Optimization /SEM</div>
                <div className="align">
                    With our structure coding, we take these two 
                    stuffs into consideration for all clients. We use 
                    many other world-class tools to support our 
                    current clients' projects. Measurable ROI reflects 
                    our performances.          
                </div>
    </div>
    </div>  
</>     
);
  }
}

export default Grid_Info;
