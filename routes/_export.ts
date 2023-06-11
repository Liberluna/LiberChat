// Exports router modules for serverless env that doesn't support the dynamic import.
// This module will be updated automaticlly in develoment mode, do NOT edit it manually.

import * as $0 from "./_404.tsx";
import * as $1 from "./_app.tsx";
import * as $2 from "./index.tsx";
import * as $3 from "./into.tsx";
import * as $4 from "./todos.tsx";
import * as $5 from "./socket/comet.ts";
import * as $6 from "./socket/test.tsx";
import * as $7 from "./room/$roomid.tsx";

export default {
  "/_404": $0,
  "/_app": $1,
  "/": $2,
  "/into": $3,
  "/todos": $4,
  "/socket/comet": $5,
  "/socket/test": $6,
  "/room/:roomid": $7,
};
