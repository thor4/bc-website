# Bryan Conklin's Personal Website

A simple website for sharing talks, ideas, and insights about AI, multi-agent systems, and computational neuroscience.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
/
├── public/          # Static assets (PDFs, images)
├── src/
│   ├── components/  # Reusable components
│   ├── layouts/     # Page layouts
│   ├── pages/       # Site pages
│   └── styles/      # Global styles
└── assets/          # Original assets (copied to public)
```

## 🚢 Deployment Options

### Option 1: GitHub Pages + Squarespace Redirect (Recommended)

**Already configured and ready to go!**

1. **Enable GitHub Pages**:
   - Go to repo Settings → Pages
   - Set Source to "GitHub Actions"
   - Site will deploy to: `https://thor4.github.io/bc-website/`

2. **Configure Squarespace**:
   - Set up a redirect from bryanconklin.com to your GitHub Pages URL
   - OR use GitHub's custom domain feature

### Option 2: Deploy to Netlify/Vercel + Custom Domain

1. **Deploy to Netlify**:
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Build and deploy
   npm run build
   netlify deploy --prod --dir=dist
   ```

2. **Point your domain**: Update DNS in Squarespace to point to Netlify

### Option 3: Manual Squarespace Integration

1. **Build the site**: `npm run build`
2. **Use Code Injection** in Squarespace with an iframe:
   ```html
   <iframe src="https://your-deployed-site.com" 
           style="width:100%;height:100vh;border:none;">
   </iframe>
   ```

## 🔄 Auto-Deploy

GitHub Actions automatically:
- Builds the site on every push to master
- Deploys to GitHub Pages
- Creates downloadable build artifacts

**To update**: Just commit and push changes!

## 🛠️ Built With

- [Astro](https://astro.build) - Static site generator
- [Tailwind CSS](https://tailwindcss.com) - Styling
- GitHub Actions - Automated deployment

## 📝 Latest Talk

**From Soloist to Symphony: Orchestrating Multi-Agent AI Systems**  
June 18, 2025

Slides and photos are included and ready to share on social media!