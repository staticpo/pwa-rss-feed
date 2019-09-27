import React from 'react';

const NewsItemComponent = (props) => {
  const {title, url, desc, bgColor} = props;

  return (
    <a className="news_item_component" target="_blank" href={url}>
      <div className="news_item_container" style={{ backgroundColor: bgColor}}>
        <h1>{title.toString()}</h1>
        <div className="news_item_content">{desc.toString()}</div>
      </div>
    </a>
  );
}

export default NewsItemComponent;
