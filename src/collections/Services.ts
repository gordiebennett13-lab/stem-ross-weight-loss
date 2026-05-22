import type { CollectionConfig } from "payload"

export const Services: CollectionConfig = {
  slug: "services",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    { name: "icon", type: "text" },
    { name: "slug", type: "text" },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
    },
  ],
}
