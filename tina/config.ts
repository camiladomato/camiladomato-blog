import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
    token: process.env.TINA_TOKEN!,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "src/assets",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Publicaciones",
        path: "src/content/blog",
        fields: [
  {
    type: "string",
    name: "title",
    label: "Título",
    isTitle: true,
    required: true,
  },
  {
    type: "datetime",
    name: "pubDate", // Usamos pubDate porque es el estándar en Astro
    label: "Fecha de Publicación",
    required: true,
  },
  {
    type: "image",
    name: "heroImage",
    label: "Imagen de Portada",
  },
  {
    type: "string",
    name: "description",
    label: "Descripción Corta",
  },
  {
    type: "rich-text",
    name: "body",
    label: "Contenido del Post",
    isBody: true,
  },
],
      },
    ],
  },
});