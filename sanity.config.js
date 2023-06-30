import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import project from "./sanity/schemas/project-schema";

export const config = defineConfig({
  projectId: "6yym9s53",
  dataset: "production",
  title: "houskadev landing",
  apiVersion: "2023-06-29",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: [project] },
});
