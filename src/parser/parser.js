import { CORS_PROXY, REDDIT_FEED, CFB_FEED, SCG_FEED } from '../constants/constants';

const Parser = require('rss-parser');
let parser = new Parser();

const parseURL = async () => {
  const feedArray = [];
  const feed1 = await parser.parseURL(CORS_PROXY + CFB_FEED);
  const feed2 = await parser.parseURL(CORS_PROXY + REDDIT_FEED);
  const feed3 = await parser.parseURL(CORS_PROXY + SCG_FEED);

  feed1.bgColor = "#CA7E33";
  feed2.bgColor = "#c4dcf6";
  feed3.bgColor = "#114374";

  feedArray.push(feed1);
  feedArray.push(feed2);
  feedArray.push(feed3);

  return feedArray;
};

export default parseURL;
