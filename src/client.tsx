import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";

// Handle GitHub Pages routing with hash-based URLs
// Redirect non-hash paths to hash equivalents
if (typeof window !== "undefined" && !window.location.hash) {
  const currentPath = window.location.pathname;
  const basePath = "/ravindras-bloom";
  
  // If we're on /ravindras-bloom/ but not using hash, redirect to /#/
  if (currentPath.startsWith(basePath)) {
    const routePath = currentPath.slice(basePath.length) || "/";
    window.location.replace(basePath + "/#" + routePath);
  }
}

const router = getRouter();

// Handle GitHub Pages routing redirect from 404.html
const redirect = sessionStorage.getItem("redirect");
if (redirect) {
  sessionStorage.removeItem("redirect");
  router.navigate({ to: redirect });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
