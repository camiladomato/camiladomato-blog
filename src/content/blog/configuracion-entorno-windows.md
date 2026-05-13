---
title: Configuración Pro de Git Bash y VS Code en Windows
pubDate: 2026-05-11T03:00:00.000Z
heroImage: /src/assets/wds-setup.png
description: Cómo optimizar tu terminal y editor para desarrollar como una Full Stack sin morir en el intento.
---

# **Configuración Profesional de Git Bash + VS Code en Windows (Paso a Paso)**

**Introducción**

Si desarrollás en Windows, seguramente te encontraste con problemas de terminales, comandos que no funcionan igual que en Linux o configuraciones incómodas para programar. Una de las mejores combinaciones para trabajar de forma profesional es utilizar Visual Studio Code junto con Git Bash.

Esta guía explica paso a paso cómo instalar, configurar y optimizar ambos entornos para tener una experiencia moderna, rápida y sin errores.

¿Qué vamos a lograr?

Al finalizar esta configuración vas a tener:

VS Code correctamente configurado.

Git Bash integrado dentro de VS Code.

Terminal con colores y comandos útiles.

Git funcionando correctamente.

Atajos y extensiones recomendadas.

Un entorno listo para proyectos React, Angular, Node.js, Java y más.

**1. Instalar Git Bash**

Descargar Git

Ingresá al sitio oficial:

https\://git-scm.com/downloads

Descargá la versión para Windows.

Instalación recomendada

Durante la instalación, dejá las opciones por defecto excepto estas:

Editor por defecto

Seleccioná:

Visual Studio Code

PATH Environment

Elegí:

Git from the command line and also from 3rd-party software

Esto permite usar Git desde cualquier terminal.

HTTPS Transport Backend

Seleccioná:

Use the OpenSSL library

Configuración de línea de comandos

Seleccioná:

Checkout Windows-style, commit Unix-style line endings

Terminal emulator

Elegí:

Use MinTTY

**2. Verificar instalación de Git**

Abrí Git Bash y ejecutá:

git --version

Deberías ver algo como:

git version 2.xx.x.windows.x

**3. Configurar Git por primera vez**

Configurar nombre

git config --global user.name "Tu Nombre"

Configurar email

git config --global user.email "tuemail\@gmail.com"

Verificar configuración

git config --list

**4. Instalar Visual Studio Code**

Descargar VS Code

Sitio oficial:

https\://code.visualstudio.com/

Opciones importantes durante la instalación

Marcá estas opciones:

Add to PATH

Register Code as an editor

Add “Open with Code”

Esto permite abrir VS Code desde terminal usando:

code .

**5. Configurar Git Bash como terminal predeterminada en VS Code**

Abrir configuración de terminal

En VS Code:

Ctrl + Shift + P

Buscar:

Terminal: Select Default Profile

Seleccionar:

Git Bash

Abrir terminal integrada

Atajo:

Ctrl + Ñ

O desde:

Terminal > New Terminal

Ahora VS Code abrirá Git Bash automáticamente.

**6. Solución si Git Bash no aparece en VS Code**

Configuración manual

Abrí:

File > Preferences > Settings

Buscá:

terminal.integrated.profiles.windows

Agregá esta configuración en settings.json:

{

  "terminal.integrated.profiles.windows": {

    "Git Bash": {

      "path": "C:\\\Program Files\\\Git\\\bin\\\bash.exe"

    }

  },

  "terminal.integrated.defaultProfile.windows": "Git Bash"

}

**7. Configurar colores en Git Bash (LS\_COLORS)**

Una terminal con colores mejora muchísimo la lectura.

Editar archivo .bashrc

En Git Bash:

nano \~/.bashrc

Agregar:

export LS\_COLORS='di=1;34:fi=0:ln=1;36:ex=1;32'

Aplicar cambios

source \~/.bashrc

Activar colores automáticamente

Agregar también:

alias ls='ls --color=auto'

**8. Alias útiles para desarrolladores**

Agregar al archivo .bashrc:

alias gs='git status'

alias ga='git add .'

alias gc='git commit -m'

alias gp='git push'

alias gl='git pull'

alias ll='ls -la'

alias cls='clear'

Aplicar:

source \~/.bashrc

**9. Configurar fuente y apariencia en VS Code**

Fuente recomendada

Abrí Settings y buscá:

Font Family

Recomendadas:

Cascadia Code

Fira Code

JetBrains Mono

Activar ligaduras

Buscar:

Font Ligatures

Activar:

"editor.fontLigatures": true

**10. Tema recomendado para VS Code**

Temas populares

One Dark Pro

Dracula Official

Tokyo Night

Material Theme

**11. Extensiones esenciales para VS Code**

Frontend

ESLint

Prettier

Auto Rename Tag

Path Intellisense

Error Lens

React

ES7+ React Snippets

React Developer Tools

Angular

Angular Language Service

Git

GitLens

Git Graph

**12. Configuración recomendada de Prettier**

Abrí settings.json y agregá:

{

  "editor.formatOnSave": true,

  "editor.defaultFormatter": "esbenp.prettier-vscode"

}

13\. Configurar terminal más profesional

Mostrar rama actual de Git

Agregar al .bashrc:

parse\_git\_branch() {

 git branch 2>/dev/null | sed -n '/\\\* /s///p'

}

PS1='\\\[\e\[32m\\]\u@\h \\\[\e\[33m\\]\w \\\[\e\[36m\\]$(parse\_git\_branch)\\\[\e\[0m\\]\n$ '

Esto mostrará:

Usuario

Carpeta actual

Rama de Git activa

14\. Instalar Node.js (Opcional pero recomendado)

Descargar Node.js

https\://nodejs.org/

Instalar versión LTS.

Verificar instalación

node -v

npm -v

15\. Verificar que todo funciona

Crear carpeta de prueba

mkdir proyecto-demo

cd proyecto-demo

Abrir VS Code desde terminal

code .

Inicializar Git

git init

Crear archivo de prueba

touch README.md

Verificar estado

git status

Si todo aparece correctamente, el entorno ya está listo.

16\. Problemas comunes y soluciones

El comando code no funciona

**Solución:**

Reinstalar VS Code marcando “Add to PATH”.

Git Bash no abre en VS Code

**Verificar:**

C:\Program Files\Git\bin\bash.exe

Los colores no funcionan

Verificar:

source \~/.bashrc

Los alias no funcionan

Cerrar y volver a abrir Git Bash.

**17. Configuración recomendada final**

Una configuración moderna suele incluir:

VS Code

Git Bash

Node.js

Prettier

ESLint

GitLens

Tema oscuro

Fuente con ligaduras

*Esto mejora:*

Productividad

Legibilidad

Flujo de trabajo

Experiencia de desarrollo

Conclusión

Configurar correctamente VS Code y Git Bash en Windows puede marcar una enorme diferencia en tu productividad diaria.

Con esta configuración vas a tener:

Un entorno profesional.

Terminal moderna.

Git integrado.

Mejor experiencia de desarrollo.

Menos errores y más velocidad.

Tanto si trabajás con React, Angular, Node.js o Java, esta base te va a servir para prácticamente cualquier proyecto.
