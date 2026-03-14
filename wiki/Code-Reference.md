# 🧠 CODE REFERENCE: JS MODULES

Detailed documentation of the core logic residing in `js/app.js`.

## 🛰️ Core Initialization
```javascript
document.addEventListener('DOMContentLoaded', () => { ... });
```
The entry point of the MAGI system. It initializes all sub-systems sequentially after the DOM is fully parsed.

## 🧬 Functional Modules

### `initTacticalGlobe()`
Generates the 3D Tracking System.
- **Mechanism**: Calculates `top` and `left` percentages for markers.
- **Timing**: Updates targets every 5 seconds.
- **Data Structure**: Array of `angel` objects containing coordinates and threat levels.

### `initGitHubSync()`
The neural uplink to the repository.
- **Endpoint**: `api.github.com/repos/marsianin206/marsianin206/commits`.
- **Error Handling**: Implements a simulation fallback if the API rate limit is exceeded or offline.
- **Transformation**: Maps raw SHA hashes to shortened 7-character tactical identifiers.

### `initEasterEggs()`
The NERV Secret Archive handler.
- **Events**: Keydown listeners for Konami codes and string sequences.
- **Visuals**: Directly manipulates the DOM to inject `glitch-text` and `emergency-mode` classes.

### `initPilotLicense()`
Credential generator for 2026.
- **Integration**: Pulls `first_name`, `username`, and `photo_url` from the `window.Telegram.WebApp` object.
- **fallback**: Defaults to `PILOT_04` if launched outside the Telegram environment.

### `initATFieldGame()`
Canvas-based defense engine.
- **Physics**: Random spawn points within canvas bounds with increasing difficulty based on remaining integrity.
- **Render Loop**: Uses `requestAnimationFrame` for smooth 60fps tactical feedback.

---
> [!IMPORTANT]
> All functions are decoupled to prevent a single module failure from crashing the entire NERV OS.
