// Loads the shared header and footer into every page.
// Nav-only content lives here — never main page content —
// so crawlers always see the real content in the raw HTML.

async function loadPartial(id, url) {
  const target = document.getElementById(id);
  if (!target) return;
  try {
    const res = await fetch(url);
    target.innerHTML = await res.text();
  } catch (err) {
    console.error('Could not load ' + url, err);
  }
}

loadPartial('site-header', '/partials/header.html');
loadPartial('site-footer', '/partials/footer.html');
