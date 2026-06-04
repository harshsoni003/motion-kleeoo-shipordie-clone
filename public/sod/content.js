/* ============================================================
   SHIP OR DIE — generated content: tweet wall + deck crew
   (placeholder / generic testimonials — no real people)
   ============================================================ */
(function () {
  'use strict';

  /* ---------- tweet wall ---------- */
  var tweets = [
    { n: 'deckhand_dev',   h: '@deckhand_dev',   t: 'Day 12 and my landing page is <b>LIVE</b>. First $9 sale came in while I was asleep. We ship or die ⚓', l: 41, c: 7, v: true },
    { n: 'salty sam',      h: '@saltysam',       t: 'Signed the oath this morning. 30 days to ship or I\'m overboard. Terrifying. Exactly what I needed.', l: 28, c: 4, v: false },
    { n: 'mira builds',    h: '@mirabuilds',     t: 'Shipped my tiny tool in 19 days. <b>0 → 40 users</b>. The deadline did what 6 months of "someday" couldn\'t.', l: 63, c: 11, v: true },
    { n: 'cap\'n kmore',   h: '@capnkore',       t: 'The daily check-ins are unreal. Can\'t hide from the crew. Built more this week than all last quarter.', l: 35, c: 6, v: false },
    { n: 'jet',            h: '@jetships',       t: 'Quit polishing in private. Put a buy button on one feature. Got my first paying customer. 🏴‍☠️', l: 52, c: 9, v: true },
    { n: 'tide',           h: '@tidemakes',      t: 'Voice-channel cowork at 6am with pirates from 4 timezones. This is the accountability I was missing.', l: 22, c: 3, v: false },
    { n: 'wreck',          h: '@wreckitral',     t: 'Marked overboard once. Came back. Shipped. The public shame genuinely works lol.', l: 47, c: 8, v: false },
    { n: 'nova',           h: '@novayards',      t: 'From "two weeks away for four months" to <b>launched in 23 days</b>. Aye.', l: 71, c: 14, v: true },
    { n: 'finn',           h: '@finnforge',      t: 'My app isn\'t pretty but it\'s REAL and people are using it. That\'s the whole game.', l: 38, c: 5, v: false }
  ];

  var palettes = [
    ['#a8463f', '#caa07a', '#2d4a52'],
    ['#3a2516', '#caa07a', '#88a7a3'],
    ['#d4a556', '#e3b98a', '#2d4a52'],
    ['#2d4a52', '#caa07a', '#a8463f'],
    ['#7a292b', '#d8b58c', '#3a4a52'],
    ['#1c3a44', '#caa07a', '#d4a556']
  ];

  function avatar(seed) {
    var p = palettes[seed % palettes.length];
    var hat = seed % 2 === 0
      ? '<rect x="30" y="16" width="40" height="14" fill="' + p[0] + '"/><rect x="26" y="20" width="6" height="8" fill="' + p[0] + '"/>'
      : '<rect x="28" y="12" width="44" height="20" fill="' + p[0] + '"/>';
    var patch = seed % 3 === 0 ? '<rect x="38" y="44" width="10" height="8" fill="#1c120a"/><rect x="34" y="46" width="22" height="2" fill="#1c120a"/>' : '<rect x="40" y="44" width="8" height="8" fill="#1c120a"/>';
    return '<svg viewBox="0 0 100 100" shape-rendering="crispEdges">' +
      '<rect width="100" height="100" fill="#0d2030"/>' + hat +
      '<rect x="30" y="30" width="40" height="36" fill="' + p[1] + '"/>' + patch +
      '<rect x="56" y="44" width="8" height="8" fill="#1c120a"/>' +
      '<rect x="40" y="60" width="22" height="4" fill="#7a4a2a"/>' +
      '<rect x="24" y="66" width="52" height="34" fill="' + p[2] + '"/>' +
      '</svg>';
  }

  var verified = '<svg class="v" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81C14.67.83 13.43 0 12 0S9.33.83 8.67 2.14c-1.4-.46-2.91-.2-3.92.81S3.49 5.47 3.95 6.86C2.64 7.53 1.75 8.57 1.75 12s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81C9.33 23.17 10.57 24 12 24s2.68-.83 3.34-2.14c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.71 2.19-5.14zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"/></svg>';

  var wall = document.getElementById('tweetWall');
  if (wall) {
    tweets.forEach(function (tw, i) {
      var li = document.createElement('li');
      li.innerHTML =
        '<div class="tweet-card">' +
          '<div class="tweet-head">' +
            '<div class="tweet-avatar">' + avatar(i) + '</div>' +
            '<div>' +
              '<div class="tweet-name">' + tw.n + (tw.v ? verified : '') + '</div>' +
              '<div class="tweet-handle">' + tw.h + '</div>' +
            '</div>' +
          '</div>' +
          '<p class="tweet-body">' + tw.t + '</p>' +
          '<div class="tweet-foot">' +
            '<span class="heart">♥ ' + tw.l + '</span>' +
            '<span>↺ ' + tw.c + '</span>' +
          '</div>' +
        '</div>';
      wall.appendChild(li);
    });
  }

  /* ---------- deck crew (footer crew ship) — packed avatar wall ---------- */
  var deck = document.getElementById('crewDeck');
  if (deck) {
    var avs = [];
    for (var ai = 1; ai <= 24; ai++) avs.push('sod/crew/a' + ai + '.jpg');
    var rows = [
      { y: 45.5, xs: [31, 39, 47] },
      { y: 56,   xs: [21, 29, 37, 45, 53, 61, 69, 77] },
      { y: 66,   xs: [25, 33, 41, 49, 57, 65, 73] }
    ];
    var n = 0;
    rows.forEach(function (row) {
      row.xs.forEach(function (x) {
        var a = document.createElement('div');
        a.className = 'crew-av';
        a.style.left = x + '%';
        a.style.top = row.y + '%';
        a.innerHTML = '<img src="' + avs[n % avs.length] + '" alt="">';
        deck.appendChild(a);
        n++;
      });
    });
  }

  /* ---------- hero captain sprite frame animation ---------- */
  var captain = document.getElementById('captainSprite');
  var reduceMotionC = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (captain && !reduceMotionC) {
    var cf = 0;
    setInterval(function () {
      cf = (cf + 1) % 8;
      captain.src = 'https://www.ship-or-die.com/landing/pirate/captain-frame-' + cf + '.png';
    }, 180);
  }
})();
