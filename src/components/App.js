import React, { Component } from 'react';
import {
    BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import IndexPage from './index';
import Mdvip from './mdvip';
import Patients from './patients';
import Sculpsure from './sculpsure';
import Faqs from './faqs';
import Emergencies from './emergencies';
import Physicians from './physicians';
import Appointments from './appointments';
import Insurances from './insurances';
import Experience from './expereince';
import About from './about';


const Header = () => ({

  render() {
    return (
      <div>
        <ul id="dropdown1" className="dropdown-content">
          <li><Link className="orange-text" to="/services">Services</Link></li>
          <li><Link className="orange-text" to="/insurance">Insurances</Link></li>
          <li><Link className="orange-text" to="/experience">Patient Experience</Link></li>
        </ul>
        <ul id="dropdown2" className="dropdown-content">
          <li><Link className="orange-text" to="/">Home</Link></li>
          <li><Link className="orange-text" to="/about">Who We Are</Link></li>
        </ul>
        <nav className="white" role="navigation">
          <div className="nav-wrapper container">
            <Link className="dropdown-button" data-activates="dropdown2" to="/" width="96px" id="logo-container" href="#"><img alt="" className="site-logo" height="50px" src="/images/logo.png" /></Link>
            <ul className="right hide-on-med-and-down">
              <li><a href="#!" data-activates="dropdown1" className="black-text dropdown-button">Patient Information</a></li>
              <li><Link className="black-text" to="/physicians/">Physicians</Link></li>
              <li><Link className="black-text" to="/appointments/">Contact Us</Link></li>
              <li><Link className="black-text" to="/emergencies/">Emergencies</Link></li>
              <li><Link to="/mdvip/" className="bigger orange-text text-darken-1" >MDVIP</Link></li>
              <li><Link to="/sculpsure/" className=" bigger orange-text text-darken-1">SculpSure</Link></li>
              <li><Link className="black-text" to="/faqs/">FAQ's</Link></li>
            </ul>

            <ul id="nav-mobile" className="side-nav">
              <li><Link className="black-text" to="/services">Services</Link></li>
              <li><Link className="black-text" to="/insurance">Insurances</Link></li>
              <li><Link className="black-text" to="/experience">Patient Experience</Link></li>
              <li><Link className="black-text" to="/physicians/">Physicians</Link></li>
              <li><Link className="black-text" to="/appointments/">Contact Us</Link></li>
              <li><Link className="black-text" to="/emergencies/">Emergencies</Link></li>
              <li><Link to="/mdvip/" className="bigger orange-text text-darken-1" >MDVIP</Link></li>
              <li><Link to="/sculpsure/" className=" bigger orange-text text-darken-1">SculpSure</Link></li>
              <li><Link className="black-text" to="/faqs/">FAQ's</Link></li>
            </ul>
            <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
          </div>
        </nav>
      </div>
    );
  },

  componentDidMount() {
    $('.dropdown-button').dropdown();
    $('.button-collapse').sideNav();
  },

});

class App extends Component {

  constructor(props) {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <Header />

          <div id="page-content" className="thebackground">
            <Switch>
              <Route exact name="index" path="/" component={IndexPage} />
              <Route path="/mdvip" component={Mdvip} />
              <Route path="/physicians" component={Physicians} />
              <Route path="/faqs" component={Faqs} />
              <Route path="/sculpsure" component={Sculpsure} />
              <Route path="/emergencies" component={Emergencies} />
              <Route path="/services" component={Patients} />
              <Route path="/appointments" component={Appointments} />
              <Route path="/insurance" component={Insurances} />
              <Route path="/experience" component={Experience} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
          <footer className="page-footer orange darken-1">
            <div className="container">
              <div className="row">
                <div className="col l6 s12">
                  <h5 className="white-text">Our Goal</h5>
                  <p className="grey-text text-lighten-4">Every person in our office, from the receptionists and secretaries to the nursing staff to the providers, operates as part of a team to provide you with the best patient experience and immediate access to medical care.</p>
                </div>
                <div className="col offest-l3 l3 s12">
                  <h5 className="white-text">Connect</h5>
                  <ul>
                    <li><a className="white-text" href="tel:717-843-8051">Call Us: 717-843-8051</a></li>
                    <li><a className="white-text" href="https://www.facebook.com/SculpsureIMC/">SculpSure Facebook</a></li>
                    <li><a className="white-text" href="https://www.facebook.com/ThomasKurlandDO/">MDVIP Facebook</a></li>
                    <li><a className="white-text" href="mailto:imc1777@comcast.net">Email Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <div className="container">
                      Created by                      <a className="brown-text small_text" href="http://pelkey.io"> Zachary Pelkey</a>
                      Copyright Internal Medicine Consultants
                    </div>
            </div>
          </footer>
        </div>
      </Router>
    );
  },


    shouldComponentUpdate(nextProps, nextState) {
        return !_.isEqual(nextState, this.state)
            || !_.isEqual(nextProps, this.props);
    }
}

export default App;
