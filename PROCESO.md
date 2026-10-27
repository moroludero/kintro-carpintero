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

## 11. Cambio de marca a "KinTro"

Otra sesión de Claude, a pedido del usuario, cambió el nombre mostrado en el sitio
de "Kintro" a "KinTro" (commit `a875e19`, editando `index.html`, `js/main.js` y
`README.md`). El nombre del repositorio y la URL en vivo (`kintro-carpintero`, en
minúsculas) se dejaron igual porque ya estaban compartidos como enlace de la página
de Facebook. Es un cambio solo de texto/marca, sin tocar estructura ni estilos.

## 12. Segundo cambio de marca: "Taller KinTro"

La misma sesión hizo un segundo cambio de nombre, esta vez a "Taller KinTro"
(commit `7ba8900`), en `index.html`, `js/main.js` y `README.md`, incluyendo la
letra del logo circular (ahora "T"). Según ese mensaje, quien pidió el cambio en
esa sesión fue "Monica". El repo y la URL en vivo (`kintro-carpintero`) se
mantuvieron igual. Se verificó que el nombre quedó consistente en todos los
archivos, sin rastros del nombre anterior.

## 13. Corrección de fotos mal categorizadas

La clasificación original del paso 4 se hizo por bloques de hora de captura (fotos
consecutivas asumidas del mismo proyecto), sin revisar cada imagen una por una —
quedó anotado como aproximado en su momento. La otra sesión detectó que las 4
categorías tenían fotos mezcladas entre sí y revisó visualmente las 55 imágenes una
por una, reordenándolas y renumerándolas por contenido real (commit `5f96a8c`).

Conteos finales reales por categoría:

| Categoría              | Antes | Ahora |
|--------------------------|------:|------:|
| Cocinas Integrales        | 14 | 20 |
| Closets y Vestidores      | 11 | 13 |
| Muebles a Medida          | 19 | 18 |
| Puertas y Gabinetes       | 11 |  4 |

La mayoría de lo que estaba archivado como "puertas" en realidad eran cocinas,
closets y muebles sueltos. Se verificó que los conteos en `js/main.js` coinciden
exactamente con los archivos en `images/` (55 en total, sin pérdidas) y que las
fotos usadas en el hero y la sección "Nosotros" (`cocinas-07.jpg`,
`muebles-03.jpg`) siguen existiendo y correctamente categorizadas tras el
reacomodo.

## 14. Aviso de trabajos a medida fuera de catálogo

La otra sesión agregó, debajo de las 4 tarjetas de categoría en "Líneas de
trabajo", un recuadro con borde punteado aclarando que esas 4 categorías son solo
las más pedidas y que Ramón también hace trabajos a la medida que no encajen en
ninguna, con su propio botón de WhatsApp (`id="customWa"`, commit `0cedd26`). Se
revisó el código: el botón quedó correctamente enlazado junto con los demás
enlaces de WhatsApp en `main.js`, y el estilo nuevo usa las mismas variables de
diseño del resto del sitio (no debería romperse en móvil). No se pudo probar en
vivo en el navegador porque estaba en uso por la otra sesión en ese momento; la
otra sesión ya lo había probado en escritorio y móvil antes de publicar.

## 15. Portada de la categoría "Muebles a Medida"

El dueño pidió usar una foto específica (mueble de TV con los cajones abiertos)
como portada de la tarjeta "Muebles a Medida", ya que la portada siempre sale de
`<categoria>-01.jpg`. Esa foto ya estaba en el repo como `muebles-02.jpg`, así que
la otra sesión intercambió el contenido de `muebles-01.jpg` y `muebles-02.jpg`
(commit `109391c`), sin tocar conteos, HTML ni JS. Se verificó abriendo
`muebles-01.jpg`: en efecto ahora es la foto del mueble de TV con los cajones y
puertas abiertos.

## 16. Rediseño visual premium y selector de idioma ES/EN (2026-10-23/26)

Monica pidió que el sitio se viera "stunning" pensando en usarlo como pieza de
portafolio para su negocio de marketing digital (Moroludero Marketing Digital).
Al comparar con `SoapCatalog` (que ya tenía un rediseño más pulido), se decidió
una pasada de "premium polish" sobre la estructura existente, sin rehacerla:

- Tipografía nueva: Fraunces (títulos) + Inter (cuerpo), vía Google Fonts.
- Textura de grano sutil (misma técnica que `SoapCatalog`) para unificar el
  "lenguaje visual" del portafolio entre los dos sitios.
- Animaciones de aparición al hacer scroll (`IntersectionObserver` + clase
  `.reveal`/`.in-view`), encabezado con blur y sombra al hacer scroll.
- Reemplazo de todos los emoji (📱📞📍🛠️) por iconos SVG propios (sprite
  `<symbol>` + `<use>`), insignia flotante sobre la foto del hero, tarjetas y
  galería con hover de profundidad (sombra + zoom + overlay degradado).
- Enlaces reales de Facebook/Instagram en el footer (antes el footer no tenía
  redes sociales).
- Se agregó un selector de idioma **ES/EN** en el nav (persistido en
  `localStorage`), traduciendo todo el texto estático, las 4 categorías, el
  texto alternativo de cada foto de galería, aria-labels, `<title>` y meta
  description.

Bug real encontrado y corregido durante las pruebas: al agregar el selector de
idioma al nav, el botón de hamburguesa quedaba con ancho 0 en celular (todo el
contenido del nav no cabía y el flex exprimía al elemento sin texto). Se
corrigió haciendo que el botón de WhatsApp del nav sea solo-ícono en móvil.

Verificado con capturas reales (Playwright + Edge local) en escritorio y
celular, en ambos idiomas, sin errores de consola.

## 17. Marca "TK" en el logo circular

A pedido de Monica, el círculo del logo (antes mostraba solo "T") ahora
muestra las iniciales **"TK"** (Taller KinTro), con el tamaño de letra
ajustado para que quepan las dos.

## 18. WhatsApp contextual por categoría (2026-10-26)

A partir de una auditoría de sitios de la competencia (parte de una investigación
de leads para Moroludero Marketing Digital), se detectó que cada tarjeta de
categoría ("Cocinas Integrales", "Closets y Vestidores", etc.) solo llevaba a la
galería filtrada, sin forma directa de cotizar esa línea específica por WhatsApp
— a diferencia de `SoapCatalog`, que ya arma un mensaje distinto por producto.

Se agregó un botón de WhatsApp propio en cada tarjeta de categoría (ícono
circular verde, esquina superior derecha de la foto), con mensaje pre-llenado
mencionando esa categoría exacta (ej. "...me interesa cotizar: Cocinas
Integrales."), en `js/main.js` (`waLink(category)`, nuevas claves
`waMessageCategory`/`ariaCategoryWa` en `I18N` ES/EN) y `css/style.css`
(`.category-wa`). Verificado con Playwright en ambos idiomas, sin errores de
consola.

## 19. Corrección de color: botón "Preguntar por WhatsApp"

Monica reportó que un botón que lleva a WhatsApp no tenía el color verde de
WhatsApp. Se encontró el bug (preexistente, no introducido en este proyecto):
el CTA `customWa` (dentro de la nota "¿No encuentras lo que buscas?") usaba la
clase `btn-secondary` (contorno color madera) en vez de `btn-primary` (verde
WhatsApp), pese a enlazar correctamente a WhatsApp. Se corrigió la clase en
`index.html`. Se revisaron los otros 5 CTAs de WhatsApp del sitio (nav, hero,
contacto, flotante, y el nuevo por categoría del punto 18) y ninguno tenía el
mismo problema.

## 20. Sección de Testimonios

Se agregó una sección "Testimonios" (3 tarjetas con estrellas, cita y nombre)
entre "Nosotros" y "Contacto", traducida en ES/EN (`testimoniosEyebrow`/
`testimoniosTitle` en `js/main.js`, estilos `.testimonials`/`.testimonial-card`
en `css/style.css`, nuevo ícono `#icon-star` en el sprite SVG).

**Importante:** las 3 citas son contenido de muestra (a pedido explícito de
Monica, solo para previsualizar el diseño) — no son reseñas reales de clientes.
Cada tarjeta dice "Cliente de muestra — reemplazar antes de publicar" en el
nombre, precisamente para que sea imposible confundirlas con testimonios
genuinos si se suben así por accidente. **Pendiente:** reemplazar por 3 reseñas
reales de Ramón antes de que esto se publique en serio.

**Actualización (mismo día):** Monica pasó 4 reseñas reales de clientes de
Ramón (exportadas de un chat de WhatsApp, con nombre, ciudad y calificación de
cada una). Se reemplazaron las 3 tarjetas de muestra por las 4 reales: Daniela
F. (cocina integral), Patricia L. (clóset a la medida), Jorge M. (gavetero) y
Roberto C. (bar, 4 estrellas en vez de 5 — el motivo de la calificación quedó
incluido en su propia cita). Como ya no eran 3 sino 4, se cambió
`.testimonials` de `repeat(3, 1fr)` a `repeat(auto-fit, minmax(240px, 1fr))`
para que se acomode bien sin importar cuántas reseñas haya, y se agregó el
estilo `.icon.empty` para poder mostrar una estrella sin rellenar cuando la
calificación no es de 5.

Antes de aceptarlas se verificó que ninguna coincidiera con contenido inventado
por Claude (al primer intento, Monica pegó sin querer las 3 citas de muestra
tal cual, palabra por palabra — se detectó y se rechazó esa vez; esta segunda
entrega sí trae nombres, ciudades y detalles específicos y consistentes con las
categorías reales del catálogo).

## 21. SEO y analítica

Se encontró que el sitio no tenía: etiquetas Open Graph/Twitter Card (el link
no mostraba foto/descripción al compartirse por WhatsApp o Facebook — el canal
de ventas principal del negocio), datos estructurados para buscadores,
`robots.txt`/`sitemap.xml`, ni ningún tipo de analítica de visitas. Se agregó:

- **Open Graph / Twitter Card** en `<head>` (`og:title`, `og:description`,
  `og:image` usando `images/cocinas-07.jpg`, `og:url`, `twitter:card`, etc.) —
  para que el link se vea como catálogo real al compartirse.
- **`<link rel="canonical">`** y **`<meta name="theme-color" content="#3b2a1f">`**
  (antes solo lo tenía `SoapCatalog`).
- **Datos estructurados JSON-LD** (`schema.org/HomeAndConstructionBusiness`) con
  nombre, teléfono, dirección (Cancún, Quintana Roo, MX — mismo dato que ya
  muestra el sitio en la sección de contacto, no es información nueva) y redes
  sociales.
- **`robots.txt`** y **`sitemap.xml`** en la raíz del proyecto.
- **Analítica (GoatCounter)**, gratuita y sin cookies: el script ya está en el
  sitio pero no cuenta nada todavía — **pendiente que Monica cree la cuenta
  gratis en goatcounter.com con el código de sitio "taller-kintro"** (o cambiar
  el código en `index.html` por el que elija). Verificado en local: el script
  no cuenta en `localhost` por diseño propio de GoatCounter (warning esperado
  en consola, no es un error).

Todo verificado con Playwright en local: JSON-LD parsea como JSON válido,
`robots.txt`/`sitemap.xml` se sirven correctamente, sin errores de consola.

## 22. Sección de Instagram (feed en vivo, pendiente de activar)

Monica pidió agregar lo que se vio en un sitio de la competencia (quererte.mx):
mostrar las últimas fotos de Instagram directamente en el sitio, en vez de solo
un ícono-link muerto en el footer. Se eligió el enfoque de widget automático de
terceros (SnapWidget) sobre curar una mini-galería manual.

Se agregó una sección "Instagram" nueva (entre Testimonios y Contacto) con:
- El `<iframe>` de SnapWidget **comentado** dentro de `index.html`, con
  instrucciones exactas de los 3 pasos para activarlo (crear cuenta gratis en
  snapwidget.com, conectar @tallerkintro, pegar el iframe real reemplazando el
  comentario).
- Un botón de respaldo "Ver en Instagram" siempre visible mientras tanto, para
  que la sección nunca se vea vacía o rota si se publica antes de activar el
  feed.
- Estilos `.instagram-embed`/`.instagram-fallback` en `css/style.css`, claves
  `instagramEyebrow`/`instagramTitle`/`instagramCta` en ES/EN en `js/main.js`.

**Bug real encontrado y corregido durante la verificación:** el comentario de
instrucciones incluía literalmente las secuencias de apertura/cierre de
comentario HTML como texto explicativo ("quitando las marcas de comentario...
y ..."), lo cual cerraba el comentario antes de tiempo y dejaba un trozo de
texto suelto visible en la página (confirmado con una captura real, no
detectado solo leyendo el código). Se corrigió redactando las instrucciones
sin usar esos símbolos literalmente. Verificado de nuevo con Playwright — para
ver el cambio hubo que forzar la recarga sin caché del navegador
(`?v=2` en la URL), ya que el navegador había cacheado la respuesta anterior
del servidor local.

**Pendiente:** crear la cuenta en snapwidget.com y pegar el iframe real para
que el feed quede en vivo (ver instrucciones dentro del comentario en
`index.html`).

## 23. Agendar visita (fecha + dirección) en vez de precios — 2026-10-27

Monica probó primero un sistema de carrito con precios en `SoapCatalog`
(jabones, donde sí tiene sentido mostrar precio fijo). Para Taller KinTro
pidió explícitamente lo contrario: "para Ramón no tiene sentido los precios"
(carpintería a medida, cada proyecto se cotiza después de ver el espacio),
"pero tiene sentido agendar una fecha y agregar una ubicación para saber
dónde ir a tomar las medidas del mueble".

Se reemplazaron todos los botones de WhatsApp relacionados con cotizar un
trabajo (antes enlaces directos a `wa.me` con mensaje pre-armado) por un
modal **"Agenda tu visita"**:

- Selector de categoría (Cocinas Integrales / Closets y Vestidores / Muebles
  a Medida / Puertas y Gabinetes / Otro — trabajo a la medida).
- **Fecha preferida para la visita** (`<input type="date">`, con mínimo hoy).
- **Dirección para tomar medidas** (campo de texto).
- Nombre (opcional).
- Un botón "Agendar por WhatsApp" que arma un solo mensaje con categoría,
  fecha (formateada en el idioma activo, ej. "martes, 3 de noviembre de
  2026" en ES / "Tuesday, November 3, 2026" en EN), dirección y nombre.

Fecha y dirección son campos **requeridos** (`required` + `reportValidity()`
antes de enviar) porque son justo el dato que el negocio necesita para poder
cotizar — a diferencia de `SoapCatalog`, donde el nombre/notas quedaron
opcionales.

Disparadores del modal (`js/main.js`, atributo `data-schedule-category`):
- El botón de WhatsApp de cada tarjeta de categoría (`.category-wa`, ahora
  `<button>` en vez de `<a>`) — abre el modal con esa categoría preseleccionada.
- "Cotizar por WhatsApp" (hero) y "Escribir por WhatsApp" (sección Contacto)
  — abren el modal sin categoría forzada (cae en la primera, el usuario puede
  cambiarla).
- "Preguntar por WhatsApp" (nota de trabajos a la medida) — abre el modal con
  "Otro / trabajo a la medida" preseleccionado.
- El botón de WhatsApp del nav y el flotante (`navWa`/`floatWa`) **se
  mantuvieron como enlaces directos** a WhatsApp — son para chat general
  rápido, no están atados a cotizar un proyecto específico.

Se simplificó `waLink()` (ya no acepta un parámetro de categoría, ese flujo
ahora vive en el modal) y se quitó la traducción `waMessageCategory`, que
quedó sin uso.

Verificado con Playwright en local (escritorio y móvil 390×844, ES/EN): el
modal abre con la categoría correcta según qué botón se tocó, la fecha y
dirección quedan vacías tras cada envío (no arrastran datos de un pedido
anterior), enviar sin fecha/dirección lo bloquea (validación nativa, no se
abre WhatsApp), y el mensaje final generado es correcto — ej.:
"Hola, me interesa cotizar: Muebles a Medida.\nFecha preferida para la
visita: martes, 3 de noviembre de 2026\nDirección para tomar medidas: Calle
12 #45, Col. Centro, Cancún\nNombre: Ana Torres". Sin errores de consola.

## 24. Hora de visita y ubicación de Google Maps (2026-10-27)

Dos mejoras al modal "Agenda tu visita" del punto 23, a pedido de Monica:

- **Hora de la visita**: se agregó un `<input type="time">` junto al campo de
  fecha (`scheduleDate`/`scheduleTime` en `js/main.js`). El campo "Fecha
  preferida para la visita" pasó a llamarse "Fecha y hora preferida para la
  visita"; es opcional (la fecha sigue siendo el único campo requerido). La
  función `formatScheduleDate` se renombró a `formatScheduleDateTime` y ahora
  combina fecha+hora en un solo texto localizado cuando hay hora, ej.
  "jueves, 5 de noviembre de 2026, 10:30 a.m." en ES / "Thursday, November 5,
  2026, 10:30 AM" en EN.
- **Compartir ubicación de Google Maps**: mismo mecanismo que se agregó a
  `SoapCatalog` el mismo día (ver su PROCESO.md punto 25) — botón opcional
  que usa `navigator.geolocation` para armar un link
  `https://www.google.com/maps?q=lat,lng`, agregado como línea extra al
  mensaje de WhatsApp junto con (no en lugar de) la dirección escrita a mano.
  Requiere HTTPS/`localhost`; funcionará en producción vía GitHub Pages.

Verificado con Playwright en local (simulando el permiso de geolocalización
con coordenadas de prueba en Cancún): el modal muestra fecha y hora
correctamente en el input, el botón de ubicación pasa por "Obteniendo tu
ubicación…" → "Ubicación agregada ✓", y el mensaje final generado es
correcto — ej.: "Hola, me interesa cotizar: Cocinas Integrales.\nFecha y hora
preferida para la visita: jueves, 5 de noviembre de 2026, 10:30 a.m.\nDirección
para tomar medidas: Av. Tulum 123, SM 4, Cancún\nUbicación (Google Maps):
https://www.google.com/maps?q=21.1748,-86.8467". Sin errores de consola.

## 25. El campo de hora no abría el selector al tocar el campo (2026-10-27)

Monica reportó que en el campo de hora del modal "Agenda tu visita" había
que darle exactamente al icono del reloj para que se abriera el selector —
tocar el resto del campo no hacía nada, lo cual era confuso. Es un
comportamiento nativo de `<input type="time">`/`type="date">` en navegadores
basados en Chromium: solo el icono abre el desplegable visual.

Se agregó un listener de clic en los campos de fecha y hora que llama a
`field.showPicker()` (con verificación de soporte y `try/catch` por si el
navegador no lo soporta, en cuyo caso simplemente queda el comportamiento
nativo de antes). Ahora tocar en cualquier parte del campo abre el selector,
igual que un `<select>` normal. También se le agregó `cursor: pointer` a
ambos campos para que se vean claramente interactivos.

De paso, a pedido de Monica, se aclaró el texto de introducción del modal
(`scheduleSub`) para dejar explícito que la visita es para que Ramón tome las
medidas exactas y pueda armar la cotización — antes solo decía "la dirección
para ir a tomar medidas", sin conectarlo con el resultado (la cotización).

Verificado con Playwright: el clic en el cuerpo del campo (no solo el icono)
activa el campo y `showPicker()` se ejecuta sin errores; sin errores de
consola nuevos.

**Actualización (mismo día):** Monica aclaró que no quiere que se pueda
escribir la fecha/hora a mano en absoluto — solo elegirlas del calendario u
reloj visual. `readonly` no sirve para esto (en Chromium, un campo de
fecha/hora `readonly` también deshabilita el selector visual, no solo el
tecleo). Se bloqueó en su lugar el tecleo directamente: un listener de
`keydown` en ambos campos cancela cualquier tecla excepto Tab/Escape (para no
atrapar el foco), y un listener de `paste` bloquea pegar un valor. El clic
para abrir el selector (`showPicker()`) se deja intacto. Verificado con
Playwright: escribir una fecha/hora completa por teclado en ambos campos ya
no cambia su valor (quedan vacíos), sin errores de consola.

## Estado final

- **Sitio en vivo:** https://moroludero.github.io/kintro-carpintero/
- **Repositorio:** https://github.com/moroludero/kintro-carpintero (público)
- **Hosting:** GitHub Pages, gratuito de forma permanente
- **Contacto activo en el sitio:** WhatsApp y teléfono 998 737 2869 únicamente
- **Carpeta local del proyecto:** `C:\Users\morol\OneDrive\Documents\KintroCarpintero\`
- **Idiomas:** ES/EN, selector en el nav (persistido en `localStorage` como `lang-kintro`)
- **Diseño:** rediseño premium (Fraunces/Inter, scroll-reveal, iconos SVG) — ver punto 16
- **SEO/analítica:** Open Graph, JSON-LD, `robots.txt`/`sitemap.xml` listos — ver punto 21
- **Cambios de esta sesión (2026-10-26 y 2026-10-27) sin subir a GitHub todavía** (local únicamente, pendiente `git push` cuando Monica lo pida)

## Pendientes

- [ ] Crear la cuenta gratis en goatcounter.com (código de sitio "taller-kintro") para activar la analítica
- [ ] Crear la cuenta gratis en snapwidget.com, conectar @tallerkintro, y pegar el iframe real en `index.html` (punto 22) para activar el feed de Instagram
- [ ] `git push` de todos los cambios de esta sesión cuando Monica confirme

## Cómo seguir editando

Ver `README.md` del proyecto: ahí está explicado qué archivo tocar para cambiar
teléfono/mensaje de WhatsApp, categorías, o agregar más fotos.
