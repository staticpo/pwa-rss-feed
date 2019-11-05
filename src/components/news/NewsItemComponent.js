import React from 'react';

const NewsItemComponent = (props) => {
  const {type, title, url, desc, bgColor, imgUrl} = props;

  if(type === 'separator') {
    return separator(title, url, desc, bgColor, imgUrl);
  } else {
    return item(title, url, desc, bgColor, imgUrl);
  }
};

const item = (title, url, desc, bgColor, imgUrl) => {
  return (
    <a className="news_item_component" target="_blank" href={url}>
      <div className="news_item_container" style={{ backgroundColor: bgColor, backgroundImage: `url(${imgUrl})`}}>
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

const separator = (title, url, desc, bgColor, imgUrl) => {
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
