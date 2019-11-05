import React from 'react';
import NewsItemComponent from './NewsItemComponent'

class NewsComponent extends React.Component {
    render() {
      const { news } = this.props;
      return (
          <div className="newsSection">
              {news.map(item => (
                  <NewsItemComponent key={item.title} type={item.type} title={item.title} desc={item.contentSnippet} imgUrl={item.imgUrl} url={item.link} bgColor={item.bgColor} />
              ))}
          </div>
      );
    }

}

export default NewsComponent;
