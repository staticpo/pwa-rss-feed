import React from 'react';

const NewsItemComponent = (props) => {
  const {type, title, url, desc, bgColor} = props;

  if(type === 'separator') {
    return separator(title, url, desc, bgColor);
  } else {
    return item(title, url, desc, bgColor);
  }
};

const item = (title, url, desc, bgColor) => {
  return (
    <a className="news_item_component" target="_blank" href={url}>
      <div className="news_item_container" style={{ backgroundColor: bgColor}}>
        { title &&
          <h1>{title.toString()}</h1>
        }

        { desc &&
          <div className="news_item_content">{desc.toString()}</div>
        }
      </div>
    </a>
  );
};

const separator = (title, url, bgColor, imgUrl) => {
  return (
    <a className="news_separator_component" target="_blank" href={url}>
      <div className="news_separator_container" style={{ backgroundColor: bgColor}}>
        <div className="news_separator_image">
          <img src={imgUrl} />
        </div>
        <div className="news_separator_title">
          <h1>{title.toString()}</h1>
        </div>
      </div>
    </a>
  );
};

export default NewsItemComponent;
