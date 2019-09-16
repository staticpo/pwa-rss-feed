import React from 'react';

const styles = {
  div: {
    padding: '5px',
    borderBottom: '1px dashed #ccc'
  },
  h1: {
    fontSize: '14px'
  },
  content: {
    fontSize: '12px'
  }
};

const NewsItemComponent = (props) => {
  const {title, url, desc} = props;

  return (
    <div style={styles.div}>
      <h1 style={styles.h1}><a target="_blank" href={url}>{title.toString()}</a></h1>
      <div style={styles.content}>{desc.toString()}</div>
    </div>
  );
}

export default NewsItemComponent;
