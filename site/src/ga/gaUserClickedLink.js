export default eventAction => {
  window.ga('send', {
    hitType: 'event',
    eventCategory: 'External link',
    eventAction,
  });
};
