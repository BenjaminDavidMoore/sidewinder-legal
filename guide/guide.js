// Sidewinder Field Guide — chapter navigation.
// Every <section class="page"> in index.html becomes a chapter: its
// data-title feeds the sidebar, data-short the chip row on phones. To add a
// chapter, add a section; nothing here needs to change.
(function () {
  var pages = Array.prototype.slice.call(document.querySelectorAll('section.page'));
  var toc = document.getElementById('toc');
  var chips = document.getElementById('chipnav');
  var prev = document.getElementById('prev'), next = document.getElementById('next');
  var prevTitle = document.getElementById('prevTitle'), nextTitle = document.getElementById('nextTitle');

  pages.forEach(function (p, i) {
    var li = document.createElement('li');
    var b = document.createElement('button');
    b.type = 'button';
    b.innerHTML = '<span class="n">' + (i + 1) + '</span><span>' + p.dataset.title + '</span>';
    b.addEventListener('click', function () { go(p.id, true); });
    li.appendChild(b); li.dataset.id = p.id; toc.appendChild(li);

    var c = document.createElement('button');
    c.type = 'button'; c.textContent = (i + 1) + ' · ' + p.dataset.short; c.dataset.id = p.id;
    c.addEventListener('click', function () { go(p.id, true); });
    chips.appendChild(c);
  });

  function index(id) { for (var i = 0; i < pages.length; i++) if (pages[i].id === id) return i; return 0; }

  function go(id, scroll) {
    var i = index(id);
    pages.forEach(function (p, j) { p.classList.toggle('current', j === i); });
    Array.prototype.forEach.call(toc.children, function (li) { li.classList.toggle('current', li.dataset.id === pages[i].id); });
    Array.prototype.forEach.call(chips.children, function (c) {
      var on = c.dataset.id === pages[i].id; c.classList.toggle('current', on);
      if (on && c.scrollIntoView) { try { c.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' }); } catch (e) {} }
    });
    prev.hidden = i === 0; next.hidden = i === pages.length - 1;
    if (i > 0) prevTitle.textContent = pages[i - 1].dataset.title;
    if (i < pages.length - 1) nextTitle.textContent = pages[i + 1].dataset.title;
    if (location.hash !== '#' + pages[i].id) { try { history.replaceState(null, '', '#' + pages[i].id); } catch (e) {} }
    try { localStorage.setItem('sw-guide-page', pages[i].id); } catch (e) {}
    if (scroll) window.scrollTo({ top: 0 });
  }

  prev.addEventListener('click', function () { var i = index(location.hash.slice(1)); if (i > 0) go(pages[i - 1].id, true); });
  next.addEventListener('click', function () { var i = index(location.hash.slice(1)); if (i < pages.length - 1) go(pages[i + 1].id, true); });
  window.addEventListener('hashchange', function () { go(location.hash.slice(1), true); });

  var start = location.hash.slice(1);
  if (!start) { try { start = localStorage.getItem('sw-guide-page') || ''; } catch (e) {} }
  go(start || pages[0].id, false);
})();
