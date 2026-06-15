import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";

// Handle GitHub Pages routing with hash-based URLs
if (typeof window !== "undefined") {
  const currentPath = window.location.pathname;
  const currentHash = window.location.hash;
  const basePath = "/ravindras-bloom";
  
  console.log("Client init - pathname:", currentPath, "hash:", currentHash);
  
  // If we're on /ravindras-bloom/ but not using hash, redirect to hash-based URL
  if (currentPath.startsWith(basePath) && !currentHash) {
    const routePath = currentPath.slice(basePath.length) || "/";
    console.log("Redirecting to hash-based URL:", basePath + "/#" + routePath);
    window.location.href = basePath + "/#" + routePath;
    // Exit early - don't continue initialization
    throw new Error("Redirecting to hash-based URL");
  }
}

const router = getRouter();

// Handle GitHub Pages routing redirect from 404.html
const redirect = sessionStorage.getItem("redirect");
if (redirect) {
  sessionStorage.removeItem("redirect");
  console.log("Navigating to redirect:", redirect);
  router.navigate({ to: redirect });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
