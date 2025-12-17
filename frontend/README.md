# Dev Notes

**ejs vs html**

Given - Vite expects an HTML file and I need an EJS template for the server.
Therefore - We keep an index.html in frontend/ and move it to the server/ via `npm run mv-html-to-ejs`

# Local Setup

1. Populate .env.nfs
   - Grab username from NearlyFreeSpeech
   - Grab ssh config from `~/.ssh/config`
1. Install dependencies `npm`
1. Run dev `npm run dev` or to test with the server `npm run dev-with-server`

# Deploy

1. `cd adhocs/blur_hash && npm run start`
2. Copy `output.json` to `blurHashLookup.ts`
3. `npm build && npm start` Verify things are looking good.
4. `npm run deploy:nfc`

# Adding Content

## New Post

1. Decide on a post slug. `foo-bar-buzz`
1. Create a post with slug name.
1. Add medatadata to posts/index.json.
1. Create new folder in public/posts
1. Add at least a preview image.
1. Create post
1. Generate blurhashes
1. Generate new RSS. `yarn run generate-rss`
1. Mail newsletter followers.

## New Project

1. Select an `id` and use everywhere. (It'll be the url guid)
1. Make new folder in `public/projects/${id}`
1. Duplicate `_template.json` and fill in

## New Snapshot

1. Add image to src/public/snapshots
1. Run script `app/scripts/snapshotsToJSON.ts`

## Photos

1. Generate a new blurhash and add it to blurHashLookup.ts
