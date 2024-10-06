import { RouteDefinition } from "@solidjs/router";
import { createResource } from "solid-js";
import { GET } from "@solidjs/start";
import { runThisOnTheServer } from "~/api";

// async function runThisOnTheServer() {
//   "use server";
//   return 'Hello from the server!';
// }

const getMainRouteData = GET(async () => {
  "use server";
  const res = runThisOnTheServer();

  if (typeof res !== 'string') {
    console.error('How could this happen?!?');
    throw new Error("How could this happen?!?");
  }

  return res;
});

export const route: RouteDefinition = {
  load: getMainRouteData,
};

export default function Home() {
  const [getData] = createResource(getMainRouteData);
  return <main>{getData()}</main>;
}
