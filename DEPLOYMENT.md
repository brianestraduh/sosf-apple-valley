# Deploying SOSF Website to GitHub Pages

## Initial Setup

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `sosf-website`)
4. Choose "Public" or "Private" (Public is required for free GitHub Pages)
5. **Do NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### 2. Initialize Git and Push to GitHub

Open your terminal in the `sosf-site` directory and run these commands:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial commit: SOSF website"

# Add your GitHub repository as remote (replace YOUR_USERNAME and YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. In the left sidebar, click **Pages**
4. Under "Build and deployment":
   - Source: Select **GitHub Actions**
5. The workflow will automatically run and deploy your site

### 4. Access Your Site

After the deployment completes (usually 2-3 minutes):
- Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`
- You can find the exact URL in Settings > Pages

## Updating Your Site

Whenever you make changes:

```bash
# Add your changes
git add .

# Commit with a descriptive message
git commit -m "Description of your changes"

# Push to GitHub
git push
```

The GitHub Action will automatically rebuild and deploy your site!

## Custom Domain (Optional)

If you want to use a custom domain (e.g., `www.sosf.org`):

1. In repository Settings > Pages, add your custom domain
2. Add a `CNAME` record in your domain's DNS settings pointing to:
   - `YOUR_USERNAME.github.io`
3. Wait for DNS propagation (can take up to 48 hours)

## Troubleshooting

### Build Failed
- Check the Actions tab in your GitHub repository
- View the workflow logs to see what went wrong
- Common issues:
  - Missing dependencies: Make sure package.json is committed
  - Build errors: Test `npm run build` locally first

### Site Not Loading
- Make sure GitHub Pages is enabled in Settings
- Check that the workflow completed successfully in the Actions tab
- Images not loading? Make sure all image paths use `/images/` (starting with /)

### Hash Routing Issues
- The site uses hash-based routing (`#/about`, `#/programs`, etc.)
- This works perfectly with GitHub Pages without any server configuration

## Local Testing

Before pushing, always test locally:

```bash
# Development server
npm run dev

# Build and preview production
npm run build
npm run preview
```

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

