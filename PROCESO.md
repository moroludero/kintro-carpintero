# Bitácora — Catálogo web Kintro Carpintero

Registro de todo el proceso seguido para crear y publicar el sitio, en orden.
Fecha: 2026-10-16.

## 1. Punto de partida

Se pidió un sitio catálogo para un negocio de carpintería, similar a uno que otra
sesión de Claude ya estaba construyendo para un catálogo de jabones (`SoapCatalog`),
con dos condiciones explícitas:

- El hosting debía ser **gratis de verdad**, sin tarjeta y sin caducar.
- No se debían usar datos inventados sin confirmarlo con el usuario primero.

## 2. Levantamiento de información

Antes de escribir una sola línea de código se preguntó al usuario (vía
`AskUserQuestion`):

1. Nombre del negocio y categorías de producto.
2. Si tenía fotos reales de los trabajos.
3. Datos de contacto.
4. Preferencia de hosting gratuito.

Respuestas: usar datos de ejemplo por nombre/categorías (de inicio), fotos reales en
`C:\Users\morol\Pictures\Carpenter Catalog` (57 imágenes), el contacto se pasaría
después, y GitHub Pages como hosting.

## 3. Revisión de las fotos

Se listó la carpeta (57 `.jpeg`, todas capturas de WhatsApp) y se abrieron varias
para identificar qué mostraban. Dos de las últimas fotos resultaron ser la
**tarjeta de presentación real del negocio**:

> KINTRO carpintero — Ramón M. Quintero — confección de muebles
> Tel. 998 737 2869 y 998 188 3210

Esto cambió el plan: en vez de usar un nombre de negocio genérico de ejemplo, se
usaron los datos reales de la tarjeta (nombre del negocio, oficio, teléfono),
confirmando que el número coincidía con el que el usuario ya había dado por chat.

Se examinaron fotos adicionales para entender qué tipo de trabajo mostraban
(tocador/mueble a medida, cocinas integrales, closets, puertas) y se detectaron,
por los bloques de hora de captura consecutivos, 4 grupos de fotos correspondientes
a 4 proyectos distintos.

## 4. Clasificación y preparación de imágenes

Las 57 fotos se dividieron así (excluyendo las 2 de la tarjeta de presentación):

| Categoría              | Cantidad |
|-------------------------|---------:|
| Muebles a Medida         | 19 |
| Cocinas Integrales       | 14 |
| Closets y Vestidores     | 11 |
| Puertas y Gabinetes      | 11 |
| **Total en galería**     | **55** |

Se copiaron y renombraron a `images/<categoria>-NN.jpg` dentro del proyecto nuevo en
`C:\Users\morol\Documents\KintroCarpintero\`.

## 5. Construcción del sitio

Sitio estático, sin frameworks ni paso de build (HTML + CSS + JS puro), para que
cargue rápido y se pueda hostear en cualquier sitio de archivos estáticos:

- `index.html` — estructura: header, hero, categorías, galería filtrable, nosotros,
  contacto, footer.
- `css/style.css` — estilos con paleta de madera/carpintería.
- `js/main.js` — arma la lista de imágenes a partir de un arreglo `CATEGORIES`
  editable, genera los filtros, la galería y el lightbox; arma los enlaces de
  WhatsApp a partir de una constante `WHATSAPP_NUMBER`.
- `README.md` — instrucciones de edición y de despliegue.

Funciones incluidas: galería con filtro por categoría, visor de imagen en grande
(lightbox) con navegación anterior/siguiente y teclado, menú móvil, botones de
WhatsApp con mensaje precargado, botón flotante de WhatsApp.

## 6. Pruebas antes de publicar

Se sirvió el sitio en local (`npx http-server`) y se probó con un navegador
automatizado (Playwright):

- Se verificó que las 55 imágenes cargaran sin errores (`naturalWidth` > 0).
- Se probaron los filtros de categoría.
- Se probó abrir el lightbox.
- Se probó el menú en vista de celular (390×844).

## 7. Publicación gratuita

No había GitHub CLI (`gh`) en el PATH de la terminal usada al inicio, pero se
encontró instalado en `C:\Program Files\GitHub CLI\gh.exe`, ya autenticado con la
cuenta `moroludero` (la misma que usó la otra sesión para el catálogo de jabones).
Con eso:

1. Se creó el repositorio público `github.com/moroludero/kintro-carpintero`.
2. Se hizo `git push` del sitio.
3. Se activó GitHub Pages por API (rama `main`, carpeta raíz).

Resultado: **https://moroludero.github.io/kintro-carpintero/** — hosting gratuito
permanente, sin tarjeta, sin caducidad (único límite real: ~100 GB de tráfico al
mes, muy por encima de lo que un catálogo necesita).

Se confirmó que el sitio en vivo respondía bien (HTML, imágenes, CSS y JS) y se
revisó visualmente con capturas de pantalla reales.

## 8. Código QR

Se generó un código QR (con la librería `qrcode` vía `npx`, sin servicios externos)
que apunta directo a la URL del sitio en vivo, pensado para imprimir en tarjetas o
pegar en el taller — mismo concepto que el QR que ya traía la tarjeta de
presentación original, pero apuntando al catálogo nuevo. Archivo:
`qr-kintro-carpintero.png`.

## 9. Ajustes de vista móvil

El usuario indicó que la mayoría de la gente va a ver el sitio desde el celular.
Se revisó el sitio en vivo con capturas reales a 390×844 px y se encontraron y
corrigieron varios problemas:

- El encabezado partía el nombre del negocio en dos líneas y ocupaba demasiado
  espacio — se compactó.
- Al tocar un enlace del menú (ej. "Trabajos"), el título de esa sección quedaba
  tapado detrás del encabezado fijo — se corrigió con `scroll-margin-top`.
- Los botones de filtro de la galería ocupaban 4 filas completas — se cambiaron a
  un carrusel horizontal deslizable de una sola fila.
- La galería era de una sola columna, obligando a mucho scroll — se cambió a 2
  columnas en móvil para que se vea como catálogo.
- La foto del hero aparecía después de las estadísticas en móvil — se reordenó
  para que la foto de trabajo real se vea primero.
- Los números de teléfono eran texto plano — se convirtieron en enlaces `tel:`
  para poder llamar con un toque.
- El botón flotante de WhatsApp se redujo un poco para estorbar menos contenido.

Los cambios se probaron de nuevo con capturas reales antes/después y se publicaron.

## 10. Corrección de datos de contacto

El usuario pidió eliminar el segundo teléfono (998 188 3210, leído de la foto de la
tarjeta de presentación) y dejar únicamente el número que él mismo proporcionó por
chat (998 737 2869). Se quitó de `index.html` y se publicó el cambio.

## Estado final

- **Sitio en vivo:** https://moroludero.github.io/kintro-carpintero/
- **Repositorio:** https://github.com/moroludero/kintro-carpintero (público)
- **Hosting:** GitHub Pages, gratuito de forma permanente
- **Contacto activo en el sitio:** WhatsApp y teléfono 998 737 2869 únicamente
- **Carpeta local del proyecto:** `C:\Users\morol\Documents\KintroCarpintero\`

## Cómo seguir editando

Ver `README.md` del proyecto: ahí está explicado qué archivo tocar para cambiar
teléfono/mensaje de WhatsApp, categorías, o agregar más fotos.
