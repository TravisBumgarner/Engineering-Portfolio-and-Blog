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
4. `yarn run deploy:nfs`

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
1. Run script `app/scripts/generate_snapshots_json.ts`
1. Generate blurhashes. 
