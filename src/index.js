import { routeHandlerMap } from "./api/router";

async function mainController(request) {
  const url = new URL(request.url);
  const routeHandlerObj = routeHandlerMap.get(url.pathname.split("/")[1]);
  if (routeHandlerObj && Object.hasOwn(routeHandlerObj, request.method)) {
    return new Response(await routeHandlerObj[request.method](request));
  }

  return new Response("Not Found", { status: 404 });
}

const server = Bun.serve({
  hostname: "localhost",
  port: 3000,
  fetch: mainController,
});

console.log(`Looking-4 running on ${server.hostname}:${server.port}`);
