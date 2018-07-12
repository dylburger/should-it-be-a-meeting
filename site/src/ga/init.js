/* globals ga */
(function(i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] =
    i[r] ||
    function() {
      (i[r].q = i[r].q || []).push(arguments);
    };
  i[r].l = 1 * new Date();
  a = s.createElement(o);
  m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m);
})(
  window,
  document,
  'script',
  'https://www.google-analytics.com/analytics.js',
  'ga',
);

ga('create', 'UA-105991954-3', 'auto');

ga('send', {
  hitType: 'pageview',
  // As a single page app, URLs are tied to hashtags.
  page: window.location.hash,
});

ga('send', {
  hitType: 'event',
  eventCategory: 'Main App',
  eventAction: 'Initial Page Load',
});

ga('set', 'anonymizeIp', true);
