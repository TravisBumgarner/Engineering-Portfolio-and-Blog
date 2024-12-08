# Local Setup

1. Get bindings for HTML `canvas` to run in Node - (for Mac) `brew install pkg-config cairo pango libpng jpeg giflib librsvg`
    1. Might need to rebuild canvas - `yarn rebuild canvas`
1. Install yarn dependencies `yarn`
1. Get current data from blurHashLookup.ts and populate into input.json.
1. Copy output.json back to blurHashLookup.ts