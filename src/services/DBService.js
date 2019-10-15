import { openDB, deleteDB, wrap, unwrap } from 'idb';
import { DATABASE_NAME, DATABASE_VERSION, DATABASE_OS, RSS_FIELD_NAME } from '../constants/constants';

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(db) {
    db.createObjectStore(DATABASE_OS);
  },
});

const idbKeyval = {
  async get(key) {
    return (await dbPromise).get(DATABASE_OS, key);
  },
  async set(key, val) {
    return (await dbPromise).put(DATABASE_OS, val, key);
  },
  async delete(key) {
    return (await dbPromise).delete(DATABASE_OS, key);
  },
  async clear() {
    return (await dbPromise).clear(DATABASE_OS);
  },
  async keys() {
    return (await dbPromise).getAllKeys(DATABASE_OS);
  },

  /**
   * Returns an array of objects, like so:
   * [
   *   {name: 'Example', url: 'http://www.example.com/rss/', bgColor: 'red'},
   *   {name: 'Another Example', url: 'http://www.example.com/rss/', bgColor: '#FF0000'},
   * ]
   */
  async getFeeds1() {
    return (await dbPromise).get(DATABASE_OS, RSS_FIELD_NAME);
  },
  async getFeeds() {
    return [
      {name: 'CFB', url: 'http://www.channelfireball.com/feed/', bgColor: '#32a852'},
      {name: 'SCG', url: 'http://www.starcitygames.com/rss/'},
      {name: 'Reddit', url: 'https://www.reddit.com/.rss'},
    ];
  },
  async setFeeds(val) {
    return (await dbPromise).put(DATABASE_OS, val, RSS_FIELD_NAME);
  },
};

export default idbKeyval;
