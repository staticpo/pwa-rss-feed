import React from 'react';
import parser from '../../parser/parser';
import NewsItemComponent from './NewsItemComponent'

class NewsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        };
    }

    componentDidMount() {
      parser().then((feeds) => {
        const newitems = [];

        feeds.forEach((e) => {
          newitems.push(...e.items);
        });

        this.setState((state) => {
            return ({
                news: [ ...state.news, ...newitems ],
            });
        })
      });
    }

    render() {
      return (
          <div className="newsSection">
              {this.state.news.map(item => (
                  <NewsItemComponent key={item.title} title={item.title} desc={item.contentSnippet} url={item.link} />
              ))}
          </div>
      );
    }

}

export default NewsComponent;
