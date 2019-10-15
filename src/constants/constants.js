// Note: some RSS feeds can't be loaded in the browser due to CORS security.
// To get around this, you can use a proxy.
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

const DEFAULT_BG_COLOR = "#c4dcf6";
const DEFAULT_BG_COLOR_2 = "#CA7E33";
const DEFAULT_BG_COLOR_3 = "#114374";

// IndexedDB database name and version
const DATABASE_NAME = 'PWA_RSS_FEED';
const DATABASE_VERSION = 1;
const DATABASE_OS = 'PWARSSFeeds';
const RSS_FIELD_NAME = 'feeds';

module.exports = {
  CORS_PROXY,
  DATABASE_NAME,
  DATABASE_VERSION,
  DATABASE_OS,
  RSS_FIELD_NAME,
  DEFAULT_BG_COLOR,
};
