# Quick GitHub Setup Guide for SOSF Website

## Step-by-Step Instructions

### Step 1: Create GitHub Repository

1. Go to https://github.com and sign in
2. Click the **+** button in top right corner → **New repository**
3. Fill in:
   - **Repository name**: `sosf-website` (or any name you prefer)
   - **Description**: "SOSF - Submissions of Success Foundation Website"
   - **Visibility**: Choose **Public** (required for free GitHub Pages)
   - ⚠️ **Do NOT check** "Initialize with README" or add .gitignore/license
4. Click **Create repository**
5. **Keep this page open** - you'll need the commands shown

### Step 2: Push Your Code to GitHub

Open PowerShell in the `sosf-site` folder and run these commands **one at a time**:

```powershell
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create your first commit
git commit -m "Initial commit: SOSF website"

# Add your GitHub repository as the remote
# Replace YOUR_USERNAME and YOUR_REPO with your actual values!
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Rename branch to main
git branch -M main

# Push to GitHub (you may need to enter your GitHub credentials)
git push -u origin main
```

**Example**: If your username is `john-doe` and repo is `sosf-website`:
```powershell
git remote add origin https://github.com/john-doe/sosf-website.git
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click the **Settings** tab (top of page)
3. Click **Pages** in the left sidebar
4. Under "Build and deployment":
   - **Source**: Select **GitHub Actions** (from dropdown)
5. Click **Save** if needed

### Step 4: Wait for Deployment

1. Click the **Actions** tab in your repository
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 2-3 minutes)
4. Green checkmark ✅ = Success!

### Step 5: View Your Website

After deployment completes:

**Your site will be at**: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

Example: `https://john-doe.github.io/sosf-website/`

You can find the exact URL in:
- Settings → Pages (it will show at the top)

## Making Updates

Whenever you make changes to your website:

```powershell
# Add your changes
git add .

# Commit with a message describing what you changed
git commit -m "Updated programs page"

# Push to GitHub
git push
```

The site will automatically rebuild and deploy! ✨

## Troubleshooting

### "Git is not recognized"
- Install Git from: https://git-scm.com/download/win
- Restart PowerShell after installing

### "Permission denied" or "Authentication failed"
- You may need to set up a Personal Access Token
- Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
- Generate new token with "repo" permissions
- Use the token as your password when pushing

### Build fails in GitHub Actions
- Go to Actions tab and click on the failed workflow
- Read the error message
- Common fixes:
  - Make sure all files are committed: `git status`
  - Test build locally: `npm run build`

### Images not showing
- Make sure images are in `public/images/` folder
- Check that image paths start with `/images/` in your code
- Make sure images are committed to git

## Need Help?

- Check the full deployment guide: `DEPLOYMENT.md`
- GitHub Pages docs: https://docs.github.com/en/pages
- Open an issue in your repository

---

**Built with ❤️ for SOSF**

