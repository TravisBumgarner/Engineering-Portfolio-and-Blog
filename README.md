# Local Setup

1. Populate .env.nfs
    - Grab username from NearlyFreeSpeech
    - Grab ssh config from `~/.ssh/config`
1. Install dependencies `yarn`
`. Run dev `yarn run dev`

# Deploy

1. `cd adhocs/blur_hash && yarn run start`
2. Copy `output.json` to `blurHashLookup.ts`
3. `yarn build && yarn start` Verify things are looking good.
4. `yarn run deploy:nfc`

# Adding Content

## New Post

1. Create new incremented [number].mdx file. 
1. Add medatadata to posts/index.ts
1. Create new folder in public/posts
1. Create post
1. Generate new RSS. `yarn run generate-rss`

## New Project

1. Select an `id` and use everywhere. (It'll be the url guid)
1. Make new folder in `public/projects/${id}`
1. Duplicate `_template.json` and fill in

## New Snapshot

1. Add image to src/public/snapshots
1. Run script `app/scripts/snapshotsToJSON.ts`

## Photos

1. Generate a new blurhash and add it to blurHashLookup.ts


