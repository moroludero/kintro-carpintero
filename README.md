# KinTro Carpintero — Catálogo web

Sitio estático (HTML/CSS/JS puro, sin frameworks ni paso de build) con el catálogo
de trabajos de KinTro Carpintero (Ramón M. Quintero).

## Editar contenido

- **Teléfono / mensaje de WhatsApp**: `js/main.js`, constantes `WHATSAPP_NUMBER` y `WHATSAPP_MESSAGE`.
- **Categorías y descripciones**: `js/main.js`, arreglo `CATEGORIES`.
- **Fotos**: carpeta `images/`, nombradas `<categoria>-NN.jpg`. Para añadir fotos a una
  categoría, agrega el archivo siguiente en la numeración y sube en 1 el `count` de
  esa categoría en `CATEGORIES`.
- **Textos de inicio / nosotros / contacto**: directo en `index.html`.

## Probar en local

Solo abre `index.html` en el navegador, o levanta un servidor simple:

```
python -m http.server 8000
```

y visita `http://localhost:8000`.

## Publicar gratis en GitHub Pages (sin tarjeta, no caduca)

1. Crea una cuenta gratuita en [github.com](https://github.com) si no tienes una.
2. Crea un repositorio nuevo, público, llamado por ejemplo `kintro-carpintero` (sin
   README, sin .gitignore — este folder ya trae todo).
3. En esta carpeta:
   ```
   git init
   git add .
   git commit -m "Catálogo KinTro Carpintero"
   git branch -M main
   git remote add origin https://github.com/<tu-usuario>/kintro-carpintero.git
   git push -u origin main
   ```
4. En GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a
   branch → Branch: main / (root)** → Save.
5. En un par de minutos el sitio queda publicado en:
   `https://<tu-usuario>.github.io/kintro-carpintero/`

Este hosting es 100% gratuito de forma permanente: no pide tarjeta, no tiene
periodo de prueba y no se apaga. El único límite (que un catálogo como este nunca
alcanza) es ~100 GB de tráfico al mes por repositorio.
