import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import '../App.css';
import Image from 'react-image-resizer';
import maxi from '../Image/maxicare.jpg';
import audi from '../Image/audi.png';
import derma from '../Image/dermaatome.jpg';
import segate from '../Image/seagate.png';
import villa from '../Image/villa.jpg';
import ams from '../Image/ams.jpg';
import vashochin from '../Image/vashochin.jpg';
import boutiq from '../Image/boutiq.jpg';
import cofee from '../Image/cofee.jpg';
import csl from '../Image/csl.jpg';
import beauty from '../Image/beauty.jpg';
import makkah from '../Image/makkah.jpg';
import anachak from '../Image/anachak.jpg';
import pingu from '../Image/pingu.jpg';
import belliz from '../Image/belliz.jpg';
import ltj from '../Image/ltj.jpg';
import iis from '../Image/iis.jpg';
import haier from '../Image/haier.jpg';
import cosmo from '../Image/cosmo.jpg';
import nie from '../Image/nie.jpg';

const list = [
  { name: <Image src={maxi} width={80} height={80} /> },
  { name: <Image src={audi} width={80} height={80} /> },
  { name: <Image src={derma} width={80} height={80} /> },
  { name: <Image src={segate} width={80} height={80} /> },
  { name: <Image src={villa} width={80} height={80} /> },
  { name: <Image src={ams} width={80} height={80} /> },
  { name: <Image src={vashochin} width={80} height={80} /> },
  { name: <Image src={boutiq} width={80} height={80} /> },
  { name: <Image src={cofee} width={80} height={80} /> },
  { name: <Image src={csl} width={80} height={80} /> },
  { name: <Image src={beauty} width={80} height={80} /> },
  { name: <Image src={makkah} width={80} height={80} /> },
  { name: <Image src={anachak} width={80} height={80} /> },
  { name: <Image src={pingu} width={80} height={80} /> },
  { name: <Image src={belliz} width={80} height={80} /> },
  { name: <Image src={ltj} width={80} height={80} /> },
  { name: <Image src={iis} width={80} height={80} /> },
  { name: <Image src={haier} width={80} height={80} /> },
  { name: <Image src={cosmo} width={80} height={80} /> },
  { name: <Image src={nie} width={80} height={80} /> },
];

const MenuItem = ({text, selected}) => {
  return <div
    className={`menu-item ${selected ? 'active' : ''}`}>{text}
    </div>;
};

export const Menu = (list, selected) =>
  list.map(el => {
    const {name} = el;
    return <MenuItem text={name} key={name} selected={selected} />;
  });

const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
const selected = 'item1';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.menuItems = Menu(list, selected);
  }
  state = {
    selected
  };
  onSelect = key => {
    this.setState({ selected: key });
  }
  render() {
    const { selected } = this.state;
    const menu = this.menuItems;
    return (
      <div className="App">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}
export default Slider;