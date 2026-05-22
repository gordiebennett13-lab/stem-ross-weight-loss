import type { CollectionConfig } from "payload"

export const Team: CollectionConfig = {
  slug: "team",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "title", type: "text" },
    { name: "bio", type: "textarea" },
    { name: "photo", type: "upload", relationTo: "media" },
    { name: "order", type: "number", defaultValue: 0 },
  ],
}
