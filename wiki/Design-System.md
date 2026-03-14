# 🎨 NERV DESIGN SYSTEM

The visual identity of the marsianin206 terminal is based on the **"Magister" UI** aesthetic from the Neon Genesis Evangelion series.

## 🌈 Color Palette

| COLOR | HEX | USAGE | THEME |
|-------|-----|-------|-------|
| **NERV Orange** | `#ff6b35` | Primary accents, interactive text | Default / Rei |
| **NERV Red** | `#ff4500` | Critical alerts, emergency mode | Asuka (Night) |
| **NERV Purple** | `#4b0082` | Bios-scan background, depth meter | Shinji (Evening) |
| **Terminal BG** | `#0d0d0d` | Core background surfaces | Universal |
| **LCL Amber** | `rgba(255,165,0,0.3)` | Liquid simulation, bubbles | Active LCL Mode |

## 🖋️ Typography

- **Orbitron**: Used for geometric, futuristic headings.
- **JetBrains Mono**: Used for technical readouts, code snippets, and terminal logs.
- **Micro-animations**: Transition duration is set to `0.3s` ease for UI elements to simulate high-performance military hardware response.

## ✨ Visual Effects
### 🌀 Scanlines
A fixed overlay providing an "analog monitor" feeling. Implemented via a repeating linear gradient in CSS.
### 🥃 Glassmorphism
Panels use `backdrop-filter: blur(10px)` to create depth, simulating a transparent command console.
### 🌫️ Parallax
Three layers of background textures move at different speeds relative to mouse movement to create a 3D volume effect inside the browser window.

---
> "The fate of destruction is also the joy of rebirth."
