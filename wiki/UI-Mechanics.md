# 🎭 UI/UX MECHANICS: ANIMATION & STYLES

A deep dive into the visual engine that drives the NERV terminal experience.

## 🌀 Tactical Globe Engine
The 3D globe is built using only CSS, avoiding heavy libraries like Three.js for instant loading.
- **Perspective**: Containers use `perspective: 1200px` to create depth.
- **The Sphere**: Created using a background texture mapped to a circular div with `box-shadow: inset` to simulate spherical lighting.
- **Rotation**: 
  ```css
  @keyframes rotate-globe {
    from { transform: rotateY(0deg) Math.cos(15deg); }
    to { transform: rotateY(360deg) Math.cos(15deg); }
  }
  ```

## 🎥 Cinematic Effects

### 📺 Scanlines Overlay
Implemented as a `:before` pseudo-element on the body:
- **Style**: `linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)`.
- **Background Size**: `100% 4px`.
This creates the nostalgic CRT monitor look characteristic of NERV HQ.

### 💀 Berserk Mode Glitch
When sync ratio exceeds 400%, the `berserk-mode` class is applied:
- **Shaking**: `animation: screen-shake 0.1s infinite`.
- **Chromatic Aberration**: Handled via `filter: sepia(1) saturate(5) contrast(1.5)`.

### 🌫️ Parallax Layers
The terminal uses 3 layers of depth:
1. **Background**: Low speed (`0.01`), dark nebula.
2. **Global Grid**: Medium speed (`0.03`), glowing tactical hexes.
3. **Dust/Noise**: High speed (`0.05`), floating white particles.

## 📱 Responsive Constraints
- **Desktop**: Full HUD layout, custom 3D crosshair cursor.
- **Mobile**: Grid column collapse, touch-friendly oversized buttons, disabled custom cursor to prevent lag.

---
> [!TIP]
> Use `backdrop-filter: blur()` sparingly to maintain performance on older mobile devices.
