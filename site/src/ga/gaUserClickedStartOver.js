export default eventAction => {
  window.ga('send', {
    hitType: 'event',
    eventCategory: 'Main App',
    eventAction: 'User clicked Start Over',
  });
};