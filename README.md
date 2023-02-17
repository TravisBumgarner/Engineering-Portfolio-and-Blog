# Deploy

1. `yarn run deploy`
2. Navigate to console.cloud.google.com -> buckets -> eng42-asdsad
3. Clear Contents and upload `public/`

# Add New Post

1. Create new incremented [number].mdx file. 
2. Add medatadata to posts/index.ts
3. Create new folder in public/posts
4. Create post.
5. Deploy code
6. Copy images to Bucket

# Add New Project

1. Select an `id` and use everywhere. (It'll be the url guid)
2. Duplicate `_template.json` and fill in
3. Head over to lightroom
    1. Create new `collection` with `id`
    2. Create new `keyword` with `id`
    3. Select photo and tag as `preview_image`
    4. Select other project photos and make sure all are in `collection` and have the `keyword`. 
    5. (Optionally) Use the load_photos adhoc
        1. Export photos with keywords with the Large Export (from Photo20)
        2. Copy to `input/`
        3. Run script.
        4. Copy output folder to public.
