# 📂 PROJECT ARCHITECTURE

Comprehensive overview of the NERV marsianin206 terminal file structure and module organization.

## 🏗️ Directory Roadmap
```text
marsianin206/
├── assets/                 # Static Assets
│   ├── audio/              # Soundtracks (SDAT)
│   ├── images/             # Pilot dossiers & UI motifs
│   └── fonts/              # Custom NERV/Orbitron fonts
├── css/
│   └── style.css           # Core MAGI Engine styling
├── js/
│   └── app.js              # Central Logic & Event Dispatcher
├── wiki/                   # Documentation source templates
├── index.html              # Main Command Interface
├── sitemap.xml             # Search Engine indexing data
└── robots.txt              # Crawler permissions & constraints
```

## 🧩 Module Breakdown

### 🎨 Visual Layer (`style.css`)
Contains the CSS custom properties (`:root`) that define the temporal themes (Rei/Day, Shinji/Evening, Asuka/Night). It utilizes advanced CSS features like `backdrop-filter` for glassmorphism and `transform-style: preserve-3d` for the Tactical Globe.

### 🧠 Logic Layer (`app.js`)
The "Brain" of the terminal. It handles:
- **Authentication**: Biometric scan logic.
- **Data Streams**: GitHub API fetching for commit telemetry.
- **Tactical Mapping**: Globe rotation and marker placement logic.
- **Audio Management**: Background SDAT controls.

### 🌐 Deployment & SEO
- **Vercel**: Automated CI/CD configured via `vercel.json`.
- **Sitemap**: Generates a map of the terminal for neural uplink (search engine) efficiency.
- **Robots**: Restricts access to sensitive MAGI sub-directories.

---
> [!TIP]
> To modify the global theme, adjust the variables in the `:root` pseudo-class of `style.css`.
