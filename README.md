# AB-IT organization website

The public website at https://ab-itteam.github.io/.

GitHub Pages publishes the root of `master`. The HTML, stylesheet, JavaScript and favicon are the AB-IT portfolio from https://github.com/ab-itteam/abit-website.

The custom domain `ab-it.io` remains configured on `ab-itteam/abit-website`, which publishes the same website. Do not add a `CNAME` file to this repository: keeping its default address allows the shorter GitHub URL to load directly.

To update this copy, copy `index.html`, `styles.css`, `script.js`, `favicon.svg`, `robots.txt`, `sitemap.xml` and `.nojekyll` from the portfolio repository. Retain the Google site-verification meta tag in this repository's `index.html`.

`service-worker.js` retires the previous site's offline cache for returning visitors. The new website does not register a service worker. Legacy assets remain for compatibility with old cached pages.
