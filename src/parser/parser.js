import { CORS_PROXY, REDDIT_FEED, CFB_FEED } from '../constants/constants';

const Parser = require('rss-parser');
let parser = new Parser();

const parseURL = async () => {
  const feedArray = [];
  feedArray.push(await parser.parseURL(CORS_PROXY + CFB_FEED));
  feedArray.push(await parser.parseURL(CORS_PROXY + REDDIT_FEED));

  console.log(feedArray[0]);

  return feedArray;
};

export default parseURL;
