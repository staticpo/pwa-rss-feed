import React from 'react';

class SettingsComponent extends React.Component {
  render() {
    const { feeds, visible } = this.props;
    let displayValue = visible ? 'block' : 'none';

    return (
      <div className="settings" style={{display:displayValue}}>
        <ul>
          {
            feeds.map(element => {
              return <li key={element.link}>{element.link}</li>;
            })
          }
        </ul>
        <button onClick={this.props.closeHandler}>CLOSE</button>
      </div>
    );
  }
}

export default SettingsComponent;
