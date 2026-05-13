// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: "main",
  clientId: null,
  token: null,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "src/assets",
      publicFolder: "public"
    }
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
            label: "T\xEDtulo",
            isTitle: true,
            required: true
          },
          {
            type: "datetime",
            name: "pubDate",
            // Usamos pubDate porque es el estándar en Astro
            label: "Fecha de Publicaci\xF3n",
            required: true
          },
          {
            type: "image",
            name: "heroImage",
            label: "Imagen de Portada"
          },
          {
            type: "string",
            name: "description",
            label: "Descripci\xF3n Corta"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenido del Post",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
