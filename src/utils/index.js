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
