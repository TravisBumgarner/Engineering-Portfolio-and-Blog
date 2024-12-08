# Add New Post

1. Create new incremented [number].mdx file. 
1. Add medatadata to posts/index.ts
1. Create new folder in public/posts
1. Create post.
1. Deploy code
1. Copy images to Bucket

# Add New Project

1. Select an `id` and use everywhere. (It'll be the url guid)
1. Make new folder in `public/projects/${id}`
1. Duplicate `_template.json` and fill in

# Add New Snapshot

1. Add image to src/public/snapshots
1. Run script `app/scripts/snapshotsToJSON.ts

# Deploy

1. `cd adhocs/blur_hash && yarn run start`
1. Copy `output.json` to `blurHashLookup.ts`
1. Navigate to console.cloud.google.com -> buckets -> eng42-asdsad
1. Clear Contents and upload `public/` and replace with local `public/`
1. `yarn bundle && yarn serve` Verify things are looking good.
1. `yarn run deploy:dev` or `yarn run deploy:prod`

# New Photos

1. Generate a new blurhash and add it to blurHashLookup.ts


