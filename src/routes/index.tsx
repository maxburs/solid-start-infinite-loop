import { Title } from "@solidjs/meta";
import { RouteDefinition } from "@solidjs/router";
import { createResource } from "solid-js";
import { runThisOnTheServer } from "~/api";
import { GET } from "@solidjs/start";

const getMainRouteData = GET(async () => {
  "use server";
  const res = runThisOnTheServer();

  if (!res) {
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
