import React from 'react';

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        open: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <header>
        <div className="headerBar">
          PWA RSS FEED
          <div className={`hamburguer ${this.state.open && 'hamburguerClose'}`} onClick={this.handleClick}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
        <div className={`menu ${!this.state.open && 'menuHidden'}`}>
          SOMETHING
          <br />
          SOMETHING
        </div>
      </header>
    );
  }
}

export default HeaderComponent;
