# 🎬 Guía: Video de Fondo - Configuración y Solución de Problemas

## ✅ Cambios Realizados

He ajustado el código para que el video de fondo funcione correctamente:

### 1. **BackgroundVideo.astro** - Componente mejorado
- ✅ Agregué soporte para **fallback gradient** si el video no existe
- ✅ Parámetro `useGradient={true}` por defecto
- ✅ Z-index optimizado (-1 para estar detrás)
- ✅ Altura corregida a `100vh` (viewport height)
- ✅ Overlay oscuro (50% opacidad) para mejor legibilidad

### 2. **MainLayout.astro** - Estilos mejorados
- ✅ Background transparente en el body
- ✅ Z-index correcto para contenido (z-index: 10)
- ✅ Header y Footer con **glassmorphism** (blur + semi-transparencia)
- ✅ Text-shadow en h1-h6 para legibilidad
- ✅ Responsive optimizado

### 3. **Header & Footer**
- ✅ Glassmorphism: `rgba(26, 26, 26, 0.85) + blur(15px)`
- ✅ Bordes sutiles con `rgba(255, 255, 255, 0.1)`
- ✅ Efecto hover mejorado

## 🎥 Cómo Agregar Tu Video

### Opción 1: Video de Fondo Personalizado (Recomendado)

```bash
# Descarga un video o crea uno tuyo
# Colócalo como: public/videos/background.mp4

# Cambia la ruta en MainLayout.astro si es diferente:
<BackgroundVideo videoPath="/videos/tu-video.mp4" useGradient={false} />
```

**Especificaciones recomendadas:**
- Formato: MP4 (mejor compatibilidad)
- Resolución: 1920x1080 o mayor
- Tamaño: 2-5 MB (comprimido)
- Duración: 10-30 segundos (en loop)

### Opción 2: Usar Gradiente (Default)
El código ya muestra un **gradiente bonito** mientras no tengas video:

```jsx
<BackgroundVideo useGradient={true} />  // ← Ya está así por defecto
```

**Gradiente actual**: `linear-gradient(135deg, #0f0c29 0%, #302b63 100%)`

### Opción 3: Cambiar el Gradiente

En `BackgroundVideo.astro`, cambiar:
```css
.background-video-container.gradient-fallback {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);  /* Tu color */
}
```

## 🛠️ Comprimir Video con FFmpeg

Si tu video es muy grande:

```bash
ffmpeg -i input-video.mp4 -vcodec libx264 -crf 28 -s 1920x1080 background.mp4
```

## 📱 Comportamiento Responsivo

- **Desktop (>768px)**: Video de fondo completo
- **Tablet (768px-480px)**: Video optimizado, fondo oscuro
- **Mobile (<480px)**: Solo gradiente (ahorra datos)

## ✨ Estilos Aplicados

```css
/* Glassmorphism en Header/Footer */
background: rgba(26, 26, 26, 0.85);
backdrop-filter: blur(15px);
border: 1px solid rgba(255, 255, 255, 0.1);

/* Sombras en texto para legibilidad */
text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.8);

/* Z-index correcto */
video z-index: -1 (detrás)
content z-index: 10 (frente)
header/footer z-index: 20 (más al frente)
```

## 🎨 Personalizaciones Recomendadas

1. **Cambiar opacidad del overlay**
   - En `BackgroundVideo.astro`: `background: rgba(0, 0, 0, 0.5)`
   - Más bajo = más luminoso, más alto = más oscuro

2. **Cambiar el blur del header**
   - En `MainLayout.astro`: `backdrop-filter: blur(15px)`

3. **Cambiar colores del gradiente**
   - En `BackgroundVideo.astro`: modificar los colores hexadecimales

## 📋 Troubleshooting

### El video no se ve
- ✅ Verifica que `public/videos/background.mp4` existe
- ✅ Abre DevTools (F12) → Pestaña Network
- ✅ Busca si se descarga el video

### El video está pixelado
- Aumenta la resolución (1920x1080 mínimo)
- Reduce el nivel de compresión con FFmpeg

### El texto no se ve bien
- Aumenta la opacidad del overlay en `BackgroundVideo.astro`
- Aumenta el `text-shadow` en `MainLayout.astro`

### Performance lento
- El video está muy grande → Comprime con FFmpeg
- Usa formato WebM además de MP4

## 🚀 Estado Actual

✅ **Todo está listo para recibir tu video**
✅ **Muestra un bonito gradiente mientras tanto**
✅ **Responsive en todos los dispositivos**
✅ **Optimizado para performance**

¡Solo falta que agregues tu video en `public/videos/background.mp4`!
