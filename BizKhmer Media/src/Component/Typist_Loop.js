import React, { Component} from 'react';
import '../App.css';
import girl from '../Image/girl.png';
import Typist from 'react-typist'
import TypistLoop from 'react-typist-loop'
import fb from '../Image/Fb.png';
import linkedlin from '../Image/linkedlin.png';
import instagram from '../Image/instagram.png';
import twitter from '../Image/twitter.png';
import Image from 'react-image-resizer';

class Typist_Loop extends Component {
    render() {
      return (
<>
    <ul style={{position:"absolute",top:"120px"}}>
        <a href="https://www.facebook.com/bizkhmermedia/" target="_blank"><Image src={fb} width={30} height={30} alt="logo"/></a>
        <a href="https://www.linkedin.com/" target="_blank"><Image src={linkedlin} width={30} height={30} alt="logo"/></a>
        <a href="https://www.instagram.com/" target="_blank"><Image src={instagram} width={30} height={30} alt="logo"/></a>
        <a href="https://twitter.com/" target="_blank"><Image src={twitter} width={30} height={30} alt="logo"/></a>
    </ul>
        <div id="HOME">
            <img src={girl} alt="Error" className="girl" />
        <div className="big">
    <TypistLoop interval={3000}>
{[
    'Better Digital Marketing.',
    'Refreshing Results.',
].map(text => <Typist key={text} startDelay={1000}>{text}</Typist>)}
    </TypistLoop>
        </div>
        </div>
            <div className="text">
                Our Philosophy: We provide digital solutions to our clients at reasonable 
                <br></br>price but good quality. We are committed to bringing creative and
                <br></br> attractive marketing & branding solutions to our MSMEs communities &
                <br></br> large corporation in the Kingdom of Cambodia.  Our Vision: Turn into an
                <br></br> industry leader in advertising (both offline & online), search marketing and
                <br></br> lead generation. Our Mission: Bring you a better digital marketing. Let you
                <br></br> refresh your results.
            </div>
</>
);
  }
}
export default Typist_Loop;