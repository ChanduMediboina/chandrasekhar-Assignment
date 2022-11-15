// In this Component we developed the Header component

import {Component} from 'react'

import {Link} from 'react-router-dom'

import Popup from 'reactjs-popup'

import ReactPlayer from 'react-player'

import {TiSocialLinkedinCircular} from 'react-icons/ti'

import {AiFillTwitterCircle, AiOutlineGithub} from 'react-icons/ai'

import {ImFacebook2} from 'react-icons/im'

import {FcGoogle} from 'react-icons/fc'

import {CgMenuGridR} from 'react-icons/cg'

import {BiVideo} from 'react-icons/bi'

import {BsPlus} from 'react-icons/bs'

import {GiHamburgerMenu} from 'react-icons/gi'

import './index.css'

class Header extends Component {
  state = {tab1: false, tab2: true, tab3: false}
  // By using this functionality we display the tab different than other tabs

  onClickTab1 = () => {
    this.setState({tab1: true, tab3: false, tab2: false})
  }

  onClickTab2 = () => {
    this.setState({tab2: true, tab1: false, tab3: false})
  }

  onClickTab3 = () => {
    this.setState({tab3: true, tab1: false, tab2: false})
  }

  /* In this website top left we have learn more button
 by clicking on that button we get instructions video POPUP and that popup 
 was developed in this function */
  getDemoVideo = () => (
    <Popup
      modal
      trigger={
        <button type="button" className="learn-heading">
          Learn more
        </button>
      }
    >
      <ReactPlayer controls url="https://www.youtube.com/watch?v=gmo_HA8nnlQ" />
    </Popup>
  )
  /* By using this function we get POPUP regarding company sites
 and social media pages */

  onClickToShowSidebar = () => (
    <Popup
      trigger={
        <button className="hamburger-btn" type="button">
          <GiHamburgerMenu className="hamburger-icon" />
        </button>
      }
      position="bottom right"
    >
      <div className="side-nav-bar">
        <img
          className="company-logo"
          alt="company logo"
          src="https://bookface-images.s3.amazonaws.com/logos/11d69dc30f768592b1462178d0f7fcc9ad0f3859.png"
        />
        <div className="linked-in-container">
          <a href="https://www.linkedin.com/company/volopay/">
            <TiSocialLinkedinCircular className="linked-in-icon" />
          </a>
          <a href="https://twitter.com/i/flow/login">
            <AiFillTwitterCircle className="twitter-icon" />
          </a>
          <a href="https://www.volopay.com/in/">
            <FcGoogle className="glass-door-icon" />
          </a>
          <a href="https://www.facebook.com/volopay">
            <ImFacebook2 className="facebook-icon" />
          </a>
          <AiOutlineGithub className="github-icon" />
        </div>
      </div>
    </Popup>
  )

  render() {
    const {tab1, tab2, tab3} = this.state
    return (
      <div className="virtual-card-tabs-container">
        <div className="header-container">
          <div className="virtual-card-container">
            <h1 className="virtual-heading">Virtual cards</h1>
            <BiVideo className="video-icon" />
            {this.getDemoVideo()}
          </div>
          <div className="create-card-container">
            <BsPlus />
            <p className="create-virtual-heading">Virtual card</p>
          </div>
        </div>
        <div className="tabs-icons-container">
          <div className="tabs-container">
            <Link className={`link ${tab1 && 'active-btn'}`} to="/your">
              <p onClick={this.onClickTab1} className="tab-para">
                Your
              </p>
            </Link>
            <Link className={`link ${tab2 && 'active-btn'}`} to="/">
              <p onClick={this.onClickTab2} className="tab-para">
                All
              </p>
            </Link>
            <Link
              onClick={this.onClickTab3}
              className={`link ${tab3 && 'active-btn'}`}
              to="/blocked"
            >
              <p className="tab-para">Blocked</p>
            </Link>
          </div>
          <div className="icons-container">
            <CgMenuGridR className="icons" />
            {this.onClickToShowSidebar()}
          </div>
        </div>
      </div>
    )
  }
}
export default Header
