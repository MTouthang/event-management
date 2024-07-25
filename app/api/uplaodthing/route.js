import { createRouteHandler } from "uploadthing/server";
import { UTrouter } from "./core";

export const { GET, POST } = createRouteHandler({
  router: UTrouter,
});
