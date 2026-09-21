# Sidewinder public pages

Public pages for the Sidewinder app, served by GitHub Pages at
https://benjamindavidmoore.github.io/sidewinder-legal/.

## Privacy policy — `index.md`

The source of truth is `mobile/assets/legal/` in the Sidewinder app repository.
Do not edit `index.md` here; run `mobile/tool/publish_privacy_policy.sh` from
the app repo to push a new version.

## Field Guide — `guide/`

The user guide, at https://benjamindavidmoore.github.io/sidewinder-legal/guide/.
Unlike the policy, these files are edited here, directly:

- `guide/index.html` — all the words. One `<section class="page">` per chapter;
  a comment at the top of the file lists the building blocks.
- `guide/guide.css` — all the styling, colors first.
- `guide/guide.js` — builds the chapter navigation from the sections. Adding or
  reordering chapters needs no change here.

To preview, open `guide/index.html` in a browser. To publish, commit and push
to `main`; Pages redeploys in about a minute.

When the app changes, the places most likely to need an edit are the model
table and cost figures in Chapter 7, the key steps in Chapter 4, and the
version line in the masthead.
