import type { CollectionConfig } from "payload"

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "rating", "date"],
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "quote", type: "textarea", required: true },
    { name: "date", type: "text" },
    {
      name: "rating",
      type: "number",
      min: 1,
      max: 5,
      defaultValue: 5,
    },
    { name: "photo", type: "upload", relationTo: "media" },
  ],
}
