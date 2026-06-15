# GitHub Pages Deployment Guide for Ravindra's Bloom

## Overview
This project has been configured for GitHub Pages deployment at: **https://ravindra-gogineni.github.io/ravindras-bloom/**

## Changes Made

### 1. ✅ vite.config.ts - Base Path Configuration
**File:** `vite.config.ts`

**Change:** Added base path configuration for the subdirectory deployment:
```typescript
export default defineConfig({
  vite: {
    // GitHub Pages deployment base path configuration
    base: "/ravindras-bloom/",
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
```

**Why:** GitHub Pages serves your project from a subdirectory (`/ravindras-bloom/`). This setting ensures all static assets, CSS, JS, and images are served from the correct path.

---

### 2. ✅ package.json - Deployment Configuration
**File:** `package.json`

**Changes:**
- Added `"homepage"` field pointing to your GitHub Pages URL
- Added `gh-pages` dependency (version `^7.0.0`) for deployment
- Added `"deploy": "gh-pages -d dist"` script

**Code:**
```json
{
  "homepage": "https://ravindra-gogineni.github.io/ravindras-bloom/",
  "scripts": {
    "build": "vite build",
    "deploy": "gh-pages -d dist"
  },
  "devDependencies": {
    "gh-pages": "^7.0.0"
  }
}
```

**Why:** 
- `homepage` field tells build tools and libraries about the public URL
- `gh-pages` is the tool that pushes your `dist` folder to the `gh-pages` branch on GitHub
- The deploy script automates the deployment process

---

### 3. ✅ public/404.html - SPA Routing Support
**File:** `public/404.html` (NEW FILE)

**Content:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Redirecting...</title>
    <script>
        // GitHub Pages SPA routing workaround
        // This 404.html file handles client-side routing by redirecting
        // to index.html with the original path preserved as a query parameter
        
        const path = window.location.pathname.replace(/^\/ravindras-bloom/, '');
        sessionStorage.redirect = path;
        window.location.href = '/ravindras-bloom/';
    </script>
</head>
<body>
    Redirecting...
</body>
</html>
```

**Why:** GitHub Pages is a static host and doesn't support true URL rewriting. When users navigate to a route that doesn't exist as a file (e.g., `/ravindras-bloom/about`), GitHub Pages returns a 404. This file intercepts that 404 and redirects to `index.html` while preserving the original path in sessionStorage.

---

### 4. ✅ src/routes/__root.tsx - SPA Routing Handler
**File:** `src/routes/__root.tsx`

**Change:** Updated `RootComponent` to handle the redirect from the 404.html:
```typescript
function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();

  // GitHub Pages SPA routing: handle redirect from 404.html
  useEffect(() => {
    const redirect = sessionStorage.getItem("redirect");
    if (redirect) {
      sessionStorage.removeItem("redirect");
      router.navigate({ to: redirect });
    }
  }, [router]);

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
```

**Why:** When the 404.html redirects to index.html, this code reads the original path from sessionStorage and navigates the TanStack Router to that route, making the SPA routing transparent to the user.

---

## Asset Paths
✅ **Verified:** All assets use relative paths through Vite's asset import system (`@/assets/...`), which automatically handles path resolution with the base path configuration.

---

## Pre-Deployment Checklist

- [ ] GitHub repository created: `ravindra-gogineni/ravindras-bloom`
- [ ] Repository settings → Pages → Source set to: **Deploy from a branch**
- [ ] Repository settings → Pages → Branch set to: **gh-pages** (or create if needed)
- [ ] Git remote configured: `git remote add origin https://github.com/ravindra-gogineni/ravindras-bloom.git`
- [ ] Local changes committed: `git add . && git commit -m "Configure GitHub Pages deployment"`
- [ ] Main branch pushed: `git push origin main`

---

## Deployment Commands

### Step 1: Install Dependencies
Run this once to install all project dependencies including `gh-pages`:
```bash
npm install
```

### Step 2: Build the Project
Creates optimized production build in the `dist` folder:
```bash
npm run build
```

### Step 3: Deploy to GitHub Pages
Pushes the `dist` folder to the `gh-pages` branch:
```bash
npm run deploy
```

---

## Complete Terminal Commands (Copy & Paste)

Run these commands in order from your project root:

```bash
# Step 1: Install dependencies (run once)
npm install

# Step 2: Build the project
npm run build

# Step 3: Deploy to GitHub Pages
npm run deploy
```

---

## Verification

After deployment completes:

1. **Check GitHub Settings:**
   - Go to your repository on GitHub
   - Settings → Pages
   - Verify it shows: "Your site is live at https://ravindra-gogineni.github.io/ravindras-bloom/"

2. **Test the Site:**
   - Visit: https://ravindra-gogineni.github.io/ravindras-bloom/
   - Click through pages to verify routing works
   - Check browser console for any errors

3. **Verify Assets Load:**
   - Open DevTools (F12)
   - Go to Network tab
   - Refresh the page
   - Verify images and CSS load with status 200

---

## Troubleshooting

### Assets 404 (Images/CSS not loading)
**Problem:** Assets show 404 in browser console
**Solution:** Verify base path in `vite.config.ts` is `/ravindras-bloom/` (with leading and trailing slashes)

### Routes Not Working (404 on navigation)
**Problem:** Direct URL navigation shows GitHub 404 page
**Solution:** 
1. Ensure `public/404.html` exists
2. Run `npm run deploy` again
3. Wait 1-2 minutes for deployment to complete

### Build Fails
**Problem:** `npm run build` shows errors
**Solution:** 
1. Clear cache: `rm -rf .vite && npm ci`
2. Reinstall: `rm -rf node_modules package-lock.json && npm install`
3. Try building again: `npm run build`

### Changes Not Showing After Deploy
**Problem:** Site still shows old version
**Solution:**
1. Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
2. Clear browser cache
3. Check that `gh-pages` branch was updated:
   - Go to GitHub repository
   - View all branches
   - Verify `gh-pages` branch timestamp is recent

---

## Future Deployments

After initial setup, deploying updates is simple:

```bash
# Make changes to your code...

# 1. Build
npm run build

# 2. Deploy
npm run deploy

# 3. (Optional) Commit and push source code
git add .
git commit -m "Update site content"
git push origin main
```

---

## Important Notes

⚠️ **Keep Main Branch as Source:** The `main` (or `master`) branch contains your source code. The `gh-pages` branch contains the built files and is automatically managed by the `gh-pages` tool.

⚠️ **Do Not Manually Edit gh-pages Branch:** Let `npm run deploy` manage the `gh-pages` branch. Manual edits will be overwritten on next deploy.

✅ **Environment:** This configuration works with Bun, npm, pnpm, or yarn. Examples use `npm`, but substitute your package manager as needed.

---

## Reference Links

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [gh-pages npm Package](https://www.npmjs.com/package/gh-pages)
- [TanStack Router Documentation](https://tanstack.com/router/latest)
- [Vite Base Path Configuration](https://vitejs.dev/config/shared-options.html#base)
