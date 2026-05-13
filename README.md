🚀 Mi Blog - Astro + TinaCMS
Este es mi blog personal desarrollado con Astro, enfocado en compartir contenido sobre programación y tecnología. El proyecto utiliza TinaCMS como sistema de gestión de contenidos (CMS) para permitir una edición visual y dinámica de los artículos.

🛠️ Tecnologías utilizadas
Astro v6.3.1: Framework web diseñado para la velocidad, utilizado para la estructura principal del blog.

TinaCMS: Implementado como panel de administración local para la gestión de archivos Markdown y MDX.

TypeScript: Lenguaje utilizado para la configuración y tipado del proyecto.

Pure CSS: Utilizado para mantener el control total sobre la estructura visual y el diseño responsive.

Sharp: Motor de procesamiento de imágenes para optimizar los recursos visuales del blog.

📁 Estructura del Proyecto
El proyecto ha sido organizado fuera de servicios de sincronización automática para evitar conflictos de permisos, operando directamente desde C:\proyectos.

src/content/blog/: Ubicación de los archivos de contenido gestionados por el CMS.

src/assets/: Directorio centralizado para imágenes y recursos multimedia procesados por Astro.

tina/: Configuración del esquema y campos personalizados del administrador.

public/admin/: Archivos necesarios para el acceso al panel de edición visual.

⚙️ Configuración del Entorno
Requisitos previos
Node.js: Versión >=22.12.0.

Terminal: Se recomienda el uso de Git Bash integrado en VS Code para un entorno de desarrollo más fluido en Windows.

Instalación de dependencias
Para evitar errores de compilación de binarios locales en Windows, las herramientas de TinaCMS se instalaron ignorando scripts automáticos problemáticos:

Bash
npm install @tinacms/cli@latest tinacms@latest --save-dev --ignore-scripts
🚀 Comandos Principales
En el archivo package.json se configuraron scripts personalizados para sincronizar ambos motores de desarrollo:

Desarrollo: npm run dev (Inicia TinaCMS y el servidor de Astro simultáneamente).

Construcción: npm run build (Genera el sitio estático optimizado).

Panel de Administración: Accesible localmente en http://localhost:4321/admin/index.html una vez iniciado el servidor.

✍️ Gestión de Contenido
El administrador de TinaCMS está configurado con campos específicos para facilitar la publicación:

Título y Fecha: Gestión de metadatos de publicación.

Imagen de Portada: Carga directa a src/assets para optimización automática.

Editor Rich-text: Para redactar el cuerpo del post con formato dinámico.