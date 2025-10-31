<!-- Imagen -->
![Responsive Product Page](https://www.ds3comunicaciones.com/Logo1.jpg)

# Proyecto: Página de Producto Responsiva - Versión Vanilla

Este proyecto es una reconstrucción de una página de producto utilizando únicamente **HTML, CSS y JavaScript puros** ("Vanilla Stack"). El objetivo es demostrar un dominio de los fundamentos del desarrollo web, incluyendo HTML semántico, CSS moderno (Flexbox, Grid, Custom Properties) y JavaScript para la manipulación del DOM.

## Stack Tecnológico

- **Lenguaje de Maquetación:** HTML5 (Semántico)
- **Lenguaje de Estilos:** CSS3
  - **Metodología:** Mobile-First
  - **Características:** Flexbox, CSS Grid, Custom Properties (Variables), Media Queries.
- **Lenguaje de Programación:** JavaScript (ES6+)
  - **Características:** Manipulación del DOM, Event Listeners, sin dependencias ni frameworks.
- **Iconografía:** [Feather Icons](https://feathericons.com/)

## Características Implementadas

- **Diseño 100% Responsivo:** Adaptación fluida desde móviles a escritorio utilizando Media Queries.
- **Estructura de Archivos Limpia:** Separación clara de responsabilidades (HTML, CSS, JS) en sus respectivas carpetas.
- **Menú Móvil Interactivo:** Un menú lateral "hamburguesa" funcional para la navegación en pantallas pequeñas.
- **Galería de Imágenes Dinámica:** Permite al usuario cambiar la imagen principal del producto seleccionando una miniatura.
- **Sistema de Pestañas (Tabs):** Organización del contenido del producto en secciones interactivas.
- **CSS Moderno:** Uso de variables para un theming fácil y layouts complejos con Grid y Flexbox.
- **JavaScript No Invasivo:** El comportamiento está separado del contenido, utilizando `data-*` attributes para conectar la lógica sin ensuciar el HTML.

## Cómo Visualizar el Proyecto

A diferencia de un proyecto con un framework, no se necesita un proceso de build.

1.  **Clona o descarga el repositorio.**
2.  **Abre el archivo `index.html`** directamente en tu navegador web preferido (Google Chrome, Firefox, etc.).

¡Y eso es todo! El proyecto se ejecutará localmente sin necesidad de instalar dependencias o ejecutar comandos.

## Estructura del Proyecto

- **/css/style.css:** Contiene todos los estilos de la aplicación, incluyendo variables, estilos base, componentes y media queries.
- **/js/main.js:** Contiene toda la lógica de interactividad para el menú, la galería y las pestañas.
- **/assets/images/:** Carpeta destinada a alojar imágenes estáticas del proyecto.
- **index.html:** El punto de entrada y la estructura principal de toda la página.