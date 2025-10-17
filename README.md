# CloneFix 🎃

## 🎬 Introducción

**CloneFix** es una aplicación web de interfaz de usuario (UI) inspirada en plataformas populares de streaming, desarrollada utilizando **HTML**, **CSS** (con **Bootstrap**) y **JavaScript** puro.

El proyecto consume datos reales de series de televisión mediante una API pública, simulando la experiencia de navegación con una sección destacada principal (Hero) y filas de contenido deslizable (Rails).

***

## ✨ Características Principales (a partir de la Versión 2.0)

El proyecto ofrece las siguientes funcionalidades clave:

* **Sección Hero Dinámica:** Muestra aleatoriamente una serie de televisión destacada con su título, sinopsis y una imagen de fondo.
* **Carruseles de Contenido (Rails):** Muestra filas de pósteres de series deslizable horizontalmente, cargando las tendencias de la API al inicio.
* **Funcionalidad de Búsqueda:** Permite buscar series a través de un formulario en la barra de navegación, renderizando los resultados en una nueva fila.
* **Modal de Detalle:** Al hacer clic en un póster, se abre una ventana modal con información detallada de la serie (géneros, rating, sinopsis, etc.).
* **Diseño UI:** Tema oscuro con acentos de color rojo (`#e50914`).

***

## ⚙️ Versiones del Sistema

La documentación detallada y el código de cada versión se encuentran en sus respectivos archivos Markdown:

-   👍[Creación del proyecto, versión 1](Version1.md)
-   👍[Implementación de funcionalidad, versión 2](Version2.md)

***

## 📜 Historial de Versiones

### 1.0 - Estructura Base y Diseño
Esta versión inicial se enfocó en establecer la base visual y la estructura del proyecto.

* **HTML/CSS:** Se definió la estructura de la interfaz (Navbar, Hero, Main container, Modal y Footer) y se aplicaron los estilos para el tema oscuro, los carruseles (`.rail`) y las tarjetas de pósteres.
* **JavaScript:** El archivo de script se incluyó vacío o con un marcador de posición, sin funcionalidad de la aplicación.

### 2.0 - Funcionalidad Completa e Integración API
Esta versión convierte el proyecto en una aplicación web dinámica al añadir la lógica de JavaScript.

* **Integración API:** Se implementó la conexión con la **API de TVmaze** para la carga inicial de tendencias y el manejo de la función de búsqueda (`wireSearch()`).
* **Renderizado Dinámico:** Se crearon funciones como `renderHero()`, `renderRow()`, `posterCard()`, y `openDetail()` para manipular el DOM y mostrar la información obtenida de la API.
* **Funciones de Utilidad:** Se añadieron funciones de seguridad y limpieza como `escapeHTML()` y `stripHTML()`.

***

## 📡 API

El proyecto obtiene todos sus datos de series de TV desde la **API pública de TVmaze**.

* **API Base de Búsqueda:** `https://api.tvmaze.com/search/shows?q=`
* **Endpoint de Detalles:** `https://api.tvmaze.com/shows/{id}`

***

## 👤 Créditos

* **Datos de Series de TV:** Proporcionados por la [API de TVmaze](https://www.tvmaze.com/).
* **Framework CSS:** [Bootstrap](https://getbootstrap.com/).