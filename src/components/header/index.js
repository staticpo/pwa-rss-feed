import React from 'react';

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      settingsHandler,
      aboutHandler,
      menuHandler,
      menuShown,
      headerShown
    } = this.props;

    let showHeader = headerShown ? 'block' : 'none';

    return (
      <header style={{display: showHeader}}>
        <div className="headerBar">
          <div className="headerLogo">PWA RSS FEED</div>
          <div className={`hamburguer ${menuShown && 'hamburguerClose'}`} onClick={menuHandler}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
        <div className={`menu ${!menuShown && 'menuHidden'}`}>
          <button onClick={settingsHandler}>
            Settings
          </button>
          <br />
          <button onClick={aboutHandler}>About</button>
        </div>
      </header>
    );
  }
}

export default HeaderComponent;
