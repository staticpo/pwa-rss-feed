import React from 'react';
import News from '../news/';
import Header from '../header/';
import Settings from '../settings/';

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        showSettings: false,
        showMenu: false,
        showHeader: true,
    };
    this.toggleSettings = this.toggleSettings.bind(this);
    this.closeSettings = this.closeSettings.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleHeader = this.toggleHeader.bind(this);
  }

  toggleSettings() {
    this.toggleMenu();
    this.toggleHeader();
    this.setState({showSettings: !this.state.showSettings});
  }

  closeSettings() {
    this.toggleHeader();
    this.setState({showSettings: !this.state.showSettings});
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
        <Settings visible={this.state.showSettings} settingsHandler={this.closeSettings} />
        <Header
          settingsHandler={this.toggleSettings}
          settingsShown={this.state.showSettings}
          menuHandler={this.toggleMenu}
          menuShown={this.state.showMenu}
          headerHandler={this.toggleHeader}
          headerShown={this.state.showHeader}
        />
        <News />
      </div>
    );
  }
}

export default HomeComponent;
