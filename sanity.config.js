import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import banner from "./sanity/schemas/banner-schema";

const singletonActions = new Set(["publish", "discardChanges", "restore"]);

const singletonTypes = new Set(["settings"]);

export const config = defineConfig({
  projectId: "6yym9s53",
  dataset: "production",
  title: "houskadev landing",
  apiVersion: "2023-06-29",
  basePath: "/admin",
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Our singleton type has a list item with a custom child
            S.listItem().title("Settings").id("settings").child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document().schemaType("banner").documentId("banner")
            ),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: [banner],

    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
