import { AppProps } from "$fresh/server.ts";
import { Config } from "~/config/config.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{Config.title}</title>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}