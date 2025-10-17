# CloneFix 🎃

## 🎬 Introducción

**CloneFix** es una aplicación web de interfaz de usuario (UI) inspirada en plataformas populares de streaming (como Netflix), desarrollada utilizando **HTML**, **CSS** (con **Bootstrap**) y **JavaScript** puro.

El propósito del proyecto es replicar la experiencia de navegación con una sección destacada principal (Hero) y filas de contenido deslizable (Rails), consumiendo datos reales de series de televisión mediante una API pública.

***

## ✨ Características Principales

El proyecto ofrece las siguientes funcionalidades clave:

* **Sección Hero Dinámica:** Muestra aleatoriamente una serie de televisión de las tendencias con su título, un extracto de la sinopsis y un fondo de imagen grande.
* **Carruseles de Contenido (Rails):** Muestra filas de pósteres de series deslizable horizontalmente (`.rail`), como la sección de "Tendencias".
* **Funcionalidad de Búsqueda:** Permite buscar series a través de un formulario en la barra de navegación, renderizando los resultados en una nueva fila.
* **Modal de Detalle:** Al hacer clic en un póster, se abre una ventana modal con información detallada de la serie, incluyendo: géneros, sinopsis, rating, idioma, estado y un enlace al sitio oficial.
* **Diseño UI:** Tema oscuro con acentos de color rojo `#e50914` y tipografía clara.

***

## 🛠️ Tecnologías Utilizadas

* **HTML5**
* **CSS3** (Estilos personalizados y tema oscuro)
* **JavaScript** (Vanilla JS para la lógica de la aplicación)
* **Bootstrap v5.3.8** (Para la estructura, navbar, modales y diseño responsivo)

***

## 📡 API

El proyecto obtiene todos sus datos de series de TV (títulos, pósteres, sinopsis, detalles) desde la **API pública de TVmaze**.

### Endpoints Clave:

* **API Base:** `https://api.tvmaze.com/search/shows?q=`
* **Tendencias (Inicialización):** `https://api.tvmaze.com/shows?page=1`
* **Detalle de Serie:** `https://api.tvmaze.com/shows/{id}`

***

## 🚀 Uso Local

Para ver el proyecto en funcionamiento, sigue estos sencillos pasos:

1.  Asegúrate de tener los archivos `index.html`, `js/app.js` y `css/app.css` en sus ubicaciones relativas.
2.  Abre el archivo `index.html` directamente en tu navegador web.

Dado que la aplicación utiliza peticiones `fetch` para consumir la API, no requiere de un servidor web local para su funcionamiento básico.

***

## 👤 Créditos

* **Datos de Series de TV:** Proporcionados por la [API de TVmaze](https://www.tvmaze.com/).
* **Diseño UI:** [Bootstrap](https://getbootstrap.com/).

*(El archivo existente incluía una sección de versiones, que puedes mantener o expandir)*:
### Versiones del sistema

- 👍[Creacion del proyecto, version 1](Version1.md)