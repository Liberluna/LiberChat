// Exports router modules for serverless env that doesn't support the dynamic import.
// This module will be updated automaticlly in develoment mode, do NOT edit it manually.

import * as $0 from "./_app.tsx";
import * as $1 from "./_404.tsx";
import * as $2 from "./into.tsx";
import * as $3 from "./todos.tsx";
import * as $4 from "./index.tsx";
import * as $5 from "./socket/test.tsx";
import * as $6 from "./socket/comet.ts";

export default {
  "/_app": $0,
  "/_404": $1,
  "/into": $2,
  "/todos": $3,
  "/": $4,
  "/socket/test": $5,
  "/socket/comet": $6,
};
