# Videos - Fondo de Página

## 📹 Cómo agregar tu video de fondo

1. **Coloca tu video** con el nombre `background.mp4` en esta carpeta
   - Formatos soportados: MP4, WebM, Ogg
   - Recomendado: MP4 para mejor compatibilidad

2. **Tamaño recomendado**:
   - Resolución: 1920x1080 o mayor (Full HD)
   - Tamaño archivo: 2-5 MB (optimiza con herramientas como FFmpeg)
   - Duración: 10-30 segundos en loop

3. **Comando para comprimir tu video con FFmpeg**:
   ```bash
   ffmpeg -i input-video.mp4 -vcodec libx264 -crf 28 -s 1920x1080 background.mp4
   ```

4. **Alternativa - usar un poster image**:
   - Agregue una imagen en `public/images/poster.jpg`
   - Se mostrará mientras carga el video

## 📱 Comportamiento responsivo

- **Desktop**: Video de fondo visible en toda la página
- **Tablet**: Video optimizado
- **Mobile (<480px)**: Video se oculta, muestra gradiente de fondo para mejor rendimiento

## 🎨 Personalización

Puedes cambiar:
- La ruta del video en `MainLayout.astro`: `videoPath="/videos/tu-video.mp4"`
- La opacidad del overlay en `BackgroundVideo.astro`: cambiar `rgba(0, 0, 0, 0.4)`
- El color de fondo para dispositivos móviles

¡Agrega tu video y listo!
