import React, { Component } from 'react';
import Toolbar from './components/Toolbar';
import SideDrawer from './components/SideDrawer';
import Backdrop from './components/Backdrop';
import Content from './components/Content';
import Footer from './components/Footer';

class App extends Component {
  state = {
    SideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
      this.setState(
        (prevState) => {
          return {SideDrawerOpen: !prevState.SideDrawerOpen};
        }
      );
  };

  backdropClickHandler = () => {
    this.setState({SideDrawerOpen: false});
  }

  render() {

    let sideDrawer;
    let backdrop;

    if(this.state.SideDrawerOpen){
      sideDrawer = <SideDrawer />
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
      <div className="App">
        <Toolbar drawerClickHandler = {this.drawerToggleClickHandler}/>
        {sideDrawer}
        {backdrop}
        {/* <main className="main">
          <p>This is the page content</p>
        </main> */}
        <div className="wrapper">
          <Content />
          <div className="spacer"/>
          <Footer />
        </div>


      </div>
    );
  }
}

export default App;
