import React from 'react';
import News from '../news/';
import Header from '../header/';
import Settings from '../settings/';
import About from '../about/';

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        showSettings: false,
        showAbout: false,
        showMenu: false,
        showHeader: true,
    };
    this.toggleSettings = this.toggleSettings.bind(this);
    this.toggleAbout = this.toggleAbout.bind(this);
    this.closeScreens = this.closeScreens.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleHeader = this.toggleHeader.bind(this);
  }

  toggleSettings() {
    this.toggleMenu();
    this.toggleHeader();
    this.setState({showSettings: !this.state.showSettings});
  }

  toggleAbout() {
    this.toggleMenu();
    this.toggleHeader();
    this.setState({showAbout: !this.state.showAbout});
  }

  closeScreens() {
    this.toggleHeader();
    this.setState({showSettings: false});
    this.setState({showAbout: false});
  }

  toggleMenu() {
    this.setState({showMenu: !this.state.showMenu});
  }

  toggleHeader() {
    this.setState({showHeader: !this.state.showHeader});
  }

  render() {
    return (
      <div>
        <Settings visible={this.state.showSettings} closeHandler={this.closeScreens} />
        <About visible={this.state.showAbout} closeHandler={this.closeScreens} />
        <Header
          settingsHandler={this.toggleSettings}
          aboutHandler={this.toggleAbout}
          menuHandler={this.toggleMenu}
          menuShown={this.state.showMenu}
          headerShown={this.state.showHeader}
        />
        <News />
      </div>
    );
  }
}

export default HomeComponent;
