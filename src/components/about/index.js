import React from 'react';

class AboutComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { visible } = this.props;
    let displayValue = visible ? 'block' : 'none';

    return (
      <div className="about" style={{display:displayValue}}>
        <p>PWA RSS Feed, a lightweight RSS reader that you can install in you phone as a progessive web app</p>
        <p>This work is licensed under a <a rel="license" target="_blank" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.</p>
        <p>You can <a href="https://github.com/staticpo/pwa-rss-feed" target="_blank">find the source code here</a>.</p>
        <button onClick={this.props.closeHandler}>CLOSE</button>
      </div>
    );
  }
}

export default AboutComponent;
