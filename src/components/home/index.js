import React from 'react';
import getConfig from '../../config/'
import News from '../news/';
import Header from '../header/';
import Settings from '../settings/';
import About from '../about/';
import { getFeedsData, getParsedDataForNews, pruneFeeds } from '../../parser/parser';

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        showSettings: false,
        showAbout: false,
        showMenu: false,
        showHeader: true,
        news: [],
        feeds: [],
    };
    this.toggleSettings = this.toggleSettings.bind(this);
    this.toggleAbout = this.toggleAbout.bind(this);
    this.closeScreens = this.closeScreens.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleHeader = this.toggleHeader.bind(this);
  }

  componentDidMount() {
    getConfig();

    getFeedsData
        .then((feeds) => {
          this.setState((state) => {
              return ({
                  news: [ ...state.news, ...getParsedDataForNews(feeds) ],
                  feeds: [ ...pruneFeeds(feeds) ],
              });
          })
        })
        .catch((err) => {
          console.log(err);
        });
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
        <Settings feeds={this.state.feeds} visible={this.state.showSettings} closeHandler={this.closeScreens} />
        <About visible={this.state.showAbout} closeHandler={this.closeScreens} />
        <Header
          settingsHandler={this.toggleSettings}
          aboutHandler={this.toggleAbout}
          menuHandler={this.toggleMenu}
          menuShown={this.state.showMenu}
          headerShown={this.state.showHeader}
        />
        <News news={this.state.news} />
      </div>
    );
  }
}

export default HomeComponent;
