# 📖 How to Setup this Wiki on GitHub

GitHub Wikis are separate repositories. To make this content appear on your GitHub Wiki tab, follow these steps:

1. **Activate Wiki**: Go to your repository on GitHub -> **Settings** -> Scroll down to **Features** -> Check **Wikis**.
2. **Open Wiki Tab**: Click the **Wiki** tab at the top of your repo.
3. **Create First Page**: Click "Create the first page", name it `Home`, and save it (just to initialize).
4. **Clone Wiki Repo Locally**:
   ```bash
   git clone https://github.com/marsianin206/marsianin206.wiki.git
   ```
5. **Copy Files**: Copy all files from the `wiki/` folder in your main repo into the cloned `.wiki` folder.
6. **Push Changes**:
   ```bash
   cd marsianin206.wiki
   git add .
   git commit -m "Initial wiki setup"
   git push origin master
   ```

Now your NERV documentation will be available directly on your GitHub profile! 🦾🛰️🔴
