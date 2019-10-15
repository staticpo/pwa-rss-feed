import React from 'react';
import { getFeeds } from '../../parser/parser';
import { getErrorNewsObject, getSeparatorNewsObject } from '../../utils';
import NewsItemComponent from './NewsItemComponent'

class NewsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        };
    }

    componentDidMount() {
      getFeeds
        .then((feeds) => {
          const newitems = [];

          if(feeds && feeds.length) {
            feeds.forEach((e) => {
              console.log(e);
              const separator = getSeparatorNewsObject(e.title);
              e.items.map(obj => {
                // add the website's bgcolor for each item
                obj.bgColor = e.bgColor;
                obj.type = 'item';
              });

              newitems.push(separator, ...e.items);
            });
          } else {
            newitems.push(getErrorNewsObject());
          }

          this.setState((state) => {
              return ({
                  news: [ ...state.news, ...newitems ],
              });
          })
        })
        .catch((err) => {
          console.log(err);
        });
    }

    render() {
      return (
          <div className="newsSection">
              {this.state.news.map(item => (
                  <NewsItemComponent key={item.title} type={item.type} title={item.title} desc={item.contentSnippet} imgUrl={item.imgUrl} url={item.link} bgColor={item.bgColor} />
              ))}
          </div>
      );
    }

}

export default NewsComponent;
