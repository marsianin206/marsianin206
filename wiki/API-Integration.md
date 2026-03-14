# 📡 API INTEGRATION & EXTERNAL UPLINKS

Technical details on how the NERV terminal communicates with the outside world.

## 🐙 GitHub API (Commit Telemetry)
The terminal monitors repository health in real-time.
- **Service**: GitHub REST API v3.
- **Auth**: Public access (Unauthenticated). Limited to 60 requests/hour per IP.
- **Integration**:
  ```javascript
  const response = await fetch(`https://api.github.com/repos/${repo}/commits`);
  ```
- **Live Updates**: Data is refreshed every time a pilot initializes the terminal (Grant Access).

## 📱 Telegram WebApp API
The project is optimized to run as a **Telegram Mini App**.
- **User Detection**: Accesses `window.Telegram.WebApp.initDataUnsafe`.
- **UI Customization**: Uses `tg.ready()` and `tg.expand()` to provide an immersive full-screen experience inside Telegram.
- **Biometrics**: Syncs terminal "Pilot Name" with the user's actual Telegram handle.

## 🚀 Deployment (Vercel)
Continuous Integration and Deployment are handled via Vercel.
- **Root Directory**: `./`
- **Build Step**: Not required (Vanilla JS).
- **Environment**: Production URL `https://marsianin206-d3sq.vercel.app/`.

## 🔍 SEO & Crawlers
- **Sitemap**: Located at `sitemap.xml`, generated to help MAGI (Google) index the terminal pages.
- **Robots.txt**: Restricts crawlers from indexing `assets/` or private `wiki/` source folders to maintain data integrity.

---
> [!NOTE]
> All API calls are asynchronous (`async/await`) to prevent UI freezing during data retrieval.
