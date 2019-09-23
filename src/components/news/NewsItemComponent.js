import React from 'react';

const styles = {
  div: {
    padding: '20px 10px 20px 10px',
    borderBottom: '1px solid #ddd'
  },
  h1: {
    fontSize: '17px',
    fontFamily: 'Georgia, serif',
    color: '#1A1A1A'
  },
  h1Link: {
    color: '#1A1A1A'
  },
  content: {
    fontSize: '12px'
  }
};

const NewsItemComponent = (props) => {
  const {title, url, desc} = props;

  return (
    <div style={styles.div}>
      <h1 style={styles.h1}><a style={styles.h1Link} target="_blank" href={url}>{title.toString()}</a></h1>
      <div style={styles.content}>{desc.toString()}</div>
    </div>
  );
}

export default NewsItemComponent;
