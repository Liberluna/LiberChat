// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_404.tsx";
import * as $1 from "./routes/api/joke.ts";
import * as $2 from "./routes/admin.tsx";
import * as $3 from "./routes/developers.tsx";
import * as $4 from "./routes/index.tsx";
import * as $5 from "./routes/room/[roomid].tsx";
import * as $6 from "./routes/release-notes.tsx";
import * as $$0 from "./islands/DevTools.tsx";
import * as $$1 from "./islands/Join.tsx";
import * as $$2 from "./islands/Releases.tsx";
import * as $$3 from "./islands/Room.tsx";

const manifest = {
  routes: {
    "./routes/_404.tsx": $0,
    "./routes/api/joke.ts": $1,
    "./routes/admin.tsx": $2,
    "./routes/developers.tsx": $3,
    "./routes/index.tsx": $4,
    "./routes/room/[roomid].tsx": $5,
    "./routes/release-notes.tsx": $6,
  },
  islands: {
    "./islands/DevTools.tsx": $$0,
    "./islands/Join.tsx": $$1,
    "./islands/Releases.tsx": $$2,
    "./islands/Room.tsx": $$3,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
