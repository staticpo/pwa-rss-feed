import { CORS_PROXY, REDDIT_FEED, CFB_FEED } from '../constants/constants';

const Parser = require('rss-parser');
let parser = new Parser();

const parseURL = async () => {
    console.log('HI');
    let feed = await parser.parseURL(CORS_PROXY + REDDIT_FEED);
    console.log(feed.title);

    feed.items.forEach(item => {
        console.log(item.title + ':' + item.link)
    });

};

export default parseURL;