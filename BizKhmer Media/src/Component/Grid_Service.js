import React, { Component} from 'react';
import '../App.css';
import Image from 'react-image-resizer';
import phone from '../Image/phone.png'
import socialmedia from '../Image/socialmedia.png'
import shake from '../Image/shake.png'
import brand from '../Image/brand.png'
import photo from '../Image/photo.png'
import seoptimaze from '../Image/seoptimaze.png'

class Grid_Service extends Component {
  render() {
    return (
<>

 <div className="social" id="SERVICES">
    Ultimate Services For Your<p> Business</p>
</div>
    <div className="kromsocial">
      We deliver multiple approaches to grow your business that integrates Marketing +<p> Branding strategy with reliable tools to drive a measurable ROI</p>        
    </div>
        <div className="grid">
          <div className="txtgrid">
            <div className="contentCenter3">
              <Image src={phone} width={50} height={50}  />
            </div>          
              <div className="streg">Web/App Design</div>
                <div className="align3">
                  Build your brand with a solid foundation & word-class tech.           
                </div>
          </div> 
        <div className="txtgrid">
          <div className="contentCenter3">
            <Image src={socialmedia} width={50} height={50}  />
          </div>          
            <div className="streg">Social Media Marketing</div>
              <div className="align3">
                Give you the fastest ways to propel your business to the top
              </div>
        </div>
        <div className="txtgrid">
          <div className="contentCenter3">
            <Image src={shake} width={60} height={60}  />
          </div>          
            <div className="streg">Media Services</div>
              <div className="align3">
                Brand awareness by integrating with multiple media channels
              </div> 
        </div>        
        <div className="txtgrid">
          <div className="contentCenter3">
            <Image src={brand} width={60} height={60}  />
          </div>          
            <div className="streg">Branding</div>
              <div className="align3">
                Help develop a clear brand guideline & corporate identity (CI).
              </div>
        </div>              
        <div className="txtgrid">
          <div className="contentCenter3">
            <Image src={photo} width={60} height={60}  />
          </div>
            <div className="streg">Photo & Video </div>
              <div className="align3">
                Online presence is now interpreted by photo & video.    
              </div>
        </div>
        <div className="txtgrid">
          <div className="contentCenter3">
            <Image src={seoptimaze} width={50} height={50}  />
          </div>
            <div className="streg">SEO Optimization </div>
              <div className="align3">
                Right SEO, you absolute propel your business name to the top of search.          
              </div>
        </div>
      </div>  
</>
);
  }
}
export default Grid_Service;