import { CORS_PROXY, DEFAULT_BG_COLOR } from '../constants/constants';
import Service from '../services/DBService';

const Parser = require('rss-parser');
let parser = new Parser();

/**
 * Returns a promise that contains an array of objects, like so:
 * [
 *   {name: 'Example', url: 'http://www.example.com/rss/', bgColor: 'red'},
 *   {name: 'Another Example', url: 'http://www.example.com/rss/', bgColor: '#FF0000'},
 * ]
 */
export const getFeeds = new Promise((resolve, reject) => {
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
