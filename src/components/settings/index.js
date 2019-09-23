import React from 'react';

class SettingsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { visible } = this.props;
    let displayValue = visible ? 'block' : 'none';

    return (
      <div className="settings" style={{display:displayValue}}>
        <p>ASDQWE</p>
        <button onClick={this.props.closeHandler}>CLOSE</button>
      </div>
    );
  }
}

export default SettingsComponent;
