export default eventAction => {
  window.ga('send', {
    hitType: 'event',
    eventCategory: 'Social Media',
    eventAction,
  });
};
