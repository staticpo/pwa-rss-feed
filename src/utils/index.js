export const getErrorNewsObject = (title, message) => {
  return {
    title: title || 'We failed to get any news from your sites/feeds',
    contentSnippet: message || 'Please double check your settings.',
    bgColor: '#FFBABA',
  };
};

export const getSeparatorNewsObject = (title, imgUrl) => {
  return {
    type: 'separator',
    title,
    imgUrl: imgUrl || '',
  };
};

export const getErrorFeedItem = (title, message, details) => {
  return {
    bgColor: "#FFBABA",
    content: 'There was an error getting news from this feed.',
    contentSnippet: '',
    id: "error",
    link: "#",
    title: title ? title : 'Error getting info from this feed',
    type: "item",
    items: [getErrorNewsObject(message, details)],
  };
};
