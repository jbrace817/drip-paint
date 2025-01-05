import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "4i3j04u0",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
