import { CORS_PROXY, DEFAULT_BG_COLOR } from '../constants/constants';
import Service from '../services/DBService';
import { getErrorNewsObject, getSeparatorNewsObject } from '../utils';

const Parser = require('rss-parser');
let parser = new Parser({
  customFields: {
    item: [
      ['media:content', 'media:content', {keepArray: true}],
      ['image', 'imgUrl', {keepArray: false}],
    ]
  }
});

/**
 * Returns a promise that contains an array of objects, like so:
 * [
 *   {name: 'Example', url: 'http://www.example.com/rss/', bgColor: 'red'},
 *   {name: 'Another Example', url: 'http://www.example.com/rss/', bgColor: '#FF0000'},
 * ]
 */
export const getFeedsData = new Promise((resolve, reject) => {
  Service.getFeeds().then((result) => {
    let feedArray = [];
    if(result) {
      let promises = [];

      result.forEach((feed) => {
        promises.push(parser.parseURL(CORS_PROXY + feed.url).then((parsedFeed)=> {
          parsedFeed.bgColor = feed.bgColor || DEFAULT_BG_COLOR;
          return parsedFeed;
        }));
      });

      Promise.all(promises).then((values) => {
        feedArray = [...values];
        resolve(feedArray);
      });

    } else {
      resolve(feedArray);
    }
  }).catch(() => {
    // failed to get the feeds
    reject('Error getting the feeds from the IDB Service');
  });
});

/**
 * Parse a feed object to store in the news state
 * @param {Array[Object]} feeds
 */
export const getParsedDataForNews = (feeds) => {
  const items = [];

  if(feeds && feeds.length) {
    feeds.forEach((e) => {
      const logoUrl = e.image ? e.image.url : null;
      const separator = getSeparatorNewsObject(e.title, logoUrl);
      e.items.map(obj => {
        // add the website's bgcolor for each item
        obj.bgColor = e.bgColor;
        // obj.imgUrl = obj.image || null;
        obj.type = 'item';
      });

      items.push(separator, ...e.items);
    });
  } else {
    items.push(getErrorNewsObject());
  }

  return items;
}

/**
 * Deletes unused attributes from the feed array of objects
 * @param {Array[Object]} feeds
 */
export const pruneFeeds = (feeds) => {
  return feeds.map(feed => {
    delete feed.items;
    return feed;
  })
}
