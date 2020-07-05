# blog
This repository contains a very minimalistic blog.

## using
If you want to use this blog format for yourself:
1. Clone or fork this repo
2. Install node.js
3. Remove my entries in `/entries_md/`
4. Remove my personal google analytics tags and add your own.
4. Write your own markdown files to put there.
5. Start hosting your page on github pages.
6. Follow the deploy procedure below.

Notes:
- entries in subfolders e.g. `drafts` will not be published.

## deploying
Deploy whenever you make a change to the entries in `/entries_md/`.
1. Run `node deploy.js`.

And you're set. 