import React from 'react';
import Service from '../../services/DBService';

class SettingsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      feeds: Service.getFeeds(),
    }
  }

  render() {
    const { visible } = this.props;
    let displayValue = visible ? 'block' : 'none';

    Service.getFeeds().then((result) => {
      //console.log(result);
    }).catch(() => {
      // failed to get the keys
    });

    /*
      {this.state.feeds.map(element => (
        <li>
          {element.value}
        </li>
      ))}
    */

    return (
      <div className="settings" style={{display:displayValue}}>
        <ul>
          ----
        </ul>
        <button onClick={this.props.closeHandler}>CLOSE</button>
      </div>
    );
  }
}

export default SettingsComponent;
