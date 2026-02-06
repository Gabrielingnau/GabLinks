import { cache } from "react";
import { createClient } from "./prismicio";

export const getSettings = cache(async () => {
  const client = createClient();
  const page = await client.getSingle("index");
  return page.data;
});