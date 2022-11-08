import React from 'react';
import ServiceWorker from './ServiceWorker';
import 'particles.js';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sIsOpen: false };

    this.particlesBackground = React.createRef();
    this.initParticles = this.initParticles.bind(this);
    this.onSClick = this.onSClick.bind(this);
  }

  initParticles () {
    const pJS = window.particlesJS;
    if (pJS && pJS.load) {
      pJS.load('particles-js', 'particles.json');
    }
  }

  onSClick (evnt) {
    console.info('onSClick.CLICK!', { ths: this, evnt });
    this.setState({ sIsOpen: true });
  }

  componentDidMount() {
    const bgElement = this.particlesBackground.current;
    console.log('App.componentDidMount', { bgElement }); 
    this.initParticles(bgElement);
  }

  render () {
    const { isSOpen } = this.state;
    return (
      <div className="App">
        <header className="App-header" ref={this.particlesBackground} id="App-header-wrapper">
          <div className="txt-big magic-words op07 mt25">-_Mono-Repo-Nest-React-Web-App_-</div>
          <h1 className="txt-big title-label magic-words">-|=|ReA\NecT|=|-</h1>
          <div className="op05 txt-ltl mv20 mt10">IS ALREADY HEARE!</div>
          
          <div className="logos-holder mb20">
            <div className="React-logo">
              <img src={logo} className="App-logo App-logo-2" alt="logo-react" />
            </div>
            <div className="Nest-logo">
              <img src={logo} className="App-logo App-logo-2" alt="logo-nest" />
            </div>
          </div>
  
          <div className="App-link">
            <h2 className="mv20">.WEB-DEV-SNJ-SPA.</h2>
            <h4 className="op07 mv20">..frm DB to API by WEB to JS by UI to you'r EYE-& you..</h4>
            <small className="op05 magic-words txt-ltl mv20 lts12">...if you still understand, oh yeah...</small>
          </div>
        </header>
        
        <div id="particles-js"></div>

        { isSOpen 
            ? <ServiceWorker /> 
            : <div className="txt-ltl op05 hidden-trigger" onClick={(e) => { this.onSClick(e); }}>S</div>
        }

      </div>
    );
  }
}

export default App;
